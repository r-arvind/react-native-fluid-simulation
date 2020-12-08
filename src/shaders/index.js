import advection from "./advection"
import baseVertex from "./baseVertex"
import {
    bloomBlurShader,
    bloomFinalShader,
    bloomPrefilterShader
} from "./bloom"
import {
    blur,
    blurVertex
} from "./blur"
import checkerboard from "./checkerboard"
import clear from "./clear"
import color from "./color"
import copy from "./copy"
import curl from "./curl"
import displaySource from "./display"
import divergence from "./divergence"
import gradientSubtract from "./gradient"
import pressure from "./pressure"
import splat from "./splat"
import {
    sunraysMaskShader,
    sunraysShader
} from "./sun"
import vorticity from "./vorticity"


export default {
    advection,
    baseVertex,
    bloomBlurShader,
    bloomFinalShader,
    bloomPrefilterShader,
    blur,
    blurVertex,
    checkerboard,
    clear,
    color,
    copy,
    curl,
    displaySource,
    divergence,
    gradientSubtract,
    pressure,
    splat,
    sunraysMaskShader,
    sunraysShader,
    vorticity,
}