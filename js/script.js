document.addEventListener("DOMContentLoaded", function (){
    setTimeout(() => {
        const params = new URLSearchParams(window.location.search);
        const betSuccessful = params.get("bet");
        if (betSuccessful === "true"){
            alert("Good Luck & Thanks for your bet !");
        }
    }, 500);
});