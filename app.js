console.log("hello world");

const thumbnailContainer = document.getElementById("thumbnail-container");

const displayImage = document.getElementById("display-image");

const images = [
  {
    src: "vaporwave1.jpg",
    alt: "city",
  },
  {
    src: "vaporwave2.jpg",
    alt: "waterfall",
  },
  {
    src: "vaporwave3.jpg",
    alt: "mountains",
  },
  {
    src: "vaporwave4.jpg",
    alt: "grid image three people",
  },
  {
    src: "vaporwave7.jpg",
    alt: "temple and mountain",
  },
  {
    src: "vaporwave8.jpg",
    alt: "city background",
  },
  {
    src: "vaporwave9.jpg",
    alt: "city background",
  },
];

for (let i = 0; i < images.length; i++) {
  const img = document.createElement("img");
  img.width = 100;
  img.height = 50;

  img.src = images[i].src;
  img.tabIndex = "0";

  img.addEventListener("click", function () {
    displayImage.src = images[i].src;
    displayImage.alt = images[i].alt;
  });

  img.addEventListener("focus", function () {
    console.log(images[i]);
  });

  img.addEventListener("keydown", function (event) {
    if (event.key == "Enter" || event.key == " ") {
      console.log("image was focussed and spacebar was pressed");
      displayImage.src = images[i].src;
      displayImage.alt = images[i].alt;
    }
  });

  thumbnailContainer.appendChild(img);
}
