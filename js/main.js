$(document).ready(function() {
  $(".slider").slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: false,
    arrows: false,
    // fade: false,
    dots: true,
    prevArrow:
      '<div class="arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns: xlink = "http://www.w3.org/1999/xlink" width="0.153in" height="0.25in" ><path fill-rule="evenodd" fill="rgb(249, 244, 236)" d="M11.005,17.997 L2.403,9.000 L11.005,0.002 L8.597,0.002 L-0.005,9.000 L8.597,17.997 L11.005,17.997 Z" /></svg></div>',
    nextArrow:
      '<div class="arrow arr-next"><svg xmlns="http://www.w3.org/2000/svg" xmlns: xlink = "http://www.w3.org/1999/xlink" width="0.167in" height="0.25in" ><path fill-rule="evenodd" fill="rgb(249, 244, 236)" d="M-0.006,17.997 L9.378,9.000 L-0.006,0.002 L2.621,0.002 L12.006,9.000 L2.621,17.997 L-0.006,17.997 Z" /></svg></div>',
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 4000,
          speed: 1000
        }
      }
    ]
  });

  // MODAL ЗАРЕГИСТРИРОВАТЬСЯ*****************************************************

  var btnBox = document.querySelector(".data-modal-opener");
  var btnBox1 = document.querySelector(".data-modal-opener1");
  var btnBox2 = document.querySelector(".data-modal-opener2");
  var parentBody = document.querySelector("body");
  var formInBox = document.querySelector(".modal");

  btnBox.addEventListener("click", showBox);
  btnBox1.addEventListener("click", showBox);
  btnBox2.addEventListener("click", showBox);

  var coverDiv = document.createElement("div");
  var boxDiv = document.createElement("div");
  var linkInBox = document.createElement("a");
  var formInBoxClone = formInBox.cloneNode(true);

  function showBox() {
    coverDiv.className = "cover";
    parentBody.appendChild(coverDiv);

    boxDiv.className = "boxForm ";
    boxDiv.style.top = window.pageYOffset + 200 + "px";
    console.log(window.pageYOffset);
    parentBody.appendChild(boxDiv);

    linkInBox.className = "close";
    linkInBox.innerHTML = "X";
    boxDiv.appendChild(linkInBox);

    formInBoxClone.className = "form_style";
    boxDiv.appendChild(formInBoxClone);

    coverDiv.addEventListener("click", hideBox);
    linkInBox.addEventListener("click", hideBox);
  }

  function hideBox() {
    parentBody.removeChild(coverDiv);
    parentBody.removeChild(boxDiv);
  }

  document.addEventListener("keydown", function(e) {
    if (e.keyCode == 27) {
      hideBox();
    }
  });

  // MODAL ОПЛАТИТЬ*****************************************************

  var btnBoxPay = document.querySelector(".data-modal-opener-pay");

  var parentBodyPay = document.querySelector("body");
  var formInBoxPay = document.querySelector(".pay");

  btnBoxPay.addEventListener("click", showBoxPay);

  var coverDivPay = document.createElement("div");
  var boxDivPay = document.createElement("div");
  var linkInBoxPay = document.createElement("a");
  var formInBoxPayClone = formInBoxPay.cloneNode(true);

  function showBoxPay() {
    coverDivPay.className = "cover";
    parentBodyPay.appendChild(coverDivPay);

    boxDivPay.className = "boxForm ";
    boxDivPay.style.top = window.pageYOffset + 200 + "px";
    console.log(window.pageYOffset);
    parentBodyPay.appendChild(boxDivPay);

    linkInBoxPay.className = "close";
    linkInBoxPay.innerHTML = "X";
    boxDivPay.appendChild(linkInBoxPay);

    formInBoxPayClone.className = "form_style";
    boxDivPay.appendChild(formInBoxPayClone);

    coverDivPay.addEventListener("click", hideBoxPay);
    linkInBoxPay.addEventListener("click", hideBoxPay);
  }

  function hideBoxPay() {
    parentBodyPay.removeChild(coverDivPay);
    parentBodyPay.removeChild(boxDivPay);
  }

  // document.addEventListener("keydown", function(r) {
  //   if (r.keyCode == 27) {
  //     hideBoxPay();
  //   }
  // });
});
