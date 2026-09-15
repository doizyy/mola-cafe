// ===============================
// HAMBURGER MENU
// ===============================


const hamburger = document.getElementById("hamburger");
const menuNav = document.getElementById("menu-nav");


if (hamburger && menuNav) {


    hamburger.addEventListener("click", function () {


        menuNav.classList.toggle("active");


    });


}




// ===============================
// MENU FILTRELEME
// ===============================


const filterButtons =
    document.querySelectorAll(".filter-btn");


const cards =
    document.querySelectorAll(".card");




filterButtons.forEach(function (button) {


    button.addEventListener("click", function () {


        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });


        button.classList.add("active");


        const category =
            button.dataset.category;




        cards.forEach(function (card) {


            if (
                category === "all" ||
                card.classList.contains(category)
            ) {


                card.style.display = "block";


            } else {


                card.style.display = "none";


            }


        });


    });


});




// ===============================
// SEPET
// ===============================


let cart = [];




const cartButton =
    document.getElementById("cartButton");


const cartPanel =
    document.getElementById("cartPanel");


const closeCart =
    document.getElementById("closeCart");


const cartItems =
    document.getElementById("cartItems");


const cartCount =
    document.getElementById("cartCount");


const cartTotal =
    document.getElementById("cartTotal");


const orderWhatsApp =
    document.getElementById("orderWhatsApp");


const addButtons =
    document.querySelectorAll(".add-to-cart");




// ===============================
// SEPETE ÜRÜN EKLE
// ===============================


addButtons.forEach(function (button) {


    button.addEventListener("click", function () {


        const name =
            button.dataset.name;


        const price =
            Number(button.dataset.price);




        const existing =
            cart.find(function (item) {


                return item.name === name;


            });




        if (existing) {


            existing.quantity++;


        } else {


            cart.push({


                name: name,


                price: price,


                quantity: 1


            });


        }




        updateCart();


        openCart();


    });


});




// ===============================
// SEPETİ GÜNCELLE
// ===============================


function updateCart() {


    cartItems.innerHTML = "";




    if (cart.length === 0) {


        cartItems.innerHTML = `
            <p class="empty-cart">
                Sepetiniz boş.
            </p>
        `;


    }




    let total = 0;
    let count = 0;




    cart.forEach(function (item, index) {


        const itemTotal =
            item.price * item.quantity;




        total += itemTotal;


        count += item.quantity;




        cartItems.innerHTML += `


            <div class="cart-item">


                <div class="cart-item-info">


                    <strong>
                        ${item.name}
                    </strong>


                    <span>
                        ${item.price} TL
                    </span>




                    <div class="quantity">


                        <button
                            onclick="decreaseQuantity(${index})">
                            −
                        </button>


                        <span>
                            ${item.quantity}
                        </span>


                        <button
                            onclick="increaseQuantity(${index})">
                            +
                        </button>


                    </div>


                </div>




                <button
                    class="remove-item"
                    onclick="removeItem(${index})">


                    Sil


                </button>


            </div>


        `;


    });




    cartCount.textContent = count;


    cartTotal.textContent = total;


}




// ===============================
// ADET ARTIR
// ===============================


function increaseQuantity(index) {


    cart[index].quantity++;


    updateCart();


}




// ===============================
// ADET AZALT
// ===============================


function decreaseQuantity(index) {


    cart[index].quantity--;




    if (cart[index].quantity <= 0) {


        cart.splice(index, 1);


    }




    updateCart();


}




// ===============================
// ÜRÜN SİL
// ===============================


function removeItem(index) {


    cart.splice(index, 1);


    updateCart();


}




// ===============================
// SEPETİ AÇ
// ===============================


function openCart() {


    if (cartPanel) {


        cartPanel.classList.add("active");


    }


}




if (cartButton) {


    cartButton.addEventListener("click", function () {


        openCart();


    });


}




// ===============================
// SEPETİ KAPAT
// ===============================


if (closeCart) {


    closeCart.addEventListener("click", function () {


        cartPanel.classList.remove("active");


    });


}




// ===============================
// WHATSAPP SİPARİŞ
// ===============================


if (orderWhatsApp) {


    orderWhatsApp.addEventListener("click", function () {




        if (cart.length === 0) {


            alert("Sepetiniz boş.");


            return;


        }




        let message =
            "Merhaba Mola Café, sipariş vermek istiyorum.\n\n";




        cart.forEach(function (item) {


            message +=
                `${item.name} - ${item.quantity} adet - ${item.price * item.quantity} TL\n`;


        });




        message +=
            `\nToplam: ${cartTotal.textContent} TL`;




        const whatsappNumber =
            "905337634672";




        const url =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(message);




        window.open(url, "_blank");


    });


}




// ===============================
// REZERVASYON
// ===============================


const reservationForm =
    document.getElementById("reservationForm");




if (reservationForm) {


    reservationForm.addEventListener("submit", function (event) {


        event.preventDefault();




        const name =
            document.getElementById("name").value;


        const phone =
            document.getElementById("phone").value;


        const date =
            document.getElementById("date").value;


        const time =
            document.getElementById("time").value;


        const people =
            document.getElementById("people").value;


        const note =
            document.getElementById("note").value;




        const message =
            `Merhaba Mola Café, rezervasyon yapmak istiyorum.\n\n` +


            `Ad Soyad: ${name}\n` +


            `Telefon: ${phone}\n` +


            `Tarih: ${date}\n` +


            `Saat: ${time}\n` +


            `Kişi: ${people}\n` +


            `Not: ${note}`;




        const whatsappNumber =
            "905337634672";




        const url =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(message);




        window.open(url, "_blank");


    });


}


// =====================
// YUKARI CIKMA BUTONU
// =====================

const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});