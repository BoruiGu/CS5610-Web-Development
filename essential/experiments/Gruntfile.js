module.exports = function (grunt) {
    grunt.initConfig({
        autoprefixer: {
            dist: {
                files: {
                    'style.css': 'raw/style.css'
                }
            }
        },		
        watch: {
            styles: {
                files: ['./**/*.css'],
                tasks: ['autoprefixer'],
				options: {
                    spawn: false
                }
            }
        }		
    });
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
	
	// on watch events configure autoprefixer to run on changed file	
    grunt.event.on('watch', function(action, filepath) {
		// for example, 'angular/css/12.css' -> 'angular/css/prefixed/12.css'
		// note, setting format is dest file: src file
		last_idx = filepath.lastIndexOf("\\");
		dest = filepath.slice(0, last_idx) + '\\prefixed' + filepath.slice(last_idx)
		setting = {};
		setting[dest] = filepath;
        grunt.config('autoprefixer.dist.files', setting);
    });
};