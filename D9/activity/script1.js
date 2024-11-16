document.addEventListener('DOMContentLoaded', async () => {
    const productListContainer = document.getElementById('product-list')

    try{
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        
        products.forEach( product => {
            const productCard = document.createElement("div");
            productCard.classList.add("col-md-4", "col-lg-3", "mb-4");


            productCard.innerHTML = `
                    <div class="card h-100 shadow-sm">
                        <img src="${product.image}" class="card-img-top" alt="${product.title}">
                        <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-description text-muted">${product.description}</p>
                        <div class="mt-auto">
                            <h6 class="card-price text-primary">$${product.price.toFixed(2)}</h6>
                        </div>
                        </div>
                    </div>
                    `;

            productListContainer.appendChild(productCard);
        });

    }catch (error){
        console.error("Error fetching products:", error);
        productListContainer.innerHTML = `
          <div class="col-12">
            <div class="alert alert-danger text-center" role="alert">
              Failed to load products. Please try again later.
            </div>
          </div>
        `;
    }
});