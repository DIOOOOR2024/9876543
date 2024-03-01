input.onGesture(Gesture.Shake, function () {
    basic.showString("" + (rp))
})
input.onButtonPressed(Button.A, function () {
    c.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    a.delete()
    a1.delete()
    a2.delete()
    a3.delete()
    a4.delete()
    b.delete()
    c.delete()
    d.delete()
    e.delete()
    f.delete()
    g.delete()
    rp = 0
    box = game.createSprite(2, 2)
})
input.onButtonPressed(Button.B, function () {
    c.move(1)
})
let box: game.LedSprite = null
let g: game.LedSprite = null
let f: game.LedSprite = null
let e: game.LedSprite = null
let d: game.LedSprite = null
let b: game.LedSprite = null
let a4: game.LedSprite = null
let a3: game.LedSprite = null
let a2: game.LedSprite = null
let a1: game.LedSprite = null
let a: game.LedSprite = null
let rp = 0
let c: game.LedSprite = null
c = game.createSprite(0, 3)
game.setLife(3)
rp = 0
a = game.createSprite(0, 0)
a.turn(Direction.Right, 90)
a1 = game.createSprite(1, 0)
a1.turn(Direction.Right, 90)
a2 = game.createSprite(2, 0)
a2.turn(Direction.Right, 90)
a3 = game.createSprite(3, 0)
a3.turn(Direction.Right, 90)
a4 = game.createSprite(4, 0)
a4.turn(Direction.Right, 90)
b = game.createSprite(0, 4)
d = game.createSprite(1, 4)
e = game.createSprite(2, 4)
f = game.createSprite(3, 4)
g = game.createSprite(4, 4)
loops.everyInterval(4000, function () {
    a1.move(1)
})
loops.everyInterval(2500, function () {
    a2.move(1)
})
loops.everyInterval(2000, function () {
    a4.move(1)
})
basic.forever(function () {
    if (c.isTouching(a)) {
        a.set(LedSpriteProperty.Y, 0)
        a.set(LedSpriteProperty.X, randint(0, 4))
        rp += rp + 1
        music.play(music.createSoundExpression(WaveShape.Sine, 5000, 2224, 255, 131, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    }
    if (c.isTouching(a1)) {
        a1.set(LedSpriteProperty.Y, 0)
        a1.set(LedSpriteProperty.X, randint(0, 4))
        rp += rp + 1
        music.play(music.createSoundExpression(WaveShape.Sine, 4470, 600, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    }
    if (c.isTouching(a2)) {
        a2.set(LedSpriteProperty.Y, 0)
        a2.set(LedSpriteProperty.X, randint(0, 4))
        rp += rp + 1
        music.play(music.createSoundExpression(WaveShape.Noise, 2224, 4646, 255, 177, 750, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    }
    if (c.isTouching(a3)) {
        a3.set(LedSpriteProperty.Y, 0)
        a3.set(LedSpriteProperty.X, randint(0, 4))
        rp += rp + 1
        music.play(music.createSoundExpression(WaveShape.Triangle, 4505, 2680, 255, 131, 75, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
    }
    if (c.isTouching(a4)) {
        a4.set(LedSpriteProperty.Y, 0)
        a4.set(LedSpriteProperty.X, randint(0, 4))
        rp += rp + 1
        music.play(music.createSoundExpression(WaveShape.Square, 3733, 2329, 255, 177, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
    }
    if (a.isTouching(b) || (a.isTouching(d) || (a.isTouching(e) || (a.isTouching(f) || a.isTouching(g))))) {
        game.removeLife(1)
        a.delete()
        music.play(music.createSoundExpression(WaveShape.Noise, 54, 54, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    }
    if (a1.isTouching(b) || (a1.isTouching(d) || (a1.isTouching(e) || (a1.isTouching(f) || a1.isTouching(g))))) {
        game.removeLife(1)
        a1.delete()
        music.play(music.createSoundExpression(WaveShape.Noise, 54, 54, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    }
    if (a2.isTouching(b) || (a2.isTouching(d) || (a2.isTouching(e) || (a2.isTouching(f) || a2.isTouching(g))))) {
        game.removeLife(1)
        a2.delete()
        music.play(music.createSoundExpression(WaveShape.Noise, 54, 54, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    }
    if (a3.isTouching(b) || (a3.isTouching(d) || (a3.isTouching(e) || (a3.isTouching(f) || a3.isTouching(g))))) {
        game.removeLife(1)
        a3.delete()
        music.play(music.createSoundExpression(WaveShape.Noise, 54, 54, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    }
    if (a4.isTouching(b) || (a4.isTouching(d) || (a4.isTouching(e) || (a4.isTouching(f) || a4.isTouching(g))))) {
        game.removeLife(1)
        a4.delete()
        music.play(music.createSoundExpression(WaveShape.Noise, 54, 54, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    }
    if (input.pinIsPressed(TouchPin.P0)) {
        box.turn(Direction.Left, 90)
        music.play(music.createSoundExpression(WaveShape.Triangle, 750, 5000, 0, 255, 75, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
    }
})
basic.forever(function () {
    if (game.isRunning()) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funk), music.PlaybackMode.InBackground)
        music.play(music.createSoundExpression(WaveShape.Noise, 500, 1, 255, 0, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        music.play(music.createSoundExpression(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        music.play(music.createSoundExpression(WaveShape.Triangle, 300, 200, 255, 0, 75, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        music.play(music.createSoundExpression(WaveShape.Sine, 200, 600, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        music.play(music.createSoundExpression(WaveShape.Noise, 54, 54, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        music.play(music.createSoundExpression(WaveShape.Sine, 750, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        music.play(music.createSoundExpression(WaveShape.Noise, 2084, 2856, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        music.play(music.createSoundExpression(WaveShape.Triangle, 300, 200, 255, 0, 75, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        music.play(music.createSoundExpression(WaveShape.Noise, 54, 54, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        music.play(music.createSoundExpression(WaveShape.Noise, 523, 5000, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
        music.play(music.createSoundExpression(WaveShape.Triangle, 2049, 200, 134, 212, 75, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
    } else {
        music.setVolume(40)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Punchline), music.PlaybackMode.InBackground)
    }
})
loops.everyInterval(250, function () {
    if (input.pinIsPressed(TouchPin.P2)) {
        box.move(1)
        music.play(music.createSoundExpression(WaveShape.Sine, 5000, 5000, 0, 255, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    } else if (input.pinIsPressed(TouchPin.P1)) {
        box.move(-1)
        music.play(music.createSoundExpression(WaveShape.Sine, 5000, 5000, 0, 255, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    }
})
loops.everyInterval(3000, function () {
    a3.move(1)
})
loops.everyInterval(3500, function () {
    a.move(1)
})
