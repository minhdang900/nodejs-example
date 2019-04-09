const module1 = require('./module1');
class ModuleObject2{
  _test(){
    if (module1.attribute1 !== null && module1.attribute2 !== null){
       console.log("Module 1 be cached");
    }
  }
}
module.exports = new ModuleObject2();