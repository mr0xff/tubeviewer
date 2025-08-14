import { useState } from 'react';
import { useGetAllVideos } from '@/lib/hook';
import FeaturedVideo from '@/components/FeaturedVideo';
import Video from '@/components/Video';

export default function Home() {
  const [count, setCount] = useState(12);
  const { data: videos, isPending } = useGetAllVideos(count);

  const featuredVideo = videos?.[0];
  const otherVideos = videos?.slice(1) || [];

  const loadMore = () => {
    setCount(prev => prev + 6);
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Featured Video Section */}
        {featuredVideo && !isPending && (
          <div className="mb-12">
            <FeaturedVideo video={featuredVideo} />
          </div>
        )}

        {/* Loading State for Featured Video */}
        {isPending && (
          <div className="mb-12">
            <div className="relative w-full bg-gray-800 rounded-lg overflow-hidden shadow-2xl animate-pulse">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <div className="absolute inset-0 bg-gray-700"></div>
              </div>
              <div className="p-6 bg-gray-900">
                <div className="h-8 bg-gray-700 rounded mb-2"></div>
                <div className="h-4 bg-gray-700 rounded w-1/3"></div>
              </div>
            </div>
          </div>
        )}

        {/* Latest Videos Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Últimos vídeos
            </h2>
            
            {/* Filter/Sort Options (placeholder for future implementation) */}
            <div className="hidden md:flex items-center space-x-4 text-sm">
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                Mais recente
              </button>
              <span className="text-gray-600">|</span>
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                Filtrar
              </button>
            </div>
          </div>

          {/* Videos Grid */}
          {isPending ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="bg-gray-800 rounded-lg overflow-hidden animate-pulse">
                  <div className="h-48 bg-gray-700"></div>
                  <div className="p-4">
                    <div className="h-4 bg-gray-700 rounded mb-2"></div>
                    <div className="h-3 bg-gray-700 rounded w-2/3"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {otherVideos.map((video) => (
                <Video key={video.videoId} {...video} />
              ))}
            </div>
          )}

          {/* Load More Button */}
          {!isPending && otherVideos.length > 0 && (
            <div className="text-center mt-8">
              <button
                onClick={loadMore}
                disabled={isPending}
                className="bg-orange-600 hover:bg-orange-700 disabled:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 disabled:cursor-not-allowed"
              >
                {isPending ? 'Carregando...' : 'Carregar mais vídeos'}
              </button>
            </div>
          )}
        </div>

        {/* Empty State */}
        {!isPending && (!videos || videos.length === 0) && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-4">
              Nenhum vídeo encontrado
            </div>
            <p className="text-gray-500">
              Verifique sua conexão ou tente novamente mais tarde.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

