import { useNavigate } from 'react-router';
import { FaPlay, FaExternalLinkAlt } from 'react-icons/fa';
import type { Video } from "@/lib/types";

export default function Video(props: Video) {
  const navigate = useNavigate();

  const handlePlayClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(`/watch/${props.videoId}`);
  };

  const handleExternalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(props.videoUrl, '_blank');
  };

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform group">
      {/* Thumbnail Container */}
      <div className="relative overflow-hidden cursor-pointer" onClick={handlePlayClick}>
        <img 
          src={props.thumbnail} 
          alt={props.title} 
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Play Overlay */}
        <div data-video-overlay className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
          <div className="bg-orange-600 rounded-full p-3 opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
            <FaPlay className="h-4 w-4 text-white ml-0.5" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-white font-medium line-clamp-2 text-sm leading-tight flex-1 pr-2">
            {props.title}
          </h3>
          <button
            onClick={handleExternalClick}
            className="text-gray-400 hover:text-orange-500 transition-colors duration-200 flex-shrink-0"
            title="Abrir no YouTube"
          >
            <FaExternalLinkAlt className="h-3 w-3" />
          </button>
        </div>
        
        <p className="text-gray-400 text-xs">
          {new Date(props.publishedAt).toLocaleDateString("pt-BR", { 
            day: 'numeric',
            month: 'short',
            year: 'numeric'
          })}
        </p>

        <button
          onClick={handlePlayClick}
          className="mt-3 w-full bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          <FaPlay className="h-3 w-3" />
          <span>Assistir</span>
        </button>
      </div>
    </div>
  );
}