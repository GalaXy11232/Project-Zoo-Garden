// Gallery

  var currentImgIndex;
  
  function getImgQueryById(galleryId) {
    return document.querySelectorAll(`#galerie-${galleryId} img`);
  }

  function openFullImg(pic, galleryId) {
    var fullImgBox = document.getElementById(`fullImgBox${galleryId}`);
    var fullImg = document.getElementById(`fullImg${galleryId}`);
  
    fullImg.style.maxWidth = "80%";
    fullImg.style.maxHeight = "80%";
    fullImg.style.width = "auto";
    fullImg.style.height = "auto";
  
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
    currentImgIndex = Array.from(getImgQueryById(galleryId)).findIndex(
      (img) => img.src === pic
    );
    updateNavButtons(galleryId);
  }

  function closeFullImg(galleryId) {
    var fullImgBox = document.getElementById(`fullImgBox${galleryId}`);
    fullImgBox.style.display = "none";
  }

  function prevImg(galleryId) {
    var imgGallery = getImgQueryById(galleryId);
    if (currentImgIndex > 0) {
      currentImgIndex--;
      var fullImg = document.getElementById(`fullImg${galleryId}`);
      fullImg.src = imgGallery[currentImgIndex].src;
      updateNavButtons(galleryId);
    }
  }

  function nextImg(galleryId) {
    var imgGallery = getImgQueryById(galleryId);
    if (currentImgIndex < imgGallery.length - 1) {
      currentImgIndex++;
      var fullImg = document.getElementById(`fullImg${galleryId}`);
      fullImg.src = imgGallery[currentImgIndex].src;
      updateNavButtons(galleryId);
    }
  }

  function updateNavButtons(galleryId) {
    var imgGallery = getImgQueryById(galleryId);
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