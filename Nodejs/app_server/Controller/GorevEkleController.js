const router = require("../Routers/loginRouters");

module.exports.index=function(req,res){
    res.render('GorevEkle');
 
}
let TamamlananGorevler=[
    {
        gorevId:1,
        gorevAdi:'test4',
        kategori:'analiz',
        gorevAciklamasi:'testt4',
        baslangicTarihi:'20-02-2021',
        bitisTarihi:'22-02-2021',
        durum:'Tamamlandı',
        gorevType:'admin'
    },
    {
        gorevId:2,
        gorevAdi:'test5',
        kategori:'kodlama',
        gorevAciklamasi:'test5',
        baslangicTarihi:'20-03-2021',
        bitisTarihi:'25-03-2021',
        durum:'Tamamlandı',
        gorevType:'admin'
    },
    {
        gorevId:3,
        gorevAdi:'test10',
        kategori:'Tasarım',
        gorevAciklamasi:'test10',
        baslangicTarihi:'20-04-2021',
        bitisTarihi:'26-04-2021',
        durum:'Tamamlandı',
        gorevType:'personel'
    },
    {
        gorevId:4,
        gorevAdi:'test11',
        kategori:'Test',
        gorevAciklamasi:'test11',
        baslangicTarihi:'20-05-2021',
        bitisTarihi:'25-05-2021',
        durum:'Tamamlandı',
        gorevType:'personel'
    }
];
let BeklemedeGorevler=[
    {
        gorevId:5,
        gorevAdi:'test',
        kategori:'Kodlema',
        gorevAciklamasi:'testt',
        baslangicTarihi:'20-06-2021',
        bitisTarihi:'25-06-2021',
        durum:'Beklemede',
        gorevType:'admin'
    },
    {
        gorevId:6,
        gorevAdi:'test2',
        kategori:'Test',
        gorevAciklamasi:'testt2',
        baslangicTarihi:'20-07-2021',
        bitisTarihi:'26-07-2021',
        durum:'Beklemede',
        gorevType:'admin'
    },
    {
        gorevId:7,
        gorevAdi:'test6',
        kategori:'analiz',
        gorevAciklamasi:'test6',
        baslangicTarihi:'20-08-2021',
        bitisTarihi:'25-08-2021',
        durum:'Beklemede',
        gorevType:'personel'
    },
    {
        gorevId:8,
        gorevAdi:'test8',
        kategori:'Tasarım',
        gorevAciklamasi:'test8',
        baslangicTarihi:'20-09-2021',
        bitisTarihi:'26-09-2021',
        durum:'Beklemede',
        gorevType:'personel'
    },
];
let DevamedenGorevler=[
   
  
    {
        gorevId:9,
        gorevAdi:'test',
        kategori:'Tasarım',
        gorevAciklamasi:'testt',
        baslangicTarihi:'12-10-2021',
        bitisTarihi:'20-10-2021',
        durum:'Devam Ediyor',
        gorevType:'admin'
    },
  
    {
        gorevId:10,
        gorevAdi:'test3',
        kategori:'Tasarım',
        gorevAciklamasi:'testt3',
        baslangicTarihi:'05-11-2021',
        bitisTarihi:'07-11-2021',
        durum:'Devam Ediyor',
        gorevType:'admin'
    },
   
 
    {
        gorevId:11,
        gorevAdi:'test7',
        kategori:'Kodlama',
        gorevAciklamasi:'test7',
        baslangicTarihi:'10-12-2021',
        bitisTarihi:'20-12-2021',
        durum:'Devam Ediyor',
        gorevType:'personel'
    },
  
    {
        gorevId:12,
        gorevAdi:'test9',
        kategori:'Test',
        gorevAciklamasi:'test9',
        baslangicTarihi:'20-12-2021',
        bitisTarihi:'26-12-2021',
        durum:'Devam Ediyor',
        gorevType:'personel'
    },
 
];

module.exports.indexpost=function(req,res){
  
    if(req.body. baslangicTarihi<req.body.bitisTarihi){
        TamamlananGorevler.push({
            gorevId:req.body.gorevId,
            gorevAdi:req.body.gorevAdi,
            kategori:req.body.kategori,
            gorevAciklamasi:req.body.gorevAciklamasi,
            baslangicTarihi:req.body. baslangicTarihi,
            bitisTarihi:req.body.bitisTarihi,
            durum:req.body.durum,
            gorevType:type_g
        });
        BeklemedeGorevler.push({
            gorevId:req.body.gorevId,
            gorevAdi:req.body.gorevAdi,
            kategori:req.body.kategori,
            gorevAciklamasi:req.body.gorevAciklamasi,
            baslangicTarihi:req.body. baslangicTarihi,
            bitisTarihi:req.body.bitisTarihi,
            durum:req.body.durum,
            gorevType:type_g
        });
        DevamedenGorevler.push({
            gorevId:req.body.gorevId,
            gorevAdi:req.body.gorevAdi,
            kategori:req.body.kategori,
            gorevAciklamasi:req.body.gorevAciklamasi,
            baslangicTarihi:req.body. baslangicTarihi,
            bitisTarihi:req.body.bitisTarihi,
            durum:req.body.durum,
            gorevType:type_g
        });
        res.redirect('/gorevler');

     
    }
   
}
module.exports.routes=router;
module.exports.TamamlananGorevler = TamamlananGorevler;
module.exports.BeklemedeGorevler = BeklemedeGorevler;
module.exports.DevamedenGorevler = DevamedenGorevler;

