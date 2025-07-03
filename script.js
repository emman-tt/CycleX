let number = document.getElementById("number");
const target = +number.getAttribute("data-target");
let hasCounted = false;

function animate() {
    const current = +number.innerText;
    const increase = Math.ceil(target / 100);

    if (current < target) {
        number.innerText = current + increase;
        setTimeout(animate, 20);
    } else {
        number.innerText = target;
    }
}

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

window.addEventListener("scroll", function () {
    if (!hasCounted && isInViewport(number)) {
        animate();
        hasCounted = true;
    }
});
