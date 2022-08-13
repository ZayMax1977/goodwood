


module.exports = {
    filter: function (mongoClient,collection,title, filtercategory,subfilter,typetransaction,filtertown,filterart,state) {
        
        mongoClient.connect(function (err, client) {
        
            if (err) {
                return console.log(err);

            }
            else if(filterart !==  ''){
                console.log('111' + filterart);
                collection.find({ art:filterart.trim()}).toArray(function (err, got_advs) {
                    console.log( '2' + got_advs)
                    got_advs.forEach(function (item, i, arr) {
                        if (item.content.length > 200) {
                            item.content = item.content.slice(0, 200);
                        }
                        
                    });
                    res.render(createPath('advs'), { title, got_advs, state });
                    client.close();
                });
            }
            else if((filtercategory == 'Все')&&(filtertown == 'Все')){
                collection.find({ stat: state }).toArray(function (err, got_advs) {
                    got_advs.forEach(function (item, i, arr) {
                        if (item.content.length > 200) {
                            item.content = item.content.slice(0, 200);
                        }
                        
                    });

                res.render(createPath('advs'), { title, got_advs, state });
                });       
            }
            
            else if((filtercategory == 'Все')&&(filtertown !== 'Все')){
                collection.find({ stat: state, town:filtertown }).toArray(function (err, got_advs) {
                    got_advs.forEach(function (item, i, arr) {
                        if (item.content.length > 200) {
                            item.content = item.content.slice(0, 200);
                        }
                        
                    });

                res.render(createPath('advs'), { title, got_advs, state });
                });       
            }
            
            else if((typetransaction == 'Все сделки')&&(filtertown == 'Все')){
                collection.find({ stat: state, category: filtercategory,subcategory: subfilter }).toArray(function (err, got_advs) {
                    got_advs.forEach(function (item, i, arr) {
                        if (item.content.length > 200) {
                            item.content = item.content.slice(0, 200);
                        }
                        
                    });
                res.render(createPath('advs'), { title, got_advs, state });
                });
            }else if((typetransaction == 'Все сделки')&&(filtertown !== 'Все')){
                collection.find({ stat: state, category: filtercategory,subcategory: subfilter,town:filtertown }).toArray(function (err, got_advs) {
                    got_advs.forEach(function (item, i, arr) {
                        if (item.content.length > 200) {
                            item.content = item.content.slice(0, 200);
                        }
                        
                    });
                res.render(createPath('advs'), { title, got_advs, state });
                });
            }
            else if((typetransaction == 'Ищу работу')&&(subfilter == undefined)&&(filtertown == 'Все')){
                collection.find({ stat: state, category: filtercategory,typeoftransaction: typetransaction }).toArray(function (err, got_advs) {
                    got_advs.forEach(function (item, i, arr) {
                        if (item.content.length > 200) {
                            item.content = item.content.slice(0, 200);
                        }
                        
                    });
                res.render(createPath('advs'), { title, got_advs, state });
                });
            }
            else if((typetransaction == 'Ищу работу')&&(subfilter == undefined)&&(filtertown !== 'Все')){
                collection.find({ stat: state, category: filtercategory,typeoftransaction: typetransaction, town:filtertown}).toArray(function (err, got_advs) {
                    got_advs.forEach(function (item, i, arr) {
                        if (item.content.length > 200) {
                            item.content = item.content.slice(0, 200);
                        }
                        
                    });
                res.render(createPath('advs'), { title, got_advs, state });
                });
            }else if((filtercategory !== 'Все')&&(typetransaction !== "Все сделки")&&(filtertown == 'Все')){
                collection.find({ stat: state, category: filtercategory,typeoftransaction: typetransaction}).toArray(function (err, got_advs) {
                    got_advs.forEach(function (item, i, arr) {
                        if (item.content.length > 200) {
                            item.content = item.content.slice(0, 200);
                        }
                        
                    });
                res.render(createPath('advs'), { title, got_advs, state });
                });
            }
            
            else {
                collection.find({ stat: state, category: filtercategory,subcategory: subfilter,typeoftransaction:typetransaction,town:filtertown
                }).toArray(function (err, got_advs) {
                    got_advs.forEach(function (item, i, arr) {
                        if (item.content.length > 200) {
                            item.content = item.content.slice(0, 200);
                        }
                        
                    });

                res.render(createPath('advs'), { title, got_advs, state });
                });
            }

        })
        }
        }

   