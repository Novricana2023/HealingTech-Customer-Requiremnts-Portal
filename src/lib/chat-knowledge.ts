import { company } from "@/data/company";
import { contactInfo } from "@/data/contact";

export const ASSISTANT_NAME = "HealingTech Smart Assistant";

export const welcomeMessage = `Welcome! I'm the ${ASSISTANT_NAME} — your guide to HealingTech Systems.

We are an African IT firm specializing in AI, smart systems, web apps, mobile apps, and enterprise platforms.

Ask me about our services, how to start a project, ERP solutions, pricing, or how to reach our team. How can I help you today?`;

export const popupTeaser =
  "Hi there! I'm HealingTech's Smart Assistant. Ask me anything about our services or how to start your project.";

export function getSystemPrompt(): string {
  return `You are the ${ASSISTANT_NAME} for HealingTech Systems, an African innovation-driven IT company.

COMPANY:
- Tagline: ${company.tagline}
- Vision: ${company.vision}
- Mission: ${company.mission}
- About: ${company.about}

SERVICES: AI & Automation, Website Development, Web Applications, Mobile Apps (Android/iOS/PWA), Custom Software, Machine Learning, Data Analytics, ERP Systems, Government Digital Transformation, Business Process Automation, Cloud Solutions.

ERP PRODUCTS: Maphunziro LMS, Boma ERP (Government), BizCore ERP, BankFlow ERP, HealthBridge ERP (Hospital), CampusPro ERP (University), PeopleFlow HRMS, LegalTrack ERP, AgriSmart ERP, Mzinda Smart City Platform.

HOW TO START A PROJECT:
Direct users to the Requirements Portal at /requirements. They select a service (AI, Website, Web & Mobile App, or ERP) and complete the requirements form. More detail = better solution design.

CONTACT:
- Email display: ${contactInfo.emailDisplay} (mailto goes to team inbox)
- WhatsApp: ${contactInfo.whatsappNumbers.map((n) => n.display).join(", ")}

RULES:
- Be warm, professional, concise (2-4 sentences unless listing services)
- Proudly represent an African tech company
- Never invent pricing — say "contact us for a tailored quote"
- Encourage Requirements Portal or WhatsApp for serious inquiries
- Do not mention being ChatGPT or OpenAI
- Use plain text, no markdown`;
}

type Topic = {
  keywords: string[];
  reply: string;
};

