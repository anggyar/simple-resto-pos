// biome-ignore assist/source/organizeImports: <explanation>
import OrderCard from "#/components/orders/OrderCard.tsx";
import BackButton from "#/components/shared/BackButton.tsx";
import BottomNav from "#/components/shared/BottomNav.tsx";
import FilterTabs from "#/components/shared/FilterTabs.tsx";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/orders")({
	component: Orders,
});

const ORDER_FILTERS = [
	{ value: "all", label: "All" },
	{ value: "in-progress", label: "In progress" },
	{ value: "ready", label: "Ready" },
	{ value: "completed", label: "Completed" },
] as const;

type OrderFilter = (typeof ORDER_FILTERS)[number]["value"];

function Orders() {
	const [filter, setFilter] = useState<OrderFilter>("in-progress");

	return (
		<div className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden">
			<div className="flex items-center justify-between px-10 py-4">
				<div className="flex items-center gap-3">
					<BackButton />
					<h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wider">
						Orders
					</h1>
				</div>
				<div className="mt-4">
					<FilterTabs
						options={ORDER_FILTERS}
						value={filter}
						onChange={setFilter}
					/>
				</div>
			</div>
			<div className="px-16 py-4 flex flex-wrap gap-6 overflow-y-auto h-[calc(100vh-5rem-10rem)] content-start scrollbar-none ">
				<OrderCard />
				<OrderCard />
				<OrderCard />
				<OrderCard />
				<OrderCard />
				<OrderCard />
				<OrderCard />
				<OrderCard />
				<OrderCard />
				<OrderCard />
				<OrderCard />
				<OrderCard />
				<OrderCard />
				<OrderCard />
				<OrderCard />
				<OrderCard />
				<OrderCard />
				<OrderCard />
				<OrderCard />
				<OrderCard />
				<OrderCard />
				<OrderCard />
			</div>
			<BottomNav />
		</div>
	);
}
