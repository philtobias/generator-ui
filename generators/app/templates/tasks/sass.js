module.exports = function(grunt) {
  return {
    main: {
      files: {
        "./<%= pkg.config.buildDir %>/src/css/main.css": "./src/sass/main.scss"
      },
      options: {
        style: 'compressed'
      }
    }
  };
};
