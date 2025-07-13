const body = document.querySelector('body');

export function formErrorToast(errorMessage) {
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('toast', 'toast-top', 'toast-center', 'z-10');

    const textDiv = document.createElement('div');
    textDiv.classList.add('alert', 'border-none', 'w-full', 'bg-red-400/50', 'backdrop-blur-sm', 'bg-opacity-100', 'backdrop-saturate-100', 'rounded-2xl', 'lg:rounded-4xl', 'shadow-sm');

    const errorText = document.createElement('span');
    errorText.innerText = `${errorMessage}`;

    textDiv.appendChild(errorText);
    mainDiv.appendChild(textDiv);

    body.appendChild(mainDiv);

    setTimeout(() => {
        body.removeChild(mainDiv);
    }, 3000);

}