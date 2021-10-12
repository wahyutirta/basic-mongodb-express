const { MongoClient } = require("mongodb");
const ObjectID = require('mongodb').ObjectID;

// via local host
const uri = "mongodb://127.0.0.1:27017";

const dbName = "learnings";

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

client.connect((error, client) => {
    if (error) {
        return console.log("Koneksi Gagal");
    }

    const db = client.db(dbName);

    // 1 data
    // db.collection('mahasiswa').insertOne({
    //     nama: "gusde",
    //     email: "gusde.admin@email.com"
    // }, (error, result) => {
    //     if (error) {
    //         return console.log("gagal menambahkan data!");
    //     }
    //     console.log(result);

    // });

    // Menambahkan lebih dari 1 data

    // db.collection("mahasiswa").insertMany(
    //     [
    //         {
    //             nama: "erik",
    //             email: "erik.admin@email.com"
    //         },
    //         {
    //             nama: "winda",
    //             email: "winda.admin@email.com"
    //         },
    //     ],
    //     (error, result) => {
    //         if(error){
    //             return console.log("data gagal ditambahkan");
    //         }
    //         console.log("data berhasil ditambahkan");
    //         console.log(result);
    //     }
    // )

    //menampilkan data
    // condition {nama : 'erik'} copy objek kedalam find
    // jika berdasarkan objek id {_id: ObjectID('613f598ac4c10846f0cc1e77')}
    // db.collection("mahasiswa")
    //     .find({ _id: ObjectID('613f598ac4c10846f0cc1e77') })
    //     .toArray((error, result) => {
    //         console.log(result);
    //     });

    //mengedit  1 data (updateOne updateMany)
    // const updatePromise = db.collection('mahasiswa').updateOne({
    //     _id: ObjectID('613f598ac4c10846f0cc1e77')
    // },
    //     {
    //         $set: {
    //             nama: 'alif',
    //             email: "alif.admin@yahoo.com",

    //         },
    //     });

    // updatePromise.then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // });

    db.collection('mahasiswa').deleteOne({
        _id: ObjectID('613f598ac4c10846f0cc1e77')
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    });
});
