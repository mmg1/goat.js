exports.homepage = function(req, res){
	res.render("homepage.ejs", { myVar: req.session })
}