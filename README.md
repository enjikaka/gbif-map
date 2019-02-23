# `<gbif-map>`

A Leaflet based Web Component for displaying occurances of a GBIF entry on a map.

Note: Uses ResizeObserver. Polyfill it on your end.

## API

### Inputs

| Attribute | Description |
| --- | --- |
| `center-latitude` | Latitude value for the center point. Float32. |
| `center-longitude` | Longitude value for the center point. Float32. |
| `gbif-id` | The ID for the item on GBIF. Number. |
| `gbif-style` | The style for the GBIF layer. See link in developer notes to API with all styles listed. |
| `controls` | Wether or not to allow controls in the map. Boolean. |

## Usage

Install gbif-map via npm and import it in your webpack/rollup bundles.

Alternatively, import it in your ES module supported browser with `import 'https://unpkg.com/gbif-map?module';` in a JavaScript module file or in your HTML with `<script src="https://unpkg.com/gbif-map?module" type="module"></script>`. The demo page uses the latter method.

## Developer notes

GBIF API is available at https://www.gbif.org/developer/maps