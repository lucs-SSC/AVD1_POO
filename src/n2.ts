class  conversao{
    constructor(
        public _unidade:number
    ){ }
    
    get unidade(){
        return this._unidade
    }

    set unidade(unidade:number){
        if(unidade <= 0){
            throw new Error('Insira uma unidade válida!')
        }
        this._unidade = unidade
    }
    
    public static conversorMinutoSegundo(unidade:number){
        let minSec = unidade * 60
        return console.log(`A quantidade de ${unidade} minutos que foram inseridos, ao serem convertidos para segundos resulta em: ${minSec}s`)
    }
    
    public static conversorHoraPraMinuto(unidade:number){
        let horaMin = unidade * 60
        return console.log(`A quantidade de ${unidade} horas que foram inseridas, ao serem convertidas para minutos resulta em: ${horaMin} minutos`)
    }
    
    public static conversorHoraPraDia(unidade:number){
        let horaDia = unidade * 24
        return console.log(`A quantidade de ${unidade} dias que foram inseridos, ao serem convertido para horas resulta em: ${horaDia} horas`)
    }
    
    public static conversorDiaPraSemana(unidade:number){
        let diaSemana = unidade * 7
        return console.log(`A quantidade de ${unidade} semanas que foram inseridas, ao serem convertidas para dias resulta em: ${diaSemana} dias`)
    }
    
    public static conversorMesPraDia(unidade:number){
        let mesDia = unidade * 30
        return console.log(`A quantidade de ${unidade} meses que foram inseridos, ao serem convertidos para dias resulta em: ${mesDia} dias`)
    }
    
    public static conversorAnoPraDia(unidade:number){
        let anoDia = unidade * 365
        return console.log(`A quantidade de ${unidade} anos que foram inseridos, ao ser convertido para dias resulta em: ${anoDia} dias`)
    }


}
conversao.conversorMinutoSegundo(2)
conversao.conversorHoraPraMinuto(2)
conversao.conversorHoraPraDia(2)
conversao.conversorDiaPraSemana(2)
conversao.conversorMesPraDia(2)
conversao.conversorAnoPraDia(2)