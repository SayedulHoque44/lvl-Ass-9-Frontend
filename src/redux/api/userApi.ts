import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";
import { IMeta } from "@/types/common";

export const userAPi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    updateUserStatus: build.mutation({
      query: ({ data, id }) => ({
        url: `/user-status/${id}`,
        method: "PUT",
        contentType: "application/json",
        data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    updateUser: build.mutation({
      query: (data) => ({
        url: `/my-profile`,
        method: "PUT",
        contentType: "application/json",
        data,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    userChangePassword: build.mutation({
      query: (data) => ({
        url: `/change-password`,
        method: "PUT",
        contentType: "application/json",
        data,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    getALLUsers: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/user",
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: any, meta: IMeta) => {
        return {
          data: response,
          meta,
        };
      },
      providesTags: [tagTypes.user],
    }),

    getMyProfile: build.query({
      query: () => ({
        url: `/my-profile`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),

    getUserMeta: build.query({
      query: () => ({
        url: `/user-meta`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useGetALLUsersQuery,
  useGetMyProfileQuery,
  useGetUserMetaQuery,
  useUpdateUserStatusMutation,
  useUserChangePasswordMutation,
  useUpdateUserMutation,
} = userAPi;
