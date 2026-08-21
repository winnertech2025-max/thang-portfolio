"use client";

import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  ExternalLink,
  GitBranch,
  Globe2,
  Images,
  Mail,
  Moon,
  Phone,
  Send,
  Smartphone,
  Sun,
  UserRound,
  X,
} from "lucide-react";
import Image from "next/image";
import { FormEvent, useMemo, useState } from "react";
import { IntroScreen } from "@/components/IntroScreen";
import { TextType } from "@/components/TextType";

type Locale = "vi" | "en";
type CopyContent = {
  nav: string[];
  badge: string;
  heroTitle: string;
  heroDescription: string;
  ctaWork: string;
  ctaContact: string;
  stats: [string, string][];
  aboutTitle: string;
  aboutBody: string;
  skillsTitle: string;
  projectsTitle: string;
  projectsIntro: string;
  billsTitle: string;
  billsIntro: string;
  billsNote: string;
  viewBill: string;
  experienceTitle: string;
  experienceBody: string;
  processTitle: string;
  processIntro: string;
  processSteps: {
    title: string;
    description: string;
  }[];
  contactTitle: string;
  contactDescription: string;
  formName: string;
  formEmail: string;
  formMessage: string;
  formButton: string;
  footer: string;
  visit: string;
  role: string;
};

const profile = {
  name: "Le Quoc Thang",
  displayName: "Lê Quốc Thắng",
  title: "Full-stack Developer",
  email: "thangdev02@gmail.com",
  phone: "0949450800",
  githubs: [
    "https://github.com/winnertech2025-max",
    "https://github.com/Thangdev02",
  ],
  facebook: "https://www.facebook.com/thang.quoc.94651774/",
};

