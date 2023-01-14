import { UserModel } from '@/model/user';
import { apiClient } from './api-client';

export class UserService {
  public static search(): Promise<Array<UserModel>> {
    return apiClient
      .get('/users')
      .then((response: Array<object>) => response.map((item) => new UserModel(item)));
  }
}
