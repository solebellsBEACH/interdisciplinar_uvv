import { Drawer, Header, Checkbox, Post, postsList } from "../../components/component.js";

const interestsList = ['Culinária', 'Esporte', 'Músicas', 'Festa', 'Viagens', 'Livros']

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

const checkboxContent =  document.getElementById('checkboxs-content');
const interestsMap = interestsList.map(e=>Checkbox(e));
appendHtmlString(checkboxContent, interestsMap.join(''))

const postsContent =  document.getElementById('posts-content');
const postsMap = postsList.map((e, i)=>Post(e, i));
appendHtmlString(postsContent, postsMap.join(''));