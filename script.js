document.getElementById('greetForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('username').value;
    document.getElementById('greeting').textContent = `Hello, ${name}!`;
});
