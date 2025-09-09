import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

// Post collection schema
const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/blog" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    date: z.date().optional(),
    image: z.string().optional(),
    author: z.string().default("Admin"),
    categories: z.array(z.string()).default(["others"]),
    tags: z.array(z.string()).default(["others"]),
    draft: z.boolean().optional(),
  }),
});

// Author collection schema
const authorsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/authors" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    email: z.string().optional(),
    image: z.string().optional(),
    description: z.string().optional(),
    social: z
      .array(
        z
          .object({
            name: z.string().optional(),
            icon: z.string().optional(),
            link: z.string().optional(),
          })
          .optional(),
      )
      .optional(),
    draft: z.boolean().optional(),
  }),
});

// Pages collection schema
const pagesCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/pages" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

// about collection schema
const aboutCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/about" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

// contact collection schema
const contactCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/contact" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

// Homepage collection
export const homepageCollection = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/homepage" }),
  schema: z.object({
    banner: z.object({
      title: z.string(),
      content: z.string(),
      image: z.string(),
      button: z.object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
      }),
    }),
    brandimg: z
      .object({
        text: z.string(),
        images: z.array(z.string()),
      })
      .optional(),
    features: z.array(
      z.object({
        title: z.string(),
        image: z.string(),
        content: z.string(),
        bulletpoints: z.array(z.string()),
        button: z.object({
          enable: z.boolean(),
          label: z.string(),
          link: z.string(),
        }),
      })
    ),
    getintouch: z
      .object({
        title: z.string(),
        description: z.string(),
        img: z.string(),
        btn: z.string(),
      })
      .optional(),
    ceoinfo: z
      .object({
        title: z.string(),
        description: z.string(),
        vediolink: z.string(),
        heading: z.string(),
        ceoname: z.string(),
        designation: z.string(),
        img: z.string(),
        playbtn: z.string().optional(),
      })
      .optional(),
  }),
});


// cta
const ctaSectionCollection = defineCollection({
  loader: glob({
    pattern: "call-to-action.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    title: z.string(),
    description: z.string(),
    image: z.string(),
    button: z.object({
      enable: z.boolean(),
      label: z.string(),
      link: z.string(),
    }),
    features: z
      .array(
        z.object({
          title: z.string(),
          description: z.string(),
        })
      )
      .optional(), 
  }),
});
// propertySectionCollection
const propertySectionCollection = defineCollection({
  loader: glob({
    pattern: "property-cards.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    title: z.string(),
    cards: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        img: z.string(),
        icon: z.string(),
        arrow_icon: z.string(),
      })
    ),
  }),
});

// Testimonials Section collection schema
const testimonialSectionCollection = defineCollection({
  loader: glob({
    pattern: "testimonial.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    title: z.string(),
    description: z.string(),
    link: z.string(),
    testimonials: z.array(
      z.object({
        name: z.string(),
        avatar: z.string(),
        designation: z.string(),
        content: z.string(),
      }),
    ),
  }),
});

// contactSection Section collection schema
const contactSection = defineCollection({
  loader: glob({
    pattern: "contact.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    btn: z.string(),
    email: z.object({
      title: z.string(),
      email: z.string(),
    }),
    phone: z.object({
      title: z.string(),
      phone: z.string(),
    }),
    forminfo: z.array(
      z.object({
        label: z.string(),
        placeholder: z.string().optional(),
        options: z.array(z.string()).optional(),
      }),
    ),
  }),
});


// listingSectionCollection Section collection schema
const listingSectionCollection = defineCollection({
  loader: glob({
    pattern: "listing.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    title: z.string(),
    btn: z.string(),
    listing: z.array(
      z.object({
        title: z.string(),
        pricing: z.number(),
        month: z.boolean(),
        sqfit: z.number(),
        bed: z.number(),
        bath: z.number(),
        text: z.string(),
        img: z.string(),
      }),
    ),
  }),
});

// faq collection schema
const faqCollection = defineCollection({
   loader: glob({
    pattern: "faq.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    faqs: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    ).optional(),
  }),
});


// Export collections
export const collections = {
  // Pages
  homepage: homepageCollection,
  blog: blogCollection,
  authors: authorsCollection,
  pages: pagesCollection,
  about: aboutCollection,
  contact: contactCollection,

  // sections
  ctaSection: ctaSectionCollection,
  testimonialSection: testimonialSectionCollection,
  listingSection: listingSectionCollection,
  propertySection: propertySectionCollection,
  contactSection: contactSection,
  faqsection:faqCollection,
};
