export const products = [
  {
    id: 1,
    name: "Omega Seamaster",
    brand: "Omega",
    category: "Diver",
    price: 7500,
    currency: "USD",
    rating: 4.2,
    reviewCount: 143,
    color: "Silver",
    image: "/assets/Images/omega-seamaster1.jpeg",
    images: [
    "/assets/Images/omega-seamaster.jpeg",
    "/assets/Images/omega-seamaster1.jpeg",
    "/assets/Images/omega-seamaster2.jpeg",
    "/assets/Images/omega-seamaster3.jpeg"
  ],
    features: "Water resistant up to 300m, helium escape valve, sapphire crystal.",
    technicalSpecifications: {
      displaySize: "43mm",
      movement: "Automatic",
      material: "Stainless Steel"
    },
    description:
      "The Omega Seamaster reinterprets the legacy of Omega with unparalleled elegance and precision.\nMeticulously designed for the discerning connoisseur, it features a refined dial and premium construction.\nEmbrace a timeless expression of luxury and innovation that sets a new standard in dive watchmaking."
  },
  {
    id: 2,
    name: "Rolex Submariner",
    brand: "Rolex",
    category: "Men",
    price: 26914,
    currency: "USD",  
    rating: 4.7,
    reviewCount: 186,
    color: "Silver",
    image: "/assets/Images/rolex-submariner.jpeg",
    images: ["/assets/Images/rolex-submariner.jpeg", "/assets/Images/rolex-submariner1.jpeg", "/assets/Images/rolex-submariner2.jpeg", "/assets/Images/rolex-submariner3.jpeg", "/assets/Images/rolex-submariner4.jpeg"],
    features: "Cerachrom bezel, luminous markers, superior water resistance.",
    technicalSpecifications: {
      displaySize: "40mm",
      movement: "Automatic",
      material: "Oystersteel"
    },
    description:
      "The Rolex Submariner reinterprets the legacy of Rolex with unmatched sophistication and robust design.\nExpertly crafted for adventurers and collectors alike, it balances form and function perfectly.\nExperience the pinnacle of luxury diving technology and timeless style."
  },
  {
    id: 3,
    name: "Tag Heuer Carrera",
    brand: "Tag Heuer",
    category: "Men",
    price: 5589 ,
    currency: "USD",
    rating: 3.8,
    reviewCount: 229,
    color: "Gold",
    image: "/assets/Images/tag-heuer-carrera.jpeg",
    images:["/assets/Images/tag-heuer-carrera.jpeg", "/assets/Images/tag-heuer-.jpeg", "/assets/Images/tag-heuer-carrera2.jpeg","/assets/Images/tag-heuer-carrera(3).jpeg","/assets/Images/tag-heuer-carrera(4).jpeg","/assets/Images/tag-heuer-carrera(5).jpeg"],
    features: "High-performance chronograph, sporty design, precision timing.",
    technicalSpecifications: {
      displaySize: "42mm",
      movement: "Automatic",
      material: "Stainless Steel/Gold"
    },
    description:
      "The Tag Heuer Carrera reinterprets Tag Heuer’s racing heritage with bold design and precision engineering.\nThis chronograph offers a perfect blend of sport and elegance for the modern enthusiast.\nExperience a timepiece that embodies both performance and high-end style."
  },
  {
    id: 4,
    name: "Audemars Piguet Royal Oak",
    brand: "Audemars Piguet",
    category: "Women",
    price: 47299.99,
    currency: "USD",
    rating: 4.9,
    reviewCount: 272,
    color: "Silver",
    image: "/assets/Images/audemars-piguet-royal-oak.jpeg",
    images:["/assets/Images/audemars-piguet-royal-oak.jpeg","/assets/Images/audemars-piguet-royal-oak(1).jpeg","/assets/Images/audemars-piguet-royal-oak(2).jpeg","/assets/Images/audemars-piguet-royal-oak(3).jpeg","/assets/Images/audemars-piguet-royal-oak(4).jpeg","/assets/Images/audemars-piguet-royal-oak(5).jpeg"],
    features: "Iconic octagonal bezel, Tapisserie dial, integrated bracelet.",
    technicalSpecifications: {
      displaySize: "41mm",
      movement: "Automatic",
      material: "Stainless Steel"
    },
    description:
      "The Audemars Piguet Royal Oak reinterprets luxury with its revolutionary design and exquisite finishing.\nAn icon of modern watchmaking that challenges tradition while maintaining timeless elegance.\nIndulge in a masterpiece that defines sophistication and innovative style."
  },
  {
    id: 5,
    name: "Cartier Tank",
    brand: "Cartier",
    category: "Dress",
    price: 4000,
    currency: "USD",
    rating: 4.5,
    reviewCount: 0 + ((5 * 43) % 1900),
    color: "Silver",
    image: "/assets/Images/cartier-tank.jpeg",
    features: "Rectangular case, minimalist design, precise quartz movement.",
    technicalSpecifications: {
      displaySize: "33mm x 27mm",
      movement: "Quartz",
      material: "Stainless Steel/Gold"
    },
    description:
      "The Cartier Tank reinterprets Cartier’s storied heritage with refined simplicity and elegance.\nIts clean lines and modern aesthetics make it a timeless dress watch for connoisseurs.\nExperience the perfect harmony of classic style and innovative design."
  },
  {
    id: 6,
    name: "Hublot Big Bang",
    brand: "Hublot",
    category: "Men",
    price: 17002.99,
    currency: "USD",
    rating: 4.6,
    reviewCount: 0 + ((6 * 43) % 1900),
    color: "Gold",
    image: "/assets/Images/hublot-big-bang.jpg",
    images:["/assets/Images/hublot-big-bang.jpg","/assets/Images/hublot-big-bang(1).jpeg","/assets/Images/hublot-big-bang(2).jpeg","/assets/Images/hublot-big-bang(3).jpeg","/assets/Images/hublot-big-bang(4).jpeg","/assets/Images/hublot-big-bang(5).jpeg",],
    features: "Bold design, fusion of materials, striking aesthetics.",
    technicalSpecifications: {
      displaySize: "42mm",
      movement: "Automatic",
      material: "Stainless Steel/Gold"
    },
    description:
      "The Hublot Big Bang reinterprets contemporary luxury with a bold, innovative design.\nA fusion of modern materials and avant-garde aesthetics delivers a truly distinctive look.\nIndulge in a statement timepiece that embodies audacious sophistication."
  },
  {
    id: 7,
    name: "Casio G-Shock",
    brand: "Casio",
    category: "Unisex",
    price: 500,
    currency: "USD",
    rating: 2.7,
    reviewCount: 0 + ((7 * 43) % 1900),
    color: "Black",
    image: "/assets/Images/casio-g-shock(1).jpeg",
    images:["/assets/Images/casio-g-shock(1).jpeg","/assets/Images/casio-g-shock(2).jpeg","/assets/Images/casio-g-shock(3).jpeg","/assets/Images/casio-g-shock(4).jpeg",],
    features: "Complex dial, multifunction chronograph, aviation inspired.",
    technicalSpecifications: {
      displaySize: "42mm",
      movement: "Automatic",
      material: "Stainless Steel"
    },
    description:
      "The Casio reinterprets aviation heritage with advanced chronograph functions.\nIngeniously designed for precision and reliability under extreme conditions.\nA masterful blend of technical prowess and luxurious style."
  },
  {
    id: 8,
    name: "Patek Philippe Nautilus",
    brand: "Patek Philippe",
    category: "Unisex",
    price: 120000.99,
    currency: "USD",
    rating: 4.8,
    reviewCount: 0 + ((8 * 43) % 1900),
    color: "Gold",
    image: "/assets/Images/patek-philippe-nautilus(1).jpeg",
    images:["/assets/Images/patek-philippe-nautilus(1).jpeg","/assets/Images/patek-philippe-nautilus(2).jpeg","/assets/Images/patek-philippe-nautilus(5).jpeg","/assets/Images/patek-philippe-nautilus(3).jpeg","/assets/Images/patek-philippe-nautilus(4).jpeg",],
    features: "Iconic design, impeccable finishing, automatic movement.",
    technicalSpecifications: {
      displaySize: "42mm",
      movement: "Automatic",
      material: "Titanium"
    },
    description:
      "The Patek Philippe Nautilus reinterprets luxury watchmaking with an iconic silhouette and refined details.\nExemplifying understated elegance and supreme craftsmanship in every component.\nA timeless piece that encapsulates sophistication and enduring style."
  },
  {
    id: 9,
    name: "Jaeger-LeCoultre Reverso",
    brand: "Jaeger-LeCoultre",
    category: "Unisex",
    price: 12000,
    currency: "USD",
    rating: 4.9,
    reviewCount: 0 + ((9 * 43) % 1900),
    color: "Gold",
    image: "/assets/Images/jaeger-lecoultre-reverso.jpg",
    features: "Reversible case, art deco design, versatile elegance.",
    technicalSpecifications: {
      displaySize: "42mm",
      movement: "Automatic",
      material: "Stainless Steel/Gold"
    },
    description:
      "The Jaeger-LeCoultre Reverso reinterprets heritage with a distinctive reversible design.\nAn art deco classic reimagined for modern luxury and versatile style.\nExperience a watch that is as innovative as it is timeless."
  },
  {
    id: 10,
    name: "IWC Portugieser",
    brand: "IWC",
    category: "Men",
    price: 7500,
    currency: "USD",
    rating: 4.5,
    reviewCount: 0 + ((10 * 43) % 1900),
    color: "Black",
    image: "/assets/Images/iwc-portugieser.jpg",
    features: "Elegant dial, superior precision, classical design.",
    technicalSpecifications: {
      displaySize: "42mm",
      movement: "Automatic",
      material: "Stainless Steel"
    },
    description:
      "The IWC Portugieser reinterprets classic watchmaking with meticulous attention to detail.\nCrafted for those who appreciate refined design and precise engineering.\nA perfect fusion of heritage, innovation, and modern luxury."
  },
  {
    id: 11,
    name: "Panerai Luminor",
    brand: "Panerai",
    category: "Women",
    price: 4000,
    currency: "USD",
    rating: 4.6,
    reviewCount: 0 + ((11 * 43) % 1900),
    color: "Silver",
    image: "/assets/Images/panerai-luminor.jpg",
    features: "Bold design, legible dial, exceptional durability.",
    technicalSpecifications: {
      displaySize: "42mm",
      movement: "Automatic",
      material: "Titanium"
    },
    description:
      "The Panerai Luminor reinterprets Panerai’s legacy with a bold, modern twist on classic design.\nExemplifying superior craftsmanship and practical elegance, it is made for both style and substance.\nA timepiece that commands attention while offering unparalleled performance."
  },
  {
    id: 12,
    name: "Omega Constellation",
    brand: "Omega",
    category: "Unisex",
    price: 12000,
    currency: "USD",
    rating: 4.7,
    reviewCount: 0 + ((12 * 43) % 1900),
    color: "Gold",
    image: "/assets/Images/omega-constellation.jpeg",
    images: [
    "/assets/Images/omega-constellation.jpeg",
    "/assets/Images/omega-constellation1.jpeg",
  ],
    features: "Sophisticated design, precision calibration, enduring elegance.",
    technicalSpecifications: {
      displaySize: "42mm",
      movement: "Automatic",
      material: "Stainless Steel/Gold"
    },
    description:
      "The Omega Constellation reinterprets elegance with its signature star emblem and refined design.\nBuilt for the modern connoisseur, it showcases exquisite detailing and premium craftsmanship.\nA luxurious statement of innovation and timeless style."
  },
  {
    id: 13,
    name: "Rolex Datejust",
    brand: "Rolex",
    category: "Men",
    price: 7500,
    currency: "USD",
    rating: 4.8,
    reviewCount: 0 + ((13 * 43) % 1900),
    color: "Black",
    image: "/assets/Images/rolex-datejust.jpg",
    features: "Classic elegance, automatic movement, timeless design.",
    technicalSpecifications: {
      displaySize: "42mm",
      movement: "Automatic",
      material: "Stainless Steel"
    },
    description:
      "The Rolex Datejust reinterprets Rolex’s iconic design with a perfect blend of tradition and modernity.\nIts classic dial and precise mechanics highlight impeccable craftsmanship.\nA timepiece that epitomizes refined luxury and enduring style."
  },
  {
    id: 14,
    name: "Tag Heuer Monaco",
    brand: "Tag Heuer",
    category: "Women",
    price: 4000,
    currency: "USD",
    rating: 4.9,
    reviewCount: 0 + ((14 * 43) % 1900),
    color: "Silver",
    image: "/assets/Images/tag-heuer-monaco.jpeg",
    features: "Square case, bold chronograph, vintage racing appeal.",
    technicalSpecifications: {
      displaySize: "42mm",
      movement: "Automatic",
      material: "Titanium"
    },
    description:
      "The Tag Heuer Monaco reinterprets motorsport heritage with a striking, square design.\nCombining vintage allure with modern precision, it offers a bold look for trendsetters.\nExperience a fusion of performance and elegance that defines contemporary luxury."
  },
  {
    id: 15,
    name: "Audemars Piguet Jules Audemars",
    brand: "Audemars Piguet",
    category: "Unisex",
    price: 12000,
    currency: "USD",
    rating: 4.6,
    reviewCount: 0 + ((15 * 43) % 1900),
    color: "Gold",
    image: "/assets/Images/audemars-piguet-jules.jpeg",
    features: "Refined detailing, exquisite finishing, iconic design.",
    technicalSpecifications: {
      displaySize: "42mm",
      movement: "Automatic",
      material: "Stainless Steel/Gold"
    },
    description:
      "The Audemars Piguet Jules Audemars reinterprets luxury with an emphasis on refined design and precision.\nIntricately crafted for those who appreciate artistry in watchmaking, it exudes elegance.\nA sophisticated timepiece that is both innovative and timeless."
  },
  {
    id: 16,
    name: "Cartier Ballon Bleu",
    brand: "Cartier",
    category: "Men",
    price: 7500,
    currency: "USD",
    rating: 4.7,
    reviewCount: 0 + ((16 * 43) % 1900),
    color: "Black",
    image: "/assets/Images/cartier-ballon-bleu.jpeg",
    features: "Distinctive curved case, elegant dial, signature blue steel cabochon.",
    technicalSpecifications: {
      displaySize: "42mm",
      movement: "Automatic",
      material: "Stainless Steel"
    },
    description:
      "The Cartier Ballon Bleu reinterprets Cartier’s legacy with a contemporary twist on classic elegance.\nIts graceful curves and refined detailing offer a modern aesthetic steeped in tradition.\nA watch that perfectly balances innovative design with timeless sophistication."
  },
  {
    id: 17,
    name: "Hublot Classic Fusion",
    brand: "Hublot",
    category: "Women",
    price: 4000,
    currency: "USD",
    rating: 3.8,
    reviewCount: 0 + ((17 * 43) % 1900),
    color: "Black",
    image: "/assets/Images/hublot-classic-fusion(1).jpeg",
    images:["/assets/Images/hublot-classic-fusion(1).jpeg","/assets/Images/hublot-classic-fusion(3).jpeg","/assets/Images/hublot-classic-fusion(2).jpeg",],
    features: "Clean design, fusion of modern and classic elements, lightweight construction.",
    technicalSpecifications: {
      displaySize: "42mm",
      movement: "Automatic",
      material: "Titanium"
    },
    description:
      "The Hublot Classic Fusion reinterprets luxury with a sophisticated fusion of classic simplicity and modern innovation.\nDesigned for those who value elegance and functionality, it boasts a refined dial and streamlined aesthetics.\nA timepiece that stands as a testament to contemporary style and enduring quality."
  },
    {
    id: 19,
    name: "Patek Philippe Calatrava",
    brand: "Patek Philippe",
    category: "Men",
    price: 7500,
    currency: "USD",
    rating: 4.9,
    reviewCount: 0 + ((19 * 43) % 1900),
    color: "Black",
    image: "/assets/Images/patek-philippe-calatrava(1).jpeg",
    images:["/assets/Images/patek-philippe-calatrava(1).jpeg","/assets/Images/patek-philippe-calatrava(2).jpeg","/assets/Images/patek-philippe-calatrava(3).jpeg","/assets/Images/patek-philippe-calatrava(4).jpeg","/assets/Images/patek-philippe-calatrava(5).jpeg","/assets/Images/patek-philippe-calatrava(6).jpeg",],
    features: "Understated design, exceptional finishing, timeless minimalist aesthetics.",
    technicalSpecifications: {
      displaySize: "42mm",
      movement: "Automatic",
      material: "Stainless Steel"
    },
    description:
      "The Patek Philippe Calatrava reinterprets classic elegance with a minimalist yet refined design.\nMeticulously crafted for discerning collectors, it features subtle details and premium materials.\nExperience a legacy of tradition and innovation in every tick."
  },
  
   
  {
    id: 20,
    name: "Casio Digital Watch",
    brand: "Casio",
    category: "Unisex",
    price: 40,
    currency: "USD",
    rating: 4.9,
    reviewCount: 0 + ((29 * 43) % 1900),
    color: "Silver",
    image: "/assets/Images/casio-digital-watch(1).jpeg",
    images:["/assets/Images/casio-digital-watch(1).jpeg","/assets/Images/casio-digital-watch(2).jpeg","/assets/Images/casio-digital-watch(3).jpeg","/assets/Images/casio-digital-watch(4).jpeg","/assets/Images/casio-digital-watch(5).jpeg","/assets/Images/casio-digital-watch(6).jpeg",],
    features: "Rugged design, robust functionality, and flight-inspired aesthetics.",
    technicalSpecifications: {
      displaySize: "42mm",
      movement: "Automatic",
      material: "Titanium"
    },
    description:
      "The Casio digital reinterprets durability and luxury with a robust, aviation-inspired design.\nEngineered for precision in extreme conditions, it fuses style with technical expertise.\nA testament to innovative watchmaking and uncompromising quality."
  },
   {
    id: 21,
    name: "Omega Seamaster",
    brand: "Omega",
    category: "Diver",
    price: 7500,
    currency: "USD",
    rating: 4.2,
    reviewCount: 143,
    color: "Silver",
    image: "/assets/Images/omega-seamaster1.jpeg",
    images: [
      "/assets/Images/omega-seamaster.jpeg",
      "/assets/Images/omega-seamaster1.jpeg",
      "/assets/Images/omega-seamaster2.jpeg",
      "/assets/Images/omega-seamaster3.jpeg"
    ],
    features: "Water resistant up to 300m, helium escape valve, sapphire crystal.",
    technicalSpecifications: {
      displaySize: "43mm",
      movement: "Automatic",
      material: "Stainless Steel"
    },
    description:
      "The Omega Seamaster reinterprets the legacy of Omega with unparalleled elegance and precision.\nMeticulously designed for the discerning connoisseur, it features a refined dial and premium construction.\nEmbrace a timeless expression of luxury and innovation that sets a new standard in dive watchmaking."
  },
  {
    id: 22,
    name: "Rolex Submariner",
    brand: "Rolex",
    category: "Men",
    price: 26914,
    currency: "USD",
    rating: 4.7,
    reviewCount: 186,
    color: "Silver",
    image: "/assets/Images/rolex-submariner.jpeg",
    images: [
      "/assets/Images/rolex-submariner.jpeg",
      "/assets/Images/rolex-submariner1.jpeg",
      "/assets/Images/rolex-submariner2.jpeg",
      "/assets/Images/rolex-submariner3.jpeg",
      "/assets/Images/rolex-submariner4.jpeg"
    ],
    features: "Cerachrom bezel, luminous markers, superior water resistance.",
    technicalSpecifications: {
      displaySize: "40mm",
      movement: "Automatic",
      material: "Oystersteel"
    },
    description:
      "The Rolex Submariner reinterprets the legacy of Rolex with unmatched sophistication and robust design.\nExpertly crafted for adventurers and collectors alike, it balances form and function perfectly.\nExperience the pinnacle of luxury diving technology and timeless style."
  },
  {
    id: 23,
    name: "Tag Heuer Carrera",
    brand: "Tag Heuer",
    category: "Men",
    price: 5589,
    currency: "USD",
    rating: 3.8,
    reviewCount: 229,
    color: "Gold",
    image: "/assets/Images/tag-heuer-carrera.jpeg",
    images: [
      "/assets/Images/tag-heuer-carrera.jpeg",
      "/assets/Images/tag-heuer-.jpeg",
      "/assets/Images/tag-heuer-carrera2.jpeg",
      "/assets/Images/tag-heuer-carrera(3).jpeg",
      "/assets/Images/tag-heuer-carrera(4).jpeg",
      "/assets/Images/tag-heuer-carrera(5).jpeg"
    ],
    features: "High-performance chronograph, sporty design, precision timing.",
    technicalSpecifications: {
      displaySize: "42mm",
      movement: "Automatic",
      material: "Stainless Steel/Gold"
    },
    description:
      "The Tag Heuer Carrera reinterprets Tag Heuer’s racing heritage with bold design and precision engineering.\nThis chronograph offers a perfect blend of sport and elegance for the modern enthusiast.\nExperience a timepiece that embodies both performance and high-end style."
  },
  {
    id: 24,
    name: "Audemars Piguet Royal Oak",
    brand: "Audemars Piguet",
    category: "Women",
    price: 47299.99,
    currency: "USD",
    rating: 4.9,
    reviewCount: 272,
    color: "Silver",
    image: "/assets/Images/audemars-piguet-royal-oak.jpeg",
    images: [
      "/assets/Images/audemars-piguet-royal-oak.jpeg",
      "/assets/Images/audemars-piguet-royal-oak(1).jpeg",
      "/assets/Images/audemars-piguet-royal-oak(2).jpeg",
      "/assets/Images/audemars-piguet-royal-oak(3).jpeg",
      "/assets/Images/audemars-piguet-royal-oak(4).jpeg",
      "/assets/Images/audemars-piguet-royal-oak(5).jpeg"
    ],
    features: "Iconic octagonal bezel, Tapisserie dial, integrated bracelet.",
    technicalSpecifications: {
      displaySize: "41mm",
      movement: "Automatic",
      material: "Stainless Steel"
    },
    description:
      "The Audemars Piguet Royal Oak reinterprets luxury with its revolutionary design and exquisite finishing.\nAn icon of modern watchmaking that challenges tradition while maintaining timeless elegance.\nIndulge in a masterpiece that defines sophistication and innovative style."
  },
  {
    id: 25,
    name: "Cartier Tank",
    brand: "Cartier",
    category: "Dress",
    price: 4000,
    currency: "USD",
    rating: 4.5,
    reviewCount: (5 * 43) % 1900,
    color: "Silver",
    image: "/assets/Images/cartier-tank.jpeg",
    features: "Rectangular case, minimalist design, precise quartz movement.",
    technicalSpecifications: {
      displaySize: "33mm x 27mm",
      movement: "Quartz",
      material: "Stainless Steel/Gold"
    },
    description:
      "The Cartier Tank reinterprets Cartier’s storied heritage with refined simplicity and elegance.\nIts clean lines and modern aesthetics make it a timeless dress watch for connoisseurs.\nExperience the perfect harmony of classic style and innovative design."
  },
  {
    id: 26,
    name: "Hublot Big Bang",
    brand: "Hublot",
    category: "Men",
    price: 17002.99,
    currency: "USD",
    rating: 4.6,
    reviewCount: (6 * 43) % 1900,
    color: "Gold",
    image: "/assets/Images/hublot-big-bang.jpg",
    images: [
      "/assets/Images/hublot-big-bang.jpg",
      "/assets/Images/hublot-big-bang(1).jpeg",
      "/assets/Images/hublot-big-bang(2).jpeg",
      "/assets/Images/hublot-big-bang(3).jpeg",
      "/assets/Images/hublot-big-bang(4).jpeg",
      "/assets/Images/hublot-big-bang(5).jpeg"
    ],
    features: "Bold design, fusion of materials, striking aesthetics.",
    technicalSpecifications: {
      displaySize: "42mm",
      movement: "Automatic",
      material: "Stainless Steel/Gold"
    },
    description:
      "The Hublot Big Bang reinterprets contemporary luxury with a bold, innovative design.\nA fusion of modern materials and avant-garde aesthetics delivers a truly distinctive look.\nIndulge in a statement timepiece that embodies audacious sophistication."
  },
  {
    id: 27,
    name: "Casio G-Shock",
    brand: "Casio",
    category: "Unisex",
    price: 500,
    currency: "USD",
    rating: 2.7,
    reviewCount: (7 * 43) % 1900,
    color: "Black",
    image: "/assets/Images/casio-g-shock(1).jpeg",
    images: [
      "/assets/Images/casio-g-shock(1).jpeg",
      "/assets/Images/casio-g-shock(2).jpeg",
      "/assets/Images/casio-g-shock(3).jpeg",
      "/assets/Images/casio-g-shock(4).jpeg"
    ],
    features: "Complex dial, multifunction chronograph, aviation inspired.",
    technicalSpecifications: {
      displaySize: "42mm",
      movement: "Automatic",
      material: "Stainless Steel"
    },
    description:
      "The Casio G‑Shock reinterprets aviation heritage with advanced chronograph functions.\nIngeniously designed for precision and reliability under extreme conditions.\nA masterful blend of technical prowess and luxurious style."
  },
  {
    id: 28,
    name: "Patek Philippe Nautilus",
    brand: "Patek Philippe",
    category: "Unisex",
    price: 120000.99,
    currency: "USD",
    rating: 4.8,
    reviewCount: (8 * 43) % 1900,
    color: "Gold",
    image: "/assets/Images/patek-philippe-nautilus(1).jpeg",
    images: [
      "/assets/Images/patek-philippe-nautilus(1).jpeg",
      "/assets/Images/patek-philippe-nautilus(2).jpeg",
      "/assets/Images/patek-philippe-nautilus(3).jpeg",
      "/assets/Images/patek-philippe-nautilus(4).jpeg",
      "/assets/Images/patek-philippe-nautilus(5).jpeg"
    ],
    features: "Iconic design, impeccable finishing, automatic movement.",
    technicalSpecifications: {
      displaySize: "42mm",
      movement: "Automatic",
      material: "Titanium"
    },
    description:
      "The Patek Philippe Nautilus reinterprets luxury watchmaking with an iconic silhouette and refined details.\nExemplifying understated elegance and supreme craftsmanship in every component.\nA timeless piece that encapsulates sophistication and enduring style."
  },
  {
    id: 29,
    name: "Jaeger-LeCoultre Reverso",
    brand: "Jaeger-LeCoultre",
    category: "Unisex",
    price: 12000,
    currency: "USD",
    rating: 4.9,
    reviewCount: (9 * 43) % 1900,
    color: "Gold",
    image: "/assets/Images/jaeger-lecoultre-reverso.jpg",
    features: "Reversible case, art deco design, versatile elegance.",
    technicalSpecifications: {
      displaySize: "42mm",
      movement: "Automatic",
      material: "Stainless Steel/Gold"
    },
    description:
      "The Jaeger‑LeCoultre Reverso reinterprets heritage with a distinctive reversible design.\nAn art deco classic reimagined for modern luxury and versatile style.\nExperience a watch that is as innovative as it is timeless."
  },
  {
    id: 30,
    name: "IWC Portugieser",
    brand: "IWC",
    category: "Men",
    price: 7500,
    currency: "USD",
    rating: 4.5,
    reviewCount: (10 * 43) % 1900,
    color: "Black",
    image: "/assets/Images/iwc-portugieser.jpg",
    features: "Elegant dial, superior precision, classical design.",
    technicalSpecifications: {
      displaySize: "42mm",
      movement: "Automatic",
      material: "Stainless Steel"
    },
    description:
      "The IWC Portugieser reinterprets classic watchmaking with meticulous attention to detail.\nCrafted for those who appreciate refined design and precise engineering.\nA perfect fusion of heritage, innovation, and modern luxury."
  },
  {
    id: 31,
    name: "Panerai Luminor",
    brand: "Panerai",
    category: "Women",
    price: 4000,
    currency: "USD",
    rating: 4.6,
    reviewCount: (11 * 43) % 1900,
    color: "Silver",
    image: "/assets/Images/panerai-luminor.jpg",
    features: "Bold design, legible dial, exceptional durability.",
    technicalSpecifications: {
      displaySize: "42mm",
      movement: "Automatic",
      material: "Titanium"
    },
    description:
      "The Panerai Luminor reinterprets Panerai’s legacy with a bold, modern twist on classic design.\nExemplifying superior craftsmanship and practical elegance, it is made for both style and substance.\nA timepiece that commands attention while offering unparalleled performance."
  },
  {
    id: 32,
    name: "Omega Constellation",
    brand: "Omega",
    category: "Unisex",
    price: 12000,
    currency: "USD",
    rating: 4.7,
    reviewCount: (12 * 43) % 1900,
    color: "Gold",
    image: "/assets/Images/omega-constellation.jpeg",
    images: [
      "/assets/Images/omega-constellation.jpeg",
      "/assets/Images/omega-constellation1.jpeg"
    ],
    features: "Sophisticated design, precision calibration, enduring elegance.",
    technicalSpecifications: {
      displaySize: "42mm",
      movement: "Automatic",
      material: "Stainless Steel/Gold"
    },
    description:
      "The Omega Constellation reinterprets elegance with its signature star emblem and refined design.\nBuilt for the modern connoisseur, it showcases exquisite detailing and premium craftsmanship.\nA luxurious statement of innovation and timeless style."
  },
    {
    id: 34,
    name: "Tag Heuer Monaco",
    brand: "Tag Heuer",
    category: "Women",
    price: 4000,
    currency: "USD",
    rating: 4.9,
    reviewCount: (14 * 43) % 1900,
    color: "Silver",
    image: "/assets/Images/tag-heuer-monaco.jpeg",
    images: [
      "/assets/Images/tag-heuer-monaco.jpeg",
      "/assets/Images/tag-heuer-monaco(1).jpeg",
      "/assets/Images/tag-heuer-monaco(2).jpeg",
      "/assets/Images/tag-heuer-monaco(3).jpeg"
    ],
    features: "Square case, bold chronograph, vintage racing appeal.",
    technicalSpecifications: {
      displaySize: "39mm",
      movement: "Automatic",
      material: "Titanium"
    },
    description:
      "The Tag Heuer Monaco reinterprets motorsport heritage with a striking, square design.\nCombining vintage allure with modern precision, it offers a bold look for trendsetters.\nExperience a fusion of performance and elegance that defines contemporary luxury."
  },
  {
    id: 35,
    name: "Audemars Piguet Jules Audemars",
    brand: "Audemars Piguet",
    category: "Unisex",
    price: 12000,
    currency: "USD",
    rating: 4.6,
    reviewCount: (15 * 43) % 1900,
    color: "Gold",
    image: "/assets/Images/audemars-piguet-jules.jpeg",
    images: [
      "/assets/Images/audemars-piguet-jules.jpeg",
      "/assets/Images/audemars-piguet-jules(1).jpeg",
      "/assets/Images/audemars-piguet-jules(2).jpeg"
    ],
    features: "Refined detailing, exquisite finishing, iconic design.",
    technicalSpecifications: {
      displaySize: "42mm",
      movement: "Automatic",
      material: "Stainless Steel/Gold"
    },
    description:
      "The Audemars Piguet Jules Audemars reinterprets luxury with an emphasis on refined design and precision.\nIntricately crafted for those who appreciate artistry in watchmaking, it exudes elegance.\nA sophisticated timepiece that is both innovative and timeless."
  },
  {
    id: 36,
    name: "Cartier Ballon Bleu",
    brand: "Cartier",
    category: "Men",
    price: 7500,
    currency: "USD",
    rating: 4.7,
    reviewCount: (16 * 43) % 1900,
    color: "Black",
    image: "/assets/Images/cartier-ballon-bleu.jpeg",
    images: [
      "/assets/Images/cartier-ballon-bleu.jpeg",
      "/assets/Images/cartier-ballon-bleu(1).jpeg",
      "/assets/Images/cartier-ballon-bleu(2).jpeg"
    ],
    features: "Distinctive curved case, elegant dial, signature blue steel cabochon.",
    technicalSpecifications: {
      displaySize: "42mm",
      movement: "Automatic",
      material: "Stainless Steel"
    },
    description:
      "The Cartier Ballon Bleu reinterprets Cartier’s legacy with a contemporary twist on classic elegance.\nIts graceful curves and refined detailing offer a modern aesthetic steeped in tradition.\nA watch that perfectly balances innovative design with timeless sophistication."
  },
  {
    id: 37,
    name: "Hublot Classic Fusion",
    brand: "Hublot",
    category: "Women",
    price: 4000,
    currency: "USD",
    rating: 3.8,
    reviewCount: (17 * 43) % 1900,
    color: "Black",
    image: "/assets/Images/hublot-classic-fusion(1).jpeg",
    images: [
      "/assets/Images/hublot-classic-fusion(1).jpeg",
      "/assets/Images/hublot-classic-fusion(2).jpeg",
      "/assets/Images/hublot-classic-fusion(3).jpeg"
    ],
    features: "Clean design, fusion of modern and classic elements, lightweight construction.",
    technicalSpecifications: {
      displaySize: "42mm",
      movement: "Automatic",
      material: "Titanium"
    },
    description:
      "The Hublot Classic Fusion reinterprets luxury with a sophisticated fusion of classic simplicity and modern innovation.\nDesigned for those who value elegance and functionality, it boasts a refined dial and streamlined aesthetics.\nA timepiece that stands as a testament to contemporary style and enduring quality."
  },
  {
    id: 38,
    name: "Patek Philippe Calatrava",
    brand: "Patek Philippe",
    category: "Men",
    price: 7500,
    currency: "USD",
    rating: 4.9,
    reviewCount: (19 * 43) % 1900,
    color: "Black",
    image: "/assets/Images/patek-philippe-calatrava(1).jpeg",
    images: [
      "/assets/Images/patek-philippe-calatrava(1).jpeg",
      "/assets/Images/patek-philippe-calatrava(2).jpeg",
      "/assets/Images/patek-philippe-calatrava(3).jpeg",
      "/assets/Images/patek-philippe-calatrava(4).jpeg",
      "/assets/Images/patek-philippe-calatrava(5).jpeg",
      "/assets/Images/patek-philippe-calatrava(6).jpeg"
    ],
    features: "Understated design, exceptional finishing, timeless minimalist aesthetics.",
    technicalSpecifications: {
      displaySize: "42mm",
      movement: "Automatic",
      material: "Stainless Steel"
    },
    description:
      "The Patek Philippe Calatrava reinterprets classic elegance with a minimalist yet refined design.\nMeticulously crafted for discerning collectors, it features subtle details and premium materials.\nExperience a legacy of tradition and innovation in every tick."
  },
  {
    id: 39,
    name: "Casio Digital Watch",
    brand: "Casio",
    category: "Unisex",
    price: 40,
    currency: "USD",
    rating: 4.9,
    reviewCount: (29 * 43) % 1900,
    color: "Silver",
    image: "/assets/Images/casio-digital-watch(1).jpeg",
    images: [
      "/assets/Images/casio-digital-watch(1).jpeg",
      "/assets/Images/casio-digital-watch(2).jpeg",
      "/assets/Images/casio-digital-watch(3).jpeg",
      "/assets/Images/casio-digital-watch(4).jpeg",
      "/assets/Images/casio-digital-watch(5).jpeg",
      "/assets/Images/casio-digital-watch(6).jpeg"
    ],
    features: "Rugged design, robust functionality, and flight-inspired aesthetics.",
    technicalSpecifications: {
      displaySize: "42mm",
      movement: "Digital",
      material: "Resin"
    },
    description:
      "The Casio Digital Watch reinterprets durability and fashion with a sleek, lightweight design.\nEngineered for precision and convenience, it blends cutting-edge technology with timeless reliability.\nA modern classic that meets all your everyday needs."
  }
];


 
 
