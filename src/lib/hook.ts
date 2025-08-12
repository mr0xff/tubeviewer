import { useQuery } from "@tanstack/react-query";
import { getVideos } from "./api";
import type { AxiosError } from "axios";

export function useGetAllVideos(count: number, searchQuery?: string){
  return useQuery({
    queryKey: ["all_videos", count, searchQuery],
    queryFn: () => getVideos(count, searchQuery)
  })
}

declare module '@tanstack/react-query' {
  interface Register {
    defaultError: AxiosError
  }
}

