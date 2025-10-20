import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AGRI VISION for Gen Z | 動画生成AIコンテスト",
  description: "第2回動画生成AIコンテスト『AGRI VISION for Gen Z』- Z世代が描く農業の未来",
  keywords: ["農業", "AI", "動画生成", "コンテスト", "Gen Z", "生成AI"],
  authors: [{ name: "AGRI VISION運営事務局" }],
  openGraph: {
    title: "AGRI VISION for Gen Z | 動画生成AIコンテスト",
    description: "第2回動画生成AIコンテスト『AGRI VISION for Gen Z』- Z世代が描く農業の未来",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "AGRI VISION for Gen Z | 動画生成AIコンテスト",
    description: "第2回動画生成AIコンテスト『AGRI VISION for Gen Z』- Z世代が描く農業の未来",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