const copy = {
  vi: {
    nav: ["Giới thiệu", "Kỹ năng", "Dự án", "Check bill", "Liên hệ"],
    badge: "Full-stack Developer",
    heroTitle: "Mình xây web, mobile app, AI và hệ thống vận hành cho sản phẩm thật.",
    heroDescription:
      "Chào mọi người, mình là Lê Quốc Thắng. Mình thích biến những yêu cầu còn rời rạc thành sản phẩm chạy được, dễ dùng và dễ phát triển tiếp. Công việc hằng ngày của mình xoay quanh React, Next.js, Node.js, Supabase và mobile app.",
    ctaWork: "Xem dự án",
    ctaContact: "Liên hệ",
    stats: [
      ["4+", "Năm kinh nghiệm"],
      ["10+", "Dự án tiêu biểu"],
      ["Web + Mobile ", "Nền tảng triển khai"],
    ],
    aboutTitle: "Mình xây sản phẩm từ giao diện đến backend.",
    aboutBody:
      "Điểm mạnh của mình là kết hợp tư duy sản phẩm với kỹ thuật full-stack: thiết kế luồng người dùng, dựng UI responsive, tích hợp API, quản lý dữ liệu và triển khai production. Mình thích những giao diện sạch, dễ dùng và những hệ thống có cấu trúc đủ tốt để phát triển lâu dài.",
    skillsTitle: "Kỹ năng",
    projectsTitle: "Dự án đã làm",
    projectsIntro:
      "Đây là các dự án gần nhất mình muốn giới thiệu. Trước đó mình còn tham gia hơn 10-20 dự án khác, nhưng danh sách khá dài nên mình chỉ chọn những sản phẩm tiêu biểu để đưa lên portfolio.",
    billsTitle: "Check bill chuyển khoản",
    billsIntro:
      "Khu vực lưu và đối chiếu các bill chuyển khoản đã nhận. Ảnh được đọc từ thư mục public với tên bill1.jpg đến bill13.jpg.",
    billsNote: "Thêm ảnh vào public/bill1.jpg ... public/bill13.jpg để hiển thị đầy đủ.",
    viewBill: "Xem bill",
    experienceTitle: "Kinh nghiệm",
    experienceBody:
      "3 năm lập trình sản phẩm với React, Next.js, Node.js, Supabase, SQL, mobile app và các workflow tích hợp thực tế.",
    processTitle: "Quy trình làm việc",
    processIntro:
      "Mình giữ quy trình rõ từ đầu để hai bên dễ theo dõi tiến độ, chi phí và phạm vi bàn giao.",
    processSteps: [
      {
        title: "Trao đổi yêu cầu và báo giá",
        description:
          "Khách gửi yêu cầu, phạm vi mong muốn và deadline. Mình xem kỹ nhu cầu, tư vấn hướng làm phù hợp rồi gửi báo giá.",
      },
      {
        title: "Chốt hợp tác",
        description:
          "Khi khách đồng ý triển khai, mình gửi hợp đồng và CCCD để hai bên có thông tin rõ ràng trước khi bắt đầu.",
      },
      {
        title: "Demo hoặc MVP",
        description:
          "Mình làm bản demo/MVP trước. Nếu khách hài lòng với hướng đi này, khách đặt cọc để mình mua hạ tầng và tiếp tục triển khai.",
      },
      {
        title: "Hoàn thiện và bàn giao",
        description:
          "Mình làm nốt phần còn lại, kiểm tra, bàn giao source/tài khoản/tài liệu cần thiết và khách thanh toán phần còn lại.",
      },
    ],
    contactTitle: "Cùng trao đổi về dự án tiếp theo.",
    contactDescription:
      "Gửi nhanh vài dòng, form sẽ mở email đã soạn sẵn tới địa chỉ của mình.",
    formName: "Tên của bạn",
    formEmail: "Email",
    formMessage: "Nội dung",
    formButton: "Gửi email",
    footer: "Thiết kế và phát triển với Next.js.",
    visit: "Truy cập",
    role: "Vai trò",
  },
  en: {
    nav: ["About", "Skills", "Projects", "Bills", "Contact"],
    badge: "Full-stack Developer",
    heroTitle: "I build web apps, mobile apps, AI, and product systems for real users.",
    heroDescription:
      "Hi, I am Le Quoc Thang. I enjoy turning rough ideas into products that feel clear, useful, and easy to improve. Most of my day-to-day work is around React, Next.js, Node.js, Supabase, and mobile apps.",
    ctaWork: "View projects",
    ctaContact: "Contact",
    stats: [
      ["4+", "Years experience"],
      ["10", "Featured projects"],
      ["Web + Mobile", "Delivery platforms"],
    ],
    aboutTitle: "I build from interface to backend.",
    aboutBody:
      "My strength is combining product thinking with full-stack delivery: user flows, responsive UI, API integration, data modeling, and production deployment. I like clean interfaces, practical details, and systems that can keep growing.",
    skillsTitle: "Skills",
    projectsTitle: "Selected projects",
    projectsIntro:
      "These are the most recent projects I want to highlight. I have worked on 10-20+ other projects before, but the full list is quite long, so this portfolio focuses on representative products.",
    billsTitle: "Bank transfer bill check",
    billsIntro:
      "A simple place to store and review received transfer receipts. Images are loaded from public as bill1.jpg through bill13.jpg.",
    billsNote: "Add images to public/bill1.jpg ... public/bill13.jpg to display all receipts.",
    viewBill: "View bill",
    experienceTitle: "Experience",
    experienceBody:
      "3 years developing products with React, Next.js, Node.js, Supabase, SQL, mobile apps, and practical integration workflows.",
    processTitle: "Working process",
    processIntro:
      "I keep the workflow clear from the beginning so both sides can track scope, timeline, cost, and handover expectations.",
    processSteps: [
      {
        title: "Requirements and quotation",
        description:
          "The client shares the requirements, expected scope, and deadline. I review the needs, suggest a practical direction, and send a quotation.",
      },
      {
        title: "Agreement",
        description:
          "Once the client confirms, I send the contract and ID information so both sides have clear details before starting.",
      },
      {
        title: "Demo or MVP",
        description:
          "I build a demo/MVP first. If the client is happy with that direction, the client sends a deposit so I can purchase infrastructure and continue development.",
      },
      {
        title: "Completion and handover",
        description:
          "I finish the remaining scope, test the product, hand over source/accounts/docs as needed, and the client pays the remaining balance.",
      },
    ],
    contactTitle: "Let us talk about the next project.",
    contactDescription:
      "Send a short message. The form opens a prepared email to my inbox.",
    formName: "Your name",
    formEmail: "Email",
    formMessage: "Message",
    formButton: "Send email",
    footer: "Designed and developed with Next.js.",
    visit: "Visit",
    role: "Role",
  },
} satisfies Record<Locale, CopyContent>;

