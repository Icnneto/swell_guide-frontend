import { formSuccessResponse } from "../utils/modalConfig.js";

function observeSuccessResponse(){
    const targetDiv = document.querySelector('#mce-success-response');

    const observer = new MutationObserver((mutationList) => {
        mutationList.forEach((mutation) => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                if (targetDiv.style.display != 'none') {
                    formSuccessResponse()

                    const myModal = document.getElementById('my_modal_2');
                    myModal.showModal();
                };
            };
        });
    });

    observer.observe(targetDiv, { attributes: true });
};

document.addEventListener('DOMContentLoaded', observeSuccessResponse);