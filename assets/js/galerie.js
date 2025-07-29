//Back to top button
let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);

  if(pos > 100){
    scrollProgress.style.display = "grid";
  }
  else{
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#7b28ae ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

// Gallery

  var currentImgIndex;
  var galleries = {
    10: document.querySelectorAll("#galerie-10 img"),
    9: document.querySelectorAll("#galerie-9 img"),
    8: document.querySelectorAll("#galerie-8 img"),
    7: document.querySelectorAll("#galerie-7 img"),
    6: document.querySelectorAll("#galerie-6 img"),
    5: document.querySelectorAll("#galerie-5 img"),
    4: document.querySelectorAll("#galerie-4 img"),
    3: document.querySelectorAll("#galerie-3 img"),
    2: document.querySelectorAll("#galerie-2 img"),
    1: document.querySelectorAll("#galerie-1 img"),
  };

  function openFullImg(pic, galleryId) {
    var fullImgBox = document.getElementById(`fullImgBox${galleryId}`);
    var fullImg = document.getElementById(`fullImg${galleryId}`);
  
    fullImg.style.maxWidth = "80%";
    fullImg.style.maxHeight = "80%";
    fullImg.style.width = "auto";
    fullImg.style.height = "auto";
  
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
    currentImgIndex = Array.from(galleries[galleryId]).findIndex(
      (img) => img.src === pic
    );
    updateNavButtons(galleryId);
  }

  function closeFullImg(galleryId) {
    var fullImgBox = document.getElementById(`fullImgBox${galleryId}`);
    fullImgBox.style.display = "none";
  }

  function prevImg(galleryId) {
    var imgGallery = galleries[galleryId];
    if (currentImgIndex > 0) {
      currentImgIndex--;
      var fullImg = document.getElementById(`fullImg${galleryId}`);
      fullImg.src = imgGallery[currentImgIndex].src;
      updateNavButtons(galleryId);
    }
  }

  function nextImg(galleryId) {
    var imgGallery = galleries[galleryId];
    if (currentImgIndex < imgGallery.length - 1) {
      currentImgIndex++;
      var fullImg = document.getElementById(`fullImg${galleryId}`);
      fullImg.src = imgGallery[currentImgIndex].src;
      updateNavButtons(galleryId);
    }
  }

  function updateNavButtons(galleryId) {
    var imgGallery = galleries[galleryId];
    var prevButton = document.getElementById(`lightBoxPrev${galleryId}`);
    var nextButton = document.getElementById(`lightBoxNext${galleryId}`);
    if (currentImgIndex === 0) {
      prevButton.style.display = "none";
    } else {
      prevButton.style.display = "block";
    }
    if (currentImgIndex === imgGallery.length - 1) {
      nextButton.style.display = "none";
    } else {
      nextButton.style.display = "block";
    }
  }