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
  companyTitle: string;
  companyStatus: string;
  companyTaxCode: string;
  companyRepresentative: string;
  companyLink: string;
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

const company = {
  name: "CÔNG TY TNHH PHẦN MỀM WINNERTECH",
  internationalName: "WINNERTECH SOFTWARE COMPANY LIMITED",
  taxCode: "1702340986",
  representative: "LÊ QUỐC THẮNG",
  status: "Đang hoạt động",
  url: "https://masothue.com/1702340986-cong-ty-tnhh-phan-mem-winnertech",
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
      ["11+", "Dự án tiêu biểu"],
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
      "Khu vực lưu và đối chiếu các bill chuyển khoản đã nhận. Một số bill có thể chuyển đến số tài khoản khác vì thời điểm đó mình chưa tự mở công ty.",
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
    companyTitle: "Pháp nhân hiện tại",
    companyStatus: "Đang hoạt động",
    companyTaxCode: "Mã số thuế",
    companyRepresentative: "Người đại diện",
    companyLink: "Xem thông tin công ty",
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
      ["11+", "Featured projects"],
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
      "A simple place to store and review received transfer receipts. Some receipts may show a different bank account because I had not opened my own company at that time.",
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
    companyTitle: "Current legal entity",
    companyStatus: "Active",
    companyTaxCode: "Tax code",
    companyRepresentative: "Representative",
    companyLink: "View company profile",
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
    accent: "bg-[#02667a]",
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
    accent: "bg-[#202c39]",
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
    accent: "bg-[#b65f44]",
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
    accent: "bg-[#324b8c]",
  },
  {
    name: "Bàn Ghế Mây Tre Lá",
    type: "Furniture catalogue",
    url: "https://www.banghemaytrela.com/vi",
    image: null,
    descriptionVi:
      "Website giới thiệu và trưng bày sản phẩm nội thất mây tre đan với trải nghiệm xem danh mục rõ ràng.",
    descriptionEn:
      "A bamboo and rattan furniture website with a clear product catalogue and browsing experience.",
    stack: ["Next.js", "Catalogue", "Responsive UI"],
    accent: "bg-[#55735d]",
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
    accent: "bg-[#16705f]",
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
    accent: "bg-[#47516f]",
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
    accent: "bg-[#9f5468]",
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
    accent: "bg-[#c16c3c]",
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
    accent: "bg-[#9d5876]",
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
    accent: "bg-[#2d7557]",
  },
];

const bills = Array.from({ length: 13 }, (_, index) => ({
  id: index + 1,
  src: `/bill${index + 1}.jpg`,
}));

const featuredProjects = projects.slice(0, 4);

