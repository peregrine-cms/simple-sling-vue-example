/**
 * helper script to combine dist folder and vault folder into a temp folder
 */

const fs = require('fs-extra');

if(fs.existsSync('temp')) {
    fs.removeSync('temp');
}
fs.mkdirsSync('temp');
fs.copySync('vault', 'temp');
fs.copySync('dist', 'temp/jcr_root')