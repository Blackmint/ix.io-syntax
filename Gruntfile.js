//___________________________________________________________________________________
//                                                                              grunt
module.exports = function(grunt) {
	grunt.initConfig({
		//___________________________________________________________________________
		//                                                                     config
		pkg: grunt.file.readJSON('package.json'),
		//___________________________________________________________________________
		//                                                                 javascript        
		uglify: {
			options: {
				mangle: false
			},
			libs: {
				src: [
					'ui/js/jquery.js',
					'ui/js/highlight.js',
					'ui/js/init.js'
				],
				dest: 'ui/js/libs.min.js'
			}
		},
		//___________________________________________________________________________
		//                                                                   sass/css		
		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'ui/css/ixio.min.css': 'ui/sass/highlight.scss'
				}
			}
		}
	});
	//_______________________________________________________________________________
	//                                                                          tasks
	grunt.registerTask('default', [
		'uglify',
        'sass'
    ]);
	//_______________________________________________________________________________
	//                                                                   load modules
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
};
//___________________________________________________________________________________
//                                                                                eof    