"use client";

// Next element
import Link from "next/link";

// React elements
import { useState, useEffect } from "react";

// API calls
import { fetchTags, fetchPostsByTagId } from "../../../utils/api";

// Style
import "./NavigationMenu.scss";

// Types
interface Tag {
  id: number;
  slug: string;
}

interface Article {
  id: number;
  title: {
    rendered: string;
  };
  video_url: {
    guid: string;
  };
}

function NavigationMenu() {
  const [tagId, setTagId] = useState<number | null>(null);
  const [videoTitles, setVideosTitles] = useState<string[]>([]);
  const [photosProjectsTitles, setPhotosProjectsTitles] = useState<string[]>(
    []
  );
  const [photosProjectstagId, setPhotosProjectstagId] = useState<number | null>(
    null
  );
  const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsSubmenuVisible(true);
  };

  const handleMouseLeave = () => {
    setIsSubmenuVisible(false);
  };

  useEffect(() => {
    const getTagId = async () => {
      try {
        const tags = await fetchTags();
      } catch (error) {
        console.error(error);
      }
    };

    getTagId();
  }, []);

  useEffect(() => {
    const getTagsAndPosts = async () => {
      try {
        const tags = await fetchTags();

        const homepageVideoTag = tags.find(
          (tag: Tag) => tag.slug === "post-with-video"
        );

        const photosProjectsTag = tags.find(
          (tag: Tag) => tag.slug === "post-with-photos"
        );

        if (homepageVideoTag) {
          setTagId(homepageVideoTag.id);
          const videoPosts: Article[] = await fetchPostsByTagId(
            homepageVideoTag.id
          );
          const videoPostsTitles = videoPosts.map(
            (post) => post.title.rendered
          );
          setVideosTitles(videoPostsTitles);
        }

        if (photosProjectsTag) {
          setPhotosProjectstagId(photosProjectsTag.id);
          const photosProjectsList: Article[] = await fetchPostsByTagId(
            photosProjectsTag.id
          );
          const photosPostsTitles = photosProjectsList.map(
            (post) => post.title.rendered
          );
          setPhotosProjectsTitles(photosPostsTitles);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des posts : ", error);
      }
    };

    getTagsAndPosts();
  }, [tagId, photosProjectstagId]);

  return (
    <nav className="navigation-menu">
      <div
        className="navigation-menu__item"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link
          href="/pages/projects-list"
          className="navigation-menu__item__link"
        >
          VIDÉOS
        </Link>

        <ul className="navigation-menu__item__submenu">
          {videoTitles.map((videoTitle, index) => (
            <li key={index} className="navigation-menu__item__submenu__project">
              {videoTitle}
            </li>
          ))}
        </ul>
      </div>

      <div className="navigation-menu__item">
        <Link
          href="/pages/photos"
          className="navigation-menu__item__link"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          PHOTOS
        </Link>
        <ul className="navigation-menu__item__submenu">
          {photosProjectsTitles.map((photosProjectTitle, index) => (
            <li key={index} className="navigation-menu__item__submenu__project">
              {photosProjectTitle}
            </li>
          ))}
        </ul>
      </div>

      <Link href="/pages/about" className="navigation-menu__item__link">
        À PROPOS
      </Link>
      <Link href="/pages/contact" className="navigation-menu__item__link">
        CONTACT
      </Link>
    </nav>
  );
}

export default NavigationMenu;
