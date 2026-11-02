/* ==========================================================================
   PAWS & WHISKERS - CLIENT-SIDE DATA OBJECTS & INTERACTIVE LOGIC
   All records, packages, services, and groomer profiles are dynamically
   generated from structured JavaScript arrays of objects.
   ========================================================================== */

// 1. Flagship Premium Packages (Homepage)
const flagshipPackages = [
  {
    id: "fp-1",
    name: "Royal Aromatherapy Spa Retreat",
    tier: "Gold Signature",
    priceRM: 185,
    petType: "Dog & Cat",
    duration: "120 Mins",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80",
    description: "Warm Dead Sea mineral mud bath, organic lavender hydro-massage, full breed-standard scissor styling, paw balm therapy, and ultrasonic dental care."
  },
  {
    id: "fp-2",
    name: "Feline Zen Velvet Groom & De-Shed",
    tier: "Cat Exclusive",
    priceRM: 145,
    petType: "Cat",
    duration: "90 Mins",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80",
    description: "Conducted in our soundproof, pheromone-diffused feline suite. Includes waterless or warm chamomile bath, undercoat carding, sanitary trim, and claw caps."
  },
  {
    id: "fp-3",
    name: "Derma-Care Hypoallergenic Medi-Bath",
    tier: "Vet Formulated",
    priceRM: 160,
    petType: "All Pets",
    duration: "100 Mins",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80",
    description: "Specially curated with our veterinary team using oatmeal & micro-bubble ozone therapy to soothe sensitive skin, allergies, and coat dryness."
  }
];

// 2. Standard Pet Services (Minimum 8 required — 9 provided across Dog, Cat, Rabbit)
const petServicesData = [
  {
    id: "srv-1",
    title: "Full Breed-Standard Scissor Styling",
    price: 120,
    category: "Dog",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=700&q=80",
    description: "Precision hand-scissoring tailored to Poodles, Bichons, Terriers, and Shih Tzus, including warm double-wash and fluff blow-dry."
  },
  {
    id: "srv-2",
    title: "Feline Calm Hydro-Bath & Blowout",
    price: 95,
    category: "Cat",
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=700&q=80",
    description: "Low-noise warm bath using cat-safe botanical shampoo, tear-stain cleansing, ear degreasing, and low-velocity warm air drying."
  },
  {
    id: "srv-3",
    title: "Gentle Bunny Brush, Scent-Gland & Nail Care",
    price: 68,
    category: "Rabbit",
    image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=700&q=80",
    description: "100% dry, stress-free grooming for rabbits. Includes molting coat removal, delicate nail tipping, ear check, and sanitary trim."
  },
  {
    id: "srv-4",
    title: "Holland Lop Herbal Lavender Dry-Spa",
    price: 75,
    category: "Rabbit",
    image: "https://images.unsplash.com/photo-1591382696684-38c427c7547a?auto=format&fit=crop&w=700&q=80",
    description: "100% waterless calming chamomile & lavender dry foam cleanse, delicate scent-gland check, sanitary trim, and organic paw balm massage for sensitive bunnies."
  },
  {
    id: "srv-5",
    title: "Persian & Maine Coon Lion/Teddy Clip",
    price: 135,
    category: "Cat",
    image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=700&q=80",
    description: "Safe pelted-mat removal and stylish teddy or lion cut performed by two certified feline handlers without any sedation."
  },
  {
    id: "srv-6",
    title: "Angora & Lionhead Detangling Spa",
    price: 88,
    category: "Rabbit",
    image: "https://images.unsplash.com/photo-1535241749838-299277b6305f?auto=format&fit=crop&w=700&q=80",
    description: "Specialized wool-coat dematting, cooling belly trim to prevent heatstroke, and organic chamomile paw pad conditioning."
  },
  {
    id: "srv-7",
    title: "Ultrasonic Emmi-Pet Dental Hygiene",
    price: 85,
    category: "Dog",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=700&q=80",
    description: "Motionless, vibration-free ultrasound tooth cleaning that softens plaque and neutralizes gum bacteria for fresher breath."
  },
  {
    id: "srv-8",
    title: "Double-Coat De-Shedding Mud Treatment",
    price: 130,
    category: "Dog",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=700&q=80",
    description: "Ideal for Huskies, Corgis, and Golden Retrievers. Releases up to 85% of trapped dead undercoat using argan oil conditioning."
  },
  {
    id: "srv-9",
    title: "Feline Claw Spa & Soft Paws Application",
    price: 55,
    category: "Cat",
    image: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=700&q=80",
    description: "Precision nail trim, paw pad fur neatening, organic shea butter massage, and optional vinyl nail cap fitting."
  }
];

// 3. Grooming Tiers & Add-ons (Packages & Combo Calculator)
const groomingTiers = [
  {
    id: "bronze",
    name: "Bronze Essential",
    basePrice: 75,
    wash: "2x Botanical Cleansing Wash & Blowout",
    nails: "Standard Nail Clipping & Filing",
    hairTrim: "Hygienic Sanitary, Paw Pad & Eye Corner Trim",
    dental: "Mint Breath Freshener Spray"
  },
  {
    id: "silver",
    name: "Silver Deluxe",
    basePrice: 125,
    wash: "Oatmeal & Manuka Honey Spa Bath + Conditioner",
    nails: "Nail Clipping + Dremel Smooth Rounding & Paw Balm",
    hairTrim: "Full Body Contour Styling or De-Shedding Carding",
    dental: "Enzymatic Gel Brushing & Gum Massage"
  },
  {
    id: "gold",
    name: "Gold Royal Spa",
    basePrice: 175,
    wash: "Micro-Bubble Ozone + Dead Sea Mineral Mud Bath",
    nails: "Luxury Claw Cure, Cuticle Oil & Shea Paw Mask",
    hairTrim: "Master Breed-Standard Hand Scissoring / Asian Fusion",
    dental: "Ultrasonic Emmi-Pet Plaque Treatment + Breath Serum"
  }
];

// 4. Expert Groomer Profiles (Meet Our Groomers + Detail Modal)
const groomersData = [
  {
    id: "grm-1",
    name: "Sofya Vance",
    role: "Master Stylist & Salon Director",
    experienceYears: 9,
    specialty: "Terrier Scissor Styling & Asian Fusion Cuts",
    satisfactionScore: "99.4% (410+ Reviews)",
    image: "assets/groomers/sofya_vance.jpg",
    bio: "Sofya trained in classical European breed styling and Asian Fusion trims, specializing in precision hand-scissoring and gentle spa care that keep active pets stylish and comfortable.",
    certificates: [
      "Certified Master Groomer (NDGAA International Track)",
      "European & Asian Fusion Freestyle Gold Medalist",
      "Pet First Aid & Cardiopulmonary Resuscitation (CPR) Certified"
    ],
    portfolio: [
      "Toy Poodle — Teddy Bear Round Ear Sculpting",
      "Wire Fox Terrier — Show-Ring Hand Stripping",
      "Bichon Frise — Cloud Plush Scissor Finish"
    ]
  },
  {
    id: "grm-2",
    name: "Christy Foo",
    role: "Senior Feline & Rabbit Whisperer",
    experienceYears: 7,
    specialty: "Anxious Cat Therapy & Sedation-Free Dematting",
    satisfactionScore: "98.9% (325+ Reviews)",
    image: "assets/groomers/christy_foo.jpg",
    bio: "Christy is dedicated exclusively to cats and exotic small mammals. Using feline pheromone therapy and gentle towel-wrap techniques, she rehabilitates fearful pets with zero stress.",
    certificates: [
      "Certified Feline Master Groomer (CFMG)",
      "Fear-Free® Certified Veterinary & Grooming Professional",
      "Small Mammal Exotic Handling Specialist (MSAVA Workshop)"
    ],
    portfolio: [
      "Maine Coon — Full Coat De-Shed & Ruff Preservation",
      "Persian Rescue — Stress-Free Pelted Coat Rehabilitation",
      "Holland Lop Rabbit — Molting Season Undercoat Release"
    ]
  },
  {
    id: "grm-3",
    name: "Angelina",
    role: "Derma-Spa & Senior Pet Care Lead",
    experienceYears: 6,
    specialty: "Hydro-Ozone Dermatology & Arthritic Senior Pets",
    satisfactionScore: "99.1% (290+ Reviews)",
    image: "assets/groomers/angelina_rossi.jpg",
    bio: "Angelina specializes in geriatric pets and dogs with chronic sensitive skin, providing orthopedic sling support and veterinary-grade medicated mineral hydro-baths.",
    certificates: [
      "Diploma in Canine Dermatology & Hydrotherapy (UK)",
      "Senior & Mobility-Impaired Pet Handling Certification",
      "Emmi-Pet Ultrasonic Dental Hygiene Practitioner"
    ],
    portfolio: [
      "14-Year-Old Golden Retriever — Orthopedic Sling Warm Spa",
      "French Bulldog — Skin Fold Ozone & Oatmeal Medi-Soak",
      "Schnauzer — Seborrhea Relief Mineral Mud Therapy"
    ]
  },
  {
    id: "grm-4",
    name: "Benjamin Czes",
    role: "Double-Coat & Creative Grooming Specialist",
    experienceYears: 5,
    specialty: "Spitz/Husky Deshedding & Puppy First-Groom Socialization",
    satisfactionScore: "98.5% (215+ Reviews)",
    image: "assets/groomers/benjamin_czes.jpg",
    bio: "Benjamin turns salon visits into joyful, low-stress experiences, specializing in deshedding large double-coated breeds and puppy first-groom socialization.",
    certificates: [
      "Certified Professional Pet Stylist (Class A)",
      "Positive Reinforcement Puppy Socialization Certificate",
      "High-Velocity Coat Blowout & Deshedding Mastery"
    ],
    portfolio: [
      "Pomeranian — Natural Plush Outline & Sanitary Neatening",
      "Siberian Husky — High-Velocity Argan Oil Undercoat Blowout",
      "3-Month Corgi Puppy — Positive Intro Bath & Nail Conditioning"
    ]
  }
];

