import { useQuery } from "@tanstack/react-query";
import { getVidoes } from "./api";
import type { AxiosError } from "axios";

export function useGetAllVideos(count: number){
  return useQuery({
    queryKey: ["all_vidoes", count],
    queryFn: () => getVidoes(count)
  })
}

declare module '@tanstack/react-query' {
  interface Register {
    defaultError: AxiosError
  }
}

