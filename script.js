document.addEventListener('DOMContentLoaded', function () {
    const icons = document.querySelectorAll('.icon');

    icons.forEach(icon => {
        icon.addEventListener('click', function () {
        
            if (this.id === 'user') {
                window.location.href = 'user.html';
            } else if (this.id === 'mail') {
                window.location.href = 'mail.html';
            } else if (this.id === 'play') {
                window.location.href = 'play.html';
            } else if (this.id === 'logout') {
                openModal();
            }
        });
    });
    function openModal() {
        document.getElementById("modal").style.display = "flex";
    }

    function closeModal() {
        document.getElementById("modal").style.display = "none";
    }

    function confirmYes() {
        alert("Você confirmou SIM!");
        closeModal();
    }

    function confirmNo() {
        alert("Você confirmou NÃO!");
        closeModal();
    }
    document.getElementById('confirm-yes').addEventListener('click', confirmYes);
    document.getElementById('confirm-no').addEventListener('click', confirmNo);
    document.getElementById('closemodal').addEventListener('click', closeModal);

    const approveButtons = document.querySelectorAll('.approve');
    const rejectButtons = document.querySelectorAll('.reject');

    approveButtons.forEach(button => {
        button.addEventListener('click', function () {
            alert('Aprovado');
        });
    });

    rejectButtons.forEach(button => {
        button.addEventListener('click', function () {
            alert('Rejeitado');
        });
    });
});
