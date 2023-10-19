import { tagTypes } from "@/features/api/typelist";
import { baseApi } from "@/utility/BaseQueary";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    deleteService: build.mutation({
      query: (id) => ({
        url: `/service/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.service],
    }),
  }),
});

export const { useDeleteServiceMutation } = authApi;
