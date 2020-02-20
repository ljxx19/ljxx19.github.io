am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create chart instance
    var chart = am4core.create("chartdivb", am4charts.XYChart);
    
    // Add data
    chart.data = [{
      "year": "Age 9",
      
      "b1": 43,
      
    }, {
      "year": "Age 10",
      
    }, {
      "year": "Age 11",
      
      "b3":32.6,
    }, {
      "year": "Age 12",
      "ph": 36.1,
        "pa": 33.5,
        "b1": 36,
        "b2":33,
        "b3":29.6,
      
    },  {
      "year": "Age 14",
      "ph": 37.1,
      "pa": 32,
      
      "b2":32.3,
      
    }, {
      "year": "Age 15",
      "ph": 35.4,
      "pa": 30.9,
      
      "b2":30.4,
      "b3":23.7,
    }];
    
    // Set cell size in pixels
var cellSize = 30;
chart.events.on("datavalidated", function(ev) {

  // Get objects of interest
  var chart = ev.target;
  var categoryAxis = chart.yAxes.getIndex(0);

  // Calculate how we need to adjust chart height
  var adjustHeight = chart.data.length * cellSize - categoryAxis.pixelHeight;

  // get current chart height
  var targetHeight = chart.pixelHeight + adjustHeight;

  // Set it on chart's container
  chart.svgContainer.htmlElement.style.height = targetHeight + "px";
});
    // Create category axis
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.renderer.opposite = true;
    
    // Create value axis
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.inversed = false;
    valueAxis.title.text = "Place taken";
    valueAxis.renderer.minLabelPosition = 0.01;
    
    // Create series
    var series1 = chart.series.push(new am4charts.LineSeries());
    series1.dataFields.valueY = "ph";
    series1.dataFields.categoryX = "year";
    series1.name = "Physical fights";
    series1.strokeWidth = 3;
    series1.bullets.push(new am4charts.CircleBullet());
    series1.tooltipText = "Place taken by {name} in {categoryX}: {valueY}";
    series1.legendSettings.valueText = "{valueY}";
    series1.visible  = false;
    
    var series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.valueY = "pa";
    series2.dataFields.categoryX = "year";
    series2.name = 'Physical attacks';
    series2.strokeWidth = 3;
    series2.bullets.push(new am4charts.CircleBullet());
    series2.tooltipText = "Place taken by {name} in {categoryX}: {valueY}";
    series2.legendSettings.valueText = "{valueY}";
    
    var series3 = chart.series.push(new am4charts.LineSeries());
    series3.dataFields.valueY = "b1";
    series3.dataFields.categoryX = "year";
    series3.name = 'Bullying (TIMSS Data)';
    series3.strokeWidth = 3;
    series3.bullets.push(new am4charts.CircleBullet());
    series3.tooltipText = "Place taken by {name} in {categoryX}: {valueY}";
    series3.legendSettings.valueText = "{valueY}";
    
    var series4 = chart.series.push(new am4charts.LineSeries());
    series4.dataFields.valueY = "b2";
    series4.dataFields.categoryX = "year";
    series4.name = 'Bullying (GSHS Data)';
    series4.strokeWidth = 3;
    series4.bullets.push(new am4charts.CircleBullet());
    series4.tooltipText = "Place taken by {name} in {categoryX}: {valueY}";
    series4.legendSettings.valueText = "{valueY}";

    var series5 = chart.series.push(new am4charts.LineSeries());
    series5.dataFields.valueY = "b3";
    series5.dataFields.categoryX = "year";
    series5.name = 'Bullying (HBSC Data)';
    series5.strokeWidth = 3;
    series5.bullets.push(new am4charts.CircleBullet());
    series5.tooltipText = "Place taken by {name} in {categoryX}: {valueY}";
    series5.legendSettings.valueText = "{valueY}";
    // Add chart cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "zoomY";
    
    // Add legend
    chart.legend = new am4charts.Legend();
    
    });