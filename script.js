const services = [
  {
    id: "dermatolojik-muayene",
    title: "Dermatolojik Muayene",
    category: "Muayene",
    tag: "Tanı ve takip",
    image: "https://www.drhicranunlu.com/wp-content/uploads/2024/03/muayene-1-492x492.jpg",
    summary: "Cilt, saç ve tırnak hastalıklarının değerlendirilmesi için uzman muayene süreci.",
    detail: [
      "Dermatolojik muayene, cilt ve ciltle ilişkili hastalıkların tanı ve tedavi planı için yapılan tıbbi değerlendirmedir.",
      "Muayenede cilt problemleri, benler, döküntüler, saç ve tırnak sorunları gibi bulgular incelenir; hastanın ihtiyacına göre takip ve tedavi planı oluşturulur."
    ],
    highlights: ["Cilt lezyonlarının değerlendirilmesi", "Saç ve tırnak hastalıkları", "Erken tanı ve takip planı"]
  },
  {
    id: "genclik-asisi",
    title: "Gençlik Aşısı",
    category: "Estetik",
    tag: "Nem ve elastikiyet",
    image: "https://www.drhicranunlu.com/wp-content/uploads/2024/03/genolik-492x492.jpg",
    summary: "Ciltte nem, canlılık, yenilenme ve elastikiyet desteği hedefleyen uygulama.",
    detail: [
      "Gençlik aşısı, yaşlanma belirtilerini azaltmak ve cildin daha canlı görünmesini desteklemek amacıyla uygulanır.",
      "Hastanın ihtiyacına göre aminoasit, vitamin, mineral ve hyaluronik asit gibi destek içerikleri cildin alt katmanlarına uygulanabilir."
    ],
    highlights: ["İnce kırışıklık görünümü", "Nem ve canlılık desteği", "Kişiye özel protokol"]
  },
  {
    id: "bbl-lazer",
    title: "BBL Lazer",
    category: "Lazer",
    tag: "Geniş bant ışık",
    image: "https://www.drhicranunlu.com/wp-content/uploads/2024/03/bbl-lazer-492x492.jpg",
    summary: "Cilt tonu, pigment görünümü ve akne izi gibi başlıklarda kullanılan lazer teknolojisi.",
    detail: [
      "BBL Lazer, geniş bant ışık teknolojisiyle ciltte farklı sorunlara yönelik değerlendirilen bir uygulamadır.",
      "Kontrollü ışık enerjisi cildin alt tabakalarına iletilerek doğal yenilenme sürecini destekler; kolajen ve elastin üretimine katkı sağlaması hedeflenir."
    ],
    highlights: ["Cilt tonu düzenleme", "Pigment görünümü", "Kolajen üretimi desteği"]
  },
  {
    id: "lazer-epilasyon",
    title: "Lazer Epilasyon",
    category: "Lazer",
    tag: "Pürüzsüz cilt",
    image: "https://www.drhicranunlu.com/wp-content/uploads/2024/03/lazer-epilasyon-492x492.jpg",
    summary: "İstenmeyen tüylerin kalıcı olarak azaltılmasını hedefleyen ışık enerjisi uygulaması.",
    detail: [
      "Lazer epilasyon, kıl köklerine odaklanan yoğun ışık enerjisiyle istenmeyen tüylerin azalmasını hedefler.",
      "Seans aralıkları kıl ve cilt yapısına göre planlanır; ortalama birkaç seanslık programla istenen sonuçlara yaklaşılması hedeflenir."
    ],
    highlights: ["Kişiye göre seans planı", "Hızlı uygulama alanları", "Uzun süreli pürüzsüzlük hedefi"]
  },
  {
    id: "dudak-dolgusu",
    title: "Dudak Dolgusu",
    category: "Estetik",
    tag: "Dolgu uygulaması",
    image: "https://www.drhicranunlu.com/wp-content/uploads/2024/03/dudak-dolgusu-492x492.jpg",
    summary: "Dudak hacmini ve formunu küçük estetik dokunuşlarla destekleyen uygulama.",
    detail: [
      "Dudak dolgusu, dudakların hacim ve form ihtiyacına göre planlanan medikal estetik uygulamalardan biridir.",
      "Amaç, yüz oranlarıyla uyumlu, daha belirgin ve dengeli bir dudak görünümü elde edilmesine destek olmaktır."
    ],
    highlights: ["Yüz oranına göre planlama", "Doğal görünüm hedefi", "Küçük estetik dokunuşlar"]
  },
  {
    id: "medikal-estetik",
    title: "Medikal Estetik",
    category: "Estetik",
    tag: "Botulinum toksini",
    image: "https://www.drhicranunlu.com/wp-content/uploads/2018/11/surgery_slide_02-1.png",
    summary: "Yüzdeki ince çizgiler ve aşırı aktif kas hareketleri için değerlendirilen uygulamalar.",
    detail: [
      "Medikal estetik uygulamalarında botulinum toksini temelli yaklaşımlar, belirli kas hareketlerini geçici olarak azaltmayı hedefler.",
      "Uygulama, yüzdeki ince çizgiler ve bazı medikal kullanım alanları için doktor değerlendirmesiyle planlanır."
    ],
    highlights: ["İnce çizgi görünümü", "Kas hareketlerinin dengelenmesi", "Doktor kontrolünde planlama"]
  },
  {
    id: "altin-igne",
    title: "Altın İğne",
    category: "Estetik",
    tag: "Fraksiyonel RF",
    image: "https://www.drhicranunlu.com/wp-content/uploads/2018/10/altin-igne-492x492.jpg",
    summary: "Radyofrekans enerjisiyle cilt sıkılaşması ve yenilenme hedefleyen uygulama.",
    detail: [
      "Altın iğne, fraksiyonel radyofrekans uygulaması olarak yaşlanma ve çevresel etkilerin cilt üzerindeki görünümünü azaltmayı hedefler.",
      "Cilt yüzeyinden alt katmanlara enerji verilerek kolajen üretimi, sıkılaşma ve doku kalitesinde iyileşme amaçlanır."
    ],
    highlights: ["Cilt sıkılaşması", "Leke ve iz görünümü", "Elastikiyet desteği"]
  },
  {
    id: "nazolabial-dolgu",
    title: "Nazolabial Dolgu",
    category: "Estetik",
    tag: "Çizgi görünümü",
    image: "https://www.drhicranunlu.com/wp-content/uploads/2018/11/nazolabilal-dolgu-492x492.jpg",
    summary: "Burun kanadından ağız kenarına inen çizgilerin görünümüne yönelik dolgu uygulaması.",
    detail: [
      "Nazolabial dolgu, burun kanatlarından ağız kenarına doğru uzanan çizgilerin görünümünü azaltmak için uygulanır.",
      "Yaşlanma, genetik faktörler ve çevresel etkilerle belirginleşen kırışıklıkların daha dengeli görünmesi hedeflenir."
    ],
    highlights: ["Nazolabial çizgiler", "Daha yumuşak ifade", "Uygunluk değerlendirmesi"]
  },
  {
    id: "cilt-bakimi",
    title: "Cilt Bakımı",
    category: "Bakım",
    tag: "Kişiye özel bakım",
    image: "https://www.drhicranunlu.com/wp-content/uploads/2018/11/cilt-bakimi-492x492.jpg",
    summary: "Cildin temizlenmesi, nemlendirilmesi, beslenmesi ve yenilenmesini hedefleyen bakım süreci.",
    detail: [
      "Cilt bakımı, sağlıklı ve dengeli bir cilt görünümü için temizleme, nemlendirme, besleme ve gençleştirme adımlarını içerir.",
      "Uygulamalar cilt tipine ve ihtiyaca göre özelleştirilir; hijyenik koşullarda ve uygun ekipmanlarla gerçekleştirilir."
    ],
    highlights: ["Cilt tipine göre bakım", "Nem ve temizlik", "Hijyenik uygulama ortamı"]
  },
  {
    id: "6-nokta-lifting",
    title: "6 Nokta Lifting",
    category: "Estetik",
    tag: "Ameliyatsız lifting",
    image: "https://www.drhicranunlu.com/wp-content/uploads/2018/11/lifting.jpg",
    summary: "Yüzde belirli noktalara hyaluronik asit uygulamasıyla lifting etkisi hedefleyen yöntem.",
    detail: [
      "6 Nokta Lifting, ameliyatsız yüz germe yaklaşımı olarak yüzde belirli noktalara hyaluronik asit enjekte edilmesiyle anlatılır.",
      "Biyolojik lifting aşısı olarak da bilinen bu uygulama, cildin doğal yenilenme sürecini ve elastikiyetini desteklemeyi hedefler."
    ],
    highlights: ["Kısa uygulama süresi", "Cerrahi olmayan yaklaşım", "Canlı ve sıkı görünüm hedefi"]
  },
  {
    id: "aqua-peel",
    title: "Aqua Peel",
    category: "Bakım",
    tag: "Derin temizlik",
    image: "https://www.drhicranunlu.com/wp-content/uploads/2018/11/aqua-peel.jpg",
    summary: "Su bazlı teknolojiyle cildi temizleme, nemlendirme ve canlandırma amaçlı bakım.",
    detail: [
      "Aqua Peel, suyun etkisini kullanan cilt bakım uygulamalarından biridir; cildin derinlemesine temizlenmesine yardımcı olur.",
      "Ölü hücre ve kirlerin uzaklaştırılması, nem desteği ve daha parlak bir cilt görünümü hedeflenir."
    ],
    highlights: ["Su bazlı bakım", "Ağrısız uygulama yaklaşımı", "Parlak ve canlı görünüm"]
  },
  {
    id: "mezoterapi",
    title: "Mezoterapi",
    category: "Estetik",
    tag: "Mikroenjeksiyon",
    image: "https://www.drhicranunlu.com/wp-content/uploads/2018/11/slider33.jpg",
    summary: "Bölgesel yağlanma, cilt yenilenmesi, yara izi ve saç tedavisi başlıklarında değerlendirilen yöntem.",
    detail: [
      "Mezoterapi, bazı özel mikroenjeksiyon teknikleriyle aktif bileşenlerin cildin orta tabakasına uygulanması esasına dayanır.",
      "Bölgesel yağlanmaların azaltılması, cilt yenilenmesi, yara izi görünümü ve saç tedavisi gibi alanlarda kişinin ihtiyacına göre planlanır."
    ],
    highlights: ["Bölgesel planlama", "Cilt yenilenmesi", "Saç ve yara izi başlıkları"]
  },
  {
    id: "acnelan-maske",
    title: "Acnelan Maske",
    category: "Bakım",
    tag: "Akne eğilimli cilt",
    image: "https://www.drhicranunlu.com/wp-content/uploads/2018/11/acnelan-maske.jpg",
    summary: "Akne eğilimli ve seboreik ciltler için profesyonel bakım ve tedavi yaklaşımı.",
    detail: [
      "Acnelan Maske, akne eğilimli ve seboreik ciltlerde yoğun bakım amacıyla kullanılan profesyonel bir yöntemdir.",
      "Fazla yağın kontrolü, gözenek temizliği, daha pürüzsüz ve mat cilt görünümü gibi hedeflerle uygulanır."
    ],
    highlights: ["Akne eğilimli cilt", "Seboreik cilt bakımı", "Gözenek ve yağ kontrolü"]
  }
];

