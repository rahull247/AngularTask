var Product = /** @class */ (function () {
    function Product(productId) {
        if (productId === void 0) { productId = 0; }
        this.productId = 0;
        this.productName = "";
        this.productUnitPrice = 0;
        this.productQuantity = 0;
        this.productId = productId;
    }
    Object.defineProperty(Product.prototype, "ProductId", {
        get: function () {
            return this.ProductId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "ProductName", {
        get: function () {
            return this.productName;
        },
        set: function (productName) {
            this.productName = productName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "ProductUnitPrice", {
        get: function () {
            return this.productUnitPrice;
        },
        set: function (productUnitPrice) {
            this.productUnitPrice = productUnitPrice;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "ProductQuantity", {
        get: function () {
            return this.productQuantity;
        },
        set: function (productQuantity) {
            this.productQuantity = productQuantity;
        },
        enumerable: false,
        configurable: true
    });
    Product.prototype.getproductDeatils = function () {
        console.log("Product Info:: Id:" + this.productId + ", Name:" + this.productName + ", Unit Price:" + this.productUnitPrice + ", Quantity:" + this.productQuantity);
        console.log("-----------------------------------------------");
    };
    return Product;
}());
var objProduct = new Product(1);
objProduct.ProductName = "Biscuits";
objProduct.ProductUnitPrice = 10;
objProduct.ProductQuantity = 2;
objProduct.getproductDeatils();
