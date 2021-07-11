module.exports = (db) => {
    db.picture.create({
        url:'https://res.cloudinary.com/dw8zecnb1/image/upload/c_fill,g_auto,h_250,w_970/v1626020634/johannesburg_qkspuu.jpg',
        tripId: 1
    }).then(() => {
        db.picture.create({
            url: 'https://res.cloudinary.com/dw8zecnb1/image/upload/c_fill,g_auto,h_250,w_970/v1625943740/morocco_sn9wiy.jpg',
            tripId:2
        })
    })
}