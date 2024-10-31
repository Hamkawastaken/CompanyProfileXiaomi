const hamburger = document.querySelector("#hamburger");
const navMobile = document.querySelector("#nav-mobile");

function openNavbar() {
  navMobile.classList.toggle("hidden");
}

function closeNavbar() {
  navMobile.classList.toggle("hidden");
}

function toggleTheme() {
  const body = document.body;
  if (body.getAttribute("data-theme") === "light") {
    body.setAttribute("data-theme", "dark");
  } else {
    body.setAttribute("data-theme", "light");
  }
}

function showProduct(category) {
  const productdisplay = document.getElementById("productDisplay");
  const buttonSmartphone = document.getElementById("buttonSmartphone");
  const buttonWearables = document.getElementById("buttonWearables");

  if (category === "Smartphone") {
    productdisplay.innerHTML = `
            <div
              class="product-item col-span-2 md:col-span-4 bg-[#F7F7F7] rounded-lg overflow-hidden"
            >
              <div class="productHero flex flex-col md:flex-row">
                <img src="images/collection1.jpg" alt="" class="md:w-1/2" />
                <div class="subtitle flex flex-col my-8 md:justify-center items-center md:w-1/2">
                  <p class="text-2xl font-bold flex justify-center">Xiaomi 14T</p>
                  <p class="text-lg font-bold flex justify-center mt-2">
                    Rp 14.899.0000<span
                      class="text-[#D0D0D0] text-base line-through ml-2"
                      >Rp 14.999.000</span
                    >
                  </p>
                </div>
              </div>
            </div>
            <div
              class="product-item justify-center items-center bg-[#F7F7F7] rounded-lg"
            >
              <img src="images/collection2.png" alt="" class="mx-auto" />
              <div class="subtitle flex flex-col my-8 mx-4">
                <p class="text-lg font-bold flex justify-center">POCO M4 Pro</p>
                <p class="text-sm mt-4 font-bold flex justify-center">
                  Rp 2.999.000
                </p>
                <p
                  class="text-sm mt-1 font-semibold flex justify-center line-through text-[#D0D0D0]"
                >
                  Rp 3.200.000
                </p>
              </div>
            </div>
            <div
              class="product-item justify-center items-center bg-[#F7F7F7] rounded-lg"
            >
              <img src="images/collection3.png" class="mx-auto" />
              <div class="subtitle flex flex-col my-8 mx-4">
                <p class="text-lg font-bold flex justify-center">POCO M4 Pro</p>
                <p class="text-sm mt-4 font-bold flex justify-center">
                  Rp 2.999.000
                </p>
                <p
                  class="text-sm mt-1 font-semibold flex justify-center line-through text-[#D0D0D0]"
                >
                  Rp 3.200.000
                </p>
              </div>
            </div>
            <div
              class="product-item justify-center items-center bg-[#F7F7F7] rounded-lg"
            >
              <img src="images/collection4.png" class="mx-auto" />
              <div class="subtitle flex flex-col my-8 mx-4">
                <p class="text-lg font-bold flex justify-center">POCO M4 Pro</p>
                <p class="text-sm mt-4 font-bold flex justify-center">
                  Rp 2.999.000
                </p>
                <p
                  class="text-sm mt-1 font-semibold flex justify-center line-through text-[#D0D0D0]"
                >
                  Rp 3.200.000
                </p>
              </div>
            </div>
            <div
              class="product-item justify-center items-center bg-[#F7F7F7] rounded-lg"
            >
              <img src="images/collection5.png" class="mx-auto" />
              <div class="subtitle flex flex-col my-8 mx-4">
                <p class="text-lg font-bold flex justify-center">POCO M4 Pro</p>
                <p class="text-sm mt-4 font-bold flex justify-center">
                  Rp 2.999.000
                </p>
                <p
                  class="text-sm mt-1 font-semibold flex justify-center line-through text-[#D0D0D0]"
                >
                  Rp 3.200.000
                </p>
              </div>
            </div>`;
    buttonSmartphone.classList.add("text-orange-500");
    buttonWearables.classList.remove("text-orange-500");
    buttonPOCO.classList.remove("text-orange-500");
    buttonPad.classList.remove("text-orange-500");
  } else if (category === "Wearables") {
    productdisplay.innerHTML = `
                <div
              class="product-item col-span-2 md:col-span-4 bg-[#F7F7F7] rounded-lg overflow-hidden"
            >
              <div class="productHero flex flex-col md:flex-row">
                <img src="images/collection6.png" alt="" class="md:w-1/2" />
                <div class="subtitle flex flex-col my-8 md:justify-center items-center md:w-1/2">
                  <p class="text-2xl font-bold flex justify-center">Redmi Watch 5 Active</p>
                  <p class="text-lg font-bold flex justify-center mt-2">
                    Rp 1.899.0000<span
                      class="text-[#D0D0D0] text-base line-through ml-2"
                      >Rp 2.299.000</span
                    >
                  </p>
                </div>
              </div>
            </div>
            <div
              class="product-item justify-center items-center bg-[#F7F7F7] rounded-lg"
            >
              <img src="images/collection7.png" alt="" class="mx-auto" />
              <div class="subtitle flex flex-col my-8 mx-4">
                <p class="text-lg font-bold flex justify-center">Xiaomi Watch 2</p>
                <p class="text-sm mt-4 font-bold flex justify-center">
                  Rp 2.999.000
                </p>
                <p
                  class="text-sm mt-1 font-semibold flex justify-center line-through text-[#D0D0D0]"
                >
                  Rp 3.200.000
                </p>
              </div>
            </div>
            <div
              class="product-item justify-center items-center bg-[#F7F7F7] rounded-lg"
            >
              <img src="images/collection8.png" class="mx-auto" />
              <div class="subtitle flex flex-col my-8 mx-4">
                <p class="text-lg font-bold flex justify-center">Xiaomi Band Pro</p>
                <p class="text-sm mt-4 font-bold flex justify-center">
                  Rp 2.999.000
                </p>
                <p
                  class="text-sm mt-1 font-semibold flex justify-center line-through text-[#D0D0D0]"
                >
                  Rp 3.200.000
                </p>
              </div>
            </div>
            <div
              class="product-item justify-center items-center bg-[#F7F7F7] rounded-lg"
            >
              <img src="images/collection9.png" class="mx-auto" />
              <div class="subtitle flex flex-col my-8 mx-4">
                <p class="text-lg font-bold flex justify-center">Xiaomi Pods Pro</p>
                <p class="text-sm mt-4 font-bold flex justify-center">
                  Rp 2.999.000
                </p>
                <p
                  class="text-sm mt-1 font-semibold flex justify-center line-through text-[#D0D0D0]"
                >
                  Rp 3.200.000
                </p>
              </div>
            </div>
            <div
              class="product-item justify-center items-center bg-[#F7F7F7] rounded-lg"
            >
              <img src="images/collection10.png" class="mx-auto" />
              <div class="subtitle flex flex-col my-8 mx-4">
                <p class="text-lg font-bold flex justify-center">Xiaomi TWS 2</p>
                <p class="text-sm mt-4 font-bold flex justify-center">
                  Rp 2.999.000
                </p>
                <p
                  class="text-sm mt-1 font-semibold flex justify-center line-through text-[#D0D0D0]"
                >
                  Rp 3.200.000
                </p>
              </div>
            </div>
    `;
    buttonWearables.classList.add("text-orange-500");
    buttonSmartphone.classList.remove("text-orange-500");
    buttonPad.classList.remove("text-orange-500");
    buttonPOCO.classList.remove("text-orange-500");
  } else if (category === "POCO") {
    productdisplay.innerHTML = `
    <div
              class="product-item col-span-2 md:col-span-4 bg-[#F7F7F7] rounded-lg overflow-hidden"
            >
              <div class="productHero flex flex-col md:flex-row">
                <img src="images/collection16.jpg" alt="" class="md:w-1/2" />
                <div class="subtitle flex flex-col my-8 md:justify-center items-center md:w-1/2">
                  <p class="text-2xl font-bold flex justify-center">POCO F6</p>
                  <p class="text-lg font-bold flex justify-center mt-2">
                    Rp 4.899.0000<span
                      class="text-[#D0D0D0] text-base line-through ml-2"
                      >Rp 4.999.000</span
                    >
                  </p>
                </div>
              </div>
            </div>
            <div
              class="product-item justify-center items-center bg-[#F7F7F7] rounded-lg"
            >
              <img src="images/collection2.png" alt="" class="mx-auto" />
              <div class="subtitle flex flex-col my-8 mx-4">
                <p class="text-lg font-bold flex justify-center">POCO M4 Pro</p>
                <p class="text-sm mt-4 font-bold flex justify-center">
                  Rp 2.999.000
                </p>
                <p
                  class="text-sm mt-1 font-semibold flex justify-center line-through text-[#D0D0D0]"
                >
                  Rp 3.200.000
                </p>
              </div>
            </div>
            <div
              class="product-item justify-center items-center bg-[#F7F7F7] rounded-lg"
            >
              <img src="images/collection3.png" class="mx-auto" />
              <div class="subtitle flex flex-col my-8 mx-4">
                <p class="text-lg font-bold flex justify-center">POCO M4 Pro</p>
                <p class="text-sm mt-4 font-bold flex justify-center">
                  Rp 2.999.000
                </p>
                <p
                  class="text-sm mt-1 font-semibold flex justify-center line-through text-[#D0D0D0]"
                >
                  Rp 3.200.000
                </p>
              </div>
            </div>
            <div
              class="product-item justify-center items-center bg-[#F7F7F7] rounded-lg"
            >
              <img src="images/collection4.png" class="mx-auto" />
              <div class="subtitle flex flex-col my-8 mx-4">
                <p class="text-lg font-bold flex justify-center">POCO M4 Pro</p>
                <p class="text-sm mt-4 font-bold flex justify-center">
                  Rp 2.999.000
                </p>
                <p
                  class="text-sm mt-1 font-semibold flex justify-center line-through text-[#D0D0D0]"
                >
                  Rp 3.200.000
                </p>
              </div>
            </div>
            <div
              class="product-item justify-center items-center bg-[#F7F7F7] rounded-lg"
            >
              <img src="images/collection5.png" class="mx-auto" />
              <div class="subtitle flex flex-col my-8 mx-4">
                <p class="text-lg font-bold flex justify-center">POCO M4 Pro</p>
                <p class="text-sm mt-4 font-bold flex justify-center">
                  Rp 2.999.000
                </p>
                <p
                  class="text-sm mt-1 font-semibold flex justify-center line-through text-[#D0D0D0]"
                >
                  Rp 3.200.000
                </p>
              </div>
            </div>`;
            buttonSmartphone.classList.remove("text-orange-500");
            buttonWearables.classList.remove("text-orange-500");
            buttonPOCO.classList.add("text-orange-500");
            buttonPad.classList.remove("text-orange-500");
  } else if (category === "Pad") {
    productDisplay.innerHTML = `
    <div
              class="product-item col-span-2 md:col-span-4 bg-[#F7F7F7] rounded-lg overflow-hidden"
            >
              <div class="productHero flex flex-col md:flex-row">
                <img src="images/collection11.jpg" alt="" class="md:w-1/2" />
                <div class="subtitle flex flex-col my-8 md:justify-center items-center md:w-1/2">
                  <p class="text-2xl font-bold flex justify-center">Xiaomi Pad Pro</p>
                  <p class="text-lg font-bold flex justify-center mt-2">
                    Rp 6.499.0000<span
                      class="text-[#D0D0D0] text-base line-through ml-2"
                      >Rp 7.000.000</span
                    >
                  </p>
                </div>
              </div>
            </div>
            <div
              class="product-item justify-center items-center bg-[#F7F7F7] rounded-lg"
            >
              <img src="images/collection12.png" alt="" class="mx-auto" />
              <div class="subtitle flex flex-col my-8 mx-4">
                <p class="text-lg font-bold flex justify-center">POCO Pad</p>
                <p class="text-sm mt-4 font-bold flex justify-center">
                  Rp 1.999.000
                </p>
                <p
                  class="text-sm mt-1 font-semibold flex justify-center line-through text-[#D0D0D0]"
                >
                  Rp 2.200.000
                </p>
              </div>
            </div>
            <div
              class="product-item justify-center items-center bg-[#F7F7F7] rounded-lg"
            >
              <img src="images/collection13.png" class="mx-auto" />
              <div class="subtitle flex flex-col my-8 mx-4">
                <p class="text-lg font-bold flex justify-center">Xiaomi 4 Pad Pro</p>
                <p class="text-sm mt-4 font-bold flex justify-center">
                  Rp 4.999.000
                </p>
                <p
                  class="text-sm mt-1 font-semibold flex justify-center line-through text-[#D0D0D0]"
                >
                  Rp 5.200.000
                </p>
              </div>
            </div>
            <div
              class="product-item justify-center items-center bg-[#F7F7F7] rounded-lg"
            >
              <img src="images/collection14.png" class="mx-auto" />
              <div class="subtitle flex flex-col my-8 mx-4">
                <p class="text-lg font-bold flex justify-center">Xiaomi Pad 6s</p>
                <p class="text-sm mt-4 font-bold flex justify-center">
                  Rp 3.999.000
                </p>
                <p
                  class="text-sm mt-1 font-semibold flex justify-center line-through text-[#D0D0D0]"
                >
                  Rp 4.200.000
                </p>
              </div>
            </div>
            <div
              class="product-item justify-center items-center bg-[#F7F7F7] rounded-lg"
            >
              <img src="images/collection15.png" class="mx-auto" />
              <div class="subtitle flex flex-col my-8 mx-4">
                <p class="text-lg font-bold flex justify-center">Xiaomi Pad SE</p>
                <p class="text-sm mt-4 font-bold flex justify-center">
                  Rp 1.399.000
                </p>
                <p
                  class="text-sm mt-1 font-semibold flex justify-center line-through text-[#D0D0D0]"
                >
                  Rp 1.900.000
                </p>
              </div>
            </div>`;
            buttonPOCO.classList.remove("text-orange-500");
            buttonPad.classList.add("text-orange-500");
            buttonSmartphone.classList.remove("text-orange-500");
            buttonWearables.classList.remove("text-orange-500");
            
  }
}

