import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const zoolandapi = createApi({
    reducerPath: 'zoolandapi',
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:5000/'}),
    tagTypes:['animalsData'],
    endpoints:(builder) =>({
        getAllAnimalCollection: builder.query({
            query:()=>'animalCollection',
            providesTags:['animalsData'],
        }),

        animalDataAdd: builder.mutation({
            query:({newanimaldata})=>({
                url:'animalDataAdd',//use axiosSecure
                method:'POST',
                body:newanimaldata
            }),
            invalidatesTags:['donationtData']
        }),

    })
})


export const {useGetAllAnimalCollectionQuery, useAnimalDataAddMutation} = zoolandapi;