// 5. Promotional Pet Care Tips & Showcase Carousel Data
const promoTips = [
  "💡 Pet Care Tip: Brush your cat or dog 3x a week in humid weather to prevent painful skin hotspots!",
  "🦷 Dental Fact: Ultrasonic tooth cleaning removes plaque bacteria without vibration or anesthesia.",
  "🐰 Rabbit Care: Never submerge rabbits in water! Our dry chamomile grooming keeps bunnies safe & clean.",
  "✨ Promo: Enjoy 10% Multi-Pet Discount when you calculate a combo for 2 or more pets on our Packages page!"
];

const heroShowcaseSlides = [
  {
    img: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=900&q=80",
    caption: "Mochi (Toy Poodle) — Fresh from our Gold Royal Aromatherapy Spa"
  },
  {
    img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=900&q=80",
    caption: "Luna (British Shorthair) — Relaxing in our Pheromone-Diffused Feline Suite"
  },
  {
    img: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=900&q=80",
    caption: "Cooper (Pug) — Soothed with our Derma-Care Micro-Bubble Ozone Bath"
  }
];

// Global Scroll Observer variable
let scrollObserver = null;

/* ==========================================================================
   INITIALIZATION & PAGE-SPECIFIC MODULES
   ========================================================================== */
function initAll() {
  initScrollEffects();
  initPetRain();
  initScrollReveal();
  initMobileNav();
  initPromotionalBanner();
  initHomepage();
  initServicesPage();
  initPackagesAndCalculator();
  initGroomersPage();
  initBookingPage();
  initContactPage();
  initBouncyMicroInteractions();
  initSvgDownloads();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAll);
} else {
  initAll();
}

// 0. Scroll Progress Bar & Back to Top
function initScrollEffects() {
  // Inject Scroll Progress Bar if not present
  if (!document.getElementById("scrollProgressBar")) {
    const bar = document.createElement("div");
    bar.id = "scrollProgressBar";
    bar.className = "scroll-progress-bar";
    document.body.prepend(bar);
  }

  // Inject Back to Top Button if not present
  if (!document.getElementById("backToTopBtn")) {
    const btn = document.createElement("button");
    btn.id = "backToTopBtn";
    btn.className = "back-to-top-btn";
    btn.setAttribute("aria-label", "Back to Top");
    btn.innerHTML = "↑";
    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    document.body.appendChild(btn);
  }

  const progressBar = document.getElementById("scrollProgressBar");
  const backToTopBtn = document.getElementById("backToTopBtn");
  const header = document.querySelector(".site-header");

  window.addEventListener(
    "scroll",
    () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      if (progressBar) {
        progressBar.style.width = `${progress}%`;
      }

      if (header) {
        if (scrollTop > 40) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      }

      if (backToTopBtn) {
        if (scrollTop > 320) {
          backToTopBtn.classList.add("visible");
        } else {
          backToTopBtn.classList.remove("visible");
        }
      }
    },
    { passive: true }
  );
}

// Whimsical Pet-Rain Animation System
function initPetRain() {
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  let container = document.getElementById("petRainContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "petRainContainer";
    container.className = "pet-rain-container";
    container.setAttribute("aria-hidden", "true");
    document.body.prepend(container);
  }

  const icons = [
    // 1. 5-Toe Paw Print (matches uploaded asset)
    '<svg viewBox="0 0 100 100" fill="currentColor"><ellipse cx="50" cy="27" rx="11" ry="15"/><ellipse cx="27" cy="38" rx="10" ry="14" transform="rotate(-18 27 38)"/><ellipse cx="73" cy="38" rx="10" ry="14" transform="rotate(18 73 38)"/><ellipse cx="19" cy="62" rx="8" ry="10" transform="rotate(-35 19 62)"/><ellipse cx="81" cy="62" rx="8" ry="10" transform="rotate(35 81 62)"/><path d="M29 65 C25 76 34 85 50 85 C66 85 75 76 71 65 C68 53 58 48 50 48 C42 48 32 53 29 65 Z"/></svg>',
    // 2. Cute Dog Head (with white face details)
    '<svg viewBox="0 0 100 100"><path fill="currentColor" d="M31 23 C38 20 62 20 69 23 C73 24 78 28 80 32 C85 32 90 38 90 47 C90 56 83 62 75 62 C73 67 70 72 65 76 C57 82 43 82 35 76 C30 72 27 67 25 62 C17 62 10 56 10 47 C10 38 15 32 20 32 C22 28 27 24 31 23 Z"/><circle cx="37" cy="49" r="5" fill="#FFFFFF"/><circle cx="63" cy="49" r="5" fill="#FFFFFF"/><ellipse cx="50" cy="58" rx="6.5" ry="5" fill="#FFFFFF"/><path d="M50 58 L50 64 M40 64 C40 70 49 72 50 64 C51 72 60 70 60 64" fill="none" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    // 3. Cute Cat Head (with pointed ears and whiskers)
    '<svg viewBox="0 0 100 100"><path fill="currentColor" d="M21 21 C22 21 29 27 38 29 C44 27 56 27 62 29 C71 27 78 21 79 21 C82 20 86 26 85 36 C87 43 87 53 84 62 C80 73 68 81 50 81 C32 81 20 73 16 62 C13 53 13 43 15 36 C14 26 18 20 21 21 Z"/><circle cx="37" cy="52" r="5" fill="#FFFFFF"/><circle cx="63" cy="52" r="5" fill="#FFFFFF"/><ellipse cx="50" cy="60" rx="5" ry="3.8" fill="#FFFFFF"/><path d="M50 60 L50 65 M42 64 C42 69 49 71 50 65 C51 71 58 64 58 64" fill="none" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M23 58 L31 59 M23 65 L31 64 M77 58 L69 59 M77 65 L69 64" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/></svg>',
    // 4. Cute Rabbit Head (with tall ears and whiskers)
    '<svg viewBox="0 0 100 100"><path fill="currentColor" d="M30 11 C35 11 41 18 43 36 C45 37 47 38 50 38 C53 38 55 37 57 36 C59 18 65 11 70 11 C76 11 81 19 79 38 C83 45 84 55 83 63 C80 75 67 85 50 85 C33 85 20 75 17 63 C16 55 17 45 21 38 C19 19 24 11 30 11 Z"/><circle cx="38" cy="62" r="4.8" fill="#FFFFFF"/><circle cx="62" cy="62" r="4.8" fill="#FFFFFF"/><ellipse cx="50" cy="70" rx="5" ry="3.8" fill="#FFFFFF"/><path d="M50 70 L50 75 M42 74 C42 79 49 80 50 75 C51 80 58 74 58 74" fill="none" stroke="#FFFFFF" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M25 68 L33 69 M26 74 L33 73 M75 68 L67 69 M74 74 L67 73" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/></svg>'
  ];

  const colors = [
    "var(--primary)",
    "var(--accent)",
    "var(--gold)",
    "#236f6a",
    "#db6e51"
  ];

  const particleCount = 45;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < particleCount; i++) {
    const item = document.createElement("div");
    item.className = "pet-rain-item";
    item.innerHTML = icons[i % icons.length];

    // Distribute vertically across the entire scrollable page height with gentle jitter
    const topPercent = ((i / particleCount) * 94 + (Math.random() * 2 - 1)).toFixed(2);
    const left = (Math.random() * 94).toFixed(2); // 0% to 94%
    const size = Math.floor(18 + Math.random() * 12); // 18px to 30px
    const opacity = (0.14 + Math.random() * 0.18).toFixed(2); // 0.14 to 0.32
    const duration = (8 + Math.random() * 9).toFixed(1); // 8s to 17s
    const delay = -(Math.random() * 16).toFixed(1); // Negative delay so animation is already active
    const color = colors[i % colors.length];

    item.style.top = `${topPercent}%`;
    item.style.left = `${left}%`;
    item.style.width = `${size}px`;
    item.style.height = `${size}px`;
    item.style.setProperty("--target-opacity", opacity);
    item.style.color = color;
    item.style.animationDuration = `${duration}s`;
    item.style.animationDelay = `${delay}s`;

    fragment.appendChild(item);
  }

  container.appendChild(fragment);
}

