const obj = {
    // Sem Arrow Function precisa fazer bind pra função encontrar o método log do objeto (obj)
    showContext: function showContext() {
        setTimeout(function() {
            this.log('after 1000ms')
        }.bind(this), 1000)
    },

    // Com Arrow Function, o contexto sempre será o código que envolve ele (contexto léxico), nesse caso o próprio objeto (obj)
    showContextArrow: function showContext() {
        setTimeout(() => {
            this.log('after 1000ms')
        }, 1000)
    },

    log: function log(value) {
        console.log(value)
    }
}

obj.showContext()
obj.showContextArrow()