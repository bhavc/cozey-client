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
		<div className="relative flex flex-col justify-start content-evenly gap-[6px] lg:gap-3 w-auto lg:w[250px] h-auto lg:h-full">
			<div className="relative w-full md:w-[300px] lg:w-[260px] xl:w-[400px] h-36 md">
				<span className="box-border block overflow-hidden">
					<Image
						className="absolute inset-0 box-border p-0 m-auto rounded-xl border-2 border-solid border-[#ECEBE7]"
						src={`/images/${imageUrl}.webp`}
						alt={`${name}-image`}
						width={186}
						height={138}
					/>
				</span>
				<div className="absolute bottom-0 z-40 right-0 flex justify-end p-1">
					<div className="h-5 p-1 pl-[6px] gap-1 flex flex-row items-center rounded-full cursor-pointer justify-evenly bg-white border-[0.5px]">
						<div className="font-campton font-bold text-[#4F6076] h-2 min-[600px]:h-3 text-right items-center justify-end text-[8px] min-[600px]:text-[10px]">
							{colorName}
						</div>
						<div
							className={`rounded-full w-[12px] h-[12px] min-[600px]:w-5 min[600px]:h-5 ${colorCode}`}
						/>
					</div>
				</div>
			</div>
			<div className="relative flex flex-col items-start p-0 gap-[2px] min-[600px]:gap-1 w-full min-[600px]:w-[400px]">
				<div className="w-[190px] md:w-[400px] text-sm md:text-base text-[#0B2341] font-campton font-semibold">
					{name}
				</div>
				<div className="flex flex-row items-center justify-center min-[426px]:gap-1 max-[600px]:gap-1 md:w-[108px] md:h-[26px]">
					<span className="text-[#53548A] font-campton text-[11px] md:text-sm whitespace-nowrap">
						{price}
					</span>
					<span className="text-[#53548A] font-campton text-[11px] md:text-sm whitespace-nowrap">
						|
					</span>
					<span className="relative flex justify-center cursor-pointer">
						<div className="font-campton font-bold min-[426px]:text-[10px] max-[600px]:text-[10px] text-[11px] top-0 whitespace-nowrap text-[#69A2FF]">
							Customize
						</div>
						<div className="]">
							<Image
								src={ArrowRight}
								alt="arrow-right.svg"
								height={16}
								width={16}
							/>
						</div>
					</span>
				</div>
			</div>
		</div>
	);
}
