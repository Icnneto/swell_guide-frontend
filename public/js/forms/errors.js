import { formErrorToast } from "../utils/toastConfig.js";

// Tratar erro de input
const campoFormulario = document.querySelector('#mce-EMAIL');

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
];

const mensagens = {
    EMAIL: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um e-mail válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    }
}

campoFormulario.addEventListener('blur', () => verificaCampo(campoFormulario));
campoFormulario.addEventListener('invalid', evento => evento.preventDefault())

function verificaCampo(campo) {
    let mensagem = '';
    campo.setCustomValidity('');

    tiposDeErro.forEach(erro => {
        if (campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro];
        };
    });

    // const mensagemErro = campo.parentNode.querySelector('.mensagem-erro');
    const validadorInput = campo.checkValidity();

    if (!validadorInput) {
        formErrorToast(mensagem);
    } else {
        console.log('Input válido');
    };
};