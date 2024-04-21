let currentNum = 0;
let percount = 1;

document.getElementById('incress').addEventListener("click", button => {
    currentNum = currentNum += percount;
    document.getElementById('currentNum').innerHTML = currentNum
})
document.getElementById('reset').addEventListener("click", button => {
    currentNum = 0;
    document.getElementById('currentNum').innerHTML = currentNum
})
document.getElementById('decress').addEventListener("click", button => {
    currentNum = currentNum -= percount;
    document.getElementById('currentNum').innerHTML = currentNum
})

document.getElementById('countIncress').addEventListener("click", button => {
    percount = percount += 1;
    document.getElementById('countIncress').innerHTML = `incress ${percount}`
    document.getElementById('countDecress').innerHTML = `decress ${percount}`

})
document.getElementById('countReset').addEventListener("click", button => {
    percount = 1;
    document.getElementById('countIncress').innerHTML = `incress ${percount}`
    document.getElementById('countDecress').innerHTML = `decress ${percount}`
})
document.getElementById('countDecress').addEventListener("click", button => {
    if(percount <= 1) return
    percount = percount -= 1;
    document.getElementById('countIncress').innerHTML = `incress ${percount}`
    document.getElementById('countDecress').innerHTML = `decress ${percount}`
})``