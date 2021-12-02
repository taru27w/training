// app.js

let todoApp = {
    addTask: document.querySelector('.add'),
    list: document.querySelector('.todos'),
    search: document.querySelector('.search input'), 

    init: function () {
        // ����������
        // ���[�J���X�g���[�W�Ɋi�[����Ă���l���擾���A���X�g�𐶐�����
        for (var key in localStorage) {
            var html = localStorage.getItem(key);
            if (html) {
                todoApp.list.innerHTML += localStorage.getItem(key);
            }
        }
    },

    createTodoList: function (task) {
        // HTML �e���v���[�g�𐶐�
        const html = `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${task}</span>
                <i class="far fa-trash-alt delete"></i>
            </li>
            `;
        todoApp.list.innerHTML += html;

        todoApp.saveTaskToLocalStorage(task, html);
    },

    filterTasks: function (term) {
        Array.from(todoApp.list.children)
            // �t�B���^����
            .filter((todo) => !todo.textContent.toLowerCase().includes(term))
            .forEach((todo) => todo.classList.add('filtered'));

        Array.from(todoApp.list.children)
            .filter((todo) => todo.textContent.toLowerCase().includes(term))
            .forEach((todo) => todo.classList.remove('filtered'));
    },

    saveTaskToLocalStorage: function (task, html) {
        // null �́AlocalStorage �ɕۑ����Ȃ�
        if (html) {
            // localStorage �́A0 ����n�܂�
            localStorage.setItem(task, html);
            return;
        }
        return;
    },

    deleteTaskFromLocalStorage: function (task) {
        localStorage.removeItem(task);
        return;
    },
}

todoApp.init();

todoApp.addTask.addEventListener('submit', e => {
    // �f�t�H���g�̃C�x���g�𖳌�
    e.preventDefault();

    // Task�ɓ��͂����l���󔒂����O���Ċi�[
    const task = todoApp.addTask.add.value.trim();
    if (task.length) {
        // Todo List �� HTML ���쐬
        todoApp.createTodoList(task);
        // Task�ɓ��͂����������N���A
        todoApp.addTask.reset();
    }
});

// �폜�@�\
todoApp.list.addEventListener('click', e => {
    console.log(e.target.classList);
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }

    const task = e.target.parentElement.textContent.trim()
    todoApp.deleteTaskFromLocalStorage(task);
});

//�����@�\
todoApp.search.addEventListener('keyup', () => {
    console.log('test')
    // �󔒍폜���A�������ɕϊ�(�啶���E�������̋�ʂ��Ȃ���)
    const term = todoApp.search.value.trim().toLowerCase();
    todoApp.filterTasks(term);
});

