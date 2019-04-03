// var module1 = new module1constructor();
// var ModuleObject2 = function(){};
// ModuleObject2.prototype._test = function(){
  //   if (module1.attribute1 !== null && module1.attribute2 !== null){
    //     console.log("Module 1 be cached");
    //   }
    // }
    
const module1 = require('./module1');
class ModuleObject2{
  _test(){
    if (module1.attribute1 !== null && module1.attribute2 !== null){
       console.log("Module 1 be cached");
    }
  }
}
module.exports = new ModuleObject2();

// error don't know *
// import * as module1 from "./module1";
// class ModuleObject2 {
//   _test(){
//     if (module1.attribute1 !== null && module1.attribute2 !== null){
//        console.log("Module 1 be cached");
//     }
//   }
// }
// export default ModuleObject2();