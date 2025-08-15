import { FaUser, FaVideo, FaPen, FaYoutube } from 'react-icons/fa';

interface CastMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

const castMembers: CastMember[] = [
  {
    name: "Tomas de Matos",
    role: "Produtor Executivo",
    description: "Responsável pela coordenação geral dos projetos, supervisão da produção e gestão estratégica dos conteúdos. Com vasta experiência em entretenimento digital, Tomas lidera a equipe criativa e garante a qualidade dos produtos finais.",
    image: "/Tomas-Matos.png"
  },
  {
    name: "Gaspar Pereira Wão",
    role: "Director de Elenco, Actor",
    description: "Talentoso ator e diretor de elenco, Gaspar traz vida aos personagens com sua versatilidade e carisma. Além de atuar, é responsável pela seleção e direção dos talentos que participam das produções, garantindo performances autênticas e envolventes.",
    image: "/Gaspar-1.png"
  },
  {
    name: "Janet Máquina",
    role: "Roteirista",
    description: "Mente criativa por trás dos roteiros inovadores e divertidos. Janet desenvolve histórias que conectam com o público dos PALOP, criando narrativas autênticas que refletem a cultura e o humor africano em português com inteligência e originalidade.",
    image: "/Janet-Maquina.png"
  }
];

export default function Producoes() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Produções
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Conheça a equipe talentosa por trás dos conteúdos que levam o melhor do humor 
            dos PALOP para além-fronteiras, criando entretenimento autêntico e culturalmente rico.
          </p>
        </div>

        {/* Cast Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Nosso Elenco
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {castMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-gray-900 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 transform"
              >
                {/* Image */}
                <div className="relative h-90 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center"
                  />
                  
                  {/* Overlay with role */}
                  <div data-video-overlay className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <span className="text-orange-500 text-sm font-semibold uppercase tracking-wide">
                      {member.role}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {member.name}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Production Info */}
        <div className="bg-gray-900 rounded-lg p-8 md:p-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Sobre Nossas Produções
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-orange-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <FaVideo className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Conteúdo Original
                </h3>
                <p className="text-gray-400 text-sm">
                  Criamos conteúdos únicos e autênticos que refletem a cultura dos PALOP
                </p>
              </div>

              <div className="text-center">
                <div className="bg-orange-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <FaUser className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Talentos Locais
                </h3>
                <p className="text-gray-400 text-sm">
                  Promovemos artistas e criadores dos países de língua portuguesa
                </p>
              </div>

              <div className="text-center">
                <div className="bg-orange-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <FaPen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Roteiros Inteligentes
                </h3>
                <p className="text-gray-400 text-sm">
                  Desenvolvemos narrativas que conectam culturas e provocam risos
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* XPanto Studio Section */}
        <div className="bg-gray-900 rounded-lg p-8 md:p-12 mt-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              XPanto Studio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              A XPanto Studio é a produtora responsável por trazer à vida os conteúdos 
              originais da Me Merece. Com uma equipe dedicada e paixão pela criação, 
              garantimos a qualidade e a inovação em cada projeto.
            </p>
            <a 
              href="https://www.youtube.com/@XPantoStudio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-300"
            >
              <FaYoutube className="-ml-1 mr-3 h-5 w-5" />
              Visitar Canal no YouTube
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


