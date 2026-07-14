import { contactInfo } from "@/data/contact";

export const bootcampEnrollmentEmail = contactInfo.emailTo;

export const bootcampAgeGroups = [
  { value: "children", label: "Children (8 to 12)" },
  { value: "teens", label: "Teens (13 to 17)" },
  { value: "adults", label: "Adults (18+)" },
] as const;

export const bootcampCourses = [
  { value: "children-coding", label: "Children Coding Foundations" },
  { value: "teen-python-web", label: "Teens: Python, Web & AI Literacy" },
  { value: "adults-ai-coding", label: "Adults: AI & Coding Bootcamp" },
  { value: "innovation-ai", label: "Innovation & AI Track" },
] as const;

export const bootcamps = {
  headline: "AI, Coding & Innovation Bootcamps",
  intro:
    "Paid, instructor-led programs for children, teens, and adults who want practical skills in coding, artificial intelligence, and digital innovation.",
  programs: [
    {
      title: "Children (8 to 12)",
      description:
        "Foundational coding, creative problem-solving, and an age-appropriate introduction to AI.",
    },
    {
      title: "Teens (13 to 17)",
      description:
        "Python, web basics, AI literacy, and project builds that prepare learners for tech careers.",
    },
    {
      title: "Adults (18+)",
      description:
        "Career-focused coding and AI bootcamps for professionals, career switchers, and founders.",
    },
    {
      title: "Innovation & AI Track",
      description:
        "Applied AI, automation concepts, and innovation workshops for motivated learners ready to go deeper.",
    },
  ],
  highlights: [
    "Children, teens, and adults welcome",
    "AI and coding taught by working engineers",
    "Certificates on completion",
    "Paid enrollment with structured curriculum",
  ],
} as const;
