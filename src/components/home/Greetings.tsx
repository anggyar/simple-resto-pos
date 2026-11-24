import React, { useEffect, useState } from "react";

const Greetings = () => {
	const [dateTime, setDateTime] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => {
			setDateTime(new Date());
		}, 1000);
	}, []);

	const formatDate = (date: Date) => {
		const months = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		];

		return `${months[date.getMonth()]} ${String(date.getDate()).padStart(2, "0")}, ${date.getFullYear()}`;
	};

	const formatTime = (date: Date) => {
		return `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`;
	};
	return (
		<div className="flex justify-between items-center px-8 mt-5">
			<div>
				<h1 className="text-[#f5f5f5] text-3xl font-semibold">
					Good Morning Anggyar
				</h1>
				<p className="text-[#ababab] text-xs">
					Give your best services for customers ☺️
				</p>
			</div>
			<div>
				<h1 className="text-[#f5f5f5] text-3xl font-bold tracking-wide w-32.5">
					{formatTime(dateTime)}
				</h1>
				<p className="text-[#ababab] text-sm">{formatDate(dateTime)}</p>
			</div>
		</div>
	);
};

export default Greetings;
