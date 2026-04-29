const loader = document.getElementById("loader");
window.addEventListener("load", () => {
  setTimeout(() => loader.classList.add("hide"), 450);
});



const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => nav.classList.toggle("open"));

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));





// Tradução internacional por bandeiras + idioma pela URL (?lang=en / ?lang=es)
const translations = {
  pt: {
    navServices:"Serviços", navProjects:"Projetos", navGallery:"Galeria", navContact:"Contato", navBudget:"Orçamento",
    heroEyebrow:"Projetos náuticos de alto padrão",
    heroTitle:"Som, iluminação e tecnologia para embarcações exclusivas.",
    heroText:"Transformamos lanchas, barcos e embarcações em experiências premium com acabamento limpo, elétrica segura e projetos personalizados.",
    heroBtn1:"Solicitar projeto", heroBtn2:"Ver planos",
    aboutEyebrow:"Especialistas em projetos náuticos personalizados.",
    aboutTitle:"Não é só instalar. É projetar uma experiência dentro da embarcação.",
    aboutText1:"A PRO Áudio Marine atua com soluções completas em som, iluminação, elétrica, hidráulica, acessórios e personalização para embarcações.",
    aboutText2:"Cada projeto é pensado para entregar beleza, potência, organização e confiança, respeitando o estilo de uso do cliente e o padrão da embarcação.",
    servicesTitle:"Soluções completas para sua embarcação", servicesText:"Do som ao acabamento final, tudo com visual premium e instalação profissional.",
    service1Title:"Som náutico", service1Text:"Instalação de som, caixas, módulos, subwoofers e ajuste para performance limpa.",
    service2Title:"Iluminação LED", service2Text:"Projetos de LED interno, externo, decorativo e funcional para destacar a embarcação.",
    service3Title:"Elétrica geral", service3Text:"Organização, revisão e personalização elétrica com foco em segurança e acabamento.",
    service4Title:"Motores e geradores", service4Text:"Soluções elétricas para motores, geradores e sistemas auxiliares.",
    service5Title:"Hidráulica", service5Text:"Serviços e ajustes hidráulicos para funcionamento confiável no uso diário.",
    service6Title:"Acessórios", service6Text:"Peças, acessórios e personalizações para elevar o padrão da embarcação.",
    cinematicEyebrow:"Padrão premium", cinematicTitle:"Visual limpo, potência real e acabamento que valoriza sua lancha.", cinematicBtn:"Transformar minha embarcação",
    plansTitle:"Escolha o nível do seu projeto", plansText:"Três linhas comerciais para vender melhor: entrada, intermediário e alto padrão.",
    masterTitle:"Projeto de entrada", masterText:"Ideal para quem quer iniciar com um projeto bonito, funcional e organizado.", masterBtn:"Solicitar Master",
    goldTitle:"Projeto intermediário", goldText:"Para embarcações que precisam de impacto visual, potência e mais recursos.", goldBtn:"Solicitar Gold",
    premiumTitle:"Alto padrão completo", premiumText:"Projeto completo para quem quer transformar a embarcação em referência.", premiumBtn:"Solicitar Premium",
    galleryTitle:"Área para fotos dos projetos", galleryText:"Troque as imagens abaixo pelas fotos reais dos serviços: antes, durante e depois.",
    leadTitle:"Quer deixar sua embarcação com padrão premium?", leadText:"Fale agora com a PRO Áudio Marine e solicite uma avaliação personalizada.",
    leadBtn1:"Chamar no WhatsApp", leadBtn2:"Ligar agora",
    copyright:"© 2026 PRO Áudio Marine. Todos os direitos reservados.", footerLine:"Projetos náuticos personalizados de alto padrão."
  },
  en: {
    navServices:"Services", navProjects:"Projects", navGallery:"Gallery", navContact:"Contact", navBudget:"Quote",
    heroEyebrow:"High-end marine projects",
    heroTitle:"Audio, lighting and technology for exclusive vessels.",
    heroText:"We transform boats and yachts into premium experiences with clean finishing, safe electrical systems and custom projects.",
    heroBtn1:"Request project", heroBtn2:"View plans",
    aboutEyebrow:"Specialists in custom marine projects.",
    aboutTitle:"It is not just installation. It is designing an experience inside the vessel.",
    aboutText1:"PRO Áudio Marine delivers complete solutions in audio, lighting, electrical systems, hydraulics, accessories and vessel customization.",
    aboutText2:"Every project is designed to deliver beauty, power, organization and confidence, respecting the client’s usage style and the vessel’s standard.",
    servicesTitle:"Complete solutions for your vessel", servicesText:"From audio to final finishing, everything with a premium look and professional installation.",
    service1Title:"Marine audio", service1Text:"Installation of speakers, amplifiers, subwoofers and tuning for clean performance.",
    service2Title:"LED lighting", service2Text:"Interior, exterior, decorative and functional LED projects to enhance your vessel.",
    service3Title:"General electrical", service3Text:"Electrical organization, review and customization focused on safety and finishing.",
    service4Title:"Engines and generators", service4Text:"Electrical solutions for engines, generators and auxiliary systems.",
    service5Title:"Hydraulics", service5Text:"Hydraulic services and adjustments for reliable daily operation.",
    service6Title:"Accessories", service6Text:"Parts, accessories and customizations to raise the standard of your vessel.",
    cinematicEyebrow:"Premium standard", cinematicTitle:"Clean design, real power and finishing that values your boat.", cinematicBtn:"Transform my vessel",
    plansTitle:"Choose your project level", plansText:"Three commercial lines: entry, intermediate and high-end.",
    masterTitle:"Entry project", masterText:"Ideal for those who want to start with a beautiful, functional and organized project.", masterBtn:"Request Master",
    goldTitle:"Intermediate project", goldText:"For vessels that need visual impact, power and more features.", goldBtn:"Request Gold",
    premiumTitle:"Complete high-end", premiumText:"A complete project for those who want to turn their vessel into a reference.", premiumBtn:"Request Premium",
    galleryTitle:"Project photo area", galleryText:"Replace the images below with real service photos: before, during and after.",
    leadTitle:"Want to give your vessel a premium standard?", leadText:"Contact PRO Áudio Marine now and request a personalized evaluation.",
    leadBtn1:"Message on WhatsApp", leadBtn2:"Call now",
    copyright:"© 2026 PRO Áudio Marine. All rights reserved.", footerLine:"Custom high-end marine projects."
  },
  es: {
    navServices:"Servicios", navProjects:"Proyectos", navGallery:"Galería", navContact:"Contacto", navBudget:"Presupuesto",
    heroEyebrow:"Proyectos náuticos de alto nivel",
    heroTitle:"Audio, iluminación y tecnología para embarcaciones exclusivas.",
    heroText:"Transformamos lanchas y embarcaciones en experiencias premium con acabado limpio, sistema eléctrico seguro y proyectos personalizados.",
    heroBtn1:"Solicitar proyecto", heroBtn2:"Ver planes",
    aboutEyebrow:"Especialistas en proyectos náuticos personalizados.",
    aboutTitle:"No es solo instalar. Es diseñar una experiencia dentro de la embarcación.",
    aboutText1:"PRO Áudio Marine ofrece soluciones completas en audio, iluminación, sistemas eléctricos, hidráulica, accesorios y personalización para embarcaciones.",
    aboutText2:"Cada proyecto está pensado para entregar belleza, potencia, organización y confianza, respetando el estilo de uso del cliente y el estándar de la embarcación.",
    servicesTitle:"Soluciones completas para tu embarcación", servicesText:"Desde el audio hasta el acabado final, todo con visual premium e instalación profesional.",
    service1Title:"Audio náutico", service1Text:"Instalación de altavoces, módulos, subwoofers y ajustes para un rendimiento limpio.",
    service2Title:"Iluminación LED", service2Text:"Proyectos LED interiores, exteriores, decorativos y funcionales para destacar la embarcación.",
    service3Title:"Eléctrica general", service3Text:"Organización, revisión y personalización eléctrica con enfoque en seguridad y acabado.",
    service4Title:"Motores y generadores", service4Text:"Soluciones eléctricas para motores, generadores y sistemas auxiliares.",
    service5Title:"Hidráulica", service5Text:"Servicios y ajustes hidráulicos para un funcionamiento confiable en el uso diario.",
    service6Title:"Accesorios", service6Text:"Piezas, accesorios y personalizaciones para elevar el estándar de la embarcación.",
    cinematicEyebrow:"Estándar premium", cinematicTitle:"Visual limpio, potencia real y acabado que valoriza tu lancha.", cinematicBtn:"Transformar mi embarcación",
    plansTitle:"Elige el nivel de tu proyecto", plansText:"Tres líneas comerciales: entrada, intermedia y alto estándar.",
    masterTitle:"Proyecto de entrada", masterText:"Ideal para quien desea comenzar con un proyecto bonito, funcional y organizado.", masterBtn:"Solicitar Master",
    goldTitle:"Proyecto intermedio", goldText:"Para embarcaciones que necesitan impacto visual, potencia y más recursos.", goldBtn:"Solicitar Gold",
    premiumTitle:"Alto estándar completo", premiumText:"Proyecto completo para quien desea transformar su embarcación en una referencia.", premiumBtn:"Solicitar Premium",
    galleryTitle:"Área para fotos de proyectos", galleryText:"Reemplaza las imágenes de abajo por fotos reales: antes, durante y después.",
    leadTitle:"¿Quieres llevar tu embarcación a un estándar premium?", leadText:"Habla ahora con PRO Áudio Marine y solicita una evaluación personalizada.",
    leadBtn1:"Enviar WhatsApp", leadBtn2:"Llamar ahora",
    copyright:"© 2026 PRO Áudio Marine. Todos los derechos reservados.", footerLine:"Proyectos náuticos personalizados de alto estándar."
  }
};

