export type FilterOption<T extends string> = {
	value: T;
	label: string;
};

type FilterTabsProps<T extends string> = {
	options: readonly FilterOption<T>[];
	value: T;
	onChange: (value: T) => void;
};

function FilterTabs<T extends string>({
	options,
	value,
	onChange,
}: FilterTabsProps<T>) {
	return (
		<div className="flex items-center gap-4">
			{options.map((option) => (
				<button
					key={option.value}
					type="button"
					aria-pressed={value === option.value}
					onClick={() => onChange(option.value)}
					className="text-[#ababab] aria-pressed:bg-[#383838] aria-pressed:text-[#f5f5f5] text-lg rounded-lg px-5 py-2 font-semibold cursor-pointer"
				>
					{option.label}
				</button>
			))}
		</div>
	);
}

export default FilterTabs;
