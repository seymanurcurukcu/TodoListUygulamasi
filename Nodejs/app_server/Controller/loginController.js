global.username_g = '';
global.pass_g = '';
global.type_g = '';


module.exports.index = function (req, res) {
    username_g = '';
    pass_g = '';
    res.render('giris');
}

module.exports.indexpost = function (req, res) {

    username_g = req.body.username;
    pass_g = req.body.pass;

    if (req.body.username == 'filiz' && req.body.pass == '123456') {
        global.type_g = 'admin';
        res.redirect('/gorevler');
    }

    if (req.body.username == 'seyma' && req.body.pass == '123456') {
        global.type_g = 'personel';
        res.redirect('/gorevler');
    }
}

