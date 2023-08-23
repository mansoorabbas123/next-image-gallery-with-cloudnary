"use client";
import { CldUploadButton } from "next-cloudinary";

export default function Home() {
  return (
    <div>
      <CldUploadButton uploadPreset="jcv7lmzz" />
    </div>
  );
}
