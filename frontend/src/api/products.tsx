import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  img: string;
  favorite: boolean;
  category: string;
  seller: {
    name: string;
    img: string;
  };
}

export function useGetProducts({
  search,
  page,
  sort,
}: {
  search?: string | null;
  sort?: string | null;
  page?: number | null;
}) {
  const query = useQuery({
    queryKey: ["products", search, page, sort],
    queryFn: async () => {
      const res = await axios.get<{ products: Product[] }>(
        `products?page=${page || 0}${search ? "&search=" + search : ""}${
          sort ? "&sort=" + sort : ""
        }`
      );
      return res.data.products;
    },
  });
  return query;
}

export function useAddProduct({ onSuccess }: { onSuccess: () => void }) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({
      product,
      getProgress,
    }: {
      product: {
        name: string;
        price: string;
        description: string;
        category: string;
        img?: File;
      };
      getProgress: (progress?: number) => void;
    }) => {
      const formData = new FormData();
      Object.keys(product).forEach((key) => {
        formData.append(
          key,
          product[
            key as "name" | "price" | "description" | "category" | "img"
          ] || ""
        );
      });
      const res = await axios.post<{ product: Product }>("products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress(e) {
          console.log(e);
          getProgress(e.progress);
        },
      });
      return res.data.product;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      onSuccess();
    },
  });
  return mutation;
}
