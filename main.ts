basic.forever(function () {
    if (tinkercademy.PIR(DigitalPin.P2)) {
        tinkercademy.LED(DigitalPin.P1, OnOff.On)
    } else {
        tinkercademy.LED(DigitalPin.P1, OnOff.Off)
    }
})
