export default {
    increment: function () {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                const nextVal = parseInt(localStorage.getItem('percent')) + 15;
                if (nextVal <= 100) {
                    resolve()
                } else {
                    reject()
                }

            }, 300);
        })
    },
    decrement: function(){
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                const nextVal = parseInt(localStorage.getItem('percent')) - 15;
                if (nextVal >= 0) {
                    resolve()
                } else {
                    reject()
                }

            }, 300);
        })
    },
    reset: function(){
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                resolve()
            }, 400)
        })
    }
}
