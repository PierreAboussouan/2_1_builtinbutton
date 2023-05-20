basic.forever(function on_forever() {
    if (input.buttonIsPressed(Button.AB)) {
        basic.showIcon(IconNames.Yes)
    } else if (input.buttonIsPressed(Button.A)) {
        basic.showArrow(ArrowNames.West)
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showArrow(ArrowNames.East)
    } else {
        basic.showIcon(IconNames.No)
    }
    
})
