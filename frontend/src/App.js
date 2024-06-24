import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [score, setScore] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('file', file);  // 确保字段名为 'file'

        try {
            const response = await axios.post('http://localhost:8000/upload/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setScore(response.data.score);
            setImageUrl(URL.createObjectURL(file));
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">Upload an Image to Get a Score</h1>
            <input type="file" onChange={handleImageUpload} className="mb-4" accept="image/jpeg" />
            {imageUrl && (
                <div className="flex flex-col items-center">
                    <img src={imageUrl} alt="Uploaded" className="max-w-xs mb-4" />
                    <div className="text-2xl">Score: {score}</div>
                </div>
            )}
        </div>
    );
}

export default App;
