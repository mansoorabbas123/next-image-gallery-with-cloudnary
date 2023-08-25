"use client";
import React, { useState } from "react";
import { CldImage } from "next-cloudinary";
import { FullHeart } from "@/components/icons/FullHeart";
import { Heart } from "@/components/icons/Heart";

type Props = {
  image: {
    public_id: string;
    tags: string[];
  };
  onUnheart: () => void;
  onHeart: () => void;
};

export const CloudImage = ({ image, onUnheart, onHeart }: Props) => {
  const [isFavorite, setIsFavorite] = useState(image.tags.includes("favorite"));
  return (
    <div className="relative">
      <CldImage
        width="960"
        height="600"
        src={image.public_id}
        sizes="100vw"
        alt="Description of my image"
      />
      {isFavorite ? (
        <FullHeart
          className="absolute top-2 right-2 hover:cursor-pointer text-red-500 hover:text-white"
          onClick={() => {
            onUnheart();
            setIsFavorite(false);
          }}
        />
      ) : (
        <Heart
          className="absolute top-2 right-2 hover:cursor-pointer hover:text-red-500"
          onClick={() => {
            onHeart();
            setIsFavorite(true);
          }}
        />
      )}
    </div>
  );
};
