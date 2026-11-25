export class CatalogPage {
  constructor(page) {
    this.page = page;
  }

  async search(query) {
    // BEGIN
    await this.page.getByPlaceholder(/search/i).fill(query);
    // END
  }

  async selectBrand(brand) {
    // BEGIN
    await this.page.getByRole('checkbox', { name: brand, exact: true }).check();
    // END
  }

  async openProduct(name) {
    // BEGIN
    // END
  }

  async nextPage() {
    // BEGIN
    await this.page.getByRole('link', { name: 'Next', exact: true }).first().click();
    // END
  }
}

