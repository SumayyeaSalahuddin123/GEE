// HSV-based Pan-Sharpening.

// Grab a sample L8 image and pull out the RGB and pan bands.
var image = ee.Image(ee.ImageCollection('LANDSAT/LC08/C01/T1_TOA')
              .filterDate('2021-01-01', '2021-12-31')
              .filterBounds(ee.Geometry.Point(73.23, 34.20))
              .sort('CLOUD_COVER')
              .first());

var rgb = image.select('B4', 'B3', 'B2');
var pan = image.select('B8');

// Convert to HSV, swap in the pan band, and convert back to RGB.
var huesat = rgb.rgbToHsv().select('hue', 'saturation');
var upres = ee.Image.cat(huesat, pan).hsvToRgb();

// There are many fine places to look; here is one.  Comment
// this out if you want to twiddle knobs while panning around.
Map.setCenter(73.23, 34.20, 14);

// Display before and after layers using the same vis parameters.
Map.addLayer(rgb, {max: 0.3}, 'Original');
Map.addLayer(upres, {max: 0.3}, 'Pansharpened');
