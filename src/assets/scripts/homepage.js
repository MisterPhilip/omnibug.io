(() => {
    const el = document.getElementById("homepage-hero-screencap");
    let template = null;
    switch(window.browserName) {
        case "firefox":
            template = document.getElementById("screenshot-firefox");
            break;
        case "edge":
            template = document.getElementById("screenshot-edge");
            break;
        case "chrome":
        default:
            template = document.getElementById("screenshot-chrome");
            break;
    }
    if(template) {
        const templateCloned = template.content.cloneNode(true);
        while(el.firstChild) {
            el.removeChild(el.lastChild);
        }
        el.appendChild(templateCloned);
    }
})();
