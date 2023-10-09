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
	return (
		<div className="w-[250px] h-full flex-col justify-start content-evenly gap-3">
			<div className="w-[260px] h-[260px]">
				<Image
					src={`/images/${imageUrl}.webp`}
					alt={`${name}-image`}
					width={400}
					height={400}
				/>
			</div>
			<div></div>
		</div>
	);
}
