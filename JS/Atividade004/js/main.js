// import {funcao ser importada} from 'local';
// import { adicionarEventoBotao } from "./utils/utils.js";
import { validarEventoBotao } from "./utils/utils.js";
import { verificarParImpar } from "./modules/parImpar.js";
import { verificarMaiorMenor } from "./modules/maiorMenor.js";
import { verificarVelocidade } from "./modules/radar.js";
import { calcularSalario } from "./modules/salario.js";
import { calcularPassagem } from "./modules/passagem.js";
import { verificarBissexto } from "./modules/anoBissexto.js";
import { verificarTriangulo } from "./modules/triangulo.js";
import { calcularRaiz } from "./modules/equacoes.js";

const btnParImpar = document.querySelector('#verificarParImpar');
const btnMaiorMenor = document.querySelector('#verificarMaiorMenor');
const btnVelocidade = document.querySelector('#verificarVelocidade');
const btnSalario = document.querySelector('#verificarSalario');
const btnPassagem = document.querySelector('#verificarPassagem');
const btnAno = document.querySelector('#verificarAno');
const btnTriangulo = document.querySelector('#verificarTriangulo');
const btnEquacoes = document.querySelector('#verificarEquacoes');


validarEventoBotao(btnParImpar, verificarParImpar);
validarEventoBotao(btnMaiorMenor, verificarMaiorMenor);
validarEventoBotao(btnVelocidade, verificarVelocidade);
validarEventoBotao(btnSalario, calcularSalario);
validarEventoBotao(btnPassagem, calcularPassagem);
validarEventoBotao(btnAno, verificarBissexto);
validarEventoBotao(btnTriangulo, verificarTriangulo);
validarEventoBotao(btnEquacoes, calcularRaiz);
