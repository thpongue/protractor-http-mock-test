'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        jasmine_node: {
            options: {
                forceExit: true,
                specNameMatcher: '.specs',
            },
            all: ['specs/']
        },
        connect: {
            integration: {
                options: {
                    base: 'integration'   
                }
            }
        },
        protractor: {
            options: {
                configFile: 'integration/protractor.conf',
                //debug: true
            },
            integration: {}
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jasmine-node');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-protractor-runner');

    grunt.registerTask('integration', ['connect:integration', 'protractor:integration']);
    grunt.registerTask('test', ['jasmine_node']);
};
