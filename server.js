const express = require('express');
const app = express();
var multer = require('multer')
const morgan = require('morgan');
//удалить эти модули
var qs = require('simple-query-string');
var adress = require("url");


app.set('view engine', 'ejs');

const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url);


const PORT = process.env.PORT||80;
// const PORT = 3000;
const path = require('path');
const { randomBytes } = require('crypto');
const { GridFSBucketWriteStream, ConnectionClosedEvent } = require('mongodb');
const { userInfo } = require('os');
const createPath = (page) => path.resolve(__dirname, 'ejs-views', `${page}.ejs`);

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
var upload = multer({ storage: storage })

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`listenning port ${PORT}, ${__dirname}`);
});

app.use('/', express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.use('/uploads', express.static('uploads'));

app.get('/', (req, res) => {
    const title = 'Главная';
    res.render(createPath('index'), { title });
});

app.get('/advs/:state', (req, res) => {
    // const limit = parseInt(req.query.limit)
    // const offset = parseInt(req.query.skip)

    const title = "Все объявления";
    const state = req.params['state'];
    const { filtercategory, typetransaction, subfilter,filtertown,filterart } = req.query;
    let filter = { filtercategory, typetransaction, subfilter, filtertown,filterart}
    const db = mongoClient.db("gw");
    const collection = db.collection("advs");
    
    let town = filter.filtertown;

    mongoClient.connect(function (err, client) {
        
        if (err) {
            return console.log(err);

        }
        else if(filter.filterart !==  ''){
            collection.find({ art: filter.filterart.trim()}).toArray(function (err, got_advs) {
                got_advs.forEach(function (item, i, arr) {
                    if (item.content.length > 200) {
                        item.content = item.content.slice(0, 200);
                    }
                    
                });
         
            res.render(createPath('advs'), { title, got_advs, state,town  });
            client.close();
            });
        }
        else if((filter.filtercategory == 'Все')&&(filter.filtertown == 'Все города')){
            collection.find({ stat: state }).sort({date:-1}).toArray(function (err, got_advs) {
                got_advs.forEach(function (item, i, arr) {
                    if (item.content.length > 200) {
                        item.content = item.content.slice(0, 200);
                    }
                    
                });
            res.render(createPath('advs'), { title, got_advs, state, town });
            client.close();
            });       
        }
        
        else if((filter.filtercategory == 'Все')&&(filter.filtertown !== 'Все города')){
            collection.find({ stat: state, town: filter.filtertown }).sort({date:-1}).toArray(function (err, got_advs) {
                got_advs.forEach(function (item, i, arr) {
                    if (item.content.length > 200) {
                        item.content = item.content.slice(0, 200);
                    }
                    
                });

            res.render(createPath('advs'), { title, got_advs, state,town });
            client.close();
            });       
        }
        
        else if((filter.typetransaction == 'Все сделки')&&(filter.filtertown == 'Все города')){
            collection.find({ stat: state, category: filter.filtercategory,subcategory: filter.subfilter }).sort({date:-1}).toArray(function (err, got_advs) {
                got_advs.forEach(function (item, i, arr) {
                    if (item.content.length > 200) {
                        item.content = item.content.slice(0, 200);
                    }
                    
                });
            res.render(createPath('advs'), { title, got_advs, state,town });
            client.close();
            });
        }else if((filter.typetransaction == 'Все сделки')&&(filter.filtertown !== 'Все города')){
            collection.find({ stat: state, category: filter.filtercategory,subcategory: filter.subfilter,town:filter.filtertown }).sort({date:-1}).toArray(function (err, got_advs) {
                got_advs.forEach(function (item, i, arr) {
                    if (item.content.length > 200) {
                        item.content = item.content.slice(0, 200);
                    }
                    
                });
    
            res.render(createPath('advs'), { title, got_advs, state,town });
            client.close();
            });
        }
        else if((filter.typetransaction == 'Ищу работу')&&(filter.subfilter == undefined)&&(filter.filtertown == 'Все города')){
            collection.find({ stat: state, category: filter.filtercategory,typeoftransaction: filter.typetransaction }).sort({date:-1}).toArray(function (err, got_advs) {
                got_advs.forEach(function (item, i, arr) {
                    if (item.content.length > 200) {
                        item.content = item.content.slice(0, 200);
                    }
                    
                });
            res.render(createPath('advs'), { title, got_advs, state,town });
            client.close();
            });
        }
        else if((filter.typetransaction == 'Ищу работу')&&(filter.subfilter == undefined)&&(filter.filtertown !== 'Все города')){
            collection.find({ stat: state, category: filter.filtercategory,typeoftransaction: filter.typetransaction, town:filter.filtertown}).sort({date:-1}).toArray(function (err, got_advs) {
                got_advs.forEach(function (item, i, arr) {
                    if (item.content.length > 200) {
                        item.content = item.content.slice(0, 200);
                    }
                    
                });
            res.render(createPath('advs'), { title, got_advs, state,town });
            client.close();
            });
        }else if((filter.filtercategory !== 'Все')&&(filter.typetransaction !== "Все сделки")&&(filter.filtertown == 'Все города')){
            collection.find({ stat: state, category: filter.filtercategory,typeoftransaction: filter.typetransaction}).sort({date:-1}).toArray(function (err, got_advs) {
                got_advs.forEach(function (item, i, arr) {
                    if (item.content.length > 200) {
                        item.content = item.content.slice(0, 200);
                    }
                    
                });
            res.render(createPath('advs'), { title, got_advs, state,town });
            client.close();
            });
        }
        
        else {
            collection.find({ stat: state, category: filter.filtercategory,subcategory: filter.subfilter,typeoftransaction:filter.typetransaction,town:filter.filtertown
            }).sort({date:-1}).toArray(function (err, got_advs) {
                got_advs.forEach(function (item, i, arr) {
                    if (item.content.length > 200) {
                        item.content = item.content.slice(0, 200);
                    }
                    
                });

            res.render(createPath('advs'), { title, got_advs, state,town });
            client.close();
            });
        }
    })
});


app.post('/advs', (req, res) => {
        const title = "Все объявления";
        const town = 'Все города';
        const error = ' этому региону объявлений не найдено. ';
        const { subject } = req.body;
        const state = {
            subject,
        }
        const db = mongoClient.db("gw");
        const collection = db.collection("advs");

        mongoClient.connect(function (err, client) {
            if (err) return console.log(err);
            collection.find({ stat: state.subject }).sort({date:-1}).toArray(function (err, got_advs) {
                got_advs.forEach(function (item, i, arr) {
                    if (item.content.length > 200) {
                        item.content = item.content.slice(0, 200);
                    }
                });
                res.render(createPath('advs'), { title, got_advs, state: state.subject, town });
                console.log(state);
                client.close();
            });
        });

})

app.get('/adv/:art', (req, res) => {
        const title = 'Объявление Арт:';
        const art = req.params['art'];
        run();

        async function run() {
            try {
                await mongoClient.connect();
                const db = mongoClient.db("gw");
                const collection = db.collection("advs");
                const got_advs = await collection.findOne({ art: art });
                res.render(createPath('adv'), { title, got_advs });

            } catch (err) {
                console.log(err);
            } finally {
                await mongoClient.close();
            }
        }
    });

app.post('/add-adv', upload.array('file', 13), (req, res, next) => {
        const title = 'Данные занесены';
        const { category, subcategory, typeoftransaction, content, stat, town, name, phone, price, file,
            mark_rooms, model_squere, year_floor, autobody_balcony, color_street, running_numberfloors, title_adv } = req.body;
        const post = {

            category, subcategory, stat, town, name, phone, file, price, file, typeoftransaction,
            content, mark_rooms, model_squere, year_floor, autobody_balcony,
            color_street, running_numberfloors, title_adv,
            art: new Date().getTime(),
            date: (new Date()).toLocaleDateString(),
        };

        // создаем артикул
        d = post.art.toString();

        d = d.slice(5, 13);
        // post.art = parseInt(d);
        post.art = d;

        // пути файлов фото
        arr_photos = []
        for (var i = 0; i < req.files.length; i++) {
            arr_photos.push(req.files[i].path);
        }
        post.file = arr_photos;
        mongoClient.connect(function (err, client) {

            const db = client.db("gw");
            const collection = db.collection("advs");
            console.log("Подключение к базе данных");
            collection.insertOne(post);
            //         collection
            //             .insertOne(post)
            //             .then(result => {
            //             console.log(collection.findOne({_id:result}));
            //             console.log(result.insertedId);
            //   })

        });
        res.render(createPath('ok'), { title });
    });
app.get('/add-adv', (req, res) => {
        const title = 'Добавить объявление';

        res.render(createPath('add-adv'), { title });
    });


app.get('/contacts', (req, res) => {
        const title = 'Контакты';
        const contacts = [
            { name: 'YouTube', link: 'http://youtube.com/' },
            { name: 'ВКонтакте', link: 'http://vk.com/' },
            { name: 'Одноклассники', link: 'http://ok.ru/' },
            { name: 'Instagram', link: 'http://instagram.com/' },

        ];
        res.render(createPath('contacts'), { contacts, title });
    });

app.get('/about-us', (req, res) => {
        const title = 'О нас';
        res.render(createPath('about-us'), { title });
    });
app.get('/ok', (req, res) => {
        const title = 'Данные занесены';
        res.render(createPath('ok'), { title });
    });
app.get('/base-error', (req, res) => {
        const title = 'Данные отсутствуют';
        res.render(createPath('base-error'), { title });
    });
app.get('/posts/:id', (req, res) => {
        const title = 'Полезное';
        const items = {
            id: '1',
            title: 'Наследство, и передача прав собственности',
            category: 'Cемейные отношения',
            date: '05.06.2022',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit\
        Ea illum modi suscipit facere quae optio pariatur quidem. Repudiandae quis ratione\
         animi neque. Perferendis consectetur aut eveniet cum deserunt id a aliquid\
          necessitatibus doloremque soluta omnis consequuntur iure...',
            author: 'Sedova R.',
            source: 'https://www.spravka.com'
        };
        res.render(createPath('post'), { title, items });
    });

app.get('/posts', (req, res) => {
  
        const title = 'Полезное';
        const posts = [
            {
                id: '1',
                title: 'Наследство, и передача прав собственности',
                category: 'Cемейные отношения',
                date: '05.06.2022',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit\
            Ea illum modi suscipit facere quae optio pariatur quidem. Repudiandae quis ratione\
             animi neque. Perferendis consectetur aut eveniet cum deserunt id a aliquid\
              necessitatibus doloremque soluta omnis consequuntur iure...',
                author: 'Sedova R.',
                source: 'https://www.spravka.com'
            },
            {
                id: '2',
                title: '2 Наследство, и передача прав собственности',
                category: 'Cемейные отношения',
                date: '05.06.2022',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit\
            Ea illum modi suscipit facere quae optio pariatur quidem. Repudiandae quis ratione\
             animi neque. Perferendis consectetur aut eveniet cum deserunt id a aliquid\
              necessitatibus doloremque soluta omnis consequuntur iure...',
                author: 'Sedova R.',
                source: 'https://www.spravka.com'
            },
        ];
        const post1= [
            {id:1,name:'user 1'},
            {id:2,name:'user 2'},
            {id:3,name:'user 3'}, 
            {id:4,name:'user 4'},
            {id:5,name:'user 5'},
            {id:6,name:'user 6'},
            {id:7,name:'user 7'},
            {id:8,name:'user 8'},
            {id:9,name:'user 9'},
            {id:10,name:'user 10'},

        ]
        const page = req.query.page
        const limit = req.query.limit
        const startIndex = (page - 1) * limit;
        const results = {}
        const endIndex = page * limit;
        results.results = post1.slice(startIndex, endIndex);
        // res.render(createPath('posts'), { title, posts });
        res.json(results)
    });

app.use((req, res) => {
        const title = 'Страница отсутствует';
        res
            .status(404)
            .render(createPath('error'), { title });
    });
