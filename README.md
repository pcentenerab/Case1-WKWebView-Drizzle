# Case1-WKWebView-Drizzle

## Secciones

- [General](#general)
- [Primeros pasos](#primeros_pasos)
- [Uso](#uso)
- [Contribución](#contribucion)

## General <a name = "general"></a>

Este repositorio forma parte del proyecto correspondiente a mi Trabajo de Fin de Grado del Grado en Ingeniería de Tecnologías y Servicios de la Telecomunicación en la Universidad Politécnica de Madrid: Desarrollo de un servicio de gestión de asignaturas basado en Blockchain e implementación de clientes nativos para dispositivos iOS. Mi tutor durante el desarrollo del trabajo, defendido en junio de 2020, ha sido Santiago Pavón.

En concreto, Case1-WKWebView-Drizzle es una aplicación iOS desarrollada con Xcode que permite la comunicación con una red de tipo Blockchain con Ganache. Esta aplicación es híbrida entre Swift y Javascript, que se comunican por medio de un elemento WKWebView del paquete Webkit de Swift. Javascript utiliza la librería Drizzle para acceder al nodo de Ganache.

## Primeros pasos <a name = "primeros_pasos"></a>

Se debe clonar el repositorio e instalar las dependencias necesarias para que este caso tenga todos los recursos necesarios para su correcta ejecución.

### Prerrequisitos

Se debe haber instalado y configurado el proyecto Contador-Contracts disponible en [este repositorio](https://github.com/pcentenerab/Contador-Contract).

### Instalación

Para instalar el proyecto en el entorno, hay que ejecutar los siguientes comandos desde un terminal.

```
$ git clone https://github.com/pcentenerab/Case1-WKWebView-Drizzle 
$ cd Case1-WKWebView-Drizzle/Case1-WKWebView-Drizzle/JavascriptCode 
$ npm update
$ npm install
$ browserify requireDrizzle.js -o packedDrizzle.js
```

Además, tras haber desplegado el contrato Contador en Ganache por medio del proyecto Truffle, se debe recoger el contenido del fichero Contract.json del directorio build/contracts. Dicho contenido se debe asignar a la variable Contador del fichero Contador.js en el directorio JavascriptCode del proyecto Xcode.


## Uso <a name = "uso"></a>

A partir de aquí, ya se tiene la aplicación instalada. Se abre el proyecto Xcode y se ejecuta.


## Contribución <a name = "contribucion"></a>

Este repositorio se enmarca en el proyecto ya mencionado, que proporciona una guía de desarrollo disponible para toda la comunidad de desarrolladores. Estaré encantada de recibir contribuciones al respecto para poder mejorar el potencial de la investigación.