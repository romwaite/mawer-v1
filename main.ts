basic.forever(function () {
    if (input.compassHeading() >= 315 && input.compassHeading() < 45) {
        basic.showLeds(`
            # # # # #
            # . . . .
            # # # # #
            # . . . .
            # # # # #
            `)
        basic.showString(" East African Proverbs by Anonymous + Translated by A. M. Juster")
    } else {
        if (input.compassHeading() >= 45 && input.compassHeading() < 135) {
            basic.showLeds(`
                # . . . #
                # # . . #
                # . # . #
                # . . # #
                # . . . #
                `)
            basic.showString(" North of Boston by Maggie Dietz")
        } else {
            if (input.compassHeading() >= 135 && input.compassHeading() < 225) {
                basic.showLeds(`
                    # . . . #
                    # . . . #
                    # . # . #
                    # # . # #
                    # . . . #
                    `)
                basic.showString(" West of Silicon Valley by T. Zachary Cotler")
            } else {
                basic.showLeds(`
                    # # # # #
                    # . . . .
                    # # # # #
                    . . . . #
                    # # # # #
                    `)
                basic.showString(" South by Natasha Trethewey")
            }
        }
    }
})
