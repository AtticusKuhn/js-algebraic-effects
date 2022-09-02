const {mkHanlder,effectMaker} = require("./lib.js")

const {log, rand,getEnv} = effectMaker();
// an effectful handler recieves
// the program and actually performs
// the effects
const effectfulHandler = mkHanlder({
    "log": (x)=>console.log(x),
    "rand":()=> Math.floor(10*Math.random()),
    "getEnv": (x)=>process.env[x],
})
// a pure handler mocks the effects
// and never actually performs any effects
const pureHandler =  mkHanlder({
    "log": (x)=>x,
    "rand":()=> 1,
})
// a pure handler for environment variables
// that takes in a parameter
const envHandler = (testEnv) => mkHanlder({
    "getEnv" : (x)=>testEnv[x],
})

module.exports = {log, rand,getEnv,envHandler, effectfulHandler, pureHandler}