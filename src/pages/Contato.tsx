import { useState } from 'react';
import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin, FaTiktok } from 'react-icons/fa';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const socialLinks = [
  { name: 'YouTube', icon: <FaYoutube />, url: '#', color: 'hover:text-red-500' },
  { name: 'Instagram', icon: <FaInstagram />, url: '#', color: 'hover:text-pink-500' },
  { name: 'Facebook', icon: <FaFacebook />, url: '#', color: 'hover:text-blue-500' },
  { name: 'Twitter', icon: <FaTwitter />, url: '#', color: 'hover:text-blue-400' },
  { name: 'TikTok', icon: <FaTiktok />, url: '#', color: 'hover:text-white' },
  { name: 'LinkedIn', icon: <FaLinkedin />, url: '#', color: 'hover:text-blue-600' },
];

const contactInfo = [
  {
    icon: <FaEnvelope className="h-6 w-6" />,
    title: 'Email Geral',
    content: 'contato@memerece.com',
    description: 'Para dúvidas gerais e parcerias'
  },
  {
    icon: <FaEnvelope className="h-6 w-6" />,
    title: 'Imprensa',
    content: 'imprensa@memerece.com',
    description: 'Para jornalistas e assessoria de imprensa'
  },
  {
    icon: <FaEnvelope className="h-6 w-6" />,
    title: 'Comercial',
    content: 'comercial@memerece.com',
    description: 'Para propostas comerciais e publicidade'
  }
];

export default function Contato() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contato
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Entre em contato conosco! Estamos sempre prontos para ouvir suas ideias, 
            sugestões e propostas de parceria.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-900 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              Envie uma mensagem
            </h2>

            {submitMessage && (
              <div className="bg-green-600 text-white p-4 rounded-lg mb-6">
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nome completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Assunto *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Selecione um assunto</option>
                  <option value="parceria">Proposta de Parceria</option>
                  <option value="colaboracao">Colaboração de Conteúdo</option>
                  <option value="imprensa">Imprensa</option>
                  <option value="comercial">Proposta Comercial</option>
                  <option value="sugestao">Sugestão</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                  placeholder="Conte-nos mais sobre sua proposta ou dúvida..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-gray-900 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                Informações de Contato
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-orange-500 mt-1">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{info.title}</h3>
                      <p className="text-orange-400 font-medium">{info.content}</p>
                      <p className="text-gray-400 text-sm">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gray-900 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                Siga-nos nas Redes Sociais
              </h2>
              
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-200 text-gray-400 ${social.color}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="text-2xl mb-2">
                      {social.icon}
                    </div>
                    <span className="text-xs font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gray-900 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Horário de Atendimento
              </h2>
              <div className="text-gray-300 space-y-2">
                <p><strong>Segunda a Sexta:</strong> 9h às 18h</p>
                <p><strong>Sábado:</strong> 9h às 14h</p>
                <p><strong>Domingo:</strong> Fechado</p>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-gray-400 text-sm">
                  Respondemos todas as mensagens em até 24 horas durante dias úteis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

