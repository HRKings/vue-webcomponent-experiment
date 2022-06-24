import { defineCustomElement } from 'vue'

const modules = import.meta.globEager('./components/**/*.vue')

for(const individualImport in modules) {
  const webComponent = defineCustomElement(modules[individualImport]);
  customElements.define(modules[individualImport].name, webComponent);
}
