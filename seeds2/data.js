module.exports = (db) => {
        db.continent.create({
            continentName: 'Europe',
            timeZone: 'idk'
        }).then(() =>{
        db.continent.create({
            continentName: 'Asia',
            timeZone: 'idk'
        }).then(() =>{
            db.continent.create({
            continentName: 'Africa',
            timeZone: 'idk'
            }).then(() =>{
                db.continent.create({
                continentName: 'Oceania',
                timeZone: 'idk'
                }).then(() =>{
                    db.continent.create({
                    continentName: 'North America',
                    timeZone: 'idk'
                    }).then(() =>{
                        db.continent.create({
                        continentName: 'South America',
                        timeZone: 'idk'
                        });
                    });
                });
            });
        });
    });
};
