//Activa caracteristica de electron-comiple, herramienta de desarollo
import { enableLiveReload } from 'electron-compile'

module.exports = function devtools () {
  enableLiveReload()
}
