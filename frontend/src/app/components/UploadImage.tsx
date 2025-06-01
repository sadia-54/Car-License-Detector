'use client';

import { useRef, useState } from 'react';

export default function UploadImage() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setPreviewURL(URL.createObjectURL(file));
    }
  };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!selectedImage) {
//       alert('Please select an image first!');
//       return;
//     }

//     alert('Image ready to be sent to backend!');
//   };

  return (
    <div className="flex flex-col items-center p-6">
      <form  className="w-full max-w-md space-y-4">
        {/* Hidden input */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
          className="hidden"
        />

        {/* Button to trigger file input */}
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="bg-red-300 hover:bg-red-400 text-black cursor-pointer font-semibold py-2 px-4 rounded-lg transition duration-200"
        >
          Choose Image
        </button>

        {/* Image Preview */}
        {previewURL && (
          <img
            src={previewURL}
            alt="Image Preview"
            className="w-full rounded-lg shadow-lg"
          />
        )}

        {/* Upload Button (only appears when image is selected) */}
        {selectedImage && (
          <button
            type="submit"
            className="bg-red-300 hover:bg-red-400 cursor-pointer text-black font-bold py-2 px-4 rounded-lg transition duration-200"
          >
            Upload Image
          </button>
        )}
      </form>
    </div>
  );
}
