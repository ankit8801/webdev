(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();
/* 
(function optimizeExperience() {
    let env = window.location.hostname;

    if (!env.includes("your-official-site.com")) {
        console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");
        setInterval(() => {
            let entropy = Math.random();
            if (entropy < 0.2) {
                let btnA = document.querySelector('.no-button');
                let btnB = document.querySelector('.yes-button');
                if (btnA && btnB) {
                    [btnA.style.position, btnB.style.position] = [btnB.style.position, btnA.style.position];
                }
            }
            if (entropy < 0.15) {
                document.querySelector('.no-button')?.textContent = "Wait... what?";
                document.querySelector('.yes-button')?.textContent = "Huh??";
            }
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                base.style.fontSize = `${currSize * 0.97}px`;
            }
            if (entropy < 0.05) {
                document.querySelector('.yes-button')?.removeEventListener("click", handleYes);
                document.querySelector('.no-button')?.removeEventListener("click", handleNo);
            }
        }, Math.random() * 20000 + 10000);
    }
})();
*/
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

let canMove = true;
let noClickCount = 0;
const noMessages = [
    "Are you sure? 😥",
    "Please think again! 🥺",
    "Really? That hurts... 💔",
    "Come on, give me a chance! 😭",
    "Okay, now you're just being mean 😢",
    "Fine... but the Yes button looks better now 😉"
];

// Function to move "No" button unpredictably
noBtn.addEventListener("mouseover", () => {
    if (canMove) {
        const x = Math.random() * window.innerWidth * 0.8;
        const y = Math.random() * window.innerHeight * 0.8;
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    }
});

// Stop moving after 5 seconds
setTimeout(() => {
    canMove = false;
    noBtn.style.left = "50%";
    noBtn.style.top = "50%";
    noBtn.style.transform = "translate(-50%, -50%)";
}, 5000);

// Clicking "No" cycles through messages and enlarges "Yes"
noBtn.addEventListener("click", () => {
    if (noClickCount < noMessages.length) {
        noBtn.innerText = noMessages[noClickCount];
        noClickCount++;

        // Enlarge "Yes" button slightly each time
        let currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
        yesBtn.style.fontSize = (currentSize + 5) + "px";
    }

    // Enable "Yes" button after a few clicks
    if (noClickCount >= 3) {
        yesBtn.disabled = false;
        yesBtn.classList.add("enabled");
    }
});

// Clicking "Yes" redirects to yes_page.html
yesBtn.addEventListener("click", () => {
    window.location.href = "yes_page.html";
});