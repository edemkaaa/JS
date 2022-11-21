var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test')

var Car = mongoose.model('Car', { name: String })

var bunker = new Car({ name: 'sedan' })
bunker.save(function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('бррррр')
    }
})
