import Link from "next/link";

export default function Backend() {
	return (
		<main className="">
			<div className="mt-2">
				<h1 className="text-3xl text-center">Backend Task</h1>
			</div>
			<div className="flex align-middle justify-center gap-5 flex-row mt-6">
				<Link
					href={"backend/picking"}
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				>
					Picking Workflow
				</Link>
				<Link
					href={"backend/packing"}
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				>
					Packing Workflow
				</Link>
			</div>
		</main>
	);
}
