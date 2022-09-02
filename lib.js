const Monad = require('burrido')

const then = (e, func) =>({...e, next: func})
 const effectMonad = Monad.default({
  pure: x => ({
      type:"pure",
      val:x,
      args:[],
      next:null,
  }), 
  bind: then, 
})

const effectMaker = ()=> {
    const handler = {
        get: function (_target, prop, _receiver) {
            return (...x)=>({
                type: prop,
                args:x,
                next:null,
            })
        }
    };
    const proxy = new Proxy({}, handler);
    return proxy
};

const handle=({next, type, args,...rest}, handlers)=>
    type === "pure"
    ? rest.val
    :
    next !== null
    ? handle(next(handlers[type](...args)), handlers)
    : handlers[type](...args);
const Do = effectMonad.Do;
const mkHanlder = (handlers)=>(program)=>handle(program,handlers)
module.exports = {Do, mkHanlder,effectMaker}