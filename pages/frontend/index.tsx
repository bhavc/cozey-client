import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import ChevronDown from "public/images/icons/chevronDown.svg";
import ChevronUp from "public/images/icons/chevronUp.svg";
import Card from "@/components/Card";

export default function Frontend() {
	// const { coffeeTables, mediaUnits, sideTables, tableSets } = imageFiles;
	const [selectedSubHeader, setSelectedSubheader] = useState(0);
	const [isOpen, setIsOpen] = useState(false);

	function handleOnClick() {
		setIsOpen(!isOpen);
	}

	const coffeeTableTypes = [
		{ name: "Coffee Tables" },
		{ name: "Side Tables" },
		{ name: "Media Units" },
		{ name: "Table Sets" },
	];

	type ProductColorType = "Oak" | "Walnut" | "Black Wood" | "Espresso";

	type ProductType = {
		name: string;
		price: string;
		colorName: ProductColorType;
		colorCode: string;
		imageUrl: string;
	};

	const coffeeTableProducts: ProductType[] = [
		{
			name: "Stella Coffee Table - 1 Unit",
			price: "$210 or financing",
			colorName: "Oak",
			colorCode: "bg-[#DDB586]",
			imageUrl: "coffeeTables/Stella_Coffee_Table_1Unit",
		},
		{
			name: "Stella Coffee Table - 2 Units",
			price: "$420 or financing",
			colorName: "Walnut",
			colorCode: "bg-[#582F11]",
			imageUrl: "coffeeTables/Stella_Coffee_Table_2Units",
		},
		{
			name: "Pluto Coffee Table",
			price: "$135 or financing",
			colorName: "Black Wood",
			colorCode: "bg-[#0A0401]",
			imageUrl: "coffeeTables/Pluto_Coffee_Table",
		},
		{
			name: "Stella Coffee Table - 3 Units",
			price: "$630 or financing",
			colorName: "Oak",
			colorCode: "bg-[#DDB586]",
			imageUrl: "coffeeTables/Stella_Coffee_Table_3Units",
		},
		{
			name: "Pluto Coffee Table",
			price: "$135 or financing",
			colorName: "Espresso",
			colorCode: "bg-[#442109]",
			imageUrl: "coffeeTables/Pluto_Coffee_Table",
		},
		{
			name: "Stella Coffee Table - 1 Unit",
			price: "$210 or financing",
			colorName: "Walnut",
			colorCode: "bg-[#582F11]",
			imageUrl: "coffeeTables/Stella_Coffee_Table_1Unit2",
		},
		{
			name: "Stella Coffee Table - 2 Units",
			price: "$420 or financing",
			colorName: "Oak",
			colorCode: "bg-[#DDB586]",
			imageUrl: "coffeeTables/Stella_Coffee_Table_2Units2",
		},
		{
			name: "Stella Coffee Table - 3 Units",
			price: "$630 or financing",
			colorName: "Oak",
			colorCode: "bg-[#DDB586]",
			imageUrl: "coffeeTables/Stella_Coffee_Table_3Units2",
		},
	];

	return (
		<main className="">
			<div className="py-4 px-20">
				<h1 className="font-Quincy font-light text-[#2B2C6E] text-[44px]">
					Tables
				</h1>
				<h2 className="font-larsseit text-[#19142B] text-lg">
					A perfect pairing to your sofa.
				</h2>
			</div>
			{/* TODO this should link to a sub section */}
			<div className="sticky z-50 top-0">
				<div
					id="myHeader"
					className="bg-[#0B2341] px-20 py-4 max-lgNav:py-5 max-lgNav:pr-8 max-lgNav:pl-4 h-[60px] max-lg:top-10"
				>
					<div className="lgNav:hidden">
						<div className="flex justify-between">
							<div className="text-[#F7F8F6]">
								{coffeeTableTypes[selectedSubHeader].name}
							</div>

							<div className="">
								<button onClick={handleOnClick}>
									{isOpen ? (
										<Image
											className=""
											src={ChevronUp}
											alt={`chevron-up`}
											width={25}
											height={25}
										/>
									) : (
										<Image
											className=""
											src={ChevronDown}
											alt={`chevron-down`}
											width={25}
											height={25}
										/>
									)}
								</button>
								{isOpen && (
									<div className="flex flex-col absolute z-10 bg-[#0B2341] w-full pt-8 pl-8 pb-4 pr-4 right-[-32px] left-0">
										{coffeeTableTypes.map((tableType, index) => {
											return (
												<Link
													key={index}
													className="text-[#F7F8F6] pb-10"
													href="something"
												>
													{tableType.name}
												</Link>
											);
										})}
									</div>
								)}
							</div>
						</div>
					</div>

					<div className="hidden lgNav:block">
						<div className="flex justify-between items-center">
							<Link className="text-[#F7F8F6]" href="something">
								Coffee Tables
							</Link>

							<Link className="text-[#F7F8F6]" href="something">
								Side Tables
							</Link>

							<Link className="text-[#F7F8F6]" href="something">
								Media Units
							</Link>

							<Link className="text-[#F7F8F6]" href="something">
								Table Sets
							</Link>
						</div>
					</div>
				</div>
			</div>

			<div className="">
				<div className="my-0 mx-auto px-20 pt-8 pb-0">
					<h1 className="font-campton text-center text-[32px]">
						Coffee Tables
					</h1>
				</div>
				<div className="py-4 px-6 grid grid-cols-3 relative content-center gap-10">
					{coffeeTableProducts.map((coffeeTableProduct, index) => {
						const { name, price, colorName, colorCode, imageUrl } =
							coffeeTableProduct;
						return (
							<Card
								key={index}
								name={name}
								price={price}
								colorName={colorName}
								colorCode={colorCode}
								imageUrl={imageUrl}
							/>
						);
					})}
				</div>
			</div>
		</main>
	);
}

// export const getServerSideProps: GetServerSideProps = async () => {
// const imageFiles = getImageFiles();
// return {
// 	props: {
// 		imageFiles,
// 	},
// };
// };
