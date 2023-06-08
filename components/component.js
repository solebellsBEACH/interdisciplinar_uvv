const Header = () => {
    return `<header>
        <h1>Header</h1>
    </header>`
}
const user = {
    name:'Gabriel Medina',
    image:'https://pbs.twimg.com/profile_images/750391781901164545/xA8M-3pB_400x400.jpg',
    role:"Funcionário"
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
    </div>`
}

export { Header, Drawer }