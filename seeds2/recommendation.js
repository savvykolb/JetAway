module.exports = (db) => {
  db.recommendation.create({
      recommendationTxt:
        "UNESCO-listed archeological area",
      tripId: 1,
    })
    .then(() => {
      db.recommendation.create({
          recommendationTxt:
            "Johannesburg Zoo",
          tripId: 1,
        })
        .then(() => {
          db.recommendation.create({
              recommendationTxt:
                "Lion Park",
              tripId: 1,
            })
            .then(() => {
              db.recommendation.create({
                  recommendationTxt:
                    "Mandela House",
                  tripId: 1,
                })
                .then(() => {
                  db.recommendation.create({
                      recommendationTxt:
                        "Visit the Aït-Ben-Haddou",
                      tripId: 2,
                    })
                    .then(() => {
                      db.recommendation.create({
                          recommendationTxt:
                            "Africa's large marketplaces",
                          tripId: 2,
                        })
                        .then(() => {
                          db.recommendation.create({
                              recommendationTxt:
                                "Ride a 4x4 at the Erg Chebbi sand dunes",
                              tripId: 2,
                            })
                            .then(() => {
                              db.recommendation.create({
                                  recommendationTxt:
                                    "stare up at the Atlas Mountains",
                                  tripId: 2,
                                })
                                .then(() => {
                                  db.recommendation.create({
                                      recommendationTxt:
                                        "Big 5 Safari, Lounge in Nairobi",
                                      tripId: 3,
                                    })
                                    .then(() => {
                                      db.recommendation.create({
                                          recommendationTxt:
                                            "Visit Traverse Maasai Mara National Park",
                                          tripId: 3,
                                        })
                                        .then(() => {
                                          db.recommendation.create({
                                              recommendationTxt:
                                                " hang out with giraffes at the Rothschild’s Giraffe Environmental Conservation Centre",
                                              tripId: 3,
                                            })
                                            .then(() => {
                                              db.recommendation.create({
                                                  recommendationTxt:
                                                    "Africa’s Great Rift Valley",
                                                  tripId: 3,
                                                })
                                                .then(() => {
                                                  db.recommendation.create({
                                                      recommendationTxt:
                                                        "Cruise for 3 nights and 4 days on the world’s most famous river, the Nile",
                                                      tripId: 4,
                                                    })
                                                    .then(() => {
                                                      db.recommendation.create({
                                                          recommendationTxt:
                                                            "Visit the tomb of King Tut and dozens of other pharaohs in the Valley of the Kings",
                                                          tripId: 4,
                                                        })
                                                        .then(() => {
                                                          db.recommendation.create({
                                                              recommendationTxt:
                                                                "Explore the Old City of Jerusalem",
                                                              tripId: 5,
                                                            })
                                                            .then(() => {
                                                              db.recommendation.create({
                                                                  recommendationTxt:
                                                                    "Float weightlessly in the Dead Sea",
                                                                  tripId: 5,
                                                                })
                                                                .then(() => {
                                                                  db.recommendation.create({
                                                                      recommendationTxt:
                                                                        "Visit ancient Al-Khazneh temple at Jordan’s world-famous Petra ruins",
                                                                      tripId: 5,
                                                                    })
                                                                    .then(
                                                                      () => {
                                                                        db.recommendation.create(
                                                                            {
                                                                              recommendationTxt:
                                                                                "Ride a 4x4 through the  Wadi Rum Desert Valley",
                                                                              tripId: 5,
                                                                            }
                                                                          )
                                                                          .then(
                                                                            () => {
                                                                              db.recommendation.create(
                                                                                  {
                                                                                    recommendationTxt:
                                                                                      "Times Square",
                                                                                    tripId: 6,
                                                                                  }
                                                                                )
                                                                                .then(
                                                                                  () => {
                                                                                    db.recommendation.create(
                                                                                        {
                                                                                          recommendationTxt:
                                                                                            "Statue of Liberty",
                                                                                          tripId: 6,
                                                                                        }
                                                                                      )
                                                                                      .then(
                                                                                        () => {
                                                                                          db.recommendation.create(
                                                                                              {
                                                                                                recommendationTxt:
                                                                                                  "Broadway Show",
                                                                                                tripId: 6,
                                                                                              }
                                                                                            )
                                                                                            .then(
                                                                                              () => {
                                                                                                db.recommendation.create(
                                                                                                    {
                                                                                                      recommendationTxt:
                                                                                                        "Museum of Modern Art",
                                                                                                      tripId: 6,
                                                                                                    }
                                                                                                  )
                                                                                                  .then(
                                                                                                    () => {
                                                                                                      db.recommendation.create(
                                                                                                          {
                                                                                                            recommendationTxt:
                                                                                                              "Gaze into the great void of the Grand Canyon",
                                                                                                            tripId: 7,
                                                                                                          }
                                                                                                        )
                                                                                                        .then(
                                                                                                          () => {
                                                                                                            db.recommendation.create(
                                                                                                                {
                                                                                                                  recommendationTxt:
                                                                                                                    "Stroll the Las Vegas strip",
                                                                                                                  tripId: 7,
                                                                                                                }
                                                                                                              )
                                                                                                              .then(
                                                                                                                () => {
                                                                                                                  db.recommendation.create(
                                                                                                                    {
                                                                                                                      recommendationTxt:
                                                                                                                        "walk through Zion National Park in Utah",
                                                                                                                      tripId: 7,
                                                                                                                    }
                                                                                                                  )
                                                                                                                  
                                                                                                                }
                                                                                                              );
                                                                                                          }
                                                                                                        );
                                                                                                    }
                                                                                                  );
                                                                                              }
                                                                                            );
                                                                                        }
                                                                                      );
                                                                                  }
                                                                                );
                                                                            }
                                                                          );
                                                                      }
                                                                    );
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
};
