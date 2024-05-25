import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";
import { IMeta } from "@/types/common";

export const lostItemApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createLostReport: build.mutation({
      query: (data) => {
        // console.log(data);
        return {
          url: "/lost-items",
          method: "POST",
          contentType: "application/json",
          data,
        };
      },
      invalidatesTags: [tagTypes.lostReports],
    }),

    updateLostReport: build.mutation({
      query: ({ data, id }) => ({
        url: `/lost-items/${id}`,
        method: "PUT",
        contentType: "application/json",
        data,
      }),
      invalidatesTags: [tagTypes.lostReports],
    }),

    getAllLostItems: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/lost-items",
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: any, meta: IMeta) => {
        return {
          data: response,
          meta,
        };
      },
      providesTags: [tagTypes.lostReports],
    }),

    getSingleLostItem: build.query({
      query: (id) => ({
        url: `/lost-items/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.lostReports],
    }),

    deleteSingleLostItem: build.mutation({
      query: (id) => ({
        url: `/lost-items/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.lostReports],
    }),
  }),
});

export const {
  useCreateLostReportMutation,
  useUpdateLostReportMutation,
  useGetAllLostItemsQuery,
  useGetSingleLostItemQuery,
  useDeleteSingleLostItemMutation,
} = lostItemApi;
