import CountdownTimer from "@/components/CountdownTimer";
import PricingCard from "@/components/PricingCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Shield, Lock, Award, Mail, Printer, Clock } from "lucide-react";

import antesImg from "@/assets/antes.png";
import depoisImg from "@/assets/depois.png";
import exercicio1 from "@/assets/exercicio-1.png";
import exercicio2 from "@/assets/exercicio-2.png";
import exercicio3 from "@/assets/exercicio-3.png";
import exercicio4 from "@/assets/exercicio-4.png";
import exercicio5 from "@/assets/exercicio-5.png";

const Index = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero */}
      <section className="section-hero py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm md:text-base font-bold uppercase tracking-[0.3em] mb-3 opacity-70">
            ⏰ OFERTA ACABA EM:
          </p>
          <CountdownTimer />

          <h1 className="text-3xl md:text-5xl font-extrabold mt-10 mb-5 leading-tight">
            CONQUISTE UMA LETRA BONITA, LEGÍVEL E PROFISSIONAL EM{" "}
            <span className="gold-text">15 MINUTOS POR DIA!</span>
          </h1>

          <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto mb-10">
            Se você quer ter uma letra bonita e redondinha, escrever com mais agilidade e traços
            firmes, o <strong className="gold-text">Método Caligrafia Fácil</strong> é pra você! Serve para adultos e crianças.
          </p>

          <a href="#pricing" className="cta-button inline-block animate-pulse-scale">
            QUERO TRANSFORMAR MINHA LETRA AGORA!
          </a>
        </div>
      </section>

      {/* Before/After */}
      <section className="section-alt py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-2">
            Esse é o resultado que você terá em apenas{" "}
            <span className="gold-text">14 DIAS</span>:
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            <div>
              <p className="text-xl font-bold mb-3 opacity-70">ANTES 😩</p>
              <img src={antesImg} alt="Caligrafia antes do método" className="rounded-xl gold-border w-full object-cover max-h-80" />
            </div>
            <div>
              <p className="text-xl font-bold mb-3 gold-text">DEPOIS 😁</p>
              <img src={depoisImg} alt="Caligrafia depois do método" className="rounded-xl gold-border gold-glow w-full object-cover max-h-80" />
            </div>
          </div>

          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center max-w-3xl mx-auto">
            {[
              "+300 exercícios para melhorar sua escrita",
              "Acesso Imediato: Baixe, imprima e comece a praticar agora!",
              "Método testado e aprovado",
            ].map((text, i) => (
              <div key={i} className="bg-card gold-border rounded-xl p-4 flex items-start gap-3 flex-1">
                <span className="gold-text font-bold text-xl">✓</span>
                <span className="text-sm font-semibold">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explanation */}
      <section className="section-accent py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-6">
            Você acha que sua letra não tem mais jeito? ERRADO!
          </h2>
          <p className="text-base md:text-lg leading-relaxed opacity-90">
            Treinar caligrafia da forma correta com uma apostila focada em coordenação motora,
            movimentos corretos, firmeza de traço e construção das letras é o que realmente
            transforma a escrita. Em vez de apenas "copiar letras", você reeduca a mão, o cérebro e
            o controle do movimento, ganhando mais precisão e velocidade.
          </p>
          <p className="text-base md:text-lg leading-relaxed mt-4 opacity-90">
            O resultado não é só uma letra mais bonita, é <strong>mais confiança ao escrever</strong>,
            menos cansaço e uma escrita clara em qualquer situação.
          </p>
          <p className="mt-4 text-base md:text-lg font-bold">
            O método é eficiente tanto para adultos quanto para crianças em fase de alfabetização.
          </p>
        </div>
      </section>

      {/* How it Works */}
      <section className="section-gold py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-12">
            Como funciona o <span className="gold-text">Método Caligrafia Fácil</span>?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Mail, title: "Chega no seu e-mail em PDF", desc: "Todos os materiais são digitais. Logo após a compra é enviado para seu e-mail em PDF e você pode baixar quantas vezes quiser." },
              { icon: Printer, title: "Você imprime", desc: "O material contém mais de 300 páginas. Assim você pode imprimir quando e como desejar na sua casa!" },
              { icon: Clock, title: "Hora de treinar!", desc: "Agora sim! Treine 15 minutinhos por dia e veja resultados em até 3 dias." },
            ].map((step, i) => (
              <div key={i} className="bg-card gold-border rounded-2xl p-6 gold-glow text-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-extrabold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="section-dark py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-8">
            Veja mais sobre nosso método:
          </h2>
          <div className="rounded-2xl overflow-hidden gold-border gold-glow">
            <div
              dangerouslySetInnerHTML={{
                __html: `<script src="https://fast.wistia.com/player.js" async></script><script src="https://fast.wistia.com/embed/bxe9wvxzvq.js" async type="module"></script><style>wistia-player[media-id='bxe9wvxzvq']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/bxe9wvxzvq/swatch'); display: block; filter: blur(5px); padding-top:177.78%; }</style><wistia-player media-id="bxe9wvxzvq" aspect="0.5625"></wistia-player>`,
              }}
            />
          </div>
          <a href="#pricing" className="cta-button inline-block mt-10 animate-pulse-scale">
            QUERO TRANSFORMAR MINHA LETRA AGORA!
          </a>
        </div>
      </section>

      {/* Activities */}
      <section className="section-alt py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
            Veja algumas das atividades que você vai receber:
          </h2>
          <p className="text-muted-foreground mb-10 text-lg">
            Ao adquirir você vai receber <strong className="gold-text">mais de 300 atividades exclusivas</strong> para transformar sua escrita:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[exercicio1, exercicio2, exercicio3, exercicio4, exercicio5].map((img, i) => (
              <img key={i} src={img} alt={`Atividade ${i + 1}`} className="rounded-xl gold-border w-full object-cover hover:scale-105 transition-transform duration-300 gold-glow" loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      {/* Bonus */}
      <section className="section-gold py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-2">E você ainda ganha</h2>
          <p className="text-3xl md:text-4xl font-extrabold gold-text mb-10">+2 Bônus Exclusivos!</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card gold-border rounded-2xl p-8 gold-glow text-left">
              <span className="gold-text font-extrabold text-sm">#Bônus 1</span>
              <h3 className="text-xl font-extrabold mt-1 mb-3">Dicas e Técnicas</h3>
              <p className="text-muted-foreground">Ebook completo com dicas e técnicas para melhorar sua caligrafia, sugestão de materiais e plano de treino diário.</p>
            </div>
            <div className="bg-card gold-border rounded-2xl p-8 gold-glow text-left">
              <span className="gold-text font-extrabold text-sm">#Bônus 2</span>
              <h3 className="text-xl font-extrabold mt-1 mb-3">Teste e diagnóstico de Disgrafia</h3>
              <p className="text-muted-foreground">Faça uma autoavaliação para identificar se você tem disgrafia, tipo e nível da dificuldade na escrita.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-dark py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-2">Realmente Funciona?</h2>
          <p className="text-muted-foreground text-lg mb-10">
            Vamos deixar que alguns dos mais de <strong className="gold-text">8.590 alunos</strong> de todo Brasil respondam...
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Maria S.", text: "Minha letra mudou completamente em 2 semanas! Incrível!" },
              { name: "João P.", text: "Comprei para meu filho de 7 anos e ele ama os exercícios. Já melhorou muito!" },
              { name: "Ana C.", text: "Sempre tive vergonha da minha letra. Agora escrevo com confiança!" },
            ].map((t, i) => (
              <div key={i} className="bg-card gold-border rounded-2xl p-6 gold-glow text-left">
                <div className="flex gap-1 mb-3 text-primary text-xl">⭐⭐⭐⭐⭐</div>
                <p className="mb-3 italic opacity-90">"{t.text}"</p>
                <p className="font-bold gold-text text-sm">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="section-alt py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] gold-text mb-3">⏰ A oferta acaba em:</p>
          <CountdownTimer />
          <div className="grid md:grid-cols-2 gap-8 mt-12 items-start">
            <PricingCard
              title="Pacote Básico"
              features={["Combo +300 atividades caligrafia", "Módulo de coordenação motora", "Módulo de alfabeto cursivo", "Módulo de lettering", "7 dias de garantia"]}
              oldPrice="R$97" newPrice="R$27"
            />
            <div>
              <PricingCard
                title="Pacote Premium"
                badge="MAIS VENDIDO 🔥"
                highlight
                features={["Tudo do pacote básico", "+250 exercícios caligrafia bônus", "Mega pack atividades infantis (+350 páginas)", "Apostila reforço para crianças", "Alfabeto letra de forma", "Alfabeto letra itálico", "Alfabeto letra medieval", "Alfabeto letra jutai côrte + vídeo", "Acesso vitalício + Atualizações mensais", "+ Bônus exclusivos!"]}
                oldPrice="R$137" newPrice="R$37"
              />
              <p className="text-center mt-3 text-sm text-muted-foreground">↑ Escolha mais popular</p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="section-accent py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ background: 'hsla(0,0%,5%,0.2)' }}>
            <Shield className="w-10 h-10" />
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Investimento com RISCO ZERO.</h2>
          <p className="text-base md:text-lg leading-relaxed opacity-90">
            Nossos materiais têm uma garantia incondicional de <strong>7 dias</strong>. Você pode ter
            acesso a todo o conteúdo e aos bônus. Se por qualquer motivo não ficar satisfeito, basta
            nos enviar um e-mail e solicitar o reembolso. Você receberá cada centavo de volta.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-gold py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-8 text-center">Saiba mais sobre nossas atividades</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {[
              { q: "Como vou receber o material de caligrafia?", a: "Logo após a confirmação do pagamento, você receberá o material completo em PDF no seu e-mail. Basta baixar e imprimir!" },
              { q: "O método é para adultos ou crianças?", a: "O Método Caligrafia Fácil funciona para ambos! Temos exercícios específicos tanto para adultos quanto para crianças em fase de alfabetização." },
              { q: "O material é digital (PDF) ou é impresso?", a: "O material é 100% digital em formato PDF. Você recebe no e-mail e pode imprimir quantas vezes quiser!" },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-card gold-border rounded-xl px-6">
                <AccordionTrigger className="font-bold text-left hover:no-underline">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="text-center mt-10">
            <a href="#pricing" className="cta-button inline-block animate-pulse-scale">COMPRAR AGORA</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section-dark py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-8 mb-6">
            {[{ icon: Shield, label: "Site Seguro" }, { icon: Lock, label: "Compra Protegida" }, { icon: Award, label: "Certificado de Segurança" }].map((badge, i) => (
              <div key={i} className="flex flex-col items-center gap-2 opacity-50">
                <badge.icon className="w-6 h-6" />
                <span className="text-xs">{badge.label}</span>
              </div>
            ))}
          </div>
          <p className="text-sm opacity-30">Todos os direitos reservados a Caligrafia Fácil LTDA • 2026</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
