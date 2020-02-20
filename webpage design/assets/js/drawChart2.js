am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    var iconPath=`M406.6,62.4c-83.2-83.2-217.6-83.2-299.733,0c-83.2,83.2-83.2,216.533,0,299.733l149.333,150.4
	L405.533,363.2C488.733,280,488.733,145.6,406.6,62.4z M256.2,360C175.133,360,109,293.867,109,212.8S175.133,65.6,256.2,65.6s147.2,66.133,147.2,147.2
	S337.266,360,256.2,360z M325.533,140.267c-12.8-10.667-32-16-59.733-16h-62.933v177.067h39.467v-49.067h24.533
	c26.667,0,45.867-5.333,58.667-14.933c12.8-10.667,19.2-26.667,19.2-48C344.733,166.933,338.333,150.933,325.533,140.267z
	 M296.733,209.6c-4.267,5.333-13.867,7.467-26.667,7.467H243.4v-59.733h22.4c12.8,0,22.4,2.133,28.8,6.4
    c6.4,4.267,9.6,11.733,9.6,21.333C304.2,196.8,301,204.267,296.733,209.6z`
        
    var chart = am4core.create("chartdiv2", am4charts.SlicedChart);
    chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect
    chart.paddingLeft = 150;
    
    chart.data = [{
        "name": "Covered Space",
        "value": 60,
        "disabled":true
    }, {
        "name": "Open Space",
        "value": 25
    }];
    
    var series = chart.series.push(new am4charts.PictorialStackedSeries());
    series.dataFields.value = "value";
    series.dataFields.category = "name";
    // series.alignLabels = true;
    // this makes only A label to be visible
    // series.labels.template.propertyFields.disabled = "disabled";
    // series.ticks.template.propertyFields.disabled = "disabled";
    
    
    series.maskSprite.path = iconPath;
    series.ticks.template.locationX = 1;
    series.ticks.template.locationY = 0;
    
    series.labelsContainer.width = 100;
    
    chart.legend = new am4charts.Legend();
    chart.legend.position = "bottom";
    chart.legend.paddingRight = 100;
    chart.legend.paddingBottom = 10;
    let marker = chart.legend.markers.template.children.getIndex(0);
    chart.legend.markers.template.width = 40;
    chart.legend.markers.template.height = 40;
    marker.cornerRadius(20,20,20,20);
    
    });