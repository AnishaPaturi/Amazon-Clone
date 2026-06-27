// --- Amazon Clone Javascript Logic ---

// --- 1. MOCK PRODUCT DATA ---
const dealProducts = [
    {
        id: "d1",
        title: "Samsung Galaxy S24 Ultra 5G (Titanium Gray, 256GB)",
        image: "assets/product1-1.jpg",
        rating: 4.8,
        ratingCount: "2,351",
        originalPrice: 1299.99,
        price: 1099.99
    },
    {
        id: "d2",
        title: "Apple iPad Air (11-inch, M2 Chip, Wi-Fi, 128GB)",
        image: "assets/product1-2.jpg",
        rating: 4.7,
        ratingCount: "1,208",
        originalPrice: 599.00,
        price: 549.00
    },
    {
        id: "d3",
        title: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
        image: "assets/product1-3.jpg",
        rating: 4.6,
        ratingCount: "9,842",
        originalPrice: 399.99,
        price: 328.00
    },
    {
        id: "d4",
        title: "Dell XPS 13 Laptop Intel Core Ultra 7",
        image: "assets/product1-4.jpg",
        rating: 4.5,
        ratingCount: "412",
        originalPrice: 1499.99,
        price: 1249.99
    },
    {
        id: "d5",
        title: "Canon EOS R50 Mirrorless Camera Content Creator Kit",
        image: "assets/product1-5.jpg",
        rating: 4.4,
        ratingCount: "753",
        originalPrice: 799.00,
        price: 679.00
    },
    {
        id: "d6",
        title: "Fitbit Charge 6 Advanced Health & Fitness Tracker",
        image: "assets/product1-6.jpg",
        rating: 4.3,
        ratingCount: "3,115",
        originalPrice: 159.95,
        price: 129.95
    },
    {
        id: "d7",
        title: "Logitech MX Master 3S Wireless Ergonomic Mouse",
        image: "assets/product1-7.jpg",
        rating: 4.8,
        ratingCount: "12,940",
        originalPrice: 99.99,
        price: 89.99
    },
    {
        id: "d8",
        title: "GoPro HERO12 Black - Waterproof Action Camera",
        image: "assets/product1-8.jpg",
        rating: 4.5,
        ratingCount: "1,556",
        originalPrice: 399.99,
        price: 349.00
    },
    {
        id: "d9",
        title: "Kindle Paperwhite (16 GB) - 6.8\" Display with Adjustable Warm Light",
        image: "assets/product1-9.jpg",
        rating: 4.7,
        ratingCount: "25,321",
        originalPrice: 149.99,
        price: 129.99
    },
    {
        id: "d10",
        title: "Bose SoundLink Flex Portable Speaker Outdoor Bluetooth",
        image: "assets/product1-10.jpg",
        rating: 4.6,
        ratingCount: "8,924",
        originalPrice: 149.00,
        price: 119.00
    }
];

