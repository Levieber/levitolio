"use client";

import Image, { StaticImageData, type ImageProps } from "next/image";
import { useEffect, useState } from "react";

export const ImageWithFallback = ({
	fallback,
	alt,
	src,
	...props
}: ImageProps & { fallback: string | StaticImageData }) => {
	const [hasError, setHasError] = useState(false);

	useEffect(() => {
		setHasError(false);
	}, []);

	return (
		<Image
			alt={alt}
			onError={() => setHasError(true)}
			src={hasError ? fallback : src}
			{...props}
		/>
	);
};
