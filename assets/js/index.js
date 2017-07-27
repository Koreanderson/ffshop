// Products

const imgDir = document.location.hostname + 'assets/img/product-thumbs/';

const ether = new Product('Ether', '400', '5', imgDir + 'Ether.png');
const potion = new Product('Potion', '300', '5', imgDir + 'Potion.png');
const phoenixDown = new Product('Phoenix Down', '600', '5', imgDir + 'PhoenixDown.png');

// Wallet
const cloudWallet = new Wallet('Cloud', 7000);
const tidusWallet = new Wallet('Tidus', 6000);
const squallWallet = new Wallet('Squall',5000);

const wallets = [cloudWallet, tidusWallet, squallWallet];

// Wallet Renderer
const walletRenderer = new WalletRenderer(wallets);

// Product List
const myProducts = [ether, potion, phoenixDown];

// Shop
const myShop = new Shop('New Gridania Shop' , myProducts);

//Shop Renderer
const shopRenderer = new ShopRenderer(myShop, wallets);

//walletRenderer.render(wallets);
//walletRenderer.enableWalletSelection(wallets);


shopRenderer.render(myShop, wallets);
shopRenderer.selectWallet();
shopRenderer.enablePurchasing(cloudWallet);
