import { createApi, fetchBaseQuery, } from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
    reducerPath: "eventsApi",
    tagTypes: ['events'],
    baseQuery: fetchBaseQuery(
        {
            baseUrl: 'https://eventsng-v1.onrender.com/api/v1/eventsng' || 'http://localhost:4000/api/v1/eventsng',
            // baseUrl: 'http://localhost:4000/api/v1/eventsng' ,

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

        getStats: builder.query({
            query: () => 'events/stats'
        }),
        getAllEvents: builder.query({
            query: () => 'events/discover/',

        }),

        getMerch: builder.query({
            query: (id) => `merch/${id}`
        }),

        getUserEvents: builder.query({
            query: () => 'events/',
            providesTags: ['events']

        }),

        getUserEventsSingle: builder.query({
            query: (id) => `events/${id}`,
            providesTags: ['singleEvent']
        }),

        addEvent: builder.mutation({
            query: (data) => ({
                url: 'events/',
                method: 'POST',
                body: data
            }),

            invalidatesTags: ['events'],

        }),

        uploadImage: builder.mutation({
            query: (data) => ({
                url: 'events/uploadImage',
                method: 'POST',
                body: data
            })

        })
    })
})


export const {
    useGetAllEventsQuery,
    useGetUserEventsQuery,
    useAddEventMutation,
    useUploadImageMutation,
    useGetStatsQuery,
    useGetMerchQuery,
    useGetUserEventsSingleQuery 
} = apiSlice