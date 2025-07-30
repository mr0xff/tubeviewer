import { useQuery } from "@tanstack/react-query";
import { getVidoes } from "./api";
import type { AxiosError } from "axios";

export function useGetAllVideos(){
  return useQuery({
    queryKey: ["all_vidoes"],
    queryFn: getVidoes
  })
}

declare module '@tanstack/react-query' {
  interface Register {
    defaultError: AxiosError
  }
}

