setInterval(function () {
    const messages = document.getElementsByTagName('ed-vs-message');
    const BlockedUsers = ['Mme CHANTAL BONNOT'];
    for (const message of messages) {
        const author = message.getElementsByClassName('media')[0].getElementsByClassName('ng-star-inserted')[0].innerText.toLowerCase();
        for(let user of BlockedUsers) {
            user = user.toLocaleLowerCase();
            if(user === author) message.style.display = 'none';
        }
    }
}, 1000) //Toutes les 1 secondes