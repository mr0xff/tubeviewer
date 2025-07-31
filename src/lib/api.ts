import axios from 'axios';
import type { Video } from '@/lib/types';
import { BrowserCache } from './utils';

const instance = axios.create({ baseURL: "https://www.googleapis.com/youtube/v3/" });

const cache = new BrowserCache();

export async function getVidoes(count: number): Promise<Video[]>{
  const params = {
    key: import.meta.env.VITE_API_KEY,
    channelId: import.meta.env.VITE_CHANNEL_ID,
    part: 'snippet,id',
    order: 'date',
    maxResults: 100,
    type: 'video' // só vídeos, ignora playlists ou canais
  };

  const res = !cache.hasCache() 
    ? (await instance.get("/search", { params })).data
    : cache.getVideos()
  
  if(!cache.hasCache()){
    const formatedVideos = res.items.map((item: any) => ({
      title: item.snippet.title,
      videoId: item.id.videoId,
      thumbnail: item.snippet.thumbnails.medium.url,
      publishedAt: item.snippet.publishedAt,
      videoUrl: `https://www.youtube.com/watch?v=${item.id.videoId}`
    }));
    
    cache.setCache(formatedVideos);
  }

  return cache.getVideos().slice(0, count >= 100 ? 99:count);
}