"use client";

// React elements
import { useState, useEffect } from "react";

// Style
import "./BackgroundVideo.scss";

// API calls
import { fetchTags, fetchPostsByTagId } from "../../../utils/api";

interface Tag {
  id: number;
  slug: string;
}

interface Post {
  video_url: {
    guid: string;
  };
}

function BackgroundVideo() {
  const [backgroundVideo, setBackgroundVideo] = useState<string>("");
  const [tagId, setTagId] = useState<number | null>(null);

  useEffect(() => {
    const getTagId = async () => {
      try {
        const tags: Tag[] = await fetchTags();
        console.log("tags", tags);
        const homepageVideoTag = tags.find(
          (tag: Tag) => tag.slug === "homepage-video"
        );

        if (homepageVideoTag) {
          setTagId(homepageVideoTag.id);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getTagId();
  }, []);

  useEffect(() => {
    const getBackgroundVideo = async () => {
      try {
        if (tagId) {
          const posts: Post[] = await fetchPostsByTagId(tagId);
          setBackgroundVideo(posts[0].video_url.guid);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getBackgroundVideo();
  }, [tagId]);

  return (
    <div className="video-container">
      {backgroundVideo.length > 0 && (
        <video
          className="video-container__background-video"
          autoPlay
          playsInline
          muted
          loop
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      )}
      <div className="video-container__overlay"></div>
    </div>
  );
}

export default BackgroundVideo;
