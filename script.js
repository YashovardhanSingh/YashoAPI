const boxes = document.querySelectorAll("div");

boxes.forEach((box) => {

    const page = '/button/' + box.dataset.key + ".html";

    const width = box.offsetWidth;
    const height = box.offsetHeight;

    box.innerHTML = `<object type="text/html" data="${page}" width=${width} height=${height}></object>`;

    box.addEventListener("click", () => {
        window.open(page);
    })
})