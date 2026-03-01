import { useState, useEffect } from "react";
import { trackEvent } from "@/lib/trackEvent";
import CountdownTimer from "@/components/CountdownTimer";
import ExerciseCarousel from "@/components/ExerciseCarousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Shield, Lock, Award, Printer, Clock, Target, CheckCircle, PenTool, Brain, Users, MessageCircle, Phone, FileText, Download, RefreshCw, Check, Sparkles } from "lucide-react";
import PurchaseNotification from "@/components/PurchaseNotification";
import ViewerCount from "@/components/ViewerCount";

import antesImg from "@/assets/antes.png";
import depoisImg from "@/assets/depois.png";
import exercicio1 from "@/assets/exercicio-1.png";
import exercicio2 from "@/assets/exercicio-2.png";
import exercicio3 from "@/assets/exercicio-3.png";
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
import logoKitImg from "@/assets/logo-kit.jpg";
import bonus1Img from "@/assets/bonus-1.webp";
import bonus2Img from "@/assets/bonus-2.webp";

const Index = () => {
  useEffect(() => {
    trackEvent("page_view");
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <PurchaseNotification />

      {/* ===== HERO ===== */}
      <section className="bg-gradient-to-b from-[hsl(210,40%,98%)] to-[hsl(174,30%,95%)] py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <img src={logoKitImg} alt="Kit da Caligrafia" className="h-28 md:h-36 mx-auto mb-6" />

          <h1 className="text-4xl md:text-6xl font-extrabold mb-5 leading-tight text-foreground">
            +300 EXERCÍCIOS DE CALIGRAFIA EM PDF PARA{" "}
            <span className="gold-text underline decoration-4">IMPRIMIR E TREINAR EM CASA</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Material prático para você <strong className="text-foreground">melhorar sua letra</strong> no seu ritmo, com apenas <strong className="text-foreground">15 minutos por dia</strong>. 
            Indicado para <strong className="text-foreground">adultos e crianças</strong>. Receba no WhatsApp na hora e comece hoje.
          </p>

          <div className="flex items-center justify-center gap-1 mb-8">
            <div className="flex -space-x-3">
              {[avatar1, avatar2, avatar3, avatar4, avatar5].map((av, i) => (
                <img key={i} src={av} alt="" className="w-10 h-10 rounded-full border-2 border-primary object-cover" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground ml-3">+8.500 pessoas já praticam ⭐⭐⭐⭐⭐</span>
          </div>

          <a href="#pricing" className="cta-button-gold inline-block animate-pulse-scale">
            QUERO MEU MATERIAL AGORA
          </a>
        </div>
      </section>

      {/* ===== VÍDEO ===== */}
      <section className="bg-[hsl(220,25%,12%)] py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-white">
            Veja o que estão falando sobre o material
          </h2>
          <p className="text-white/70 text-base mb-6">+8.500 pessoas já transformaram sua escrita com esse kit</p>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <div className="wistia_responsive_padding" style={{ padding: "56.25% 0 0 0", position: "relative" }}>
              <div className="wistia_responsive_wrapper" style={{ height: "100%", left: 0, position: "absolute", top: 0, width: "100%" }}>
                <div className="wistia_embed wistia_async_bxe9wvxzvq seo=true videoFoam=true" style={{ height: "100%", position: "relative", width: "100%" }}>
                  <div className="wistia_swatch" style={{ height: "100%", left: 0, opacity: 0, overflow: "hidden", position: "absolute", top: 0, transition: "opacity 200ms", width: "100%" }}>
                    <img src="https://fast.wistia.com/embed/medias/bxe9wvxzvq/swatch" style={{ filter: "blur(5px)", height: "100%", objectFit: "contain", width: "100%" }} alt="" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DOR RESUMIDA ===== */}
      <section className="bg-gradient-to-br from-[hsl(340,60%,45%)] to-[hsl(340,70%,35%)] py-10 px-4 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-3">
            Sua letra te incomoda? Você não está sozinho.
          </h2>
          <p className="text-base md:text-lg opacity-90 max-w-xl mx-auto">
            Milhares de pessoas sentem vergonha ao escrever, têm dificuldade de leitura da própria letra ou nunca encontraram um material organizado para treinar. <strong>Esse kit resolve isso.</strong>
          </p>
        </div>
      </section>

      {/* ===== O QUE É O PRODUTO ===== */}
      <section className="bg-[hsl(174,30%,95%)] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-foreground">
            Um material de treino prático,{" "}
            <span className="text-primary underline decoration-4">simples e direto</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Não é curso, não tem vídeo-aula e não precisa de internet para usar. 
            São <strong className="text-foreground">apostilas em PDF</strong> com exercícios progressivos que você imprime e pratica no papel — 
            do jeito tradicional, que realmente funciona.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: FileText, title: "100% em PDF", desc: "Arquivos prontos para baixar e imprimir. Use em casa, na escola ou onde preferir.", color: "bg-[hsl(174,62%,47%)]" },
              { icon: Printer, title: "Imprima quantas vezes quiser", desc: "O material é seu para sempre. Reimprima sempre que precisar, sem custo adicional.", color: "bg-[hsl(36,100%,55%)]" },
              { icon: RefreshCw, title: "Treino progressivo", desc: "Exercícios organizados do básico ao avançado. Você evolui no seu próprio ritmo.", color: "bg-[hsl(340,82%,55%)]" },
            ].map((item, i) => (
              <div key={i} className="bg-card rounded-2xl p-6 shadow-lg text-center">
                <div className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center mx-auto mb-4`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-extrabold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ANTES E DEPOIS ===== */}
      <section className="bg-gradient-to-br from-[hsl(36,60%,95%)] to-[hsl(36,80%,90%)] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-2 text-foreground">
            Veja a evolução com a prática diária
          </h2>
          <p className="text-muted-foreground mb-10 text-lg">
            Resultados reais de quem praticou com nossos exercícios. A melhora depende da <strong className="text-foreground">dedicação de cada pessoa</strong>.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-xl font-bold mb-3 text-foreground">ANTES</p>
              <img src={antesImg} alt="Escrita antes de praticar com o material" className="rounded-xl shadow-lg w-full object-cover max-h-80" />
            </div>
            <div>
              <p className="text-xl font-bold mb-3 text-foreground">DEPOIS</p>
              <img src={depoisImg} alt="Escrita depois de praticar com o material" className="rounded-xl shadow-lg w-full object-cover max-h-80" />
            </div>
          </div>
          <p className="mt-6 text-sm text-muted-foreground italic">
            *Resultados variam de pessoa para pessoa e dependem da prática constante.
          </p>
        </div>
      </section>

      {/* ===== O QUE ESTÁ INCLUSO ===== */}
      <section className="bg-[hsl(220,25%,12%)] py-16 px-4 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            O que você vai receber
          </h2>
          <p className="text-lg mb-10 opacity-80">Mais de <strong>300 páginas</strong> de exercícios organizados por módulo:</p>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
            {[
              { icon: PenTool, title: "Coordenação motora", desc: "Exercícios para soltar a mão e ganhar controle no traço.", color: "bg-[hsl(174,62%,47%)]" },
              { icon: Target, title: "Alfabeto cursivo completo", desc: "Letras maiúsculas e minúsculas com guias de repetição.", color: "bg-[hsl(36,100%,55%)]" },
              { icon: Brain, title: "Módulo de lettering", desc: "Atividades criativas para explorar diferentes estilos de letra.", color: "bg-[hsl(270,60%,55%)]" },
              { icon: Users, title: "Atividades para crianças", desc: "Exercícios adaptados para a fase de alfabetização infantil.", color: "bg-[hsl(340,82%,55%)]" },
            ].map((mod, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-5 flex items-start gap-4">
                <div className={`w-12 h-12 rounded-full ${mod.color} flex items-center justify-center flex-shrink-0`}>
                  <mod.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-extrabold mb-1">{mod.title}</h3>
                  <p className="text-sm opacity-80">{mod.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMO FUNCIONA ===== */}
      <section className="bg-gradient-to-b from-[hsl(145,30%,95%)] to-[hsl(145,40%,90%)] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-12 text-foreground">
            Como funciona?
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: MessageCircle, step: "1", title: "Compre pelo site", desc: "Pagamento rápido e seguro via Pix ou cartão." },
              { icon: Phone, step: "2", title: "Receba no WhatsApp", desc: "Na hora, você recebe o link para baixar todos os PDFs." },
              { icon: Printer, step: "3", title: "Imprima em casa", desc: "Imprima as páginas que quiser, quantas vezes precisar." },
              { icon: Clock, step: "4", title: "Pratique 15min/dia", desc: "Siga os exercícios no seu ritmo e veja sua letra melhorar." },
            ].map((step, i) => (
              <div key={i} className="bg-card rounded-2xl p-5 shadow-lg text-center">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mx-auto mb-3">
                  <span className="text-secondary-foreground font-extrabold text-lg">{step.step}</span>
                </div>
                <h3 className="text-lg font-extrabold mb-2 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== AMOSTRAS ===== */}
      <section className="bg-[hsl(270,20%,96%)] py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-foreground">Veja algumas páginas do material:</h2>
          <p className="text-muted-foreground mb-10 text-lg">
            Exercícios claros, organizados e prontos para imprimir.
          </p>
          <ExerciseCarousel
            images={[
              { src: exercicio1, title: "" },
              { src: exercicio2, title: "" },
              { src: exercicio3, title: "" },
            ]}
          />
        </div>
      </section>

      {/* ===== QUEM CRIOU ===== */}
      <section className="bg-gradient-to-br from-[hsl(174,40%,92%)] to-[hsl(174,50%,85%)] py-16 px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <img
            src={expertImg}
            alt="Profª Ana Beatriz - Pedagoga especialista em caligrafia"
            className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover shadow-2xl border-4 border-primary flex-shrink-0"
          />
          <div className="text-center md:text-left">
            <p className="text-sm font-bold text-primary uppercase tracking-widest mb-1">Material desenvolvido por</p>
            <h2 className="text-2xl md:text-4xl font-extrabold text-foreground mb-3">
              Profª Ana Beatriz
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Pedagoga com mais de <strong className="text-foreground">12 anos de experiência</strong> no ensino da escrita.
              Organizou este material com exercícios progressivos que ela utiliza na prática com seus próprios alunos.
              Mais de <strong className="text-foreground">8.500 pessoas</strong> já baixaram e praticam com essas apostilas.
            </p>
          </div>
        </div>
      </section>

      {/* ===== BÔNUS ===== */}
      <section className="bg-[hsl(36,60%,95%)] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-2 text-foreground">Você ainda recebe</h2>
          <p className="text-3xl md:text-5xl font-extrabold text-accent mb-10">+2 Materiais Bônus!</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-lg text-center">
              <img src={bonus1Img} alt="Bônus Dicas e Técnicas" className="w-48 mx-auto mb-4 drop-shadow-lg" />
              <span className="text-primary font-extrabold text-sm">#Bônus 1</span>
              <h3 className="text-xl font-extrabold mt-1 mb-3 text-foreground">Guia de Dicas e Técnicas</h3>
              <p className="text-muted-foreground">PDF com dicas práticas, sugestão de materiais e um plano de treino diário para organizar sua rotina.</p>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-lg text-center">
              <img src={bonus2Img} alt="Bônus Teste de Disgrafia" className="w-48 mx-auto mb-4 drop-shadow-lg" />
              <span className="text-primary font-extrabold text-sm">#Bônus 2</span>
              <h3 className="text-xl font-extrabold mt-1 mb-3 text-foreground">Teste de Disgrafia</h3>
              <p className="text-muted-foreground">Autoavaliação simples para identificar possíveis dificuldades na escrita e entender seu ponto de partida.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DEPOIMENTOS ===== */}
      <section className="bg-gradient-to-b from-[hsl(210,20%,97%)] to-[hsl(210,30%,93%)] py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-2 text-foreground">O que dizem sobre o material</h2>
          <p className="text-muted-foreground text-lg mb-4">Feedback real de quem baixou e praticou:</p>

          <div className="flex justify-center mb-8">
            <img src={compradoresImg} alt="Pessoas que adquiriram o material" className="max-w-xs md:max-w-sm" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[provaSocial1, provaSocial2, provaSocial3, provaSocial4].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Depoimento ${i + 1}`}
                className="rounded-2xl shadow-lg w-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== GARANTIA ===== */}
      <section className="bg-gradient-to-r from-[hsl(145,65%,42%)] to-[hsl(150,70%,35%)] py-12 px-4 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-secondary rounded-full flex items-center justify-center">
            <Shield className="w-8 h-8 text-secondary-foreground" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-3">GARANTIA DE 7 DIAS</h2>
          <p className="text-lg font-bold opacity-95">
            Se por qualquer motivo você não gostar do material, devolvemos 100% do seu dinheiro. Sem burocracia.
          </p>
        </div>
      </section>

      {/* ===== OFERTA ÚNICA ===== */}
      <section id="pricing" className="bg-gradient-to-b from-[hsl(220,25%,12%)] to-[hsl(220,30%,8%)] py-16 px-4 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-2">Tudo isso por um preço especial</h2>
          <p className="text-sm font-bold uppercase tracking-widest text-[hsl(36,100%,55%)] mb-2">⏰ Oferta por tempo limitado:</p>
          <CountdownTimer />

          <div className="bg-white/10 backdrop-blur-sm border-2 border-[hsl(36,100%,55%)] rounded-2xl p-8 mt-10 text-left">
            <div className="text-center mb-6">
              <Sparkles className="w-8 h-8 text-[hsl(36,100%,55%)] mx-auto mb-2" />
              <h3 className="text-2xl font-extrabold">Kit Completo da Caligrafia</h3>
            </div>

            <ul className="space-y-2.5 mb-8">
              {[
                "Combo +300 exercícios de caligrafia em PDF",
                "Módulo de coordenação motora",
                "Módulo de alfabeto cursivo completo",
                "Módulo de lettering",
                "+250 exercícios bônus extras",
                "Mega pack atividades infantis (+350 pág.)",
                "Apostila de reforço para crianças",
                "Alfabeto letra de forma",
                "Alfabeto letra itálico",
                "Alfabeto letra medieval",
                "Guia de Dicas e Técnicas (Bônus)",
                "Teste de Disgrafia (Bônus)",
                "Acesso vitalício + atualizações",
                "Entrega imediata via WhatsApp",
                "Garantia incondicional de 7 dias",
              ].map((f, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 mt-0.5 text-[hsl(145,65%,50%)] flex-shrink-0" />
                  <span className="text-sm md:text-base">{f}</span>
                </li>
              ))}
            </ul>

            <div className="text-center">
              <p className="text-[hsl(0,60%,60%)] line-through text-lg mb-1">De R$ 97,00</p>
              <p className="text-sm opacity-80 mb-1">POR APENAS</p>
              <p className="text-5xl md:text-6xl font-extrabold text-[hsl(36,100%,55%)] mb-1">R$ 19,90</p>
              <p className="text-xs font-bold text-[hsl(145,65%,55%)] uppercase tracking-wide mb-6">⚡ Economia de mais de 79%</p>

              <a
                href="https://pay.lowify.com.br/checkout?product_id=Dh2LP2"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("click_buy")}
                className="cta-button-gold w-full text-center block animate-pulse-scale"
              >
                QUERO MEU MATERIAL AGORA
              </a>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {[
              { icon: MessageCircle, text: "Entrega imediata via WhatsApp" },
              { icon: Lock, text: "Pagamento seguro" },
              { icon: Shield, text: "Garantia de 7 dias" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-lg px-4 py-2.5">
                <item.icon className="w-5 h-5 text-[hsl(36,100%,55%)] flex-shrink-0" />
                <span className="text-sm font-bold">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-[hsl(270,20%,96%)] py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-center text-foreground">Perguntas Frequentes</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {[
              { q: "Isso é um curso com vídeo-aulas?", a: "Não. Este é um material digital em PDF com exercícios práticos para você imprimir e treinar no papel. Não há vídeo-aulas, área de membros ou acompanhamento." },
              { q: "Como vou receber o material?", a: "Logo após a confirmação do pagamento, você recebe instantaneamente pelo WhatsApp o link para baixar todos os arquivos em PDF." },
              { q: "O material serve para adultos ou crianças?", a: "Para os dois! Temos exercícios adequados tanto para adultos que querem melhorar a letra quanto para crianças em fase de alfabetização." },
              { q: "Preciso de algum material especial?", a: "Não. Basta uma impressora caseira comum, folhas de papel e um lápis ou caneta. Você pode imprimir as páginas quantas vezes quiser." },
              { q: "Em quanto tempo vou ver resultados?", a: "Depende da sua dedicação. Recomendamos praticar 15 minutos por dia. Com constância, é possível notar melhora nas primeiras semanas. Os resultados variam de pessoa para pessoa." },
              { q: "E se eu não gostar?", a: "Você tem 7 dias de garantia incondicional. Se não ficar satisfeito, devolvemos seu dinheiro integralmente." },
              { q: "Posso imprimir quantas vezes quiser?", a: "Sim! O material é seu para sempre. Imprima quantas vezes precisar, sem custo adicional." },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-card rounded-xl px-6 shadow-md border-none">
                <AccordionTrigger className="text-foreground font-bold text-left hover:no-underline">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="text-center mt-10">
            <a href="#pricing" className="cta-button-green inline-block animate-pulse-scale">QUERO MEU MATERIAL AGORA</a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[hsl(220,25%,8%)] py-12 px-4 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center gap-8 mb-8">
            {[{ icon: Shield, label: "Site Seguro" }, { icon: Lock, label: "Compra Protegida" }, { icon: Award, label: "Certificado de Segurança" }].map((badge, i) => (
              <div key={i} className="flex flex-col items-center gap-2 opacity-70">
                <badge.icon className="w-6 h-6" />
                <span className="text-xs">{badge.label}</span>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 text-center mb-8 max-w-md mx-auto">
            <h3 className="text-lg font-extrabold mb-2">Precisa de ajuda?</h3>
            <p className="text-sm opacity-80 mb-4">Nossa equipe está pronta para te atender!</p>
            <a
              href="https://wa.me/5566984511874"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full bg-[hsl(145,65%,42%)] px-6 py-4 rounded-full font-bold text-base hover:scale-105 transition-transform"
            >
              <Phone className="w-5 h-5" />
              Suporte WhatsApp: (66) 98451-1874
            </a>
          </div>

          <img src={logoKitImg} alt="Kit da Caligrafia" className="h-16 mx-auto mb-4" />
          <p className="text-sm opacity-50 text-center">Todos os direitos reservados a Caligrafia Fácil LTDA • 2026</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
