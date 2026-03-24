// ─────────────────────────────────────────────────────────────────────────────
// KGRAND — Static Data Layer
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
  mapEmbed: string;
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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDsXxBIW9qG1GoHvBR7bKxGJ6VIf_XgqPqzxT3C-vwR5mqX4B_jVFpg6_JmFdF2MdugDT6Oan3LC3tiFCJrk6Dp2HCr5u-0rJV7VFPxycv14mQcoayLhpRos831kDUOMJqNx0LD7R07j6JvO4uQ4TNHxamnzzWD-6o9Kd3WT29qKibrXm1O11hgETmHO2Fa5Rm5nsmaJxGOBIL0eAXNhE9zcNRZXQpSDDaCUseHm27CYqTBAP86incRIj6SZuC6QHqHmP49yXDKwdhR",
    heroAlt: "Luxury PG room with premium wooden flooring and plush bedding",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2960655696927!2d78.3719!3d17.4478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d69df%3A0x19688bbb8b33c5a2!2sHITEC%20City%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1711234567890!5m2!1sen!2sin",
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
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsXxBIW9qG1GoHvBR7bKxGJ6VIf_XgqPqzxT3C-vwR5mqX4B_jVFpg6_JmFdF2MdugDT6Oan3LC3tiFCJrk6Dp2HCr5u-0rJV7VFPxycv14mQcoayLhpRos831kDUOMJqNx0LD7R07j6JvO4uQ4TNHxamnzzWD-6o9Kd3WT29qKibrXm1O11hgETmHO2Fa5Rm5nsmaJxGOBIL0eAXNhE9zcNRZXQpSDDaCUseHm27CYqTBAP86incRIj6SZuC6QHqHmP49yXDKwdhR",
        alt: "Primary Suite",
        label: "Primary Suite",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2FwZxbCk7Z5Xgtru_RBu5BmKbUb-IvFxfbAOOghLECilhvvQib0Wxb5auVMQcS97t0R6wU26HAfdFGlbGT8ZkGxrbCPIsZnRakw0iirPtnWUNuBOrbt4hJMIVhoYoVPGmpYOMeN05mYdgfqkJvLy1BOHb5pOaqyRyxtk7uyrCaYPjOlX9sSgRXSChw0YYCaIUNos1z2wX-hxFNxgn8mPBL1UCxziWql77xGOSYuPeSLV5usPfGkXSouhSQ62vHCJjZk---FyFPAgF",
        alt: "Ergonomic workspace area",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBiCrqmP2pYvBrHlGpRk2u22tU1q_Q1cyKuoJKUoMaLLHBXNbw-N2hWOCvTg2uW7qkqK5qvMJ9xqOIjRNrgYigqOZqzq1UGRqu_iem-Nk2OZuXKjJanKeZhl8OgjSfM8AHaLPFoSZ32DiByOT9sNguk1r9kXhihlSBnh8IogL-OACYPt25EIlpxlWPoHu2towwIIMGZzjlK-YWjQvcKM1IFPlm8AJnsKQbPhOvVU_WqAdMhD8Gja3XJ6kvr13GZrx0_t586hyuvjdw5",
        alt: "Modern high-end bathroom with marble finishes",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhF2eKN-F8swhkOI_oHKgqc2wr6etXhLfjBzWngxctcCboL7BNiQX9YI0JckwJPfdvxdmgi0_0HAdd3KicX0EkL9Z0pW8Ir1faH_ldm0ChwKdrbDVWw4BzPqkFeVq3-yVJupB4jwwGQaPA4PrIUT2y6GOf8Co_th5PXQo5ZNzPf0NDF-W7_Y8IKVAgeOZOAJo8pRiBvLLPsCy-mIkb73CjNNSLBJao82cPxhCeCMgE1lN08xn_RnHfyTEJzT8K-q4rawO_WoR5OE5o",
        alt: "Common dining area",
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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDa-k-_v1oKnbOf1ljzKeutqXcvG8ZxLbtzmRcKtNcOGFuFUXSLzCj_qsD0JMf8q8ZBXLtBHf63yxTZB920x0EeXdQRrFB1_h9qhQOrmlQaxChog4dNnDe91qG2fjkWSomzbIc1Z_BjH75zENYfnmZoYhuUwfpOx2269QJtf6MmmMcZsuaCsmt-NfJZeqd4sFEZm18BhNVdgWzzDaUhgTi9cz8ixD2CNMZGPC7jKKJ6-C27wzsqNpRoiB4afUKMBiYOfp37j3XugTsU",
    heroAlt: "Elite shared living space with minimalist interior design",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.8!2d78.358!3d17.44!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93cd85b2db91%3A0xdae72af90c04c1da!2sGachibowli%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1711234567892!5m2!1sen!2sin",
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
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDa-k-_v1oKnbOf1ljzKeutqXcvG8ZxLbtzmRcKtNcOGFuFUXSLzCj_qsD0JMf8q8ZBXLtBHf63yxTZB920x0EeXdQRrFB1_h9qhQOrmlQaxChog4dNnDe91qG2fjkWSomzbIc1Z_BjH75zENYfnmZoYhuUwfpOx2269QJtf6MmmMcZsuaCsmt-NfJZeqd4sFEZm18BhNVdgWzzDaUhgTi9cz8ixD2CNMZGPC7jKKJ6-C27wzsqNpRoiB4afUKMBiYOfp37j3XugTsU",
        alt: "Elite colive room interior",
        label: "Primary Room",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsXxBIW9qG1GoHvBR7bKxGJ6VIf_XgqPqzxT3C-vwR5mqX4B_jVFpg6_JmFdF2MdugDT6Oan3LC3tiFCJrk6Dp2HCr5u-0rJV7VFPxycv14mQcoayLhpRos831kDUOMJqNx0LD7R07j6JvO4uQ4TNHxamnzzWD-6o9Kd3WT29qKibrXm1O11hgETmHO2Fa5Rm5nsmaJxGOBIL0eAXNhE9zcNRZXQpSDDaCUseHm27CYqTBAP86incRIj6SZuC6QHqHmP49yXDKwdhR",
        alt: "Common lounge area",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhF2eKN-F8swhkOI_oHKgqc2wr6etXhLfjBzWngxctcCboL7BNiQX9YI0JckwJPfdvxdmgi0_0HAdd3KicX0EkL9Z0pW8Ir1faH_ldm0ChwKdrbDVWw4BzPqkFeVq3-yVJupB4jwwGQaPA4PrIUT2y6GOf8Co_th5PXQo5ZNzPf0NDF-W7_Y8IKVAgeOZOAJo8pRiBvLLPsCy-mIkb73CjNNSLBJao82cPxhCeCMgE1lN08xn_RnHfyTEJzT8K-q4rawO_WoR5OE5o",
        alt: "Dining area",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2FwZxbCk7Z5Xgtru_RBu5BmKbUb-IvFxfbAOOghLECilhvvQib0Wxb5auVMQcS97t0R6wU26HAfdFGlbGT8ZkGxrbCPIsZnRakw0iirPtnWUNuBOrbt4hJMIVhoYoVPGmpYOMeN05mYdgfqkJvLy1BOHb5pOaqyRyxtk7uyrCaYPjOlX9sSgRXSChw0YYCaIUNos1z2wX-hxFNxgn8mPBL1UCxziWql77xGOSYuPeSLV5usPfGkXSouhSQ62vHCJjZk---FyFPAgF",
        alt: "Workspace area",
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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBWrYuDqLhbIfzru9j-WDey0WPOiKsjgMulj4IgjztJfy5iiRZ__6Nsz32AE7eFA8Qr0Vs_B7PTaUiBIWZBQALeUTL3C7s9vMZnjou74UdwPOe8HK7-LdhCPR1AxYXCNHjsBXhd9Dnf-wD5kMT_uc4fBus67EDYeARDpWhwA8aIaZ0uJs2F5G1gZPFqweZJbZkWvKyQP-gPfgf2CTzyqw62e-gQ59GeiPQl3eOtQS-tywXgq7T6ZPGVpzL8Ic2rl4bGTaEE4puUNgcn",
    heroAlt: "Bright airy PG room with comfortable bedding and workspace",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1!2d78.3639!3d17.462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9151c26fd6a5%3A0xae4f200c09cb7f64!2sKondapur%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1711234567893!5m2!1sen!2sin",
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
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWrYuDqLhbIfzru9j-WDey0WPOiKsjgMulj4IgjztJfy5iiRZ__6Nsz32AE7eFA8Qr0Vs_B7PTaUiBIWZBQALeUTL3C7s9vMZnjou74UdwPOe8HK7-LdhCPR1AxYXCNHjsBXhd9Dnf-wD5kMT_uc4fBus67EDYeARDpWhwA8aIaZ0uJs2F5G1gZPFqweZJbZkWvKyQP-gPfgf2CTzyqw62e-gQ59GeiPQl3eOtQS-tywXgq7T6ZPGVpzL8Ic2rl4bGTaEE4puUNgcn",
        alt: "Swarna colive room",
        label: "Standard Room",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsXxBIW9qG1GoHvBR7bKxGJ6VIf_XgqPqzxT3C-vwR5mqX4B_jVFpg6_JmFdF2MdugDT6Oan3LC3tiFCJrk6Dp2HCr5u-0rJV7VFPxycv14mQcoayLhpRos831kDUOMJqNx0LD7R07j6JvO4uQ4TNHxamnzzWD-6o9Kd3WT29qKibrXm1O11hgETmHO2Fa5Rm5nsmaJxGOBIL0eAXNhE9zcNRZXQpSDDaCUseHm27CYqTBAP86incRIj6SZuC6QHqHmP49yXDKwdhR",
        alt: "Common area",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhF2eKN-F8swhkOI_oHKgqc2wr6etXhLfjBzWngxctcCboL7BNiQX9YI0JckwJPfdvxdmgi0_0HAdd3KicX0EkL9Z0pW8Ir1faH_ldm0ChwKdrbDVWw4BzPqkFeVq3-yVJupB4jwwGQaPA4PrIUT2y6GOf8Co_th5PXQo5ZNzPf0NDF-W7_Y8IKVAgeOZOAJo8pRiBvLLPsCy-mIkb73CjNNSLBJao82cPxhCeCMgE1lN08xn_RnHfyTEJzT8K-q4rawO_WoR5OE5o",
        alt: "Dining area",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2FwZxbCk7Z5Xgtru_RBu5BmKbUb-IvFxfbAOOghLECilhvvQib0Wxb5auVMQcS97t0R6wU26HAfdFGlbGT8ZkGxrbCPIsZnRakw0iirPtnWUNuBOrbt4hJMIVhoYoVPGmpYOMeN05mYdgfqkJvLy1BOHb5pOaqyRyxtk7uyrCaYPjOlX9sSgRXSChw0YYCaIUNos1z2wX-hxFNxgn8mPBL1UCxziWql77xGOSYuPeSLV5usPfGkXSouhSQ62vHCJjZk---FyFPAgF",
        alt: "Study area",
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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDv6b4wCa5WuAvZYV97bZIl_1b9ztz39BcVvQWgWdzjYjZvlOCu4fnLGSyfZqWvSeIsXCmM7eqV7dwZFsekjzpvCwIKLefMHho_L8b",
    heroAlt: "Luxury hotel room interior with warm ambient lighting and executive desk",
    tagline: "Productive Stays for High-Achievers",
    description:
      "Designed for the IT professionals of HITEC City. Quiet zones, seamless tech integration, and curated comfort in the heart of Madhapur.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3!2d78.3948!3d17.4486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc0c4c08c1%3A0x9f7e15ec5caba16a!2sMadhapur%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1711234567891!5m2!1sen!2sin",
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
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDvrRYkc735wXlpNDB0jamA4S9Y2hVk0f_k28J8lqWPJ02Er6qdoiGPfyD7X6mhhkEGhaJFBfkeyhPzqPeSLikinMHD4xfgTZwsF9Siop_M0qtNnc0NNMcap0dbJ810IVDinnl6JTeYUpCoO9iww4HBUIu2_NcQf89lBgfdsYbm4FpxGsNNxw-5GpHWH0_G-Gj46LjP_OFAtgmPhnptX1f9lfFgmzQ-VUfote3_mL_qpZly6nRZK0NCeXmNTT9MGjg7yYkY5jdWy7UZ",
        imageAlt: "Spacious king executive hotel suite with premium walnut furniture",
        features: ["King-size bed", "City view balcony", "Executive work desk", "Rain shower", "Smart TV", "Mini bar"],
      },
      {
        name: "Twin Executive Room",
        size: "380 sq ft",
        price: "₹4,299/night",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD652OFNwgATPZetM_yA3fG3OGxUmKUPcyAsPS8p9jOZhkcjOmtlJC91GA_1IMzniXoBM75Xh07XeaA7RnxQ3j0ClRbTnKTmQRooM75WfZa_kdMM3aHoAuasYatiwtTLKD0j4C5NGIXr2zaVaJyHCrMg5bYNdplJwiGJ8z8TzV5J1dERtDh6lbcRazJcptlh9B0uM8N6R4aAsdGSmsAIJiNNlje6YuZMd3qiNpzJWjQpg2MwMSZ8MVlXH74N0AgAUIctoo7LhuFlvdy",
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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAY5wQrMQPRM_7xODX9aUx5j_VNP_sC1mRlAyEQibw48QNIgM44UfnUMPXodMFYYNtjWlIqFQkobfcFm0n7D6pYy2xLk-pIxkpCWoICBEeyjTyGlPmPkzRthLFjA91rWiseaincS7OZJY2seAFYUofnGtuW0qm9ytCJG4bhGfStyzkzeotNEBpX9UP6Lc53TxzboexPpX-MehzdbNMDCHXt0I6WOV9ievmOyChgqjgeq7jMg227ppPEuDwu7h3CN5l82ieHJ4gm86De",
    heroAlt: "Luxury boutique hotel lobby with plush seating and modern design",
    tagline: "Executive Luxury in the Financial District",
    description:
      "Kgrand Suites sits at the heart of Gachibowli's Financial District, offering premium suites, rooftop pool access, and an executive lounge for the modern business traveller.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.8!2d78.358!3d17.44!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93cd85b2db91%3A0xdae72af90c04c1da!2sGachibowli%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1711234567892!5m2!1sen!2sin",
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
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD652OFNwgATPZetM_yA3fG3OGxUmKUPcyAsPS8p9jOZhkcjOmtlJC91GA_1IMzniXoBM75Xh07XeaA7RnxQ3j0ClRbTnKTmQRooM75WfZa_kdMM3aHoAuasYatiwtTLKD0j4C5NGIXr2zaVaJyHCrMg5bYNdplJwiGJ8z8TzV5J1dERtDh6lbcRazJcptlh9B0uM8N6R4aAsdGSmsAIJiNNlje6YuZMd3qiNpzJWjQpg2MwMSZ8MVlXH74N0AgAUIctoo7LhuFlvdy",
        imageAlt: "Elegant executive suite with pool view",
        features: ["Pool view", "King bed", "Lounge access", "Smart TV", "Mini bar", "Rain shower"],
      },
      {
        name: "Deluxe Studio",
        size: "320 sq ft",
        price: "₹3,800/night",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDvrRYkc735wXlpNDB0jamA4S9Y2hVk0f_k28J8lqWPJ02Er6qdoiGPfyD7X6mhhkEGhaJFBfkeyhPzqPeSLikinMHD4xfgTZwsF9Siop_M0qtNnc0NNMcap0dbJ810IVDinnl6JTeYUpCoO9iww4HBUIu2_NcQf89lBgfdsYbm4FpxGsNNxw-5GpHWH0_G-Gj46LjP_OFAtgmPhnptX1f9lfFgmzQ-VUfote3_mL_qpZly6nRZK0NCeXmNTT9MGjg7yYkY5jdWy7UZ",
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
  phone: "+91 40 1234 5678",
  whatsapp: "https://wa.me/914012345678?text=Hi%20Kgrand%2C%20I%27d%20like%20to%20enquire%20about%20your%20properties.",
  email: "hello@kgrandresidences.com",
  address: "Plot No. 42, Hitech City Phase II, Madhapur, Hyderabad, Telangana 500081",
  supportHours: {
    weekdays: "Monday – Saturday: 9:00 AM – 8:00 PM",
    weekend: "Sunday: 10:00 AM – 4:00 PM",
  },
};
