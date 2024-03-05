import { createApi, fetchBaseQuery, } from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
    reducerPath: "eventsApi",
    tagTypes: ['events'],
    baseQuery: fetchBaseQuery(
        {
            baseUrl: 'http://localhost:4000/api/v1/eventsng',
            prepareHeaders: (headers, { getState }) => {
                const token = getState().user.user

                console.log(token);

                // If we have a token set in state, let's assume that we should be passing it.
                if (token) {
                    headers.set('authorization', `Bearer ${token}`)
                }

                return headers
            },
        },

    ),

    endpoints: (builder) => ({
        getAllEvents: builder.query({
            query: () => 'events/discover/',

        }),

        getUserEvents: builder.query({
            query: () => 'events/',
            providesTags: ['events']

        }),

        addEvent: builder.mutation({
            query: (data) => ({
                url: 'events/',
                method: 'POST',
                body: data
            }), 

            invalidatesTags: ['events'],

        }),
    })
})


export const { useGetAllEventsQuery, useGetUserEventsQuery, useAddEventMutation } = apiSlice