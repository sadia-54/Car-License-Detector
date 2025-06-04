'use client';

import { useRef, useState } from 'react';

export default function UploadImage() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [selectedPreviewURL, setSelectedPreviewURL] = useState<string | null>(null);
  const [predictedImageURL, setPredictedImageURL] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setSelectedPreviewURL(URL.createObjectURL(file));
      setPredictedImageURL(null); 
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedImage) {
      alert('Please select an image first!');
      return;
    }
  
    const formData = new FormData();
    formData.append('image', selectedImage);
  
    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error('Failed to get prediction');
      }
  
      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setPredictedImageURL(imageUrl); 
  
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error during prediction');
    }
  };
  

  return (
    <div className="flex flex-col items-center p-6">
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        {/* Hidden input */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
          className="hidden"
        />

        {/* Button to trigger file input */}
        <h2
          onClick={() => fileInputRef.current?.click()}
          className=" text-red-300 cursor-pointer font-semibold py-2 px-4 rounded-lg transition duration-200"
        >
          Choose Image
        </h2>

          {/* Selected Image Preview */}
          {selectedPreviewURL && (
          <img
            src={selectedPreviewURL}
            alt="Selected Image Preview"
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

  {/* Predicted Image Preview below the form */}
  {predictedImageURL && (
        <div className="mt-6 w-full max-w-md">
          <h3 className="text-red-300 font-semibold mb-2">Predicted Image:</h3>
          <img
            src={predictedImageURL}
            alt="Predicted Result"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      )}

    </div>
  );
}
