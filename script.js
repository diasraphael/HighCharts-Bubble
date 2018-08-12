
Highcharts.chart('container', {

    chart: {
        type: 'bubble',
        plotBorderWidth: 1,
        marginTop: 0,
        marginRight: 0,
        zoomType: 'xy'
    },
    credits: {
      enabled: false
    },
    exporting: { 
      enabled: false 
    },
    legend: {
        enabled: false
    },
    title: {
        text: null  
    },

    xAxis: {
        gridLineWidth: 1,
        tickWidth: 0,
        title: {
            text: 'X axis'
        },
        labels: {
            format: '{value} gr'
        },
        plotLines: [{
            width: 2,
            value: 65,
            label: {
                rotation: 0,
                y: 15,
                style: {
                    fontStyle: 'italic'
                },
            },
            zIndex: 3
        }]
    },

    yAxis: {
        startOnTick: false,
        endOnTick: false,
        title: {
            text: 'Y axis'
        },
        labels: {
            format: '{value} gr'
        },
        maxPadding: 0.2,
        plotLines: [{
            width: 2,
            value: 50,
            label: {
                align: 'right',
                style: {
                    fontStyle: 'italic'
                },
                x: -10
            },
            zIndex: 3
        }]
    },

    tooltip: {
        useHTML: true,
        headerFormat: '<table>',
        pointFormat: '<tr><th colspan="2"><h3>{point.country}</h3></th></tr>' +
            '<tr><th>Fat intake:</th><td>{point.x}g</td></tr>' +
            '<tr><th>Sugar intake:</th><td>{point.y}g</td></tr>' +
            '<tr><th>Obesity (adults):</th><td>{point.z}%</td></tr>',
        footerFormat: '</table>',
        followPointer: true
    },

    series: [{
        data: [
            { x: 95, y: 95, z: 13.8, name: 'BE', country: 'Belgium', color: selectColor(13.8) },
            { x: 86.5, y: 102.9, z: 14.7, name: 'DE', country: 'Germany', color: selectColor(14.7) },
            { x: 80.8, y: 91.5, z: 15.8, name: 'FI', country: 'Finland' , color: selectColor(15.8)},
            { x: 80.4, y: 102.5, z: 12, name: 'NL', country: 'Netherlands', color: selectColor(12) },
            { x: 80.3, y: 86.1, z: 11.8, name: 'SE', country: 'Sweden', color: selectColor(11.8) },
            { x: 78.4, y: 70.1, z: 16.6, name: 'ES', country: 'Spain' , color: selectColor(16.6)},
            { x: 74.2, y: 68.5, z: 14.5, name: 'FR', country: 'France', color: selectColor(14.5) },
            { x: 73.5, y: 83.1, z: 10, name: 'NO', country: 'Norway', color: selectColor(10) },
            { x: 71, y: 93.2, z: 24.7, name: 'UK', country: 'United Kingdom', color: selectColor(24.7) },
            { x: 69.2, y: 57.6, z: 10.4, name: 'IT', country: 'Italy', color: selectColor(10.4) },
            { x: 68.6, y: 20, z: 16, name: 'RU', country: 'Russia', color: selectColor(16) },
            { x: 65.5, y: 126.4, z: 35.3, name: 'US', country: 'United States' , color: selectColor(35.3)},
            { x: 65.4, y: 50.8, z: 28.5, name: 'HU', country: 'Hungary', color: selectColor(28.5) },
            { x: 63.4, y: 51.8, z: 15.4, name: 'PT', country: 'Portugal', color: selectColor(15.4) },
            { x: 64, y: 82.9, z: 31.3, name: 'NZ', country: 'New Zealand' , color: selectColor(31.3)}
        ]
    }]

});

function selectColor(value){
		if(value>= 10 && value <=15){
    	 return '#E2A9F3';
    }else if(value>= 15 && value <=20){
    	 return '#D358F7';
    }else if(value>= 20 && value <=25){
    	 return '#CC2EFA';
    }else if(value>= 25 && value <=30){
    	 return '#BF00FF';
    }else if(value>= 30 && value <=35){
    	 return '#A901DB';
    }else if(value>= 30 && value <=40){
    	 return '#6A0888';
    }
  
}
