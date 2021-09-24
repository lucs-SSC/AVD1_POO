"use strict";
var Funcionarios = /** @class */ (function () {
    function Funcionarios(_nome, _salarioHora, _diasTrabalhados, _totFaltas) {
        this._nome = _nome;
        this._salarioHora = _salarioHora;
        this._diasTrabalhados = _diasTrabalhados;
        this._totFaltas = _totFaltas;
    }
    Object.defineProperty(Funcionarios.prototype, "nome", {
        //Getters
        get: function () {
            return this._nome;
        },
        //Setters
        set: function (nome) {
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionarios.prototype, "salarioHora", {
        get: function () {
            return this._salarioHora;
        },
        set: function (salarioHora) {
            this.salarioHora = salarioHora;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionarios.prototype, "diasTrabalhados", {
        get: function () {
            return this._diasTrabalhados;
        },
        set: function (diasTrabalhados) {
            this.diasTrabalhados = diasTrabalhados;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionarios.prototype, "totFaltas", {
        get: function () {
            return this._totFaltas;
        },
        set: function (totFaltas) {
            this.totFaltas = totFaltas;
        },
        enumerable: false,
        configurable: true
    });
    Funcionarios.prototype.salBruto = function () {
        return this._salarioHora * this._diasTrabalhados;
    };
    Funcionarios.prototype.PLR = function () {
        if (this._totFaltas == 0) {
            return this.salBruto();
        }
        else if (this._totFaltas == 1) {
            return this.salBruto() * 0.94;
        }
        else if (this._totFaltas == 2) {
            return this.salBruto() * 0.92;
        }
        else if (this._totFaltas == 3) {
            return this.salBruto() * 0.90;
        }
        else if (this._totFaltas == 4) {
            return this.salBruto() * 0.88;
        }
        else {
            return 0;
        }
    };
    Funcionarios.prototype.desconto = function () {
        return this.salBruto() * 0.05;
    };
    Funcionarios.prototype.salLiquido = function () {
        return (this.salBruto() - this.desconto()) + this.PLR();
    };
    Funcionarios.prototype.mensagemUm = function () {
        return "O funcion\u00E1rio de nome " + this.nome + " tem o sal\u00E1rio bruto de " + this.salBruto() + ", teve " + this.totFaltas + " faltas totais e sua PLR foi de " + this.PLR();
    };
    Funcionarios.prototype.mensagemDois = function () {
        return "O funcion\u00E1rio de nome " + this.nome + " tem o sal\u00E1rio bruto de " + this.salBruto() + ", o desconto de " + this.desconto() + ", a PLR de " + this.PLR() + " e o sal\u00E1rio l\u00EDquido de " + this.salLiquido();
    };
    return Funcionarios;
}());
var func = new Funcionarios('João', 5, 30, 0);
console.log(func.mensagemUm());
console.log(func.mensagemDois());
