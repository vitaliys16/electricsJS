const sendForm = (formName) => {
    const form = document.querySelector(formName);

    console.log(form);


    try {
        if (!form) {
            throw new Error ('Вставьте пожалуйста форму!');
        }
        form.addEventListener('submit', (event) => {
            event.preventDefault();
        });
    } catch (error) {
        console.log(error.message);
    }
};

export default sendForm;