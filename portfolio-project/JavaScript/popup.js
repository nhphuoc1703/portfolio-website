// resume buttons
const openBtn = document.getElementById("open-popup");
const closeBtn = document.getElementById("close-popup");
const popup = document.getElementById("popup");

// more-contact button
// const contactBtn = document.getElementById("more-contact-icon");
const moreContactWrap = document.getElementById("more-contact-wrap")
const moreContactText = document.getElementById("more-contact")
const moreContactPortion = document.getElementById("more-contact-info");

// resume portion
openBtn.addEventListener("click", () => {
    popup.classList.add("open");
})

closeBtn.addEventListener("click", () => {
    popup.classList.remove("open");
})

// more contact portion
moreContactWrap.addEventListener("mouseenter", () => {
    // debug line
    // console.log("Mouse entered");
    moreContactPortion.classList.add("mouseon");
    moreContactText.style.color = "#dbbfbf"
});
  
moreContactWrap.addEventListener("mouseleave", () => {
    // Code to execute when the mouse leaves the element
    // console.log("Mouse left");
    moreContactPortion.classList.remove("mouseon");
    moreContactText.style.color = "#02bdad"
});