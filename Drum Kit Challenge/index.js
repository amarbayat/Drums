for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click",
        function () {
            var drumClicked = this.innerHTML;
            playSound(drumClicked);
            FlashButton(drumClicked);
        }
    );
}

document.addEventListener('keydown',
    function (e) {
        playSound(e.key);
        FlashButton(e.key);
    }
);

function playSound(event) {
    var audio;
    switch (event) {
        case "w":
            audio = "tom-1.mp3";
            break;
        case "a":
            audio = "tom-2.mp3";
            break;
        case "s":
            audio = "tom-3.mp3";
            break;
        case "d":
            audio = "tom-4.mp3";
            break;
        case "j":
            audio = "crash.mp3";
            break;
        case "k":
            audio = "snare.mp3";
            break;
        case "l":
            audio = "kick-bass.mp3";
    }

    var musicToPlay = new Audio('sounds/' + audio);
    musicToPlay.play();
}

function FlashButton(event) {
    document.querySelector("." + event).classList.add("pressed");
    setTimeout(function () {
        document.querySelector("." + event).classList.remove("pressed")
    }, 200);
}