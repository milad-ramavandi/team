export interface IService {
    title:string;
    slug:string;
    description:string;
    list: string[];
}

export interface IServicePageProps {
  params: Promise<{ slug: string }>;
}