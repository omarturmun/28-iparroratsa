basic.forever(function () {
    basic.showNumber(input.compassHeading())
    if (input.compassHeading() == 45 || input.compassHeading() > 315) {
        music.playMelody("G A F B E D C5 A ", 120)
    } else {
        music.playMelody("G F - G E D A B ", 120)
    }
})
