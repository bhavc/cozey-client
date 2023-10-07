// generate mock data here for the picking
import axios from "axios";
import type { GetServerSideProps } from "next";

// TODO chagne productName/productNames
type Item = {
	id: number;
	productName: string;
	productNames: string[];
};

type PackingDataType = {
	id: number;
	orderDate: number;
	orderTotal: number;
	shippingAddress: string;
	customerName: string;
	customerEmail: string;
	lineItems: Item[];
};

function LineItem({ lineItem }: { lineItem: Item }) {
	return (
		<div>
			<div className="font-bold">{lineItem.productName}</div>
			<ul className="list-disc">
				{lineItem.productNames.map((productName, index) => {
					return <li key={index}>{productName}</li>;
				})}
			</ul>
		</div>
	);
}

function LineItems({ lineItems }: { lineItems: Item[] }) {
	return (
		<div>
			{lineItems.map((lineItem, index) => {
				return <LineItem key={index} lineItem={lineItem} />;
			})}
		</div>
	);
}

export default function Packing({
	packingData,
}: {
	packingData: PackingDataType[];
}) {
	return (
		<main className="">
			<div className="mt-2">
				<h1 className="text-3xl text-center">Packing</h1>
			</div>
			<div className="overflow-x-auto p-4">
				<table className="table">
					<thead>
						<tr>
							<th></th>
							<th>Order Date</th>
							<th>Items</th>
							<th>Ships to</th>
						</tr>
					</thead>
					<tbody>
						{packingData.map((data, index) => {
							return (
								<tr key={index} className="bg-base-200">
									<th>{data.id}</th>
									<td>{data.orderDate}</td>
									<td>
										<LineItems lineItems={data.lineItems} />
									</td>
									<td>{data.shippingAddress}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</main>
	);
}

export const getServerSideProps: GetServerSideProps = async () => {
	const request = await axios.get(
		"http://localhost:3001/workflow/getPackItems"
	);

	// handle error/redirect here

	const { data: packingData } = request.data;

	return {
		props: {
			packingData,
		},
	};
};
