import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import { useGetAllVideos } from "@/lib/hook";
import Video from "@/components/Video";

export default function Videos() {
  const [count, setCount] = useState(12);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const [currentSearch, setCurrentSearch] = useState(searchQuery);
  
  const { data: videos, isPending, error } = useGetAllVideos(count, currentSearch);

  // Update search when URL params change
  useEffect(() => {
    setCurrentSearch(searchQuery);
    setCount(12); // Reset count when search changes
  }, [searchQuery]);

  const loadMore = () => {
    setCount(prev => prev + 12);
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {currentSearch ? `Resultados para "${currentSearch}"` : 'Todos os vídeos'}
              </h1>
              {!isPending && videos && (
                <p className="text-gray-400">
                  {videos.length} vídeo{videos.length !== 1 ? 's' : ''} encontrado{videos.length !== 1 ? 's' : ''}
                </p>
              )}
            </div>

            {/* Filter/Sort Options (placeholder for future implementation) */}
            <div className="hidden md:flex items-center space-x-4 text-sm">
              <select className="bg-gray-800 text-white border border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option value="date">Mais recente</option>
                <option value="relevance">Mais relevante</option>
                <option value="title">Título A-Z</option>
              </select>
            </div>
          </div>

          {/* Clear Search */}
          {currentSearch && (
            <div className="mb-6">
              <button
                onClick={() => {
                  setCurrentSearch('');
                  setCount(12);
                  window.history.pushState({}, '', '/videos');
                }}
                className="text-orange-500 hover:text-orange-400 transition-colors duration-200 text-sm"
              >
                ← Limpar busca e ver todos os vídeos
              </button>
            </div>
          )}
        </div>

        {/* Loading State */}
        {isPending && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-700"></div>
                <div className="p-4">
                  <div className="h-4 bg-gray-700 rounded mb-2"></div>
                  <div className="h-3 bg-gray-700 rounded w-2/3 mb-3"></div>
                  <div className="h-8 bg-gray-700 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-12">
            <div className="text-red-400 text-lg mb-4">
              Erro ao carregar vídeos
            </div>
            <p className="text-gray-500 mb-4">
              Ocorreu um erro ao buscar os vídeos. Tente novamente.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
            >
              Tentar novamente
            </button>
          </div>
        )}

        {/* Videos Grid */}
        {!isPending && !error && videos && videos.length > 0 && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
              {videos.map((video) => (
                <Video key={video.videoId} {...video} />
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center">
              <button
                onClick={loadMore}
                disabled={isPending}
                className="bg-orange-600 hover:bg-orange-700 disabled:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 disabled:cursor-not-allowed"
              >
                {isPending ? 'Carregando...' : 'Carregar mais vídeos'}
              </button>
            </div>
          </>
        )}

        {/* Empty State */}
        {!isPending && !error && (!videos || videos.length === 0) && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-4">
              {currentSearch 
                ? `Nenhum vídeo encontrado para "${currentSearch}"`
                : 'Nenhum vídeo encontrado'
              }
            </div>
            <p className="text-gray-500 mb-6">
              {currentSearch 
                ? 'Tente usar termos diferentes ou limpe a busca para ver todos os vídeos.'
                : 'Verifique sua conexão ou tente novamente mais tarde.'
              }
            </p>
            {currentSearch && (
              <button
                onClick={() => {
                  setCurrentSearch('');
                  setCount(12);
                  window.history.pushState({}, '', '/videos');
                }}
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
              >
                Ver todos os vídeos
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

