const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const nextBtn = document.querySelector(".next-btn");

let nextClicked = false;

nextBtn.addEventListener("click", () => {
  if (!nextClicked) {
    question.innerHTML = "Semangattt buat ujiannya besokkk adekkk.";
    gif.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/temaaciii.gif";
    nextBtn.innerHTML = "mau balas?";
    nextClicked = true;
  } else {
    window.location.href = "https://wa.me/6281391768759?text=mau%20balas%20apahayo";
  }
});
