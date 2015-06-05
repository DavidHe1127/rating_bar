/**
 * @param {boolean} _args.ratable - if false not allow for rating. false by default
 * @param {integer} _args.rate - 0~5
 *
 * @param {integer} _args.size - size of the star - width and height are equal
 *
 * @param {integer} _args.left
 * @param {integer} _args.right
 * @param {integer} _args.top
 * @param {integer} _args.bottom
 *
 */
var _args = arguments[0] || {};

var size = _.isNumber(Number(_args.size)) ? Number(_args.size) : 20;

var starStyle = {
	"width" : size,
	"left" : 5,
	"height" : size,
	"image" : WPATH(_args.ratable ? "imgs/empty_star.png" : "imgs/full_star.png")
};

$.rating_bar.applyProperties(_.pick(_args, ["left", "right", "top", "bottom"]));

var totalRate = _args.ratable ? 5 : Number(_args.rate);
var i = 0;
var rating = 0;

while (i < totalRate) {
	starStyle.index = i;
	var star = $.UI.create("ImageView", starStyle);
	_args.ratable && star.addEventListener( OS_IOS ? "click" : "singletap", onStarClick);
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
