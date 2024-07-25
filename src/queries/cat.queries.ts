import { api } from '@/api/index.api';
import { Cat } from '@/interfaces/cat.interface';
import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

export const cat = {
  searchImages: (params: Cat.SearchImage.Params) => {
    return useQuery<AxiosResponse<Cat.SearchImage.Response[]>>({
      queryKey: ['search-images'],
      queryFn: () => {
        return api.cat.searchImages(params)
      },
    })
  }
}
