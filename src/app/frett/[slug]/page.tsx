import { performRequest } from "@/lib/datocms";
import Link from "next/link";
import { notFound } from "next/navigation";

const ARTICLE_QUERY = `
  query Article($slug: String) {
    article(filter: {slug: {eq: $slug}}) {
      title
      content
    }
  }
`;

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = await performRequest({ 
    query: ARTICLE_QUERY, 
    variables: { slug } 
  });

  if (!data.article) notFound();

  return (
    <main className="main-bg">
      <div className="container" style={{ paddingTop: '5rem' }}>
        <Link href="/" style={{ color: '#2dd7e0', fontWeight: 'bold', textDecoration: 'none' }}>
          &larr; Til baka
        </Link>
        <h1 style={{ fontSize: '4rem', marginTop: '2rem' }}>{data.article.title}</h1>
        <div style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#ccc', marginTop: '2rem', whiteSpace: 'pre-line' }}>
          {data.article.content}
        </div>
      </div>
    </main>
  );
}