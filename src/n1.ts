class Product{
    constructor(
        private _produto:string,
        private _preco:number,
        private _quantidade:number
    ){ }

    get produto(){
        return this._produto
    }

    get preco(){
        return this._preco
    }
    
    get quantidade(){
        return this._quantidade
    }

    set produto(produto:string){
        if(produto == ''){
            throw new Error('Insira um produto!')
        }
        this._produto = produto
    }
    set preco(preco:number){
        if(preco <= 0){
            throw new Error('Insira um preço válido!')
        }
        this._preco = preco
    }
    set quantidade(quantidade:number){
        if(quantidade <= 0){
            throw new Error('Quantidade tem que ser maior que 0!')
        }
        this._quantidade = quantidade
    }

    public desconto(){
        if(this._quantidade <= 10){
            return 0
        }else if(this._quantidade > 10 && this._quantidade <= 20){
            return this._preco * 0.10
        }else if(this._quantidade > 20 && this._quantidade <= 50){
            return this._preco * 0.20
        }else{
            return this._preco * 0.25
        }
    }

    public valorPago(){
        return (this._preco * this._quantidade) - this.desconto()
    }

    public message(){
        return `O produto ${this.produto} de preço R$${this.preco.toFixed(2)}, quantidade comprada de ${this.quantidade} teve o desconto de ${this.desconto()} e o valor pago foi de R$${this.valorPago()}`
    }
}

let p1 = new Product('KitKat', 15, 10)

try{
    p1.produto = 'KitKat'
    p1.preco = 10
    p1.quantidade = 51
    
    console.log(p1.message())
}catch(error:any){
    console.log(error.message)
}