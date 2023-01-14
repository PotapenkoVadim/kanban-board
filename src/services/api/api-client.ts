import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosInstance,
  Method
} from 'axios';
import { configuration } from '@/configuration';

const baseApiURL = configuration.apiURL;

type DataOnly = <T = unknown>(
  endpoint: string,
  data?: any,
  options?: AxiosRequestConfig & { fullResponse?: false }
) => Promise<T>;

type FullResponse = <T = unknown>(
  endpoint: string,
  data?: any,
  options?: AxiosRequestConfig & { fullResponse: true }
) => Promise<AxiosResponse<T>>;

type ApiCall = DataOnly & FullResponse;

export class Api {
  public readonly post: ApiCall;
  public readonly get: ApiCall;
  public readonly patch: ApiCall;
  public readonly put: ApiCall;
  public readonly delete: ApiCall;

  public readonly httpClient: AxiosInstance;

  constructor(baseURL: string = baseApiURL, baseConfig?: AxiosRequestConfig) {
    const config: AxiosRequestConfig = {
      baseURL,
      ...baseConfig
    };

    this.httpClient = axios.create(config);

    this.post = this.request('post');
    this.get = this.request('get');
    this.patch = this.request('patch');
    this.put = this.request('put');
    this.delete = this.request('delete');
  }

  private request(
    method: Method,
    httpClient: AxiosInstance = this.httpClient
  ): ApiCall {
    function apiCall<T = any>(
      endpoint: string,
      data?: any,
      options?: AxiosRequestConfig & { fullResponse?: false }
    ): Promise<T>;
    function apiCall<T = any>(
      endpoint: string,
      data?: any,
      options?: AxiosRequestConfig & { fullResponse: true }
    ): Promise<AxiosResponse<T>>;
    async function apiCall<T = any>(
      endpoint: string,
      data?: any,
      options?: AxiosRequestConfig & { fullResponse?: boolean }
    ): Promise<AxiosResponse<T> | T> {
      const payload = ['get', 'delete'].includes(method)
        ? { params: data }
        : { data };

      try {
        const res = await httpClient.request({
          method,
          url: endpoint,
          withCredentials: true,
          ...options,
          ...payload
        });

        return options?.fullResponse ? res : res.data;
      } catch (error) {
        throw error.response;
      }
    }

    return apiCall;
  }
}

export const apiClient = new Api();
