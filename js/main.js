// (function(){
// 	console.log('this');
// 	var t;
// 	function size(animate){
// 		if (animate == undefined){
// 			animate = false;
// 		}
// 		clearTimeout(t);
// 		t = setTimeout(function(){
// 			$("canvas").each(function(i,el){
// 				$(el).attr({
// 					"width":$(el).parent().width(),
// 					"height":$(el).parent().outerHeight()
// 				});
// 			});
// 			redraw(animate);
// 			var m = 0;
// 			$(".widget").height("");
// 			$(".widget").each(function(i,el){ m = Math.max(m,$(el).height()); });
// 			$(".widget").height(m);
// 		}, 30);
// 	}
// 	$(window).on('resize', function(){ size(false); });
	// var request = new XMLHttpRequest();

	// request.open('GET', 'http://localhost:3000/employees/', true);
	// request.onload = function (){

	// var data = JSON.parse(this.response);

	// if (request.status >= 200 && request.status < 400) {
	// 	console.log(data);
		
	// } else {
	// 	console.log('error');
	// }
	// }
	// request.send();
	
	datestr = 'TEST';
	$('#submit').on('click', function(){
		(function(){
			console.log('this');
			var t;
			function size(animate){
				if (animate == undefined){
					animate = false;
				}
				clearTimeout(t);
				t = setTimeout(function(){
					$("canvas").each(function(i,el){
						$(el).attr({
							"width":$(el).parent().width(),
							"height":$(el).parent().outerHeight()
						});
					});
					redraw(animate);
					var m = 0;
					$(".widget").height("");
					$(".widget").each(function(i,el){ m = Math.max(m,$(el).height()); });
					$(".widget").height(m);
				}, 30);
			}
			$(window).on('resize', function(){ size(false); });
		
		console.log('buttonisclicked');
		var date = new Date($('#myDate').val());
		day = date.getDate();
		month = date.getMonth() + 1;
		year = date.getFullYear();
		datestr = day + '/' + month + '/' + year;
		console.log(datestr);
		function redraw(animation){
			var option = {};
			if (!animation){
				option.animation = false;
			} else {
				option.animation = true;
			}
			
			var datawithdate = [
			{
				'date': "20/8/2018",
				'data': [1231,1232,123,423,123]
			},
			{
				'date': "21/8/2018",
				'data': [2131,1234,123,432,123]
			},
			{
				'date': "22/8/2018",
				"data": [123,321,12,432,132]
			}
		];
		
		var config1 = {
				type: 'pie',
				data: {
						labels: ["Shipping & Receiving", "Rework", "Production", "Administrative", "Labelling"],
						datasets: [{
						label: "Population (millions)",
						backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
						data: [2478,5267,734,784,433]
						}]
					},
				options: {
						title: {
						display: true,
						text: 'Breakdown of Hours'
						}
				}
			}
			var config2 = {
				type: 'bar',
				data: {
				labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
				datasets: [
					{
					label: "Population (millions)",
					backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
					data: [2478,5267,734,784,433]
					}
				]
				},
				options: {
				legend: { display: false },
				title: {
					display: true,
					text: 'Predicted world population (millions) in 2050'
				}
				}
			}
			config3 = {
				type: 'polarArea',
				data: {
					labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
					datasets: [
					{
						label: "Population (millions)",
						backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
						data: [2478,5267,734,784,433]
					}
					]
				},
				options: {
					title: {
					display: true,
					text: 'Predicted world population (millions) in 2050'
					}
				}
			}
			config4 = {
				type: 'doughnut',
				data: {
					labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
					datasets: [
					{
						label: "Population (millions)",
						backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
						data: [2478,5267,734,784,433]
					}
					]
				},
				options: {
					title: {
					display: true,
					text: 'Predicted world population (millions) in 2050'
					}
				}
			}
			config5 = {
				type: 'horizontalBar',
				data: {
					labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
					datasets: [
					{
						label: "Population (millions)",
						backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
						data: [2478,5267,734,784,433]
					}
					]
				},
				options: {
					legend: { display: false },
					title: {
					display: true,
					text: 'Predicted world population (millions) in 2050'
					}
				}
			}
			console.log(typeof(JSON.stringify(datawithdate[0].data)));
			function search(datestr, datawithdate){
				for (var i=0; i < datawithdate.length; i++) {
						console.log(datawithdate[i].date);
						console.log(datestr);
						if (datawithdate[i].date === datestr) {
								console.log(datawithdate[i].data);
								console.log('date with date is ' + datawithdate[i].data);
								config1.data.datasets[0].data = datawithdate[i].data;
								config2.data.datasets[0].data = datawithdate[i].data;
								config3.data.datasets[0].data = datawithdate[i].data;
								config4.data.datasets[0].data = datawithdate[i].data;
								config5.data.datasets[0].data = datawithdate[i].data;
								new Chart(document.getElementById("piechart"), config1);
								new Chart(document.getElementById("bar-chart"), config2);
								new Chart(document.getElementById("polar-chart"),config3);
								new Chart(document.getElementById("doughnut-chart"),config4);
								new Chart(document.getElementById("bar-chart-horizontal"),config5);
								new Chart(document.getElementById("linechart"), {
									type: 'line',
									data: {
										labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
										datasets: [{ 
											data: [86,114,106,106,107,111,133,221,783,2478],
											label: "Africa",
											borderColor: "#3e95cd",
											fill: false
										}, { 
											data: [282,350,411,502,635,809,947,1402,3700,5267],
											label: "Asia",
											borderColor: "#8e5ea2",
											fill: false
										}, { 
											data: [168,170,178,190,203,276,408,547,675,734],
											label: "Europe",
											borderColor: "#3cba9f",
											fill: false
										}, { 
											data: [40,20,10,16,24,38,74,167,508,784],
											label: "Latin America",
											borderColor: "#e8c3b9",
											fill: false
										}, { 
											data: [6,3,2,2,7,26,82,172,312,433],
											label: "North America",
											borderColor: "#c45850",
											fill: false
										}
										]
									},
									options: {
										title: {
										display: true,
										text: 'World population per region (in millions)'
										}
									}
									});
						
								new Chart(document.getElementById("radarchart"), {
									type: 'radar',
									data: {
										labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
										datasets: [
										{
											label: "1950",
											fill: true,
											backgroundColor: "rgba(179,181,198,0.2)",
											borderColor: "rgba(179,181,198,1)",
											pointBorderColor: "#fff",
											pointBackgroundColor: "rgba(179,181,198,1)",
											data: [8.77,55.61,21.69,6.62,6.82]
										}, {
											label: "2050",
											fill: true,
											backgroundColor: "rgba(255,99,132,0.2)",
											borderColor: "rgba(255,99,132,1)",
											pointBorderColor: "#fff",
											pointBackgroundColor: "rgba(255,99,132,1)",
											pointBorderColor: "#fff",
											data: [25.48,54.16,7.61,8.06,4.45]
										}
										]
									},
									options: {
										title: {
										display: true,
										text: 'Distribution in % of world population'
										}
									}
								});
						}
				}
			}
	
		search(datestr,datawithdate);
		
		
		// var config = {
		// 	type: 'pie',
		// 	data: {
		// 			labels: ["Shipping & Receiving", "Rework", "Production", "Administrative", "Labelling"],
		// 			datasets: [{
		// 			label: "Population (millions)",
		// 			backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
		// 			data: [2478,5267,734,784,433]
		// 			}]
		// 		},
		// 	options: {
		// 			title: {
		// 			display: true,
		// 			text: 'Breakdown of Hours'
		// 			}
		// 	}
		// }
		//console.log(config.data.datasets[0].data);
		//new Chart(document.getElementById("piechart"),config);
		// new Chart(document.getElementById("piechart"), {
		// 		type: 'pie',
		// 		data: {
		// 			labels: ["Shipping & Receiving", "Rework", "Production", "Administrative", "Labelling"],
		// 			datasets: [{
		// 			label: "Population (millions)",
		// 			backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
		// 			data: [2478,5267,734,784,433]
		// 			}]
		// 		},
		// 		options: {
		// 			title: {
		// 			display: true,
		// 			text: 'Breakdown of Hours'
		// 			}
		// 		}	
		// 	});
		// 	console.log(JSON.stringify(document.getElementById("piechart").type));
			// new Chart(document.getElementById("linechart"), {
			// 	type: 'line',
			// 	data: {
			// 		labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
			// 		datasets: [{ 
			// 			data: [86,114,106,106,107,111,133,221,783,2478],
			// 			label: "Africa",
			// 			borderColor: "#3e95cd",
			// 			fill: false
			// 		}, { 
			// 			data: [282,350,411,502,635,809,947,1402,3700,5267],
			// 			label: "Asia",
			// 			borderColor: "#8e5ea2",
			// 			fill: false
			// 		}, { 
			// 			data: [168,170,178,190,203,276,408,547,675,734],
			// 			label: "Europe",
			// 			borderColor: "#3cba9f",
			// 			fill: false
			// 		}, { 
			// 			data: [40,20,10,16,24,38,74,167,508,784],
			// 			label: "Latin America",
			// 			borderColor: "#e8c3b9",
			// 			fill: false
			// 		}, { 
			// 			data: [6,3,2,2,7,26,82,172,312,433],
			// 			label: "North America",
			// 			borderColor: "#c45850",
			// 			fill: false
			// 		}
			// 		]
			// 	},
			// 	options: {
			// 		title: {
			// 		display: true,
			// 		text: 'World population per region (in millions)'
			// 		}
			// 	}
			// 	});
	
			// new Chart(document.getElementById("radarchart"), {
			// 	type: 'radar',
			// 	data: {
			// 		labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
			// 		datasets: [
			// 		{
			// 			label: "1950",
			// 			fill: true,
			// 			backgroundColor: "rgba(179,181,198,0.2)",
			// 			borderColor: "rgba(179,181,198,1)",
			// 			pointBorderColor: "#fff",
			// 			pointBackgroundColor: "rgba(179,181,198,1)",
			// 			data: [8.77,55.61,21.69,6.62,6.82]
			// 		}, {
			// 			label: "2050",
			// 			fill: true,
			// 			backgroundColor: "rgba(255,99,132,0.2)",
			// 			borderColor: "rgba(255,99,132,1)",
			// 			pointBorderColor: "#fff",
			// 			pointBackgroundColor: "rgba(255,99,132,1)",
			// 			pointBorderColor: "#fff",
			// 			data: [25.48,54.16,7.61,8.06,4.45]
			// 		}
			// 		]
			// 	},
			// 	options: {
			// 		title: {
			// 		display: true,
			// 		text: 'Distribution in % of world population'
			// 		}
			// 	}
			// });
	
			// Bar chart
			// new Chart(document.getElementById("bar-chart"), {
			// 	type: 'bar',
			// 	data: {
			// 	labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
			// 	datasets: [
			// 		{
			// 		label: "Population (millions)",
			// 		backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
			// 		data: [2478,5267,734,784,433]
			// 		}
			// 	]
			// 	},
			// 	options: {
			// 	legend: { display: false },
			// 	title: {
			// 		display: true,
			// 		text: 'Predicted world population (millions) in 2050'
			// 	}
			// 	}
			// });
	
			// new Chart(document.getElementById("polar-chart"), {
			// 	type: 'polarArea',
			// 	data: {
			// 		labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
			// 		datasets: [
			// 		{
			// 			label: "Population (millions)",
			// 			backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
			// 			data: [2478,5267,734,784,433]
			// 		}
			// 		]
			// 	},
			// 	options: {
			// 		title: {
			// 		display: true,
			// 		text: 'Predicted world population (millions) in 2050'
			// 		}
			// 	}
			// });
	
			// new Chart(document.getElementById("doughnut-chart"), {
			// 	type: 'doughnut',
			// 	data: {
			// 		labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
			// 		datasets: [
			// 		{
			// 			label: "Population (millions)",
			// 			backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
			// 			data: [2478,5267,734,784,433]
			// 		}
			// 		]
			// 	},
			// 	options: {
			// 		title: {
			// 		display: true,
			// 		text: 'Predicted world population (millions) in 2050'
			// 		}
			// 	}
			// });
	
			// new Chart(document.getElementById("bar-chart-horizontal"), {
			// 	type: 'horizontalBar',
			// 	data: {
			// 		labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
			// 		datasets: [
			// 		{
			// 			label: "Population (millions)",
			// 			backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
			// 			data: [2478,5267,734,784,433]
			// 		}
			// 		]
			// 	},
			// 	options: {
			// 		legend: { display: false },
			// 		title: {
			// 		display: true,
			// 		text: 'Predicted world population (millions) in 2050'
			// 		}
			// 	}
			// });
	
			new Chart(document.getElementById("bar-chart-grouped"), {
				type: 'bar',
				data: {
					labels: ["1900", "1950", "1999", "2050"],
					datasets: [
					{
						label: "Africa",
						backgroundColor: "#3e95cd",
						data: [133,221,783,2478]
					}, {
						label: "Europe",
						backgroundColor: "#8e5ea2",
						data: [408,547,675,734]
					}
					]
				},
				options: {
					title: {
					display: true,
					text: 'Population growth (millions)'
					}
				}
			});
	
			new Chart(document.getElementById("bubble-chart"), {
				type: 'bubble',
				data: {
					labels: "Africa",
					datasets: [
					{
						label: ["China"],
						backgroundColor: "rgba(255,221,50,0.2)",
						borderColor: "rgba(255,221,50,1)",
						data: [{
						x: 21269017,
						y: 5.245,
						r: 15
						}]
					}, {
						label: ["Denmark"],
						backgroundColor: "rgba(60,186,159,0.2)",
						borderColor: "rgba(60,186,159,1)",
						data: [{
						x: 258702,
						y: 7.526,
						r: 10
						}]
					}, {
						label: ["Germany"],
						backgroundColor: "rgba(0,0,0,0.2)",
						borderColor: "#000",
						data: [{
						x: 3979083,
						y: 6.994,
						r: 15
						}]
					}, {
						label: ["Japan"],
						backgroundColor: "rgba(193,46,12,0.2)",
						borderColor: "rgba(193,46,12,1)",
						data: [{
						x: 4931877,
						y: 5.921,
						r: 15
						}]
					}
					]
				},
				options: {
					title: {
					display: true,
					text: 'Predicted world population (millions) in 2050'
					}, scales: {
					yAxes: [{ 
						scaleLabel: {
						display: true,
						labelString: "Happiness"
						}
					}],
					xAxes: [{ 
						scaleLabel: {
						display: true,
						labelString: "GDP (PPP)"
						}
					}]
					}
				}
			});
	
		}
		size(true);
	
	}());		
	});
	//console.log(window.datestr);
	
	//setTimeout(console.log(datestr),5000);
	// function addData(chart, label, data) {
	// 	chart.data.labels.push(label);
	// 	chart.data.labels.push(label);
  //   chart.data.datasets.forEach((dataset) => {
  //       dataset.data.push(data);
  //   });
  //   chart.update();
	// }

	// function redraw(animation){
	// 	var option = {};
	// 	if (!animation){
	// 		option.animation = false;
	// 	} else {
	// 		option.animation = true;
	// 	}
		
	// 	var datawithdate = [{
	// 		'date': "20/08/2018",
	// 		'data': [1231,1232,123,423,123]
	// 	},
	// 	{
	// 		'date': "21/08/2018",
	// 		'data': [2131,1234,123,432,123]
	// 	}];

	// 	function search(datestr, datawithdate){
	// 		for (var i=0; i < datawithdate.length; i++) {
	// 				if (datawithdate[i].date === datestr) {
	// 						//return datawithdate[i];
	// 						console.log('date with date is ' + datawithdate[i]);
	// 				}
	// 		}
	// 	}

	// 	search(window.datestr,datawithdate);
	
	// new Chart(document.getElementById("piechart"), {
	// 		type: 'pie',
	// 		data: {
	// 		  labels: ["Shipping & Receiving", "Rework", "Production", "Administrative", "Labelling"],
	// 		  datasets: [{
	// 			label: "Population (millions)",
	// 			backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
	// 			data: [2478,5267,734,784,433]
	// 		  }]
	// 		},
	// 		options: {
	// 		  title: {
	// 			display: true,
	// 			text: 'Breakdown of Hours'
	// 		  }
	// 		}	
	// 	});

	// 	new Chart(document.getElementById("linechart"), {
	// 		type: 'line',
	// 		data: {
	// 		  labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
	// 		  datasets: [{ 
	// 			  data: [86,114,106,106,107,111,133,221,783,2478],
	// 			  label: "Africa",
	// 			  borderColor: "#3e95cd",
	// 			  fill: false
	// 			}, { 
	// 			  data: [282,350,411,502,635,809,947,1402,3700,5267],
	// 			  label: "Asia",
	// 			  borderColor: "#8e5ea2",
	// 			  fill: false
	// 			}, { 
	// 			  data: [168,170,178,190,203,276,408,547,675,734],
	// 			  label: "Europe",
	// 			  borderColor: "#3cba9f",
	// 			  fill: false
	// 			}, { 
	// 			  data: [40,20,10,16,24,38,74,167,508,784],
	// 			  label: "Latin America",
	// 			  borderColor: "#e8c3b9",
	// 			  fill: false
	// 			}, { 
	// 			  data: [6,3,2,2,7,26,82,172,312,433],
	// 			  label: "North America",
	// 			  borderColor: "#c45850",
	// 			  fill: false
	// 			}
	// 		  ]
	// 		},
	// 		options: {
	// 		  title: {
	// 			display: true,
	// 			text: 'World population per region (in millions)'
	// 		  }
	// 		}
	// 	  });

	// 	new Chart(document.getElementById("radarchart"), {
	// 		type: 'radar',
	// 		data: {
	// 		  labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
	// 		  datasets: [
	// 			{
	// 			  label: "1950",
	// 			  fill: true,
	// 			  backgroundColor: "rgba(179,181,198,0.2)",
	// 			  borderColor: "rgba(179,181,198,1)",
	// 			  pointBorderColor: "#fff",
	// 			  pointBackgroundColor: "rgba(179,181,198,1)",
	// 			  data: [8.77,55.61,21.69,6.62,6.82]
	// 			}, {
	// 			  label: "2050",
	// 			  fill: true,
	// 			  backgroundColor: "rgba(255,99,132,0.2)",
	// 			  borderColor: "rgba(255,99,132,1)",
	// 			  pointBorderColor: "#fff",
	// 			  pointBackgroundColor: "rgba(255,99,132,1)",
	// 			  pointBorderColor: "#fff",
	// 			  data: [25.48,54.16,7.61,8.06,4.45]
	// 			}
	// 		  ]
	// 		},
	// 		options: {
	// 		  title: {
	// 			display: true,
	// 			text: 'Distribution in % of world population'
	// 		  }
	// 		}
	// 	});

	// 	// Bar chart
	// 	new Chart(document.getElementById("bar-chart"), {
	// 		type: 'bar',
	// 		data: {
	// 		labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
	// 		datasets: [
	// 			{
	// 			label: "Population (millions)",
	// 			backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
	// 			data: [2478,5267,734,784,433]
	// 			}
	// 		]
	// 		},
	// 		options: {
	// 		legend: { display: false },
	// 		title: {
	// 			display: true,
	// 			text: 'Predicted world population (millions) in 2050'
	// 		}
	// 		}
	// 	});

	// 	new Chart(document.getElementById("polar-chart"), {
	// 		type: 'polarArea',
	// 		data: {
	// 		  labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
	// 		  datasets: [
	// 			{
	// 			  label: "Population (millions)",
	// 			  backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
	// 			  data: [2478,5267,734,784,433]
	// 			}
	// 		  ]
	// 		},
	// 		options: {
	// 		  title: {
	// 			display: true,
	// 			text: 'Predicted world population (millions) in 2050'
	// 		  }
	// 		}
	// 	});

	// 	new Chart(document.getElementById("doughnut-chart"), {
	// 		type: 'doughnut',
	// 		data: {
	// 		  labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
	// 		  datasets: [
	// 			{
	// 			  label: "Population (millions)",
	// 			  backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
	// 			  data: [2478,5267,734,784,433]
	// 			}
	// 		  ]
	// 		},
	// 		options: {
	// 		  title: {
	// 			display: true,
	// 			text: 'Predicted world population (millions) in 2050'
	// 		  }
	// 		}
	// 	});

	// 	new Chart(document.getElementById("bar-chart-horizontal"), {
	// 		type: 'horizontalBar',
	// 		data: {
	// 		  labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
	// 		  datasets: [
	// 			{
	// 			  label: "Population (millions)",
	// 			  backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
	// 			  data: [2478,5267,734,784,433]
	// 			}
	// 		  ]
	// 		},
	// 		options: {
	// 		  legend: { display: false },
	// 		  title: {
	// 			display: true,
	// 			text: 'Predicted world population (millions) in 2050'
	// 		  }
	// 		}
	// 	});

	// 	new Chart(document.getElementById("bar-chart-grouped"), {
	// 		type: 'bar',
	// 		data: {
	// 		  labels: ["1900", "1950", "1999", "2050"],
	// 		  datasets: [
	// 			{
	// 			  label: "Africa",
	// 			  backgroundColor: "#3e95cd",
	// 			  data: [133,221,783,2478]
	// 			}, {
	// 			  label: "Europe",
	// 			  backgroundColor: "#8e5ea2",
	// 			  data: [408,547,675,734]
	// 			}
	// 		  ]
	// 		},
	// 		options: {
	// 		  title: {
	// 			display: true,
	// 			text: 'Population growth (millions)'
	// 		  }
	// 		}
	// 	});

	// 	new Chart(document.getElementById("bubble-chart"), {
	// 		type: 'bubble',
	// 		data: {
	// 		  labels: "Africa",
	// 		  datasets: [
	// 			{
	// 			  label: ["China"],
	// 			  backgroundColor: "rgba(255,221,50,0.2)",
	// 			  borderColor: "rgba(255,221,50,1)",
	// 			  data: [{
	// 				x: 21269017,
	// 				y: 5.245,
	// 				r: 15
	// 			  }]
	// 			}, {
	// 			  label: ["Denmark"],
	// 			  backgroundColor: "rgba(60,186,159,0.2)",
	// 			  borderColor: "rgba(60,186,159,1)",
	// 			  data: [{
	// 				x: 258702,
	// 				y: 7.526,
	// 				r: 10
	// 			  }]
	// 			}, {
	// 			  label: ["Germany"],
	// 			  backgroundColor: "rgba(0,0,0,0.2)",
	// 			  borderColor: "#000",
	// 			  data: [{
	// 				x: 3979083,
	// 				y: 6.994,
	// 				r: 15
	// 			  }]
	// 			}, {
	// 			  label: ["Japan"],
	// 			  backgroundColor: "rgba(193,46,12,0.2)",
	// 			  borderColor: "rgba(193,46,12,1)",
	// 			  data: [{
	// 				x: 4931877,
	// 				y: 5.921,
	// 				r: 15
	// 			  }]
	// 			}
	// 		  ]
	// 		},
	// 		options: {
	// 		  title: {
	// 			display: true,
	// 			text: 'Predicted world population (millions) in 2050'
	// 		  }, scales: {
	// 			yAxes: [{ 
	// 			  scaleLabel: {
	// 				display: true,
	// 				labelString: "Happiness"
	// 			  }
	// 			}],
	// 			xAxes: [{ 
	// 			  scaleLabel: {
	// 				display: true,
	// 				labelString: "GDP (PPP)"
	// 			  }
	// 			}]
	// 		  }
	// 		}
	// 	});

	// }
	// size(true);
	
	// }());