// Scroll Reveal Observer
function initScrollReveal() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".card, .section-header, .feature-box, .table-responsive, .calc-panel, .hero-showcase").forEach((el) => {
      el.classList.add("revealed");
    });
    return;
  }

  scrollObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          scrollObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  refreshScrollObserver();
}

function refreshScrollObserver() {
  if (!scrollObserver) return;
  const targets = document.querySelectorAll(
    ".card, .section-header, .feature-box, .table-responsive, .calc-panel, .mock-map-box, .hero-showcase, .facility-grid > div"
  );
  targets.forEach((el, index) => {
    if (!el.classList.contains("revealed")) {
      el.classList.add("reveal");
      // Add staggered delay to grid items
      const parentGrid = el.closest(".grid-3, .grid-4, .facility-features");
      if (parentGrid) {
        const siblingIdx = Array.from(parentGrid.children).indexOf(el);
        if (siblingIdx >= 0) {
          el.style.transitionDelay = `${(siblingIdx % 4) * 0.1}s`;
        }
      }
      scrollObserver.observe(el);
    }
  });
}

// Bouncy Micro-interactions
function initBouncyMicroInteractions() {
  const brand = document.querySelector(".brand-logo");
  if (brand) {
    brand.classList.add("text-bouncy");
  }

  document.querySelectorAll(".badge").forEach((b) => {
    b.classList.add("text-bouncy");
  });
}

// Mobile Navigation Toggle
function initMobileNav() {
  const menuBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");
  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }
}

// JS Requirement 7.1: Time-aware Greeting + Rotating Pet Care Tips Banner
function initPromotionalBanner() {
  const greetingEl = document.getElementById("timeGreeting");
  const tipEl = document.getElementById("rotatingTip");

  if (greetingEl) {
    const hour = new Date().getHours();
    let greeting = "Welcome, Pet Lover!";
    if (hour < 12) greeting = "☀️ Good Morning, Pet Parent!";
    else if (hour < 18) greeting = "🌤️ Good Afternoon, Pet Parent!";
    else greeting = "🌙 Good Evening, Pet Parent!";
    greetingEl.textContent = greeting;
  }

  if (tipEl) {
    let tipIndex = 0;
    setInterval(() => {
      tipEl.style.opacity = "0";
      setTimeout(() => {
        tipIndex = (tipIndex + 1) % promoTips.length;
        tipEl.textContent = promoTips[tipIndex];
        tipEl.style.opacity = "1";
      }, 280);
    }, 4500);
  }
}

// 1. Homepage Logic (Flagship Packages + Hero Showcase Carousel)
function initHomepage() {
  const flagshipContainer = document.getElementById("flagshipPackagesGrid");
  if (flagshipContainer) {
    flagshipContainer.innerHTML = flagshipPackages
      .map(
        (pkg, idx) => `
      <article class="card reveal" style="transition-delay: ${idx * 0.12}s;">
        <img src="${pkg.image}" alt="${pkg.name}" class="card-img" loading="lazy" />
        <div class="card-body">
          <div class="card-meta">
            <span class="badge badge-gold text-bouncy">${pkg.tier} • ${pkg.duration}</span>
            <span class="price-tag text-drop-shadow">RM ${pkg.priceRM}</span>
          </div>
          <h3 class="card-title">${pkg.name}</h3>
          <p class="card-desc">${pkg.description}</p>
          <a href="booking.html?pkg=${encodeURIComponent(pkg.name)}" class="btn btn-primary">Book Flagship Spa</a>
        </div>
      </article>
    `
      )
      .join("");
    refreshScrollObserver();
  }

  // Automatic Hero Image Carousel
  const heroImg = document.getElementById("heroCarouselImg");
  const heroCap = document.getElementById("heroCarouselCaption");
  const nextBtn = document.getElementById("nextSlideBtn");
  if (heroImg && heroCap) {
    let slideIdx = 0;
    const updateSlide = () => {
      heroImg.style.opacity = "0.4";
      setTimeout(() => {
        heroImg.src = heroShowcaseSlides[slideIdx].img;
        heroCap.textContent = heroShowcaseSlides[slideIdx].caption;
        heroImg.style.opacity = "1";
      }, 200);
    };
    const advanceSlide = () => {
      slideIdx = (slideIdx + 1) % heroShowcaseSlides.length;
      updateSlide();
    };
    let timer = setInterval(advanceSlide, 5000);
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        clearInterval(timer);
        advanceSlide();
        timer = setInterval(advanceSlide, 5000);
      });
    }
  }
}

// 2. Services Page Logic (Dynamic Array Rendering + Category Filter Bar)
function initServicesPage() {
  const servicesGrid = document.getElementById("servicesGrid");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const countLabel = document.getElementById("serviceCountLabel");

  if (!servicesGrid) return;

  function renderServices(categoryFilter = "All") {
    const filtered =
      categoryFilter === "All"
        ? petServicesData
        : petServicesData.filter((item) => item.category === categoryFilter);

    if (countLabel) {
      if (categoryFilter === "All") {
        countLabel.textContent = `Showing all ${petServicesData.length} services (3 Dogs, 3 Cats, 3 Rabbits)`;
      } else {
        countLabel.textContent = `Showing ${filtered.length} of ${petServicesData.length} services (${categoryFilter}s)`;
      }
    }

    servicesGrid.innerHTML = filtered
      .map((srv, idx) => {
        const badgeClass =
          srv.category === "Dog"
            ? "badge-dog"
            : srv.category === "Cat"
            ? "badge-cat"
            : "badge-rabbit";

        return `
        <article class="card reveal" style="transition-delay: ${(idx % 3) * 0.1}s;">
          <img src="${srv.image}" alt="${srv.title}" class="card-img" loading="lazy" />
          <div class="card-body">
            <div class="card-meta">
              <span class="badge ${badgeClass} text-bouncy">${srv.category}</span>
              <span class="price-tag text-drop-shadow">RM ${srv.price}</span>
            </div>
            <h3 class="card-title">${srv.title}</h3>
            <p class="card-desc">${srv.description}</p>
            <a href="booking.html?pkg=${encodeURIComponent(srv.title)}" class="btn btn-outline">Select Service</a>
          </div>
        </article>
      `;
      })
      .join("");

    refreshScrollObserver();
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderServices(btn.dataset.category);
    });
  });

  renderServices("All");
}

