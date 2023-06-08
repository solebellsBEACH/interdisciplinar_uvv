import { Drawer, Header } from "../../components/component.js";

function appendHtmlString(parentElement, htmlString) {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = htmlString;
  
    while (tempElement.firstChild) {
      parentElement.appendChild(tempElement.firstChild);
    }
  }

const container = document.getElementById('container');
appendHtmlString(container, Drawer())
appendHtmlString(container, Header())