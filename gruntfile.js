module.exports = function(grunt){

	grunt.initConfig({
	
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: 'contents/js/responsiveslides.js',
				dest: 'contents/js/responsiveslides.min.js'
			}
		},
		coffee: {
			compile: {
				files: {
					'/js/coffee.js': '/js/coffee.coffee'
				}
			}
		}
	
	});
	
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['uglify']);
	
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.registerTask('default', ['coffee']);

}