// 3. Packages Comparison Table & Live Combo Cost Calculator
function initPackagesAndCalculator() {
  const tableBody = document.getElementById("comparisonTableBody");
  if (tableBody) {
    const rows = [
      { label: "Starting Base Price", key: "basePrice", isPrice: true },
      { label: "Wash Treatments", key: "wash" },
      { label: "Nail Clippings", key: "nails" },
      { label: "Hair-Trim Options", key: "hairTrim" },
      { label: "Dental Cleaning", key: "dental" }
    ];

    tableBody.innerHTML = rows
      .map(
        (row) => `
      <tr>
        <td><strong>${row.label}</strong></td>
        ${groomingTiers
          .map(
            (tier) =>
              `<td>${
                row.isPrice
                  ? `<span class="price-tag text-drop-shadow">RM ${tier[row.key]}</span>`
                  : tier[row.key]
              }</td>`
          )
          .join("")}
      </tr>
    `
      )
      .join("");
  }

  // Combo Calculator Logic
  const calcForm = document.getElementById("comboCalculatorForm");
  if (!calcForm) return;

  const tierSelect = document.getElementById("calcTier");
  const sizeSelect = document.getElementById("calcPetSize");
  const coatHealthSelect = document.getElementById("calcCoatHealth");
  const petCountInput = document.getElementById("calcPetCount");
  const addonCheckboxes = document.querySelectorAll(".calc-addon");
  const breakdownContainer = document.getElementById("receiptBreakdown");
  const totalDisplay = document.getElementById("receiptTotalRM");
  const bookCalculatedBtn = document.getElementById("bookCalculatedBtn");

  function computeComboCost() {
    const selectedTierOption = tierSelect.options[tierSelect.selectedIndex];
    const tierName = selectedTierOption.text;
    const basePrice = parseFloat(selectedTierOption.dataset.price || 75);

    const selectedSizeOption = sizeSelect.options[sizeSelect.selectedIndex];
    const sizeLabel = selectedSizeOption.text;
    const sizeSurcharge = parseFloat(selectedSizeOption.dataset.surcharge || 0);

    let coatHealthSurcharge = 0;
    let coatHealthLabel = "Normal & Healthy Coat";
    if (coatHealthSelect) {
      const selectedCoatOption = coatHealthSelect.options[coatHealthSelect.selectedIndex];
      coatHealthLabel = selectedCoatOption.text;
      coatHealthSurcharge = parseFloat(selectedCoatOption.dataset.surcharge || 0);
    }

    const petCount = Math.max(1, Math.min(5, parseInt(petCountInput.value, 10) || 1));

    let addonsTotal = 0;
    const selectedAddons = [];
    addonCheckboxes.forEach((cb) => {
      if (cb.checked) {
        const price = parseFloat(cb.dataset.price);
        addonsTotal += price;
        selectedAddons.push({ name: cb.dataset.name, price });
      }
    });

    const singlePetSubtotal = basePrice + sizeSurcharge + coatHealthSurcharge + addonsTotal;
    const grossTotal = singlePetSubtotal * petCount;
    const multiPetDiscount = petCount >= 2 ? grossTotal * 0.1 : 0;
    const finalTotal = grossTotal - multiPetDiscount;

    // Render live breakdown
    let html = `
      <div class="receipt-line">
        <span>Base Tier (${tierName.split(" (")[0]})</span>
        <strong>RM ${basePrice.toFixed(2)}</strong>
      </div>
      <div class="receipt-line">
        <span>Size Adjustment (${sizeLabel.split(" (")[0]})</span>
        <strong>+ RM ${sizeSurcharge.toFixed(2)}</strong>
      </div>
      <div class="receipt-line">
        <span>Coat Health (${coatHealthLabel.split(" (")[0].replace(/^[^\w]+/, "").trim()})</span>
        <strong>+ RM ${coatHealthSurcharge.toFixed(2)}</strong>
      </div>
    `;

    selectedAddons.forEach((addon) => {
      html += `
        <div class="receipt-line">
          <span>Add-on: ${addon.name}</span>
          <strong>+ RM ${addon.price.toFixed(2)}</strong>
        </div>
      `;
    });

    html += `
      <div class="receipt-line">
        <span>Number of Pets</span>
        <strong>× ${petCount}</strong>
      </div>
    `;

    if (multiPetDiscount > 0) {
      html += `
        <div class="receipt-line" style="color: #86efac;">
          <span>Multi-Pet Combo Discount (10% OFF)</span>
          <strong>- RM ${multiPetDiscount.toFixed(2)}</strong>
        </div>
      `;
    }

    breakdownContainer.innerHTML = html;
    totalDisplay.textContent = `RM ${finalTotal.toFixed(2)}`;

    // Bouncy subtle pulse on price update
    totalDisplay.classList.remove("text-bouncy");
    void totalDisplay.offsetWidth; // trigger reflow
    totalDisplay.classList.add("text-bouncy");

    if (bookCalculatedBtn) {
      bookCalculatedBtn.href = `booking.html?pkg=${encodeURIComponent(
        `${tierName.split(" (")[0]} (Est. RM ${finalTotal.toFixed(2)})`
      )}`;
    }
  }

  calcForm.addEventListener("input", computeComboCost);
  calcForm.addEventListener("change", computeComboCost);
  computeComboCost();
}

// 4. Meet Our Groomers & Interactive Groomer Detail Modal
function initGroomersPage() {
  const groomersGrid = document.getElementById("groomersGrid");
  const modalOverlay = document.getElementById("groomerModalOverlay");
  const modalContent = document.getElementById("groomerModalContent");
  const modalCloseBtn = document.getElementById("closeModalBtn");

  if (!groomersGrid) return;

  groomersGrid.innerHTML = groomersData
    .map(
      (g, idx) => `
    <article class="card reveal" style="cursor: pointer; transition-delay: ${idx * 0.1}s;" data-groomer-id="${g.id}">
      <img src="${g.image}" alt="${g.name}" class="card-img" style="height: 260px;" loading="lazy" />
      <div class="card-body">
        <div class="card-meta">
          <span class="badge badge-gold text-bouncy">${g.experienceYears} Years Exp.</span>
          <span style="font-size:0.88rem; font-weight:700; color:var(--primary);">⭐ ${g.satisfactionScore.split(" ")[0]}</span>
        </div>
        <h3 class="card-title">${g.name}</h3>
        <p style="font-weight:700; color:var(--accent); font-size:0.92rem; margin-bottom:0.5rem;">${g.role}</p>
        <p class="card-desc"><strong>Specialty:</strong> ${g.specialty}</p>
        <button type="button" class="btn btn-outline" style="width:100%;">View Portfolio & Certificates</button>
      </div>
    </article>
  `
    )
    .join("");

  refreshScrollObserver();

  function openGroomerModal(groomerId) {
    const g = groomersData.find((item) => item.id === groomerId);
    if (!g || !modalOverlay || !modalContent) return;

    modalContent.innerHTML = `
      <div style="display:flex; gap:1.5rem; align-items:center; flex-wrap:wrap; margin-bottom:1.5rem;">
        <img src="${g.image}" alt="${g.name}" style="width:115px; height:115px; border-radius:50%; object-fit:cover; border:3px solid var(--primary); box-shadow:0 8px 20px rgba(31,95,91,0.25);" />
        <div>
          <span class="badge badge-gold text-bouncy">${g.experienceYears} Years Experience</span>
          <h2 style="color:var(--primary-dark); margin:0.35rem 0 0.15rem; font-size:1.6rem;">${g.name}</h2>
          <p style="color:var(--accent); font-weight:700;">${g.role}</p>
          <p style="font-size:0.92rem; margin-top:0.25rem;"><strong>Customer Satisfaction Score:</strong> ⭐ ${g.satisfactionScore}</p>
        </div>
      </div>
      <p style="margin-bottom:1.35rem; color:var(--text-muted); line-height:1.65;">${g.bio}</p>
      <div style="background:var(--surface-alt); padding:1.25rem; border-radius:14px; margin-bottom:1.25rem; border:1px solid var(--border);">
        <h4 style="color:var(--primary-dark); margin-bottom:0.6rem;">🏅 Professional Certificates & Accreditations</h4>
        <ul style="padding-left:1.25rem; line-height:1.7;">
          ${g.certificates.map((c) => `<li style="margin-bottom:0.35rem;">${c}</li>`).join("")}
        </ul>
      </div>
      <div style="background:var(--bg); border:1px solid var(--border); padding:1.25rem; border-radius:14px; margin-bottom:1.75rem;">
        <h4 style="color:var(--primary-dark); margin-bottom:0.6rem;">✂️ Highlighted Grooming Portfolio</h4>
        <ul style="padding-left:1.25rem; line-height:1.7;">
          ${g.portfolio.map((p) => `<li style="margin-bottom:0.35rem;">${p}</li>`).join("")}
        </ul>
      </div>
      <div style="display:flex; justify-content:flex-end; gap:0.75rem;">
        <a href="booking.html?pkg=${encodeURIComponent("Session with " + g.name)}" class="btn btn-primary">Book with ${g.name.split(" ")[0]} ➔</a>
      </div>
    `;

    modalOverlay.classList.add("open");
  }

  groomersGrid.querySelectorAll("[data-groomer-id]").forEach((card) => {
    card.addEventListener("click", () => {
      openGroomerModal(card.dataset.groomerId);
    });
  });

  if (modalCloseBtn && modalOverlay) {
    modalCloseBtn.addEventListener("click", () => modalOverlay.classList.remove("open"));
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) modalOverlay.classList.remove("open");
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modalOverlay.classList.contains("open")) {
        modalOverlay.classList.remove("open");
      }
    });
  }
}

// Master Booking Catalog with Pet Type Rules (Universal vs. Exclusive)
const bookingCatalog = [
  // Universal Packages (All Pets: Dog, Cat, Rabbit)
  {
    id: "pkg-gold",
    name: "Gold Royal Spa Package (RM 175)",
    shortName: "Gold Royal Spa",
    price: 175,
    category: "All",
    icon: "🥇",
    desc: "Micro-bubble ozone, Dead Sea mud bath, master contour scissor trim & ultrasonic dental hygiene."
  },
  {
    id: "pkg-silver",
    name: "Silver Deluxe Package (RM 125)",
    shortName: "Silver Deluxe",
    price: 125,
    category: "All",
    icon: "🥈",
    desc: "Oatmeal honey bath, nail clipping/dremel, body contour styling & dental enzymatic massage."
  },
  {
    id: "pkg-bronze",
    name: "Bronze Essential Package (RM 75)",
    shortName: "Bronze Essential",
    price: 75,
    category: "All",
    icon: "🥉",
    desc: "2x botanical wash, blowout, nail trim, hygienic sanitary neaten & breath freshener spray."
  },
  {
    id: "pkg-aromatherapy",
    name: "Royal Aromatherapy Spa Retreat (RM 185)",
    shortName: "Royal Aromatherapy Spa Retreat",
    price: 185,
    category: "All",
    icon: "✨",
    desc: "Warm Dead Sea mineral mud bath, lavender hydro-massage & ultrasonic dental care."
  },
  {
    id: "pkg-dermacare",
    name: "Derma-Care Hypoallergenic Medi-Bath (RM 160)",
    shortName: "Derma-Care Hypoallergenic Medi-Bath",
    price: 160,
    category: "All",
    icon: "🩺",
    desc: "Vet-formulated oatmeal & micro-bubble ozone bath for sensitive, allergic, or dry skin."
  },

  // Dog-Exclusive Services
  {
    id: "dog-scissor",
    name: "Full Breed-Standard Scissor Styling (RM 120)",
    shortName: "Full Breed-Standard Scissor Styling",
    price: 120,
    category: "Dog",
    icon: "✂️",
    desc: "Precision hand-scissoring tailored to Poodles, Bichons, Shih Tzus & Terriers (🐶 Dog Exclusive)."
  },
  {
    id: "dog-ozone",
    name: "Micro-Bubble Ozone Skin Therapy (RM 110)",
    shortName: "Micro-Bubble Ozone Skin Therapy",
    price: 110,
    category: "Dog",
    icon: "🫧",
    desc: "Nano-bubble sebum, yeast, and deep pore odor cleansing (🐶 Dog Exclusive)."
  },
  {
    id: "dog-dental",
    name: "Ultrasonic Emmi-Pet Dental Hygiene (RM 85)",
    shortName: "Ultrasonic Emmi-Pet Dental Hygiene",
    price: 85,
    category: "Dog",
    icon: "🦷",
    desc: "Vibration-free motionless ultrasound plaque and tartar neutralization (🐶 Dog Exclusive)."
  },
  {
    id: "dog-deshed",
    name: "Double-Coat De-Shedding Mud Treatment (RM 130)",
    shortName: "Double-Coat De-Shedding Mud Treatment",
    price: 130,
    category: "Dog",
    icon: "🐕",
    desc: "Undercoat release for Huskies, Corgis, Golden Retrievers & Spitz (🐶 Dog Exclusive)."
  },

  // Cat-Exclusive Services
  {
    id: "cat-feline-zen",
    name: "Feline Zen Velvet Groom & De-Shed (RM 145)",
    shortName: "Feline Zen Velvet Groom & De-Shed",
    price: 145,
    category: "Cat",
    icon: "🐱",
    desc: "Conducted in soundproof feline suite with calming pheromone diffusers & claw caps (🐱 Cat Exclusive)."
  },
  {
    id: "cat-hydro",
    name: "Feline Calm Hydro-Bath & Blowout (RM 95)",
    shortName: "Feline Calm Hydro-Bath & Blowout",
    price: 95,
    category: "Cat",
    icon: "🛁",
    desc: "Low-noise botanical wash, tear-stain cleansing & warm quiet fluff dry (🐱 Cat Exclusive)."
  },
  {
    id: "cat-lion",
    name: "Persian & Maine Coon Lion/Teddy Clip (RM 135)",
    shortName: "Persian & Maine Coon Lion/Teddy Clip",
    price: 135,
    category: "Cat",
    icon: "🦁",
    desc: "Safe sedation-free dematting and stylish teddy or lion clip (🐱 Cat Exclusive)."
  },
  {
    id: "cat-claw",
    name: "Feline Claw Spa & Soft Paws Application (RM 55)",
    shortName: "Feline Claw Spa & Soft Paws Application",
    price: 55,
    category: "Cat",
    icon: "🐾",
    desc: "Precision claw tipping, paw fur neatening, organic shea butter & vinyl caps (🐱 Cat Exclusive)."
  },

  // Rabbit-Exclusive Services
  {
    id: "rabbit-brush",
    name: "Gentle Bunny Brush, Scent-Gland & Nail Care (RM 68)",
    shortName: "Gentle Bunny Brush & Nail Care",
    price: 68,
    category: "Rabbit",
    icon: "🐰",
    desc: "100% dry stress-free undercoat carding, scent-gland check & nail trim (🐰 Rabbit Exclusive)."
  },
  {
    id: "rabbit-angora",
    name: "Angora & Lionhead Detangling Spa (RM 88)",
    shortName: "Angora & Lionhead Detangling Spa",
    price: 88,
    category: "Rabbit",
    icon: "🌾",
    desc: "Specialized wool-coat dematting & chamomile paw pad conditioning (🐰 Rabbit Exclusive)."
  },
  {
    id: "rabbit-lavender",
    name: "Holland Lop Herbal Lavender Dry-Spa (RM 75)",
    shortName: "Bunny Herbal Lavender Dry-Spa",
    price: 75,
    category: "Rabbit",
    icon: "🌿",
    desc: "100% waterless chamomile & lavender dry foam cleanse, ear care, sanitary trim & organic paw balm (🐰 Rabbit Exclusive)."
  }
];

// Helper to look up service in master catalog
function findServiceInCatalog(query) {
  if (!query) return null;
  const q = query.toLowerCase().trim();
  return (
    bookingCatalog.find(
      (s) =>
        s.name.toLowerCase() === q ||
        s.shortName.toLowerCase() === q ||
        s.id.toLowerCase() === q ||
        q.includes(s.shortName.toLowerCase()) ||
        s.shortName.toLowerCase().includes(q) ||
        q.includes(s.name.toLowerCase())
    ) || null
  );
}

