
import { useQuery } from "@tanstack/react-query";

interface FakeStoreProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  category: string;
}

const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch("https://fakestoreapi.com/products");
  
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  
  const data: FakeStoreProduct[] = await response.json();
  
  // Transform the API data to match our Product interface
  return data.map(item => ({
    id: item.id,
    name: item.title.toUpperCase(),
    imageUrl: item.image,
    price: item.price,
    category: item.category
  }));
};

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}
