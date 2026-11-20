// ========================================
// WEBSITE NAVIGATION
// ========================================

let currentPage = 1;

function goToPage(pageNumber) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    const nextPage = document.getElementById("page" + pageNumber);

    if (nextPage) {
        nextPage.classList.add("active");
        currentPage = pageNumber;

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}


// ========================================
// ROSE ANIMATION
// ========================================

const roseContainer = document.getElementById("roseContainer");

function createRose() {

    if (!roseContainer) return;

    const rose = document.createElement("div");

    rose.className = "rose";

    const roses = ["🌹", "🌸", "💐", "🌷"];

    rose.innerHTML = roses[
        Math.floor(Math.random() * roses.length)
    ];

    rose.style.left = Math.random() * 100 + "%";

    rose.style.fontSize =
        (20 + Math.random() * 30) + "px";

    rose.style.animationDuration =
        (5 + Math.random() * 7) + "s";

    roseContainer.appendChild(rose);

    setTimeout(() => {
        rose.remove();
    }, 12000);
}

setInterval(createRose, 500);


// ========================================
// FLOATING HEARTS
// ========================================

const floatingHearts = document.getElementById("floatingHearts");

function createFloatingHeart() {

    const heart = document.createElement("span");

    heart.className = "floating-heart";

    const emojis = ["❤️", "💕", "💗", "💖", "💘"];

    heart.innerHTML =
        emojis[Math.floor(Math.random() * emojis.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (15 + Math.random() * 25) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    floatingHearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createFloatingHeart, 800);


// ========================================
// QUESTION ANSWERS
// ========================================

function showAnswer(answer) {

    const message = document.getElementById("answerMessage");

    const continueButton =
        document.getElementById("questionContinue");

    if (answer === "yes") {

        message.innerHTML =
            "Yayyy! ❤️ I want a lifetime of beautiful memories with you!";

    } else {

        message.innerHTML =
            "I already know you love me! 🥰❤️";
    }

    continueButton.classList.remove("hidden");

    createCelebration();
}


// ========================================
// HEART CELEBRATION
// ========================================

function createCelebration() {

    for (let i = 0; i < 20; i++) {

        setTimeout(() => {

            const heart = document.createElement("span");

            heart.innerHTML = "💖";

            heart.style.position = "fixed";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.top = Math.random() * 100 + "vh";
            heart.style.fontSize = "25px";
            heart.style.zIndex = "9999";
            heart.style.pointerEvents = "none";

            document.body.appendChild(heart);

            heart.animate(
                [
                    {
                        transform: "scale(0)",
                        opacity: 0
                    },
                    {
                        transform: "scale(1.5)",
                        opacity: 1
                    },
                    {
                        transform: "translateY(-100px) scale(0)",
                        opacity: 0
                    }
                ],
                {
                    duration: 1500,
                    easing: "ease-out"
                }
            );

            setTimeout(() => heart.remove(), 1500);

        }, i * 100);
    }
}


// ========================================
// ENVELOPE
// ========================================

function openEnvelope() {

    const envelope = document.querySelector(".envelope");

    envelope.classList.toggle("open");

    if (envelope.classList.contains("open")) {

        createCelebration();
    }
}


// ========================================
// FINAL DOOR
// ========================================

function openDoor() {

    const door = document.getElementById("door");

    const light = document.querySelector(".light-effect");

    const message = document.getElementById("finalMessage");

    if (!door.classList.contains("open")) {

        door.classList.add("open");

        light.classList.add("show");

        message.innerHTML = `
            <h2>❤️ I Love You Forever ❤️</h2>
            <p>
                You are my favourite person,
                my happiness and my beautiful story.
            </p>
            <p>
                This surprise may end here,
                but my love for you never will. 💗
            </p>
        `;

        createCelebration();
    }
}
