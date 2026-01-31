class NewsController{
    //GET NEWS
    index(req,res){
        res.render('news'); // render file news.handlebars
    }
}

module.exports = new NewsController();