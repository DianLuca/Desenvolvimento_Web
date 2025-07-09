// import {funcao ser importada} from 'local';
import { adicionarEventoBotao } from "./utils/utils.js";
// import { verificarParImpar } from "./modules/parImpar.js";
// import { verificarMaiorMenor } from "./modules/maiorMenor.js";
import { verificarVelocidade } from "./modules/radar.js";

// const btnParImpar = document.querySelector('#verificarParImpar');
// const btnMaiorMenor = document.querySelector('#verificarMaiorMenor');
const btnVelocidade = document.querySelector('#verificarVelocidade');
// const btnParImpar = document.querySelector('#verificar');

// adicionarEventoBotao(btnParImpar, verificarParImpar);
// adicionarEventoBotao(btnMaiorMenor, verificarMaiorMenor);
adicionarEventoBotao(btnVelocidade, verificarVelocidade);
