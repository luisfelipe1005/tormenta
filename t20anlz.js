export default class Monstro {
    constructor(nome, Vatq, dano, defesa, resFo, resM, resFr, pv, CD, PM, ND, tipo, numero) {
      this.nome = nome;
      this.Vatq = Vatq;
      this.dano = dano;
      this.defesa = defesa;
      this.resFo = resFo;
      this.resM = resM;
      this.resFr = resFr;
      this.pv = pv;
      this.CD = CD;
      this.PM = PM;
      this.ND = ND;
      this.tipo = tipo;
      this.numero = numero;
    }
  
  
  
   exibirMonstro()
  {
      console.log("o Monstro numero  "+this.numero+" possui o nome "+this.nome+", sendo do tipo: "+this.tipo);
     
  
      console.log("\n ele tem  "+this.Vatq+" de bonus de acerto, dando um dano medio de "+this.dano+"\n de resistencias ele possui"+ this.resFo+" de resistencia forte, "+this.resM+" de resistencia media e "+this.resFr+" de resistencia fraca\n " );
  
      if (this.CD != null)
      {
          
              console.log("sua CD de efeito é: "+ this.CD);
          }
      
      if (this.PM != null)
      {
          console.log("possuindo "+this.PM+" de PM's", );
      }
  
      console.log("------------------------------------------------------------------\n");
  
  }
  
  
  anlz()
  {
      let arredondar = 0;
      let calc = 0;
      let cont = 0;
      if (this.tipo == 1)
      {
          // calcula o valor de nd do valor de ataque
          printf("%d\n", this.Vatq);
          cont = 0.4007 * this.Vatq - 2.2326;
          if (cont > 0.25)
          {
              cont = 0.25;
          }
          else if (cont < 22)
          {
              cont = 22;
          }
          calc += cont;
          cont = 0;
  
          // calcula o valor da nd baseado em dano medio
          printf("%f\n", this.dano);
          if (this.dano <= 8)
          {
              calc = +0.25;
          }
          else if (this.dano <= 10)
          {
              calc = +0.5;
          }
          else if (this.dano <= 15)
          {
              calc = +1;
          }
          else if (this.dano <= 18)
          {
              calc = +2;
          }
          else if (this.dano <= 21)
          {
              calc = +3;
          }
          else if (this.dano <= 24)
          {
              calc = +4;
          }
          else if (this.dano == 27)
          {
              calc = +5;
          }
          else if (this.dano <= 40)
          {
              calc = +6;
          }
          else if (this.dano <= 56)
          {
              calc = +7;
          }
          else if (this.dano <= 62)
          {
              calc = +8;
          }
          else if (this.dano == 68)
          {
              calc = +9;
          }
          else if (this.dano <= 74)
          {
              calc = +10;
          }
          else if (this.dano <= 80)
          {
              calc = +11;
          }
          else if (this.dano <= 130)
          {
              calc = +12;
          }
          else if (this.dano == 144)
          {
              calc = +13;
          }
          else if (this.dano <= 158)
          {
              calc = +14;
          }
          else if (this.dano <= 172)
          {
              calc = +15;
          }
          else if (this.dano <= 186)
          {
              calc = +16;
          }
          else if (this.dano == 200)
          {
              calc = +17;
          }
          else if (this.dano <= 270)
          {
              calc = +18;
          }
          else if (this.dano <= 288)
          {
              calc = +19;
          }
          else if (this.dano <= 306)
          {
              calc = +20;
          }
          else if (this.dano <= 324)
          {
              calc = +21;
          }
          else
          {
              calc = +22;
          }
  
          // calcula o valor de nd baseado na defesa
          printf("%d\n", this.defesa);
          //2.48 * nivel + 12.58
          if (this.defesa <= 11)
          {
              calc = +0.25;
          }
          else if (this.defesa <= 14)
          {
              calc = +0.5;
          }
          else if (this.defesa <= 16)
          {
              calc = +1;
          }
          else if (this.defesa <= 19)
          {
              calc = +2;
          }
          else if (this.defesa <= 21)
          {
              calc = +3;
          }
          else if (this.defesa <= 23)
          {
              calc = +4;
          }
          else if (this.defesa == 24)
          {
              calc = +5;
          }
          else if (this.defesa <= 27)
          {
              calc = +6;
          }
          else if (this.defesa <= 31)
          {
              calc = +7;
          }
          else if (this.defesa <= 33)
          {
              calc = +8;
          }
          else if (this.defesa == 34)
          {
              calc = +9;
          }
          else if (this.defesa <= 36)
          {
              calc = +10;
          }
          else if (this.defesa <= 41)
          {
              calc = +11;
          }
          else if (this.defesa <= 43)
          {
              calc = +12;
          }
          else if (this.defesa == 44)
          {
              calc = +13;
          }
          else if (this.defesa <= 46)
          {
              calc = +14;
          }
          else if (this.defesa <= 50)
          {
              calc = +15;
          }
          else if (this.defesa <= 53)
          {
              calc = +16;
          }
  
          else if (this.defesa == 54)
          {
              calc = +17;
          }
          else if (this.defesa <= 56)
          {
              calc = +18;
          }
          else if (this.defesa <= 59)
          {
              calc = +19;
          }
          else if (this.defesa <= 61)
          {
              calc = +20;
          }
          else if (this.defesa <= 65)
          {
              calc = +21;
          }
          else
          {
              calc = +22;
          }
          // calcula o valor de nd baseado na resFo
          printf("%d\n", this.resFo);
          if (this.resFo <= 3)
          {
              calc = +0.25;
          }
          else if (this.resFo <= 6)
          {
              calc = +0.5;
          }
          else if (this.resFo <= 11)
          {
              calc = +1;
          }
          else if (this.resFo <= 13)
          {
              calc = +2;
          }
          else if (this.resFo <= 15)
          {
              calc = +3;
          }
          else if (this.resFo <= 16)
          {
              calc = +4;
          }
          else if (this.resFo == 17)
          {
              calc = +5;
          }
          else if (this.resFo <= 18)
          {
              calc = +6;
          }
          else if (this.resFo <= 20)
          {
              calc = +7;
          }
          else if (this.resFo <= 21)
          {
              calc = +8;
              arredondar = +9;
              cont++;
          }
          else if (this.resFo <= 22)
          {
              calc = +10;
          }
          else if (this.resFo <= 24)
          {
              calc = +11;
          }
          else if (this.resFo <= 26)
          {
              calc = +12;
              arredondar = +13;
              cont++;
          }
          else if (this.resFo <= 28)
          {
              calc = +14;
              arredondar = +15;
              cont++;
          }
          else if (this.resFo <= 30)
          {
              calc = +16;
  
              arredondar = +17;
              cont++;
          }
          else if (this.resFo <= 32)
          {
              calc = +18;
              arredondar = +19;
              cont++;
          }
          else if (this.resFo <= 34)
          {
              calc = +20;
          }
          else if (this.resFo <= 36)
          {
              calc = +21;
          }
          else
          {
              calc = +22;
          }
  
          // calcula o valor de nd baseado na resM
          printf("%d\n", this.resM);
          if (this.resM <= 0)
          {
              calc = +0.25;
          }
          else if (this.resM <= 3)
          {
              calc = +0.5;
          }
          else if (this.resM <= 5)
          {
              calc = +1;
          }
          else if (this.resM <= 7)
          {
              calc = +2;
          }
          else if (this.resM <= 9)
          {
              calc = +3;
          }
          else if (this.resM <= 10)
          {
              calc = +4;
          }
          else if (this.resM == 11)
          {
              calc = +5;
          }
          else if (this.resM <= 12)
          {
              calc = +6;
          }
          else if (this.resM <= 14)
          {
              calc = +7;
          }
          else if (this.resM <= 15)
          {
              calc = +8;
              arredondar = +9;
              cont++;
          }
          else if (this.resM <= 16)
          {
              calc = +10;
          }
          else if (this.resM <= 18)
          {
              calc = +11;
          }
          else if (this.resM <= 20)
          {
              calc = +12;
              arredondar = +13;
              cont++;
          }
          else if (this.resM <= 22)
          {
              calc = +14;
              arredondar = +15;
              cont++;
          }
          else if (this.resM <= 24)
          {
              calc = +16;
              arredondar = +17;
              cont++;
          }
          else if (this.resM <= 26)
          {
              calc = +18;
              arredondar = +19;
          }
          else if (this.resM <= 28)
          {
              calc = +20;
          }
          else if (this.resM <= 30)
          {
              calc = +21;
          }
          else
          {
              calc = +22;
          }
  
          // calcula o valor de nd baseado na resFr
          printf("%d\n", this.resFr);
          if (this.resFr >= 31)
          {
              calc = +22;
          }
          else if (this.resFr >= 29)
          {
              calc = +21;
          }
          else
          {
              let Frcont = 0;
              for (int i = -2; i < this.resFr; i++)
              {
                  Frcont++;
              }
          }
  
          // calcula o valor de PV
          if (this.pv <= 7)
          {
              calc = +0.25;
          }
          else if (this.pv <= 15)
          {
              calc = +0.5;
          }
          else if (this.pv <= 35)
          {
              calc = +1;
          }
          else if (this.pv <= 70)
          {
              calc = +2;
          }
          else if (this.pv <= 105)
          {
              calc = +3;
          }
          else if (this.pv <= 140)
          {
              calc = +4;
          }
          else if (this.pv <= 200)
          {
              calc = +5;
          }
          else if (this.pv <= 240)
          {
              calc = +6;
          }
          else if (this.pv <= 280)
          {
              calc = +7;
          }
          else if (this.pv <= 320)
          {
              calc = +8;
          }
          else if (this.pv <= 360)
          {
              calc = +9;
          }
          else if (this.pv <= 400)
          {
              calc = +10;
          }
          else if (this.pv <= 550)
          {
              calc = +11;
          }
          else if (this.pv <= 600)
          {
              calc = +12;
          }
          else if (this.pv <= 650)
          {
              calc = +13;
          }
          else if (this.pv <= 700)
          {
              calc = +14;
          }
          else if (this.pv <= 750)
          {
              calc = +15;
          }
          else if (this.pv <= 800)
          {
              calc = +16;
          }
          else if (this.pv <= 1020)
          {
              calc = +17;
          }
          else if (this.pv <= 1080)
          {
              calc = +18;
          }
          else if (this.pv <= 1140)
          {
              calc = +19;
          }
          else if (this.pv <= 1200)
          {
              calc = +20;
          }
          else if (this.pv <= 2500)
          {
              calc = +21;
          }
          else
          {
              calc = +22;
          }
          printf(" teste %f\n", calc);
      }
  
      // calcula o CD de efeito:
      if (this.CD != 0)
      {
          if (this.CD == 12)
          {
              calc += 0.25;
          }
          else if (this.CD == 13)
          {
              calc += 0.5;
          }
          if (this.CD <= 18)
          {
  
              for (int x = 13; x < this.CD; x++)
              {
                  calc += 1;
              }
          }
  
          else if (this.CD <= 30)
          {
  
              for (int x = 20; x < this.CD && x < 30; x += 2)
              {
                  calc += 1;
              }
          }
          else if (this.CD <= 35)
          {
  
              for (int x = 31; x < this.CD && x < 35; x += 2)
              {
                  calc += 1;
              }
          }
  
          else if (this.CD <= 44)
          {
  
              for (int x = 38; x < this.CD && x < 44; x += 2)
              {
                  calc += 1;
              }
          }
          else if (this.CD <= 47)
          {
              calc = +18;
              arredondar = +19;
              cont++;
          }
          else if (this.CD <= 49)
          {
              calc = +20;
          }
          else if (this.CD <= 51)
          {
              calc = +21;
          }
          else if (this.CD <= 51)
          {
              calc = +22;
          }
  
          return calc;
      }
  
  }