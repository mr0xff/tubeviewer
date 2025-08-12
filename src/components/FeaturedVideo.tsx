import { useNavigate } from 'react-router';
import { FaPlay, FaClock } from 'react-icons/fa';
import type { Video } from '@/lib/types';

interface FeaturedVideoProps {
  video: Video;
}

export default function FeaturedVideo({ video }: FeaturedVideoProps) {
  const navigate = useNavigate();

  const handlePlayClick = () => {
    navigate(`/watch/${video.videoId}`);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return 'há 1 dia';
    if (diffDays < 7) return `há ${diffDays} dias`;
    if (diffDays < 30) return `há ${Math.floor(diffDays / 7)} semana${Math.floor(diffDays / 7) > 1 ? 's' : ''}`;
    if (diffDays < 365) return `há ${Math.floor(diffDays / 30)} mês${Math.floor(diffDays / 30) > 1 ? 'es' : ''}`;
    return `há ${Math.floor(diffDays / 365)} ano${Math.floor(diffDays / 365) > 1 ? 's' : ''}`;
  };

  return (
    <div className="relative w-full bg-black rounded-lg overflow-hidden shadow-2xl mb-8 group">
      {/* Video Thumbnail */}
      <div className="relative cursor-pointer" onClick={handlePlayClick}>
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          {/* High quality thumbnail */}
          <img
            src={video.thumbnail.replace('hqdefault', 'maxresdefault')}
            alt={video.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              // Fallback to regular quality if maxres is not available
              const target = e.target as HTMLImageElement;
              target.src = video.thumbnail;
            }}
          />
          
          {/* Gradient overlay */}
          <div data-video-overlay className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
          
          {/* Play button overlay */}
          <div data-video-overlay className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
            <div className="bg-orange-600 hover:bg-orange-700 rounded-full p-8 transform group-hover:scale-110 transition-all duration-300 shadow-2xl">
              <FaPlay className="h-10 w-10 text-white ml-1" />
            </div>
          </div>

          {/* Video info overlay */}
          <div data-video-overlay className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="flex items-center space-x-4 text-sm text-gray-300 mb-2">
              <div className="flex items-center space-x-1">
                <FaClock className="h-3 w-3" />
                <span>{formatDate(video.publishedAt)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Info */}
      <div className="p-6 bg-gray-900">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-3 line-clamp-2 leading-tight">
          {video.title}
        </h1>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-gray-400 text-sm">
            <span>
              {new Date(video.publishedAt).toLocaleDateString('pt-BR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>
          
          <button
            onClick={handlePlayClick}
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-3 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <FaPlay className="h-4 w-4" />
            <span>Assistir Agora</span>
          </button>
        </div>
      </div>
    </div>
  );
}

