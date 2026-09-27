export interface ServiceDetail {
  title: string;
  slug: string;
  hero: string;
  extendedIntro?: boolean;
}

const serviceImage = (name: string) => `/images/service-details/${name}.png`;

export const serviceDetails: ServiceDetail[] = [
  {
    title: "Property Selling Services",
    slug: "property-selling-services",
    hero: serviceImage("ESfKAEY9fxyWnBp7Zk005ESUyU"),
    extendedIntro: true,
  },
  {
    title: "Rental Management",
    slug: "rental-management",
    hero: serviceImage("lERVMW0puDTifv8XOFZjyQsA9I"),
  },
  {
    title: "Investment Consulting",
    slug: "investment-consulting",
    hero: serviceImage("V19NWI1o7EILHE51Y6J0QIxuo"),
  },
  {
    title: "Property Services",
    slug: "property-services",
    hero: serviceImage("I6bwiwRDZFxwiTrsxswtSgMSJtM"),
  },
  {
    title: "Property Valuation",
    slug: "property-valuation",
    hero: serviceImage("SBimb2C0SyzbUfeVfGBDn50pJmc"),
  },
  {
    title: "Property Buying",
    slug: "property-buying",
    hero: serviceImage("hF4cpAbADrhCNeccRgZFrgJzXg"),
  },
  {
    title: "Property Selling",
    slug: "property-selling",
    hero: serviceImage("lERVMW0puDTifv8XOFZjyQsA9I"),
  },
  {
    title: "Renting Services",
    slug: "renting-services",
    hero: serviceImage("V19NWI1o7EILHE51Y6J0QIxuo"),
  },
];

export const serviceBenefits = [
  "Experienced team with local market expertise.",
  "Personalized service for each client’s needs.",
  "Transparent pricing with no hidden fees.",
  "Comprehensive services for buyers, sellers, and landlords.",
];

export const serviceHighlights = [
  "Branded messaging and images",
  "Responsive design",
  "IDX integration",
  "Blog content",
  "Lead capture landing pages",
  "Area pages",
];

export const serviceTestimonials = [
  {
    name: "Hannah Raquel",
    role: "First-time Homebuyer",
    image: "/images/company/testimonial-hannah.avif",
    quote:
      "I use [YourHomequest for managing my rental properties, and they have been incredible. From tenant screening to maintenance, they handle everything efficiently.",
  },
  {
    name: "Brenda Joyce",
    role: "2nd-time Homebuyer",
    image: "/images/company/testimonial-brenda.avif",
    quote:
      "I rely on [YourHomequest for managing your my rental properties, and they've been fantastic. From tenant screening to repairs, they handle everything seamlessly.",
  },
  {
    name: "Jonathan Lewis",
    role: "First-time Homebuyer",
    image: "/images/company/testimonial-jonathan.avif",
    quote:
      "Using [YourHomequest for my rental properties your has been great. They manage tenant screening, maintenance, and everything else so efficiently, saving me time.",
  },
  {
    name: "Rebecca Sue",
    role: "First-time Homebuyer",
    image: "/images/company/testimonial-rebecca.avif",
    quote:
      "I use [YourHomequest to manage my rentals, and they're superb. They handle tenant screening, maintenance, and everything, providing seamless, efficient service.",
  },
];
