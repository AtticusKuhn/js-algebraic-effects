const {Do} =require("./lib.js")
const {rand, log, getEnv, pureHandler,effectfulHandler,envHandler} =require( "./effects.js")

const addRandomNumbers = Do(function*() {
    const r1 = yield rand();
    const r2 = yield rand();
    yield log(`${r1}+${r2} is the same as ${r1+r2}`)
    return r1+r2
})

const envProgram = Do(function*(){
    return (yield getEnv("REPL_OWNER"))
})
console.log(addRandomNumbers)
console.log("pure handling is", pureHandler(addRandomNumbers));
console.log("effectful handling is:",effectfulHandler(addRandomNumbers))
console.log("env", effectfulHandler(envProgram))
console.log("env pure", envHandler({"REPL_OWNER":"Rohan"})(envProgram))