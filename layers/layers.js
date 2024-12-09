var wms_layers = [];


        var lyr_GoogleEarth_0 = new ol.layer.Tile({
            'title': 'Google Earth',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_NLSOld1_1 = new ol.layer.Tile({
            'title': 'NLS Old 1',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://api.maptiler.com/tiles/uk-osgb10k1888/{z}/{x}/{y}.jpg?key=0e1FOgfCSpysyBGm1F79'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_ChurchFmIpGeoRefPng_georeferenced_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Church Fm Ip - GeoRef Png_georeferenced",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ChurchFmIpGeoRefPng_georeferenced_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-221084.402368, 6991330.601398, -217907.443919, 6993128.530041]
                            })
                        });
var format_TempBrdr_4 = new ol.format.GeoJSON();
var features_TempBrdr_4 = format_TempBrdr_4.readFeatures(json_TempBrdr_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TempBrdr_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempBrdr_4.addFeatures(features_TempBrdr_4);
var lyr_TempBrdr_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TempBrdr_4, 
                style: style_TempBrdr_4,
                interactive: false,
                title: '<img src="styles/legend/TempBrdr_4.png" /> Temp Brdr'
            });
var format_POIsetc_5 = new ol.format.GeoJSON();
var features_POIsetc_5 = format_POIsetc_5.readFeatures(json_POIsetc_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POIsetc_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POIsetc_5.addFeatures(features_POIsetc_5);
var lyr_POIsetc_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POIsetc_5, 
                style: style_POIsetc_5,
                interactive: false,
                title: '<img src="styles/legend/POIsetc_5.png" /> POIs etc.'
            });
var format_FPs_6 = new ol.format.GeoJSON();
var features_FPs_6 = format_FPs_6.readFeatures(json_FPs_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FPs_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FPs_6.addFeatures(features_FPs_6);
var lyr_FPs_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FPs_6, 
                style: style_FPs_6,
                interactive: false,
                title: '<img src="styles/legend/FPs_6.png" /> FPs'
            });

lyr_GoogleEarth_0.setVisible(true);lyr_NLSOld1_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_ChurchFmIpGeoRefPng_georeferenced_3.setVisible(true);lyr_TempBrdr_4.setVisible(true);lyr_POIsetc_5.setVisible(true);lyr_FPs_6.setVisible(true);
var layersList = [lyr_GoogleEarth_0,lyr_NLSOld1_1,lyr_OpenStreetMap_2,lyr_ChurchFmIpGeoRefPng_georeferenced_3,lyr_TempBrdr_4,lyr_POIsetc_5,lyr_FPs_6];
lyr_TempBrdr_4.set('fieldAliases', {'FID': 'FID', });
lyr_POIsetc_5.set('fieldAliases', {'FID': 'FID', });
lyr_FPs_6.set('fieldAliases', {'FID': 'FID', });
lyr_TempBrdr_4.set('fieldImages', {'FID': '', });
lyr_POIsetc_5.set('fieldImages', {'FID': '', });
lyr_FPs_6.set('fieldImages', {'FID': '', });
lyr_TempBrdr_4.set('fieldLabels', {'FID': 'no label', });
lyr_POIsetc_5.set('fieldLabels', {'FID': 'no label', });
lyr_FPs_6.set('fieldLabels', {'FID': 'no label', });
lyr_FPs_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});