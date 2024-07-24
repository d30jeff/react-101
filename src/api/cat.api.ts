import { Cat } from '@/interfaces/cat.interface';
import { axios } from '@/utils/axios.util';
import { AxiosInstance, AxiosResponse } from 'axios';

export class CatApi {
  private readonly axios: AxiosInstance;

  constructor() {
    this.axios = axios;
  }

  searchImages(params: Cat.SearchImage.Params): Promise<AxiosResponse<Cat.SearchImage.Response[]>> {
    const { page = 1, limit = 10 } = params;

    return this.axios.get('/v1/images/search', {
      params: {
        page,
        limit
      }
    })
  }
}