const topics: Topic[] = [
  {
    keywords: ["hello", "hi", "hey", "good morning", "good afternoon", "malo", "moni"],
    reply:
      "Hello! Great to meet you. I'm here to help you explore HealingTech Systems — from AI and web apps to ERP platforms. What would you like to know?",
  },
  {
    keywords: ["who are you", "what is healingtech", "about", "company", "who is healingtech"],
    reply: `${company.about}\n\nOur vision: ${company.vision}`,
  },
  {
    keywords: ["vision", "mission", "values", "purpose"],
    reply: `**Vision:** ${company.vision}\n\n**Mission:** ${company.mission}`,
  },
  {
    keywords: ["service", "offer", "build", "do you do", "what can you", "capabilities"],
    reply:
      "We deliver a full range of technology solutions:\n\n• AI & Automation (chatbots, AI agents, workflow automation)\n• Websites & Web Applications\n• Mobile Apps (Android, iOS, PWAs)\n• Custom Software & Machine Learning\n• Data Analytics & Cloud Solutions\n• ERP & Enterprise Systems\n• Government Digital Transformation\n\nVisit our Services section or tell me which area interests you most.",
  },
  {
    keywords: ["ai", "automation", "chatbot", "machine learning", "ml", "artificial"],
    reply:
      "Our AI & Automation services include custom AI assistants, chatbots, AI agents, document intelligence, knowledge systems, and workflow automation.\n\nTo start an AI project, open our Requirements Portal → AI & Automation → complete the Client Requirements Form. Our team will review and design the right solution.",
  },
  {
    keywords: ["website", "web app", "webapp", "portal", "ecommerce", "e-commerce"],
    reply:
      "We build business websites, government portals, NGO sites, e-commerce platforms, and custom web applications.\n\nFor websites: Requirements Portal → Website Development.\nFor web & mobile apps: Requirements Portal → Web Apps & Mobile Applications.",
  },
  {
    keywords: ["mobile", "app", "android", "ios", "iphone", "pwa"],
    reply:
      "We develop Android apps, iOS apps, progressive web apps (PWAs), and cross-platform business applications for healthcare, education, startups, and enterprise.\n\nStart here: Requirements Portal → Web Apps & Mobile Applications → complete the form with your app idea.",
  },
  {
    keywords: ["erp", "enterprise", "lms", "hospital", "government system", "maphunziro", "boma", "healthbridge"],
    reply:
      "Yes — we build enterprise ERP platforms including:\n\n• Maphunziro LMS (Education)\n• Boma ERP (Government)\n• BizCore ERP (Organizations)\n• BankFlow ERP (Banking)\n• HealthBridge ERP (Healthcare)\n• CampusPro, PeopleFlow HRMS, LegalTrack, AgriSmart, Mzinda Smart City\n\nBrowse all at /erp-solutions or tell us your industry for a recommendation.",
  },
  {
    keywords: ["start", "begin", "project", "requirements", "form", "how do i", "get started", "hire"],
    reply:
      "Starting a project is easy:\n\n1. Go to our Requirements Portal (/requirements)\n2. Choose your service (AI, Website, Web/Mobile App, or ERP)\n3. Complete the requirements form with as much detail as possible\n\nOur team uses your information to design the right solution. The more you share, the better we can help!",
  },
  {
    keywords: ["price", "cost", "quote", "how much", "pricing", "budget", "expensive", "afford"],
    reply:
      "Every project is unique, so we provide tailored quotes after understanding your requirements.\n\nThe best next step: complete the Requirements Portal form for your service type, or message us on WhatsApp. We'll respond with a clear proposal based on your needs.",
  },
  {
    keywords: ["contact", "whatsapp", "phone", "call", "email", "reach", "talk", "speak"],
    reply: `You can reach us through:\n\n• WhatsApp: ${contactInfo.whatsappNumbers[0].display} or ${contactInfo.whatsappNumbers[1].display}\n• Email: ${contactInfo.emailDisplay}\n• Requirements Portal: /requirements\n\nWhatsApp is fastest for a quick conversation!`,
  },
  {
    keywords: ["malawi", "africa", "african", "local", "where are you"],
    reply:
      "HealingTech Systems is an African IT firm built for organizations across the continent and beyond. We understand local context and build world-class smart systems for government, healthcare, education, business, and startups.",
  },
  {
    keywords: ["innovation", "smart system", "technology", "tech", "digital"],
    reply: `${company.tagline}\n\nWe focus on Smart Systems, AI & Automation, Digital Innovation, and Enterprise Technology — helping organizations innovate with confidence.`,
  },
  {
    keywords: ["support", "maintain", "after", "help desk"],
    reply:
      "We provide dedicated support and long-term partnership. Our solutions are built to scale, and we stay with you after launch for maintenance, updates, and growth.",
  },
  {
    keywords: ["thank", "thanks", "appreciate"],
    reply:
      "You're welcome! If you have more questions, I'm here. Otherwise, our Requirements Portal and WhatsApp team are ready when you are. Good luck with your project!",
  },
];

export function getLocalReply(userMessage: string): string {
  const lower = userMessage.toLowerCase().trim();

  if (!lower) {
    return "Please type a question and I'll do my best to help!";
  }

  if (lower.includes("whatsapp") || lower.includes("wa.me")) {
    return "ACTION:WHATSAPP";
  }

  let bestScore = 0;
  let bestReply = "";

  for (const topic of topics) {
    let score = 0;
    for (const kw of topic.keywords) {
      if (lower.includes(kw)) score += kw.length > 4 ? 2 : 1;
    }
    if (score > bestScore) {
      bestScore = score;
      bestReply = topic.reply;
    }
  }

  if (bestScore >= 2) {
    return bestReply.replace(/\*\*/g, "");
  }

  if (bestScore === 1) {
    return bestReply.replace(/\*\*/g, "");
  }

  return `Thanks for your question! I'm best at helping with our services, ERP solutions, starting a project, or contact info.

For detailed discussions, I recommend:
• Requirements Portal — /requirements
• WhatsApp — ${contactInfo.whatsappNumbers[0].display}

What specifically are you looking to build?`;
}

export const quickActions = [
  { label: "What services do you offer?", message: "What services do you offer?" },
  { label: "How do I start a project?", message: "How do I start a project?" },
  { label: "Tell me about ERP solutions", message: "Tell me about your ERP systems" },
  { label: "Contact on WhatsApp", message: "I want to contact you on WhatsApp" },
];