const comparisons = {
  "dudak-dolgusu": {
    title: "Dudak Dolgusu",
    before: "https://www.drhicranunlu.com/wp-content/uploads/2018/11/03_before.jpg",
    after: "https://www.drhicranunlu.com/wp-content/uploads/2018/11/03_after.jpg"
  },
  kirisiklik: {
    title: "Cilt Kırışıklıklarına Son",
    before: "https://www.drhicranunlu.com/wp-content/uploads/2024/03/once1.jpg",
    after: "https://www.drhicranunlu.com/wp-content/uploads/2024/03/sonra.jpg"
  },
  leke: {
    title: "Cilt Lekelerine Son",
    before: "https://www.drhicranunlu.com/wp-content/uploads/2024/03/oncesi.jpg",
    after: "https://www.drhicranunlu.com/wp-content/uploads/2024/03/sonra2.jpg"
  }
};

const serviceGrid = document.querySelector("#serviceGrid");
const serviceMore = document.querySelector("#serviceMore");
const showMoreServices = document.querySelector("#showMoreServices");
const detail = document.querySelector("#serviceDetail");
const comparisonTabs = document.querySelectorAll(".before-after-tab");
const comparisonRange = document.querySelector("#comparisonRange");
const comparisonBeforeWrap = document.querySelector("#comparisonBeforeWrap");
const comparisonBefore = document.querySelector("#comparisonBefore");
const comparisonAfter = document.querySelector("#comparisonAfter");
const comparisonHandle = document.querySelector("#comparisonHandle");
const comparisonCaption = document.querySelector("#comparisonCaption");
const comparisonSlider = document.querySelector("#comparisonSlider");
const filterButtons = document.querySelectorAll(".filter-button");
const navToggle = document.querySelector(".nav-toggle");
const header = document.querySelector(".site-header");
const serviceLinks = document.querySelectorAll("[data-service-link]");
const heroServiceExtras = document.querySelectorAll(".hero-service-extra");
const showMoreHeroServices = document.querySelector("#showMoreHeroServices");
const heroServices = document.querySelector(".hero-services");

