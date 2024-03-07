let currentYear, currentMonth;
const notes = {};

document.addEventListener('DOMContentLoaded', function() {
    init();
    document.getElementById('prevBtn').addEventListener('click', () => {
        changeMonth(-1);
    });
    document.getElementById('nextBtn').addEventListener('click', () => {
        changeMonth(1);
    });
});

function init() {
    const today = new Date();
    currentYear = today.getFullYear();
    currentMonth = today.getMonth();
    createCalendar(currentYear, currentMonth);
}

function createCalendar(year, month) {
    const container = document.getElementById('daysContainer');
    container.innerHTML = ''; // Clear previous calendar content

    const currentDate = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayIndex = currentDate.getDay();

    document.getElementById('monthDisplay').textContent = `${year}년 ${month+1}월`;

    let date = 1;
    for (let i = 0; i < 6; i++) { // Assuming max 6 rows needed
        const row = document.createElement('div');
        row.classList.add('calendar-row');
        for (let j = 0; j < 7; j++) { // 7 days in a week
            const cell = document.createElement('div');
            cell.classList.add('calendar-day');
            if (i === 0 && j < firstDayIndex) {
                cell.classList.add('empty');
            } else if (date > daysInMonth) {
                cell.classList.add('empty');
            } else {
                const dateStr = `${year}-${month + 1}-${date}`;
                cell.textContent = date;
                if (notes[dateStr]) {
                    const noteIndicator = document.createElement('span');
                    noteIndicator.classList.add('note-indicator');
                    noteIndicator.textContent = ' *';
                    cell.appendChild(noteIndicator);
                }
                cell.addEventListener('click', () => openNoteModal(dateStr));
                date++;
            }
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

function changeMonth(diff) {
    currentMonth += diff;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    } else if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    createCalendar(currentYear, currentMonth);
}

function openNoteModal(dateStr) {
    const modal = document.getElementById('noteModal');
    const noteInput = document.getElementById('noteInput');
    const closeButton = document.getElementsByClassName('close-button')[0];
    const saveButton = document.getElementById('saveNote');

    noteInput.value = notes[dateStr] || '';
    modal.style.display = 'block';

    closeButton.onclick = () => modal.style.display = 'none';

    saveButton.onclick = () => {
        const noteText = noteInput.value.trim();
        if (noteText) {
            notes[dateStr] = noteText;
            createCalendar(currentYear, currentMonth);
            modal.style.display = 'none';
        }
    };
}
