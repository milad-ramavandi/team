import Image from "next/image";
import Link from "next/link";
import CalenderIcon from "../../svg/calender";
import DateFormatRelative from "../../../../utils/date-format-relative";
import getVideoIdOrThumbnailUrl from "../../../../utils/get-video-id-or-thumbnail-url";
import PlayCircle from "../../svg/play-circle";
import BlogModalWrapper from "../blog-modal-wrapper";
import { IBlogCard } from "../../../../types/blog";

type BlogProps = {
  blog: IBlogCard;
};

const BlogCard = ({ blog }: BlogProps) => {
  const videoThumbnailUrl =
    (!blog?.first_image && blog?.acf?.videourl) ||
    (blog?.first_image && blog?.acf?.videourl)
      ? getVideoIdOrThumbnailUrl(blog?.acf?.videourl, false)
      : "";

  const youtubeId = blog?.acf?.videourl
    ? getVideoIdOrThumbnailUrl(blog?.acf?.videourl, true)
    : "";

  return (
    <div className="position-relative blog-card overflow-hidden">
      <div className="w-100 h-100 position-relative p-2 pb-0 container">

        {blog?.first_image && !blog?.acf?.videourl ? (
          <Link
            href={`/blog/${blog.slug}`}
            className="d-block overflow-hidden rounded position-relative link"
          >
            <Image
              fill
              src={blog?.first_image}
              alt={blog?.title}
              className="object-fit-cover transition-transform img"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            />
          </Link>
        ) : (
          videoThumbnailUrl && (
            <div className="overflow-hidden rounded position-relative link">
              <div className="position-absolute top-0 start-0 m-2 z-2">
                <PlayCircle />
              </div>
              <Image
                fill
                priority
                src={videoThumbnailUrl}
                alt={blog.title}
                className="object-fit-cover transition-transform img"
                unoptimized
              />
              {blog?.acf?.videourl && (
                <BlogModalWrapper youtubeId={youtubeId as string} />
              )}
            </div>
          )
        )}

        <div className="mt-1">
          <div className="d-flex justify-content-between align-items-center small text-white-50">
            <p className="mb-1" title={blog?.categories?.[0]}>
              {blog?.categories?.[0] ? blog?.categories?.[0] : blog?.category}
            </p>
            <p className="mb-1">{DateFormatRelative(blog?.date as string)}</p>
          </div>

          {blog?.first_image && !blog?.acf?.videourl ? (
            <Link
              href={`/blogs/${blog.slug}`}
              className="text-white fw-medium multi-line-truncate title"
            >
              {blog?.title}
            </Link>
          ) : (
            <p className="text-white fw-medium mb-2 multi-line-truncate title">
              {blog?.title}
            </p>
          )}

          <div className="d-flex align-items-center gap-1 text-warning mt-2">
            <CalenderIcon />
            <p className="mb-0 mil-a1 date">{blog?.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
