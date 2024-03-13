document.addEventListener('contextmenu', event => event.preventDefault());
window.addEventListener('load', startTyping);

const titleName = $(document).find('title').text();
document.title = titleName[0]
let backspacing = false;
let i = 1;

function startTyping() {
    if (!backspacing) {
        let startTypingInterval = setInterval(() => {
            if (i <= titleName.length) {
                document.title = titleName.substring(0, i + 1);
                i++;
            }
            if (i >= titleName.length) {
                clearInterval(startTypingInterval)
                backspacing = true;
                startBackspacing();
            }
        }, 800)
    }
}

function startBackspacing() {
    if (backspacing) {
        let backspacingInterval = setInterval(() => {
            if (document.title.length > 1) {
                document.title = document.title.slice(0, -1);
            } else {
                clearInterval(backspacingInterval);
                backspacing = false;
                i = 1;
                setTimeout(startTyping, 100);
            }
        }, 800);
    }
}

$("#enter").click(() => {
    const video = document.querySelector('.background-video video');
    console.log(video)
    video.play()
    $("#enter").fadeOut(1000, () => {
        $("#video-container").fadeIn(100);
        $(".center-box").fadeIn(2000)
        $("#icons img").fadeIn(2000)
    });
});
