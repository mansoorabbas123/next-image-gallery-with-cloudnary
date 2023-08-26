import React from "react";
import UploadBtn from "./UploadBtn";
import cloudinary from "cloudinary";
import ImageList from "./ImageList";

export type Results = {
  resources: {
    public_id: string;
    tags: string[];
  }[];
};

const GalleryPage = async () => {
  // const results = (await cloudinary.v2.search
  //  .expression("resource_type:image")
  //  .sort_by("created_at", "desc")
  //  .max_results(30)
  //  .execute()) as Results;
  let results;
  try {
    results = await cloudinary.v2.search
      .expression("resource_type:image")
      .sort_by("created_at", "desc")
      .with_field("tags")
      .max_results(30)
      .execute();
  } catch (error) {
    console.log("error===================", error);
  }

  return (
    <section>
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Gallery</h1>
        <UploadBtn />
      </div>
      <div className="mt-8">
        <ImageList results={results} path="/gallery" />
      </div>
    </section>
  );
};

export default GalleryPage;
