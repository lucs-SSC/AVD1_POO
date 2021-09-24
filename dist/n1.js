"use strict";
var Product = /** @class */ (function () {
    function Product(_produto, _preco, _quantidade) {
        this._produto = _produto;
        this._preco = _preco;
        this._quantidade = _quantidade;
    }
    Object.defineProperty(Product.prototype, "produto", {
        get: function () {
            return this._produto;
        },
        set: function (produto) {
            if (produto == '') {
                throw new Error('Insira um produto!');
            }
            this._produto = produto;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "preco", {
        get: function () {
            return this._preco;
        },
        set: function (preco) {
            if (preco <= 0) {
                throw new Error('Insira um preço válido!');
            }
            this._preco = preco;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "quantidade", {
        get: function () {
            return this._quantidade;
        },
        set: function (quantidade) {
            if (quantidade <= 0) {
                throw new Error('Quantidade tem que ser maior que 0!');
            }
            this._quantidade = quantidade;
        },
        enumerable: false,
        configurable: true
    });
    Product.prototype.desconto = function () {
        if (this._quantidade <= 10) {
            return 0;
        }
        else if (this._quantidade > 10 && this._quantidade <= 20) {
            return this._preco * 0.10;
        }
        else if (this._quantidade > 20 && this._quantidade <= 50) {
            return this._preco * 0.20;
        }
        else {
            return this._preco * 0.25;
        }
    };
    Product.prototype.valorPago = function () {
        return (this._preco * this._quantidade) - this.desconto();
    };
    Product.prototype.message = function () {
        return "O produto " + this.produto + " de pre\u00E7o R$" + this.preco.toFixed(2) + ", quantidade comprada de " + this.quantidade + " teve o desconto de " + this.desconto() + " e o valor pago foi de R$" + this.valorPago();
    };
    return Product;
}());
var p1 = new Product('KitKat', 15, 10);
try {
    p1.produto = 'KitKat';
    p1.preco = 10;
    p1.quantidade = 51;
    console.log(p1.message());
}
catch (error) {
    console.log(error.message);
}
