const friendName = "VINODINI 🤍";
document.getElementById("nameText").innerHTML = `Hey ${friendName} 🌸`;

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const music = document.getElementById("bgMusic");

yesBtn.addEventListener("click", () => {
    music.play();
    message.innerHTML = "I’m so proud of you 🫂💖 You are doing your best, and that is enough 🌷";

    setTimeout(() => {
        alert(
            "No matter how heavy life feels right now, please remember this 🤍\n\n" +
            "You are loved.\nYou are needed.\nYou are worthy.\n\n" +
            "And I’m always here for you 🫶"
        );
    }, 1500);
});

noBtn.addEventListener("mouseover", () => {
    noBtn.style.transform = `translate(${Math.random()*150 - 75}px, ${Math.random()*150 - 75}px)`;
});
