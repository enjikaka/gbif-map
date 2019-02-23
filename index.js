// @ts-ignore
import * as L from 'https://unpkg.com/leaflet@1.4.0/dist/leaflet-src.esm.js';

class GBIFMap extends HTMLElement {
  async connectedCallback () {
    this.sDOM = this.attachShadow({ mode: 'closed' });

    this.sDOM.innerHTML = `
      <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css">
      <style>
      :host {
        display: block;
        width: 100%;
        height: 100%;
        contain: strict;
        overflow: hidden;
        position: relative;
      }

      #map {
        width: 100%;
        height: 100%;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
      }

      :host-context(.map--no-controls) #map {
        pointer-events: none;
      }

      :host-context(.map--no-controls) .leaflet-control  {
        display: none;
      }

      .leaflet-control-attribution {
        display: none;
      }
      </style>
      <div id="map"></div>
    `;

    const mapWrapperElement = this.sDOM.querySelector('#map');

    const gbifId = this.getAttribute('gbif-id');
    const gbifStyle = this.getAttribute('gbif-style') || 'purpleHeat.point';
    const latitude = parseFloat(this.getAttribute('center-latitude'));
    const longitude = parseFloat(this.getAttribute('center-longitude'));
    const zoom = this.getAttribute('zoom') || 4;
    const enableControls = this.hasAttribute('controls');

    if (!enableControls) {
      this.classList.add('map--no-controls');
    }

    const map = L.map(mapWrapperElement).setView([latitude, longitude], zoom);

    const baseMap = L.tileLayer('https://{s}.tile.openstreetmap.se/hydda/base/{z}/{x}/{y}.png', {
      maxZoom: 18
    });

    const gbifOccurance = L.tileLayer(`https://api.gbif.org/v2/map/occurrence/density/{z}/{x}/{y}@1x.png?srs=EPSG:3857&style=${gbifStyle}&taxonKey=${gbifId}`);

    map.addLayer(baseMap);
    map.addLayer(gbifOccurance);
  }
}

customElements.define('gbif-map', GBIFMap);
