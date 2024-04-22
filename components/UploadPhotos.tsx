import React, { useState, ChangeEvent } from 'react';

const PhotoUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);  
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);  

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setFile(file);
      const reader = new FileReader(
      );
      
      reader.onload = () => {
        setPreviewUrl(reader.result as string);  
      };

      reader.readAsDataURL(file);  
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {previewUrl && (
        <div style={{ marginTop: '10px' }}>
          <img src={previewUrl} alt="Preview" style={{ width: '200px', height: 'auto' }} />
        </div>
      )}
    </div>
  );
};

export default PhotoUpload;
