document.addEventListener('DOMContentLoaded', function() {
    const buttonTest = document.getElementById('add')
    buttonTest.addEventListener('click', function() {
        const input = document.getElementById('text-add').value
        document.location.reload(true)
    }, false);
}, false);