import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Mail, Phone, MapPin, Send, Menu } from "lucide-react";
import { useState } from "react";

import { toast } from "sonner";

export default function Home() {
  
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const whatsappNumber = "+5563984789080";
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os serviços de FIV da Agro FiV.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const emailAddress = "contato.agrofiv@gmail.com";
  const phoneNumber = "+55 (63) 98478-9080";

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const subject = "Nova Mensagem de Contato - Agro FiV";
      const body = `Nome: ${formData.name}\nEmail: ${formData.email}\nTelefone: ${formData.phone}\n\nMensagem:\n${formData.message}`;
      const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      window.location.href = mailtoLink;
      
      toast.success("Mensagem enviada! Entraremos em contato em breve.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      toast.error("Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200" style={{ borderBottomWidth: "2px" }}>
        <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-3">
            <img src="/logo-light.png" alt="Agro FiV" className="h-10 md:h-12" />
          </div>
          
          <nav className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('quem-somos')} className="text-gray-700 hover:text-green-700 transition font-medium text-sm cursor-pointer">Quem Somos</button>
            <button onClick={() => scrollToSection('servicos')} className="text-gray-700 hover:text-green-700 transition font-medium text-sm cursor-pointer">Serviços</button>
            <button onClick={() => scrollToSection('resultados')} className="text-gray-700 hover:text-green-700 transition font-medium text-sm cursor-pointer">Resultados</button>
            <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-green-700 transition font-medium text-sm cursor-pointer">Contato</button>
          </nav>
          
          <Button 
            className="bg-green-700 hover:bg-green-800 text-white font-semibold text-xs md:text-sm px-3 md:px-4 py-2 rounded-full" 
            onClick={() => window.location.href = whatsappLink}
          >
            <MessageCircle className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
            <span className="hidden sm:inline">Fale Conosco</span>
            <span className="sm:hidden">Contato</span>
          </Button>
          
          {/* Menu Hambúrguer Mobile */}
          <div className="md:hidden ml-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-4 mt-6">
                  <button onClick={() => { scrollToSection('quem-somos'); /* Fechar Sheet */ }} className="text-gray-700 hover:text-green-700 transition font-medium text-lg cursor-pointer text-left">Quem Somos</button>
                  <button onClick={() => { scrollToSection('servicos'); /* Fechar Sheet */ }} className="text-gray-700 hover:text-green-700 transition font-medium text-lg cursor-pointer text-left">Serviços</button>
                  <button onClick={() => { scrollToSection('resultados'); /* Fechar Sheet */ }} className="text-gray-700 hover:text-green-700 transition font-medium text-lg cursor-pointer text-left">Resultados</button>
                  <button onClick={() => { scrollToSection('contato'); /* Fechar Sheet */ }} className="text-gray-700 hover:text-green-700 transition font-medium text-lg cursor-pointer text-left">Contato</button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section - Responsivo */}
      <section 
        className="relative w-full bg-cover bg-center bg-[url('/midiasagrofiv4.png')] md:bg-[url('/fundo.png')]"
        style={{
          
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          minHeight: '500px',
          height: 'clamp(600px, 90vh, 900px)',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay suave */}
        <div className="absolute inset-0 bg-black/15"></div>
        
        {/* Botão posicionado para cobrir o botão ilustrativo */}
        {/* Conteúdo da Hero Section */}
        <div className="absolute inset-0 flex flex-col justify-center items-end text-white p-4 md:p-16">
          <div className="max-w-4xl mr-0 text-right mx-auto md:mx-0">
            <h1 
              className="text-4xl md:text-6xl font-extrabold mb-4 text-right"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}
            >
              TRANSFORMANDO<br/>GENÉTICA EM<br/>RENTABILIDADE.
            </h1>
            <div className="w-20 h-1 bg-green-500 mb-4 ml-auto"></div> {/* Traço verde */}
            <p className="text-lg md:text-xl font-semibold mb-8 max-w-2xl ml-auto text-right"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
            >
              A biotecnologia reprodutiva que une ciência e campo para acelerar o progresso genético do seu rebanho.
            </p>
            <div className="flex justify-end">
            <Button 
              size="lg" 
              className="bg-green-700 hover:bg-green-800 text-white font-normal text-base md:text-lg px-8 py-3 rounded-md flex items-center"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
              onClick={() => scrollToSection('contato')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
             ACELERE SEU MELHORAMENTO GENÉTICO            
             </Button>
             </div>
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section id="quem-somos" className="py-12 md:py-28 bg-white border-b-2 border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Imagem */}
            <div className="order-2 md:order-1 -ml-4 md:-ml-8 lg:-ml-16 xl:-ml-24 2xl:-ml-32 md:max-w-md max-w-xs mx-auto">
              <img 
                src="/midiasagrofiv3.png" 
                alt="Agro FiV - Quem Somos" 
                className="w-full h-auto"
                style={{ borderRadius: 0, marginLeft: 0 }}
              />
            </div>
            
            {/* Texto */}
            <div className="order-1 md:order-2 flex flex-col justify-center md:pl-8">
              <h2 
                className="text-3xl md:text-4xl font-black text-gray-900 mb-4"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}
              >
                AgroFiV
              </h2>
              <h3 
                className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 md:mb-6"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
              >
                Ciência, Confiança e Resultados no Campo.
              </h3>
               <p 
                className="text-base md:text-lg text-gray-700 mb-4 leading-relaxed"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
              >
                A AgroFiV nasceu com o propósito de levar a <strong>Fertilização In Vitro (FIV)</strong> com excelência e propósito ao produtor rural. Somos especialistas em biotecnologia reprodutiva bovina, atuando na vanguarda da ciência para garantir o aumento de produtividade e rentabilidade no campo.
              </p>
              <p className="text-base md:text-lg text-gray-700 mb-4 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}>
                Com equipe técnica experiente, planejamos e executamos projetos reprodutivos personalizados para cada fazenda, integrando <strong>PIVE, IATF, estação de monta</strong> e <strong>análise genômica</strong> para alcançar resultados mensuráveis e eficientes.
              </p>
              <p className="text-base md:text-lg text-gray-700 mb-4 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}>
                Nosso foco está em avaliar índices zootécnicos e financeiros e transformar dados em decisões que elevam o desempenho e a lucratividade do rebanho.
              </p>
               <p 
                className="text-base md:text-lg text-gray-700 leading-relaxed"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
              >
                <strong>Nosso Diferencial:</strong> Enquanto o produtor busca maximizar ganhos, a AgroFiV entrega o melhor da seleção genética bovina: produtividade, eficiência e resultados reais.
              </p>
              <p className="text-base md:text-lg text-gray-700 mb-4 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}>
                Através de identificação individual, softwares avançados e principalmente a análise genômica, aceleramos a evolução genética do rebanho em poucos anos de trabalho.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}>
                <strong>Na Agro FiV, o futuro do seu rebanho começa agora, com ciência, confiança e resultado.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-12 md:py-28 bg-gray-50 border-b-2 border-gray-200">
        <div className="container mx-auto px-4">
          <div className="mb-12 md:mb-16">
            <h2 
              className="text-3xl md:text-4xl font-black text-gray-900 mb-4"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}
            >
              Serviços
            </h2>
             <p 
              className="text-lg md:text-xl text-gray-700 max-w-2xl"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
            >
              Soluções de biotecnologia que garantem o avanço genético e o retorno do seu investimento.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Planejamento Genético Estratégico",
                description: "O Planejamento Genético Estratégico da Agro FiV começa com uma análise completa do rebanho e a definição das melhores matrizes e estratégias reprodutivas para cada fazenda. Nosso objetivo é maximizar os lucros e resultados da propriedade por meio de decisões técnicas e personalizadas, traçadas desde o início do projeto e acompanhadas de forma contínua.",
                icon: "📊"
              },
              {
                title: "Produção de Embriões",
                description: "Em parceria com laboratórios especializados, otimizamos a eficiência reprodutiva de doadoras de alta performance, produzindo embriões de qualidade superior e acelerando o melhoramento genético de rebanhos de corte e leite. Realizamos seleção de doadoras e receptoras, aspiração folicular (OPU) e transferência de embriões (TE), garantindo resultados consistentes e rastreáveis.",
                icon: "🧬"
              },
              {
                title: "IATF",
                description: "A IATF faz parte do nosso método integrado: planejamento, avaliação, identificação e seleção de touros, rotina de manejo e vacinação antes da estação de monta. Atuamos dentro da fazenda com treinamentos periódicos e acompanhamento técnico, apresentando resultados claros e mensuráveis para próximas decisões baseadas em dados.",
                icon: "💉"
              }
            ].map((service, idx) => (
          <div key={idx} className="border-2 border-gray-300 p-6 md:p-8 bg-white hover:border-green-700 transition rounded-lg">    <div className="text-4xl md:text-5xl mb-4">{service.icon}</div>
                <h3 
                  className="text-lg md:text-xl font-black text-gray-900 mb-4"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}
                >
                  {service.title}
                </h3>
                 <p 
                  className="text-sm md:text-base text-gray-700 mb-6 leading-relaxed"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
                >
                  {service.description}
                </p>
<Button 
                  className="bg-green-700 hover:bg-green-800 text-white font-semibold w-full text-sm md:text-base"
                  style={{ borderRadius: 0 }}
                  onClick={() => window.location.href = whatsappLink}
                >
                  Saiba Mais
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section id="resultados" className="py-12 md:py-28 bg-white border-b-2 border-gray-200">
        <div className="container mx-auto px-4">
          <h2 
            className="text-3xl md:text-4xl font-black text-gray-900 mb-4"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}
          >
            Resultados
          </h2>
          <p 
            className="text-lg md:text-xl text-gray-700 mb-8 md:mb-12 max-w-2xl"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
          >
            Quem confia na genética Agro FiV.
          </p>
          
          <div className="border-4 border-green-700 p-6 md:p-12 bg-gray-50">
             <p 
              className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
            >
              A confiança do produtor rural é o nosso maior resultado. Este espaço está reservado para inserir:
            </p>
            <ul className="space-y-3 md:space-y-4 text-gray-700 mb-6 md:mb-8">
              <li className="flex items-start gap-3 md:gap-4">
                <span className="text-green-700 font-bold text-lg md:text-xl flex-shrink-0">▪</span>
                <span 
                  className="text-base md:text-lg"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
                >
                  <strong>Depoimentos</strong> de clientes satisfeitos (texto e/ou vídeo).
                </span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <span className="text-green-700 font-bold text-lg md:text-xl flex-shrink-0">▪</span>
                <span 
                  className="text-base md:text-lg"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
                >
                  <strong>Números de Sucesso</strong> (Ex: +X mil embriões produzidos, X% de taxa de prenhez).
                </span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <span className="text-green-700 font-bold text-lg md:text-xl flex-shrink-0">▪</span>
                <span 
                  className="text-base md:text-lg"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
                >
                  <strong>Logos de Parceiros</strong> (se houver).
                </span>
              </li>
            </ul>
            <Button 
              className="bg-green-700 hover:bg-green-800 text-white font-semibold text-sm md:text-base"
              style={{ borderRadius: 0 }}
              onClick={() => window.location.href = whatsappLink}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Conheça Nossos Resultados
            </Button>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-12 md:py-28 bg-gray-50 border-b-2 border-gray-200">
        <div className="container mx-auto px-4">
          <h2 
            className="text-3xl md:text-4xl font-black text-gray-900 mb-4"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}
          >
            Contato
          </h2>
          <p 
            className="text-lg md:text-xl text-gray-700 mb-8 md:mb-12 max-w-2xl"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
          >
            Pronto para transformar a genética do seu rebanho? Entre em contato hoje mesmo.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            {/* Formulário */}
            <div className="border-2 border-gray-300 p-6 md:p-8 bg-white" style={{ borderRadius: 0 }}>
              <h3 
                className="text-2xl md:text-2xl font-black text-gray-900 mb-4 md:mb-6"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}
              >
                Envie uma Mensagem
              </h3>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label 
                    className="block text-xs md:text-sm font-bold text-gray-900 mb-2"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
                  >
                    Nome Completo *
                  </label>
                  <Input 
                    name="name" 
                    value={formData.name} 
                    onChange={handleFormChange}
                    placeholder="Seu nome" 
                    required 
                    style={{ borderRadius: 0, borderWidth: "2px" }}
                    className="border-gray-300 text-sm"
                  />
                </div>
                <div>
                  <label 
                    className="block text-xs md:text-sm font-bold text-gray-900 mb-2"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
                  >
                    Email *
                  </label>
                  <Input 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleFormChange}
                    placeholder="seu@email.com" 
                    required 
                    style={{ borderRadius: 0, borderWidth: "2px" }}
                    className="border-gray-300 text-sm"
                  />
                </div>
                <div>
                  <label 
                    className="block text-xs md:text-sm font-bold text-gray-900 mb-2"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
                  >
                    Telefone/WhatsApp
                  </label>
                  <Input 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleFormChange}
                    placeholder="(63) 98478-9080" 
                    style={{ borderRadius: 0, borderWidth: "2px" }}
                    className="border-gray-300 text-sm"
                  />
                </div>
                <div>
                  <label 
                    className="block text-xs md:text-sm font-bold text-gray-900 mb-2"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
                  >
                    Mensagem *
                  </label>
                  <Textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleFormChange}
                    placeholder="Conte-nos mais sobre sua propriedade e objetivos..." 
                    rows={4}
                    required 
                    style={{ borderRadius: 0, borderWidth: "2px" }}
                    className="border-gray-300 text-sm"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-green-700 hover:bg-green-800 text-white font-bold text-sm md:text-base"
                  style={{ borderRadius: 0 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "ENVIAR MENSAGEM"}
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>

            {/* Informações de Contato */}
            <div className="space-y-4 md:space-y-6">
              <div className="border-2 border-gray-300 p-6 md:p-8 bg-white" style={{ borderRadius: 0 }}>
                <div className="flex items-center gap-2 md:gap-3 mb-4">
                  <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-green-700 flex-shrink-0" />
                  <h3 
                    className="text-lg md:text-xl font-black text-gray-900"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}
                  >
                    WhatsApp
                  </h3>
                </div>
                 <p 
                  className="text-sm md:text-base text-gray-700 mb-4"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
                >
                  Envie uma mensagem direto pelo WhatsApp para um atendimento rápido.
                </p>
                <Button 
                  className="w-full bg-green-700 hover:bg-green-800 text-white font-bold text-sm md:text-base"
                  style={{ borderRadius: 0 }}
                  onClick={() => window.location.href = whatsappLink}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Abrir WhatsApp
                </Button>
                 <p 
                  className="text-xs md:text-sm text-gray-600 mt-4 text-center font-semibold whitespace-nowrap"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {phoneNumber}
                </p>
              </div>

              <div className="border-2 border-gray-300 p-6 md:p-8 bg-white" style={{ borderRadius: 0 }}>
                <div className="flex items-center gap-2 md:gap-3 mb-4">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-green-700 flex-shrink-0" />
                  <h3 
                    className="text-lg md:text-xl font-black text-gray-900"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}
                  >
                    Email
                  </h3>
                </div>
                 <p 
                  className="text-sm md:text-base text-gray-700 mb-4"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
                >
                  Envie um email com suas dúvidas ou solicitações.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full border-green-700 text-green-700 hover:bg-green-50 font-bold text-sm md:text-base"
                  style={{ borderRadius: 0, borderWidth: "2px" }}
                  onClick={() => window.location.href = `mailto:${emailAddress}`}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Enviar Email
                </Button>
                 <p 
                  className="text-xs md:text-sm text-gray-600 mt-4 text-center font-semibold break-all"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {emailAddress}
                </p>
              </div>

              <div className="border-2 border-gray-300 p-6 md:p-8 bg-white" style={{ borderRadius: 0 }}>
                <div className="flex items-center gap-2 md:gap-3 mb-4">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-green-700 flex-shrink-0" />
                  <h3 
                    className="text-lg md:text-xl font-black text-gray-900"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}
                  >
                    Localização
                  </h3>
                </div>
                 <p 
                  className="text-sm md:text-base text-gray-700 font-semibold"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Agro FiV<br />
                  Araguaína - Tocantins, Brasil
                </p>
                 <p 
                  className="text-xs md:text-sm text-gray-600 mt-4"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
                >
                  Especialistas em Fertilização In Vitro e Biotecnologia Reprodutiva Bovina.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 md:py-16 border-t-4 border-green-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
            <div>
              <img src="/logo-dark.png" alt="Agro FiV" className="h-10 md:h-12 mb-4" />
               <p 
                className="text-gray-400 text-xs md:text-sm leading-relaxed"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
              >
                Transformando genética em rentabilidade.
              </p>
            </div>
            <div>
              <h4 
                className="font-black text-white mb-3 md:mb-4 text-xs md:text-sm"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}
              >
                NAVEGAÇÃO
              </h4>
              <ul className="space-y-2 text-gray-400 text-xs md:text-sm">
                <li><button onClick={() => scrollToSection('quem-somos')} className="hover:text-white transition cursor-pointer" style={{ fontFamily: "'Poppins', sans-serif" }}>Quem Somos</button></li>
                <li><button onClick={() => scrollToSection('servicos')} className="hover:text-white transition cursor-pointer" style={{ fontFamily: "'Poppins', sans-serif" }}>Serviços</button></li>
                <li><button onClick={() => scrollToSection('resultados')} className="hover:text-white transition cursor-pointer" style={{ fontFamily: "'Poppins', sans-serif" }}>Resultados</button></li>
                <li><button onClick={() => scrollToSection('contato')} className="hover:text-white transition cursor-pointer" style={{ fontFamily: "'Poppins', sans-serif" }}>Contato</button></li>
              </ul>
            </div>
            <div>
              <h4 
                className="font-black text-white mb-3 md:mb-4 text-xs md:text-sm"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}
              >
                CONTATO
              </h4>
              <ul className="space-y-2 text-gray-400 text-xs md:text-sm">
                <li><a href={`tel:${phoneNumber}`} className="hover:text-white transition flex items-center gap-2" style={{ fontFamily: "'Poppins', sans-serif" }}><Phone className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" /> <span className="truncate">{phoneNumber}</span></a></li>
                <li><a href={`mailto:${emailAddress}`} className="hover:text-white transition flex items-center gap-2" style={{ fontFamily: "'Poppins', sans-serif" }}><Mail className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" /> <span className="truncate">{emailAddress}</span></a></li>
                <li className="flex items-center gap-2" style={{ fontFamily: "'Poppins', sans-serif" }}><MapPin className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" /> Araguaína - TO</li>
              </ul>
            </div>
            <div>
              <h4 
                className="font-black text-white mb-3 md:mb-4 text-xs md:text-sm"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}
              >
                REDES SOCIAIS
              </h4>
               <p 
                className="text-gray-400 text-xs md:text-sm mb-3"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
              >
                Siga-nos para atualizações e conteúdo exclusivo.
              </p>
              <div className="flex gap-3">
                <a href="#" className="bg-gray-800 hover:bg-green-700 transition p-2 border border-gray-700 text-sm">📘</a>
                <a href="#" className="bg-gray-800 hover:bg-green-700 transition p-2 border border-gray-700 text-sm">📷</a>
                <a href="#" className="bg-gray-800 hover:bg-green-700 transition p-2 border border-gray-700 text-sm">💼</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 md:pt-8 text-center text-gray-400 text-xs md:text-sm" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}>
             <p>&copy; 2024 Agro FiV. Todos os direitos reservados. | Transformando genética em rentabilidade.</p>
          </div>
        </div>
      </footer>

      {/* Botão Flutuante WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-700 hover:bg-green-800 text-white p-3 md:p-4 shadow-lg hover:shadow-xl transition-all z-50 flex items-center justify-center border-2 border-green-600 rounded-full"
        title="Enviar mensagem via WhatsApp"
      >
        <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
      </a>
    </div>
  );
}
