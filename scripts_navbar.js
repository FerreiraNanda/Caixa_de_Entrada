document.addEventListener('DOMContentLoaded', function () {
    const icons = document.querySelectorAll('.icon');
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
});