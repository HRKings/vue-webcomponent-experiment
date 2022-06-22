import { defineCustomElement } from 'vue'
import Button from './components/Button/Button.ce.vue'

const ButtonElement = defineCustomElement(Button)

customElements.define('vue-button', ButtonElement)
