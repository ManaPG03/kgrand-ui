// ─────────────────────────────────────────────────────────────────────────────
// KGRAND - Static Data Layer
// Edit this file to update all property information across the site.
// ─────────────────────────────────────────────────────────────────────────────

export type PG = {
  slug: string;
  name: string;
  badge: string;
  badgeVariant: "primary" | "secondary" | "tertiary";
  location: string;
  roomSize: string;
  sharing: string;
  pricePerMonth: string;
  rating: number;
  reviewCount: number;
  deposit: string;
  rentType: string;
  heroImage: string;
  heroAlt: string;
  mapEmbed: string;
  mapDirections: string;
  amenities: { icon: string; title: string; description: string }[];
  galleryImages: { src: string; alt: string; label?: string }[];
  proximity: { place: string; time: string }[];
  whyDifferent: { icon: string; title: string; description: string }[];
};

export type Hotel = {
  slug: string;
  name: string;
  location: string;
  pricePerNight: string;
  rating: number;
  heroImage: string;
  heroAlt: string;
  tagline: string;
  description: string;
  bookingUrl: string;
  mapEmbed: string;
  mapDirections: string;
  amenities: { icon: string; label: string }[];
  rooms: {
    name: string;
    badge?: string;
    size: string;
    price: string;
    image: string;
    imageAlt: string;
    features: string[];
  }[];
  proximity: { place: string; distance: string }[];
  stats: { icon: string; label: string; value: string }[];
};

// ── PG Properties ─────────────────────────────────────────────────────────────

