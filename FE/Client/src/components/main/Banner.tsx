import React, { useState, useEffect } from "react";
import Banner1 from "../../assets/ImagesExample/3.png";
import Banner2 from "../../assets/ImagesExample/2.png";
import Banner3 from "../../assets/ImagesExample/1.png";

const Banner: React.FC = () => {
	const images = [Banner1, Banner2, Banner3];

	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const nextImage = () => {
		setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	useEffect(() => {
		const intervalId = setInterval(nextImage, 10000);
		return () => clearInterval(intervalId);
	}, []);

	return (
		<div className="w-full max-h-96 rounded-lg overflow-hidden">
			<img
				src={images[currentImageIndex]}
				alt="Banner"
				className="w-full h-auto cover"
			/>
		</div>
	);
};

export default Banner;
