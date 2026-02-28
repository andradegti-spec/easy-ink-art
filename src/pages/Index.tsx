import { useState, useEffect } from "react";
import CountdownTimer from "@/components/CountdownTimer";
import PricingCard from "@/components/PricingCard";
import UpsellModal from "@/components/UpsellModal";
import ExerciseCarousel from "@/components/ExerciseCarousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Shield, Lock, Award, Mail, Printer, Clock, Target, Zap, CheckCircle, PenTool, Brain, Users, MessageCircle, Phone } from "lucide-react";
import PurchaseNotification from "@/components/PurchaseNotification";
import ViewerCount from "@/components/ViewerCount";

import antesImg from "@/assets/antes.png";
import depoisImg from "@/assets/depois.png";
import exercicio1 from "@/assets/exercicio-1.png";
import exercicio2 from "@/assets/exercicio-2.png";
import exercicio3 from "@/assets/exercicio-3.png";
import exercicio4 from "@/assets/exercicio-4.png";
import exercicio5 from "@/assets/exercicio-5.png";
import provaSocial1 from "@/assets/prova-social-1.png";
import provaSocial2 from "@/assets/prova-social-2.png";
import provaSocial3 from "@/assets/prova-social-3.png";
import provaSocial4 from "@/assets/prova-social-4.png";
import compradoresImg from "@/assets/compradores.png";
import expertImg from "@/assets/expert.png";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";

