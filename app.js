const input = document.getElementById('habitInput');
const addBtn = document.getElementById('addBtn');
const habitList = document.getElementById('habitList');

// Загружаем привычки из localStorage
let habits = JSON.parse(localStorage.getItem('habits')) || [];

function save() {
  localStorage.setItem('habits', JSON.stringify(habits));
}

function render() {
  habitList.innerHTML = '';
  const done = habits.filter((h) => h.done).length;
  const counter = document.getElementById('counter');
  counter.textContent = habits.length
    ? `Выполнено: ${done} из ${habits.length}`
    : '';

  if (habits.length === 0) {
    habitList.innerHTML =
      '<p class="empty-msg">Пока нет привычек. Добавьте первую!</p>';
    return;
  }

  habits.forEach((habit, index) => {
    const li = document.createElement('li');
    li.className = 'habit-item' + (habit.done ? ' done' : '');

    li.innerHTML = `
      <div class="habit-left">
        <input type="checkbox" ${habit.done ? 'checked' : ''} data-index="${index}" />
        <span class="habit-name">${habit.name}</span>
      </div>
      <button class="delete-btn" data-index="${index}" title="Удалить">✕</button>
    `;

    habitList.appendChild(li);
  });
}

function addHabit() {
  const name = input.value.trim();
  if (!name) return;

  habits.push({ name, done: false });
  save();
  render();
  input.value = '';
  input.focus();
}

// Делегирование событий для чекбоксов и кнопок удаления
habitList.addEventListener('change', (e) => {
  if (e.target.type === 'checkbox') {
    const i = e.target.dataset.index;
    habits[i].done = e.target.checked;
    save();
    render();
  }
});

habitList.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-btn')) {
    const i = e.target.dataset.index;
    habits.splice(i, 1);
    save();
    render();
  }
});

addBtn.addEventListener('click', addHabit);

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addHabit();
});

// Первичная отрисовка
render();
