export interface ERPProduct {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  overview: string;
  benefits: string[];
  industries: string[];
}

export const erpProducts: ERPProduct[] = [
  {
    id: "maphunziro",
    name: "Maphunziro LMS",
    subtitle: "Learning Management System",
    description:
      "A comprehensive learning platform for schools, universities, and training institutions.",
    features: [
      "Student Portal",
      "Teacher Portal",
      "Attendance",
      "Assignments",
      "Examinations",
      "Results",
    ],
    image: "/images/erp-maphunziro.png",
    overview:
      "Maphunziro LMS delivers a complete digital learning ecosystem connecting students, teachers, and administrators in one unified platform.",
    benefits: [
      "Streamlined academic workflows",
      "Real-time progress tracking",
      "Automated grading and reporting",
      "Mobile-friendly access for all users",
    ],
    industries: ["Education", "Training", "Universities", "Schools"],
  },
  {
    id: "boma",
    name: "Boma ERP",
    subtitle: "Government Management System",
    description:
      "Digital transformation platform for municipalities and government agencies.",
    features: [
      "Citizen Services",
      "Issue Reporting",
      "Permit Applications",
      "Document Tracking",
      "Administration Dashboard",
    ],
    image: "/images/erp-boma.png",
    overview:
      "Boma ERP empowers government organizations to deliver modern, transparent, and efficient public services to citizens.",
    benefits: [
      "Improved citizen satisfaction",
      "Reduced paperwork and processing time",
      "Transparent service delivery",
      "Centralized administration",
    ],
    industries: ["Government", "Municipalities", "Public Sector"],
  },
  {
    id: "bizcore",
    name: "BizCore ERP",
    subtitle: "Organization Management Platform",
    description:
      "All-in-one management system for businesses and organizations of any size.",
    features: [
      "Staff Management",
      "Projects",
      "Departments",
      "Reporting",
      "Document Management",
    ],
    image: "/images/erp-bizcore.png",
    overview:
      "BizCore ERP unifies your organization's operations with powerful tools for staff, projects, and document management.",
    benefits: [
      "Unified business operations",
      "Enhanced team collaboration",
      "Data-driven decision making",
      "Scalable for growing teams",
    ],
    industries: ["Business", "NGOs", "SMEs", "Corporations"],
  },
  {
    id: "bankflow",
    name: "BankFlow ERP",
    subtitle: "Banking Operations Platform",
    description:
      "Secure financial operations platform for banks and financial institutions.",
    features: [
      "Customer Management",
      "Loan Tracking",
      "Transactions",
      "Compliance",
      "Reporting",
    ],
    image: "/images/erp-bankflow.png",
    overview:
      "BankFlow ERP provides a robust foundation for modern banking operations with compliance and security at its core.",
    benefits: [
      "Regulatory compliance built-in",
      "Real-time transaction monitoring",
      "Comprehensive customer profiles",
      "Advanced financial reporting",
    ],
    industries: ["Banking", "Finance", "Microfinance", "Credit Unions"],
  },
  {
    id: "healthbridge",
    name: "HealthBridge ERP",
    subtitle: "Hospital Management System",
    description:
      "Complete healthcare management solution for hospitals and clinics.",
    features: [
      "Patients",
      "Appointments",
      "Billing",
      "Pharmacy",
      "Medical Records",
    ],
    image: "/images/erp-healthbridge.png",
    overview:
      "HealthBridge ERP connects every aspect of hospital operations from patient intake to billing and pharmacy management.",
    benefits: [
      "Improved patient care coordination",
      "Reduced administrative burden",
      "Integrated medical records",
      "Efficient billing workflows",
    ],
    industries: ["Healthcare", "Hospitals", "Clinics", "Medical Centers"],
  },
  {
    id: "campuspro",
    name: "CampusPro ERP",
    subtitle: "University Management System",
    description:
      "Enterprise platform designed for universities and higher education institutions.",
    features: [
      "Admissions",
      "Student Records",
      "Finance",
      "Examinations",
      "Timetables",
    ],
    image: "/images/erp-campuspro.png",
    overview:
      "CampusPro ERP manages the full university lifecycle from admissions through graduation with powerful academic tools.",
    benefits: [
      "End-to-end academic management",
      "Financial transparency",
      "Automated scheduling",
      "Comprehensive student records",
    ],
    industries: ["Universities", "Higher Education", "Colleges"],
  },
  {
    id: "peopleflow",
    name: "PeopleFlow HRMS",
    subtitle: "Human Resource Management System",
    description:
      "Modern HR platform for recruitment, payroll, and employee lifecycle management.",
    features: [
      "Payroll",
      "Recruitment",
      "Leave Management",
      "Performance Tracking",
    ],
    image: "/images/erp-peopleflow.png",
    overview:
      "PeopleFlow HRMS simplifies human resource management with intuitive tools for every stage of the employee journey.",
    benefits: [
      "Automated payroll processing",
      "Streamlined recruitment pipeline",
      "Performance insights",
      "Employee self-service portal",
    ],
    industries: ["HR", "Enterprise", "Business", "Government"],
  },
  {
    id: "legaltrack",
    name: "LegalTrack ERP",
    subtitle: "Legal Practice Management System",
    description:
      "Professional platform for law firms and legal departments.",
    features: [
      "Case Management",
      "Client Records",
      "Documents",
      "Deadlines",
      "Billing",
    ],
    image: "/images/erp-legaltrack.png",
    overview:
      "LegalTrack ERP helps legal professionals manage cases, clients, and documents with precision and efficiency.",
    benefits: [
      "Never miss a deadline",
      "Organized case workflows",
      "Secure document management",
      "Accurate time and billing tracking",
    ],
    industries: ["Legal", "Law Firms", "Corporate Legal"],
  },
  {
    id: "agrismart",
    name: "AgriSmart ERP",
    subtitle: "Agriculture Management Platform",
    description:
      "Smart agriculture platform for farmers, cooperatives, and agribusiness.",
    features: [
      "Farmer Records",
      "Production Tracking",
      "Inventory",
      "Analytics",
    ],
    image: "/images/erp-agrismart.png",
    overview:
      "AgriSmart ERP brings digital intelligence to agriculture with tools for production tracking, inventory, and analytics.",
    benefits: [
      "Data-driven farming decisions",
      "Supply chain visibility",
      "Production optimization",
      "Market-ready analytics",
    ],
    industries: ["Agriculture", "Farming", "Agribusiness", "Cooperatives"],
  },
  {
    id: "mzinda",
    name: "Mzinda Smart City Platform",
    subtitle: "Smart City & Community Management System",
    description:
      "Urban management platform for smart cities and community development.",
    features: [
      "Citizen Reporting",
      "Infrastructure Monitoring",
      "Community Engagement",
      "Analytics",
    ],
    image: "/images/erp-mzinda.png",
    overview:
      "Mzinda Smart City Platform connects citizens, infrastructure, and city administrators for smarter urban living.",
    benefits: [
      "Real-time infrastructure monitoring",
      "Citizen engagement tools",
      "Data-driven urban planning",
      "Community-first design",
    ],
    industries: ["Smart Cities", "Urban Planning", "Community Development"],
  },
];
