import { Drawer, Header, PostContent, postsList } from "../../components/component.js";

function appendHtmlString(parentElement, htmlString) {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = htmlString;
  
    while (tempElement.firstChild) {
      parentElement.appendChild(tempElement.firstChild);
    }
};

const topContainer = document.getElementById('top-container');
appendHtmlString(topContainer, Drawer())
appendHtmlString(topContainer, Header())
const postId = parseInt(window.localStorage.getItem('post_id'))
const postContainer =  document.getElementById('post-container');
appendHtmlString(postContainer, PostContent(postsList[postId]))


