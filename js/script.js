 $(document).ready(function(){
 //var google;
 google.charts.load("current", {packages:["corechart"]});
 google.charts.setOnLoadCallback(drawChart);
 function drawChart() {
 	var data = google.visualization.arrayToDataTable([
 		['Task', 'Hours per Day'],
 		['Work',     11],
 		['Eat',      2],
 		['Commute',  2],
 		['Watch TV', 2],
 		['Sleep',    7]
 		]);

 	var options = {
 		title: '',
 		pieHole: 0.5,
 	};

 	var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
 	chart.draw(data, options);
        //chart.height = 200;
    }
});

// performance
$(document).ready(function(){
	google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['year', 'data'],
          ['2013',  1000],
          ['2014',  1170],
          ['2015',  660],
          ['2016',  1030]
        ]);

        var options = {
          // title: 'Company Performance',
          // hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
          // vAxis: {minValue: 0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
});
    // countribe
    $(document).ready(function(){
    	google.charts.load('current', {'packages':['corechart']});
    	google.charts.setOnLoadCallback(drawChart);

    	function drawChart() {

    		var data = google.visualization.arrayToDataTable([
    			['Effort', 'Amount given'],
    			['My all',     100],
    			]);

    		var options = {
    			pieHole: 0.5,
    			pieSliceTextStyle: {
    				color: 'black',
    			},
    			legend: 'none'
    		};

    		var chart = new google.visualization.PieChart(document.getElementById('donut_single'));
    		chart.draw(data, options);
    	}
    });

 // column chart
 $(document).ready(function(){
 	google.charts.load('current', {'packages':['bar']});
 	google.charts.setOnLoadCallback(drawChart);

 	function drawChart() {
 		var data = google.visualization.arrayToDataTable([
 			['Year', 'Sales', 'Expenses', 'Profit'],
 			['2014', 1000, 400, 200],
 			['2015', 1170, 460, 250],
 			['2016', 660, 1120, 300],
 			['2017', 1030, 540, 350]
 			]);

 		var options = {
 			chart: {
 				// title: 'Company Performance',
 				// subtitle: 'Sales, Expenses, and Profit: 2014-2017',
 			}
 		};

 		var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

 		chart.draw(data, google.charts.Bar.convertOptions(options));
 	}
 });

 
$(document).ready(function(){
    	google.charts.load('current', {'packages':['corechart']});
    	google.charts.setOnLoadCallback(drawChart);

    	function drawChart() {

    		var data = google.visualization.arrayToDataTable([
    			['Effort', 'Amount given'],
    			['My all',     100],
    			]);

    		var options = {
    			pieHole: 0.5,
    			pieSliceTextStyle: {
    				color: 'black',
    			},
    			legend: 'none'
    		};

    		var chart = new google.visualization.PieChart(document.getElementById('donut_single_middle'));
    		chart.draw(data, options);
    	}
 });