const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "ReactJS", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "Backend",
    items: ["Node.js", ".NET", "Supabase", "SQL", "MongoDB"],
  },
  {
    title: "Mobile & Data",
    items: ["React Native", "Flutter", "Python", "REST API", "Deployment"],
  },
];

const projects = [
  {
    name: "Lam Media",
    type: "Sports platform",
    url: "https://www.lammedia.com.tw/",
    image: "/projects/lam-media.png",
    descriptionVi:
      "Nền tảng theo dõi lịch, tỷ số và diễn biến giải bóng đá phủi tại một nơi.",
    descriptionEn:
      "A football tournament platform for schedules, scores, and live match updates.",
    stack: ["Next.js", "React", "Realtime UI"],
    accent: "from-sky-500 to-cyan-400",
  },
  {
    name: "NAILA",
    type: "Salon booking",
    url: "https://www.naila.com.au/",
    image: "/projects/naila.png",
    descriptionVi:
      "Hệ thống đặt lịch salon trực tuyến, hỗ trợ luồng khách hàng và vận hành dịch vụ.",
    descriptionEn:
      "An online salon booking product supporting customer booking and service operations.",
    stack: ["React", "Booking Flow", "Supabase"],
    accent: "from-zinc-800 to-blue-500",
  },
  {
    name: "Deluna Studio",
    type: "Ecommerce",
    url: "https://www.delunastudio.nl/",
    image: "/projects/deluna-studio.png",
    descriptionVi:
      "Website bán sản phẩm cá nhân hóa với luồng chọn sản phẩm, tùy chỉnh và mua hàng.",
    descriptionEn:
      "A personalized ecommerce store with product selection, customization, and checkout flow.",
    stack: ["Next.js", "Ecommerce", "Tailwind"],
    accent: "from-rose-400 to-sky-500",
  },
  {
    name: "Blox Mart",
    type: "Marketplace",
    url: "https://www.bloxmart.net/",
    image: "/projects/bloxmart.png",
    descriptionVi:
      "Cửa hàng trực tuyến cho sản phẩm Roblox, tập trung vào trải nghiệm mua nhanh và rõ ràng.",
    descriptionEn:
      "An online Roblox shop focused on a fast, clear shopping experience.",
    stack: ["React", "Commerce UI", "Payments"],
    accent: "from-blue-600 to-violet-500",
  },
  {
    name: "Vietnam Tour",
    type: "Travel storytelling",
    url: "https://vietnam-tour-sigma.vercel.app/",
    image: "/projects/vietnam-tour.png",
    descriptionVi:
      "Website kể chuyện du lịch Việt Nam bằng trải nghiệm hình ảnh và nội dung giàu cảm xúc.",
    descriptionEn:
      "A Vietnam travel storytelling website using immersive visuals and editorial content.",
    stack: ["Next.js", "Responsive UI", "Vercel"],
    accent: "from-emerald-500 to-sky-500",
  },
  {
    name: "Study Sync",
    type: "Education",
    url: "https://study-sync-five-omega.vercel.app/",
    image: "/projects/study-sync.png",
    descriptionVi:
      "Ứng dụng tìm bạn học và đồng bộ phiên Pomodoro cho trải nghiệm học tập tập trung.",
    descriptionEn:
      "A study partner and Pomodoro synchronization app for focused learning sessions.",
    stack: ["React", "Product UI", "Realtime"],
    accent: "from-indigo-500 to-cyan-400",
  },
  {
    name: "FLEUREA",
    type: "Flower commerce",
    url: "https://fleur-a-blooms.vercel.app/",
    image: "/projects/fleurea.png",
    descriptionVi:
      "Website hoa với trải nghiệm chọn bó hoa, trình bày sản phẩm và cảm xúc quà tặng.",
    descriptionEn:
      "A floral commerce site with product presentation and a polished gifting experience.",
    stack: ["Next.js", "Tailwind", "UI Design"],
    accent: "from-pink-400 to-lime-400",
  },
  {
    name: "HangOut",
    type: "Mobile app",
    url: "https://play.google.com/store/apps/details?id=com.winnertech.hangout_app&hl=vi",
    image: "/projects/hangout.png",
    descriptionVi:
      "Ứng dụng gợi ý địa điểm ăn uống, giải trí theo sở thích, ngân sách và tâm trạng.",
    descriptionEn:
      "A mobile app that recommends dining and entertainment places by mood, taste, and budget.",
    stack: ["Mobile", "React Native", "Recommendation"],
    accent: "from-orange-400 to-sky-500",
  },
  {
    name: "OhBau",
    type: "Mobile app",
    url: "https://play.google.com/store/apps/details?id=com.ohbau_app&hl=vi",
    image: "/projects/ohbau.png",
    descriptionVi:
      "Ứng dụng mua sắm đồ bầu, đồ sơ sinh và nội dung hỗ trợ mẹ bầu trong thai kỳ.",
    descriptionEn:
      "A maternity shopping and pregnancy-support app for expecting mothers.",
    stack: ["Mobile", "Ecommerce", "Content"],
    accent: "from-fuchsia-400 to-blue-500",
  },
  {
    name: "SportM",
    type: "Mobile app",
    url: "https://play.google.com/store/apps/details?id=com.choai.sportM&hl=vi",
    image: "/projects/sportm.png",
    descriptionVi:
      "Nền tảng đặt sân, xem lịch trống, tạo nhóm và rủ bạn bè chơi thể thao.",
    descriptionEn:
      "A sports venue booking platform with availability, groups, and quick match planning.",
    stack: ["Mobile", "Booking", "Business"],
    accent: "from-green-500 to-blue-500",
  },
];

