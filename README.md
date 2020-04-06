# cra-path-fixer

A small package made exactly for one function: correcting file paths in build/index.html after creating a production build using a create-react-app.

Install:
```
npm install --save cra-path-fixer
```


For use change: 
```
"scripts": {
    ...
    "build": "react-scripts build",
    ...
}
```
On the:
```
"scripts": {
    ...
    "build": "react-scripts build && node node_modules/cra-path-fixer/",
    ...
}
```
in the file package.json in your create-react-app project.

The next build will automatically fix the path.