import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const baseUrl = 'https://coinranking1.p.rapidapi.com';
const cryptoHeaders = {
    'X-RapidAPI-Key': 'f51b515492msh3791f7f729d4637p15d912jsnc1b624ef5ab0',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
const createRequest = (url) => ({ url, headers: cryptoHeaders });
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        })
    })

});

export const {
    useGetCryptosQuery,
} = cryptoApi;