export const pgs: PG[] = [
  {
    slug: "kgrand-luxury-colive",
    name: "Kgrand Luxury Co-Live",
    badge: "Luxury Tier",
    badgeVariant: "primary",
    location: "Hitech City, Hyderabad",
    roomSize: "280 sq ft",
    sharing: "Single / Twin",
    pricePerMonth: "₹24,500",
    rating: 4.9,
    reviewCount: 128,
    deposit: "2 Months Rent",
    rentType: "Fully Inclusive",
    heroImage:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200&q=80",
    heroAlt: "Luxury PG room with premium wooden flooring and plush bedding",
    mapEmbed:
      "https://maps.google.com/maps?q=17.4478,78.3719&z=17&output=embed",
    mapDirections:
      "https://www.google.com/maps/dir/?api=1&destination=17.4478,78.3719",
    amenities: [
      { icon: "restaurant", title: "Gourmet Meals", description: "Daily breakfast and dinner curated by chefs." },
      { icon: "security", title: "24/7 Security", description: "CCTV coverage and professional guards on site." },
      { icon: "fingerprint", title: "Biometric Entry", description: "Contactless, secure access to your home." },
      { icon: "wifi", title: "Fiber WiFi", description: "High-speed dedicated lines for work-from-home." },
      { icon: "local_laundry_service", title: "Professional Laundry", description: "Twice weekly wash and press service included." },
      { icon: "cleaning_services", title: "Daily Housekeeping", description: "Sanitize and organize your space every day." },
    ],
    galleryImages: [
      {
        src: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200&q=80",
        alt: "Primary suite with plush bedding",
        label: "Primary Suite",
      },
      {
        src: "https://images.unsplash.com/photo-1486946255434-2466348c2166?w=1200&q=80",
        alt: "Ergonomic workspace area",
        label: "Workspace",
      },
      {
        src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80",
        alt: "Modern high-end bathroom with marble finishes",
        label: "Bathroom",
      },
      {
        src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80",
        alt: "Common dining area",
        label: "Dining",
      },
      {
        src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
        alt: "Bedroom with reading nook and warm lighting",
        label: "Bedroom",
      },
      {
        src: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1200&q=80",
        alt: "Modern living lounge with sofa and coffee table",
        label: "Lounge",
      },
      {
        src: "https://images.unsplash.com/photo-1571508601891-ca5e7a713859?w=1200&q=80",
        alt: "Quiet study area with desk and plant",
        label: "Study",
      },
      {
        src: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1200&q=80",
        alt: "Premium bedroom with wood accents",
        label: "Suite View",
      },
    ],
    proximity: [
      { place: "Madhapur", time: "12 Mins Drive" },
      { place: "Hitech City", time: "15 Mins Drive" },
      { place: "Inorbit Mall", time: "10 Mins Drive" },
      { place: "Gachibowli", time: "20 Mins Drive" },
    ],
    whyDifferent: [
      { icon: "cleaning_services", title: "Daily Housekeeping", description: "We don't just clean; we sanitize and organize your space daily." },
      { icon: "support_agent", title: "On-Site Manager", description: "A dedicated professional living on-site for immediate needs." },
      { icon: "devices", title: "Community App", description: "Pay rent, raise tickets, and connect with neighbors easily." },
    ],
  },
  {
    slug: "kgrand-elite-colive",
    name: "K Grand Elite Colive PG",
    badge: "Elite Choice",
    badgeVariant: "secondary",
    location: "Gachibowli, Hyderabad",
    roomSize: "220 sq ft",
    sharing: "Twin Sharing",
    pricePerMonth: "₹18,000",
    rating: 4.8,
    reviewCount: 94,
    deposit: "2 Months Rent",
    rentType: "Fully Inclusive",
    heroImage:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80",
    heroAlt: "Elite shared living space with minimalist interior design",
    mapEmbed:
      "https://maps.google.com/maps?q=17.44,78.358&z=17&output=embed",
    mapDirections:
      "https://www.google.com/maps/dir/?api=1&destination=17.44,78.358",
    amenities: [
      { icon: "restaurant", title: "Home-Style Meals", description: "Nutritious meals prepared fresh three times daily." },
      { icon: "security", title: "24/7 Security", description: "CCTV and biometric entry at all access points." },
      { icon: "wifi", title: "High-Speed WiFi", description: "Enterprise-grade leased lines for seamless work." },
      { icon: "local_laundry_service", title: "Laundry Service", description: "Weekly laundry pick-up and delivery included." },
      { icon: "sports_esports", title: "Recreation Area", description: "Gaming lounge and common areas for downtime." },
      { icon: "fitness_center", title: "Fitness Access", description: "Access to nearby gym facilities for residents." },
    ],
    galleryImages: [
      {
        src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80",
        alt: "Elite colive room interior",
        label: "Twin Room",
      },
      {
        src: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200&q=80",
        alt: "Common lounge area",
        label: "Lounge",
      },
      {
        src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80",
        alt: "Dining area with chef-curated meals",
        label: "Dining",
      },
      {
        src: "https://images.unsplash.com/photo-1486946255434-2466348c2166?w=1200&q=80",
        alt: "Dedicated workspace area",
        label: "Workspace",
      },
      {
        src: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=1200&q=80",
        alt: "Modern minimalist interior",
        label: "Interior",
      },
      {
        src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&q=80",
        alt: "Twin bedroom with wardrobe",
        label: "Bedroom",
      },
      {
        src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80",
        alt: "Recreation gaming lounge",
        label: "Recreation",
      },
      {
        src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80",
        alt: "Modern bathroom",
        label: "Bathroom",
      },
    ],
    proximity: [
      { place: "Financial District", time: "8 Mins Drive" },
      { place: "Hitech City", time: "12 Mins Drive" },
      { place: "IKEA Hyderabad", time: "5 Mins Drive" },
      { place: "Inorbit Mall", time: "15 Mins Drive" },
    ],
    whyDifferent: [
      { icon: "cleaning_services", title: "Daily Housekeeping", description: "Professional cleaning and linen service every day." },
      { icon: "support_agent", title: "Resident Manager", description: "An on-site manager available 6 AM – 10 PM daily." },
      { icon: "group", title: "Elite Community", description: "Live alongside 50+ vetted IT professionals." },
    ],
  },
  {
    slug: "kgrand-swarna-colive",
    name: "K Grand Swarna Colive PG",
    badge: "High Demand",
    badgeVariant: "tertiary",
    location: "Kondapur, Hyderabad",
    roomSize: "195 sq ft",
    sharing: "Triple / Twin",
    pricePerMonth: "₹14,500",
    rating: 4.7,
    reviewCount: 76,
    deposit: "2 Months Rent",
    rentType: "Fully Inclusive",
    heroImage:
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1200&q=80",
    heroAlt: "Bright airy PG room with comfortable bedding and workspace",
    mapEmbed:
      "https://maps.google.com/maps?q=17.462,78.3639&z=17&output=embed",
    mapDirections:
      "https://www.google.com/maps/dir/?api=1&destination=17.462,78.3639",
    amenities: [
      { icon: "restaurant", title: "Home-Style Meals", description: "Nutritious breakfast and dinner served daily." },
      { icon: "security", title: "24/7 Security", description: "CCTV surveillance and biometric access control." },
      { icon: "wifi", title: "WiFi Access", description: "Reliable high-speed internet on all floors." },
      { icon: "power", title: "Power Backup", description: "Full generator backup ensures zero downtime." },
      { icon: "chair", title: "Common Lounge", description: "Welcoming social spaces to relax and connect." },
      { icon: "local_laundry_service", title: "Laundry Facility", description: "Shared laundry machines available 24/7." },
    ],
    galleryImages: [
      {
        src: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1200&q=80",
        alt: "Swarna colive room",
        label: "Triple Sharing",
      },
      {
        src: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200&q=80",
        alt: "Bright bedroom with comfortable bedding",
        label: "Bedroom",
      },
      {
        src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80",
        alt: "Dining area for residents",
        label: "Dining",
      },
      {
        src: "https://images.unsplash.com/photo-1486946255434-2466348c2166?w=1200&q=80",
        alt: "Study area with desk",
        label: "Study",
      },
      {
        src: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1200&q=80",
        alt: "Single sharing bedroom",
        label: "Single Room",
      },
      {
        src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80",
        alt: "Common social lounge",
        label: "Common Lounge",
      },
      {
        src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80",
        alt: "Welcoming reception area",
        label: "Reception",
      },
      {
        src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80",
        alt: "Shared bathroom with modern fixtures",
        label: "Bathroom",
      },
    ],
    proximity: [
      { place: "Hitech City", time: "10 Mins Drive" },
      { place: "Gachibowli", time: "12 Mins Drive" },
      { place: "Inorbit Mall", time: "8 Mins Drive" },
      { place: "Financial District", time: "15 Mins Drive" },
    ],
    whyDifferent: [
      { icon: "cleaning_services", title: "Weekly Deep Clean", description: "Professional cleaning of your room every week." },
      { icon: "support_agent", title: "Warden On-Site", description: "A friendly warden available 8 AM – 10 PM daily." },
      { icon: "group", title: "Growing Community", description: "A warm community of 60+ residents from all fields." },
    ],
  },
];

