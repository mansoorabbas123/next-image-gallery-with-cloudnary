import React from "react";
import cloudinary from "cloudinary";
import UploadBtn from "../gallery/UploadBtn";
import ImageList from "../gallery/ImageList";

export type Results = {
  resources: {
    public_id: string;
    tags: string[];
  }[];
};

const FavoritesPage = async () => {
  // const results = (await cloudinary.v2.search
  //  .expression("resource_type:image AND tags=favorite")
  //  .sort_by("created_at", "desc")
  //  .max_results(30)
  //  .execute()) as Results;
  let results;
  try {
    results = await cloudinary.v2.search
      .expression("resource_type:image AND tags=favorite")
      .sort_by("created_at", "desc")
      .with_field("tags")
      .max_results(30)
      .execute();
  } catch (error) {
    console.log(error);
  }

  return (
    <section>
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Favorites</h1>
        <UploadBtn />
      </div>
      <div className="mt-8">
        <ImageList results={results} path="/favorites" />
      </div>
    </section>
  );
};

export default FavoritesPage;
