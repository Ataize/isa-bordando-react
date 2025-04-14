export interface GallerySectionProps {
  title: string;
  id: string;
  products: Product[];
}
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
}
