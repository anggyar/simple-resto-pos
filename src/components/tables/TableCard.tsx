import type { Table } from "#/constants/index.ts";
import { getRandomBG } from "#/utils/index.ts";

type TableDescription = Pick<Table, "name" | "status" | "initial">;

const TableCard = ({ name, status, initial }: TableDescription) => {
	return (
		<div className="w-[300px] hover:bg-[#2c2c2c] bg-[#262626] p-4 rounded-lg cursor-pointer shadow-sm">
			<div className="flex justify-between items-center px-1">
				<h1 className="text-[#f5f5f5] text-xl font-semibold">{name}</h1>
				<p
					className={`${status === "Booked" ? "bg-[#2e4a40] text-green-600" : "bg-[#664a04] text-white"}  px-2 py-1 rounded-lg`}
				>
					{status}
				</p>
			</div>
			<div className="flex items-center justify-center mt-5 my-7">
				<h1 className={`${getRandomBG()} text-white rounded-full p-5 text-xl`}>
					{initial}
				</h1>
			</div>
		</div>
	);
};

export default TableCard;