let activeFilter = "all";
let activeService = services[0].id;
let servicesExpanded = false;
let heroServicesExpanded = false;
let activeComparison = "dudak-dolgusu";
let serviceDetailTimer;
let lastScrollY = window.scrollY;
const initialServiceLimit = 5;

function icon(name) {
  return `<i data-lucide="${name}"></i>`;
}

function renderServices() {
  const filtered = services.filter((service) => activeFilter === "all" || service.category === activeFilter);
  const canExpand = filtered.length > initialServiceLimit;
  const visibleServices = servicesExpanded || !canExpand ? filtered : filtered.slice(0, initialServiceLimit);

  serviceGrid.innerHTML = visibleServices
    .map(
      (service, index) => `
        <article class="service-card reveal visible${servicesExpanded && index >= initialServiceLimit ? " extra-card" : ""}" data-category="${service.category}">
          <img src="${service.image}" alt="${service.title}" loading="lazy">
          <div class="service-card-body">
            <span class="tag">${service.tag}</span>
            <h3>${service.title}</h3>
            <p>${service.summary}</p>
            <button type="button" data-service="${service.id}">
              Detay
              ${icon("arrow-right")}
            </button>
          </div>
        </article>
      `
    )
    .join("");

  serviceMore.hidden = !canExpand;
  showMoreServices.setAttribute("aria-expanded", String(servicesExpanded));
  showMoreServices.querySelector("span").textContent = servicesExpanded ? "Daha az göster" : "Daha fazlasını gör";

  serviceGrid.querySelectorAll("[data-service]").forEach((button) => {
    button.addEventListener("click", () => {
      setActiveService(button.dataset.service, true);
    });
  });

  refreshIcons();
}

