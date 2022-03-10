const textMenuList = document.querySelectorAll(".switch-text-menu") //заголовки выбора
const textHeaderMenu = document.querySelectorAll("p.header-text-menu") //заголовки меню
const headerLine = document.querySelector("hr")  //линия
const itemSwitchStyle = document.querySelector(".slider") //ползунок, меняющий тему
const bodyWeb = document.querySelector("body") //тело 
const menuWeb = document.querySelector(".menu") //менюшка

const idmonument = document.querySelector("#monument")
const idarchitecture = document.querySelector("#architecture")
const idcoprs = document.querySelector("#coprs")
const idhostel = document.querySelector("#hostel")
const idcatering = document.querySelector("#catering")
const idkafe = document.querySelector("#kafe")
const idpark = document.querySelector("#park")
const idcinema = document.querySelector("#cinema")
const idmuseum = document.querySelector("#museum")

console.log(idhostel)


let clickNode = undefined
let switchStyle = false


//объект, хранящий цвета для светлой и тёмной темы + шрифты
let themeStyle = {
    bodyBackgroundColor: "white",
    menuBackgroundColor: "white",

    textSwitchColor: "black",
    textHeaderColor: "rgb(32, 29, 29)",
    defaultTextColor: "black",

    defaultFontSize: "16px",
    clickFontSize: "17px",
    mousedownFontSize: "14px",

    lineColor: "gray",
}
