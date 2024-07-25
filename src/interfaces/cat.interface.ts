import { Request } from '@/interfaces/request.interface';

export namespace Cat {
  export namespace SearchImage {
    export type Response = {
      id:     string;
      url:    string;
      width:  number;
      height: number;
    }

    export type Params = Request.PaginationParams;
  }
}
