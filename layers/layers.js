var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ADM_WINDUJAYA_1 = new ol.format.GeoJSON();
var features_ADM_WINDUJAYA_1 = format_ADM_WINDUJAYA_1.readFeatures(json_ADM_WINDUJAYA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADM_WINDUJAYA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADM_WINDUJAYA_1.addFeatures(features_ADM_WINDUJAYA_1);
var lyr_ADM_WINDUJAYA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADM_WINDUJAYA_1, 
                style: style_ADM_WINDUJAYA_1,
                popuplayertitle: "ADM_WINDUJAYA",
                interactive: true,
                title: '<img src="styles/legend/ADM_WINDUJAYA_1.png" /> ADM_WINDUJAYA'
            });
var format_jalan_windujaya_2 = new ol.format.GeoJSON();
var features_jalan_windujaya_2 = format_jalan_windujaya_2.readFeatures(json_jalan_windujaya_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_windujaya_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_windujaya_2.addFeatures(features_jalan_windujaya_2);
var lyr_jalan_windujaya_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_windujaya_2, 
                style: style_jalan_windujaya_2,
                popuplayertitle: "jalan_windujaya",
                interactive: true,
                title: '<img src="styles/legend/jalan_windujaya_2.png" /> jalan_windujaya'
            });
var format_sungai_windujaya_3 = new ol.format.GeoJSON();
var features_sungai_windujaya_3 = format_sungai_windujaya_3.readFeatures(json_sungai_windujaya_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sungai_windujaya_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sungai_windujaya_3.addFeatures(features_sungai_windujaya_3);
var lyr_sungai_windujaya_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sungai_windujaya_3, 
                style: style_sungai_windujaya_3,
                popuplayertitle: "sungai_windujaya",
                interactive: true,
                title: '<img src="styles/legend/sungai_windujaya_3.png" /> sungai_windujaya'
            });
var format_Lapisan1_4 = new ol.format.GeoJSON();
var features_Lapisan1_4 = format_Lapisan1_4.readFeatures(json_Lapisan1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lapisan1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lapisan1_4.addFeatures(features_Lapisan1_4);
var lyr_Lapisan1_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lapisan1_4, 
                style: style_Lapisan1_4,
                popuplayertitle: "Lapisan 1",
                interactive: true,
    title: 'Lapisan 1<br />\
    <img src="styles/legend/Lapisan1_4_0.png" /> Titik 6 Kelompok 5<br />\
    <img src="styles/legend/Lapisan1_4_1.png" /> Titik 7 Kelompok 5<br />\
    <img src="styles/legend/Lapisan1_4_2.png" /> Titik 8 Kelompok 5<br />\
    <img src="styles/legend/Lapisan1_4_3.png" /> Titik 9 Kelompok 5<br />\
    <img src="styles/legend/Lapisan1_4_4.png" /> Titik 10 Kelompok 5<br />'
        });
var format_Lapisan2_5 = new ol.format.GeoJSON();
var features_Lapisan2_5 = format_Lapisan2_5.readFeatures(json_Lapisan2_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lapisan2_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lapisan2_5.addFeatures(features_Lapisan2_5);
var lyr_Lapisan2_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lapisan2_5, 
                style: style_Lapisan2_5,
                popuplayertitle: "Lapisan 2",
                interactive: true,
    title: 'Lapisan 2<br />\
    <img src="styles/legend/Lapisan2_5_0.png" /> Titik 1 Kelompok 5<br />\
    <img src="styles/legend/Lapisan2_5_1.png" /> Titik 2 Kelompok 5<br />\
    <img src="styles/legend/Lapisan2_5_2.png" /> Titik 3 Kelompok 5<br />\
    <img src="styles/legend/Lapisan2_5_3.png" /> Titik 4 Kelompok 5<br />\
    <img src="styles/legend/Lapisan2_5_4.png" /> Titik 5 Kelompok 5<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_ADM_WINDUJAYA_1.setVisible(true);lyr_jalan_windujaya_2.setVisible(true);lyr_sungai_windujaya_3.setVisible(true);lyr_Lapisan1_4.setVisible(true);lyr_Lapisan2_5.setVisible(false);
var layersList = [lyr_OSMStandard_0,lyr_ADM_WINDUJAYA_1,lyr_jalan_windujaya_2,lyr_sungai_windujaya_3,lyr_Lapisan1_4,lyr_Lapisan2_5];
lyr_ADM_WINDUJAYA_1.set('fieldAliases', {'objectid': 'objectid', 'provinsi': 'provinsi', 'kabupaten': 'kabupaten', 'kecamatan': 'kecamatan', 'desa': 'desa', 'kode_dagri': 'kode_dagri', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_jalan_windujaya_2.set('fieldAliases', {'fid': 'fid', 'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_sungai_windujaya_3.set('fieldAliases', {'fid': 'fid', 'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Lapisan1_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Lapisan2_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ADM_WINDUJAYA_1.set('fieldImages', {'objectid': '', 'provinsi': '', 'kabupaten': '', 'kecamatan': '', 'desa': '', 'kode_dagri': '', 'shape_leng': '', 'shape_area': '', });
lyr_jalan_windujaya_2.set('fieldImages', {'fid': '', 'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_sungai_windujaya_3.set('fieldImages', {'fid': 'TextEdit', 'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Lapisan1_4.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Lapisan2_5.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_ADM_WINDUJAYA_1.set('fieldLabels', {'objectid': 'no label', 'provinsi': 'no label', 'kabupaten': 'no label', 'kecamatan': 'no label', 'desa': 'inline label - always visible', 'kode_dagri': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_jalan_windujaya_2.set('fieldLabels', {'fid': 'no label', 'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'inline label - always visible', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_sungai_windujaya_3.set('fieldLabels', {'fid': 'no label', 'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'inline label - always visible', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Lapisan1_4.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'inline label - always visible', 'timestamp': 'inline label - always visible', 'begin': 'inline label - always visible', 'end': 'inline label - always visible', 'altitudeMode': 'inline label - always visible', 'tessellate': 'inline label - always visible', 'extrude': 'inline label - always visible', 'visibility': 'inline label - always visible', 'drawOrder': 'inline label - always visible', 'icon': 'inline label - always visible', });
lyr_Lapisan2_5.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'inline label - always visible', 'timestamp': 'inline label - visible with data', 'begin': 'inline label - always visible', 'end': 'inline label - always visible', 'altitudeMode': 'inline label - always visible', 'tessellate': 'inline label - always visible', 'extrude': 'inline label - always visible', 'visibility': 'inline label - always visible', 'drawOrder': 'inline label - always visible', 'icon': 'inline label - always visible', });
lyr_Lapisan2_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});