export interface IBlogCard {
  imageUrl: string;
  title: string;
  slug?:string;
  onClick?: () => void;
  category?: string;
  date?: string;
  description?: string;
}
