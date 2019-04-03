// var ModuleObject1 = function(){
//   this.attribute1 = null;
//   this.attribute2 = null;
// }
// ModuleObject1.prototype._init = function(){
//   this.attribute1 = "initiated!";
//   this.attribute2 = "also initiated";
// }
// module.exports = new ModuleObject1();


class ModuleObject1 {
  constructor(){
    this.attribute1 = null;
    this.attribute2 = null;
  }
  _init(){
    this.attribute1 = "hello";
    this.attribute2 = "world";
  }
}
module.exports = ModuleObject1;

