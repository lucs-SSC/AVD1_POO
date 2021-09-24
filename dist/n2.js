"use strict";
var conversao = /** @class */ (function () {
    function conversao(_unidade) {
        this._unidade = _unidade;
    }
    Object.defineProperty(conversao.prototype, "unidade", {
        get: function () {
            return this._unidade;
        },
        set: function (unidade) {
            if (unidade <= 0) {
                throw new Error('Insira uma unidade válida!');
            }
            this._unidade = unidade;
        },
        enumerable: false,
        configurable: true
    });
    conversao.conversorMinutoSegundo = function (unidade) {
        var minSec = unidade * 60;
        return console.log("A quantidade de " + unidade + " minutos que foram inseridos, ao serem convertidos para segundos resulta em: " + minSec + "s");
    };
    conversao.conversorHoraPraMinuto = function (unidade) {
        var horaMin = unidade * 60;
        return console.log("A quantidade de " + unidade + " horas que foram inseridas, ao serem convertidas para minutos resulta em: " + horaMin + " minutos");
    };
    conversao.conversorHoraPraDia = function (unidade) {
        var horaDia = unidade * 24;
        return console.log("A quantidade de " + unidade + " dias que foram inseridos, ao serem convertido para horas resulta em: " + horaDia + " horas");
    };
    conversao.conversorDiaPraSemana = function (unidade) {
        var diaSemana = unidade * 7;
        return console.log("A quantidade de " + unidade + " semanas que foram inseridas, ao serem convertidas para dias resulta em: " + diaSemana + " dias");
    };
    conversao.conversorMesPraDia = function (unidade) {
        var mesDia = unidade * 30;
        return console.log("A quantidade de " + unidade + " meses que foram inseridos, ao serem convertidos para dias resulta em: " + mesDia + " dias");
    };
    conversao.conversorAnoPraDia = function (unidade) {
        var anoDia = unidade * 365;
        return console.log("A quantidade de " + unidade + " anos que foram inseridos, ao ser convertido para dias resulta em: " + anoDia + " dias");
    };
    return conversao;
}());
conversao.conversorMinutoSegundo(2);
conversao.conversorHoraPraMinuto(2);
conversao.conversorHoraPraDia(2);
conversao.conversorDiaPraSemana(2);
conversao.conversorMesPraDia(2);
conversao.conversorAnoPraDia(2);
