let currentStatus = window.taskStatus || 'pending';
const taskId = window.taskId;

function cycleStatus() {
    if (currentStatus === 'pending') currentStatus = 'complete';
    else if (currentStatus === 'complete') currentStatus = 'failed';
    else currentStatus = 'pending';
    
    updateStatusDisplay();
    saveStatus();
}

function updateStatusDisplay() {
    const circle = document.getElementById('statusCircle');
    if (currentStatus === 'pending') {
        circle.style.background = '#ffd700';
        circle.style.color = 'black';
        circle.textContent = 'P';
    } else if (currentStatus === 'complete') {
        circle.style.background = '#4caf50';
        circle.style.color = 'white';
        circle.textContent = '✓';
    } else {
        circle.style.background = '#f44336';
        circle.style.color = 'white';
        circle.textContent = '✗';
    }
}

function saveStatus() {
    fetch('/users/' + taskId, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: currentStatus })
    });
}
