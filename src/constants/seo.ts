export interface IMetaSeo {
  type: string;
  title: string;
  ogTitle: string;
  description: string;
  keywords: string;
  robots?: string;
  googlebot?: string;
  url: string;
  ogUrl: string;
  imageUrl: string;
  imageWidth: string;
  imageHeight: string;
  articlePublishedTime?: string;
  articleSection?: string;
}
