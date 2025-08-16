import { Metadata } from "next";
import BlogsContent from "../../components/ui/blog/blogs-content";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Blog | Team Portfolio",
  description:
    "Read the latest articles, tutorials, and updates on web3, crypto, and decentralized technologies from the team portfolio blog.",
  openGraph: {
    title: "Blog | Team Portfolio",
    description:
      "Stay up to date with insightful articles and expert content on crypto and web3 technology – all from the official team portfolio blog.",
    url: "https://team-portfolio/blog",
    type: "website",
    images: [
      {
        url: "https://team-portfolio/assets/og/team-portfolio.png",
        width: 600,
        height: 315,
        alt: "Team Portfolio Blog",
        type: "image/png",
      },
    ],
    siteName: "Team Portfolio Blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Team Portfolio",
    description:
      "Explore crypto insights and web3 tutorials with the official Team Portfolio blog. Stay informed and ahead of the curve!",
    site: "@TeamPortfolio",
    images: ["https://team-portfolio/assets/og/team-portfolio.png"],
  },

  alternates: {
    canonical: "https://team-portfolio/blog/",
  },
};

const BlogsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{
    paged: string;
    tag_id: string;
    search: string;
    category_id: string;
  }>;
}) => {
  const { paged, tag_id, search, category_id } = await searchParams;
  const page = Number(paged) || 1;
  return (
    <main>
      <Script type="application/ld+json" id="blog-page">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          url: "https://team-portfolio/blog",
          name: "Team Portfolio Blog",
          description: "Articles and tutorials on web3 and crypto",
          publisher: {
            "@type": "Organization",
            name: "Team Portfolio",
            logo: {
              "@type": "ImageObject",
              url: "https://team-portfolio/assets/og/team-portfolio.png",
            },
          },
        })}
      </Script>
      <BlogsContent
        page={page ? page : 1}
        tag_id={tag_id}
        search={search ?? ""}
        category_id={category_id ?? ""}
      />
    </main>
  );
};

export default BlogsPage;
