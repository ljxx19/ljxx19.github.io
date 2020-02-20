am4core.ready(function() {

  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end
  
  // Create chart instance
  var chart = am4core.create("chartdiv1", am4charts.PieChart);
  
  // Add and configure Series
  var pieSeries = chart.series.push(new am4charts.PieSeries());
  pieSeries.dataFields.value = "number";
  pieSeries.dataFields.category = "room";
  
  // Let's cut a hole in our Pie chart the size of 30% the radius
  chart.innerRadius = am4core.percent(30);
  
  // Put a thick white border around each Slice
  pieSeries.slices.template.stroke = am4core.color("#fff");
  pieSeries.slices.template.strokeWidth = 2;
  pieSeries.slices.template.strokeOpacity = 1;
  pieSeries.slices.template
    // change the cursor on hover to make it apparent the object can be interacted with
    .cursorOverStyle = [
      {
        "property": "cursor",
        "value": "pointer"
      }
    ];
  
    pieSeries.alignLabels = false;
    pieSeries.labels.template.bent = true;
  // pieSeries.labels.template.radius = 1;
  // pieSeries.labels.template.padding(0,0,0,0);
  
  // pieSeries.ticks.template.disabled = true;
  pieSeries.labels.template.text = "{category}: {value.value}";
  
  // Create a base filter effect (as if it's not there) for the hover to return to
  var shadow = pieSeries.slices.template.filters.push(new am4core.DropShadowFilter);
  shadow.opacity = 0;
  
  // Create hover state
  var hoverState = pieSeries.slices.template.states.getKey("hover"); // normally we have to create the hover state, in this case it already exists
  
  // Slightly shift the shadow and make it more prominent on hover
  var hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter);
  hoverShadow.opacity = 0.7;
  hoverShadow.blur = 5;
  var options = {
    title : 'Company Performance',
			chartArea : {
				top: "30",
				bottom: "30",
				height: "100%",
				width: "100%"
			}
  };
  
  
  // Add a legend
  chart.legend = new am4charts.Legend();
  
  chart.data = [{
    "room": "100 sq.m. ",
    "number": 3
  },{
    "room": "135 sq.m. ",
    "number": 28
  }, {
    "room": "150 sq.m. ",
    "number": 30
  }, {
    "room": "170 sq.m. ",
    "number": 7
  }, {
    "country": "UK",
    "litres": 99
  }, {
    "country": "Belgium",
    "litres": 60
  }];
  
  });