function setLanguage(lang, updateUrl = true){
  const dict = translations[lang] || translations.pt;
  document.documentElement.lang = lang === "pt" ? "pt-BR" : lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if(dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll(".top-language img").forEach(flag => {
    flag.classList.toggle("active", flag.dataset.lang === lang);
  });
  document.title = lang === "en"
    ? "PRO Áudio Marine | Premium Marine Systems"
    : lang === "es"
      ? "PRO Áudio Marine | Sistemas Náuticos Premium"
      : "PRO Áudio Marine | Projetos Náuticos Premium";
  const meta = document.querySelector('meta[name="description"]');
  if(meta){
    meta.setAttribute("content", lang === "en"
      ? "Premium marine audio, lighting, electrical systems and customization."
      : lang === "es"
        ? "Audio, iluminación, eléctrica y personalización náutica premium."
        : "PRO Áudio Marine: som, iluminação, elétrica, hidráulica e acessórios para embarcações.");
  }
  localStorage.setItem("proAudioLang", lang);
  if(updateUrl){
    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    history.replaceState(null, "", url);
  }
}

document.querySelectorAll(".top-language img").forEach(flag => {
  flag.addEventListener("click", () => setLanguage(flag.dataset.lang));
});

const params = new URLSearchParams(window.location.search);
const browserLang = (navigator.language || "").toLowerCase();
let initialLang = params.get("lang") || localStorage.getItem("proAudioLang");
if(!initialLang){
  initialLang = browserLang.startsWith("es") ? "es" : browserLang.startsWith("en") ? "en" : "pt";
}
setLanguage(["pt","en","es"].includes(initialLang) ? initialLang : "pt", false);
