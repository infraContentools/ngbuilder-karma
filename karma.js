'use strict';

module.exports = (function() {
	function run(context, options, next) {
		var karma = require('karma').server;

		var karmaConfig = {
			configFile: __dirname + '/karma.conf.js',
			singleRun: true
		};

		// copy(karmaConfig, options);

		karma.start(karmaConfig, function(exitCode) {
			if (exitCode > 0) {
				return next(new Error('Unit testing failed'));
			}

			next();
		});
	}

	return {
		name: 'karma',
		run: run,
		watcher: ['src/**/*.js', 'views/**/*.js']
	};
})();