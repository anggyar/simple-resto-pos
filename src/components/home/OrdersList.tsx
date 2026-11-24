import { FaCheckDouble, FaCircle } from "react-icons/fa";

const OrdersList = () => {
	return (
		<div className="flex items-center gap-5 m-3">
			<button
				type="button"
				className="bg-[#f6b100] p-3 text-xl font-bold rounded-lg"
			>
				AMY
			</button>
			<div className="flex items-center justify-between w-full">
				<div className="flex flex-col gap-1">
					<h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
						Anggyar Muhamad Yahya
					</h1>
					<p className="text-[#ababab] text-sm">8 Items</p>
				</div>

				<div className="text-[#f6b100] font-semibold border boder-[#f6b100] rounded-lg p-1">
					<p>Table No: 10</p>
				</div>
				<div className=" flex gap-1 flex-col">
					<p className="bg-green-300 text-green-600 rounded-full p-1 flex items-center justify-center">
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
	);
};

export default OrdersList;
