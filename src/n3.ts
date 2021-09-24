class Funcionarios{
    constructor(
        private _nome:string,
        private _salarioHora: number,
        private _diasTrabalhados: number,
        private _totFaltas: number
    ){ }
    
    //Getters
    get nome(){
        return this._nome
    }
    
    get salarioHora(){
        return this._salarioHora
    }
    
    get diasTrabalhados(){
        return this._diasTrabalhados
    }
    
    get totFaltas(){
        return this._totFaltas
    }

    //Setters
    set nome(nome:string){
        this._nome = nome
    }
    
    set salarioHora(salarioHora:number){
        this.salarioHora = salarioHora
    }
    set diasTrabalhados(diasTrabalhados:number){
        this.diasTrabalhados = diasTrabalhados
    }
    set totFaltas(totFaltas:number){
        this.totFaltas = totFaltas
    }

    public salBruto(){
        return this._salarioHora * this._diasTrabalhados
    }
    
    public PLR():number{
        if(this._totFaltas == 0){
            return this.salBruto()
        }else if(this._totFaltas == 1){
            return this.salBruto() * 0.94
        }else if(this._totFaltas == 2){
            return this.salBruto() * 0.92
        }else if(this._totFaltas == 3){
            return this.salBruto() * 0.90
        }else if(this._totFaltas == 4){
            return this.salBruto() * 0.88
        }else {
            return 0
        }
    }

    public desconto(){
        return this.salBruto() * 0.05
    }

    public salLiquido(){
        return (this.salBruto() - this.desconto()) + this.PLR()
    }

    public mensagemUm(){
        return `O funcionário de nome ${this.nome} tem o salário bruto de ${this.salBruto()}, teve ${this.totFaltas} faltas totais e sua PLR foi de ${this.PLR()}`
    }

    public mensagemDois(){
        return `O funcionário de nome ${this.nome} tem o salário bruto de ${this.salBruto()}, o desconto de ${this.desconto()}, a PLR de ${this.PLR()} e o salário líquido de ${this.salLiquido()}`
    }
}

let func = new Funcionarios('João', 5, 30, 0)
console.log(func.mensagemUm())
console.log(func.mensagemDois())