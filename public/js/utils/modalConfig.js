export function formSuccessResponse() {
    const dialog = document.createElement('dialog');
    dialog.id = 'my_modal_2';
    dialog.className = 'modal';

    const modalBox = document.createElement('div');
    modalBox.className = 'modal-box bg-primary-white';

    const title = document.createElement('h3');
    title.className = 'text-primary-gray font-semibold text-lg lg:text-2xl';
    title.textContent = 'Bem vindo(a) à SwellGuide!';

    const p1 = document.createElement('p');
    p1.className = 'text-primary-gray font-light text-lsm lg:text-xl py-4';
    p1.textContent = 'Que bom ter você com a gente! Seu cadastro foi realizado com sucesso.';

    const p2 = document.createElement('p');
    p2.className = 'text-primary-gray font-light text-lsm lg:text-xl py-2';
    p2.textContent = 'A previsão para o dia seguinte chega no seu e-mail todos os dias, às 20h.';

    const p3 = document.createElement('p');
    p3.className = 'text-primary-gray font-light text-lsm lg:text-xl py-2';
    p3.textContent = 'Prepare-se para nunca mais perder um bom dia de mar!';

    const form = document.createElement('form');
    form.method = 'dialog';
    form.className = 'modal-backdrop';

    const closeButton = document.createElement('button');
    closeButton.textContent = 'close';

    form.appendChild(closeButton);

    modalBox.appendChild(title);
    modalBox.appendChild(p1);
    modalBox.appendChild(p2);
    modalBox.appendChild(p3);
    
    dialog.appendChild(form);
    dialog.appendChild(modalBox);

    document.body.appendChild(dialog);
};