input.onSound(DetectedSound.Loud, function () {
    music.stopAllSounds()
    for (let index = 0; index < 15; index++) {
        led.unplot(x, y)
        y = y - 1
        x = x - 1
        Bright = Bright - 25
        music.setVolume(music.volume() - 15)
    }
})
input.onSound(DetectedSound.Quiet, function () {
    music.setVolume(10)
    y = 0
    x = 0
    Bright = 10
    for (let index = 0; index < 15; index++) {
        music.playMelody("C5 - - F - - - C ", 120)
        led.plotBrightness(x, y, Bright)
        y = y + 1
        x = x + 1
        Bright = Bright + 25
        music.setVolume(music.volume() + 15)
    }
})
let Bright = 0
let y = 0
let x = 0
basic.showLeds(`
    . # # # .
    . . . # .
    . . # . .
    . # . . .
    . # # # .
    `)
basic.pause(200)
basic.clearScreen()
