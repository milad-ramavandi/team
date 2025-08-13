import { notFound } from "next/navigation";
import BlogItemContent from "../../../components/ui/blog/blog-item-content";
import parseHtmlContent from "../../../utils/parse-html-content";
import { Metadata } from "next";
import Script from "next/script";

interface IBlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: IBlogPageProps): Promise<Metadata> {
  const { slug } = await params;

  const blogResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}api/blog/${slug}`
  );
  const blogData = await blogResponse.json();

  if (!blogData) {
    notFound();
  }
  const parsedImages = parseHtmlContent(blogData?.[0]?.content?.rendered);
  const parsedTexts = parseHtmlContent(blogData?.[0]?.excerpt?.rendered).text;

  return {
    title: blogData?.[0]?.title?.rendered + "Blog Post | Team Portfolio",
    description:
      parsedTexts +
      `Read ${blogData?.[0]?.title?.rendered} on the Lands Domains blog. Stay updated with the latest trends and strategies.`,
    keywords:
      blogData?.[0]?.tags?.join(", ") +
      "blog, team portfolio, articles, insights",
    icons: [
      { rel: "icon", url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
      { rel: "shortcut icon", url: "/favicon.ico" },
    ],
    openGraph: {
      title: blogData?.[0]?.title?.rendered,
      description:
        parsedTexts +
        "Discover detailed posts and updates from the Team Portfolio team on various topics.",
      url: `https://team-portfolio/blog/${slug}`,
      siteName: "Team Portfolio",
      images:
        parsedImages.images.length > 0
          ? [
              {
                url: parsedImages.images[0],
                alt:
                  blogData?.[0]?.title.rendered + "Team Portfolio Blog Image",
              },
            ]
          : [
              {
                url: "https://team-portfolio/assets/og/team-portfolio.png",
                alt: "Team Portfolio Blog",
              },
            ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: blogData?.[0]?.title?.rendered,
      description:
        parsedTexts +
        "Explore detailed articles and updates from the Team Portfolio team.",
      images:
        parsedImages.images.length > 0
          ? parsedImages.images[0]
          : ["https://team-portfolio/assets/og/team-portfolio.png"],
      site: "@TeamPortfoliosearch",
    },
    alternates: {
      canonical: `https://team-portfolio/blog/${slug}`,
    },
  };
}

const BlogItemPage = async ({ params }: IBlogPageProps) => {
  const { slug } = await params;
  const blogResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}api/blog/${slug}`
  );
  const blogData = await blogResponse.json();

  if (!blogData) {
    notFound();
  }

  const blogCategoriesResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}api/blog/categories`
  );
  const blogCategoriesData = await blogCategoriesResponse.json();

  const popularBlogsResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}api/blog?category_id=5&paged=1`
  );
  const popularBlogsData = await popularBlogsResponse.json();
  return (
    <main>
      <Script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: blogData?.[0]?.title?.rendered,
          image: parseHtmlContent(blogData?.[0]?.content?.rendered).images[0],
          editor: "Team Portfolio",
          publisher: {
            "@type": "Organization",
            name: "Team Portfolio",
            logo: {
              "@type": "ImageObject",
              url: "https://team-portfolio/assets/og/team-portfolio.png",
            },
          },
          url: `https://team-portfolio/blog/${slug}`,
          datePublished: blogData?.[0]?.date,
          dateModified: blogData?.[0]?.modified,
          description:
            parseHtmlContent(blogData?.[0]?.excerpt?.rendered).text +
            `Read ${blogData?.[0]?.title?.rendered} on the Team Portfolio blog. Stay updated with the latest trends and strategies.`,
          author: {
            "@type": "Organization",
            name: blogData?.[0]?.uagb_author_info?.display_name,
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://team-portfolio/blog/${slug}`,
          },
        })}
      </Script>
      <BlogItemContent
        date={blogData?.[0]?.date}
        htmlContent={blogData?.[0]?.content?.rendered}
        title={blogData?.[0]?.title?.rendered}
        categoriesList={blogCategoriesData}
        tags={blogData?.[0]?.tags}
        popularBlogs={popularBlogsData}
      />
    </main>
  );
};

export default BlogItemPage;
