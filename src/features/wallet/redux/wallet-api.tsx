import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface GetCryptoPriceQuery {
  ids: string;
  vs_currencies: string;
  include_24hr_change: string;
  precision: string;
}

const baseUrl = 'https://api.coingecko.com/api/v3'

export const walletApi = createApi({
  reducerPath: "walletApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoPrice: builder.query<any, GetCryptoPriceQuery>({
      query({ ids, vs_currencies, include_24hr_change, precision }: GetCryptoPriceQuery) {
        return `/simple/price?ids=${ids}&vs_currencies=${vs_currencies}&include_24hr_change=${include_24hr_change}&precision=${precision}`;
      },
    })
  }),
});

export const { useGetCryptoPriceQuery } = walletApi;
