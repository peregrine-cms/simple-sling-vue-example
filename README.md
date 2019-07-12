# simple-sling-vue-example

## what to expect

A simple sling and vuejs example allowing you to browse the repository tree of a running sling instance. 
The code is kept as minimal as possible.

The project can be accessed at `/content/vuecontentbrowser/` (if you run this on a default sling instance with `npm run sling`
then the location will be [http://localhost:8080/content/vuecontentbrowser/](http://localhost:8080/content/vuecontentbrowser/))

The project is tested against sling9 and sling11.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development

If you have a running sling instance on port 8080 and don't want to deploy this code to sling itself you can
use `npm run serve`. Any request not handled by this application is proxied to `localhost:8080` baed on the
configuration in the [vue.config.js](vue.config.js) file. 

```
npm run serve
```

### Compiles and minifies for production

To compile this code into the `dist` folder just run the following command

```
npm run build
```

### Deploy to a running sling instance

To deploy this project to a running sling instance on localhost:8080 with default username/password:

```
npm run sling
```

