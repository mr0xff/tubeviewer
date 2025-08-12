import type { Video } from "./types";

export class BrowserCache {
  #storageKey = "tubeviewer";
  #cacheInMemory: Map<string, Video> = new Map(); // pode ser passado para Set's

  setCache(data: unknown){
    if(data){
      localStorage.setItem(this.#storageKey, JSON.stringify(data));
      this.#loadDataToMemory();
    }
  }

  #loadDataToMemory(){
    const data = localStorage.getItem(this.#storageKey);
    if(data){
      const parsed = JSON.parse(data) as Video[];
      parsed.forEach(data => {
        this.#cacheInMemory.set(data.videoId, data);
      });
    }
  }

  sync(){
    localStorage.clear();
  }

  getVideos(){
    this.#loadDataToMemory();
    console.log(Array.from(this.#cacheInMemory.values()))
    return Array.from(this.#cacheInMemory.values());
  }

  hasCache(){
    return this.getVideos().length > 0;
  }
}