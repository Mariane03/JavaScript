const frutas = ['laranja', 'banana', 'uva']

let [fruta1, , fruta3] = frutas

//console.log(fruta1)
//console.log(fruta3)

const pessoa = {
    nome: 'João',
    idade: 20,
    país: 'Brasil',
    idioma: 'Português'

}

const localidade = ({país, idioma}) => `Você mora no ${país} e fala ${idioma}.`

console.log(localidade(pessoa))