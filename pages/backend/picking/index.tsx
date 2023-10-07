// generate mock data here for the picking
import axios from "axios";
import type { GetServerSideProps } from "next";

export default function Picking({
	pickingData,
}: {
	pickingData: Record<string, { count: number; name: string }>;
}) {
	return (
		<main className="flex flex-col p-4">
			<div className="mt-2">
				<h1 className="text-3xl text-center">Picking</h1>
			</div>
			<div className="mt-2">
				<h2 className="text-m">For the date of: 1</h2>
			</div>
			<div className="overflow-x-auto">
				<table className="table">
					<thead>
						<tr>
							<th></th>
							<th>Item</th>
							<th>Amount</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{Object.keys(pickingData).map((key) => {
							const row = pickingData[key];
							return (
								<tr key={key} className="bg-base-200">
									<th>{key}</th>
									<td>{row.name}</td>
									<td>{row.count}</td>
									<td></td>
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
		"http://localhost:3001/workflow/getPickItems"
	);
	const status = request.status;

	// handle error/redirect here

	const { data: pickingData } = request.data;

	return {
		props: {
			pickingData,
		},
	};
};
