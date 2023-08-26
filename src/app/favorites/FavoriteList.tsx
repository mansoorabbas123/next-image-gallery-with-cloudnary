"use client";
import React, { useState } from "react";
import { Results } from "./page";
import { CldImage } from "next-cloudinary";
import { Heart } from "@/components/icons/Heart";
import { FullHeart } from "@/components/icons/FullHeart";
import { setFavoriteAction } from "../gallery/actions";
import { CloudImage } from "@/components/CloudImage";

type Props = {
  results: Results;
  path: string;
};

export type image = {
  public_id: string;
  tags: string[];
};

const FavoriteList = ({ results, path }: Props) => {
  const [transition, startTransition] = React.useTransition();

  // optimistic update
  const [images, setImages] = useState<image[]>(results.resources);
  const handleDelete = (public_id: string) => {
    setImages((prvImages) => {
      return prvImages.filter((img) => img.public_id !== public_id);
    });
  };

  return (
    <div className="grid grid-cols-4 gap-2">
      {images.map((image) => (
        <CloudImage
          key={image.public_id}
          image={image}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default FavoriteList;
