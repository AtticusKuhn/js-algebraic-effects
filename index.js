const {Do} =require("./lib.js")
const {rand, log, getEnv, pureHandler,effectfulHandler,envHandler} =require( "./effects.js")
// a program to generate 2 random numbers
// and then print their sum
const addRandomNumbers = Do(function*() {
    const r1 = yield rand();
    const r2 = yield rand();
    yield log(`${r1}+${r2} is the same as ${r1+r2}`)
    return r1+r2
})
// a program get the current user from
// environment variables
const envProgram = Do(function*(){
    return (yield getEnv("USER"))
})
// test random number program with
// a pure handler
console.log("pure handling is", pureHandler(addRandomNumbers));
// run the random number program
// effectfully
console.log("effectful handling is:",effectfulHandler(addRandomNumbers))
// run the env program by using 
// environment variables
console.log("env", effectfulHandler(envProgram))
// run env progrom purely by passing
// in an object
console.log("env pure", envHandler({"USER":"Rohan"})(envProgram))