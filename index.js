class GBIFMap extends HTMLElement {
  async connectedCallback () {
    this.sDOM = this.attachShadow({ mode: 'closed' });

    this.sDOM.innerHTML = ``;
  }
}

customElements.define('gbif-map', GBIFMap);
