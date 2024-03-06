document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('addBtn');
    const inputField = document.getElementById('todoInput');
    const lowPriorityRadio = document.getElementById('lowPriority');
    const mediumPriorityRadio = document.getElementById('mediumPriority');
    const highPriorityRadio = document.getElementById('highPriority');
    const veryHighPriorityRadio = document.getElementById('veryHighPriority');
    const todoList = document.getElementById('todoList');

    // 할일 추가 함수
    function addTodo() { 
        // 입력 필드에서 텍스트 가져오기
        const todoText = inputField.value.trim();

        // 입력이 비어있는지 확인
        if (!todoText) {
            alert('할일을 입력하세요.');
            return;
        }

        // 선택된 중요도 확인
        let priority = '';
        if (lowPriorityRadio.checked) {
            priority = '낮음';
        } else if (mediumPriorityRadio.checked) {
            priority = '보통';
        } else if (highPriorityRadio.checked) {
            priority = '높음';
        } else if (veryHighPriorityRadio.checked) {
                priority = '아주 높음';
        }
         else {
            alert('중요도를 선택하세요.');
            return;
        }

        // 새로운 할일 아이템(li 태그) 생성
        const todoItem = document.createElement('li');
        todoItem.textContent = `${todoText} (${priority})`;

        // 할일 목록에 추가
        todoList.appendChild(todoItem);

        // 할일 아이템 삭제를 위한 버튼 추가
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'X';
        deleteBtn.onclick = function() {
            todoItem.remove();
        };
        todoItem.appendChild(deleteBtn);

        // 입력 필드 및 라디오 버튼 초기화
        inputField.value = '';
        lowPriorityRadio.checked = false;
        mediumPriorityRadio.checked = false;
        highPriorityRadio.checked = false;
        veryHighPriorityRadio.checked = false;
        inputField.focus();
    }

    // "Enter" 키 이벤트로 할일 추가하기
    inputField.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTodo();
        }
    });

    // 추가 버튼 클릭 이벤트
    addButton.addEventListener('click', addTodo);
});