// 5. Booking Page Logic (Species-Exclusive Locking + Malaysian Phone Validation + Structured Receipt)
function initBookingPage() {
  const bookingForm = document.getElementById("bookingForm");
  const ownerNameInput = document.getElementById("ownerName");
  const contactPhoneInput = document.getElementById("contactPhone");
  const petTypeSelect = document.getElementById("petType");
  const petNameInput = document.getElementById("petName");
  const packageSelect = document.getElementById("selectedPackage");
  const dateInput = document.getElementById("appointmentDate");
  const timeSlotSelect = document.getElementById("timeSlot");
  const confirmationBox = document.getElementById("bookingConfirmationBox");
  const petLockNotice = document.getElementById("petLockNotice");
  const petLockIcon = document.getElementById("petLockIcon");
  const petLockText = document.getElementById("petLockText");
  const petUnlockBtn = document.getElementById("petUnlockBtn");
  const packageFilterTag = document.getElementById("packageFilterTag");
  const serviceDetailsHint = document.getElementById("serviceDetailsHint");

  if (!bookingForm || !petTypeSelect || !packageSelect) return;

  // Set minimum date to today (YYYY-MM-DD)
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const todayStr = `${year}-${month}-${day}`;

  if (dateInput) {
    dateInput.min = todayStr;
    if (!dateInput.value) {
      dateInput.value = todayStr;
    }
  }

  // Populate services dropdown according to the current pet type
  function populateServicesForPet(currentPet, desiredServiceName = null) {
    const exclusiveServices = bookingCatalog.filter((s) => s.category === currentPet);
    const universalServices = bookingCatalog.filter((s) => s.category === "All");

    let html = "";
    if (exclusiveServices.length > 0) {
      const petEmoji = currentPet === "Dog" ? "🐶" : currentPet === "Cat" ? "🐱" : "🐰";
      html += `<optgroup label="🌟 ${petEmoji} ${currentPet} Exclusive Treatments">`;
      exclusiveServices.forEach((s) => {
        html += `<option value="${s.name}">${s.icon} ${s.name}</option>`;
      });
      html += `</optgroup>`;
    }

    html += `<optgroup label="🐾 All-Pets Universal Spa Packages">`;
    universalServices.forEach((s) => {
      html += `<option value="${s.name}">${s.icon} ${s.name}</option>`;
    });
    html += `</optgroup>`;

    packageSelect.innerHTML = html;

    if (packageFilterTag) {
      packageFilterTag.textContent = `Filtered for ${currentPet}`;
    }

    // Try to select desired service if compatible
    let matched = false;
    if (desiredServiceName) {
      const match = findServiceInCatalog(desiredServiceName);
      if (match && (match.category === "All" || match.category === currentPet)) {
        for (let i = 0; i < packageSelect.options.length; i++) {
          if (packageSelect.options[i].value === match.name) {
            packageSelect.selectedIndex = i;
            matched = true;
            break;
          }
        }
      }
    }

    if (!matched && packageSelect.options.length > 0) {
      packageSelect.selectedIndex = 0;
    }

    syncLockState();
  }

  // Synchronize lock status between selected service and pet type
  function syncLockState() {
    const selectedVal = packageSelect.value;
    const currentService = findServiceInCatalog(selectedVal);

    if (!currentService) return;

    // Display service description and tag
    if (serviceDetailsHint) {
      const catLabel =
        currentService.category === "All"
          ? "✅ Universal (All Pets: Dog, Cat, Rabbit)"
          : `🔒 ${currentService.category} Exclusive Treatment`;
      serviceDetailsHint.innerHTML = `<strong>${currentService.icon} ${currentService.shortName}:</strong> ${currentService.desc} <span style="display:inline-block; margin-top:0.25rem; font-weight:700; color:var(--primary-dark); font-size:0.8rem; background:rgba(31,95,91,0.08); padding:0.15rem 0.45rem; border-radius:6px;">${catLabel}</span>`;
    }

    // LOCKING RULES:
    if (currentService.category !== "All") {
      // 1. Force pet type to match the exclusive service
      if (petTypeSelect.value !== currentService.category) {
        petTypeSelect.value = currentService.category;
      }

      // 2. Disable incompatible pet options so pet type cannot be changed while this exclusive service is chosen
      Array.from(petTypeSelect.options).forEach((opt) => {
        if (opt.value !== currentService.category) {
          opt.disabled = true;
          opt.textContent = `${opt.value === "Dog" ? "🐶" : opt.value === "Cat" ? "🐱" : "🐰"} ${opt.value} (Unavailable for ${currentService.category} service)`;
        } else {
          opt.disabled = false;
          opt.textContent = `${opt.value === "Dog" ? "🐶" : opt.value === "Cat" ? "🐱" : "🐰"} ${opt.value} (Locked to this exclusive service)`;
        }
      });

      // 3. Highlight the lock indicator
      if (petLockNotice) {
        petLockNotice.className = "pet-type-notice locked";
        if (petLockIcon) petLockIcon.textContent = "🔒";
        if (petLockText) {
          petLockText.innerHTML = `<strong>Locked to ${currentService.category}:</strong> "${currentService.shortName}" is exclusive to ${currentService.category}s.`;
        }
        if (petUnlockBtn) petUnlockBtn.style.display = "inline-block";
      }
    } else {
      // UNIVERSAL PACKAGE: All pet types allowed and unlocked!
      Array.from(petTypeSelect.options).forEach((opt) => {
        opt.disabled = false;
        opt.textContent = `${opt.value === "Dog" ? "🐶" : opt.value === "Cat" ? "🐱" : "🐰"} ${opt.value}`;
      });

      if (petLockNotice) {
        petLockNotice.className = "pet-type-notice unlocked";
        if (petLockIcon) petLockIcon.textContent = "✅";
        if (petLockText) {
          petLockText.textContent = `Unlocked: Available for all pets. You can freely switch between Dog, Cat, or Rabbit.`;
        }
        if (petUnlockBtn) petUnlockBtn.style.display = "none";
      }
    }
  }

  // Handle URL parameters (e.g. from services.html or homepage)
  const params = new URLSearchParams(window.location.search);
  const preselectedPkg = params.get("pkg");
  const preselectedPet = params.get("pet");

  let initialPet = "Dog";
  if (preselectedPet && ["Dog", "Cat", "Rabbit"].includes(preselectedPet)) {
    initialPet = preselectedPet;
  } else if (preselectedPkg) {
    const srvMatch = findServiceInCatalog(preselectedPkg);
    if (srvMatch && srvMatch.category !== "All") {
      initialPet = srvMatch.category;
    }
  }

  petTypeSelect.value = initialPet;
  populateServicesForPet(initialPet, preselectedPkg);

  // Event Listener: When user changes Pet Type
  petTypeSelect.addEventListener("change", () => {
    const newPet = petTypeSelect.value;
    const currentService = findServiceInCatalog(packageSelect.value);

    // If current service is universal, keep it selected. Otherwise let it pick a valid service for the new pet.
    const keepPkg = currentService && currentService.category === "All" ? currentService.name : null;
    populateServicesForPet(newPet, keepPkg);
    clearFieldError("petType");
    clearFieldError("selectedPackage");
  });

  // Event Listener: When user changes Service from the dropdown
  packageSelect.addEventListener("change", () => {
    syncLockState();
    clearFieldError("selectedPackage");
    clearFieldError("petType");
  });

  // Event Listener: Unlock button to switch to universal package
  if (petUnlockBtn) {
    petUnlockBtn.addEventListener("click", () => {
      // Re-enable all options first
      Array.from(petTypeSelect.options).forEach((opt) => {
        opt.disabled = false;
        opt.textContent = `${opt.value === "Dog" ? "🐶" : opt.value === "Cat" ? "🐱" : "🐰"} ${opt.value}`;
      });

      // Switch to universal Gold Royal Spa package
      populateServicesForPet(petTypeSelect.value, "Gold Royal Spa Package (RM 175)");
      clearFieldError("petType");
      clearFieldError("selectedPackage");
    });
  }

  // Validation helpers
  function clearFieldError(fieldId) {
    const field = document.getElementById(fieldId);
    const errorEl = document.getElementById(fieldId + "Error");
    if (field) field.classList.remove("invalid");
    if (errorEl) {
      errorEl.textContent = "";
      errorEl.classList.remove("visible");
    }
  }

  function setFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorEl = document.getElementById(fieldId + "Error");
    if (field) field.classList.add("invalid");
    if (errorEl) {
      errorEl.textContent = `⚠️ ${message}`;
      errorEl.classList.add("visible");
    }
  }

  // Real-time error clearing when user types or changes an input
  [ownerNameInput, contactPhoneInput, petTypeSelect, petNameInput, packageSelect, dateInput, timeSlotSelect].forEach(
    (el) => {
      if (!el) return;
      el.addEventListener("input", () => clearFieldError(el.id));
      el.addEventListener("change", () => clearFieldError(el.id));
    }
  );

  // Validation Rule 1: Malaysian Phone Number Validation
  function isValidMalaysianPhone(phoneStr) {
    if (!phoneStr) return false;
    const cleaned = phoneStr.replace(/[\s\-\(\)]/g, "");
    const regex = /^(?:\+?60|0)1[0-46-9][0-9]{7,8}$/;
    return regex.test(cleaned);
  }

  // Validation Rule 2: Future Date Validation (Must be today or a future date)
  function isFutureOrToday(dateStr) {
    if (!dateStr) return false;
    const parts = dateStr.split("-");
    if (parts.length !== 3) return false;
    const selected = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
    selected.setHours(0, 0, 0, 0);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return selected >= today;
  }

  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;
    let firstInvalidField = null;

    // 1. Validate Owner Name
    const ownerName = ownerNameInput ? ownerNameInput.value.trim() : "";
    if (!ownerName || ownerName.length < 3) {
      setFieldError("ownerName", "Please enter your full name (minimum 3 characters).");
      isValid = false;
      if (!firstInvalidField) firstInvalidField = ownerNameInput;
    } else {
      clearFieldError("ownerName");
    }

    // 2. Validate Malaysian Phone Number
    const rawPhone = contactPhoneInput ? contactPhoneInput.value.trim() : "";
    if (!rawPhone) {
      setFieldError("contactPhone", "Contact phone number is required.");
      isValid = false;
      if (!firstInvalidField) firstInvalidField = contactPhoneInput;
    } else if (!isValidMalaysianPhone(rawPhone)) {
      setFieldError(
        "contactPhone",
        "Please enter a valid Malaysian mobile number (e.g., 012-345 6789 or +60123456789)."
      );
      isValid = false;
      if (!firstInvalidField) firstInvalidField = contactPhoneInput;
    } else {
      clearFieldError("contactPhone");
    }

    // 3. Validate Pet Name
    const petName = petNameInput ? petNameInput.value.trim() : "";
    if (!petName || petName.length < 2) {
      setFieldError("petName", "Please enter your pet's name (minimum 2 characters).");
      isValid = false;
      if (!firstInvalidField) firstInvalidField = petNameInput;
    } else {
      clearFieldError("petName");
    }

    // 4. Validate Appointment Date (Future Date)
    const appDate = dateInput ? dateInput.value : "";
    if (!appDate) {
      setFieldError("appointmentDate", "Please select an appointment date.");
      isValid = false;
      if (!firstInvalidField) firstInvalidField = dateInput;
    } else if (!isFutureOrToday(appDate)) {
      setFieldError("appointmentDate", "Appointment date cannot be in the past. Please choose today or a future date.");
      isValid = false;
      if (!firstInvalidField) firstInvalidField = dateInput;
    } else {
      clearFieldError("appointmentDate");
    }

    // 5. Incompatible Selection Check
    const petType = petTypeSelect.value;
    const selectedPkg = packageSelect.value;
    const serviceMatch = findServiceInCatalog(selectedPkg);
    if (serviceMatch && serviceMatch.category !== "All" && serviceMatch.category !== petType) {
      setFieldError(
        "selectedPackage",
        `Incompatible Selection: "${serviceMatch.name}" is exclusive to ${serviceMatch.category}s and cannot be booked for a ${petType}.`
      );
      isValid = false;
      if (!firstInvalidField) firstInvalidField = packageSelect;
    }

    if (!isValid) {
      if (firstInvalidField) {
        firstInvalidField.focus();
      }
      return;
    }

    const timeSlot = timeSlotSelect.value;

    // Generate unique reference ID
    const refCode = "PW-2026-" + Math.floor(100000 + Math.random() * 900000);
    const bookingTimestamp = new Date().toLocaleDateString("en-MY", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });

    // Format display date
    const dateObj = new Date(appDate + "T00:00:00");
    const friendlyDate = dateObj.toLocaleDateString("en-MY", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });

    const petIcon = petType === "Dog" ? "🐶" : petType === "Cat" ? "🐱" : "🐰";
    const zoneName =
      petType === "Dog"
        ? "Soundproof Hydro-Spa Pavilion"
        : petType === "Cat"
        ? "Pheromone Feline Suite"
        : "Quiet Exotic Mammal Zone";

    // Generate barcode lines
    const barcodeBars = Array.from({ length: 42 })
      .map((_, i) => `<div class="barcode-bar" style="width: ${(i % 3 === 0 ? 3 : i % 2 === 0 ? 2 : 1.5)}px;"></div>`)
      .join("");

    // Inject gorgeous structured booking receipt
    confirmationBox.style.display = "block";
    confirmationBox.innerHTML = `
      <div class="booking-receipt-card" role="region" aria-label="Official Booking Pass">
        <div class="receipt-header">
          <div class="receipt-header-left">
            <img src="assets/images/paws-whiskers-logo.png" alt="Logo" style="width: 48px; height: 48px; border-radius: 50%; border: 2px solid var(--accent); object-fit: cover;" />
            <div>
              <h3 style="margin: 0; color: var(--primary-dark); font-size: 1.25rem;">Paws &amp; Whiskers Pet Spa</h3>
              <span style="font-size: 0.78rem; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.06em;">Official Appointment Confirmation Pass</span>
            </div>
          </div>
          <div style="text-align: right;">
            <span class="receipt-badge-status">✅ Confirmed &amp; Reserved</span>
            <div class="receipt-ref-code">${refCode}</div>
          </div>
        </div>

        <div class="receipt-grid">
          <div class="receipt-item">
            <div class="receipt-item-label">Pet Parent / Owner</div>
            <div class="receipt-item-value">${ownerName}</div>
            <small style="color: var(--primary); font-weight: 600;">📱 ${rawPhone}</small>
          </div>

          <div class="receipt-item">
            <div class="receipt-item-label">Pet Guest Details</div>
            <div class="receipt-item-value">${petIcon} ${petName} (${petType})</div>
            <small style="color: var(--text-muted);">Assigned to: ${zoneName}</small>
          </div>

          <div class="receipt-item">
            <div class="receipt-item-label">Scheduled Date &amp; Slot</div>
            <div class="receipt-item-value">${timeSlot.split(" (")[0]}</div>
            <small style="color: var(--primary-dark); font-weight: 600;">📅 ${friendlyDate}</small>
          </div>

          <div class="receipt-item">
            <div class="receipt-item-label">Package / Treatment</div>
            <div class="receipt-item-value" style="font-size: 0.92rem;">${selectedPkg}</div>
            <small style="color: var(--accent); font-weight: 700;">100% Cage-Free Guarantee</small>
          </div>
        </div>

        <div class="receipt-notice">
          <strong>📍 Arrival Instructions:</strong> No. 28, Jalan Telawi 3, Bangsar Baru, 59100 Kuala Lumpur.<br />
          Complimentary 15-minute VIP drop-off parking bays are reserved directly in front of the salon. A reminder SMS has been queued for <strong>${rawPhone}</strong>.
        </div>

        <div class="receipt-barcode-box">
          <div class="barcode-lines">${barcodeBars}</div>
          <span style="font-size: 0.75rem; letter-spacing: 0.12em; color: var(--text-muted); font-weight: 700;">PASS REF: ${refCode} • ISSUED ${bookingTimestamp}</span>
        </div>

        <div class="receipt-actions">
          <button type="button" class="btn btn-outline" id="printPassBtn" style="padding: 0.55rem 1.15rem; font-size: 0.9rem;">
            🖨️ Print / Save Booking Pass
          </button>
          <a href="index.html" class="btn btn-primary" style="padding: 0.55rem 1.15rem; font-size: 0.9rem;">
            Back to Home
          </a>
        </div>
      </div>
    `;

    // Smooth scroll down to receipt
    confirmationBox.scrollIntoView({ behavior: "smooth", block: "start" });

    // Hook up print button
    const printBtn = document.getElementById("printPassBtn");
    if (printBtn) {
      printBtn.addEventListener("click", () => {
        window.print();
      });
    }

    // Reset fields for future entry, retaining today's date
    bookingForm.reset();
    if (dateInput) dateInput.value = appDate;
    populateServicesForPet("Dog");
  });
}


