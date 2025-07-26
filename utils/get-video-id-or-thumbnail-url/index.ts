const VIDEO_THUMBNAIL_URL = "https://img.youtube.com/vi/videoId/maxresdefault.jpg";

const getVideoIdOrThumbnailUrl = (link: string, isId:boolean) => {
  const urlObj = new URL(link && link);
  if (urlObj.hostname === "youtu.be") {
    const videoId =  urlObj.pathname.slice(1);
    if (isId) {
      return videoId
    } else {
      const videoThumbnailUrl = VIDEO_THUMBNAIL_URL.replace("videoId", videoId);
      return videoThumbnailUrl
    }
  }

};

export default getVideoIdOrThumbnailUrl;