export default function Home() {
  const [locale, setLocale] = useState<Locale>("vi");
  const [dark, setDark] = useState(false);
  const [avatarMissing, setAvatarMissing] = useState(false);
  const t = copy[locale];

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
      <div className="surface-transition min-h-screen overflow-x-hidden bg-[#fbfaf6] text-[#181713] dark:bg-[#11110f] dark:text-[#f7f3e8]">
        <IntroScreen name={profile.displayName} />

        <header className="sticky top-0 z-50 border-b border-[#181713]/10 bg-[#fbfaf6]/90 backdrop-blur-2xl dark:border-white/10 dark:bg-[#11110f]/86">
          <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <a href="#" className="flex min-w-0 items-center gap-3" aria-label="Le Quoc Thang portfolio">
              <span className="grid size-9 shrink-0 place-items-center rounded-[6px] bg-[#181713] text-sm font-bold text-[#fbfaf6] dark:bg-[#f7f3e8] dark:text-[#11110f]">
                LT
              </span>
              <span className="hidden truncate text-sm font-semibold sm:block">
                {profile.displayName}
              </span>
            </a>

            <nav className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-[6px] px-3 py-2 text-sm font-medium text-[#5f5a4f] transition hover:bg-[#181713]/6 hover:text-[#181713] dark:text-[#c8c0af] dark:hover:bg-white/10 dark:hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setLocale(locale === "vi" ? "en" : "vi")}
                className="inline-flex h-10 items-center gap-2 rounded-[6px] border border-[#181713]/12 bg-white/45 px-3 text-sm font-semibold transition hover:bg-white dark:border-white/15 dark:bg-white/5 dark:hover:bg-white/10"
                aria-label="Switch language"
              >
                <Globe2 className="size-4" />
                {locale.toUpperCase()}
              </button>
              <button
                type="button"
                onClick={() => setDark(!dark)}
                className="grid size-10 place-items-center rounded-[6px] border border-[#181713]/12 bg-white/45 transition hover:bg-white dark:border-white/15 dark:bg-white/5 dark:hover:bg-white/10"
                aria-label="Toggle theme"
              >
                {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
              </button>
            </div>
          </div>
        </header>

        <section className="relative overflow-hidden border-b border-[#181713]/10 dark:border-white/10">
          <div className="mx-auto grid min-h-[calc(100svh-4rem)] w-full max-w-7xl gap-10 px-4 py-8 sm:px-6 lg:grid-cols-[0.96fr_1.04fr] lg:px-8">
            <div className="flex min-w-0 flex-col justify-center py-8">
              <div className="mb-7 flex flex-wrap items-center gap-3">
                <span className="rounded-[6px] border border-[#00806f]/25 bg-[#00806f]/10 px-3 py-2 text-sm font-bold text-[#006c5e] dark:border-[#5ed5c2]/30 dark:bg-[#5ed5c2]/10 dark:text-[#86eadb]">
                  {t.badge}
                </span>
                <span className="text-sm font-medium text-[#777064] dark:text-[#bbb2a1]">
                  WinnerTech Software
                </span>
              </div>

              <h1 className="max-w-[12ch] break-words text-3xl font-semibold leading-[1.08] tracking-normal sm:max-w-4xl sm:text-6xl sm:leading-[1.03] lg:text-7xl">
                {t.heroTitle}
              </h1>

              <p className="mt-7 max-w-[36ch] text-base leading-8 text-[#5f5a4f] sm:max-w-2xl sm:text-lg dark:text-[#d3cab8]">
                {t.heroDescription}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#projects"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-[6px] bg-[#181713] px-5 text-sm font-semibold text-[#fbfaf6] transition hover:bg-[#00806f] dark:bg-[#f7f3e8] dark:text-[#11110f] dark:hover:bg-[#86eadb]"
                >
                  <BriefcaseBusiness className="size-4" />
                  {t.ctaWork}
                </a>
                <a
                  href="#contact"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-[6px] border border-[#181713]/18 bg-white/45 px-5 text-sm font-semibold transition hover:bg-white dark:border-white/18 dark:bg-white/5 dark:hover:bg-white/10"
                >
                  <Mail className="size-4" />
                  {t.ctaContact}
                </a>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {t.stats.map(([value, label]) => (
                  <div key={label} className="border-t border-[#181713]/12 pt-4 dark:border-white/12">
                    <p className="text-3xl font-semibold tracking-normal">{value}</p>
                    <p className="mt-1 text-sm leading-5 text-[#777064] dark:text-[#b8af9f]">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid min-w-0 content-end gap-4 pb-7 lg:grid-cols-[0.78fr_1fr] lg:pt-10">
              <div className="order-2 grid gap-4 lg:order-1">
                <div className="rounded-[8px] border border-[#181713]/10 bg-white/62 p-4 shadow-[0_24px_70px_rgba(24,23,19,0.08)] dark:border-white/10 dark:bg-white/[0.055]">
                  <p className="text-xs font-bold uppercase text-[#8b6d3a] dark:text-[#d7b776]">
                    Current focus
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[#514d44] dark:text-[#d8d0c0]">
                    Product UI, realtime workflows, Supabase backends, mobile delivery.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {featuredProjects.map((project) => (
                    <a
                      key={project.name}
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group rounded-[8px] border border-[#181713]/10 bg-white/62 p-3 transition hover:-translate-y-1 hover:border-[#00806f]/40 dark:border-white/10 dark:bg-white/[0.055]"
                    >
                      <div className="relative aspect-[5/3] overflow-hidden rounded-[5px] bg-[#e9e4da] dark:bg-white/8">
                        {project.image ? (
                          <Image
                            src={project.image}
                            alt={`${project.name} screenshot`}
                            fill
                            sizes="(min-width: 1024px) 150px, 45vw"
                            className="object-cover transition duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <ProjectFallback project={project} compact />
                        )}
                      </div>
                      <p className="mt-2 truncate text-xs font-bold">{project.name}</p>
                    </a>
                  ))}
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="relative overflow-hidden rounded-[8px] border border-[#181713]/12 bg-[#e9e4da] shadow-[0_32px_90px_rgba(24,23,19,0.16)] dark:border-white/10 dark:bg-[#1b1a17]">
                  <div className="relative aspect-[4/5]">
                    {!avatarMissing ? (
                      <Image
                        src="/avatar.jpg"
                        alt={profile.displayName}
                        fill
                        sizes="(min-width: 1024px) 42vw, 100vw"
                        className="object-cover"
                        onError={() => setAvatarMissing(true)}
                        priority
                      />
                    ) : (
                      <div className="grid h-full place-items-center bg-[#202c39] p-8 text-white">
                        <div className="text-center">
                          <div className="mx-auto grid size-28 place-items-center rounded-[8px] bg-white text-4xl font-bold text-[#181713] shadow-xl">
                            LT
                          </div>
                          <p className="mt-6 text-xl font-semibold">{profile.displayName}</p>
                          <p className="mt-2 text-sm font-medium text-white/70">{profile.title}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.72),transparent)] p-5 text-white">
                    <p className="text-xl font-semibold">{profile.displayName}</p>
                    <p className="mt-1 text-sm text-white/78">React / Next.js / Node.js / Supabase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-18 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
          <SectionKicker label="About" />
          <div>
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-normal sm:text-5xl">
              {t.aboutTitle}
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[#5f5a4f] dark:text-[#d3cab8]">
              {t.aboutBody}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Product-minded development",
                "Responsive, accessible UI",
                "Backend & database integration",
                "Production deployment workflow",
              ].map((item) => (
                <div key={item} className="flex min-h-14 items-center gap-3 border-t border-[#181713]/10 py-3 dark:border-white/10">
                  <CheckCircle2 className="size-5 shrink-0 text-[#00806f] dark:text-[#72e0cf]" />
                  <span className="text-sm font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="border-y border-[#181713]/10 bg-[#efeae0] py-18 dark:border-white/10 dark:bg-[#171613]">
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
            <SectionKicker label="Stack" />
            <div>
              <div className="flex items-end justify-between gap-6">
                <h2 className="text-3xl font-semibold tracking-normal sm:text-5xl">{t.skillsTitle}</h2>
                <Code2 className="hidden size-10 text-[#00806f] sm:block dark:text-[#72e0cf]" />
              </div>
              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {skillGroups.map((group) => (
                  <div key={group.title} className="rounded-[8px] border border-[#181713]/10 bg-[#fbfaf6] p-5 dark:border-white/10 dark:bg-white/[0.045]">
                    <h3 className="font-semibold">{group.title}</h3>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-[6px] border border-[#181713]/10 bg-white/65 px-3 py-2 text-sm font-medium text-[#514d44] dark:border-white/10 dark:bg-white/[0.06] dark:text-[#d8d0c0]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto w-full max-w-7xl px-4 py-18 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <SectionKicker label="Work" />
            <div>
              <h2 className="text-3xl font-semibold tracking-normal sm:text-5xl">{t.projectsTitle}</h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-[#5f5a4f] dark:text-[#d3cab8]">
                {t.projectsIntro}
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.name}
                className={`group rounded-[8px] border border-[#181713]/10 bg-white/70 p-3 shadow-[0_20px_60px_rgba(24,23,19,0.06)] transition hover:-translate-y-1 hover:border-[#00806f]/35 dark:border-white/10 dark:bg-white/[0.045] ${
                  index === 0 ? "md:col-span-2 xl:col-span-2" : ""
                }`}
              >
                <ProjectCover project={project} featured={index === 0} />
                <div className="px-1 pb-1 pt-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase text-[#8b6d3a] dark:text-[#d7b776]">
                        {project.type}
                      </p>
                      <h3 className="mt-1 text-xl font-semibold tracking-normal">{project.name}</h3>
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="grid size-9 shrink-0 place-items-center rounded-[6px] border border-[#181713]/12 text-[#5f5a4f] transition hover:border-[#00806f]/40 hover:text-[#00806f] dark:border-white/12 dark:text-[#d8d0c0]"
                      aria-label={`${t.visit} ${project.name}`}
                    >
                      <ExternalLink className="size-4" />
                    </a>
                  </div>
                  <p className="mt-3 min-h-16 text-sm leading-6 text-[#5f5a4f] dark:text-[#d3cab8]">
                    {locale === "vi" ? project.descriptionVi : project.descriptionEn}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-[6px] bg-[#efeae0] px-2.5 py-1.5 text-xs font-semibold text-[#514d44] dark:bg-white/10 dark:text-[#d8d0c0]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="bills" className="border-y border-[#181713]/10 bg-[#202c39] py-16 text-white dark:border-white/10">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-[6px] bg-white/10 text-[#72e0cf]">
                  <Images className="size-5" />
                </span>
                <SectionKicker label="Payment proof" inverted />
              </div>
              <div>
                <h2 className="text-3xl font-semibold tracking-normal sm:text-5xl">{t.billsTitle}</h2>
                <p className="mt-5 max-w-3xl text-sm leading-7 text-white/72">{t.billsIntro}</p>
              </div>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-[repeat(13,minmax(0,1fr))]">
              {bills.map((bill) => (
                <BillCard key={bill.id} bill={bill} viewLabel={t.viewBill} />
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-18 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
          <SectionKicker label="Experience" />
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-3xl font-semibold tracking-normal sm:text-5xl">{t.experienceTitle}</h2>
              <p className="mt-5 text-lg leading-8 text-[#5f5a4f] dark:text-[#d3cab8]">{t.experienceBody}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {["Frontend", "Backend", "Mobile"].map((item) => (
                <div key={item} className="rounded-[8px] border border-[#181713]/10 bg-white/62 p-4 dark:border-white/10 dark:bg-white/[0.045]">
                  <p className="text-xs font-bold uppercase text-[#8b6d3a] dark:text-[#d7b776]">{t.role}</p>
                  <p className="mt-1 font-semibold">{item} Developer</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[#181713]/10 bg-[#efeae0] py-18 dark:border-white/10 dark:bg-[#171613]">
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
            <SectionKicker label="Process" />
            <div>
              <h2 className="text-3xl font-semibold tracking-normal sm:text-5xl">{t.processTitle}</h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-[#5f5a4f] dark:text-[#d3cab8]">
                {t.processIntro}
              </p>
              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                {t.processSteps.map((step, index) => (
                  <article
                    key={step.title}
                    className="rounded-[8px] border border-[#181713]/10 bg-[#fbfaf6] p-5 dark:border-white/10 dark:bg-white/[0.045]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid size-10 shrink-0 place-items-center rounded-[6px] bg-[#c66b4f] text-sm font-bold text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-base font-semibold">{step.title}</h3>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-[#5f5a4f] dark:text-[#d3cab8]">{step.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-18 pb-28 sm:px-6 md:pb-18 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionKicker label="Contact" />
            <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-normal sm:text-5xl">{t.contactTitle}</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#5f5a4f] dark:text-[#d3cab8]">
              {t.contactDescription}
            </p>

            <div className="mt-8 grid gap-3">
              <ContactLink href={`mailto:${profile.email}`} icon={Mail} label={profile.email} />
              <ContactLink href={`tel:${profile.phone}`} icon={Phone} label={profile.phone} />
              {profile.githubs.map((github) => (
                <ContactLink
                  key={github}
                  href={github}
                  icon={GitBranch}
                  label={github.replace("https://github.com/", "github.com/")}
                  external
                />
              ))}
              <ContactLink href={profile.facebook} icon={UserRound} label="Facebook" external />
            </div>

            <div className="mt-8 rounded-[8px] border border-[#181713]/10 bg-white/62 p-5 dark:border-white/10 dark:bg-white/[0.045]">
              <div className="flex items-start gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-[6px] bg-[#00806f]/10 text-[#00806f] dark:bg-[#72e0cf]/10 dark:text-[#72e0cf]">
                  <BriefcaseBusiness className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-[#00806f] dark:text-[#72e0cf]">{t.companyTitle}</p>
                  <h3 className="mt-2 text-base font-semibold">{company.name}</h3>
                  <p className="mt-1 text-sm text-[#777064] dark:text-[#b8af9f]">{company.internationalName}</p>
                </div>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <CompanyFact label={t.companyTaxCode} value={company.taxCode} />
                <CompanyFact label={t.companyRepresentative} value={company.representative} />
                <CompanyFact label="Status" value={locale === "vi" ? company.status : t.companyStatus} />
              </div>
              <a
                href={company.url}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#00806f] hover:text-[#c66b4f] dark:text-[#72e0cf]"
              >
                {t.companyLink}
                <ExternalLink className="size-4" />
              </a>
            </div>
          </div>

          <form onSubmit={submitContact} className="rounded-[8px] border border-[#181713]/10 bg-[#181713] p-5 text-white shadow-[0_32px_90px_rgba(24,23,19,0.18)] dark:border-white/10 dark:bg-[#202c39]">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label={t.formName} name="name" />
              <Field label={t.formEmail} name="email" type="email" />
            </div>
            <label className="mt-4 block">
              <span className="text-sm font-semibold">{t.formMessage}</span>
              <textarea
                name="message"
                rows={7}
                className="mt-2 w-full resize-none rounded-[6px] border border-white/12 bg-white/8 px-3 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#72e0cf]"
                required
              />
            </label>
            <button
              type="submit"
              className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-[6px] bg-[#72e0cf] px-5 text-sm font-bold text-[#11110f] transition hover:bg-white sm:w-auto"
            >
              <Send className="size-4" />
              {t.formButton}
            </button>
          </form>
        </section>

        <footer className="border-t border-[#181713]/10 px-4 py-8 text-center text-sm text-[#777064] dark:border-white/10 dark:text-[#b8af9f]">
          © {new Date().getFullYear()} {profile.displayName}. {t.footer}
        </footer>

        <nav className="fixed inset-x-3 bottom-3 z-50 rounded-[8px] border border-[#181713]/10 bg-[#fbfaf6]/94 p-2 shadow-2xl shadow-black/15 backdrop-blur-xl dark:border-white/10 dark:bg-[#11110f]/92 md:hidden">
          <div className="grid grid-cols-5 gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex min-h-14 flex-col items-center justify-center gap-1 rounded-[6px] text-[11px] font-semibold text-[#777064] hover:bg-[#00806f]/10 hover:text-[#00806f] dark:text-[#b8af9f] dark:hover:bg-[#72e0cf]/10 dark:hover:text-[#72e0cf]"
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

function SectionKicker({ label, inverted = false }: { label: string; inverted?: boolean }) {
  return (
    <p className={`text-sm font-bold uppercase ${inverted ? "text-[#72e0cf]" : "text-[#00806f] dark:text-[#72e0cf]"}`}>
      {label}
    </p>
  );
}

function ProjectCover({
  project,
  featured,
}: {
  project: (typeof projects)[number];
  featured?: boolean;
}) {
  const [missing, setMissing] = useState(false);

  return (
    <div className={`relative overflow-hidden rounded-[6px] bg-[#e9e4da] dark:bg-white/8 ${featured ? "aspect-[16/8.4]" : "aspect-[16/10]"}`}>
      {project.image && !missing ? (
        <Image
          src={project.image}
          alt={`${project.name} screenshot`}
          fill
          sizes={featured ? "(min-width: 1280px) 58vw, 100vw" : "(min-width: 1280px) 32vw, (min-width: 768px) 50vw, 100vw"}
          className="object-cover transition duration-500 group-hover:scale-105"
          onError={() => setMissing(true)}
        />
      ) : (
        <ProjectFallback project={project} />
      )}
    </div>
  );
}

function ProjectFallback({
  project,
  compact = false,
}: {
  project: (typeof projects)[number];
  compact?: boolean;
}) {
  return (
    <div className={`flex h-full flex-col justify-between ${project.accent} p-5 text-white`}>
      <div className="flex items-center justify-between">
        {project.type.includes("Mobile") ? <Smartphone className={compact ? "size-4" : "size-5"} /> : <Globe2 className={compact ? "size-4" : "size-5"} />}
        <ArrowUpRight className={`${compact ? "size-4" : "size-5"} transition group-hover:translate-x-1 group-hover:-translate-y-1`} />
      </div>
      <div>
        <p className="text-xs font-bold uppercase text-white/78">{project.type}</p>
        <h3 className={compact ? "mt-1 text-sm font-semibold" : "mt-1 text-2xl font-semibold"}>{project.name}</h3>
      </div>
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
        className="group overflow-hidden rounded-[6px] border border-white/10 bg-white/8 text-left transition hover:-translate-y-0.5 hover:border-[#72e0cf]/55 hover:bg-white/12"
        aria-label={`${viewLabel} ${bill.id}`}
      >
        <div className="relative aspect-[3/4] bg-white/8">
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
              <div className="grid size-9 place-items-center rounded-[6px] bg-[#72e0cf] text-sm font-bold text-[#11110f]">
                {bill.id}
              </div>
              <p className="mt-2 text-[11px] font-semibold text-white/80">bill{bill.id}.jpg</p>
            </div>
          )}
          <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.76),transparent)] p-2">
            <p className="text-xs font-semibold text-white">Bill {bill.id}</p>
          </div>
        </div>
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/82 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          <div className="relative max-h-[90vh] w-full max-w-3xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute -right-2 -top-12 grid size-10 place-items-center rounded-[6px] bg-white text-[#11110f] transition hover:bg-[#72e0cf]"
              aria-label="Close bill preview"
            >
              <X className="size-5" />
            </button>
            <div className="relative mx-auto aspect-[3/4] max-h-[90vh] overflow-hidden rounded-[8px] bg-white">
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

function ContactLink({
  href,
  icon: Icon,
  label,
  external = false,
}: {
  href: string;
  icon: typeof Mail;
  label: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="flex min-h-12 items-center gap-3 rounded-[6px] border border-[#181713]/10 bg-white/45 px-3 text-sm font-medium text-[#514d44] transition hover:border-[#00806f]/35 hover:text-[#00806f] dark:border-white/10 dark:bg-white/[0.045] dark:text-[#d8d0c0] dark:hover:text-[#72e0cf]"
    >
      <Icon className="size-5 shrink-0 text-[#00806f] dark:text-[#72e0cf]" />
      <span className="min-w-0 truncate">{label}</span>
    </a>
  );
}

function CompanyFact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase text-[#8b6d3a] dark:text-[#d7b776]">{label}</p>
      <p className="mt-1 text-sm font-semibold">{value}</p>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold">{label}</span>
      <input
        name={name}
        type={type}
        className="mt-2 h-12 w-full rounded-[6px] border border-white/12 bg-white/8 px-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#72e0cf]"
        required
      />
    </label>
  );
}
