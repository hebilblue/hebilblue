import { Header } from "../component";
import { Providers } from "../providers";

export default async function LangLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  
  return (
    <div data-lang={lang}>
      <Providers>
        <Header />
        <main className="w-full bg-white relative">
          {children}
        </main>
      </Providers>
    </div>
  );
} 