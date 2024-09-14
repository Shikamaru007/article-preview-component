const shareBtn = document.getElementById("share");

shareBtn.addEventListener("click", () => {
    const mainContent = document.getElementById("main-content");
    mainContent.classList.toggle("share-state")
})

