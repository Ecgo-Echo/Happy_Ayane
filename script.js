const card = document.getElementById('card');
const bgm = document.getElementById('bgm');
const closeBtn = document.getElementById('closeBtn');
const cover = document.querySelector('.cover');

cover.addEventListener('click', async () => {
    if (!card.classList.contains('open')) {
        card.classList.add('open');

        try {
            bgm.currentTime = 0;
            bgm.volume = 0.6;
            await bgm.play();
        } catch (e) {
            console.error('Audio error:', e);
        }
    }
});

closeBtn.addEventListener('click', () => {
    card.classList.remove('open');
    bgm.pause();
    bgm.currentTime = 0;
});