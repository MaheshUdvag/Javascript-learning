const showImage = (brokenGlass) => {
    const img = document.getElementsByClassName("img")[0];
    while (brokenGlass[0]) {
        brokenGlass[0].parentNode.removeChild(brokenGlass[0])
    }
    img.style.transition = '2s';
    img.style.opacity = 1;
    img.removeEventListener('click', addGlass);
}

/**
 * Called whenever the image is clicked
 * and the glass is yet to be broken.
 * @param {*} e click event
 */
const addGlass = (e) => {

    const brokenGlass = document.getElementsByClassName('broken-glass');
    const image = document.getElementsByClassName('img')[0];

    /**
     * Display the actual image after 
     * 6 clicks.
     */
    if (brokenGlass.length >= 6) {
        showImage(brokenGlass);
        return;
    }

    const glass = createGlass(e);
    image.appendChild(glass);

    /**
     * Increase the opacity
     * on each glass break.
     */
    image.style.opacity = brokenGlass.length * 0.07;

    /**
     * Add glass lines.
     */
    for (let i = 0; i < 25; i++) {
        const newElement = document.createElement("div");
        newElement.className = 'line';
        glass.appendChild(newElement);
    }

    const elements = glass.getElementsByClassName("line");
    for (let element of elements) {
        /**
         * Set a random line break 
         * angle and postion.
         */
        setLinePosition(element);
    }
}

/**
 * Create a glass element and append 
 * it to the postion where the click 
 * occurred.
 * 
 * @param {*} e clickEvent
 * @returns glassElement
 */
const createGlass = (e) => {
    const glass = document.createElement('div');
    glass.className = 'broken-glass';
    var parentPosition = getPosition(e.currentTarget);
    var xPosition = e.clientX - parentPosition.x;
    var yPosition = e.clientY - parentPosition.y;

    glass.style.left = xPosition + "px";
    glass.style.top = yPosition + "px";
    glass.style.position = 'absolute';
    return glass;
}

const setLinePosition = (element) => {
    const randomAngle = Math.floor(Math.random() * 360);
    const positionTop = Math.floor(Math.random() * 30) - Math.floor(Math.random() * 30);
    const positionBottom = Math.floor(Math.random() * 30) - Math.floor(Math.random() * 30);
    const positionLeft = Math.floor(Math.random() * 30) - Math.floor(Math.random() * 30);
    const positionRight = Math.floor(Math.random() * 30) - Math.floor(Math.random() * 30);
    element.style.transform = `rotate(${randomAngle}deg)`;
    element.style.top = `${positionTop}px`;
    element.style.bottom = `${positionBottom}px`;
    element.style.left = `${positionLeft}px`;
    element.style.right = `${positionRight}px`;
}

const getPosition = (el) => {
    var xPos = 0;
    var yPos = 0;

    while (el) {
        if (el.tagName == "BODY") {
            var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
            var yScroll = el.scrollTop || document.documentElement.scrollTop;

            xPos += (el.offsetLeft - xScroll + el.clientLeft);
            yPos += (el.offsetTop - yScroll + el.clientTop);
        } else {
            xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
            yPos += (el.offsetTop - el.scrollTop + el.clientTop);
        }

        el = el.offsetParent;
    }
    return {
        x: xPos,
        y: yPos
    };
}

const replaceImage = (input) => {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            document.getElementById("photo").src = e.target.result;

            /**
             * Reset the glass and image.
             */
            const brokenGlass = document.getElementsByClassName('broken-glass');
            while (brokenGlass.length > 0 && brokenGlass[0]) {
                brokenGlass[0].parentNode.removeChild(brokenGlass[0])
            }
            const image = document.getElementsByClassName("img")[0];
            image.style.opacity = 0.1;
            image.style.transition = '0s';
            image.addEventListener('click', addGlass);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

window.addEventListener("load", (event) => {
    document.getElementsByClassName("img")[0].addEventListener('click', addGlass);
});