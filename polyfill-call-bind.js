let profile = {
    firstName: "Megha",
    lastName:"Telang"
  }
  
  let print = function(town) {
    console.log(this.firstName + " " + this.lastName + " stays in " + town);
  }
  
  Function.prototype.newCall = function(...args){
  let currentThis = this.newBind(args[0]);
    return currentThis("Honnavar");
  }
  
  
  Function.prototype.newBind = function(...args1){
    let currentThis =this;
    let params = args1.slice(1);
    return function(...args2){
      currentThis.apply(args1[0],[...params,...args2])
    }
  }
  print.newCall(profile);