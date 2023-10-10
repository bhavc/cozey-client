import Image from "next/image";
// NOTE: this is not he material icon so wont look exactly like UI
import ArrowRight from "public/images/icons/arrowRight.svg";

export default function Card({
	name,
	price,
	colorName,
	colorCode,
	imageUrl,
}: {
	name: string;
	price: string;
	colorName: string;
	colorCode: string;
	imageUrl: string;
}) {
	return (
		<div className="w-[250px] h-full flex flex-col justify-start content-evenly gap-3">
			<div className="relative w-[400px] h-[300px]">
				<span className="box-border block overflow-hidden rounded-3xl border-2 border-solid border-[#ECEBE7] w-[400px] h-[300px]">
					<Image
						className=""
						src={`/images/${imageUrl}.webp`}
						alt={`${name}-image`}
						width={400}
						height={300}
					/>
				</span>
				<div className="">
					<div className="absolute bottom-3 right-3 z-50 flex flex-row justify-end items-center p-[6px] pl-[10px] gap-[6px] h-8 bg-white border-[0.5px] border-solid border-[#BEC8DB] rounded-full">
						<div className="font-campton font-bold text-xs">{colorName}</div>
						<div className={`rounded-full w-5 h-5 ${colorCode}`} />
					</div>
				</div>
			</div>
			<div className="flex flex-col items-start gap-1 w-[400px]">
				<div className="text-[#0B2341] font-campton font-semibold">{name}</div>
				<div className="flex gap-2">
					<div className="text-[#53548A] font-campton">{price}</div>
					<div>|</div>
					<div className="flex justify-center align-middle gap-1">
						<div>Customize</div>
						<div className="mt-[5px]">
							<Image
								src={ArrowRight}
								alt="arrow-right.svg"
								height={16}
								width={16}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
