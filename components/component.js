// Constants
const user = {
    name:'Gabriel Medina',
    image:'https://pbs.twimg.com/profile_images/750391781901164545/xA8M-3pB_400x400.jpg',
    role:"Funcionário"
}

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

// Components
const Header = () => {
    return `<header>
    </header>`
}

const Drawer = () => {
    return `<div id='drawer'>
    <div class='user-content'>
    <img class='user-image' src="${user.image}"/>
    <div class='user-data'>
    <h4>${user.name}</h4>
    <h5>${user.role}</h5>
    </div>
    </div>
    <div class='links-content'>
    <a><li>Link Pagina</li></a>
    <a><li>Link Pagina</li></a>
    <a><li>Link Pagina</li></a>
    <a><li>Link Pagina</li></a>
    </div>
    </div>`
}

const Checkbox = (label) => {
    return `<label class="checkbox-content">
    <input type="checkbox" />
    ${label ||'Label'}
    </label>`
}

const Post = (user, index) =>{
    const {image, username, description, date} = user;
    return `
    <li onclick='postClick(${index})' class="post-content" key="${'post-item'+index}" id="${index}">
    <img src="${image}"
        class="post-image" />
    <div class="instagram-bar">
        <span id="instagram-bar-left-content">
            <button class="icon-button">
                <i class="far fa-heart"></i>
            </button>
            <button class="icon-button">
                <i class="far fa-comment"></i>
            </button>
        </span>
        <button class="icon-button">
            <i class="far fa-bookmark"></i>
        </button>
    </div>
    <div class="post-data-container">
        <h4 class="post-username">${username}</h4>
        <h5 class="post-description">${description}</h5>
        <h6 class="post-date">${date}m ago</h6>
    </div>
</li>`
}

const PostContent = (user, index) =>{
    const {image, username, description, date} = user;
}

export { Header, Drawer, Checkbox, Post, postsList, PostContent}