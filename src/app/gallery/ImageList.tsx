"use client";
import React from "react";
import { Results } from "./page";
import { CldImage } from "next-cloudinary";
import { Heart } from "@/components/icons/Heart";
import { setFavoriteAction } from "./actions";
import { FullHeart } from "@/components/icons/FullHeart";

type Props = {
  results: Results;
  path: string;
};

const ImageList = ({ results, path }: Props) => {
  const [transition, startTransition] = React.useTransition();
  console.log("results", results);

  return (
    <div className="grid grid-cols-4 gap-2">
      {results.resources.map((image) => {
        return (
          <div key={image.public_id} className="relative">
            <CldImage
              width="960"
              height="600"
              src={image.public_id}
              sizes="100vw"
              alt="Description of my image"
            />
            {image.tags.includes("favorite") ? (
              <FullHeart
                className="absolute top-2 right-2 hover:cursor-pointer text-red-500 hover:text-white"
                onClick={() => {
                  startTransition(() => {
                    setFavoriteAction(image.public_id, true, path);
                  });
                }}
              />
            ) : (
              <Heart
                className="absolute top-2 right-2 hover:cursor-pointer hover:text-red-500"
                onClick={() => {
                  startTransition(() => {
                    setFavoriteAction(image.public_id, false, path);
                  });
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ImageList;
