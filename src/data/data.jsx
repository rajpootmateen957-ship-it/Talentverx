import {
  BadgeCheck,
  BarChart3,
  Building2,
  CalendarClock,
  CalendarDays,
  CalendarOff,
  Check,
  ClipboardCheck,
  ClipboardList,
  Clock3,
  Eye,
  EyeOff,
  FileCheck2,
  Fingerprint,
  Globe,
  HeartHandshake,
  Inbox,
  Layers,
  LayoutDashboard,
  Lock,
  Mail,
  MessageCircle,
  MousePointerClick,
  ServerCog,
  ShieldCheck,
  Timer,
  TrendingUp,
  UserCheck,
  UserPlus,
  Users,
  UsersRound,
  WalletCards,
} from "../components/icons/index.js";
import { Facebook, Instagram, Linkedin } from "../components/icons/index.js";
import talentverxLogo from "../assets/talentverx logo icon (1).jpeg";

export { talentverxLogo };

export const NAV_LINKS = [
  { label: "Home", href: "home" },
  { label: "Features", href: "features" },
  { label: "Compare", href: "competitors" },
  { label: "Pricing", href: "pricing" },
  { label: "FAQ", href: "faq" },
  { label: "Request a Demo", href: "demo" },
];

export const HERO_STATS = [
  { icon: Users, label: "Total Employees", value: 128, delta: "+6 this month", tone: "blue" },
  { icon: UserCheck, label: "Present Today", value: 104, delta: "81% of team", tone: "teal" },
  { icon: CalendarOff, label: "On Leave", value: 6, delta: "2 annual · 4 sick", tone: "amber" },
  { icon: Inbox, label: "Pending Requests", value: 12, delta: "7 leave · 5 hires", tone: "cyan" },
];

export const HERO_WEEK = [
  { day: "Mon", value: 118 },
  { day: "Tue", value: 124 },
  { day: "Wed", value: 121 },
  { day: "Thu", value: 116 },
  { day: "Fri", value: 119 },
  { day: "Sat", value: 32 },
  { day: "Sun", value: 0 },
];

export const HERO_LEAVES = [
  { label: "Annual leave", used: 14, total: 20 },
  { label: "Sick leave", used: 3, total: 8 },
  { label: "Personal leave", used: 1, total: 5 },
];

export const HERO_ACTIVITY = [
  { icon: CalendarOff, text: "Aisha Khan submitted time-off", time: "2m ago" },
  { icon: UserPlus, text: "Daniel Reyes added to Engineering", time: "1h ago" },
  { icon: WalletCards, text: "June payroll draft completed", time: "3h ago" },
];

export const HERO_POINTS = [
  "Employee Management",
  "Attendance & Time Off",
  "Payroll",
  "Reports",
];

export const COMPANY_LOGOS = [
  { name: "Google", src: "/logos/google.svg" },
  { name: "Microsoft", src: "/logos/microsoft.svg" },
  { name: "Slack", src: "/logos/slack.svg" },
  { name: "Figma", src: "/logos/figma.svg" },
  { name: "Stripe", src: "/logos/stripe.svg" },
  { name: "Shopify", src: "/logos/shopify.svg" },
  { name: "Amazon", src: "/logos/amazon.svg" },
  { name: "Notion", src: "/logos/notion.svg" },
];

export const VERIFICATIONS = [
  {
    icon: ShieldCheck,
    title: "ISO 27001 Certified",
    text: "Information security management certified by independent auditors.",
  },
  {
    icon: FileCheck2,
    title: "SOC 2 Type II",
    text: "Independent audit of security, availability and confidentiality controls.",
  },
  {
    icon: Globe,
    title: "GDPR Compliant",
    text: "Data protection and privacy built to European standards.",
  },
  {
    icon: Lock,
    title: "256-bit Encryption",
    text: "Data encrypted in transit and at rest with industry-grade standards.",
  },
  {
    icon: ServerCog,
    title: "99.9% Uptime SLA",
    text: "Reliable infrastructure monitored around the clock.",
  },
  {
    icon: Fingerprint,
    title: "SSO & 2FA",
    text: "Enterprise-grade sign-on with multi-factor authentication.",
  },
];

export const COUNTERS = [
  { icon: Building2, value: 2000, suffix: "+", label: "Companies onboard" },
  { icon: UsersRound, value: 250, suffix: "K", label: "Employees managed" },
  { icon: Globe, value: 40, suffix: "+", label: "Countries served" },
  { icon: HeartHandshake, value: 98, suffix: "%", label: "Customer satisfaction" },
];

