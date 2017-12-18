const path = require('path');
const fse = require('fs-extra');

console.log('FBS Deployment: Deploying resources for FBS prod config')

Promise.resolve()
  .then(copy_dist_under_public)
  .then(copy_ssr_files_under_functions)
  //.then(console.log('FBS Deployment: Finished successfully. Firebase deploy will be started'))
  .catch(function(errorStack) {
    console.log('FBS Deployment: Error in FBS resource deployment')
    console.log(errorStack);
    process.exit(1);
  });

function copy_dist_under_public() {
  return new Promise(function (resolve, reject) {
    fse.remove('public/dist').then(function(){
      fse.ensureDir('public/dist').then(function(){
        fse.copy('dist', 'public/dist').then(function(){
          console.log("FBS Deployment: dist directory have been copied under public/dist");
          resolve();
        }).catch(function(errorStack) { resolve(errorStack); });
      }).catch(function(errorStack) { resolve(errorStack); });
    }).catch(function(errorStack) { resolve(errorStack); });
  });  
}

function copy_ssr_files_under_functions() {
  return new Promise(function (resolve, reject) {
    fse.remove('functions/ssr').then(function(){
      fse.ensureDir('functions/ssr').then(function(){
        fse.copy('dist/vue-ssr-server-bundle.json', 'functions/ssr/vue-ssr-server-bundle.json').then(function(){
          fse.copy('dist/vue-ssr-client-manifest.json', 'functions/ssr/vue-ssr-client-manifest.json').then(function(){  
            fse.copy('src/index.template.html', 'functions/ssr/index.template.html').then(function(){
              console.log("FBS Deployment: SSR files (server, client, template) have been copied under functions/ssr");
              resolve();
            }).catch(function(errorStack) { resolve(errorStack); });
          }).catch(function(errorStack) { resolve(errorStack); });
        }).catch(function(errorStack) { resolve(errorStack); });
      }).catch(function(errorStack) { resolve(errorStack); });
    }).catch(function(errorStack) { resolve(errorStack); });
  });
}