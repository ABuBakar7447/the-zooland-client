import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const zoolandapi = createApi({
    reducerPath: 'zoolandapi',
    baseQuery: fetchBaseQuery({baseUrl:'https://the-zooland-server.vercel.app/'}),
    tagTypes:['animalsData'],
    endpoints:(builder) =>({
        getAllAnimalCollection: builder.query({
            query:()=>'animalCollection',
            providesTags:['animalsData'],
        }),

        getAllCategory: builder.query({
            query:()=>'categoryCollection',
            providesTags:['animalsData'],
        }),

        animalDataAdd: builder.mutation({
            query:({newanimaldata})=>({
                url:'animalDataAdd',//use axiosSecure
                method:'POST',
                body:newanimaldata
            }),
            invalidatesTags:['animalsData']
        }),

        animalCategoryAdd: builder.mutation({
            query:({newanimalCategory})=>({
                url:'animalCategory',//use axiosSecure
                method:'POST',
                body:newanimalCategory
            }),
            invalidatesTags:['animalsData']
        }),

    })
})


export const {useGetAllAnimalCollectionQuery, useGetAllCategoryQuery, useAnimalDataAddMutation, useAnimalCategoryAddMutation} = zoolandapi;