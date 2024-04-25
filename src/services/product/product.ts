// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/apis/" }),
  endpoints: (builder) => ({
   

    suggestProduct: builder.query<any, any>({
      query: (params) => {
        return {
          url: "product/ai-info",
          params
        };
      },
    }),

  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSuggestProductQuery } = productApi;
