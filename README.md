# Portfolio - Lê Quốc Thắng

Portfolio cá nhân được xây bằng Next.js, TypeScript và Tailwind CSS.

## Chạy local

```bash
npm install
npm run dev
```

Mặc định Next.js chạy ở `http://localhost:3000`. Trong phiên hiện tại mình đang chạy ở `http://localhost:3001`.

## Chỉnh nội dung

- Nội dung chính, kỹ năng, dự án và thông tin liên hệ nằm trong `src/app/page.tsx`.
- Metadata SEO nằm trong `src/app/layout.tsx`.
- Style global nằm trong `src/app/globals.css`.

## Ảnh đại diện

Thêm ảnh của bạn vào:

```text
public/avatar.jpg
```

Nếu chưa có ảnh, trang sẽ tự hiển thị fallback chữ `LT`.

## Ảnh bill chuyển khoản

Thêm 13 ảnh bill vào thư mục `public` theo đúng tên:

```text
public/bill1.jpg
public/bill2.jpg
...
public/bill13.jpg
```

Trang sẽ tự hiển thị đủ 13 bill trong mục `Check bill chuyển khoản`.

## Ảnh dự án

Thêm screenshot dự án vào `public/projects` theo các tên sau:

```text
public/projects/lam-media.jpg
public/projects/naila.jpg
public/projects/deluna-studio.jpg
public/projects/bloxmart.jpg
public/projects/vietnam-tour.jpg
public/projects/study-sync.jpg
public/projects/fleurea.jpg
public/projects/hangout.jpg
public/projects/ohbau.jpg
public/projects/sportm.jpg
```

Nếu thiếu ảnh nào, project card đó sẽ tự hiện nền fallback.

## Kiểm tra trước khi deploy

```bash
npm run lint
npm run build
```

## Deploy Vercel

1. Push project lên GitHub.
2. Vào Vercel, chọn `Add New Project`.
3. Import repository này.
4. Framework preset để `Next.js`.
5. Build command giữ mặc định:

```bash
npm run build
```

Sau khi có domain Vercel thật, cập nhật domain trong:

- `src/app/layout.tsx`
- `src/app/sitemap.ts`
- `src/app/robots.ts`