function refreshServicesWithTransition() {
  serviceGrid.classList.add("is-filtering");
  window.setTimeout(() => {
    renderServices();
    window.requestAnimationFrame(() => serviceGrid.classList.remove("is-filtering"));
  }, 160);
}

function renderDetail(service) {
  detail.innerHTML = `
    <img src="${service.image}" alt="${service.title}" loading="lazy">
    <div class="detail-copy">
      <p class="eyebrow">${service.category}</p>
      <h2>${service.title}</h2>
      ${service.detail.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      <ul>
        ${service.highlights.map((item) => `<li>${item}</li>`).join("")}
      </ul>
      <a class="button primary" href="https://wa.me/905308283310" target="_blank" rel="noreferrer">
        ${icon("message-circle")}
        Randevu Al
      </a>
    </div>
  `;

  refreshIcons();
}

function setActiveService(id, shouldScroll = false) {
  const service = services.find((item) => item.id === id) || services[0];
  activeService = service.id;
  window.clearTimeout(serviceDetailTimer);

  const updateDetail = () => {
    renderDetail(service);
    window.requestAnimationFrame(() => detail.classList.remove("switching"));

    if (shouldScroll) {
      detail.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (detail.children.length) {
    detail.classList.add("switching");
    serviceDetailTimer = window.setTimeout(updateDetail, 160);
    return;
  }

  updateDetail();
}

function setComparisonPosition(value) {
  comparisonBeforeWrap.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
  comparisonHandle.style.left = `${value}%`;
}

function setActiveComparison(id) {
  const comparison = comparisons[id] || comparisons["dudak-dolgusu"];
  activeComparison = id;
  comparisonSlider.classList.remove("is-switching");
  void comparisonSlider.offsetWidth;
  comparisonSlider.classList.add("is-switching");
  comparisonBefore.src = comparison.before;
  comparisonAfter.src = comparison.after;
  comparisonBefore.alt = `${comparison.title} öncesi`;
  comparisonAfter.alt = `${comparison.title} sonrası`;
  comparisonCaption.textContent = comparison.title;
  comparisonRange.value = 50;
  setComparisonPosition(50);
  comparisonTabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.comparison === activeComparison);
  });
  window.setTimeout(() => comparisonSlider.classList.remove("is-switching"), 420);
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    servicesExpanded = false;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    button.classList.remove("active");
    void button.offsetWidth;
    button.classList.add("active");
    refreshServicesWithTransition();
  });
});

