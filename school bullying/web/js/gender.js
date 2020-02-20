am4core.ready(function() {

    // Themes begin
    // Themes end
    
    // Create chart instance
    var chart = am4core.create("chartdiva", am4charts.XYChart);
    
    // Title
    var title = chart.titles.push(new am4core.Label());
    title.text = "Percentage of boys and girls affected by different types of bullying";
    title.fontSize = 25;
    title.marginBottom = 15;
    
    // Add data
    chart.data = [{
      
      "category": "Bullyings among students aged 13-15",
      "negative1": -28.2,
      
      
      "positive2": 30.5
    }, {
      "category": "bullying by hitting kicking and shaving around or locking indoors ",
      "negative1": -10.1,
      
      
      "positive2": 21.5
    }, {
      "category": "bullying by leaving out activities on purpose or ignoring",
      "negative1": -6.1,
      
      "positive2": 4.7
    }, {
      "category": "bullying by making fun with sexual jokes, comments or gestures",
      "negative1": -10.3,
      
      "positive2": 11.6
    }, {
      "category": "cyberbullying by messages among students",
      "negative1": -11.8,
      
      "positive2": 9.3
    }, {
      "category": "cyberbullying by photos among students",
      "negative1": -14,
      
      "positive2": 16
    }, {
      "category": "physiacal fights among students",
      "negative1": -25.4,
      
      "positive2": 45.5
    }, {
      "category": "physical attacks against students",
      "negative1": -25.9,
      
      "positive2": 38.6
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

    
    // Create axes
    var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.renderer.axisFills.template.disabled = false;
    categoryAxis.renderer.axisFills.template.fillOpacity = 0.05;
    
    
    var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.min = -100;
    valueAxis.max = 100;
    valueAxis.renderer.minGridDistance = 50;
    valueAxis.renderer.ticks.template.length = 5;
    valueAxis.renderer.ticks.template.disabled = false;
    valueAxis.renderer.ticks.template.strokeOpacity = 0.4;
    valueAxis.renderer.labels.template.adapter.add("text", function(text) {
      return text == "Male" || text == "Female" ? text : text + "%";
    })
    
    // Legend
    chart.legend = new am4charts.Legend();
    chart.legend.position = "right";
    chart.legend.width = 100;
    
    // Use only absolute numbers
    chart.numberFormatter.numberFormat = "#.#s";
    
    // Create series
    function createSeries(field, name, color) {
      var series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueX = field;
      series.dataFields.categoryY = "category";
      series.stacked = true;
      series.name = name;
      series.stroke = color;
      series.fill = color;
      
      var label = series.bullets.push(new am4charts.LabelBullet);
      label.label.text = "{valueX}%";
      label.label.fill = am4core.color("#fff");
      label.label.strokeWidth = 0;
      label.label.truncate = false;
      label.label.hideOversized = true;
      label.locationX = 0.5;
      return series;
    }
    
    var interfaceColors = new am4core.InterfaceColorSet();
    var positiveColor = interfaceColors.getFor("positive");
    var negativeColor = interfaceColors.getFor("negative");
    
    
    createSeries("negative1", "Female", negativeColor);
    
    createSeries("positive2", "Male", positiveColor);
    
    chart.legend.events.on("layoutvalidated", function(event){
      chart.legend.itemContainers.each((container)=>{
        if(container.dataItem.dataContext.name == "Never"){
          container.toBack();
        }
      })
    })
    
    }); 