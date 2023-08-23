import React from "react";
import UploadBtn from "./UploadBtn";
import cloudinary from "cloudinary";
import ImageList from "./ImageList";

export type Results = {
  resources: {
    public_id: string;
  }[];
};

const GalleryPage = async () => {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .max_results(30)
    .execute()) as Results;

  return (
    <section>
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Gallery</h1>
        <UploadBtn />
      </div>
      <div className="mt-8">
        <ImageList results={results} />
      </div>
    </section>
  );
};

export default GalleryPage;
