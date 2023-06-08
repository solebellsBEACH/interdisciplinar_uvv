import { Drawer, Header, Checkbox, Post } from "../../components/component.js";

const interestsList = ['Culinária', 'Esporte', 'Músicas', 'Festa', 'Viagens', 'Livros']
const postsList = [
  {
  image:'https://p2.trrsf.com/image/fget/cf/1200/1200/middle/images.terra.com/2022/02/02/1922049032-f64ca4a-como-tocar-guitarra.jpg',
  username:'Ana Maria',
  description:'Tocando minha música favorita',
  date:8
},
{
  image:'https://odia.ig.com.br/_midias/jpg/2023/01/05/1200x750/1_francisco_massaranduba_ufc_mma-27618109.jpg',
  username:'João Pedro',
  description:'Me preparando pra luta de sábado',
  date:3
},
{
  image:'https://s2.glbimg.com/v4dafND9ioyvKL4_nbvfacals-k=/smart/e.glbimg.com/og/ed/f/original/2020/04/01/gq104_skate_01.png',
  username:'Pedro Barros',
  description:'Mandando uma manobra de skate',
  date:1
},
{
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyi9aWoW4HO_KWbeNojiY4ub8r_l9romPA8TXXb-f5AdX7bF4WuJikgmYG7hPZIycDbgw&usqp=CAU',
  username:'Maria Paula',
  description:'Esse período a PSET ta sinistra',
  date:10
},
{
  image:'https://img.olympicchannel.com/images/image/private/t_social_share_thumb/f_auto/primary/vqys54onceefbza1qu9p',
  username:'Neymar JR',
  description:'Curtindo um frio',
  date:2
},
{
  image:'https://img.olympicchannel.com/images/image/private/t_social_share_thumb/f_auto/primary/vqys54onceefbza1qu9p',
  username:'Neymar JR',
  description:'Curtindo um frio',
  date:2
},
]

function appendHtmlString(parentElement, htmlString) {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = htmlString;
  
    while (tempElement.firstChild) {
      parentElement.appendChild(tempElement.firstChild);
    }
  }

const topContainer = document.getElementById('top-container');
appendHtmlString(topContainer, Drawer())
appendHtmlString(topContainer, Header())

const checkboxContent =  document.getElementById('checkboxs-content');
const interestsMap = interestsList.map(e=>Checkbox(e));
appendHtmlString(checkboxContent, interestsMap.join(''))

const postsContent =  document.getElementById('posts-content');
const postsMap = postsList.map(e=>Post(e));
appendHtmlString(postsContent, postsMap.join(''))


