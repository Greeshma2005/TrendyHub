document.addEventListener('DOMContentLoaded', function() {
    const products = document.querySelectorAll('.row');

    products.forEach(product => {
        const image = product.querySelector('img');
        const productName = product.querySelector('.Price h4').innerText;
        const productPrice = product.querySelector('.Price p').innerText;

        image.addEventListener('click', () => {
            const modalImage = document.getElementById('modalImage');
            const modalProductName = document.getElementById('modalProductName');
            const modalProductPrice = document.getElementById('modalProductPrice');
            const modalQuantity = document.getElementById('modalQuantity');
            const modal = document.getElementById('productModal');

            modalImage.src = image.src;
            modalProductName.innerText = productName;
            modalProductPrice.innerHTML = `<i class='bx bx-rupee'></i> ${productPrice}`;
            modalQuantity.value = 1;

            modal.style.display = 'block';

            const closeModal = document.querySelector('.close');
            closeModal.onclick = function() {
                modal.style.display = 'none';
            };

            const addToCartBtn = document.getElementById('addToCartBtn');
            addToCartBtn.onclick = function() {
                modal.style.display = 'none';
                product.scrollIntoView({ behavior: 'smooth' });
            };
        });
    });
});
