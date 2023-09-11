import Image from 'next/image';

function Img(props) {
	const { className, image, withCaption } = props;
	const caption = image?.metadata?.caption || image?.metadata?.fileName;


	return (
		image && (
			<>
				<Image
					className={className}
					src={image['@link']}
					alt={caption}
					width={image?.metadata?.width}
					height={image?.metadata?.height}
				/>
			</>
		)
	);
}

export default Img;
