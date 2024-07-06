function markCompleted(button) {
    var row = button.parentNode.parentNode;
    var statusCell = row.cells[4].querySelector('.status');
    statusCell.textContent = "Completed";
    statusCell.classList.remove('in-progress');
    statusCell.classList.add('completed');
}