// 6. Contact Us Page Logic (Support Form + Interactive Mock Map)
function initContactPage() {
  const contactForm = document.getElementById("contactSupportForm");
  const feedbackBox = document.getElementById("contactFeedback");

  if (contactForm && feedbackBox) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("supportName").value.trim();
      feedbackBox.style.display = "block";
      feedbackBox.innerHTML = `<strong>Thank you, ${name}!</strong> Your inquiry has been received by our Front Desk team. We will respond within 2 business hours.`;
      contactForm.reset();
    });
  }

  const mapPins = document.querySelectorAll(".map-pin-btn");
  const mapInfoDisplay = document.getElementById("mapPinDetails");
  if (mapPins.length && mapInfoDisplay) {
    mapPins.forEach((pin) => {
      pin.addEventListener("click", () => {
        mapInfoDisplay.innerHTML = `<strong>📍 ${pin.dataset.title}:</strong> ${pin.dataset.info}`;
        mapInfoDisplay.classList.remove("text-bouncy");
        void mapInfoDisplay.offsetWidth;
        mapInfoDisplay.classList.add("text-bouncy");
      });
    });
  }
}

// 7. Pet Rain SVG Assets Downloader & Interactive Modal
function initSvgDownloads() {
  const petRainSvgAssets = [
    {
      id: "paw-print",
      name: "Paw Print (5-Toe)",
      filename: "paw-print.svg",
      pngFilename: "paw-print.png",
      filePath: "assets/icons/paw-print.svg",
      pngPath: "assets/icons/paw-print.png",
      viewBox: "0 0 100 100",
      bodySvg: '<ellipse cx="50" cy="27" rx="11" ry="15"/><ellipse cx="27" cy="38" rx="10" ry="14" transform="rotate(-18 27 38)"/><ellipse cx="73" cy="38" rx="10" ry="14" transform="rotate(18 73 38)"/><ellipse cx="19" cy="62" rx="8" ry="10" transform="rotate(-35 19 62)"/><ellipse cx="81" cy="62" rx="8" ry="10" transform="rotate(35 81 62)"/><path d="M29 65 C25 76 34 85 50 85 C66 85 75 76 71 65 C68 53 58 48 50 48 C42 48 32 53 29 65 Z"/>',
      detailsSvg: '<g fill="none" stroke="#FFFFFF" stroke-linecap="round" opacity="0.4" stroke-width="2.5"><path d="M47 18 C45 22 44 26 44 29"/><path d="M25 29 C24 33 23 37 23 40"/><path d="M71 29 C70 33 69 37 69 40"/><path d="M18 56 C17 59 17 62 17 64"/><path d="M80 56 C79 59 79 62 79 64"/><path d="M36 60 C40 54 48 52 56 54" stroke-width="3"/></g>'
    },
    {
      id: "cute-dog-head",
      name: "Cute Dog Head",
      filename: "cute-dog-head.svg",
      pngFilename: "cute-dog-head.png",
      filePath: "assets/icons/cute-dog-head.svg",
      pngPath: "assets/icons/cute-dog-head.png",
      viewBox: "0 0 100 100",
      bodySvg: '<path d="M31 23 C38 20 62 20 69 23 C73 24 78 28 80 32 C85 32 90 38 90 47 C90 56 83 62 75 62 C73 67 70 72 65 76 C57 82 43 82 35 76 C30 72 27 67 25 62 C17 62 10 56 10 47 C10 38 15 32 20 32 C22 28 27 24 31 23 Z"/>',
      detailsSvg: '<g fill="none" stroke="#FFFFFF" stroke-linecap="round" opacity="0.4" stroke-width="3"><path d="M19 36 C22 31 27 28 27 28"/><path d="M81 36 C78 31 73 28 73 28"/></g><circle cx="37" cy="49" r="5" fill="#FFFFFF"/><circle cx="63" cy="49" r="5" fill="#FFFFFF"/><ellipse cx="50" cy="58" rx="6.5" ry="5" fill="#FFFFFF"/><path d="M50 58 L50 64 M40 64 C40 70 49 72 50 64 C51 72 60 70 60 64" fill="none" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>'
    },
    {
      id: "cute-cat-head",
      name: "Cute Cat Head",
      filename: "cute-cat-head.svg",
      pngFilename: "cute-cat-head.png",
      filePath: "assets/icons/cute-cat-head.svg",
      pngPath: "assets/icons/cute-cat-head.png",
      viewBox: "0 0 100 100",
      bodySvg: '<path d="M21 21 C22 21 29 27 38 29 C44 27 56 27 62 29 C71 27 78 21 79 21 C82 20 86 26 85 36 C87 43 87 53 84 62 C80 73 68 81 50 81 C32 81 20 73 16 62 C13 53 13 43 15 36 C14 26 18 20 21 21 Z"/>',
      detailsSvg: '<g fill="none" stroke="#FFFFFF" stroke-linecap="round" opacity="0.4" stroke-width="3"><path d="M25 24 C23 27 23 31 23 34"/><path d="M75 24 C77 27 77 31 77 34"/></g><circle cx="37" cy="52" r="5" fill="#FFFFFF"/><circle cx="63" cy="52" r="5" fill="#FFFFFF"/><ellipse cx="50" cy="60" rx="5" ry="3.8" fill="#FFFFFF"/><path d="M50 60 L50 65 M42 64 C42 69 49 71 50 65 C51 71 58 64 58 64" fill="none" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M23 58 L31 59 M23 65 L31 64 M77 58 L69 59 M77 65 L69 64" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>'
    },
    {
      id: "cute-rabbit-head",
      name: "Cute Rabbit Head",
      filename: "cute-rabbit-head.svg",
      pngFilename: "cute-rabbit-head.png",
      filePath: "assets/icons/cute-rabbit-head.svg",
      pngPath: "assets/icons/cute-rabbit-head.png",
      viewBox: "0 0 100 100",
      bodySvg: '<path d="M30 11 C35 11 41 18 43 36 C45 37 47 38 50 38 C53 38 55 37 57 36 C59 18 65 11 70 11 C76 11 81 19 79 38 C83 45 84 55 83 63 C80 75 67 85 50 85 C33 85 20 75 17 63 C16 55 17 45 21 38 C19 19 24 11 30 11 Z"/>',
      detailsSvg: '<g fill="none" stroke="#FFFFFF" stroke-linecap="round" opacity="0.4" stroke-width="3"><path d="M28 17 C26 21 26 27 27 30"/><path d="M72 17 C74 21 74 27 73 30"/></g><circle cx="38" cy="62" r="4.8" fill="#FFFFFF"/><circle cx="62" cy="62" r="4.8" fill="#FFFFFF"/><ellipse cx="50" cy="70" rx="5" ry="3.8" fill="#FFFFFF"/><path d="M50 70 L50 75 M42 74 C42 79 49 80 50 75 C51 80 58 74 58 74" fill="none" stroke="#FFFFFF" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M25 68 L33 69 M26 74 L33 73 M75 68 L67 69 M74 74 L67 73" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>'
    }
  ];

  let selectedColor = "#1f5f5b";

  function makeSvgMarkup(asset, color) {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="128" height="128">\n  <g fill="${color}">\n    ${asset.bodySvg}\n  </g>\n  ${asset.detailsSvg || ""}\n</svg>`;
  }

  function downloadSvgBlob(filename, content) {
    const blob = new Blob([content], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function showToast(msg) {
    let toast = document.getElementById("svgToast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "svgToast";
      toast.className = "svg-toast";
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2800);
  }

  // Inject Link into Footer Navigation
  const footerLinksList = document.querySelector(".footer-links");
  if (footerLinksList && !document.getElementById("openSvgModalBtn")) {
    const li = document.createElement("li");
    li.innerHTML = `<button type="button" id="openSvgModalBtn" style="background:none; border:none; color:var(--accent-light); cursor:pointer; font-size:inherit; font-family:inherit; padding:0; display:inline-flex; align-items:center; gap:0.35rem; font-weight:600;">📥 Download Pet Rain Icons</button>`;
    footerLinksList.appendChild(li);
  }

  // Create SVG Modal Structure if not exists
  let modalOverlay = document.getElementById("svgModalOverlay");
  if (!modalOverlay) {
    modalOverlay = document.createElement("div");
    modalOverlay.id = "svgModalOverlay";
    modalOverlay.className = "modal-overlay";
    modalOverlay.innerHTML = `
      <div class="modal-box" style="max-width: 860px;">
        <button type="button" class="modal-close" id="closeSvgModalBtn" aria-label="Close Modal">&times;</button>
        <div style="text-align: center; margin-bottom: 1.25rem;">
          <span class="badge badge-gold text-bouncy">Vector &amp; High-Res Assets</span>
          <h2 style="color:var(--primary-dark); margin: 0.4rem 0 0.2rem;">Pet Rain SVG &amp; PNG Icons</h2>
          <p style="color:var(--text-muted); font-size:0.95rem;">Download or copy the exact scalable SVG vectors and high-res transparent PNGs used in the boutique pet rain animation (Dog, Cat, Rabbit, and 5-Toe Paw).</p>
        </div>

        <div style="text-align: center; margin-bottom: 1.25rem;">
          <span style="font-size:0.85rem; font-weight:600; color:var(--text-muted); display:block; margin-bottom:0.4rem;">Choose Export Color for SVGs:</span>
          <div class="color-picker-row">
            <button type="button" class="color-swatch-btn active" data-color="#1f5f5b" style="background:#1f5f5b;" title="Evergreen Teal"></button>
            <button type="button" class="color-swatch-btn" data-color="#e07a5f" style="background:#e07a5f;" title="Terracotta Coral"></button>
            <button type="button" class="color-swatch-btn" data-color="#d4a359" style="background:#d4a359;" title="Warm Gold"></button>
            <button type="button" class="color-swatch-btn" data-color="#1e292b" style="background:#1e292b;" title="Midnight Charcoal"></button>
            <button type="button" class="color-swatch-btn" data-color="#3b82f6" style="background:#3b82f6;" title="Sky Blue"></button>
          </div>
        </div>

        <div class="svg-download-grid" id="svgDownloadGrid"></div>

        <div style="margin-top: 1.5rem; padding-top: 1.25rem; border-top: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem;">
          <span style="font-size: 0.85rem; color: var(--text-muted);">
            Files are located in <code>/assets/icons/</code> in your downloaded project zip archive.
          </span>
          <button type="button" id="downloadAllSvgBtn" class="btn btn-primary" style="padding: 0.65rem 1.4rem;">
            📦 Download All 4 SVGs
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(modalOverlay);
  }

  function renderGrid() {
    const grid = document.getElementById("svgDownloadGrid");
    if (!grid) return;
    grid.innerHTML = petRainSvgAssets
      .map((asset) => {
        const svgMarkup = makeSvgMarkup(asset, selectedColor);
        return `
        <div class="svg-asset-card">
          <div class="svg-preview-box">
            ${svgMarkup}
          </div>
          <div class="svg-asset-meta">
            <h4>${asset.name}</h4>
            <p>100×100 ViewBox • Scalable Vector + PNG</p>
          </div>
          <div class="svg-actions" style="display: flex; flex-direction: column; gap: 0.4rem;">
            <div style="display: flex; gap: 0.35rem; width: 100%;">
              <button type="button" class="btn btn-primary" data-action="download" data-id="${asset.id}" style="font-size:0.8rem; padding:0.45rem 0.65rem; flex:1;">
                ⬇️ SVG
              </button>
              <a href="${asset.pngPath}" download="${asset.pngFilename}" class="btn btn-gold" style="font-size:0.8rem; padding:0.45rem 0.65rem; text-decoration:none; display:inline-flex; align-items:center; justify-content:center; flex:1;">
                🖼️ PNG
              </a>
            </div>
            <button type="button" class="btn btn-outline" data-action="copy" data-id="${asset.id}" style="font-size:0.8rem; padding:0.45rem 0.65rem; width:100%;">
              📋 Copy SVG Code
            </button>
          </div>
        </div>
      `;
      })
      .join("");

    // Bind action buttons
    grid.querySelectorAll("[data-action='download']").forEach((btn) => {
      btn.addEventListener("click", () => {
        const asset = petRainSvgAssets.find((a) => a.id === btn.dataset.id);
        if (asset) {
          const content = makeSvgMarkup(asset, selectedColor);
          downloadSvgBlob(asset.filename, content);
          showToast(`⬇️ Downloaded ${asset.filename}`);
        }
      });
    });

    grid.querySelectorAll("[data-action='copy']").forEach((btn) => {
      btn.addEventListener("click", () => {
        const asset = petRainSvgAssets.find((a) => a.id === btn.dataset.id);
        if (asset) {
          const content = makeSvgMarkup(asset, selectedColor);
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(content).then(() => {
              showToast(`📋 Copied ${asset.name} SVG code!`);
            }).catch(() => {
              prompt("Copy SVG Code:", content);
            });
          } else {
            prompt("Copy SVG Code:", content);
          }
        }
      });
    });
  }

  renderGrid();

  // Color Swatch changes
  modalOverlay.querySelectorAll(".color-swatch-btn").forEach((swatch) => {
    swatch.addEventListener("click", () => {
      modalOverlay.querySelectorAll(".color-swatch-btn").forEach((s) => s.classList.remove("active"));
      swatch.classList.add("active");
      selectedColor = swatch.dataset.color;
      renderGrid();
    });
  });

  // Download All Button
  const downloadAllBtn = document.getElementById("downloadAllSvgBtn");
  if (downloadAllBtn) {
    downloadAllBtn.addEventListener("click", () => {
      petRainSvgAssets.forEach((asset, idx) => {
        setTimeout(() => {
          const content = makeSvgMarkup(asset, selectedColor);
          downloadSvgBlob(asset.filename, content);
        }, idx * 250);
      });
      showToast("📦 Downloading all 4 SVG icons...");
    });
  }

  // Open / Close Modal Event Handlers
  function openModal() {
    modalOverlay.classList.add("open");
  }
  function closeModal() {
    modalOverlay.classList.remove("open");
  }

  const openBtn = document.getElementById("openSvgModalBtn");
  if (openBtn) {
    openBtn.addEventListener("click", openModal);
  }

  const closeBtn = document.getElementById("closeSvgModalBtn");
  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("open")) {
      closeModal();
    }
  });
}

