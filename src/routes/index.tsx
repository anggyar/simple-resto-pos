import { createFileRoute } from "@tanstack/react-router";
import { BsCashCoin } from "react-icons/bs";
import { GrInProgress } from "react-icons/gr";
import Greetings from "#/components/home/Greetings.tsx";
import MiniCard from "#/components/home/MiniCard.tsx";
import PopularDishes from "#/components/home/PopularDishes.tsx";
import RecentOrders from "#/components/home/RecentOrders.tsx";
import BottomNav from "#/components/shared/BottomNav.tsx";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-3">
			{/* Left Div */}
			<div className="flex-3 bg-[#1f1f1f]">
				<Greetings />
				<div className="flex items-center w-full gap-3 px-8 mt-8">
					<MiniCard
						title="Total Earnings"
						icon={<BsCashCoin />}
						number={512}
						footerNum={1.6}
					/>
					<MiniCard
						title="In Progress"
						icon={<GrInProgress />}
						number={16}
						footerNum={3.6}
					/>
				</div>
				<RecentOrders />
			</div>

			{/* Right Div */}
			<div className="flex-2 bg-[#1f1f1f]">
				<PopularDishes />
			</div>
			<BottomNav />
		</section>
	);
}