export const FEATURES = [
  {
    icon: Users,
    title: "Employee Management",
    text: "Employee profiles, departments, job information and workforce data in one centralized directory.",
    size: "wide",
    visual: "employees",
  },
  {
    icon: Clock3,
    title: "Attendance & Presence",
    text: "Track daily attendance, working hours and team presence.",
    size: "tall",
    visual: "attendance",
  },
  {
    icon: CalendarDays,
    title: "Time Off & Absence",
    text: "Request, review and manage time off from one place.",
    size: "tall",
    visual: "timeoff",
  },
  {
    icon: WalletCards,
    title: "Payroll",
    text: "Centralize compensation and payroll-related employee information.",
    size: "tall",
    visual: "payroll",
  },
  {
    icon: MessageCircle,
    title: "Discussions",
    text: "Keep workplace communication in one connected space.",
    size: "tall",
    visual: "discussions",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    text: "Clear reports on attendance, leave, payroll and workforce activity.",
    size: "wide",
    visual: "reports",
  },
];

export const COMPARISON_ROWS = [
  "All-in-one HR workspace",
  "Attendance & presence tracking",
  "Time-off requests & approvals",
  "Payroll information management",
  "Workplace discussions",
  "Reports & analytics",
  "Built-in onboarding",
  "24/7 human support",
  "Transparent pricing",
];

export const COMPETITORS = [
  {
    name: "TalentVerx",
    logo: "TV",
    isOurs: true,
    marks: [true, true, true, true, true, true, true, true, true],
  },
  {
    name: "BambooHR",
    logo: "B",
    isOurs: false,
    marks: [true, true, true, true, false, true, true, false, false],
  },
  {
    name: "Gusto",
    logo: "G",
    isOurs: false,
    marks: [false, true, false, true, false, true, false, false, false],
  },
  {
    name: "Workday",
    logo: "W",
    isOurs: false,
    marks: [true, true, true, true, false, true, false, true, false],
  },
];

