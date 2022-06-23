class SaleContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  executeStrategy(price) {
    return this.strategy.calculate(price);
  }
}

class RegularSalesStrategy {
    constructor(tax) {
        this.tax = tax;
    }

  calculate(price) {
    return price + price * this.tax;
  }
}

class DiscountSalesStrategy {
    constructor(tax, discount) { 
        this.tax = tax;
        this.discount = discount;
    }
  calculate(price) {
    return price + (price * this.tax) - this.discount;
  }
}

// const regularSale = new RegularSalesStrategy(0.16);
// const discountSale = new DiscountSalesStrategy(0.16, 3);
// const sale = new SaleContext(regularSale);
// console.log(sale.executeStrategy(10));
// sale.setStrategy(discountSale);
// console.log(sale.executeStrategy(10));

const data = [
  {
    name: "Cerveza 1",
    country: "Argentina",
    info: "Info cerveza 1",
    img: "https://krosscl.vtexassets.com/arquivos/ids/155600-1200-auto?v=637789811272000000&width=1200&height=auto&aspect=true",
  },
  {
    name: "Cerveza 2",
    country: "Venezuela",
    info: "Info cerveza 2",
    img: "https://santaisabel.vtexassets.com/arquivos/ids/174397-360-360?width=360&height=360&aspect=true",
  },
  {
    name: "Cerveza 3",
    country: "Chile",
    info: "Info cerveza 3",
    img: "https://santaisabel.vtexassets.com/arquivos/ids/158738/Pack-cerveza-6-un-330-cc-c-u.jpg?v=637469317888800000",
  }
];

class InfoContext {
  constructor(strategy, data, element) {
    this.setStrategy(strategy);
    this.data = data;
    this.element = element;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  show() {
    this.strategy.show(this.data, this.element);
  }
}

class ListStrategy {
  show(data, element) {
    element.innerHTML = data.reduce((acc, item) => {
      return acc + `<div>
        <h2>${item.name}</h2>
        <p>${item.country}</p>
        </div>
      <hr>`;
    }, '');
  }
}

class DetalledListStrategy {
  show(data, element) {
    element.innerHTML = data.reduce((acc, item) => {
      return acc + `<div>
        <h2>${item.name}</h2>
        <p>${item.country}</p>
        <p>${item.info}</p>
        </div>
      <hr>`;
    }, '');
  }
}

class ImageListStrategy {
  show(data, element) {
    element.innerHTML = data.reduce((acc, item) => {
      return acc + `<div>
        <h2>${item.name}</h2>
        <img width="10%" src="${item.img}">
        </div>
      <hr>`;
    }, '');
  }
}

const strategies = [
  new ListStrategy(),
  new DetalledListStrategy(),
  new ImageListStrategy()
];

const info = new InfoContext( new ListStrategy(), data, content);
info.show();

slcOptions.addEventListener('change', e => {
  const op = e.target.value;
  info.setStrategy(strategies[op]);
  info.show();
})