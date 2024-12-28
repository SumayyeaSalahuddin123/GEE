var image = ee.Image('CGIAR/SRTM90_V4');            // Display an image given its ID.
Map.setCenter(73.24, 34.19, 9);                     // Center the Map.
Map.addLayer(image, {min: 0, max: 3000}, 'SRTM');   // Display the image