module.exports = {

	event: function(category, action, label, value){

		window.ga('send', 'event', category, action, label, value);

	}

};
