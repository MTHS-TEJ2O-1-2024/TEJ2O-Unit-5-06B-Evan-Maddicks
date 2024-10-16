/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Evan M
 * Created on: October 16
 * This program will show the distance of an object usin sonar.
*/

let distanceToObject:number = 0

//setup
basic.showIcon(IconNames.Heart)

//find distance from sonar
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    distanceToObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )
    basic.showNumber(distanceToObject)
    basic.showString("cm")
    basic.showIcon(IconNames.Happy)
})