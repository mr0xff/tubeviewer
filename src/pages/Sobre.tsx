import { FaGlobe, FaEye, FaHandshake, FaUsers, FaVideo, FaStar } from 'react-icons/fa';

const achievements = [
  { year: '2024', title: 'Lançamento da Plataforma', description: 'Início oficial da Me Merece como hub de entretenimento PALOP' },
  { year: '2024', title: 'Primeira Produção Original', description: 'Estreia do primeiro conteúdo de humor original da plataforma' },
  { year: '2024', title: 'Parcerias Estratégicas', description: 'Estabelecimento de parcerias com criadores e influenciadores' },
];

const offerings = [
  {
    icon: <FaVideo className="h-6 w-6" />,
    title: 'Conteúdos de humor originais',
    description: 'Memes, vídeos curtos e esquetes que refletem a cultura dos PALOP'
  },
  {
    icon: <FaUsers className="h-6 w-6" />,
    title: 'Participações de artistas angolanos',
    description: 'Colaborações com talentos locais para promover a cultura africana'
  },
  {
    icon: <FaHandshake className="h-6 w-6" />,
    title: 'Parcerias com influenciadores',
    description: 'Colaborações estratégicas para ampliar o alcance do conteúdo'
  }
];

export default function Sobre() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sobre a Me Merece
          </h1>
        </div>

        {/* Main Description */}
        <div className="bg-gray-900 rounded-lg p-8 md:p-12 mb-12">
          <p className="text-xl text-gray-300 leading-relaxed text-center mb-8">
            "Me Merece" é uma plataforma de entretenimento e humor voltado aos países de língua portuguesa (PALOP), 
            com a missão de levar o melhor da nossa criatividade além-fronteiras!
          </p>
        </div>

        {/* Mission, Vision, and Offerings */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Mission */}
          <div className="bg-gray-900 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-orange-600 rounded-full p-3 mr-4">
                <FaGlobe className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Missão</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Conectar culturas, provocar risos e expandir o talento dos PALOP para além-fronteiras, 
              promovendo conteúdos autênticos, inteligentes e culturalmente ricos.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gray-900 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-orange-600 rounded-full p-3 mr-4">
                <FaEye className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Visão</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Ser a principal referência de entretenimento PALOP no mundo digital e 
              internacionalizar o humor africano em português.
            </p>
          </div>

          {/* What We Offer */}
          <div className="bg-gray-900 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-orange-600 rounded-full p-3 mr-4">
                <FaStar className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">O que oferecemos</h2>
            </div>
            <div className="space-y-4">
              {offerings.map((offering, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="text-orange-500 mt-1">
                    {offering.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-sm">{offering.title}</h3>
                    <p className="text-gray-400 text-xs">{offering.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Nossa Jornada</h2>
          <div className="bg-gray-900 rounded-lg p-8">
            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="bg-orange-600 rounded-full p-2 flex-shrink-0">
                    <span className="text-white font-bold text-sm">{achievement.year}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">{achievement.title}</h3>
                    <p className="text-gray-400">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="bg-gray-900 rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Nossos Parceiros
          </h2>
          
          <div className="text-center mb-8">
            <p className="text-gray-300 text-lg">
              Trabalhamos com os melhores para levar entretenimento de qualidade aos PALOP
            </p>
          </div>

          {/* Partners Grid - Placeholder for future partner logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <div 
                key={index}
                className="bg-gray-800 rounded-lg p-6 flex items-center justify-center h-24 hover:bg-gray-700 transition-colors duration-200"
              >
                <div className="text-center">
                  <FaHandshake className="h-8 w-8 text-gray-500 mx-auto mb-2" />
                  <span className="text-gray-500 text-xs">Parceiro {index + 1}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm">
              Interessado em ser nosso parceiro? Entre em contato conosco!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

