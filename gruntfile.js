module.exports = function(grunt) {
	var _banner = '/** \n* Package: <%= pkg.name %> \n* Author: <%= pkg.author %> \n* Build Time: <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %>  \n*/\n';
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: _banner
			},
			build: {
				files: [{
					cwd: 'src/js',
					expand: true,
					src: ['*.js'],
					dest: 'dist/assets/js/',
					ext: '.min.js'
				}]
			}
		}, //close uglify
		csslint: {
			options: {
				"import": 2,
				"important": false,
				"ids": false,
				"adjoining-classes": false,
				"qualified-headings": false,
				"overqualified-elements": false,
				"unique-headings": false,
				"duplicate-background-images": false,
				"compatible-vendor-prefixes": false,
				"gradients": false
			}, // close .options
			build: {
				src: ['src/css/*.css']
			} // close .build
		}, // close csslint
		cssmin: {
			options: {
				banner: _banner,
			}, // close .options
			build: {
				files: [{
					cwd: 'src/css',
					expand: true,
					src: ['*.css'],
					dest: 'dist/assets/css/',
					ext: '.min.css'
				}]
			}, // close .build
		}, // close cssmin
		less: {
			options: {
				banner: _banner
			},
			build: {
				files: [{
					cwd: 'src/less',
					expand: true,
					src: ['*.less','!mr-mixins.less','!variables.less'],
					dest: 'src/css/',
					ext: '.css'
				}]
			}, // close .build
		}, // close less
		watch: {
			js: {
				files: 'src/js/*.js',
				tasks: ['uglify'],
				options: {
					interrupt: true,
				},
			},
			css: {
				files: 'src/less/*.less',
				tasks: ['less','cssmin'],
				options: {
					interrupt: true,
				},
			}
		}
	});

	// Load the plugin that provides the "uglify" task.

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	// Default task(s).
	grunt.registerTask('default', ['watch']);
	grunt.registerTask('devbuild', ['uglify','less','csslint','cssmin']);

	// grunt.event.on('watch', function(action, filepath, target) {
	// 	grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
	// });

};