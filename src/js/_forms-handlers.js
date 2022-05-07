export default function formHandler(e) {
    e.preventDefault();
    const target = e.target;
    const submitBtn = target.querySelector('.custom-btn');
    const formControlInputs = target.querySelectorAll('.form-control');

    setPreloader(submitBtn);
    getFormData(target, formControlInputs);

    formControlInputs.forEach(input => {
        input.value = '';
    })
}

function getFormData(target, formControlInputs) {
    const formData = {};

    formControlInputs.forEach(input => {
        formData[input.dataset.key] = input.value;
    }); 

    if (target.classList.contains('js-form-log')) {
        console.log(formData);
    }

    if (target.classList.contains('js-form-reg')) {
        console.log(formData);
    }

    if (target.classList.contains('js-form-mailing')) {
        console.log(formData);
    }
}

function setPreloader(btn) {
    const btnTextContent = btn.textContent;

    btn.style.width = btn.offsetWidth + 'px';
    btn.style.height = btn.offsetHeight + 'px';
    btn.classList.add('p-0-20');
    btn.innerHTML = `<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`;
    btn.setAttribute('disabled', 'disabled');

    const timeoutID = setTimeout(() => {
        btn.innerHTML = btnTextContent;
        btn.removeAttribute('style');
        btn.classList.remove('p-0-20');
        btn.removeAttribute('disabled');
        clearTimeout(timeoutID);
    }, 2000);
}