const router = require("../Routers/loginRouters");

const GorevEkle = require('./GorevEkleController');

module.exports.index = function (req, res) {
    res.render('Gorevler', {
        username: username_g,
        pass: pass_g,

        Devamedengorev: GorevEkle.DevamedenGorevler.filter(function (x) {
            return (x.gorevType === type_g && x.durum === 'Devam Ediyor');
        }),
        Beklemedegorev: GorevEkle.BeklemedeGorevler.filter(function (x) {
            return (x.gorevType === type_g && x.durum === 'Beklemede');
        }),
        Tamamlanangorev: GorevEkle.TamamlananGorevler.filter(function (x) {
            return (x.gorevType === type_g && x.durum === 'Tamamlandı');
        }),
    });


}
module.exports.devamPost = function (req, res) {

    if (req.body.gorevId != undefined) {
        var gorevIndex = GorevEkle.DevamedenGorevler.findIndex(function (x) {
            return (x.gorevId == req.body.gorevId);
        })
        GorevEkle.DevamedenGorevler[gorevIndex].durum = req.body.gorevDurum;
        GorevEkle.TamamlananGorevler.push(
            GorevEkle.DevamedenGorevler[gorevIndex]
        );
    }

    res.render('Gorevler', {
        username: username_g,
        pass: pass_g,

        Devamedengorev: GorevEkle.DevamedenGorevler.filter(function (x) {
            return (x.gorevType === type_g && x.durum === 'Devam Ediyor');
        }),
        Beklemedegorev: GorevEkle.BeklemedeGorevler.filter(function (x) {
            return (x.gorevType === type_g && x.durum === 'Beklemede');
        }),
        Tamamlanangorev: GorevEkle.TamamlananGorevler.filter(function (x) {
            return (x.gorevType === type_g && x.durum === 'Tamamlandı');
        }),
    });
}

module.exports.bekleyenPost = function (req, res) {



    if (req.body.gorevId != undefined) {

        var gorevIndex = GorevEkle.BeklemedeGorevler.findIndex(function (x) {
            return (x.gorevId == req.body.gorevId);
        })
        GorevEkle.BeklemedeGorevler[gorevIndex].durum = req.body.gorevDurum;
        GorevEkle.DevamedenGorevler.push(
            GorevEkle.BeklemedeGorevler[gorevIndex]
        );
    }

    res.render('Gorevler', {
        username: username_g,
        pass: pass_g,

        Devamedengorev: GorevEkle.DevamedenGorevler.filter(function (x) {
            return (x.gorevType === type_g && x.durum === 'Devam Ediyor');
        }),
        Beklemedegorev: GorevEkle.BeklemedeGorevler.filter(function (x) {
            return (x.gorevType === type_g && x.durum === 'Beklemede');
        }),
        Tamamlanangorev: GorevEkle.TamamlananGorevler.filter(function (x) {
            return (x.gorevType === type_g && x.durum === 'Tamamlandı');
        }),
    });
}
