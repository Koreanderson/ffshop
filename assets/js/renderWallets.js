class WalletRenderer {
	constructor(wallets) {
		this.wallets = wallets;
	}
	render(wallets) {

		for(var i = 0; i < wallets.length; i++) {
			const currentWallet = wallets[i];

			const newDiv = function(){
				return document.createElement('div');
			};

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
			walletButton.dataset.walletIndex = i;
			newWallet.appendChild(walletButton);
		}
	}

	enableWalletSelection(wallets){
		const shop = this.shop;

		for(var i = 0; i < wallets.length; i++){
			const walletButton = document.querySelector('[data-wallet-index="' + i + '"]');
			//console.log(this.shop.products[i]);

			walletButton.addEventListener('click', function(){
				shop.selectWallet(justinsWallet);
			})
		}
	}
}