const leftBtnExl = document.getElementById('button-left-exlusive');
const rightBtnExl = document.getElementById('button-right-exlusive');
const contentExlusive = document.querySelector(".content-exlusive");

let currentPosition = 0;
const cardWidth = contentExlusive.children[0].offsetWidth + 16;

 rightBtnExl.addEventListener("click", () => {
   if (currentPosition > -(contentExlusive.children.length - 3) * cardWidth) {
     currentPosition -= cardWidth;
     contentExlusive.style.transform = `translateX(${currentPosition}px)`;
   }
 });

 leftBtnExl.addEventListener("click", () => {
   if (currentPosition < 0) {
     currentPosition += cardWidth;
     contentExlusive.style.transform = `translateX(${currentPosition}px)`;
   }
 });

const leftBtnExp = document.getElementById('button-left-explore');
const rightBtnExp = document.getElementById('button-right-explore');
const contentExplore = document.querySelector(".content-explore");

let currentPositionExplore = 0;
const cardWidthExplore = contentExplore.children[0].offsetWidth + 16;

rightBtnExp.addEventListener("click", () => {
  if (currentPosition > -(contentExplore.children.length - 3) * cardWidth) {
    currentPosition -= cardWidth;
    contentExplore.style.transform = `translateX(${currentPosition}px)`;
  }
});

leftBtnExp.addEventListener("click", () => {
  if (currentPosition < 0) {
    currentPosition += cardWidth;
    contentExplore.style.transform = `translateX(${currentPosition}px)`;
  }
});