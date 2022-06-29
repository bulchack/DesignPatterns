interface Component{
    getDetail(): string;
}

class ProductComponent implements Component{
    protected name: string;
    
    constructor(name: string){
        this.name = name;
    }

    public getDetail(): string {
        return `${this.name}`;
    }
}

abstract class ProductDecorator implements Component{
    protected component: Component;

    constructor(component: Component){
        this.component = component;
    }

    public getDetail(): string {
        return `${this.component.getDetail()}`;
    }
}

class CommercialInfoProductDecorator extends ProductDecorator{
    private tradename: string;
    private brand: string;

    constructor(component: Component, tradename: string, brand: string){
        super(component);

        this.tradename = tradename;
        this.brand = brand;
    }

    public getDetail(): string {
        return `${this.tradename} ${this.brand} ${super.getDetail()}`
    }
}

class StoreProductDecorator extends ProductDecorator {
    private price: number;

    constructor(component: Component, price: number){
        super(component);

        this.price = price;
    }

    public getDetail(): string {
        return `${super.getDetail()} $ ${this.price}`;
    }
}

//component without decorator
const product = new ProductComponent('Beer');
console.log(product.getDetail());

//decorator 1
const commercialInfo = new CommercialInfoProductDecorator(product, 'TradeNameBudweiser', 'BrandBudweiser');
console.log(commercialInfo.getDetail());

//decorator 2 with the component
const storeProduct = new StoreProductDecorator(product, 10);
console.log(storeProduct.getDetail());

//decorator 3 with the decorator 1
const storeProduct2 = new StoreProductDecorator(commercialInfo, 20);
console.log(storeProduct2.getDetail());