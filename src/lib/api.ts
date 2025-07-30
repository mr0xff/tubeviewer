import axios from 'axios';
import type { Video } from '@/lib/types';

const instance = axios.create({ baseURL: "https://www.googleapis.com/youtube/v3/" });

export async function getVidoes(): Promise<Video[]>{
  const params = {
    key: import.meta.env.VITE_API_KEY,
    channelId: import.meta.env.VITE_CHANNEL_ID,
    part: 'snippet,id',
    order: 'date',
    maxResults: 50,
    type: 'video' // só vídeos, ignora playlists ou canais
  };

  const res = await instance.get("/search", { params });

  return res.data.items.map((item: any) => ({
    title: item.snippet.title,
    videoId: item.id.videoId,
    thumbnail: item.snippet.thumbnails.medium.url,
    publishedAt: item.snippet.publishedAt,
    videoUrl: `https://www.youtube.com/watch?v=${item.id.videoId}`
  }));
}