const bestSellers = [
    {
        id: "b1",
        title: "Ninja AF101 Air Fryer, 4 Qt Capacity, Black/Grey",
        image: "assets/product2-1.jpg",
        rating: 4.8,
        ratingCount: "48,930",
        originalPrice: 129.99,
        price: 99.99
    },
    {
        id: "b2",
        title: "Instant Pot Duo 7-in-1 Electric Pressure Cooker, 6 Qt",
        image: "assets/product2-2.jpg",
        rating: 4.7,
        ratingCount: "152,431",
        originalPrice: 99.99,
        price: 89.00
    },
    {
        id: "b3",
        title: "Keurig K-Mini Single Serve K-Cup Pod Coffee Maker",
        image: "assets/product2-3.jpg",
        rating: 4.5,
        ratingCount: "85,632",
        originalPrice: 99.99,
        price: 79.99
    },
    {
        id: "b4",
        title: "Philips Sonicare ProtectiveClean 5100 Rechargeable Toothbrush",
        image: "assets/product2-4.jpg",
        rating: 4.6,
        ratingCount: "23,109",
        originalPrice: 99.96,
        price: 89.95
    },
    {
        id: "b5",
        title: "iRobot Roomba 694 Robot Vacuum - Wi-Fi Connectivity",
        image: "assets/product2-5.jpg",
        rating: 4.4,
        ratingCount: "18,443",
        originalPrice: 274.99,
        price: 199.99
    },
    {
        id: "b6",
        title: "Hydro Flask Wide Mouth Bottle with Flex Straw Lid",
        image: "assets/product2-6.jpg",
        rating: 4.8,
        ratingCount: "34,912",
        originalPrice: 44.95,
        price: 39.95
    },
    {
        id: "b7",
        title: "Cosori Electric Gooseneck Kettle with Variable Temp Control",
        image: "assets/product2-7.jpg",
        rating: 4.7,
        ratingCount: "14,359",
        originalPrice: 79.99,
        price: 69.99
    },
    {
        id: "b8",
        title: "Pyrex PrepWare 3-Piece Glass Measuring Cup Set",
        image: "assets/product2-8.jpg",
        rating: 4.8,
        ratingCount: "74,210",
        originalPrice: 24.99,
        price: 19.99
    },
    {
        id: "b9",
        title: "Brita Tahoe Water Filter Pitcher, 10 Cup Capacity",
        image: "assets/product2-9.jpg",
        rating: 4.5,
        ratingCount: "9,642",
        originalPrice: 38.99,
        price: 32.99
    },
    {
        id: "b10",
        title: "Lodge Cast Iron Skillet, Pre-Seasoned, 10.25-inch",
        image: "assets/product2-10.jpg",
        rating: 4.7,
        ratingCount: "125,604",
        originalPrice: 34.25,
        price: 24.90
    },
    {
        id: "b11",
        title: "KitchenAid Classic Series 4.5 Quart Stand Mixer",
        image: "assets/product2-11.jpg",
        rating: 4.8,
        ratingCount: "28,349",
        originalPrice: 329.99,
        price: 299.99
    },
    {
        id: "b12",
        title: "Cuisinart 15-Piece Stainless Steel Knife Block Set",
        image: "assets/product2-12.jpg",
        rating: 4.6,
        ratingCount: "19,532",
        originalPrice: 159.99,
        price: 99.95
    }
];

// Combine all products for search capability
const allProducts = [...dealProducts, ...bestSellers];

// --- 2. SELECT DOM ELEMENTS ---
const sliderList = document.getElementById('slider-list');
const sliderPrev = document.getElementById('slider-prev');
const sliderNext = document.getElementById('slider-next');
const dealCarousel = document.getElementById('deal-carousel');
const bestCarousel = document.getElementById('best-carousel');

const cartOverlay = document.getElementById('cart-overlay');
const cartDrawer = document.getElementById('cart-drawer');
const navCartBtn = document.getElementById('nav-cart-btn');
const cartCloseBtn = document.getElementById('cart-close-btn');
const cartItemsList = document.getElementById('cart-items-list');
const cartTotalPrice = document.getElementById('cart-total-price');
const cartCountBadge = document.getElementById('cart-count');
const cartCheckoutBtn = document.getElementById('cart-checkout-btn');

const locationOverlay = document.getElementById('location-overlay');
const navLocationBtn = document.getElementById('nav-location-btn');
const locationCloseBtn = document.getElementById('location-close-btn');
const locationDoneBtn = document.getElementById('location-done-btn');
const pincodeInput = document.getElementById('pincode-input');
const pincodeApplyBtn = document.getElementById('pincode-apply-btn');
const countrySelect = document.getElementById('country-select');
const navLocationText = document.getElementById('nav-location-text');

const searchInput = document.getElementById('search-input');
const searchSuggestions = document.getElementById('search-suggestions');
const searchSubmitBtn = document.getElementById('search-submit-btn');

const backToTopBtn = document.getElementById('back-to-top-btn');
const toastNotification = document.getElementById('toast-notification');

// --- 3. BANNER SLIDER LOGIC ---
let activeSlideIndex = 0;
const totalSlides = 6;
let sliderAutoplayInterval;

function changeSlide() {
    sliderList.style.transform = `translateX(-${activeSlideIndex * (100 / totalSlides)}%)`;
}

function nextSlide() {
    activeSlideIndex = (activeSlideIndex + 1) % totalSlides;
    changeSlide();
}

function prevSlide() {
    activeSlideIndex = (activeSlideIndex - 1 + totalSlides) % totalSlides;
    changeSlide();
}

function startSliderAutoplay() {
    sliderAutoplayInterval = setInterval(nextSlide, 5000);
}

function stopSliderAutoplay() {
    clearInterval(sliderAutoplayInterval);
}

sliderNext.addEventListener('click', () => {
    nextSlide();
    stopSliderAutoplay();
    startSliderAutoplay();
});

sliderPrev.addEventListener('click', () => {
    prevSlide();
    stopSliderAutoplay();
    startSliderAutoplay();
});