export const PLANS = [
  {
    name: "Starter",
    description: "For small teams getting their HR processes organized.",
    features: [
      "Employee directory & profiles",
      "Attendance tracking",
      "Time-off requests & approvals",
      "Core reports",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    description: "For growing teams that need the full HR workspace.",
    features: [
      "Everything in Starter",
      "Payroll information management",
      "Discussions & team updates",
      "Advanced analytics",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "For larger organizations with custom requirements.",
    features: [
      "Everything in Growth",
      "Custom onboarding & setup",
      "Dedicated support",
      "Organization-wide controls",
    ],
    highlighted: false,
  },
];

export const FAQS = [
  {
    q: "What is TalentVerx?",
    a: "TalentVerx is an all-in-one HR management platform that brings employee management, attendance, time off, payroll information, discussions and reporting together in one workspace.",
  },
  {
    q: "What HR processes can TalentVerx manage?",
    a: "TalentVerx covers employee records and departments, attendance and presence, time-off requests and approvals, payroll-related information, workplace discussions and HR reports.",
  },
  {
    q: "Can employees manage their own time-off requests?",
    a: "Yes. Employees can submit time-off requests themselves, and managers can review and approve them directly in the platform.",
  },
  {
    q: "Can managers track attendance?",
    a: "Yes. Attendance and presence information is centralized, so managers can see who's working and review working hours in one place.",
  },
  {
    q: "Does TalentVerx support payroll management?",
    a: "TalentVerx centralizes payroll-related employee information, making it easier to organize and prepare payroll. It complements your existing payroll process rather than replacing it.",
  },
  {
    q: "Can TalentVerx scale with growing teams?",
    a: "TalentVerx is designed to support teams as they grow — from a small company to a larger workforce — with consistent processes in a single platform.",
  },
  {
    q: "Can I request a product demo?",
    a: "Absolutely. Use the Request a Demo button on this page and our team will get in touch to walk you through the platform.",
  },
];

export const TEAM_SIZES = ["1–10", "11–50", "51–200", "201–500", "500+"];

export const CTA_POINTS = [
  "No obligation — just a practical walkthrough",
  "See how TalentVerx fits your team",
];

export const CTA_BANNER_POINTS = [
  "Free 14-day trial",
  "No credit card required",
  "Cancel anytime",
];

export const FOOTER_COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Features", target: "features" },
      { label: "Compare", target: "competitors" },
      { label: "Pricing", target: "pricing" },
      { label: "Request a Demo", target: "demo" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", target: "home" },
      { label: "Request a Demo", target: "demo" },
      { label: "Resources", target: "faq" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", target: "faq" },
      { label: "FAQ", target: "faq" },
      { label: "Contact Support", target: "demo" },
    ],
  },
];

export const SOCIAL_LINKS = [
  { icon: Instagram, label: "Instagram", href: "http://instagram.com/talentverx" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/share/1CyAh4F3c5/" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/showcase/talentver/?viewAsMember=true" },
  { icon: Mail, label: "Email", href: "mailto:talentverx@gmail.com" },
];

export const PROBLEMS = [
  {
    icon: ClipboardList,
    title: "Too much manual work",
    text: "HR teams lose hours every week on spreadsheets, email chains and repetitive data entry that software should handle.",
  },
  {
    icon: Layers,
    title: "Fragmented employee data",
    text: "Employee information lives in different systems and files, making it hard to get one clear, accurate view of your people.",
  },
  {
    icon: CalendarClock,
    title: "Attendance and leave chaos",
    text: "Tracking presence, working hours and time-off requests without a central system is slow, error-prone and frustrating.",
  },
  {
    icon: EyeOff,
    title: "Limited HR visibility",
    text: "Payroll, headcount and operational information is scattered, so decisions rely on outdated or incomplete data.",
  },
];

export const BENEFITS = [
  {
    icon: Timer,
    title: "Save Time",
    text: "Reduce repetitive HR administration so your team can focus on strategic work.",
  },
  {
    icon: BadgeCheck,
    title: "Improve Accuracy",
    text: "Keep workforce information organized, consistent and up to date.",
  },
  {
    icon: Eye,
    title: "Increase Visibility",
    text: "Understand attendance, leave, payroll and workforce activity more clearly.",
  },
  {
    icon: HeartHandshake,
    title: "Improve Employee Experience",
    text: "Make everyday HR processes simpler for employees and managers alike.",
  },
];

export const BENEFITS_STATS = [
  { value: 6, suffix: "", label: "Core HR modules in one platform" },
  { value: 1, suffix: "", label: "Unified workspace for your team" },
  { value: 3, suffix: " steps", label: "From setup to daily operation" },
  { value: 24, suffix: "/7", label: "Self-service access for employees" },
];

export const TESTIMONIALS = [
  {
    question: "How has TalentVerx changed attendance and leave tracking?",
    quote:
      "Attendance and leave tracking used to take my team half the week. With TalentVerx everything is in one place and our approval flow finally makes sense.",
    name: "HR Manager",
    role: "Mid-size services company",
    logo: "/logos/microsoft.svg",
  },
  {
    question: "What does TalentVerx do for workforce visibility?",
    quote:
      "The centralized employee directory and payroll summary give us a much clearer picture of our workforce. It's noticeably less spreadsheet work week to week.",
    name: "Office Operations Lead",
    role: "Growing product team",
    logo: "/logos/slack.svg",
  },
  {
    question: "Has TalentVerx reduced manual HR work for your team?",
    quote:
      "Our employees submit time-off requests themselves and see the status instantly. The back-and-forth emails we used to get are mostly gone.",
    name: "People Operations Specialist",
    role: "SaaS company",
    logo: "/logos/google.svg",
  },
  {
    question: "How easy is TalentVerx for your team to use?",
    quote:
      "The interface is clean and intuitive, so our managers and employees actually use it every day instead of falling back to spreadsheets and email.",
    name: "Operations Director",
    role: "Retail company",
    logo: "/logos/shopify.svg",
  },
];

export const REASONS = [
  {
    icon: Layers,
    title: "One Centralized Platform",
    text: "Employee data, attendance, leave, payroll and communication live together in a single workspace.",
  },
  {
    icon: MousePointerClick,
    title: "Simple & Intuitive",
    text: "A clean interface your HR team and employees will actually want to use every day.",
  },
  {
    icon: ClipboardCheck,
    title: "Less Administrative Work",
    text: "Reduce repetitive data entry and manual tracking so HR can focus on people, not paperwork.",
  },
  {
    icon: Eye,
    title: "Better Workforce Visibility",
    text: "Attendance, leave and payroll information is organized and easy to review at a glance.",
  },
  {
    icon: TrendingUp,
    title: "Scalable HR Operations",
    text: "Built to support growing teams, from your first hire to hundreds of employees.",
  },
  {
    icon: UsersRound,
    title: "Connected Teams",
    text: "Managers and employees stay aligned with shared processes and clear communication.",
  },
];

export const STEPS = [
  {
    number: "01",
    icon: Building2,
    title: "Set Up Your Organization",
    text: "Configure employees, departments and HR workflows to match how your company works.",
  },
  {
    number: "02",
    icon: LayoutDashboard,
    title: "Manage Your Workforce",
    text: "Handle attendance, time off, payroll, communication and employee operations from one place.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Make Better Decisions",
    text: "Use centralized information and reports to gain better visibility into your workforce.",
  },
];

export const DP_SIDEBAR = [
  { icon: LayoutDashboard, label: "Overview", active: true },
  { icon: Users, label: "Employees" },
  { icon: CalendarDays, label: "Time Off" },
  { icon: WalletCards, label: "Payroll" },
  { icon: MessageCircle, label: "Discussions" },
  { icon: BarChart3, label: "Reports" },
];

export const DP_STATS = [
  { label: "Total Employees", value: 128, delta: "+6 this month" },
  { label: "Present Today", value: 104, delta: "81% of team" },
  { label: "On Leave", value: 6, delta: "4 annual · 2 sick" },
  { label: "Pending Requests", value: 12, delta: "across 3 modules" },
];

export const DP_WEEK = [
  { day: "Mon", present: 118, leave: 4 },
  { day: "Tue", present: 124, leave: 3 },
  { day: "Wed", present: 121, leave: 5 },
  { day: "Thu", present: 116, leave: 6 },
  { day: "Fri", present: 119, leave: 4 },
];

export const DP_LEAVES = [
  { label: "Annual", used: 14, total: 20 },
  { label: "Sick", used: 3, total: 8 },
  { label: "Personal", used: 1, total: 5 },
];

export const DP_TABLE_ROWS = [
  { initials: "AK", name: "Aisha Khan", dept: "Product Design", role: "Design Lead", status: "Active", color: "linear-gradient(135deg,#123e9e,#1e5fe8)", tone: "teal" },
  { initials: "DR", name: "Daniel Reyes", dept: "Engineering", role: "Frontend Engineer", status: "Active", color: "linear-gradient(135deg,#0e7490,#19c6e8)", tone: "teal" },
  { initials: "SM", name: "Sara Malik", dept: "Marketing", role: "Growth Manager", status: "On leave", color: "linear-gradient(135deg,#0f766e,#12b8a6)", tone: "amber" },
  { initials: "OJ", name: "Omar Javed", dept: "Sales", role: "Account Executive", status: "Active", color: "linear-gradient(135deg,#4f46e5,#818cf8)", tone: "teal" },
  { initials: "LF", name: "Lena Fischer", dept: "People Ops", role: "HR Generalist", status: "Active", color: "linear-gradient(135deg,#b45309,#f59e0b)", tone: "teal" },
];

export const FS_FEATURES = [
  {
    id: "employee-management",
    category: "Employee Management",
    title: "Manage your people from one place.",
    text: "Manage employee profiles, departments, job information and important workforce data through a centralized HR workspace.",
    benefits: [
      { icon: Check, text: "Centralized employee information" },
      { icon: Check, text: "Organized workforce management" },
      { icon: Check, text: "Faster access to employee records" },
    ],
    icon: Users,
    mockup: "employees",
  },
  {
    id: "attendance",
    category: "Attendance & Presence",
    title: "Know who's working. Stay informed.",
    text: "Track employee attendance, working hours and daily presence with a centralized system.",
    benefits: [
      { icon: Check, text: "Simplify attendance tracking" },
      { icon: Check, text: "Improve workforce visibility" },
      { icon: Check, text: "Reduce manual record keeping" },
    ],
    icon: Clock3,
    mockup: "attendance",
  },
  {
    id: "time-off",
    category: "Time Off & Absence",
    title: "Make leave management simple.",
    text: "Employees can submit time-off requests while managers can review and manage them efficiently.",
    benefits: [
      { icon: Check, text: "Easier leave requests" },
      { icon: Check, text: "Faster approval workflows" },
      { icon: Check, text: "Clear leave visibility" },
    ],
    icon: CalendarDays,
    mockup: "timeoff",
  },
  {
    id: "payroll",
    category: "Payroll Management",
    title: "Make payroll easier to manage.",
    text: "Centralize payroll-related employee information and streamline payroll processes.",
    benefits: [
      { icon: Check, text: "Organized payroll information" },
      { icon: Check, text: "Less manual administration" },
      { icon: Check, text: "Better visibility into compensation" },
    ],
    icon: WalletCards,
    mockup: "payroll",
  },
  {
    id: "discussions",
    category: "Discussions",
    title: "Keep your teams connected.",
    text: "Make workplace communication easier with centralized discussions and team collaboration.",
    benefits: [
      { icon: Check, text: "Centralized communication" },
      { icon: Check, text: "Better team collaboration" },
      { icon: Check, text: "Easier workplace updates" },
    ],
    icon: MessageCircle,
    mockup: "discussions",
  },
  {
    id: "reports",
    category: "Reports & Analytics",
    title: "Turn HR data into better visibility.",
    text: "Give HR teams a clearer view of workforce information through useful reports and analytics.",
    benefits: [
      { icon: Check, text: "Workforce activity insights" },
      { icon: Check, text: "Attendance and leave reporting" },
      { icon: Check, text: "Payroll and headcount summaries" },
    ],
    icon: BarChart3,
    mockup: "reports",
  },
];

export const FS_EMPLOYEE_ROWS = [
  { initials: "AK", name: "Aisha Khan", dept: "Product Design", status: "Active", tone: "teal", color: "linear-gradient(135deg,#123e9e,#1e5fe8)" },
  { initials: "DR", name: "Daniel Reyes", dept: "Engineering", status: "Active", tone: "blue", color: "linear-gradient(135deg,#0e7490,#19c6e8)" },
  { initials: "SM", name: "Sara Malik", dept: "Marketing", status: "On leave", tone: "amber", color: "linear-gradient(135deg,#0f766e,#12b8a6)" },
  { initials: "OJ", name: "Omar Javed", dept: "Sales", status: "Active", tone: "blue", color: "linear-gradient(135deg,#4f46e5,#818cf8)" },
];

export const FS_ATTENDANCE_ROWS = [
  { name: "Engineering", present: "34 / 38", hours: "7h 24m", tone: "teal" },
  { name: "Product Design", present: "12 / 14", hours: "7h 05m", tone: "teal" },
  { name: "Marketing", present: "9 / 11", hours: "6h 48m", tone: "blue" },
  { name: "Sales", present: "15 / 17", hours: "6h 30m", tone: "amber" },
];

export const FS_TIMEOFF_REQUESTS = [
  { name: "Aisha Khan", type: "Annual · 5 days", tone: "blue" },
  { name: "Omar Javed", type: "Sick · 2 days", tone: "amber" },
  { name: "Lena Fischer", type: "Personal · 1 day", tone: "cyan" },
];

export const FS_PAYROLL_ROWS = [
  { name: "Aisha Khan", dept: "Design", amount: "$4,820", status: "Processed", tone: "teal" },
  { name: "Daniel Reyes", dept: "Engineering", amount: "$6,150", status: "Processed", tone: "teal" },
  { name: "Sara Malik", dept: "Marketing", amount: "$4,395", status: "Pending", tone: "amber" },
  { name: "Omar Javed", dept: "Sales", amount: "$5,020", status: "Processed", tone: "teal" },
];

export const FS_CHAT_MESSAGES = [
  {
    side: "in",
    initials: "AK",
    color: "linear-gradient(135deg,#123e9e,#1e5fe8)",
    name: "Aisha Khan",
    text: "Reminder — time-off requests for next month close on Friday.",
  },
  {
    side: "out",
    initials: "DR",
    color: "linear-gradient(135deg,#0e7490,#19c6e8)",
    name: "Daniel Reyes",
    text: "Thanks! Submitted mine this morning.",
  },
  {
    side: "in",
    initials: "SM",
    color: "linear-gradient(135deg,#0f766e,#12b8a6)",
    name: "Sara Malik",
    text: "Same here. All three approvals pending with you, Aisha 🙂",
  },
];

export const FS_REPORT_CHIPS = ["Att. rate 92%", "12 open requests", "6 on leave"];

export const FS_CHARTS = [
  { label: "Present employees", bars: [62, 78, 70, 90, 82, 96] },
  { label: "Leave days taken", bars: [30, 42, 36, 50, 44, 58] },
];

export const FS_ATTENDANCE_FOOT = { label: "Team presence", value: "81%" };