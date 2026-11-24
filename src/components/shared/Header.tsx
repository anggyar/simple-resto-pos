import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";
import logo from "@/assets/Bakso Jadi Ria Logo.png";

const Header = () => {
	return (
		<header className="flex justify-between items-center py-4 px-8 bg-[#1a1a1a]">
			{/* Logo */}
			<div className="flex items-center gap-2">
				<img src={logo} alt="Jadi Ria Bakso Logo" className="h-8 w-16" />
				<h1 className="text-[#f5f5f5] font-semibold text-lg">Jadi Ria</h1>
			</div>

			{/* Search */}
			<div className="flex items-center gap-4 bg-[#1f1f1f] rounded-[15px] px-5 py-2 w-125">
				<FaSearch className="text-[#f5f5f5]" />
				<input
					type="text"
					placeholder="Search"
					className="text-[#f5f5f5] bg-[#1f1f1f] outline-none"
				/>
			</div>

			{/* Logged User */}
			<div className="flex items-center gap-4">
				<div className="bg-[#1f1f1f] rounded-[15px] p-3 cursor-pointer">
					<FaBell className="text-[#f5f5f5] text-2xl" />
				</div>
				<div className="flex items-center gap-3 cursor-pointer">
					<FaUserCircle className="text-[#f5f5f5] text-4xl" />
					<div className="flex flex-col items-start">
						<h1 className="text-md text-[#f5f5f5] font-semibold">
							Anggyar Muhamad Yahya
						</h1>
						<p className="text-xs text-[#ababab] font-medium">Owner</p>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
