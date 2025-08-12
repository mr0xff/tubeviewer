import axios from 'axios';
import type { Video } from '@/lib/types';
import { BrowserCache } from './utils';

const instance = axios.create({ 
  baseURL: "https://www.googleapis.com/youtube/v3/"
});

const cache = new BrowserCache();

export async function getVideos(count: number, searchQuery?: string): Promise<Video[]> {
  try {
    // Check cache first (only for non-search queries or if we have cached search results)
    if (!searchQuery && cache.hasCache()) {
      return cache.getVideos().slice(0, count >= 100 ? 99 : count);
    }

    const params = {
      key: import.meta.env.VITE_API_KEY,
      channelId: import.meta.env.VITE_CHANNEL_ID,
      part: 'snippet,id',
      order: 'date',
      maxResults: 100, // YouTube API limit is 50 per request
      type: 'video', // só vídeos, ignora playlists ou canais
      ...(searchQuery && { q: searchQuery }) // adiciona query de busca se fornecida
    };

    console.log('Making API request with params:', params);

    const response = await instance.get("/search", { params });
    const data = response.data;

    if (!data.items || !Array.isArray(data.items)) {
      throw new Error('Invalid response format from YouTube API');
    }

    const formattedVideos: Video[] = data.items.map((item: any) => ({
      title: item.snippet.title,
      videoId: item.id.videoId,
      thumbnail: item.snippet.thumbnails.medium.url ,
      publishedAt: item.snippet.publishedAt,
      videoUrl: `https://www.youtube.com/watch?v=${item.id.videoId}`
    }));

    // Cache only non-search results
    if (!searchQuery) {
      cache.setCache(formattedVideos);
    }
    
    return formattedVideos;

  } catch (error) {
    console.error('Error fetching videos:', error);
    
    // If it's a network error and we have cached data, return it
    if (!searchQuery && cache.hasCache()) {
      console.log('Returning cached data due to error');
      return cache.getVideos().slice(0, count >= 100 ? 99 : count);
    }
    
    // Re-throw the error to be handled by React Query
    throw error;
  }
}