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
			<div className="">
				<h1 className="font-CamptonThin">Tables</h1>
				<h2>A perfect pairing to your sofa.</h2>
			</div>
			{/* TODO this should link to a sub section */}
			<nav className="bg-blue-400 border-gray-200 ">
				<div className="">
					<ul className="flex flex-row">
						<li>
							<Link href="something">Coffee Tables</Link>
						</li>
						<li>
							<Link href="something">Side Tables</Link>
						</li>
						<li>
							<Link href="something">Media Units</Link>
						</li>
						<li>
							<Link href="something">Table Sets</Link>
						</li>
					</ul>
				</div>
			</nav>
			<div className="">
				<h1 className="font-Campton-BookItalic">Coffee Tables</h1>
				<div className="grid grid-cols-3 gap-3">
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
