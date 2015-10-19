module.exports = {
  options: {
    livereload: true,
    interrupt: false,
    spawn: false
  },
  js: {
    files: [
      './src/**/*.js'
    ],
    tasks: [
      'jshint',
      'jasmine:unit',
      'copy:js'
    ]
  },
  sass: {
    files: [
      './src/sass/**/*.scss'
    ],
    tasks: [
      'sass:main'
    ]
  },
  jade: {
    files: [
      './src/**/*.jade'
    ],
    tasks: [
      'jade:templates'
    ]
  },
  unit: {
    files: [
      './tests/unit/**/*.spec.js'
    ],
    tasks: [
      'jshint',
      'jasmine:unit'
    ]
  }
};