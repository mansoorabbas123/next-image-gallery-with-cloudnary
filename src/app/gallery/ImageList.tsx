"use client";
import React from "react";
import { Results } from "./page";
import { CldImage } from "next-cloudinary";
import { Heart } from "@/components/icons/Heart";
import { setFavoriteAction } from "./actions";
import { FullHeart } from "@/components/icons/FullHeart";
import { CloudImage } from "../../components/CloudImage";

type Props = {
  results: Results;
  path: string;
};

const ImageList = ({ results, path }: Props) => {
  const [transition, startTransition] = React.useTransition();
  // const [isFavorite,setIsFavorite]

  return (
    <div className="grid grid-cols-4 gap-2">
      {results.resources.map((image) => (
        <CloudImage
          key={image.public_id}
          image={image}
          onUnheart={() => {
            startTransition(() => {
              setFavoriteAction(image.public_id, true, path);
            });
          }}
          onHeart={() => {
            startTransition(() => {
              setFavoriteAction(image.public_id, false, path);
            });
          }}
        />
      ))}
    </div>
  );
};

export default ImageList;
