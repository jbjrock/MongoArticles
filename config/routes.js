module.exports = function(router) {
    //This route will render to the homepage
    app.get("/", function(req, res) {
        res.render("home");
    });
}

// This route renders the saved handlebars page
app.get("/saved", function(req, res) {
    res.render("saved");
})