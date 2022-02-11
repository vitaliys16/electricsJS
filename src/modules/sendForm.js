const sendForm = ({ formName , someElem= []}) => {
    const form = document.querySelector(formName);

    const statusBlock = document.createElement('div');
    const loadText = 'Загрузка ...';
    const errorText = 'Ошибка ...';
    const successText = 'Спасибо! Наш менеджер с Вами свяжется!';
    const nameText = 'В имени должно быть не менее 2 букв';

    const sendData = (data) => {
        return fetch('http://jsonplaceholder.typicode.com/posts', {
        //return fetch('./server_two.php?', {    
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }

        }).then(res => res.json());
    };

        const redBorder = (e) => {
            e.style.borderColor = "#ff0000";    
        };
        const deleteRedBorder = (e) => {
            e.style.borderColor = null;  
        };


    const validate = (list) => {
        let success = true;

        list.forEach((item) => {
            if (item.classList.contains('tel')) { //для телефона
                if (!item.value.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{6,}$/gi)) {
                    redBorder(item);
                    success = false;
                    return false;
                } else {
                    deleteRedBorder(item);
                }
            } else if (item.classList.contains('form-control')) { // для ФИО
                if (!item.value.match(/^[а-яА-Я][а-яА-Я- ]+[а-яА-Я]?$/g)) {
                    redBorder(item);
                    success = false;
                    return false;
                } else {
                    deleteRedBorder(item);
                }
            }
        });
        return success;
    };

    const submitForm = () => {
        const formElements = form.querySelectorAll('input');
        const formData = new FormData(form);
        const formBody = {};

        statusBlock.textContent = loadText;
        statusBlock.style.color = '#e9bb26';
        form.append(statusBlock);

        formData.forEach((val, key) => {
            formBody[key] = val;
        });
        
        if (validate(formElements)) {

            sendData(formBody)
            .then(data => {
                statusBlock.textContent = successText;
                statusBlock.style.color = '#19b5fe';
                formElements.forEach(input => {
                    if (input == document.querySelector('input[value="Отправить"]')) {
                        return;
                    }
                    input.value = '';
                });
                setTimeout(() => {
                    form.removeChild(statusBlock);
                }, 4000);

            })
            .catch(error => {
                statusBlock.textContent = errorText;    
                statusBlock.style.color = '#ff0000'; 
                setTimeout(() => {
                    form.removeChild(statusBlock);
                }, 4000);  
            });  
        } else {
            statusBlock.textContent = errorText;
            statusBlock.style.color = '#ff0000'; 
            
            setTimeout(() => {
                    form.removeChild(statusBlock);
                }, 4000);
        }
    };


    try {
        if (!form) {
            throw new Error ('Вставьте пожалуйста форму!');
        }
        form.addEventListener('submit', (event) => {
            event.preventDefault(); 

            submitForm(); 

            const modal = document.querySelector('.modal-callback');
            const modalOverlay = document.querySelector('.modal-overlay');
            setTimeout(() => {
                    if (statusBlock.textContent == errorText) {
                        return;
                    }
                    modal.style.display = 'none';
                    modalOverlay.style.display = 'none';
            }, 5000);

        });
    } catch (error) {
        console.log(error.message);
    }
};

export default sendForm;