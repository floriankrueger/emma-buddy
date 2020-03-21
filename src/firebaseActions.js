const fb = require('./firebaseConfig.js')

const startUpdatingBuddies = () => {
    console.log(`startUpdatingBuddies`)
    var buddiesRef = fb.db.ref('buddies')
    buddiesRef.on('value', function(snapshot) {
        console.log(`snapshot: ${snapshot}`)
    })
}

export {
    startUpdatingBuddies
}