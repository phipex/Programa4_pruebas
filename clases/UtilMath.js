"use strict";
class UtilMath {
    constructor() {
    }

    static mean(list) {
        if (!list) {
            throw 'Error empty list'
        }
        var len = list.length;
        if (len === 0) {
            return 0;
        }
        var sum = this.sum(list);
        var obj = Object.keys(list.getValue(0));
        var meanList = this.sum(list)

        for(var i = 0;i<obj.length;i++){ //se toman todos lo valores sumados de cada tipo en el object payload de la lista y se divide sobre la longitud
            sum[obj[i]] = sum[obj[i]]/list.length
        }
        return sum;
    }
    
      static sum(list) { // metodo par arealizar la sumatoria
        if (!list) {
            throw 'Error empty list'
        }
        var len = list.length;
        if (len === 0) {
            return 0;
        }
        var i, j, sum = {};
        var total = 0;
        var count,obj;
        obj = Object.keys(list.getValue(0));
        count = obj.length;
        for (j = 0; j < count; j++) {
            for (i = 0; i < len; i++) {
                if(!sum[obj[j]]){
                    sum[obj[j]] = 0;
                }
                if(!isNaN(list.getValue(i)[obj[j]])){
                    sum[obj[j]] += parseFloat(list.getValue(i)[obj[j]]);
                }
            }
        }
        return sum;
    }
    
    
    static sumSquared(list) {
        if (!list) {
            throw 'Error empty list'
        }
        var len = list.length;
        if (len === 0) {
            return 0;
        }
        var i, j, obj, count, square = {}
        obj = Object.keys(list.getValue(0));
        count = obj.length;
        for (j = 0; j < count; j++) {
            for (i = 0; i < len; i++) {
                if(!square[obj[j]]){
                    square[obj[j]] = 0;
                }
                square[obj[j]] += Math.pow(parseFloat(list.getValue(i)[obj[j]]),2);
            }
        }
        return square;
    }
    
    static sumProduct(list) {
        if (!list) {
            throw 'Error empty list'
        }
        var len = list.length;
        if (len === 0) {
            return 0;
        }
        var i, j, product = 0;
        var count, obj;
        obj = Object.keys(list.getValue(0)); // se asume que todos los elementos de la lista tengan la misma estructura
        count = obj.length;
        for (i = 0; i < len; i++) {
            for (j = 0; j < count; j += 2) {
                product += (parseFloat(list.getValue(i)[obj[j]]) * (parseFloat(list.getValue(i)[obj[j+1]])));
            }
            
        }
        return product;
    }

    static stdDeviation(list) {
        if (list.length === 0)
            return 0;
        var mean = UtilMath.mean(list)
        var len = list.length;
        var i = 0;
        var deviation = {};
        var obj = Object.keys(list.getValue(0));// se asume que todos los elementos de la lista tengan la misma estructura
        var count = obj.length; // el numero de llaves diferente itemOne itemTwo
        for (i = 0; i < len; i++) {
            for (var j = 0; j < count; j++) {
                if(!deviation[obj[j]]){
                    deviation[obj[j]] = 0;
                }
                deviation[obj[j]] += Math.pow((parseFloat(list.getValue(i)[obj[j]]) - mean[obj[j]]), 2);
            }
        }
        for (var j = 0; j < count; j++) {
            deviation[obj[j]] = parseFloat(deviation[obj[j]] / (len - 1));
            deviation[obj[j]] = parseFloat(Math.sqrt(deviation[obj[j]]));
        }
        return deviation;
    }

}
module.exports = UtilMath;
