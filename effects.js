const {mkHanlder,effectMaker} = require("./lib.js")

const {log, rand,getEnv} = effectMaker();

const effectfulHandler = mkHanlder({
    "log": (x)=>console.log(x),
    "rand":()=> Math.floor(10*Math.random()),
    "getEnv": (x)=>process.env[x],
})

const pureHandler =  mkHanlder({
    "log": (x)=>x,
    "rand":()=> 1,
})

const envHandler = (testEnv) => mkHanlder({
    "getEnv" : (x)=>testEnv[x],
})

module.exports = {log, rand,getEnv,envHandler, effectfulHandler, pureHandler}