// Get data
const roomNo = document.querySelector('#room-id');
const hostel = document.querySelector('#hostel');
const problem = document.querySelector('#problem');
const date = document.querySelector('#date');
const descr = document.querySelector('#descr');
const success = document.querySelector('#success');
const error = document.querySelectorAll('.error');

// Validate data
function validateForm() {
    clearMessages();
    if (roomNo.value === '') {
        errorNodes[0].innerText = 'Please enter a room number'
        roomNo.classList.add('error-border');
        return false;
    }
}

// Clear messages

function clearMessages() {
    for (let i = 0; i < errorNodes.length; i++) {
        errorNodes[i].innerText = '';
    }
    roomNo.classList.remove('error-border');
}