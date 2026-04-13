import { performRequest } from "@/lib/datocms";
import Link from "next/link";

const ALL_ARTICLES_QUERY = `
  query {
    allArticles {
      id
      title
      slug
      summary
    }
  }
`;

export default async function Home() {
  const { allArticles } = await performRequest({ query: ALL_ARTICLES_QUERY });

  return (
    <main className="main-bg">
      <div className="container">
        <h1 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '3rem' }}>
          Nýjustu fréttir
        </h1>
        
        <div className="grid">
          {allArticles.map((article: any) => (
            <Link href={`/frett/${article.slug}`} key={article.id} className="article-card">
              <h2>{article.title}</h2>
              <p>{article.summary}</p>
              <div className="gold-line"></div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}