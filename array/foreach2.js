Array.prototype.forEach2 = function(callback){
    for (i = 0;  i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ['Ana', 'Aldo', 'Daniel', 'Junior']

aprovados.forEach2((nome, indice) => console.log(`${indice + 1}) ${nome}`))