// Pause auto-sliding on hover
const headerSlider = document.getElementById('header-slider');
headerSlider.addEventListener('mouseenter', stopSliderAutoplay);
headerSlider.addEventListener('mouseleave', startSliderAutoplay);

// Initialize Slider
changeSlide();
startSliderAutoplay();

// --- 4. PRODUCT CAROUSEL RENDERING ---
function createProductCard(product) {
    const originalPriceHTML = product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : '';
    const priceParts = product.price.toFixed(2).split('.');
    
    return `
        <div class="carousel-product-card">
            <div class="carousel-product-image" onclick="showToast('Viewing ${product.title}')">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="carousel-product-info">
                <p class="product-title" onclick="showToast('Viewing ${product.title}')" title="${product.title}">${product.title}</p>
                <div class="product-rating">
                    <img src="assets/rating_img.png" alt="${product.rating} Stars">
                    <span>${product.ratingCount}</span>
                </div>
                <div class="product-price-row">
                    <span class="currency">$</span>
                    <span class="price-integer">${priceParts[0]}</span>
                    <span class="price-decimal">.${priceParts[1]}</span>
                    ${originalPriceHTML}
                </div>
                <button class="btn-add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        </div>
    `;
}

function renderCarousels() {
    dealCarousel.innerHTML = dealProducts.map(p => createProductCard(p)).join('');
    bestCarousel.innerHTML = bestSellers.map(p => createProductCard(p)).join('');
    
    // Add Add to Cart Event Listeners
    document.querySelectorAll('.btn-add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = e.target.getAttribute('data-id');
            addToCart(productId);
        });
    });
}

// Carousel Scroll Buttons
function setupCarouselScroll(carouselId, prevId, nextId) {
    const carousel = document.getElementById(carouselId);
    const prev = document.getElementById(prevId);
    const next = document.getElementById(nextId);
    
    prev.addEventListener('click', () => {
        carousel.scrollLeft -= 500;
    });
    
    next.addEventListener('click', () => {
        carousel.scrollLeft += 500;
    });
}

renderCarousels();
setupCarouselScroll('deal-carousel', 'deal-prev', 'deal-next');
setupCarouselScroll('best-carousel', 'best-prev', 'best-next');

// --- 5. SHOPPING CART LOGIC ---
let cart = [];

function addToCart(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.product.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ product, quantity: 1 });
    }
    
    updateCart();
    showToast(`Added "${product.title}" to cart!`, 'success');
}

