"use client";
import React from "react";
import { Results } from "./page";
import { CldImage } from "next-cloudinary";

type Props = {
  results: Results;
};

const ImageList = ({ results }: Props) => {
  console.log(results);
  return (
    <div className="grid grid-cols-4 gap-2">
      {results.resources.map((image) => {
        return (
          <CldImage
            key={image.public_id}
            width="960"
            height="600"
            src={image.public_id}
            sizes="100vw"
            alt="Description of my image"
          />
        );
      })}
    </div>
  );
};

export default ImageList;
