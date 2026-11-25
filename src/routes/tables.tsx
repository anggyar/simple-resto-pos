import BackButton from "#/components/shared/BackButton.tsx";
import BottomNav from "#/components/shared/BottomNav.tsx";
import FilterTabs from "#/components/shared/FilterTabs.tsx";
import TableCard from "#/components/tables/TableCard.tsx";
import { tables } from "#/constants/index.ts";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/tables")({
	component: Tables,
});

const TABLE_FILTER = [
	{ value: "all", label: "All" },
	{ value: "booked", label: "Booked" },
] as const;

type TableFilter = (typeof TABLE_FILTER)[number]["value"];

function Tables() {
	const [status, setStatus] = useState<TableFilter>("all");
	return (
		<section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden">
			<div className="flex items-center justify-between px-10 py-4">
				<div className="flex items-center gap-3">
					<BackButton />
					<h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wider">
						Tables
					</h1>
				</div>
				<div>
					<FilterTabs
						options={TABLE_FILTER}
						value={status}
						onChange={setStatus}
					/>
				</div>
			</div>

			<div className="px-16 py-4 flex gap-6 flex-wrap overflow-y-auto scrollbar-none h-[calc(100vh-5rem-10rem)]">
				{tables.map((table) => {
					return (
						<TableCard
							key={table.id}
							initial={table.initial}
							name={table.name}
							status={table.status}
						/>
					);
				})}
			</div>

			<BottomNav />
		</section>
	);
}
