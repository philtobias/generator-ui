module.exports = function(grunt) {
  return {
    templates: {
      expand: true,
      cwd: "src",
      src: ["**/*.jade"],
      ext: ".html",
      dest: "<%= pkg.config.buildDir %>",
      options: {
        doctype: "html",
        data: {
          liveReloadPort: "<%= pkg.liveReloadPort %>",
          version: "<%= pkg.version %>"
        }
      }
    }
  };
};
