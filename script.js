const character = document.getElementById('character');
const rocks = document.querySelectorAll('.rock');
const speed = 5;

document.addEventListener('keydown', moveCharacter);

function moveCharacter(event) {
    const rect = character.getBoundingClientRect();
    let left = rect.left;
    let top = rect.top;

    if (event.key === 'w' || event.key === 'W') {
        top -= speed;
    } else if (event.key === 's' || event.key === 'S') {
        top += speed;
    } else if (event.key === 'a' || event.key === 'A') {
        left -= speed;
    } else if (event.key === 'd' || event.key === 'D') {
        left += speed;
    }

    character.style.left = `${left}px`;
    character.style.top = `${top}px`;

    checkForMining();
}

function checkForMining() {
    const characterRect = character.getBoundingClientRect();

    rocks.forEach(rock => {
        const rockRect = rock.getBoundingClientRect();
        const distance = Math.hypot(
            characterRect.left - rockRect.left,
            characterRect.top - rockRect.top
        );

        if (distance < 50) { // Radius within which mining can happen
            rock.style.backgroundColor = '#ff0000'; // Indicate mining (could be an animation)
            setTimeout(() => {
                rock.remove(); // Remove rock after mining
            }, 500);
        }
    });
}
