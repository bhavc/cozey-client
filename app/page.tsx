import Link from "next/link";

export default function Home() {
	return (
		<main className="">
			<div className="mt-2">
				<h1 className="text-3xl text-center">Cozey Test</h1>
			</div>
			<div className="flex align-middle justify-center gap-5 flex-row mt-6">
				<Link
					href={"/backend"}
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				>
					Backend
				</Link>
				<Link
					href={"/frontend"}
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				>
					Frontend
				</Link>
			</div>
		</main>
	);
}
