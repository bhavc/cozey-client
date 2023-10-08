import fs from "fs";
import path from "path";

const baseImageDirectory = path.join(
	process.cwd(),
	"public",
	"../public/images"
);

export const getImageFiles = () => {
	try {
		const subdirectories = fs.readdirSync(baseImageDirectory);
		const imagesByDirectory: { [key: string]: string[] } = {};

		for (const directory of subdirectories) {
			const subDirectoryPath = path.join(baseImageDirectory, directory);

			if (fs.statSync(subDirectoryPath).isDirectory()) {
				const files = fs.readdirSync(subDirectoryPath);
				const imageFiles = files.filter((file) =>
					/\.(webp)$/i.test(path.extname(file))
				);
				imagesByDirectory[directory] = imageFiles.map(
					(file) => `/images/${directory}/${file}`
				);
			}
		}

		return imagesByDirectory;
	} catch (error) {
		console.error("Could not read image files: ", error);
		return [];
	}
};
