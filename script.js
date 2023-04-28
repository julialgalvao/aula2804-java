// DELARANDO A VARIAVEL MSG 
let msg =document.getElementById('msg')

// criar objeto com array
const usuarios =[
    {nome: "HUGUINHO", idade:18},
    {nome: "LUIZINHO", idade:19},
    {nome: "ZEZINHO", idade:20},
];

let users= usuarios.length;
for(let i=0; i<users;i++){
    msg.innerHTML +=`<p>${usuarios[i].nome}
    ${usuarios[i].idade}</p>`
}

// criando slideshow

// criando um array de imgs

var imagens=[
    'imgs/images.jpg',
    'imgs/peaches2.png',
    'imgs/peaches3.jpg',
];

// declarando as variaveis

 let Index =0; //indica a posiçao
 let time =2000; // indica o tempo das iamgens
// criando a uma funçao
function slideshow(){
    // pega o id e o caminho da imagem
    document.getElementById('imgs').src=imagens[Index];
    Index++;//incrementa 
    //verifica se o tem imagens e faz contagem
    if(Index ==imagens.length){Index=0}
    //chama a funçao e define o tempo/time
    setTimeout("slideshow()",time);


}
//executando a funcao
slideshow();

