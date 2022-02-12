const routes = {
    '/' : Home,
    '/about' : About,
    '/p/:id' : PostShow,
    '/register' : Register
};

const router = async () => {

    const content = null || document.getElementById('page_container');
    let request = Utils.parseRequestURL();
    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
    let page = routes[parsedURL] ? routes[parsedURL] : Error404
    content.innerHTML = await page.render();
    await page.after_render();
}

window.addEventListener('hashchange', router);
window.addEventListener('Load', router);

parseRequestURL: () => {

    let url = location.hash.slice(1).toLowerCase() || '/';
    let r = url.split("/")

    let request = {
        resource = null,
        id = null,
        verb = null
    }

    request.resource = r[1]
    request.id = r[2]
    request.verb = r[3]

    return request
}

const routes = {
    '/'             : Home
    , '/about'      : About
    , '/p/:id'      : PostShow
    , '/register'   : Register
};

content.innerHTML = await page.render();

let About = {
    render : async () => {
        let view = /*html*/`
            <section class = "section">
                <h1> About </h1>
            </section>
        `

        return view
    }
}

export default About;

let About = /*html*/`
        <section class = "section">
          <h1> About </h1>
        </section>  
        `

export default About;

let About = {
    render : async () => {
        let view = /*html*/`
        <section class = "section">
            <h1> About </h1>
            <button id = "myBtn"> Button </button>
        </section>
    `

    return view
    },
    after_render : async () => {
        document.getElementById("myBtn").addEventListener("click", () => {  
            console.log('Yo')
            alert('Yo')
        })
    }
}

export default About;

content.innerHTML = await page.render();
await page.after_render();

let Bottombar = {
    render: async () => {
        let view = /*html*/`
        <footer class = "footer">
            <div class = "conter has-text-centered">
                <p>
                    This is my foot. There are many like it, but this one is mine.
                </p>
            </div>
        </footer>
        `
        return view
    },
    after_render: async () => { }
}

export default Bottombar;

const router = async () => {
    const header = null || document.getElementById('header_container');
    const content = null || document.getElementById('page_container');
    const footer = null || document.getElementById('footer_container');
    
    header.innerHTML = await Navbar.render();
    await Navbar.after_render();
    footer.innerHTML = await Bottombar.render();
    await Bottombar.after_render();
}