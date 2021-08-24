export interface ResponseData<T> {
  msg?: string;
  code?: number;
  data?: T;
  total?: number;
}

export type ResponseDataProps<T> = {
  isBot?: boolean;
  resp: null | ResponseData<T>;
  meta?: {
    title?: string;
    description?: string;
    img?: string;
  };
};
