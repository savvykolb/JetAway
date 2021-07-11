module.exports = (db) => {
    db.recommendation.create({
        recommendationTxt: 'UNESCO-listed archeological area',
        tripId: 1
    }).then(() => {
        db.recommendation.create({
            recommendationTxt: 'Johannesburg Zoo',
            tripId: 2
        })
    })
}