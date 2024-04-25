// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/apis/" }),
  endpoints: (builder) => ({
   

    register: builder.mutation<any, any>({
      query: (body: any) => {
        return {
          url: "auth/sign-up",
          method: "POST",
          body: { ...body },
        };
      },
    }),

    login: builder.mutation<any, any>({
      query: (body: any) => {
        return {
          url: "auth/sign-in",
          method: "POST",
          body: { ...body },
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useRegisterMutation, useLoginMutation } = authApi;
