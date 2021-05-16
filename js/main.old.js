console.log("init")

function main() {

    const canvas = document.querySelector("#glCanvas")
    const gl = canvas.getContext("webgl")

    if (gl) {

        console.log("loading webgl context!")

        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);

    } else {

        console.log("oops. no context!")
    }
}

window.onload = main