function updateCart() {
    // Save count
    const totalCount = cart.reduce((total, item) => total + item.quantity, 0);
    cartCountBadge.textContent = totalCount;
    
    // Render list
    if (cart.length === 0) {
        cartItemsList.innerHTML = `<p class="cart-empty-message">Your Cart is empty.</p>`;
        cartTotalPrice.textContent = "$0.00";
    } else {
        cartItemsList.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.product.image}" class="cart-item-img" alt="${item.product.title}">
                <div class="cart-item-details">
                    <span class="cart-item-title">${item.product.title}</span>
                    <span class="cart-item-price">$${item.product.price.toFixed(2)}</span>
                    <div class="cart-item-quantity-row">
                        <button class="cart-qty-btn" onclick="changeQty('${item.product.id}', -1)">-</button>
                        <span class="cart-qty-val">${item.quantity}</span>
                        <button class="cart-qty-btn" onclick="changeQty('${item.product.id}', 1)">+</button>
                        <span class="cart-item-remove" onclick="removeCartItem('${item.product.id}')">Remove</span>
                    </div>
                </div>
            </div>
        `).join('');
        
        const subtotal = cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
        cartTotalPrice.textContent = `$${subtotal.toFixed(2)}`;
    }
}

// Global hooks for cart actions
window.changeQty = function(productId, val) {
    const item = cart.find(item => item.product.id === productId);
    if (!item) return;
    
    item.quantity += val;
    if (item.quantity <= 0) {
        removeCartItem(productId);
    } else {
        updateCart();
    }
}

window.removeCartItem = function(productId) {
    cart = cart.filter(item => item.product.id !== productId);
    updateCart();
    showToast("Item removed from cart");
}

// Drawer Toggles
function openCartDrawer() {
    cartOverlay.style.display = 'block';
    // Small delay to allow display to register before adding slide transition
    setTimeout(() => {
        cartDrawer.classList.add('open');
    }, 10);
}

function closeCartDrawer() {
    cartDrawer.classList.remove('open');
    setTimeout(() => {
        cartOverlay.style.display = 'none';
    }, 300);
}

navCartBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openCartDrawer();
});
cartCloseBtn.addEventListener('click', closeCartDrawer);
cartOverlay.addEventListener('click', closeCartDrawer);

// Checkout
cartCheckoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        showToast("Your cart is empty. Add products to buy!");
        return;
    }
    closeCartDrawer();
    showToast("🎉 Thank you! Order placed successfully!", "success");
    cart = [];
    updateCart();
});

// --- 6. LOCATION PICKER LOGIC ---
function openLocationModal() {
    locationOverlay.style.display = 'flex';
}

function closeLocationModal() {
    locationOverlay.style.display = 'none';
}

navLocationBtn.addEventListener('click', openLocationModal);
locationCloseBtn.addEventListener('click', closeLocationModal);
locationOverlay.addEventListener('click', (e) => {
    if (e.target === locationOverlay) {
        closeLocationModal();
    }
});

pincodeApplyBtn.addEventListener('click', () => {
    const pin = pincodeInput.value.trim();
    if (/^\d{6}$/.test(pin)) {
        navLocationText.textContent = `India, ${pin}`;
        closeLocationModal();
        showToast(`Delivery location updated to India - ${pin}!`, "success");
    } else if (pin === '') {
        showToast("Please enter a pincode.");
    } else {
        showToast("Please enter a valid 6-digit pincode.");
    }
});

locationDoneBtn.addEventListener('click', () => {
    const selectedCountry = countrySelect.value;
    if (pincodeInput.value.trim() !== '') {
        // If pincode entered, apply that instead
        pincodeApplyBtn.click();
    } else {
        navLocationText.textContent = selectedCountry;
        closeLocationModal();
        showToast(`Delivery location updated to ${selectedCountry}!`, "success");
    }
});

// --- 7. AUTO-SUGGEST SEARCH LOGIC ---
const sampleSuggestions = [
    "ipad pro",
    "instant pot 6 qt",
    "keurig coffee pods",
    "samsung galaxy s24",
    "noise cancelling headphones",
    "washing machine front load",
    "fitbit charge fitness bands",
    "knife block sets",
    "air fryer recipes book",
    "smartwatch for Android",
    "laptop backpacks water resistant"
];

function showSuggestions() {
    const query = searchInput.value.toLowerCase().trim();
    if (query === '') {
        searchSuggestions.style.display = 'none';
        return;
    }
    
    const filtered = sampleSuggestions.filter(s => s.includes(query))
        .concat(allProducts.filter(p => p.title.toLowerCase().includes(query)).map(p => p.title));
        
    const uniqueFiltered = [...new Set(filtered)].slice(0, 7); // Max 7 suggestions
    
    if (uniqueFiltered.length === 0) {
        searchSuggestions.style.display = 'none';
        return;
    }
    
    searchSuggestions.innerHTML = uniqueFiltered.map(item => `
        <div onclick="selectSuggestion('${item.replace(/'/g, "\\'")}')">
            🔍 &nbsp; ${item}
        </div>
    `).join('');
    searchSuggestions.style.display = 'block';
}

window.selectSuggestion = function(val) {
    searchInput.value = val;
    searchSuggestions.style.display = 'none';
    executeSearch();
}

searchInput.addEventListener('input', showSuggestions);
searchInput.addEventListener('focus', () => {
    if (searchInput.value.trim() !== '') {
        showSuggestions();
    }
});

// Close suggestions when clicking outside
document.addEventListener('click', (e) => {
    if (e.target !== searchInput && e.target !== searchSuggestions) {
        searchSuggestions.style.display = 'none';
    }
});

function executeSearch() {
    const query = searchInput.value.trim();
    if (query !== '') {
        showToast(`Search results for "${query}" (Mock)`, 'success');
        // Clear input
        searchInput.value = '';
    } else {
        showToast("Please enter a search term.");
    }
}

searchSubmitBtn.addEventListener('click', executeSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        executeSearch();
    }
});

// --- 8. BACK TO TOP BUTTON ---
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// --- 9. TOAST NOTIFICATION UTILITY ---
let toastTimeout;
function showToast(message, type = '') {
    clearTimeout(toastTimeout);
    
    toastNotification.textContent = message;
    toastNotification.className = "toast-notification"; // Reset classes
    
    if (type === 'success') {
        toastNotification.classList.add('success');
    }
    
    toastNotification.classList.add('show');
    
    toastTimeout = setTimeout(() => {
        toastNotification.classList.remove('show');
    }, 3000);
}
window.showToast = showToast;
