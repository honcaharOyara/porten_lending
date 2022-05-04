import refs from './_references.js'

export function logInFormHandler(e) {
    e.preventDefault();

    setPreloader(refs.submitBtnLog);
}

export function registrationFormHandler(e) {
    e.preventDefault();

    setPreloader(refs.submitBtnReg);
}

export function setPreloader(btn) {
    const btnTextContent = btn.textContent;

    btn.style.width = btn.offsetWidth + 'px';
    btn.style.height = btn.offsetHeight + 'px';
    btn.classList.add('p-0-20')
    btn.innerHTML = `<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`;

    const timeoutID = setTimeout(() => {
        btn.innerHTML = btnTextContent;
        btn.removeAttribute('style');
        btn.classList.remove('p-0-20');
        clearTimeout(timeoutID);
    }, 2000);
}