def on_forever():
    if input.button_is_pressed(Button.AB):
        basic.show_icon(IconNames.YES)
    elif input.button_is_pressed(Button.A):
        basic.show_arrow(ArrowNames.WEST)
    elif input.button_is_pressed(Button.B):
        basic.show_arrow(ArrowNames.EAST)
    else:
        basic.show_icon(IconNames.NO)
basic.forever(on_forever)
