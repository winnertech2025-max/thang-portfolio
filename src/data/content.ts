export type Project = {
  id: string;
  name: string;
  category: string;
  description: string;
  stack: string[];
  url: string;
  image: string;
  /** Portrait screenshots (mobile apps) are laid out differently */
  portrait?: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "lam-media",
    name: "Lam Media",
    category: "Sports platform",
    description:
      "Nền tảng theo dõi lịch, tỷ số và diễn biến giải bóng đá phủi tại một nơi.",
    stack: ["Next.js", "React", "Realtime UI"],
    url: "https://www.lammedia.com.tw/",
    image: "/projects/lam-media.png",
    portrait: true,
  },
  {
    id: "naila",
    name: "NAILA",
    category: "Salon booking",
    description:
      "Hệ thống đặt lịch salon trực tuyến, hỗ trợ luồng khách hàng và vận hành dịch vụ.",
    stack: ["React", "Booking Flow", "Supabase"],
    url: "https://www.naila.com.au/",
    image: "/projects/naila.png",
  },
  {
    id: "deluna-studio",
    name: "Deluna Studio",
    category: "Ecommerce",
    description:
      "Website bán sản phẩm cá nhân hóa với luồng chọn sản phẩm, tùy chỉnh và mua hàng.",
    stack: ["Next.js", "Ecommerce", "Tailwind"],
    url: "https://www.delunastudio.nl/",
    image: "/projects/deluna-studio.png",
  },
  {
    id: "bloxmart",
    name: "Blox Mart",
    category: "Marketplace",
    description:
      "Cửa hàng trực tuyến cho sản phẩm Roblox, tập trung vào trải nghiệm mua nhanh và rõ ràng.",
    stack: ["React", "Commerce UI", "Payments"],
    url: "https://www.bloxmart.net/",
    image: "/projects/bloxmart.png",
  },
  {
    id: "banghemaytrela",
    name: "Bàn Ghế Mây Tre Lá",
    category: "Furniture catalogue",
    description:
      "Website giới thiệu và trưng bày sản phẩm nội thất mây tre đan với trải nghiệm xem danh mục rõ ràng.",
    stack: ["Next.js", "Catalogue", "Responsive UI"],
    url: "https://www.banghemaytrela.com/vi",
    image: "",
  },
  {
    id: "vietnam-tour",
    name: "Vietnam Tour",
    category: "Travel storytelling",
    description:
      "Website kể chuyện du lịch Việt Nam bằng trải nghiệm hình ảnh và nội dung giàu cảm xúc.",
    stack: ["Next.js", "Responsive UI", "Vercel"],
    url: "https://vietnam-tour-sigma.vercel.app/",
    image: "/projects/vietnam-tour.png",
  },
  {
    id: "study-sync",
    name: "Study Sync",
    category: "Education",
    description:
      "Ứng dụng tìm bạn học và đồng bộ phiên Pomodoro cho trải nghiệm học tập tập trung.",
    stack: ["React", "Product UI", "Realtime"],
    url: "https://study-sync-five-omega.vercel.app/",
    image: "/projects/study-sync.png",
  },
  {
    id: "fleurea",
    name: "FLEUREA",
    category: "Flower commerce",
    description:
      "Website hoa với trải nghiệm chọn bó hoa, trình bày sản phẩm và cảm xúc quà tặng.",
    stack: ["Next.js", "Tailwind", "UI Design"],
    url: "https://fleur-a-blooms.vercel.app/",
    image: "/projects/fleurea.png",
    portrait: true,
  },
  {
    id: "hangout",
    name: "HangOut",
    category: "Mobile app",
    description:
      "Ứng dụng gợi ý địa điểm ăn uống, giải trí theo sở thích, ngân sách và tâm trạng.",
    stack: ["Mobile", "React Native", "Recommendation"],
    url: "https://play.google.com/store/apps/details?id=com.winnertech.hangout_app&hl=vi",
    image: "/projects/hangout.png",
  },
  {
    id: "ohbau",
    name: "OhBau",
    category: "Mobile app",
    description:
      "Ứng dụng mua sắm đồ bầu, đồ sơ sinh và nội dung hỗ trợ mẹ bầu trong thai kỳ.",
    stack: ["Mobile", "Ecommerce", "Content"],
    url: "https://play.google.com/store/apps/details?id=com.ohbau_app&hl=vi",
    image: "/projects/ohbau.png",
  },
  {
    id: "sportm",
    name: "SportM",
    category: "Mobile app",
    description:
      "Nền tảng đặt sân, xem lịch trống, tạo nhóm và rủ bạn bè chơi thể thao.",
    stack: ["Mobile", "Booking", "Business"],
    url: "https://play.google.com/store/apps/details?id=com.choai.sportM&hl=vi",
    image: "/projects/sportm.png",
  },
];

export type StackGroup = {
  label: string;
  items: string[];
};

export const STACK: StackGroup[] = [
  {
    label: "Frontend",
    items: ["React", "ReactJS", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    label: "Backend",
    items: ["Node.js", ".NET", "Supabase", "SQL", "MongoDB"],
  },
  {
    label: "Mobile & Data",
    items: ["React Native", "Flutter", "Python", "REST API", "Deployment"],
  },
];

export type ProcessStep = {
  num: string;
  en: string;
  title: string;
  body: string;
};

export const PROCESS: ProcessStep[] = [
  {
    num: "01",
    en: "DISCOVER",
    title: "Trao đổi yêu cầu và báo giá",
    body: "Khách gửi yêu cầu, phạm vi mong muốn và deadline. Mình xem kỹ nhu cầu, tư vấn hướng làm phù hợp rồi gửi báo giá.",
  },
  {
    num: "02",
    en: "ALIGN",
    title: "Chốt hợp tác",
    body: "Khi khách đồng ý triển khai, mình gửi hợp đồng và CCCD để hai bên có thông tin rõ ràng trước khi bắt đầu.",
  },
  {
    num: "03",
    en: "BUILD",
    title: "Demo hoặc MVP",
    body: "Mình làm bản demo/MVP trước. Nếu khách hài lòng với hướng đi này, khách đặt cọc để mình mua hạ tầng và tiếp tục triển khai.",
  },
  {
    num: "04",
    en: "SHIP",
    title: "Hoàn thiện và bàn giao",
    body: "Mình làm nốt phần còn lại, kiểm tra, bàn giao source/tài khoản/tài liệu cần thiết và khách thanh toán phần còn lại.",
  },
];

export type Chapter = {
  id: string;
  num: string;
  en: string;
};

export const CHAPTERS: Chapter[] = [
  { id: "beginning", num: "01", en: "The Beginning" },
  { id: "builder", num: "02", en: "The Builder" },
  { id: "tools", num: "03", en: "The Tools" },
  { id: "work", num: "04", en: "The Work" },
  { id: "process", num: "05", en: "The Process" },
  { id: "next", num: "06", en: "What's Next" },
];

export const CONTACT = {
  name: "Lê Quốc Thắng",
  title: "Full-stack Developer",
  email: "thangdev02@gmail.com",
  phone: "0949450800",
  phoneDisplay: "0949 450 800",
  github: "https://github.com/Thangdev02",
  facebook: "https://www.facebook.com/thang.quoc.94651774/",
};
