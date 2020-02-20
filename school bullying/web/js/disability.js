am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create chart instance
    var chart = am4core.create("disability", am4charts.PieChart);
    
    // Add data
    chart.data = [
        { group: "behavioral and emotional disorders", cases: 35.3 },
        { group: 'autism', cases: 33.9},
        { group: 'intellectual disabilities', cases: 24.3},
        { group: 'health impairments', cases: 20.8},
        {group: 'learning disabilities', cases: 19},
    ];
    
    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "cases";
    pieSeries.dataFields.category = "group";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    pieSeries.alignLables = false;


    series.labelsContainer.width = 0.5;
    
    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
    
    }); // end am4core.ready()