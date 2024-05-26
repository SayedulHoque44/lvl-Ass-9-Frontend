import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";
import { IMeta } from "@/types/common";

export const claimApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createClaim: build.mutation({
      query: (data) => {
        return {
          url: "/claims",
          method: "POST",
          contentType: "application/json",
          data,
        };
      },
      invalidatesTags: [tagTypes.foundReports, tagTypes.claimReports],
    }),

    updateClaimReport: build.mutation({
      query: ({ data, id }) => ({
        url: `/claims/${id}`,
        method: "PUT",
        contentType: "application/json",
        data,
      }),
      invalidatesTags: [tagTypes.foundReports, tagTypes.claimReports],
    }),

    updateClaimStatusReport: build.mutation({
      query: ({ data, id }) => ({
        url: `/claims/claim-status/${id}`,
        method: "PUT",
        contentType: "application/json",
        data,
      }),
      invalidatesTags: [tagTypes.foundReports, tagTypes.claimReports],
    }),

    getALLClaimsItems: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/claims",
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

    getSingleClaimsItem: build.query({
      query: (id) => ({
        url: `/claims/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.foundReports],
    }),

    deleteSingleClaimsItem: build.mutation({
      query: (id) => ({
        url: `/claims/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.foundReports],
    }),
  }),
});

export const {
  useCreateClaimMutation,
  useUpdateClaimReportMutation,
  useDeleteSingleClaimsItemMutation,
  useGetALLClaimsItemsQuery,
  useGetSingleClaimsItemQuery,
  useUpdateClaimStatusReportMutation,
} = claimApi;