const bills = Array.from({ length: 13 }, (_, index) => ({
  id: index + 1,
  src: `/bill${index + 1}.jpg`,
}));

export default function Home() {
  const [locale, setLocale] = useState<Locale>("vi");
  const [dark, setDark] = useState(false);
  const [avatarMissing, setAvatarMissing] = useState(false);
  const t = copy[locale];

  function toggleTheme() {
    setDark(!dark);
  }

  const navItems = useMemo(
    () => [
      { label: t.nav[0], href: "#about", icon: UserRound },
      { label: t.nav[1], href: "#skills", icon: Code2 },
      { label: t.nav[2], href: "#projects", icon: BriefcaseBusiness },
      { label: t.nav[3], href: "#bills", icon: Images },
      { label: t.nav[4], href: "#contact", icon: Mail },
    ],
    [t],
  );

  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`Portfolio contact from ${name || "visitor"}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <main className={dark ? "dark" : ""}>
      <div className="surface-transition min-h-screen bg-white pb-24 text-zinc-950 dark:bg-zinc-950 dark:text-white md:pb-0">
        <IntroScreen name={profile.displayName} />

        <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/85 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/80">
          <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <a href="#" className="flex items-center gap-3" aria-label="Le Quoc Thang portfolio">
              <span className="grid size-9 place-items-center rounded-lg bg-zinc-950 text-sm font-bold text-white dark:bg-white dark:text-zinc-950">
                LT
              </span>
              <span className="hidden text-sm font-semibold sm:block">{profile.displayName}</span>
            </a>

            <nav className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setLocale(locale === "vi" ? "en" : "vi")}
                className="inline-flex h-10 items-center gap-2 rounded-md border border-zinc-200 px-3 text-sm font-semibold transition hover:bg-zinc-100 dark:border-white/15 dark:hover:bg-white/10"
                aria-label="Switch language"
              >
                <Globe2 className="size-4" />
                {locale.toUpperCase()}
              </button>
              <button
                type="button"
                onClick={toggleTheme}
                className="grid size-10 place-items-center rounded-md border border-zinc-200 transition hover:bg-zinc-100 dark:border-white/15 dark:hover:bg-white/10"
                aria-label="Toggle theme"
              >
                {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
              </button>
            </div>
          </div>
        </header>

        <section className="relative overflow-hidden border-b border-zinc-200 dark:border-white/10">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent" />
          <div className="mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-7xl items-center gap-12 px-4 py-12 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
            <div className="animate-fade-up max-w-3xl">
              <div className="mb-6 inline-flex items-center rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-semibold text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200">
                {t.badge}
              </div>
              <h1 className="min-h-[11rem] text-4xl font-semibold leading-tight tracking-normal text-balance sm:min-h-[12.5rem] sm:text-5xl lg:min-h-[14rem] lg:text-5xl">
                <TextType key={locale} text={t.heroTitle} typingSpeed={34} showCursor />
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg dark:text-zinc-300">
                {t.heroDescription}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#projects"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-zinc-950 px-5 text-sm font-semibold text-white transition hover:bg-sky-700 dark:bg-white dark:text-zinc-950 dark:hover:bg-sky-100"
                >
                  <BriefcaseBusiness className="size-4" />
                  {t.ctaWork}
                </a>
                <a
                  href="#contact"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-zinc-300 px-5 text-sm font-semibold transition hover:bg-zinc-100 dark:border-white/20 dark:hover:bg-white/10"
                >
                  <Mail className="size-4" />
                  {t.ctaContact}
                </a>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {t.stats.map(([value, label]) => (
                  <div key={label} className="border-l-2 border-sky-500 pl-4">
                    <p className="text-2xl font-semibold">{value}</p>
                    <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-soft-in delay-100 relative mx-auto w-full max-w-md">
              <div className="aspect-[4/5] overflow-hidden rounded-lg border border-zinc-200 bg-zinc-100 shadow-2xl shadow-sky-950/10 dark:border-white/10 dark:bg-white/5">
                {!avatarMissing ? (
                  <Image
                    src="/avatar.jpg"
                    alt={profile.displayName}
                    width={640}
                    height={800}
                    className="h-full w-full object-cover"
                    onError={() => setAvatarMissing(true)}
                    priority
                  />
                ) : (
                  <div className="grid h-full place-items-center bg-[linear-gradient(135deg,#f8fafc,#dbeafe_50%,#18181b)] p-8 dark:bg-[linear-gradient(135deg,#09090b,#0f172a_55%,#38bdf8)]">
                    <div className="text-center">
                      <div className="mx-auto grid size-28 place-items-center rounded-lg bg-white text-4xl font-bold text-zinc-950 shadow-xl">
                        LT
                      </div>
                      <p className="mt-6 text-xl font-semibold text-white drop-shadow">
                        {profile.displayName}
                      </p>
                      <p className="mt-2 text-sm font-medium text-sky-100 drop-shadow">
                        {profile.title}
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <div className="absolute -bottom-6 left-6 right-6 rounded-lg border border-zinc-200 bg-white p-4 shadow-xl dark:border-white/10 dark:bg-zinc-900">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 size-5 text-sky-500" />
                  <div>
                    <p className="text-sm font-semibold">Available for full-stack work</p>
                    <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                      React, Next.js, Node.js, Supabase, Mobile
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="animate-fade-up mx-auto grid w-full max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase text-sky-600 dark:text-sky-300">About</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal">{t.aboutTitle}</h2>
          </div>
          <div className="space-y-6 text-base leading-8 text-zinc-600 dark:text-zinc-300">
            <p>{t.aboutBody}</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Product-minded development",
                "Responsive, accessible UI",
                "Backend & database integration",
                "Production deployment workflow",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="size-5 shrink-0 text-sky-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="border-y border-zinc-200 bg-zinc-50 py-20 dark:border-white/10 dark:bg-white/[0.03]">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="text-sm font-semibold uppercase text-sky-600 dark:text-sky-300">Stack</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-normal">{t.skillsTitle}</h2>
              </div>
              <Code2 className="hidden size-10 text-sky-500 sm:block" />
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {skillGroups.map((group) => (
                <div key={group.title} className="animate-fade-up rounded-lg border border-zinc-200 bg-white p-5 hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-200/70 dark:border-white/10 dark:bg-zinc-950 dark:hover:shadow-black/20">
                  <h3 className="font-semibold">{group.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-sky-600 dark:text-sky-300">Work</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal">{t.projectsTitle}</h2>
            <p className="mt-4 text-base leading-8 text-zinc-600 dark:text-zinc-300">{t.projectsIntro}</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {projects.map((project) => (
              <article
                key={project.name}
                className="animate-fade-up group overflow-hidden rounded-lg border border-zinc-200 bg-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-950/10 dark:border-white/10 dark:bg-zinc-900"
              >
                <ProjectCover project={project} />
                <div className="p-4">
                  <div className="mb-3 inline-flex rounded-md bg-sky-50 px-2.5 py-1 text-xs font-semibold text-sky-700 dark:bg-sky-400/10 dark:text-sky-200">
                    {project.type}
                  </div>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold">{project.name}</h3>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="grid size-8 shrink-0 place-items-center rounded-md border border-zinc-200 text-zinc-600 transition hover:border-sky-300 hover:text-sky-600 dark:border-white/10 dark:text-zinc-300"
                      aria-label={`${t.visit} ${project.name}`}
                    >
                      <ExternalLink className="size-4" />
                    </a>
                  </div>
                  <p className="mt-2 min-h-16 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    {locale === "vi" ? project.descriptionVi : project.descriptionEn}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-md bg-zinc-100 px-2.5 py-1.5 text-xs font-semibold text-zinc-700 dark:bg-white/10 dark:text-zinc-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="bills" className="border-y border-zinc-200 bg-zinc-50 py-14 dark:border-white/10 dark:bg-white/[0.03]">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <div className="flex items-center gap-2">
                  <span className="grid size-8 place-items-center rounded-md bg-sky-100 text-sky-700 dark:bg-sky-400/10 dark:text-sky-200">
                    <Images className="size-4" />
                  </span>
                  <p className="text-sm font-semibold uppercase text-sky-600 dark:text-sky-300">Payment proof</p>
                </div>
                <h2 className="mt-3 text-2xl font-semibold tracking-normal">{t.billsTitle}</h2>
              </div>
             
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-[repeat(13,minmax(0,1fr))]">
              {bills.map((bill) => (
                <BillCard key={bill.id} bill={bill} viewLabel={t.viewBill} />
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-zinc-200 bg-white py-20 text-zinc-950 dark:border-white/10 dark:bg-zinc-950 dark:text-white">
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase text-sky-600 dark:text-sky-300">Experience</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-normal">{t.experienceTitle}</h2>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-6 dark:border-white/10 dark:bg-white/[0.04]">
              <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-200">{t.experienceBody}</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {["Frontend", "Backend", "Mobile"].map((item) => (
                  <div key={item} className="rounded-md border border-zinc-200 bg-white p-4 dark:border-white/10 dark:bg-transparent">
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{t.role}</p>
                    <p className="mt-1 font-semibold">{item} Developer</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-zinc-200 bg-zinc-50 py-20 dark:border-white/10 dark:bg-white/[0.03]">
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase text-sky-600 dark:text-sky-300">Process</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-normal">{t.processTitle}</h2>
              <p className="mt-4 text-base leading-8 text-zinc-600 dark:text-zinc-300">{t.processIntro}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {t.processSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="animate-fade-up rounded-lg border border-zinc-200 bg-white p-5 hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-200/70 dark:border-white/10 dark:bg-zinc-950 dark:hover:shadow-black/20"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid size-9 place-items-center rounded-md bg-sky-600 text-sm font-semibold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-base font-semibold">{step.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-300">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase text-sky-600 dark:text-sky-300">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal">{t.contactTitle}</h2>
            <p className="mt-4 text-base leading-8 text-zinc-600 dark:text-zinc-300">{t.contactDescription}</p>
            <div className="mt-8 space-y-3">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-sm font-medium text-zinc-700 hover:text-sky-600 dark:text-zinc-200">
                <Mail className="size-5 text-sky-500" />
                {profile.email}
              </a>
              <a href={`tel:${profile.phone}`} className="flex items-center gap-3 text-sm font-medium text-zinc-700 hover:text-sky-600 dark:text-zinc-200">
                <Phone className="size-5 text-sky-500" />
                {profile.phone}
              </a>
              {profile.githubs.map((github) => (
                <a key={github} href={github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm font-medium text-zinc-700 hover:text-sky-600 dark:text-zinc-200">
                  <GitBranch className="size-5 text-sky-500" />
                  {github.replace("https://github.com/", "github.com/")}
                </a>
              ))}
              <a href={profile.facebook} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm font-medium text-zinc-700 hover:text-sky-600 dark:text-zinc-200">
                <UserRound className="size-5 text-sky-500" />
                Facebook
              </a>
            </div>
          </div>

          <form onSubmit={submitContact} className="rounded-lg border border-zinc-200 bg-zinc-50 p-5 dark:border-white/10 dark:bg-white/[0.03]">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold">{t.formName}</span>
                <input
                  name="name"
                  className="mt-2 h-12 w-full rounded-md border border-zinc-200 bg-white px-3 text-sm outline-none transition focus:border-sky-500 dark:border-white/10 dark:bg-zinc-950"
                  required
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold">{t.formEmail}</span>
                <input
                  name="email"
                  type="email"
                  className="mt-2 h-12 w-full rounded-md border border-zinc-200 bg-white px-3 text-sm outline-none transition focus:border-sky-500 dark:border-white/10 dark:bg-zinc-950"
                  required
                />
              </label>
            </div>
            <label className="mt-4 block">
              <span className="text-sm font-semibold">{t.formMessage}</span>
              <textarea
                name="message"
                rows={6}
                className="mt-2 w-full resize-none rounded-md border border-zinc-200 bg-white px-3 py-3 text-sm outline-none transition focus:border-sky-500 dark:border-white/10 dark:bg-zinc-950"
                required
              />
            </label>
            <button
              type="submit"
              className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-sky-600 px-5 text-sm font-semibold text-white transition hover:bg-sky-700 sm:w-auto"
            >
              <Send className="size-4" />
              {t.formButton}
            </button>
          </form>
        </section>

        <footer className="border-t border-zinc-200 px-4 py-8 text-center text-sm text-zinc-500 dark:border-white/10 dark:text-zinc-400">
          © {new Date().getFullYear()} {profile.displayName}. {t.footer}
        </footer>

        <nav className="fixed inset-x-3 bottom-3 z-50 rounded-lg border border-zinc-200 bg-white/92 p-2 shadow-2xl shadow-zinc-950/15 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/90 md:hidden">
          <div className="grid grid-cols-5 gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex min-h-14 flex-col items-center justify-center gap-1 rounded-md text-[11px] font-semibold text-zinc-500 hover:bg-sky-50 hover:text-sky-700 dark:text-zinc-400 dark:hover:bg-sky-400/10 dark:hover:text-sky-200"
                >
                  <Icon className="size-4" />
                  <span className="max-w-full truncate">{item.label}</span>
                </a>
              );
            })}
          </div>
        </nav>
      </div>
    </main>
  );
}

function ProjectCover({ project }: { project: (typeof projects)[number] }) {
  const [missing, setMissing] = useState(false);

  return (
    <div className="relative aspect-[16/9] overflow-hidden bg-zinc-100 dark:bg-white/5">
      {!missing ? (
        <Image
          src={project.image}
          alt={`${project.name} screenshot`}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
          onError={() => setMissing(true)}
        />
      ) : (
        <div className={`flex h-full flex-col justify-between bg-gradient-to-br ${project.accent} p-4 text-white`}>
          <div className="flex items-center justify-between">
            {project.type.includes("Mobile") ? <Smartphone className="size-5" /> : <Globe2 className="size-5" />}
            <ArrowUpRight className="size-5 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase text-white/80">{project.type}</p>
            <h3 className="mt-1 text-2xl font-semibold">{project.name}</h3>
          </div>
        </div>
      )}
    </div>
  );
}

function BillCard({
  bill,
  viewLabel,
}: {
  bill: { id: number; src: string };
  viewLabel: string;
}) {
  const [missing, setMissing] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => !missing && setOpen(true)}
        className="group overflow-hidden rounded-md border border-zinc-200 bg-white text-left transition hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-950/10 dark:border-white/10 dark:bg-zinc-950 dark:hover:border-sky-400/40"
        aria-label={`${viewLabel} ${bill.id}`}
      >
        <div className="relative aspect-[3/4] bg-zinc-100 dark:bg-white/5">
          {!missing ? (
            <Image
              src={bill.src}
              alt={`Bill ${bill.id}`}
              fill
              sizes="120px"
              className="object-cover transition duration-300 group-hover:scale-105"
              onError={() => setMissing(true)}
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center p-3 text-center">
              <div className="grid size-9 place-items-center rounded-md bg-sky-100 text-sm font-semibold text-sky-700 dark:bg-sky-400/10 dark:text-sky-200">
                {bill.id}
              </div>
              <p className="mt-2 text-[11px] font-semibold">bill{bill.id}.jpg</p>
            </div>
          )}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-2">
            <p className="text-xs font-semibold text-white">Bill {bill.id}</p>
          </div>
        </div>
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          <div className="relative max-h-[90vh] w-full max-w-3xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute -right-2 -top-12 grid size-10 place-items-center rounded-md bg-white text-zinc-950 transition hover:bg-sky-100"
              aria-label="Close bill preview"
            >
              <X className="size-5" />
            </button>
            <div className="relative mx-auto aspect-[3/4] max-h-[90vh] overflow-hidden rounded-lg bg-white">
              <Image
                src={bill.src}
                alt={`Bill ${bill.id}`}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
