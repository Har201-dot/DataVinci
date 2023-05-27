var ctx = document.getElementById("lineChart").getContext("2d");
var myChart = new Chart(ctx, {
	type: "line",
	data: {
		labels: [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		],
		datasets: [
			{
				label: "Earnings in $",
				data: [
					2030, 1950, 2200, 2900, 1700, 2009, 2450, 2700, 2400, 1950, 2400,
					2800,
				],
				backgroundColor: ["rgba(85,85,85, 1)"],
				borderColor: "rgb(41, 155, 99)",

				borderWidth: 1,
			},
		],
	},
	options: {
		responsive: true,
	},
});
