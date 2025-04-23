import { Product } from "../types/Product";
import bastidorImg from "../assets/nome.jpg";
import dataImg from "../assets/data.jpeg";
import toalhaImg from "../assets/toalha.jpeg";
import toalhimhasImg from "../assets/toalhinhas.jpeg";
import aliancasImg from "../assets/aliancas.jpeg";
import bolsaImg from "../assets/bolsas.jpg";
import toalha2Img from "../assets/toalha2.jpeg";
import colaresImg from "../assets/colares-bordado.jpg";
import tenisImg from "../assets/tenis.jpeg";
import portaMoedasImg from "../assets/bolsa.jpeg";
import panoPratoImg from "../assets/pano-prato.jpeg";
import portaRetratoImg from "../assets/porta-retrato.jpeg";
import cactoImg from "../assets/cacto.jpg";
import lacoImg from "../assets/laco.jpeg";
import frase2Img from "../assets/frase2.jpg";
import bordadoCoracaoImg from "../assets/bordado-coracao.jpg";
import felicidadeImg from "../assets/felicidade.jpeg";
import fraseImg from "../assets/frase.jpg";

export const products: Product[] = [
  {
    imageUrl: bastidorImg,
    name: "Bastidor com nome",
    price: 60.0,
    description: "Nome feito com bordado livre em bastidor de XXcm",
    category: "personalizados",
    id: 1,
  },
  {
    imageUrl: dataImg,
    name: " Bastidor com calendário",
    price: 85.0,
    description: "Calendário feito com bordado livre ",
    category: "personalizados",
    id: 2,
  },
  {
    imageUrl: toalhaImg,
    name: "Jogo de toalhas",
    price: 100.0,
    description:
      "Jogo de toalhas com nome do casal bordado. Kit com 1 toalha de banho e 1 toalha de rosto",
    category: "personalizados",
    id: 3,
  },
  {
    imageUrl: toalhimhasImg,
    name: "Toalhinha infantil",
    price: 25.0,
    description: "Toalha infantil bordada com ponto cruz",
    category: "personalizados",
    id: 4,
  },
  {
    imageUrl: aliancasImg,
    name: "Bastidor Data especial",
    price: 80.0,
    description: "Bastidor com data especial bordada em bordado livre com nome",
    category: "personalizados",
    id: 5,
  },
  {
    imageUrl: toalha2Img,
    name: "Jogo de toalhas",
    price: 100.0,
    description:
      "Jogo de toalhas com nome do casal bordado. Kit com 2 toalhas de banho e 1 toalha de rosto",
    category: "personalizados",
    id: 6,
  },
  {
    imageUrl: bolsaImg,
    name: "Bolsa",
    price: 100.0,
    description: "Bolsa com bordado e pintura",
    category: "diversos",
    id: 7,
  },
  {
    imageUrl: colaresImg,
    name: "Colar",
    price: 50.0,
    description: "Colar com pingente bordado",
    category: "diversos",
    id: 8,
  },
  {
    imageUrl: tenisImg,
    name: "Tênnis",
    price: 70.0,
    description: "Bordado em tênnis",
    category: "diversos",
    id: 9,
  },
  {
    imageUrl: portaMoedasImg,
    name: "Bolsa Porta moedas",
    price: 80.0,
    description: "Bolsa pequena bordada",
    category: "diversos",
    id: 10,
  },
  {
    imageUrl: panoPratoImg,
    name: "Pano de prato",
    price: 25.0,
    description: "Panos de prato bordadoem em ponto Cruz",
    category: "diversos",
    id: 11,
  },
  {
    imageUrl: portaRetratoImg,
    name: "Quadro Flores",
    price: 50.0,
    description: "Quadro com flores bordadas em brodado livre",
    category: "diversos",
    id: 12,
  },
  {
    imageUrl: cactoImg,
    name: "Bastidor com cactos",
    price: 70.0,
    description: "Bastidor com cactos bordados",
    category: "Pronta Entrega",
    id: 13,
  },
  {
    imageUrl: lacoImg,
    name: "Laço e gola",
    price: 70.0,
    description: "Laço e gola para bebês bordado",
    category: "Pronta Entrega",
    id: 14,
  },
  {
    imageUrl: frase2Img,
    name: "Bastidor com frase",
    price: 70.0,
    description: "Bastidor com frase: Deixa o sol entrar",
    category: "Pronta Entrega",
    id: 15,
  },
  {
    imageUrl: bordadoCoracaoImg,
    name: "Bastidor coração",
    price: 70.0,
    description: "Bastidor com coração",
    category: "Pronta Entrega",
    id: 16,
  },
  {
    imageUrl: felicidadeImg,
    name: "Bastidor com frase",
    price: 70.0,
    description: "Bastidor com frase: A felicidade está nas coisas simples",
    category: "Pronta Entrega",
    id: 17,
  },
  {
    imageUrl: fraseImg,
    name: "Bastidor com frase",
    price: 70.0,
    description: "Bastidor com frase: Let the good times begin",
    category: "Pronta Entrega",
    id: 18,
  },
];
