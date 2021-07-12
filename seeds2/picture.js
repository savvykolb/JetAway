module.exports = (db) => {
    db.picture.create({
        url:'https://res.cloudinary.com/dw8zecnb1/image/upload/c_fill,g_auto,h_250,w_970/v1626020634/johannesburg_qkspuu.jpg',
        tripId: 1
    }).then(() => {
        db.picture.create({
            url: 'https://res.cloudinary.com/dw8zecnb1/image/upload/c_fill,g_auto,h_250,w_970/v1625943740/morocco_sn9wiy.jpg',
            tripId:2
        }).then(() => {
            db.picture.create({
                url:'https://res.cloudinary.com/dw8zecnb1/image/upload/c_fill,g_auto,h_250,w_970/v1626020849/safari_jj7jbp.jpg',
                tripId: 3
            }).then(() => {
                db.picture.create({
                    url:'https://res.cloudinary.com/dw8zecnb1/image/upload/c_fill,g_auto,h_250,w_970/v1626021350/egypt_zqetbb.jpg',
                    tripId: 4
                }).then(() => {
                    db.picture.create({
                        url:'https://res.cloudinary.com/dw8zecnb1/image/upload/c_fill,g_auto,h_250,w_970/v1626021552/jordan_bxvvts.jpg',
                        tripId: 5
                    }).then(() => {
                        db.picture.create({
                            url:'https://res.cloudinary.com/dw8zecnb1/image/upload/c_fill,g_auto,h_250,w_970/v1626024241/peru_c78xqq.jpg',
                            tripId: 11
                        }).then(() => {
                            db.picture.create({
                                url:'https://res.cloudinary.com/dw8zecnb1/image/upload/c_fill,g_auto,h_250,w_970/v1626022566/ecuador_qkcfbk.webp',
                                tripId: 12
                            }).then(() => {
                                db.picture.create({
                                    url:'https://res.cloudinary.com/dw8zecnb1/image/upload/c_fill,g_auto,h_250,w_970/v1626023313/belize1_tlop7w.jpg',
                                    tripId: 13
                                }).then(() => {
                                    db.picture.create({
                                        url: 'https://res.cloudinary.com/dw8zecnb1/image/upload/c_fill,g_auto,h_250,w_970/v1626023913/costa_rica_iyfvg3.jpg',
                                        tripId: 14
                                    }).then(() => {
                                        db.picture.create({
                                            url: 'https://res.cloudinary.com/dw8zecnb1/image/upload/c_fill,g_auto,h_250,w_970/v1626023642/chile_metewz.jpg',
                                            tripId: 15
                                        }).then(() => {
                                            db.picture.create({
                                                url: 'https://res.cloudinary.com/dtk7zh09m/image/upload/c_fill,g_auto,h_250,w_970/v1625937767/North%20America/49668996087_adab5644c7_h_frpriq.jpg',
                                                tripId: 6
                                            }).then(() => {
                                                db.picture.create({
                                                    url: 'https://res.cloudinary.com/dtk7zh09m/image/upload/c_fill,g_auto,h_250,w_970/v1625937977/North%20America/50772013126_48d59acdeb_h_i0whid.jpg', 
                                                    tripId: 7
                                                }).then(() => {
                                                    db.picture.create({
                                                        url: 'https://res.cloudinary.com/dtk7zh09m/image/upload/c_fill,g_auto,h_250,w_970/v1625937043/North%20America/Hawaii.jpg',
                                                        tripId: 8
                                                    }).then(() => {
                                                        db.picture.create({
                                                            url: 'https://res.cloudinary.com/dtk7zh09m/image/upload/c_fill,g_auto,h_250,w_970/v1625937395/North%20America/31052500095_a0ea4ea238_h_tjj8fg.jpg',
                                                            tripId: 9
                                                        }).then(() => {
                                                            db.picture.create({
                                                                url: 'https://res.cloudinary.com/dtk7zh09m/image/upload/c_fill,g_auto,h_250,w_970/v1625937513/North%20America/14610433823_3b819ae057_h_kur7gk.jpg',
                                                                tripId: 10
                                                            }).then(() => {
                                                                db.picture.create({
                                                                    url: 'https://res.cloudinary.com/dtk7zh09m/image/upload/c_fill,g_auto,h_250,w_970/v1625938091/Europe/40168492674_4f83929f1e_h_zthbom.jpg',
                                                                    tripId: 16
                                                                }).then(() => {
                                                                    db.picture.create({
                                                                        url: 'https://res.cloudinary.com/dtk7zh09m/image/upload/c_fill,g_auto,h_250,w_970/v1625938430/Europe/client-code_mxougf.jpg',
                                                                        tripId:17
                                                                    }).then(() => {
                                                                        db.picture.create({
                                                                            url: 'https://res.cloudinary.com/dtk7zh09m/image/upload/c_fill,g_auto,h_250,w_970/v1625939058/Europe/13970686237_abc3a6b78a_h_qw0pot.jpg',
                                                                            tripId:18
                                                                        }).then(() => {
                                                                            db.picture.create({
                                                                                url: 'https://res.cloudinary.com/dtk7zh09m/image/upload/c_fill,g_auto,h_250,w_970/v1625939568/Europe/46438249065_40a4d44db8_o_1_b5nc4v.jpg',
                                                                                tripId: 19
                                                                            }).then(() => {
                                                                                db.picture.create({
                                                                                    url:'https://res.cloudinary.com/dtk7zh09m/image/upload/c_fill,g_auto,h_250,w_970/v1625939797/Europe/25439344572_c538a944d8_h_i0qlxh.jpg',
                                                                                    tripId:20
                                                                                }).then(() => {
                                                                                    db.picture.create({
                                                                                        url: 'https://res.cloudinary.com/dtk7zh09m/image/upload/c_fill,g_auto,h_250,w_970/v1625940193/Asia/Screen_Shot_2021-07-10_at_1.58.27_PM_jnnv52.png',
                                                                                        tripId: 21
                                                                                    }).then(() => {
                                                                                        db.picture.create({
                                                                                            url: 'https://res.cloudinary.com/dtk7zh09m/image/upload/c_fill,g_auto,h_250,w_970/v1625940693/Asia/Screen_Shot_2021-07-10_at_2.10.50_PM_dnnxmx.png',
                                                                                            tripId: 22 
                                                                                        }).then(() => {
                                                                                            db.picture.create({
                                                                                                url: 'https://res.cloudinary.com/dtk7zh09m/image/upload/c_fill,g_auto,h_250,w_970/v1625941089/Asia/client-code_sqnlxf.jpg',
                                                                                                tripId:23
                                                                                            }).then(() => {
                                                                                                db.picture.create({
                                                                                                    url: 'https://res.cloudinary.com/dtk7zh09m/image/upload/c_fill,g_auto,h_250,w_970/v1625941231/Asia/Screen_Shot_2021-07-10_at_2.20.06_PM_kif7qa.png',
                                                                                                    tripId:24
                                                                                                }).then(() => {
                                                                                                        db.picture.create({
                                                                                                            url: 'https://res.cloudinary.com/dtk7zh09m/image/upload/c_fill,g_auto,h_250,w_970/v1625941503/Asia/Screen_Shot_2021-07-10_at_2.24.38_PM_wvkzkx.png',
                                                                                                            tripId:25
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
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    })}