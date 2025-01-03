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

interface Post {
  media: Photo[];
}

interface Photo {
  id: number;
  guid: string;
}

function PhotosList() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [tagId, setTagId] = useState<number | null>(null);
  const [hoveredPhotos, setHoveredPhotos] = useState<number[]>([]);

  const handleMouseEnter = (index: number) => {
    setHoveredPhotos((prevHoveredPhotos) => [...prevHoveredPhotos, index]);
  };

  useEffect(() => {
    const getTagId = async () => {
      try {
        const tags: Tag[] = await fetchTags();
        const photosTag = tags.find((tag) => tag.slug === "post-with-photos");

        if (photosTag) {
          setTagId(photosTag.id);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getTagId();
  }, []);

  useEffect(() => {
    const getPost = async () => {
      try {
        if (tagId) {
          const photosList: Post[] = await fetchPostsByTagId(tagId);
          setPhotos(photosList[0].media);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des posts : ", error);
      }
    };

    getPost();
  }, [tagId]);

  return (
    <div className="photos-list">
      {Array.isArray(photos) && photos.length > 0
        ? photos.map((photo, index) => (
            <div
              key={`${photo.id}-${index}`}
              className="photos-list__photo-container"
            >
              <img
                src={photo.guid}
                alt=""
                className={`photos-list__photo-container__photo ${
                  hoveredPhotos.includes(index) ? "" : "blured-photo"
                }`}
                onMouseEnter={() => handleMouseEnter(index)}
              />
            </div>
          ))
        : ""}
    </div>
  );
}

export default PhotosList;
