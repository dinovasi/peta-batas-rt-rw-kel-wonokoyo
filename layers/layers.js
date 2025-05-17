var wms_layers = [];


        var lyr_BingAerial_0 = new ol.layer.Tile({
            'title': 'Bing Aerial',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://ecn.t3.tiles.virtualearth.net/tiles/a{q}.jpeg?g=1'
            })
        });

        var lyr_BingMap_1 = new ol.layer.Tile({
            'title': 'Bing Map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://ecn.dynamic.t0.tiles.virtualearth.net/comp/CompositionHandler/{q}?mkt=en-us&it=G,VE,BX,L,LA&shading=hill'
            })
        });

        var lyr_GoogleRoadOnly_2 = new ol.layer.Tile({
            'title': 'Google Road Only',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_3 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_OpenStreetMap_4 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleTraffic_5 = new ol.layer.Tile({
            'title': 'Google Traffic',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=h@159000000,traffic|seconds_into_week:-1&style=3&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleTrafficSatellite_6 = new ol.layer.Tile({
            'title': 'Google Traffic Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt0.google.com/vt?lyrs=s@159000000,traffic|seconds_into_week:-1&style=3&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleStreets_7 = new ol.layer.Tile({
            'title': 'Google Streets',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleTrafficRoadmap_8 = new ol.layer.Tile({
            'title': 'Google Traffic Roadmap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt0.google.com/vt?lyrs=m@159000000,traffic|seconds_into_week:-1&style=3&x={x}&y={y}&z={z}'
            })
        });
var format_RTRW005_9 = new ol.format.GeoJSON();
var features_RTRW005_9 = format_RTRW005_9.readFeatures(json_RTRW005_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RTRW005_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RTRW005_9.addFeatures(features_RTRW005_9);
var lyr_RTRW005_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RTRW005_9, 
                style: style_RTRW005_9,
                popuplayertitle: 'RT-RW005',
                interactive: true,
                title: '<img src="styles/legend/RTRW005_9.png" /> RT-RW005'
            });
var format_RTRW004_10 = new ol.format.GeoJSON();
var features_RTRW004_10 = format_RTRW004_10.readFeatures(json_RTRW004_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RTRW004_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RTRW004_10.addFeatures(features_RTRW004_10);
var lyr_RTRW004_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RTRW004_10, 
                style: style_RTRW004_10,
                popuplayertitle: 'RT-RW004',
                interactive: true,
                title: '<img src="styles/legend/RTRW004_10.png" /> RT-RW004'
            });
var format_RTRW003_11 = new ol.format.GeoJSON();
var features_RTRW003_11 = format_RTRW003_11.readFeatures(json_RTRW003_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RTRW003_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RTRW003_11.addFeatures(features_RTRW003_11);
var lyr_RTRW003_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RTRW003_11, 
                style: style_RTRW003_11,
                popuplayertitle: 'RT-RW003',
                interactive: true,
                title: '<img src="styles/legend/RTRW003_11.png" /> RT-RW003'
            });
var format_RTRW002_12 = new ol.format.GeoJSON();
var features_RTRW002_12 = format_RTRW002_12.readFeatures(json_RTRW002_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RTRW002_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RTRW002_12.addFeatures(features_RTRW002_12);
var lyr_RTRW002_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RTRW002_12, 
                style: style_RTRW002_12,
                popuplayertitle: 'RT-RW002',
                interactive: true,
                title: '<img src="styles/legend/RTRW002_12.png" /> RT-RW002'
            });
var format_RTRW001_13 = new ol.format.GeoJSON();
var features_RTRW001_13 = format_RTRW001_13.readFeatures(json_RTRW001_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RTRW001_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RTRW001_13.addFeatures(features_RTRW001_13);
var lyr_RTRW001_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RTRW001_13, 
                style: style_RTRW001_13,
                popuplayertitle: 'RT-RW001',
                interactive: true,
                title: '<img src="styles/legend/RTRW001_13.png" /> RT-RW001'
            });

lyr_BingAerial_0.setVisible(true);lyr_BingMap_1.setVisible(true);lyr_GoogleRoadOnly_2.setVisible(false);lyr_OSMStandard_3.setVisible(true);lyr_OpenStreetMap_4.setVisible(true);lyr_GoogleTraffic_5.setVisible(true);lyr_GoogleTrafficSatellite_6.setVisible(true);lyr_GoogleStreets_7.setVisible(true);lyr_GoogleTrafficRoadmap_8.setVisible(true);lyr_RTRW005_9.setVisible(true);lyr_RTRW004_10.setVisible(true);lyr_RTRW003_11.setVisible(true);lyr_RTRW002_12.setVisible(true);lyr_RTRW001_13.setVisible(true);
var layersList = [lyr_BingAerial_0,lyr_BingMap_1,lyr_GoogleRoadOnly_2,lyr_OSMStandard_3,lyr_OpenStreetMap_4,lyr_GoogleTraffic_5,lyr_GoogleTrafficSatellite_6,lyr_GoogleStreets_7,lyr_GoogleTrafficRoadmap_8,lyr_RTRW005_9,lyr_RTRW004_10,lyr_RTRW003_11,lyr_RTRW002_12,lyr_RTRW001_13];
lyr_RTRW005_9.set('fieldAliases', {'id': 'id', 'rt_rw': 'rt_rw', 'kk': 'kk', });
lyr_RTRW004_10.set('fieldAliases', {'id': 'id', 'rt_rw': 'rt_rw', 'kk': 'kk', });
lyr_RTRW003_11.set('fieldAliases', {'id': 'id', 'rt_rw': 'rt_rw', 'kk': 'kk', });
lyr_RTRW002_12.set('fieldAliases', {'id': 'id', 'rt_rw': 'rt_rw', 'kk': 'kk', });
lyr_RTRW001_13.set('fieldAliases', {'id': 'id', 'rt_rw': 'rt_rw', 'kk': 'kk', });
lyr_RTRW005_9.set('fieldImages', {'id': 'TextEdit', 'rt_rw': 'TextEdit', 'kk': 'TextEdit', });
lyr_RTRW004_10.set('fieldImages', {'id': 'TextEdit', 'rt_rw': 'TextEdit', 'kk': 'TextEdit', });
lyr_RTRW003_11.set('fieldImages', {'id': 'TextEdit', 'rt_rw': 'TextEdit', 'kk': 'TextEdit', });
lyr_RTRW002_12.set('fieldImages', {'id': 'TextEdit', 'rt_rw': 'TextEdit', 'kk': 'TextEdit', });
lyr_RTRW001_13.set('fieldImages', {'id': 'TextEdit', 'rt_rw': 'TextEdit', 'kk': 'TextEdit', });
lyr_RTRW005_9.set('fieldLabels', {'id': 'no label', 'rt_rw': 'inline label - visible with data', 'kk': 'inline label - visible with data', });
lyr_RTRW004_10.set('fieldLabels', {'id': 'no label', 'rt_rw': 'inline label - visible with data', 'kk': 'inline label - visible with data', });
lyr_RTRW003_11.set('fieldLabels', {'id': 'no label', 'rt_rw': 'inline label - visible with data', 'kk': 'inline label - visible with data', });
lyr_RTRW002_12.set('fieldLabels', {'id': 'no label', 'rt_rw': 'inline label - visible with data', 'kk': 'inline label - visible with data', });
lyr_RTRW001_13.set('fieldLabels', {'id': 'no label', 'rt_rw': 'inline label - visible with data', 'kk': 'inline label - visible with data', });
lyr_RTRW001_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});