const Index = () => {
  const [showUpsell, setShowUpsell] = useState(false);

  useEffect(() => {
    // Load Wistia scripts
    const s1 = document.createElement("script");
    s1.src = "https://fast.wistia.com/player.js";
    s1.async = true;
    document.head.appendChild(s1);

    const s2 = document.createElement("script");
    s2.src = "https://fast.wistia.com/embed/bxe9wvxzvq.js";
    s2.async = true;
    s2.type = "module";
    document.head.appendChild(s2);

    return () => {
      document.head.removeChild(s1);
      document.head.removeChild(s2);
    };
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <UpsellModal isOpen={showUpsell} onClose={() => setShowUpsell(false)} />
      <PurchaseNotification />
      {/* Hero - Preto e Dourado */}
      <section className="section-hero py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs md:text-sm uppercase tracking-widest mb-6 opacity-50">
            Oferta válida somente hoje
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-5 leading-tight">
            TRANSFORME SUA LETRA EM{" "}
            <span className="gold-text underline decoration-4">15 MINUTOS POR DIA</span>
            {" "}— BONITA, LEGÍVEL E COM APARÊNCIA PROFISSIONAL
          </h1>

          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Aprenda a escrever com <strong>traços firmes</strong>, mais <strong>agilidade</strong> e uma <strong>letra bonita de verdade</strong> — com um método simples que funciona para <strong>adultos</strong> e <strong>crianças</strong>.
          </p>

          {/* Avatar bubbles */}
          <div className="flex items-center justify-center gap-1 mb-8">
            <div className="flex -space-x-3">
              {[avatar1, avatar2, avatar3, avatar4, avatar5].map((av, i) => (
                <img key={i} src={av} alt="" className="w-10 h-10 rounded-full border-2 border-primary object-cover" />
              ))}
            </div>
            <span className="text-sm opacity-80 ml-3">+8.590 alunos aprovaram ⭐⭐⭐⭐⭐</span>
          </div>

          <a href="#pricing" className="cta-button-gold inline-block animate-pulse-scale">
            QUERO TRANSFORMAR MINHA LETRA AGORA!
          </a>
        </div>
      </section>

      {/* Before/After - Dark */}
      <section className="section-dark py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-2">
            Esse é o resultado que você terá em apenas{" "}
            <span className="text-primary underline decoration-4">14 DIAS</span>:
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            <div>
              <p className="text-xl font-bold mb-3">ANTES</p>
              <img src={antesImg} alt="Caligrafia antes do método" className="rounded-xl shadow-lg w-full object-cover max-h-80" />
            </div>
            <div>
              <p className="text-xl font-bold mb-3">DEPOIS</p>
              <img src={depoisImg} alt="Caligrafia depois do método" className="rounded-xl shadow-lg w-full object-cover max-h-80" />
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-4 justify-center max-w-lg mx-auto">
            {[
              { icon: Target, text: "+300 exercícios para melhorar sua escrita" },
              { icon: Zap, text: "Receba na hora pelo WhatsApp e comece a praticar agora!" },
              { icon: CheckCircle, text: "Método testado e aprovado" },
            ].map((item, i) => (
              <div key={i} className="bg-white/15 backdrop-blur-sm rounded-2xl px-6 py-5 shadow-xl border border-primary/50 flex items-center gap-4 hover:scale-[1.02] transition-transform">
                <item.icon className="w-8 h-8 text-primary flex-shrink-0" />
                <span className="text-base md:text-lg font-extrabold text-white">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert */}
      <section className="section-purple py-16 px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <img
            src={expertImg}
            alt="Professora Ana Beatriz - Especialista em Caligrafia"
            className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover shadow-2xl border-4 border-primary flex-shrink-0"
          />
          <div className="text-center md:text-left">
            <p className="text-sm font-bold text-primary uppercase tracking-widest mb-1">Desenvolvido por</p>
            <h2 className="text-2xl md:text-4xl font-extrabold text-foreground mb-3">
              Profª Ana Beatriz
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Pedagoga e especialista em caligrafia com mais de <strong className="text-foreground">12 anos de experiência</strong> no ensino da escrita. 
              Já ajudou mais de <strong className="text-foreground">8.500 alunos</strong> a transformarem sua letra usando o método exclusivo que ela desenvolveu.
            </p>
          </div>
        </div>
      </section>

      {/* Explanation - Coral */}
      <section className="section-coral py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8">
            Sua letra não tem mais jeito? <span className="text-secondary underline decoration-4">ERRADO!</span>
          </h2>
          <div className="flex flex-col gap-5 max-w-md mx-auto">
            {[
              { icon: PenTool, text: "Reeduca sua mão e controle do movimento" },
              { icon: Brain, text: "Mais confiança e menos cansaço ao escrever" },
              { icon: Users, text: "Funciona para adultos e crianças" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-card/10 backdrop-blur-sm rounded-xl px-5 py-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-secondary-foreground" />
                </div>
                <span className="text-lg md:text-xl font-bold">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works - Teal */}
      <section className="section-teal py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-12 text-foreground">
            Como funciona o <span className="text-primary underline decoration-4">Método Caligrafia Fácil</span>?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Phone, title: "Chega no seu WhatsApp na hora", desc: "Logo após a compra, você recebe instantaneamente pelo WhatsApp os dados de acesso para baixar todos os materiais em PDF." },
              { icon: Printer, title: "Você imprime", desc: "O material contém mais de 300 páginas. Assim você pode imprimir quando e como desejar na sua casa!" },
              { icon: Clock, title: "Hora de treinar!", desc: "Agora sim! Treine 15 minutinhos por dia e veja resultados em até 3 dias." },
            ].map((step, i) => (
              <div key={i} className="bg-card rounded-2xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-extrabold mb-2 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video - Dark */}
      <section className="section-dark py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8">Veja mais sobre nosso método:</h2>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <div dangerouslySetInnerHTML={{ __html: `<style>wistia-player[media-id='bxe9wvxzvq']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/bxe9wvxzvq/swatch'); display: block; filter: blur(5px); padding-top:177.78%; }</style><wistia-player media-id="bxe9wvxzvq" aspect="0.5625"></wistia-player>` }} />
          </div>
          <ViewerCount />
          <div className="mt-8">
            <a href="#pricing" className="cta-button inline-block animate-pulse-scale">QUERO TRANSFORMAR MINHA LETRA AGORA!</a>
          </div>
        </div>
      </section>

      {/* Activities - Orange - Carrossel */}
      <section className="section-orange py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-foreground">Veja algumas das atividades que você vai receber:</h2>
          <p className="text-muted-foreground mb-10 text-lg">Ao adquirir você vai receber <strong className="text-foreground">mais de 300 atividades exclusivas</strong> para transformar sua escrita:</p>
          <ExerciseCarousel
            images={[
              { src: exercicio1, title: "" },
              { src: exercicio2, title: "" },
              { src: exercicio3, title: "" },
            ]}
          />
          <p className="text-2xl md:text-3xl font-extrabold text-foreground mt-10">...tudo isso e muito mais! 🚀</p>
        </div>
      </section>

      {/* Bonus - Purple */}
      <section className="section-purple py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-2 text-foreground">E você ainda ganha</h2>
          <p className="text-3xl md:text-5xl font-extrabold text-accent mb-10">+2 Bônus Exclusivos!</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-lg text-left">
              <span className="text-primary font-extrabold text-sm">#Bônus 1</span>
              <h3 className="text-xl font-extrabold mt-1 mb-3 text-foreground">Dicas e Técnicas</h3>
              <p className="text-muted-foreground">Ebook completo com dicas e técnicas para melhorar sua caligrafia, sugestão de materiais e plano de treino diário.</p>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-lg text-left">
              <span className="text-primary font-extrabold text-sm">#Bônus 2</span>
              <h3 className="text-xl font-extrabold mt-1 mb-3 text-foreground">Teste e diagnóstico de Disgrafia</h3>
              <p className="text-muted-foreground">Faça uma autoavaliação para identificar se você tem disgrafia, tipo e nível da dificuldade na escrita.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Green */}
      <section className="section-green py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-2 text-foreground">Realmente Funciona?</h2>
          <p className="text-muted-foreground text-lg mb-4">Vamos deixar que alguns dos mais de <strong className="text-foreground">8.590 alunos</strong> de todo Brasil respondam...</p>
          
          {/* Buyer avatars */}
          <div className="flex justify-center mb-8">
            <img src={compradoresImg} alt="Compradores que aprovaram o método" className="max-w-xs md:max-w-sm" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[provaSocial1, provaSocial2, provaSocial3, provaSocial4].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Depoimento de aluno ${i + 1}`}
                className="rounded-2xl shadow-lg w-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee - Coral (antes das ofertas) */}
      <section className="section-coral py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-secondary rounded-full flex items-center justify-center">
            <Shield className="w-8 h-8 text-secondary-foreground" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-3">RISCO ZERO</h2>
          <p className="text-lg font-bold opacity-95">Garantia incondicional de 7 dias. Não gostou? Devolvemos seu dinheiro. Simples assim.</p>
        </div>
      </section>

      {/* Pricing - Light */}
      <section id="pricing" className="section-light py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-accent mb-2">⏰ A oferta acaba em:</p>
          <CountdownTimer />
          <div className="grid md:grid-cols-2 gap-8 mt-12 items-start">
            <PricingCard title="Pacote Básico" features={["Combo +300 atividades caligrafia", "Módulo de coordenação motora", "Módulo de alfabeto cursivo", "Módulo de lettering", "7 dias de garantia"]} oldPrice="R$97" newPrice="R$9,90" onClick={() => setShowUpsell(true)} />
            <div>
              <PricingCard title="Pacote Premium" badge="MAIS VENDIDO 🔥" highlight features={["Tudo do pacote básico", "+250 exercícios caligrafia bônus", "Mega pack atividades infantis (+350 páginas)", "Apostila reforço para crianças", "Alfabeto letra de forma", "Alfabeto letra itálico", "Alfabeto letra medieval", "Alfabeto letra jutai côrte + vídeo", "Acesso vitalício + Atualizações mensais", "+ Bônus exclusivos!"]} oldPrice="R$137" newPrice="R$27,90" onClick={() => window.open("#", "_blank")} />
              <p className="text-center mt-3 text-sm text-muted-foreground">↑ Escolha mais popular</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Teal */}
      <section className="section-teal py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-center text-foreground">Saiba mais sobre nossas atividades</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {[
              { q: "Como vou receber o material de caligrafia?", a: "Logo após a confirmação do pagamento, você recebe instantaneamente pelo WhatsApp os dados de acesso para baixar todos os materiais em PDF!" },
              { q: "O método é para adultos ou crianças?", a: "O Método Caligrafia Fácil funciona para ambos! Temos exercícios específicos tanto para adultos quanto para crianças em fase de alfabetização." },
              { q: "O material é digital (PDF) ou é impresso?", a: "O material é 100% digital em formato PDF. Você recebe pelo WhatsApp na hora e pode imprimir quantas vezes quiser!" },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-card rounded-xl px-6 shadow-md border-none">
                <AccordionTrigger className="text-foreground font-bold text-left hover:no-underline">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="text-center mt-10">
            <a href="#pricing" className="cta-button-green inline-block animate-pulse-scale">COMPRAR AGORA</a>
          </div>
        </div>
      </section>

      {/* Footer - Dark */}
      <footer className="section-dark py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center gap-8 mb-8">
            {[{ icon: Shield, label: "Site Seguro" }, { icon: Lock, label: "Compra Protegida" }, { icon: Award, label: "Certificado de Segurança" }].map((badge, i) => (
              <div key={i} className="flex flex-col items-center gap-2 opacity-70">
                <badge.icon className="w-6 h-6" />
                <span className="text-xs">{badge.label}</span>
              </div>
            ))}
          </div>

          {/* Suporte destacado */}
          <div className="bg-card/10 backdrop-blur-sm border border-border/30 rounded-2xl p-6 md:p-8 text-center mb-8 max-w-md mx-auto">
            <h3 className="text-lg font-extrabold mb-2">Precisa de ajuda?</h3>
            <p className="text-sm opacity-80 mb-4">Nossa equipe está pronta para te atender!</p>
            <a
              href="https://wa.me/5566984511874"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full bg-[hsl(145,65%,42%)] px-6 py-4 rounded-full text-white font-bold text-base hover:scale-105 transition-transform"
            >
              <Phone className="w-5 h-5" />
              Suporte WhatsApp: (66) 98451-1874
            </a>
          </div>

          <p className="text-sm opacity-50 text-center">Todos os direitos reservados a Caligrafia Fácil LTDA • 2026</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
