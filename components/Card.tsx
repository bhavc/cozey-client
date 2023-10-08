import Image from "next/image";

export default function Card({
	name,
	price,
	color,
	imageUrl,
}: {
	name: string;
	price: number;
	color: string;
	imageUrl: string;
}) {
	console.log("name", name);
	console.log("price", price);
	console.log("color", color);
	console.log("imageUrl", imageUrl);
	return (
		<div className="flex">
			<div>
				<Image
					src={`/images/${imageUrl}.webp`}
					alt={`${name}-image`}
					width={200}
					height={200}
				/>
			</div>
		</div>
	);
}
