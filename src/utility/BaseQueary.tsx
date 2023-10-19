import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "./Axios/axiosBaseQuery";
import { getBaseUrl } from "./Axios/configUrl";
import { tagTypesList } from "@/features/api/typelist";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: getBaseUrl() }),
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});
