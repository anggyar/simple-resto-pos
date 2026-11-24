import React from "react";
import { FaCheckDouble, FaCircle } from "react-icons/fa";

const OrderCard = () => {
	return (
		<div className="w-[500px] bg-[#262626] p-4 rounded-lg mb-4">
			<div className="flex items-center gap-5 mb-3">
				<button
					type="button"
					className="bg-[#f6b100] p-3 text-xl font-bold rounded-lg"
				>
					AMY
				</button>
				<div className="flex items-center justify-between w-full">
					<div className="flex flex-col gap-1">
						<h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
							Anggyar
						</h1>
						<p className="text-[#ababab] text-sm">#101 / Dine In</p>
					</div>
					<div className=" flex gap-1 flex-col">
						<p className="bg-[#2e4a40] text-green-600 rounded-full p-1 flex items-center justify-center mb-1">
							<FaCheckDouble className="inline mr-2" />
							Ready
						</p>
						<p className="text-[#ababab] text-sm">
							<FaCircle className="inline mr-2 text-green-600" />
							Ready to serve
						</p>
					</div>
				</div>
			</div>
			<div className="flex justify-between items-center mt-4 text-[#ababab]">
				<p>January 18, 2026 08:32 PM</p>
				<p>8 Items</p>
			</div>
			<hr className="border-gray-500 w-full mt-4" />
			<div className="flex items-center justify-between mt-4">
				<h1 className="text-[#f5f5f5] text-xl font-semibold">Total</h1>
				<p className="text-[#f5f5f5] text-lg font-semibold">$250</p>
			</div>
		</div>
	);
};

export default OrderCard;
