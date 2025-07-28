export interface IBlog {
  imageUrl: string;
  title: string;
}

interface IBlogAcf {
  videourl: string;
}

export interface IBlogPage {
  id?: number;
  title: string;
  excerpt?: string;
  slug?: string;
  first_image?: string;
  categories?: string[];
  category?: string;
  date?: string;
  acf?: IBlogAcf;
}

export interface IBlogsParams {
  page?:number;
  tag_id?:string;
  search?:string;
  category_id?:string;
}
export interface IBlogParams {
  slug?:string
}

interface IBlogPagination {
  total_posts:number;
  posts_per_page:number;
  current_page:number;
  total_pages:number
}

export interface IBlogsListResponse {
  posts:IBlogPage[];
  pagination:IBlogPagination
}

export interface ICategory {
  id?:number;
  count?:number;
  name?:string;
  link?:string;
  slug?:string
}

export interface IBlogPageProps {
  params: Promise<{ slug: string }>;
}
