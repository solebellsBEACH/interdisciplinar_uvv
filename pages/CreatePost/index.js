import { Drawer, Header} from "../../components/component.js";

function appendHtmlString(parentElement, htmlString) {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = htmlString;
  
    while (tempElement.firstChild) {
      parentElement.appendChild(tempElement.firstChild);
    }
};

const topContainer = document.getElementById('top-container');
appendHtmlString(topContainer, Drawer());
appendHtmlString(topContainer, Header());