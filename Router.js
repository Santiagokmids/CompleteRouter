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