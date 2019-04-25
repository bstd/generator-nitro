'use strict';

const config = require('config');
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
let browserSync;

function getBrowserSyncInstance() {
	const name = `Nitro${config.get('server.port')}`;
	if (!browserSync) {
		browserSync = require('browser-sync').create(name);
	}
	return browserSync;
}

function getTask(task) {
	return require(`../tasks/${task}`)(gulp, plugins);
}

function getProjectPath() {
	return config.get('nitro.basePath');
}

function getEmptyStream() {
	return gulp.src([]);
}

function each(cfgs, fn) {
	if (cfgs.length) {
		cfgs.forEach((cfg) => {
			fn(cfg);
		});
	} else {
		fn(cfgs);
	}
}

module.exports = {
	getBrowserSyncInstance,
	getTask,
	getProjectPath,
	getEmptyStream,
	each,
};
