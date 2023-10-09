import Link from "next/link";

import { getImageFiles } from "@/utils/readFileNamesForDirectory";

import Card from "@/components/Card";

import type { GetServerSideProps } from "next";

export default function Frontend({
	imageFiles,
}: {
	imageFiles: {
		[key: string]: string[];
	};
}) {
	// const { coffeeTables, mediaUnits, sideTables, tableSets } = imageFiles;

	type ProductColorType = "Oak" | "Walnut" | "Black Wood" | "Espresso";

	type ProductType = {
		name: string;
		price: number;
		color: ProductColorType;
		imageUrl: string;
	};

	const coffeeTableProducts: ProductType[] = [
		{
			name: "Stella Coffee Table - 1 Unit",
			price: 180,
			color: "Oak",
			imageUrl: "coffeeTables/Stella_Coffee_Table_1Unit",
		},
		{
			name: "Stella Coffee Table - 2 Units",
			price: 360,
			color: "Walnut",
			imageUrl: "coffeeTables/Stella_Coffee_Table_2Units",
		},
		{
			name: "Pluto Coffee Table",
			price: 115,
			color: "Black Wood",
			imageUrl: "coffeeTables/Pluto_Coffee_Table",
		},
		{
			name: "Stella Coffee Table - 3 Units",
			price: 540,
			color: "Oak",
			imageUrl: "coffeeTables/Stella_Coffee_Table_3Units",
		},
		{
			name: "Pluto Coffee Table",
			price: 115,
			color: "Espresso",
			imageUrl: "coffeeTables/Pluto_Coffee_Table",
		},
		{
			name: "Stella Coffee Table - 1 Unit",
			price: 180,
			color: "Walnut",
			imageUrl: "coffeeTables/Stella_Coffee_Table_1Unit2",
		},
		{
			name: "Stella Coffee Table - 2 Units",
			price: 360,
			color: "Oak",
			imageUrl: "coffeeTables/Stella_Coffee_Table_2Units2",
		},
	];

	return (
		<main className="">
			<div className="py-4 px-20">
				<h1 className="font-CamptonExtraLight text-[#2B2C6E] text-5xl">
					Tables
				</h1>
				<h2 className="font-CamptonLight text-[#19142B] text-lg">
					A perfect pairing to your sofa.
				</h2>
			</div>
			{/* TODO this should link to a sub section */}
			<div className="bg-[#0B2341] px-20 py-4 h-[60px] sticky top-[40px] z-50">
				<div className="flex justify-between">
					<div>
						<Link className="text-[#F7F8F6]" href="something">
							Coffee Tables
						</Link>
					</div>
					<div>
						<Link className="text-[#F7F8F6]" href="something">
							Side Tables
						</Link>
					</div>
					<div>
						<Link className="text-[#F7F8F6]" href="something">
							Media Units
						</Link>
					</div>
					<div>
						<Link className="text-[#F7F8F6]" href="something">
							Table Sets
						</Link>
					</div>
				</div>
			</div>

			<div className="">
				<div className="my-0 mx-auto px-20 pt-8 pb-0">
					<h1 className="font-QuincyRegular text-center text-[32px]">
						Coffee Tables
					</h1>
				</div>
				<div className="py-4 px-6 grid grid-cols-3 relative content-center gap-10">
					{coffeeTableProducts.map((coffeeTableProduct, index) => {
						const { name, price, color, imageUrl } = coffeeTableProduct;
						return (
							<Card
								key={index}
								name={name}
								price={price}
								color={color}
								imageUrl={imageUrl}
							/>
						);
					})}
				</div>
			</div>
		</main>
	);
}

export const getServerSideProps: GetServerSideProps = async () => {
	const imageFiles = getImageFiles();
	return {
		props: {
			imageFiles,
		},
	};
};
