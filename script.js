var _ = {
    map: function(arr,fnCallback) { 
        let numeros = [];
        
        for (let x=1; x < arr.length; x++){
                numeros.push( fnCallback(arr[x]) );
        }

        return numeros;
    },
    reduce: function(arr,fnCallback) { 
        let total = 0;
        
        for (let x=0; x < arr.length; x++){
            total = fnCallback(total, arr[x]);
        }

        return total;

    },
    find: function(arr, valor, fnCallback) { 
        let existe = false;
        
        for (let x=0; x < arr.length; x++){
           if (fnCallback(valor, arr[x])) {
                existe= true;
                break;
           }
        }

        return existe;
    },
    filter: function(arr, fnCallback) { 
        let numeros = [];
        
        for (let x=1; x < arr.length; x++){
            if (fnCallback(arr[x])){
                numeros.push(arr[x]);
            }
        }

        return numeros;
    },
    reject: function(arr, fnCallback) { 
        let numeros = [];
        
        for (let x=1; x < arr.length; x++){
            if ( !fnCallback(arr[x]) ){
                numeros.push(arr[x]);
            }
        }

        return numeros;
    }
  }
 // ¡creaste una biblioteca con 5 métodos!
 

 
let evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
//console.log(evens); // si las cosas funcionan bien, esto devolverá [2,4,6].

let totalreduce = _.reduce([1.8, 2.4, 3.6, 2.9, 5.2, 6.7], function (total, num) { return total + Math.round(num);});
//console.log(totalreduce); // totaliza y redondea los valores aproximandolos al numero entero mas proximo.

let existe = _.find([15, 24, 36, 29, 52, 67], 67, function (num1,num2) { if (num1 == num2) { return true} else {return false} });
//console.log('el numero 67, existe:' + existe); // busca el primer valor en un arrray.

let rejectpares = _.reject([1,8, 2,4, 3,6, 2,9, 5,2, 6,7], function (num) { if (num % 2 == 0) { return true} else {return false} });
//console.log(rejectpares); //limpiar los numeros pares.

let doblarnumeros = _.map([1,8, 2,4, 3,6, 2,9, 5,2, 6,7], function (num) { return (num * 2) });
console.log(doblarnumeros); //retirna el doble de cada numero.