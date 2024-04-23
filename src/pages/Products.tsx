import { Filters, ProductsContainer, PaginationContainer } from "@/components";
import { customFetch, type ProductsResponse, type ProductsResponseWithParams } from "../utils";
import { type LoaderFunction } from "react-router-dom";

const url = "/products";



export const loader: LoaderFunction = async ({
  request,
}): Promise<ProductsResponseWithParams> => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  const response = await customFetch<ProductsResponse>(url, { params });
  // console.log(response.data);
  return { ...response.data, params };
};

// export const loader: LoaderFunction = async (): Promise<ProductsResponse> => {
//   const response = await customFetch<ProductsResponse>(url);
//   return { ...response.data };
// };

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};
export default Products;