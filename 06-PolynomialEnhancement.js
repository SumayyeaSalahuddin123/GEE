// Applies a non-linear contrast enhancement to a MODIS image using
// function -0.2 + 2.4x - 1.2x^2.

// Load a MODIS image and apply the scaling factor.
var img = ee.Image('MODIS/006/MOD09GA/2012_05_09')
            .select(['sur_refl_b01', 'sur_refl_b04', 'sur_refl_b03'])
            .multiply(0.0001);

var adj = img.polynomial([-0.2, 2.4, -1.2]);        // Apply the polynomial enhancement.

Map.setCenter(73.24, 34.19, 8);
Map.addLayer(img, {min: 0, max: 1}, 'original');
Map.addLayer(adj, {min: 0, max: 1}, 'adjusted');