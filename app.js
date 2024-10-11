console.log("hello world");

const thumbnailContainer = document.getElementById("thumbnail-container");

const displayImage = document.getElementById("display-image");

const audio1 = document.getElementById("audio1");

const images = [
  {
    src: "vaporwave1.jpg",
    alt: "city",
    mp3: "anime 1.mp3",
  },
  {
    src: "vaporwave2.jpg",
    alt: "waterfall",
    mp3: "anime2.mp3",
  },
  {
    src: "vaporwave3.jpg",
    alt: "mountains",
    mp3: "anime3.mp3",
  },
  {
    src: "vaporwave4.jpg",
    alt: "grid image three people",
    mp3: "anime4.mp3",
  },
  {
    src: "vaporwave7.jpg",
    alt: "temple and mountain",
    mp3: "anime5.mp3",
  },
  {
    src: "vaporwave8.jpg",
    alt: "city background",
    mp3: "anime6.mp3",
  },
  {
    src: "vaporwave9.jpg",
    alt: "city background",
    mp3: "anime7.mp3",
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
    audio1.src = images[i].mp3;
    audio1.play();
  });

  img.addEventListener("focus", function () {
    console.log(images[i]);
  });

  img.addEventListener("keydown", function (event) {
    if (event.key == "Enter" || event.key == " ") {
      console.log("image was focussed and spacebar was pressed");
      displayImage.src = images[i].src;
      displayImage.alt = images[i].alt;
      audio1.src = images[i].mp3;
      audio1.play();
    }
  });

  thumbnailContainer.appendChild(img);
}
