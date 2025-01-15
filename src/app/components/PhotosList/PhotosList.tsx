// React elements
import { useState, useEffect } from "react";

// Style
import "./PhotosList.scss";

// API calls
import { fetchTags, fetchPostsByTagId } from "../../../utils/api";

// Types
interface Tag {
  id: number;
  slug: string;
}

interface Media {
  guid: string;
}

interface Post {
  id: number;
  media: Media[];
  title: {
    rendered: string;
  };
}

interface Photo {
  id: number;
  media: {
    guid: string;
  }[];
}

function PhotosList() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [tagId, setTagId] = useState<number | null>(null);
  const [hoveredPhotos, setHoveredPhotos] = useState<number[]>([]);
  const [currentProject, setCurrentProject] = useState<Photo | null>(null);
  const [index, setIndex] = useState<number>(2);

  useEffect(() => {
    const getPostsWithPhotos = async () => {
      try {
        const tags: Tag[] = await fetchTags();
        const photosTag = tags.find((tag) => tag.slug === "post-with-photos");

        if (photosTag) {
          setTagId(photosTag.id);
        }

        if (tagId) {
          const photosList: Post[] = await fetchPostsByTagId(tagId);

          const photos: Photo[] = photosList.map((photosProject) => ({
            id: photosProject.id,
            media: photosProject.media.map((mediaItem) => ({
              guid: mediaItem.guid,
            })),
            title: photosProject.title.rendered,
          }));
          setPhotos(photos);
          setCurrentProject(photos[0]);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des posts : ", error);
      }
    };

    getPostsWithPhotos();
  }, [tagId]);

  const showPreviousProject = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const showNextProject = () => {
    setIndex((nextIndex) =>
      nextIndex === photos.length - 1 ? 0 : nextIndex + 1
    );
  };

  return (
    <div className="photos-list">
      <div className="photos-list__photo-container">
        <img
          className={`photos-list__photo-container__small-photo left`}
          src={
            photos[(index - 1 + photos.length) % photos.length]?.media[0].guid
          }
          onClick={showPreviousProject}
        />

        <img
          className={`photos-list__photo-container__photo center`}
          src={photos[index]?.media[0].guid}
        />

        <img
          className={`photos-list__photo-container__small-photo right`}
          src={photos[(index + 1) % photos.length]?.media[0].guid}
          onClick={showNextProject}
        />
      </div>
    </div>
  );
}

export default PhotosList;
