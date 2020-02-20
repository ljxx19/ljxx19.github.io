am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    var chart = am4core.create("rotatingGlobe", am4maps.MapChart);
    
    // Set map definition
    chart.geodata = am4geodata_worldLow;
    
    // Set projection
    chart.projection = new am4maps.projections.Orthographic();
    chart.panBehavior = "rotateLongLat";
    chart.deltaLatitude = -20;
    chart.padding(20,20,20,20);
    
    
    // Create map polygon series
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    
    // Make map load polygon (like country names) data from GeoJSON
    polygonSeries.useGeodata = true;
    
    // Configure series
    var polygonTemplate = polygonSeries.mapPolygons.template;
    //polygonTemplate.tooltipText = "{name}";
    polygonTemplate.fill = am4core.color("#47c78a");
    polygonTemplate.stroke = am4core.color("#454a58");
    polygonTemplate.strokeWidth = 0.5;
    
    var graticuleSeries = chart.series.push(new am4maps.GraticuleSeries());
    graticuleSeries.mapLines.template.line.stroke = chart.colors.getIndex(2);
    graticuleSeries.mapLines.template.line.strokeOpacity = 0.08;
    graticuleSeries.fitExtent = false;
    
    
    chart.backgroundSeries.mapPolygons.template.polygon.fillOpacity = 0.1;
    chart.backgroundSeries.mapPolygons.template.polygon.fill = chart.colors.getIndex(3);
    
    // Create hover state and set alternative fill color
    //var hs = polygonTemplate.states.create("hover");
    //hs.properties.fill = chart.colors.getIndex(0).brighten(-0.5);
    
    let animation;
    setTimeout(function(){
      animation = chart.animate({property:"deltaLongitude", to:100000}, 20000000);
    }, 3000)
    
    chart.seriesContainer.events.on("down", function(){
    if(animation){
      animation.stop();
    }
    })

    var treeCities = [
        { country: "Hong Kong, China", percentage: 32, lat: 22.3193, lng: 114.1694 },
        { country: "Bulgaria", percentage: 25, lat: 42.7339, lng: 25.4858 },
        { country: "Japan", percentage: 22, lat: 36.2048, lng: 138.2529 },
        { country: "Qatar", percentage: 25, lat: 25.3548, lng: 51.1839 },
        { country: "Tunisia", percentage: 28, lat: 33.8869, lng: 9.5375 },
        { country: "Latvia", percentage: 31, lat: 56.8796, lng: 24.6032 },
        { country: "United Arab Emirates", percentage: 27, lat: 23.4241, lng: 53.8478 },
        { country: "Czechia", percentage: 25, lat: 49.8175, lng: 15.4730 },
        { country: "Thailand", percentage: 27, lat: 15.8700, lng: 100.9925 },
        { country: "New Zealand", percentage: 26, lat: -40.9006, lng: 174.8860 },
        
    ];
    
    var circleSeries = chart.series.push(new am4maps.MapPolygonSeries())
    var circleTemplate = circleSeries.mapPolygons.template;
    circleTemplate.fill = am4core.color("#111111");
    circleTemplate.strokeOpacity = 0;
    circleTemplate.fillOpacity = 0.75;
    

    treeCities.forEach(function (city) {
        var polygon = circleSeries.mapPolygons.create();
        polygon.multiPolygon = am4maps.getCircle(city.lng, city.lat, city.percentage * 0.1);
        polygon.tooltipText = city.country + ": " + city.percentage + "%";
    });

    }); // end am4core.ready()