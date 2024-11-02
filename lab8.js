function addRow() {
    const container = document.getElementById('container');
    const row = document.createElement('div');
    row.className = 'row';

    row.innerHTML = `
        <input type="text">
        <input type="text">
        <div class="buttons">
            <button onclick="moveUp(this)">↑</button>
            <button onclick="moveDown(this)">↓</button>
            <button onclick="removeRow(this)">x</button>
        </div>
    `;

    container.appendChild(row);
}

function removeRow(button) {
    const row = button.closest('.row');
    row.remove();
}

function moveUp(button) {
    const row = button.closest('.row');
    const previousRow = row.previousElementSibling;
    if (previousRow) {
        row.parentNode.insertBefore(row, previousRow);
    }
}

function moveDown(button) {
    const row = button.closest('.row');
    const nextRow = row.nextElementSibling;
    if (nextRow) {
        row.parentNode.insertBefore(nextRow, row);
    }
}

function save() {
    const rows = document.querySelectorAll('.row');
        const data = Array.from(rows).map(row => {
            const inputs = row.querySelectorAll('input');
            return {
                field1: inputs[0].value,
                field2: inputs[1].value
            };
        });
        
        // Отображение данных
        const output = document.getElementById('output');
        output.innerHTML = '';
        data.forEach(item => {
            const span = document.createElement('span');
            span.className = 'output-item';
            span.textContent = `"${item.field1}" : "${item.field2}"`;
            output.appendChild(span);
        });
}