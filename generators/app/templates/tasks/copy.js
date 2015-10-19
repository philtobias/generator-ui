module.exports = {
  js: {
    expand: true,
    cwd: "src",
    src: ["**/*.js"],
    dest: "./<%= pkg.config.buildDir %>"
  }
}