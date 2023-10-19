/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { tagTypesList } from "@/features/api/typelist";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pc-service-backends.vercel.app/api/v1",

    prepareHeaders: async (headers, {  }) => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        headers.set("authorization", `${token}`);
      }

      return headers;
    },
  }),
  tagTypes: tagTypesList,
  endpoints: (_builder) => ({}),
});