showMoreServices.addEventListener("click", () => {
  servicesExpanded = !servicesExpanded;
  refreshServicesWithTransition();
});

showMoreHeroServices.addEventListener("click", () => {
  heroServicesExpanded = !heroServicesExpanded;
  heroServices.classList.toggle("expanded", heroServicesExpanded);
  showMoreHeroServices.setAttribute("aria-expanded", String(heroServicesExpanded));
  showMoreHeroServices.querySelector("span").textContent = heroServicesExpanded ? "Daha az göster" : "Daha fazlasını gör";
  heroServiceExtras.forEach((item) => {
    item.hidden = !heroServicesExpanded;
  });
  refreshIcons();
});

comparisonTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    setActiveComparison(tab.dataset.comparison);
  });
});

comparisonRange.addEventListener("input", () => {
  setComparisonPosition(Number(comparisonRange.value));
});

serviceLinks.forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector("#uygulamalar").scrollIntoView({ behavior: "smooth" });
    setActiveService(button.dataset.serviceLink, false);
  });
});

navToggle.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("nav-open");
  header.classList.remove("is-hidden");
  lastScrollY = window.scrollY;
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Menüyü kapat" : "Menüyü aç");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Menüyü aç");
  });
});

function updateScrollProgress() {
  const currentScroll = window.scrollY;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? currentScroll / scrollable : 0;
  document.body.style.setProperty("--scroll-progress", String(Math.min(1, Math.max(0, progress))));
  header.classList.toggle("scrolled", currentScroll > 20);

  const delta = currentScroll - lastScrollY;
  if (document.body.classList.contains("nav-open") || currentScroll < 80) {
    header.classList.remove("is-hidden");
  } else if (delta > 6 && currentScroll > 140) {
    header.classList.add("is-hidden");
  } else if (delta < -6) {
    header.classList.remove("is-hidden");
  }

  if (Math.abs(delta) > 6 || currentScroll < 2) {
    lastScrollY = currentScroll;
  }
}

window.addEventListener("scroll", updateScrollProgress, { passive: true });

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const statObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const target = Number(entry.target.dataset.count);
      let value = 0;
      const increment = Math.max(1, Math.ceil(target / 42));
      const timer = window.setInterval(() => {
        value = Math.min(target, value + increment);
        entry.target.textContent = value;
        if (value >= target) {
          window.clearInterval(timer);
        }
      }, 24);

      statObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.4 }
);

document.querySelectorAll("[data-count]").forEach((element) => statObserver.observe(element));

renderServices();
setActiveService(activeService);
setActiveComparison(activeComparison);
updateScrollProgress();
window.addEventListener("load", refreshIcons);
