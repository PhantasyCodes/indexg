import React, { useState } from 'react';
import AvatarEditor from 'react-avatar-editor'; // Example library for image cropping
import './ImageUploadForm.css'
import { motion } from 'framer-motion';

function ImageUploadForm(props) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [editor, setEditor] = useState(null);

  const handleImageSelect = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleImageCrop = () => {
    if (editor !== null) {
      const canvas = editor.getImage();
      canvas.toBlob((blob) => {
        setCroppedImage(blob);
        props.onChildStateChange(blob);
      });
    }
  };

  const [scale, setScale] = useState(1)

  const handleScaleChange = (e) => {
    const scale = parseFloat(e.target.value);
    setScale(scale);
  }

  return (
    <div>
        <motion.label whileHover={{scale:1.1, transition:{duration:0.2}}} htmlFor="file-upload" className="custom-file-upload">
            <i className="fa fa-cloud-upload"></i> Import Profile Picture
        </motion.label>
        {selectedImage && (            
            <input
            type="range"
            min="1"
            max="3"
            step="0.01"
            value={scale}
            onChange={handleScaleChange}
            className='slider'
            />
        )}
      <input id='file-upload' type="file" accept="image/*" onChange={handleImageSelect} />
      {selectedImage && (
        <AvatarEditor
          ref={(editor) => setEditor(editor)}
          image={selectedImage}
          width={250}
          height={250}
          border={50}
          color={[255, 255, 255, 0.6]}
          scale={scale}
        >
        </AvatarEditor>
      )}
      {croppedImage && (
        <div>
          <h1 className='confirmation'>Image Uploaded successfully</h1>
        </div>
      )}
      <motion.button whileHover={{scale:1.1, transition:{duration:0.2}}} className='custom-file-upload' onClick={handleImageCrop}>Upload</motion.button>
    </div>
  );
}

export default ImageUploadForm;