import { FaSearch } from "react-icons/fa";
import OrdersList from "./OrdersList.tsx";

const RecentOrders = () => {
	return (
		<div className="px-8 mt-6">
			<div className="bg-[#1a1a1a] w-full h-[450px] rounded-lg">
				<div className="flex justify-between items-center px-6 py-4">
					<h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
						Recent Orders
					</h1>
					<a href="#test" className="text-[#025cca] text-sm font-semibold">
						View All
					</a>
				</div>

				<div className="flex items-center gap-4 bg-[#1f1f1f] rounded-[15px] px-6 py-4 mt-6 mx-4">
					<FaSearch className="text-[#f5f5f5]" />
					<input
						type="text"
						placeholder="Search recent orders"
						className="text-[#f5f5f5] bg-[#1f1f1f] outline-none"
					/>
				</div>

				{/* Order List */}
				<div className="mt-4 px-6 overflow-y-scroll h-[300px] scrollbar-none">
					<OrdersList />
					<OrdersList />
					<OrdersList />
					<OrdersList />
					<OrdersList />
					<OrdersList />
					<OrdersList />
				</div>
			</div>
		</div>
	);
};

export default RecentOrders;
