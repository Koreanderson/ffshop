// Products
const ether = new Product('Ether', '400', '5', 'thumb');
const potion = new Product('Potion', '300', '5', 'thumb');
const phoenixDown = new Product('Phoenix Down', '600', '5', 'thumb');

// Wallet
const myWallet = new Wallet('Brian', 2000);
const jeffsWallet = new Wallet('Jeff', 5000);
const justinsWallet = new Wallet('Justin',7700);

const wallets = [myWallet, jeffsWallet, justinsWallet];

// Wallet Renderer
const walletRenderer = new WalletRenderer(wallets);

// Product List
const myProducts = [ether, potion, phoenixDown];

// Shop
const myShop = new Shop('Title' , myProducts);

//Shop Renderer
const shopRenderer = new ShopRenderer(myShop, wallets);

//walletRenderer.render(wallets);
//walletRenderer.enableWalletSelection(wallets);


shopRenderer.render(myShop, wallets);
shopRenderer.selectWallet();
shopRenderer.enablePurchasing(myWallet);
