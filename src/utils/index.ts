export const getRandomBG = () => {
	const colors = ["#f6b100", "#025cca", "#be3e3f", "#02ca32"];

	const color = colors[Math.floor(Math.random() * colors.length)];
	return "bg-[" + color + "]";
};
