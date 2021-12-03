input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    count += 1
    reset = 0
    basic.pause(100)
})
input.onButtonPressed(Button.AB, function () {
    if (reset == 5) {
        count = 0
        basic.showString("" + (count))
    } else {
        reset += 1
        basic.showString("" + (count))
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    count += 1
    reset = 0
    basic.pause(100)
})
let reset = 0
let count = 0
count = 0
reset = 0
basic.forever(function () {
    led.setBrightness(50)
    basic.showIcon(IconNames.Heart)
})
