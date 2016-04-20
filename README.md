=======
# Gulp bundle for frontend

## For development
### Install
```npm install```

### Start
```gulp```

## With flags
```gulp --del --open --live --prefix```
```--del``` - clean *public* folder, autostart in production
```--open``` - open site in browser
```--live``` - livereload turnOn
```--prefix``` - css prefixs for old browsers, autostart in production
```--html``` - optimize and minify html in *public*
```--critical``` - [critical css](https://github.com/addyosmani/critical) optimize
```--css``` - optimize, concat and minify css in *public*
```--js``` - optimize, concat and minify js in *public*
```--img``` - optimize images in *public*
```--build``` - without server and watch

```gulp minImgAssets``` - optimize images in *assets*
```gulp deploy``` - commit and push *public* to gh-pages

### For production: without sourcemaps in css and with clean *public* folder:
```NODE_ENV=production gulp```
### Advanced production:
```NODE_ENV=production gulp --html --js --img --critical --css```