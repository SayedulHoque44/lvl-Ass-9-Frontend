import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";
import { IMeta } from "@/types/common";

export const foundItemAPi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createFoundReport: build.mutation({
      query: (data) => {
        return {
          url: "/found-items",
          method: "POST",
          contentType: "multipart/form-data",
          data,
        };
      },
      invalidatesTags: [tagTypes.foundReports],
    }),

    updateFoundReport: build.mutation({
      query: ({ data, id }) => ({
        url: `/found-items/${id}`,
        method: "PUT",
        contentType: "multipart/form-data",
        data,
      }),
      invalidatesTags: [tagTypes.foundReports],
    }),

    getALLFoundItems: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/found-items",
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: any, meta: IMeta) => {
        return {
          data: response,
          meta,
        };
      },
      providesTags: [tagTypes.foundReports],
    }),

    getSingleFoundItem: build.query({
      query: (id) => ({
        url: `/found-items/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.foundReports],
    }),

    deleteSingleFoundItem: build.mutation({
      query: (id) => ({
        url: `/found-items/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.foundReports],
    }),
  }),
});

export const {
  useCreateFoundReportMutation,
  useDeleteSingleFoundItemMutation,
  useGetALLFoundItemsQuery,
  useGetSingleFoundItemQuery,
  useUpdateFoundReportMutation,
} = foundItemAPi;
