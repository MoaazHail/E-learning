
const previewContainer = document.querySelector(".courses-preview")
const previewCard = document.querySelectorAll(".courses-preview .preview")
document.querySelectorAll(".our-courses .courses .card").forEach((course) => {
    course.onclick = () => {
        previewContainer.style.display = "flex"

        let name = course.getAttribute('data-name')
        console.log("name :" + name)

        previewCard.forEach(card => {
            let target = card.getAttribute("data-target")
            console.log("target :" + target)
            if (name === target) {
                card.classList.toggle("active")
            }
        })
    }
});


//-------------------------------------------------------------------------------------
const filter_li = document.querySelectorAll('.filter li')
const course = Array.from(document.querySelectorAll('.courses .card'))
filter_li.forEach((li) => {
    li.addEventListener("click", remove)
    li.addEventListener("click", manage)
})

function remove() {
    filter_li.forEach((faculty) => {

        faculty.classList.remove("active")
        this.classList.add("active")
    })
}
function manage() {
    course.forEach((div) => {
        div.style.display = 'none';
    });
    document.querySelectorAll(this.dataset.sub).forEach((el) => {
        el.style.display = 'flex';
    })
}