// ── Hotel Properties ───────────────────────────────────────────────────────────

export const hotels: Hotel[] = [
  {
    slug: "kgrand-residency-madhapur",
    name: "Kgrand Residency Madhapur",
    location: "Hitech City IT Corridor, Hyderabad",
    pricePerNight: "₹4,500",
    rating: 4.9,
    heroImage:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1920&q=90",
    heroAlt: "Luxury hotel suite with king bed, warm lighting and modern interiors",
    tagline: "Productive Stays for High-Achievers",
    description:
      "Designed for the IT professionals of HITEC City. Quiet zones, seamless tech integration, and curated comfort in the heart of Madhapur.",
    bookingUrl: "https://www.booking.com/searchresults.html?ss=Madhapur%2C+Hyderabad",
    mapEmbed:
      "https://maps.google.com/maps?q=17.4486,78.3948&z=17&output=embed",
    mapDirections:
      "https://www.google.com/maps/dir/?api=1&destination=17.4486,78.3948",
    amenities: [
      { icon: "wifi", label: "Free Fiber Wi-Fi" },
      { icon: "restaurant", label: "In-room Dining" },
      { icon: "fitness_center", label: "24/7 Gym" },
      { icon: "concierge", label: "Concierge" },
      { icon: "local_parking", label: "Valet Parking" },
      { icon: "spa", label: "Spa & Wellness" },
    ],
    rooms: [
      {
        name: "King Executive Suite",
        badge: "Most Popular",
        size: "450 sq ft",
        price: "₹5,499/night",
        image:
          "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=80",
        imageAlt: "Spacious king executive hotel suite with premium walnut furniture",
        features: ["King-size bed", "City view balcony", "Executive work desk", "Rain shower", "Smart TV", "Mini bar"],
      },
      {
        name: "Twin Executive Room",
        size: "380 sq ft",
        price: "₹4,299/night",
        image:
          "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&q=80",
        imageAlt: "Elegant twin executive hotel room with warm lighting",
        features: ["Two single beds", "Work desk", "High-speed WiFi", "LCD TV", "In-room safe", "Daily housekeeping"],
      },
    ],
    proximity: [
      { place: "HITEC City", distance: "1.2 km" },
      { place: "Cyber Towers", distance: "0.8 km" },
      { place: "Inorbit Mall", distance: "2.5 km" },
      { place: "RGIA Airport (ORR)", distance: "35 km" },
    ],
    stats: [
      { icon: "wifi", label: "Connectivity", value: "Fiber-Grade WiFi" },
      { icon: "fitness_center", label: "Wellness", value: "24/7 Elite Gym" },
      { icon: "concierge", label: "Service", value: "Dedicated Concierge" },
      { icon: "location_on", label: "Location", value: "Madhapur Center" },
    ],
  },
  {
    slug: "kgrand-suites-gachibowli",
    name: "Kgrand Suites",
    location: "Financial District, Gachibowli",
    pricePerNight: "₹5,200",
    rating: 4.8,
    heroImage:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1920&q=90",
    heroAlt: "Premium hotel room with elegant decor and city view",
    tagline: "Executive Luxury in the Financial District",
    description:
      "Kgrand Suites sits at the heart of Gachibowli's Financial District, offering premium suites, rooftop pool access, and an executive lounge for the modern business traveller.",
    bookingUrl: "https://www.booking.com/searchresults.html?ss=Gachibowli%2C+Hyderabad",
    mapEmbed:
      "https://maps.google.com/maps?q=17.44,78.358&z=17&output=embed",
    mapDirections:
      "https://www.google.com/maps/dir/?api=1&destination=17.44,78.358",
    amenities: [
      { icon: "laptop_mac", label: "Work Desks" },
      { icon: "local_bar", label: "Executive Lounge" },
      { icon: "pool", label: "Rooftop Pool" },
      { icon: "wifi", label: "Free WiFi" },
      { icon: "spa", label: "Spa & Wellness" },
      { icon: "restaurant", label: "Fine Dining" },
    ],
    rooms: [
      {
        name: "Executive Suite",
        badge: "Best Value",
        size: "420 sq ft",
        price: "₹5,200/night",
        image:
          "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&q=80",
        imageAlt: "Elegant executive suite with pool view",
        features: ["Pool view", "King bed", "Lounge access", "Smart TV", "Mini bar", "Rain shower"],
      },
      {
        name: "Deluxe Studio",
        size: "320 sq ft",
        price: "₹3,800/night",
        image:
          "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=80",
        imageAlt: "Modern deluxe studio with city skyline view",
        features: ["Queen bed", "City view", "Workspace", "Smart TV", "Kitchenette", "Daily housekeeping"],
      },
    ],
    proximity: [
      { place: "Financial District", distance: "0.5 km" },
      { place: "IKEA Hyderabad", distance: "1.8 km" },
      { place: "Gachibowli Stadium", distance: "2.1 km" },
      { place: "RGIA Airport (ORR)", distance: "30 km" },
    ],
    stats: [
      { icon: "pool", label: "Leisure", value: "Rooftop Pool" },
      { icon: "local_bar", label: "Dining", value: "Executive Lounge" },
      { icon: "spa", label: "Wellness", value: "Spa & Fitness" },
      { icon: "location_on", label: "Location", value: "Financial District" },
    ],
  },
];

// ── Company Stats ──────────────────────────────────────────────────────────────

export const companyStats = [
  { value: "1,200+", label: "Residents Served" },
  { value: "5", label: "Premium Properties" },
  { value: "98%", label: "Renewal Rate" },
  { value: "4.9/5", label: "Community Rating" },
];

// ── Contact ────────────────────────────────────────────────────────────────────

export const contact = {
  phone: "+91 9703890611",
  whatsapp: "https://wa.me/919703890611?text=Hi%20Kgrand%2C%20I%27d%20like%20to%20enquire%20about%20your%20properties.",
  email: "hello@kgrandresidences.com",
  address: "Plot No. 42, Hitech City Phase II, Madhapur, Hyderabad, Telangana 500081",
  supportHours: {
    weekdays: "Monday – Sunday: 9:00 AM – 8:00 PM",
    weekend: "Sunday: 10:00 AM – 4:00 PM",
  },
};
