/**
 * @param {boolean} _args.ratable - if false not allow for rating. false by default
 * @param {integer} _args.rate - 0~5
 * @param {object} _args.position - top/right/bottom/left
 * @param {object} _args.size - width/height
 */
var _args = arguments[0] || {};
var position = {};
var size = {
	"width" : 20,
	"height" : 20
};

$.addClass($.rating_bar, "rating_bar", position);

var starStyle = {
	"width" : size.width,
	"height" : size.height,
	"left" : 5,
	"image" : WPATH(_args.ratable ? "imgs/empty_star.png" : "imgs/full_star.png")
};

var totalRate = _args.ratable ? 5 : Number(_args.rate);
var i = 0;
var rating = 0;

while (i < totalRate) {
	starStyle.index = i;
	var star = $.UI.create("ImageView", starStyle);
	_args.ratable && star.addEventListener("click", onStarClick);
	$.rating_bar.add(star);
	i++;
}

function onStarClick(e) {
	rating = e.source.index;
	$.rating_bar.children.forEach(function(star, index) {
		if (index <= rating) {
			star.image = WPATH("imgs/full_star.png");
		} else {
			star.image = WPATH("imgs/empty_star.png");
		}
	});
}

/**
 * public methods
 */
exports.getRate = function() {
	return rating + 1;
};
