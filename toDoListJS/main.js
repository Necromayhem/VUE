// todo list

const form = document.createElement('form');
const input = document.createElement('input');
const addButton = document.createElement('button'); // кнопка для добавления
const todolist = document.createElement('ul'); // список для отображения задач
const tasks = []; // массив для хранения задач

input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'напишите задачу...');
addButton.textContent = 'отправить';
addButton.setAttribute('type', 'submit'); // устанавливаем тип кнопки как submit

form.appendChild(input); // вложил инпут в форму
form.appendChild(addButton);
document.body.appendChild(form);
document.body.appendChild(todolist); // добавляем список в тело документа

// Обработчик событий для добавления задачи
form.addEventListener('submit', function(event) {
    event.preventDefault(); // предотвращаем перезагрузку страницы
    
    const taskValue = input.value.trim(); // получаем значение инпута
    if (taskValue) {
        // добавляем задачу в массив
        tasks.push(taskValue);
        
        // создаем элемент списка
        const listItem = document.createElement('li');
        listItem.textContent = taskValue;

        // создаем кнопку для удаления
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'удалить';
        deleteButton.addEventListener('click', function() {
            // удаление задачи из массива
            tasks.splice(tasks.indexOf(taskValue), 1);
            // обновляем отображение списка
            updateTodoList();
        });

        // добавляем кнопку удаления к элементу списка
        listItem.appendChild(deleteButton);
        // добавляем элемент списка в todolist
        todolist.appendChild(listItem);
        
        // очищаем поле ввода
        input.value = '';
    }
});

// функция для обновления списка задач
function updateTodoList() {
    todolist.innerHTML = ''; // очищаем текущий список
    tasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.textContent = task;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'удалить';
        deleteButton.addEventListener('click', function() {
            tasks.splice(tasks.indexOf(task), 1); // удаляем задачу из массива
            updateTodoList(); // обновляем отображение
        });

        listItem.appendChild(deleteButton);
        todolist.appendChild(listItem); // добавляем элемент списка в todolist
    });
}













