import { useParams, useNavigate } from 'react-router';
import { useGetAllVideos } from '@/lib/hook';
import { FaArrowLeft, FaExternalLinkAlt, FaCalendarAlt } from 'react-icons/fa';

export default function VideoWatch() {
  const { videoId } = useParams<{ videoId: string }>();
  const navigate = useNavigate();
  const { data: videos } = useGetAllVideos(50);

  const currentVideo = videos?.find(v => v.videoId === videoId);
  const relatedVideos = videos?.filter(v => v.videoId !== videoId).slice(0, 8) || [];

  if (!currentVideo) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="text-white text-xl mb-4">Vídeo não encontrado</div>
          <button
            onClick={() => navigate('/')}
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
          >
            Voltar ao início
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200 mb-6"
        >
          <FaArrowLeft className="h-4 w-4" />
          <span>Voltar</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Video Section */}
          <div className="lg:col-span-2">
            {/* Video Player */}
            <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl mb-6">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&fs=1&cc_load_policy=1&iv_load_policy=3&showinfo=0&controls=1`}
                  title={currentVideo.title}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Video Info */}
            <div className="bg-gray-900 rounded-lg p-6 mb-6">
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                {currentVideo.title}
              </h1>
              
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center space-x-4 text-gray-400">
                  <div className="flex items-center space-x-2">
                    <FaCalendarAlt className="h-4 w-4" />
                    <span>
                      {new Date(currentVideo.publishedAt).toLocaleDateString('pt-BR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => window.open(currentVideo.videoUrl, '_blank')}
                  className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  <FaExternalLinkAlt className="h-4 w-4" />
                  <span>Abrir no YouTube</span>
                </button>
              </div>
            </div>

            {/* Ficha Técnica */}
            <div className="bg-gray-900 rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-4">FICHA TÉCNICA</h2>
              <div className="text-gray-400 space-y-2">
                <p><strong className="text-white">Título:</strong> {currentVideo.title}</p>
                <p><strong className="text-white">Data de publicação:</strong> {new Date(currentVideo.publishedAt).toLocaleDateString('pt-BR')}</p>
                <p><strong className="text-white">ID do vídeo:</strong> {currentVideo.videoId}</p>
                <p><strong className="text-white">Plataforma:</strong> YouTube</p>
              </div>
            </div>
          </div>

          {/* Sidebar - Related Videos */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-6">Vídeos relacionados</h2>
              
              <div className="space-y-4">
                {relatedVideos.map((video) => (
                  <div
                    key={video.videoId}
                    className="flex space-x-3 cursor-pointer hover:bg-gray-800 p-3 rounded-lg transition-colors duration-200"
                    onClick={() => navigate(`/watch/${video.videoId}`)}
                  >
                    <div className="flex-shrink-0">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-24 h-16 object-cover rounded"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white text-sm font-medium line-clamp-2 mb-1">
                        {video.title}
                      </h3>
                      <p className="text-gray-400 text-xs">
                        {new Date(video.publishedAt).toLocaleDateString('pt-BR', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {relatedVideos.length === 0 && (
                <div className="text-center text-gray-400 py-8">
                  <p>Nenhum vídeo relacionado encontrado</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

