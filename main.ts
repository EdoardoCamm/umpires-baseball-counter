// Counts a strike 
input.onButtonPressed(Button.A, function () {
    Strikes += 1
    basic.showNumber(Strikes)
})
// Resets all pitches made
input.onButtonPressed(Button.AB, function () {
    Pitches = 0
    basic.showNumber(0)
})
// Counts a pitch
input.onButtonPressed(Button.B, function () {
    Pitches += 1
    basic.showNumber(Pitches)
})
// Resets strikes
input.onGesture(Gesture.Shake, function () {
    Strikes = 0
    basic.showNumber(0)
})
// Number shown on start
let Pitches = 0
let Strikes = 0
basic.showNumber(0)
