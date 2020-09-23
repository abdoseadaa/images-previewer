window.onload = function () {
  const container = document.getElementById("previewer_container");
  const images = document.querySelectorAll(".previewer_sm_img");
  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function () {
      images.forEach((image) => {
        image.classList.remove("active_image");
      });
      this.classList.add("active_image");
      container.classList.add("previewer_animation");
      let orignal = this.getAttribute("data-orignal");
      container.src = orignal;
      setTimeout(() => {
        container.classList.contains("previewer_animation")
          ? container.classList.remove("previewer_animation")
          : container.classList.add("previewer_animation");
      }, 500);
    });
  }
};
