import input from 'readline-sync'

import Monstro from "./t20anlz.js";
// struct responsavel por guardar as informações do Monstro



    // objeto Monstro é guardado em varios array
    let Monstros = []
    let escolha, y
   
        


        
   





function exibirMonstros() {
    Monstros.forEach((Monstro, index) => {
      console.log(` Monstro Monstro ${index + 1}:`);
      Monstro.exibirMonstro()
    });
  }

 













// função que preenche a classe monstro com suas informações pelo usuario
 function criar(x)
{
    
    var nome, Vatq, dano, defesa, resFo, resM, resFr, pv, CD, PM, ND, tipo
    // pergunta e respostas são variaveis feitas para guardar as respostas do usuario, no caso do tipo e nivel do monstro são numeros que tem um varervalo definido o programa se nega a analisar algo diferente do necessario
    var pergunta;
    var resposta = 0;
    nome = input.question("digite nome do Monstro " + x +" \n");
    
    do
    {
        pergunta=input.question("você quer colocar alguma ND na criatura " + x +" , se sim escreva ''sim'', do contrario escreva 'nao' \n", x);

    } while (pergunta != "sim" && pergunta != "nao");
    if (pergunta== "sim")
    {
        do
        {
            ND=input.question("digite o nivel de desafio do Monstro, se deseja nd S escreva 21, S+ 22  \n");
           
        } while (ND == 0.25 && ND == 0.5 || ND < 1 && ND > 22);
    }
    Vatq=input.question("digite o valor de ataque do Monstro " + x +" \n", x);
    

    dano=input.question("digite a media de dano do Monstro " + x +" \n", x);
    

    defesa=input.question("digite a defesa do Monstro " + x +" \n", x);
   
    resFo=input.question("digite a resistencia forte da criatura " + x +" \n", x);
    
    resM=input.question("digite a resistencia media da criatura " + x +" \n", x);
    

    resFr=input.question("digite a resistencia fraca da criatura " + x +" \n", x);
    

    pv=input.question("digite os pontos de vida da criatura " + x +" \n", x);
    
    do
    {
        var temp=input.question("digite o tipo de monstro: 1-solo, 2-lacaio e 3-especial\n", x);
        if(tipo == 1){
            tipo = "solo"
        }
        else if(tipo == 2){
            tipo = "lacaio"
        }
        else if(tipo == 3){
            tipo = "especial"
        }
    } while (tipo > 1 && tipo < 3);
    // ambos esses do-while servem para perguntar se o usuario quer adicionar alguma coisa opcional, caso queira pede para adicionar, do contrario ele preenche com um nulo.
    do
    {
        pergunta=input.question("você quer colocar alguma CD na criatura " + x +" , se sim escreva ''sim'', do contrario escreva 'nao' \n", x);

        // essa gambiarra ve se o usuario mandou "sim" ou não até ele escolher um dos dois, com um sim ele pode escrever o atributo, do contrario ele fica nulo

    } while (pergunta != "sim" && pergunta != "nao");
    if (pergunta == "sim")
    {
        CD=input.question("digite a CD efeito da criatura " + x +": \n", x);
        
    }
    else
    {
        CD = 0;
    }
    // reinicia a variavel pergunta
     
    // mesma coisa da CD
    do
    {
        pergunta=input.question("você quer colocar PM's na criatura " + x +" , se sim escreva ''sim'', do contrario escreva 'nao'  \n", x);

    } while (pergunta != "sim" && pergunta != "nao");
    if (pergunta == "sim")

    {

        PM=input.question("digite a quantidade de pontos de mana da criatura " + x +" \n", x);
        
    }
    
let m = new Monstro(nome, Vatq, dano, defesa, resFo, resFr, pv, CD, PM, ND, tipo,x)
Monstros.push(m)
}
/*
void analisar(Monstro bicho, var numero)
{
    float CD; 
        CD = anlz(bicho);
    console.log("%f", CD);
}
*/