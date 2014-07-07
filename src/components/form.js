var utils = require('../utils'),
    request = require('../request')

module.exports = {
    methods: {
        back: function () {
            window.history.back()
        }
    },

    created: function () {
        this.valid = true
        this.controls = {}
        this.model = {}

        this.src = this.$el.getAttribute('action')

        this.$el.addEventListener('submit', function (event) {
            event.preventDefault()
            this.$broadcast('check')

            utils.forEach(this.controls, function (v, k) {
                this.valid = this.valid && v
            }.bind(this))

            if (this.valid)
                request.post(this.src).send(this.model).end(function (res) {
                })
        }.bind(this))
    }
}
