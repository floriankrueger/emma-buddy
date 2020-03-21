import { store } from "./store.js"
const fb = require('./firebaseConfig.js')

const startUpdatingBuddies = () => {
    var buddiesRef = fb.db.ref('buddies').orderByChild('status');
    buddiesRef.on('value', function (snapshot) {
        store.commit('updateBuddies', Object.keys(snapshot.val())
            .map((key) => {
                const element = snapshot.val()[key]
                return {
                    bid: element.bid,
                    name: element.name,
                    einrichtung: element.einrichtung,
                    standort: element.standort,
                    sprachen: Object.keys(element.sprachen),
                    status: function() {
                        if (element.online && element.busy) {
                            return "busy"
                        } else if (element.online) {
                            return "online"
                        } else {
                            return "offline"
                        }
                    },
                    taetigkeit: element.taetigkeit
                }
            }))
            
    })
}

export {
    startUpdatingBuddies
}