const remoteURL = "http://localhost:8088"

export default Object.create(null, {
    get: {
        value: function (id) {
            return fetch(`${remoteURL}/employees/${id}`).then(e => e.json())
        }
    },
    getAll: {
        value: function () {
            return fetch(`${remoteURL}/employees`).then(e => e.json())
        }
    }
})