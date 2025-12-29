const productList = document.getElementById("products");
const cartEl = document.getElementById("cart");
const btnOpen = document.getElementById("open");
const closeBtn = document.getElementById("close");
const searchInput = document.getElementById("search-input");

const detailModal = document.getElementById("detailModal");
const closeDetail = document.getElementById("closeDetail");
const detailImage = document.getElementById("detailImage");
const detailTitle = document.getElementById("detailTitle");
const detailPrice = document.getElementById("detailPrice");
const detailDescription = document.getElementById("detailDescription");
const detailCategory = document.getElementById("detailCategory");
const detailAddToCart = document.getElementById("detailAddToCart");

let cart = [];
let products = []
let selectProduct = null;
fetch('https://fakestoreapi.com/products')
.then(res => res.json())
.then(data=>{
  products = data;
  renderProduct();
});
function renderProduct(list = products){
  productList.innerHTML ="";
  if(products == ""){
    return "notfount"
  }
  list.forEach(value=>{
    productList.innerHTML+=`
    <div class="group bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden">
        <div class="relative bg-gray-50 p-6">
          <img src="${value.image}"
               class="w-full h-48 object-contain group-hover:scale-110 transition duration-300">
          <span class="absolute top-3 left-3 bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
            ${value.category}
          </span>
        </div>

        <div class="p-5">
          <h3 class="text-lg font-semibold line-clamp-2 min-h-[56px]">
            ${value.title}
          </h3>
          <p class="text-xl font-bold text-green-600 mt-3">
            $${value.price}
          </p>

          <div class="flex gap-3 mt-4">
            <button onclick="addToCart(${value.id})"
                    class="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition">
              Add to Cart
            </button>
            <button onclick="viewDetail(${value.id})"
                    class="flex-1 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white py-2 rounded-lg transition">
              View
            </button>
          </div>
        </div>
      </div>
    `;
  })
}
function viewDetail(id){
  selectProduct = products.find(p=> p.id === id);
  if(!selectProduct) return;
  detailImage.src = selectProduct.image;
  detailTitle.textContent = selectProduct.title;
  detailDescription.textContent = selectProduct.description;
  detailCategory .textContent = selectProduct.category;
  detailPrice.textContent = `$${selectProduct.price}`;
  detailModal.classList.remove("hidden");
}
closeDetail.addEventListener("click",() => detailModal.classList.add("hidden"));

  const menuBtn = document.getElementById("menuBtn");
  const menu = document.getElementById("menu");

  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });