import Image from "next/image";
import Link from "next/link";

// import { GlowingEffect } from "../glowing-effect";
import { IBlogPage } from "../../../../types/blog";
import CalenderIcon from "../../svg/calender";
import DateFormatRelative from "../../../../utils/date-format-relative";
import getVideoIdOrThumbnailUrl from "../../../../utils/get-video-id-or-thumbnail-url";
import PlayCircle from "../../svg/play-circle";
import BlogModalWrapper from "../blog-modal-wrapper";
// import BlogModalWrapper from "../blog-modal-wrapper";

type Props = {
  blog: IBlogPage;
};

const BlogCard = ({ blog }: Props) => {
  const videoThumbnailUrl =
    (!blog?.first_image && blog?.acf?.videourl) ||
    (blog?.first_image && blog?.acf?.videourl)
      ? getVideoIdOrThumbnailUrl(blog?.acf?.videourl, false)
      : "";

  const youtubeId = blog?.acf?.videourl
    ? getVideoIdOrThumbnailUrl(blog?.acf?.videourl, true)
    : "";

  return (
    <div className="position-relative w-100 h-100 p-3 rounded blog-card overflow-hidden">
      {/* <GlowingEffect
        spread={50}
        borderWidth={2}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      /> */}
      <div className="position-relative">
        {/* <div
          className={
            "absolute bottom-0 left-0 w-1/2 h-1 rounded-t-full bg-[rgb(207,255,17)] shadow-[0_0_60px_25px_rgba(207,255,17,0.5)]"
          }
        ></div> */}

        {blog?.first_image && !blog?.acf?.videourl ? (
          <Link
            href={`/blog/${blog.slug}`}
            className="d-block overflow-hidden rounded position-relative link"
            
          >
            <Image
              fill
              src={blog?.first_image}
              alt={blog?.title}
              className="w-100 h-100 object-fit-cover transition-transform img"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            />
          </Link>
        ) : (
          videoThumbnailUrl && (
            <div
              className="overflow-hidden rounded position-relative link"
              
            >
              <div className="position-absolute top-0 start-0 m-2 z-2">
                <PlayCircle />
              </div>
              <img
                src={videoThumbnailUrl}
                alt={blog.title}
                className="w-100 h-100 object-fit-cover transition-transform img"
              />
              {blog?.acf?.videourl && (
                <BlogModalWrapper youtubeId={youtubeId as string} />
              )}
            </div>
          )
        )}

        <div className="mt-3">
          <div className="d-flex justify-content-between align-items-center small text-white-50">
            <p className="mb-1" title={blog?.categories?.[0]}>
              {blog?.categories?.[0] ? blog?.categories?.[0] : blog?.category}
            </p>
            <p className="mb-1">{DateFormatRelative(blog?.date as string)}</p>
          </div>

          {blog?.first_image && !blog?.acf?.videourl ? (
            <Link
              href={`/blogs/${blog.slug}`}
              className="text-white fw-medium d-block"
              style={{
                fontSize: "16px",
                lineClamp: 2,
                height: "45px",
                overflow: "hidden",
              }}
            >
              {blog?.title}
            </Link>
          ) : (
            <p
              className="text-white fw-medium mb-2"
              style={{
                fontSize: "16px",
                lineClamp: 2,
                height: "45px",
                overflow: "hidden",
              }}
            >
              {blog?.title}
            </p>
          )}

          <div className="d-flex align-items-center text-warning mt-2" style={{ gap: "4px" }}>
            <CalenderIcon />
            <p className="mb-0 mil-a1" style={{ fontSize: "10px", paddingTop: "3px" }}>{blog?.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
