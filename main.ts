let washCounter = 0
input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Forever)
    while (washCounter < 20) {
        basic.showString(" continue washing")
        basic.pause(1000)
        washCounter += 1
    }
    music.stopMelody(MelodyStopOptions.All)
    music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
    basic.pause(5000)
    washCounter = 0
})
input.onGesture(Gesture.Shake, function () {
	
})
basic.forever(function () {
	
})
