import RootLayout from "@/templates/layout-root";

import error from "./error.module.scss";

export default function Error() {
	const reload = () => {
		window.location.reload();
	};

	return (
		<RootLayout>
			<div className={`${error.root} px-3 lg:px-10`}>
				<h1 className="text-4xl font-bold mb-3">Error!</h1>
				<h2 className="mb-3">Something went wrong!</h2>
				<button
					onClick={() => reload()}
					className="block bg-black text-white py-2 px-5  dark:bg-white dark:text-black">
					Try again
				</button>
			</div>
		</RootLayout>
	);
}
