class ShopRenderer {
	constructor(shop, wallets){
		this.shop = shop;
		this.wallets = wallets;
	};

	render(shop, wallets){
		const newDiv = function(){
			return document.createElement('div');
		};
		// Create Shop Container
		const shopContain = newDiv();
		shopContain.id = 'shopContainer';
		shopContain.className += ' shop-contain container';
		
		const headerEl = document.querySelector('.header');
		document.body.insertBefore(shopContain, headerEl.nextSibling); 

		// Create Shop DOM Element
		const shopEl = newDiv();
		shopEl.id = 'shop';
		shopEl.className += 'row products-container';
		shopEl.innerHTML = '<h1>' + shop.name + '</h1>';

		document.getElementById('shopContainer').appendChild(shopEl);

		// Create Wallet Container DOM Element
		const walletsContainer = newDiv();
		walletsContainer.id = 'walletsContainer';
		walletsContainer.className = 'row wallets-container';
		walletsContainer.innerHTML = '<h2>Available Wallets:</h2>';
		document.getElementById('shopContainer').insertBefore(walletsContainer, shopEl);

		for(var i = 0; i < wallets.length; i++) {
			const currentWallet = wallets[i];

			const newWallet = newDiv();
			newWallet.className += 'wallet col-sm-4';


			walletsContainer.appendChild(newWallet);

			const walletOwner = newDiv();
			walletOwner.className = 'owner';
			walletOwner.innerHTML = currentWallet.owner;
			newWallet.appendChild(walletOwner);

			const walletBudget = newDiv();
			walletBudget.className = 'budget';
			walletBudget.innerHTML = currentWallet.budget;

			newWallet.appendChild(walletBudget);

			const walletButton = document.createElement('button');
			walletButton.innerHTML = "Select Wallet";
			newWallet.appendChild(walletButton);

		}
		const products = shop.products;

		// Create Products DOM Element
		const productList = newDiv();
		productList.id = 'productList';

		shopEl.appendChild(productList);

		for(var i = 0; i < products.length; i++) {
			const newProduct = newDiv();
			newProduct.dataset.productIndex = i;
			newProduct.className = ' col-sm-4 product';
			productList.appendChild(newProduct);

			// Create Product Attribute DOM Elements
			newProduct.insertAdjacentHTML('beforeend','<div class="thumb"><img src="' + products[i].thumbnail + '"></div>');
			newProduct.insertAdjacentHTML('beforeend','<div class="name">' + products[i].name + '</div>');
			newProduct.insertAdjacentHTML('beforeend','<div class="price">' + products[i].price + ' Gil</div>');
			newProduct.insertAdjacentHTML('beforeend','<div class="quantity">' + products[i].quantity + '</div>');
			newProduct.insertAdjacentHTML('beforeend','<button id="purchase' + i + '">Purchase</button>');

		}
	}
	selectWallet(){
		for(var i = 0; i < wallets.length; i++) {

			const allWallets = document.getElementsByClassName('wallet');
			const currentWallet = allWallets[i];
			allWallets[0].id = 'currentWallet'; // Set default wallet
			currentWallet.dataset.walletIndex = i;

			const walletButton = document.querySelector('[data-wallet-index="' + i + '"]');

			walletButton.addEventListener('click', function(){
				for (var j = 0; j < allWallets.length; j++){
					allWallets[j].removeAttribute('id');
				}
				currentWallet.id = 'currentWallet';

			});
		}
	}
	enablePurchasing(wallet){
		const shop = this.shop;
		const products = this.shop.products;

		for(var i = 0; i < products.length; i++) {
			const purchaseButton = document.getElementById('purchase' + i);
			const currentWalletEl = document.getElementById('currentWallet');
			const currentProduct = products[i];
			const walletIndex = currentWallet.dataset.walletIndex;
			const walletEl = document.querySelector('[data-wallet-index="' + i + '"]');
			const currentProductIndex = i;

			purchaseButton.addEventListener('click', function(){

				const currentWalletEl = document.getElementById('currentWallet');
				const currentWalletIndex = currentWalletEl.dataset.walletIndex;
				const budgetEl = currentWalletEl.getElementsByClassName('budget')[0];

				shop.purchaseProduct(currentProduct, wallets[currentWalletIndex]);
				budgetEl.innerHTML = wallets[currentWalletIndex].budget;

				// decrement stock quantity
				const currentQuantity = currentProduct.quantity;
				const currentProductEl = document.querySelector('[data-product-index="' + currentProductIndex +'"]');
				const productQuantity = currentProductEl.getElementsByClassName('quantity')[0];
				if (currentQuantity <= 0){
					productQuantity.innerHTML = 'Out Of Stock';
				} else{
					productQuantity.innerHTML = currentQuantity;
				}
			});
		}
	}
}
