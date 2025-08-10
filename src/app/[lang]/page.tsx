import HomeClient from './HomeClient';

// Generate static params for supported languages
export function generateStaticParams() {
  return [
    { lang: 'tr' },
    { lang: 'en' }
  ];
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  return <HomeClient params={resolvedParams} />;
} 