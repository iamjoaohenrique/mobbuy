export interface GetProfile {
  content?: (ContentEntity)[] | null;
  pageable: Pageable;
  totalPages: number;
  totalElements: number;
  last: boolean;
  sort: Sort;
  number: number;
  numberOfElements: number;
  first: boolean;
  size: number;
  empty: boolean;
}
export interface ContentEntity {
  idProfile: number;
  nameProfile: string;
  description: string;
}
export interface Pageable {
  sort: Sort;
  pageNumber: number;
  pageSize: number;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}
export interface Sort {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
}
