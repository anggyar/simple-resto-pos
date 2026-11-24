import { Link, useNavigate } from "@tanstack/react-router";
import { BiSolidDish } from "react-icons/bi";
import { CiCircleMore } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { MdOutlineReorder, MdTableBar } from "react-icons/md";

const BottomNav = () => {
	const navItems = [
		{ to: "/", label: "Home", icon: FaHome },
		{ to: "/orders", label: "Orders", icon: MdOutlineReorder },
		{ to: "/tables", label: "Tables", icon: MdTableBar },
		{ to: "/more", label: "More", icon: CiCircleMore },
	];
	return (
		<div className="fixed bottom-0 left-0 right-0 bg-[#262626] p-2 h-16 flex justify-around">
			{navItems.map(({ to, label, icon: Icon }) => (
				<Link
					key={to}
					to={to}
					className="flex items-center justify-center text-[#ababab] w-50 rounded-[20px]"
					activeProps={{ className: "bg-[#343434] text-[#f5f5f5]" }}
				>
					<Icon className="inline mr-4" />
					<p>{label}</p>
				</Link>
			))}

			<button
				type="button"
				className="bg-[#F6B100] text-[#f5f5f5] rounded-full p-3 absolute items-center bottom-6"
			>
				<BiSolidDish size={30} />
			</button>
		</div>
	);
};

export default BottomNav;
