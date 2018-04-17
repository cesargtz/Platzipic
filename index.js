'use strict'

// Instanciando los Objetos app y BrowserWindopw
// const { app, BrowserWindow } = require('electron')

//con electron compile, para trabajar con sintaxis EcmaScript 6
import { app, BrowserWindow } from 'electron'
import devtools from './devtools' //devtools solo se usa en entorno de desarollo

//identificar si se esta trabajando en desarollo | variable de entorno
if (process.env.NODE_ENV === 'development') {
  devtools()
} //setear variable 'dev' en package.json

// Realiza un dir de todo el contenido del objeto app
// console.dir(app)

//Imprimiendo un Mensaje en la consola ante de salir
app.on('before-quit', () => {
  console.log('Saliendo..')
})

//Ejecutando ordenes cuando la aplicacion este lista.
app.on('ready', () => {
  //creando una ventana. Para agregar propiedades pasarlas por medio de un objeto
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    title: 'Hola Mundo',
    center: true,
    maximizable: false,
    show: false
  })

  /*evento en on() se ejecuta multiple veces y once() una sola vez.
  rady-to-show carga la vista de una url
  agregar la propiedad show: false*/
  win.once('ready-to-show',() => {
    win.show()
  })

  //cargar contenido desde remoto
  //win.loadURL('http://devdocs.io/')
  //${__dirname} es un helper que devolvera el directorio actual de donde estoy
  win.loadURL(`file://${__dirname}/renderer/index.html`)

  //detectando el cierre de la ventana para cerra el aplicativo
  win.on('close', () => {
    win = null //limpiar el objeto
    app.quit()
  })

  //cuando la ventana se mueve imprime sus cordenadas
  win.on('move', () => {
    const position = win.getPosition()
    console.log(`la variable position es ${position}`)
  })

})
