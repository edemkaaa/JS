var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test')

var schema = mongoose.Schema({ name: String })

schema.methods.brrr = function(){
    console.log(this.get("name") + " сказал брр")
}

var Car = mongoose.model('Car', schema)

var bunker = new Car({ name: 'приора' })
bunker.save(function (err) {
    bunker.brrr()
})
