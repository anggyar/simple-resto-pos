import { useCanGoBack, useRouter } from "@tanstack/react-router";
import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";

const BackButton = () => {
	const router = useRouter();
	const canGoBack = useCanGoBack();

	return (
		<div>
			{canGoBack ? (
				<button
					type="button"
					className="bg-blue-500 p-4 text-xl text-[#f5f5f5] font-bold rounded-full cursor-pointer"
					onClick={() => router.history.back()}
				>
					<IoArrowBackOutline />
				</button>
			) : null}
		</div>
	);
};

export default BackButton;
