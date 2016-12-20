class Shop {
	constructor(name, products) {
		this.name = name;
		this.products = products;
	}

	selectWallet(wallet){
		currentWallet = wallet;
		console.log(currentWallet);
	}

	purchaseProduct(product, wallet) {

		const products = this.products;

		console.log('Purchasing ' + product.name + ' for ' + product.price);

		const price = product.price;

		if (wallet.budget > price && product.quantity > 0){
			product.quantity--;
			wallet.budget = wallet.budget - product.price;

			console.log(wallet.owner + "'s Remaining Budget: " + wallet.budget);
		} 
		else {
			if (wallet.budget < price) {
				console.log('Insufficient Funds');
				console.log(wallet.owner + "'s Remaining Budget: " + wallet.budget);
			}
			if (product.quantity <= 0){
				console.log('Product out of stock.');
				console.log(wallet.owner + "'s Remaining Budget: " + wallet.budget);
			}
		}
	}
}
