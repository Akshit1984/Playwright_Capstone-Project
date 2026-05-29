// @ts-check
import { BasePage } from './base.page.js';

export class ProductPage extends BasePage {
  async verifyPROD001HomePageShowsWelcomeContentAndFeaturedProducts() {
    await this.checkPage({ route: '/', text: ['Welcome to our store', 'Featured products'] });
  }

  async verifyPROD002TopNavigationExposesCatalogCategories() {
    await this.checkPage({ route: '/', visible: ['a[href="/books"]', 'a[href="/computers"]', 'a[href="/electronics"]'] });
  }

  async verifyPROD003BooksCategoryShowsProductCards() {
    await this.checkPage({ route: '/books', heading: 'Books', minimum: [['.product-grid .item-box', 3]] });
  }

  async verifyPROD004ComputersCategoryShowsSubcategories() {
    await this.checkPage({ route: '/computers', heading: 'Computers', text: ['Desktops', 'Notebooks'] });
  }

  async verifyPROD005ElectronicsCategoryShowsSubcategories() {
    await this.checkPage({ route: '/electronics', heading: 'Electronics', text: ['Camera, photo', 'Cell phones'] });
  }

  async verifyPROD006ApparelAndShoesCategoryShowsProducts() {
    await this.checkPage({ route: '/apparel-shoes', heading: 'Apparel & Shoes', minimum: [['.product-grid .item-box', 5]] });
  }

  async verifyPROD007DigitalDownloadsCategoryOpens() {
    await this.checkPage({ route: '/digital-downloads', heading: 'Digital downloads', minimum: [['.product-grid .item-box', 3]] });
  }

  async verifyPROD008JewelryCategoryOpensWithProductCards() {
    await this.checkPage({ route: '/jewelry', heading: 'Jewelry', minimum: [['.product-grid .item-box', 3]] });
  }

  async verifyPROD009GiftCardsCategoryOpensWithProducts() {
    await this.checkPage({ route: '/gift-cards', heading: 'Gift Cards', minimum: [['.product-grid .item-box', 4]] });
  }

  async verifyPROD010BuildYourOwnComputerProductDetailsAreVisible() {
    await this.checkPage({
      route: '/build-your-own-computer',
      heading: 'Build your own computer',
      visible: ['#product_attribute_16_5_4', '#product_attribute_16_6_5'],
    });
  }

  async verifyPROD011LaptopProductDetailsAreVisible() {
    await this.checkPage({ route: '/141-inch-laptop', heading: '14.1-inch Laptop', text: ['Availability: In stock', '1590.00'] });
  }

  async verifyPROD012SmartphoneProductDetailsAreVisible() {
    await this.checkPage({ route: '/smartphone', heading: 'Smartphone', text: ['Newest Tricentis smartphone', '100.00'] });
  }

  async verifyPROD013BookProductPageShowsPriceAndShippingText() {
    await this.checkPage({ route: '/computing-and-internet', heading: 'Computing and Internet', text: ['Free shipping', '10.00'] });
  }

  async verifyPROD014CategoryPageHasSortAndPageSizeControls() {
    await this.checkPage({ route: '/books', visible: ['#products-orderby', '#products-pagesize'] });
  }

  async verifyPROD015SearchPageReturnsComputerProducts() {
    await this.checkPage({ route: '/search?q=computer', heading: 'Search', visible: ['#Q'], text: ['Build your own computer'] });
  }
}
