// Constants
const user = {
    name:'Gabriel Medina',
    image:'https://pbs.twimg.com/profile_images/750391781901164545/xA8M-3pB_400x400.jpg',
    role:"Funcionário"
}

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

const Post = ({image, username, description, date}) =>{
    return `<li class="post-content">
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

export { Header, Drawer, Checkbox, Post}