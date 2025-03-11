/*
  idx-template \
  --output-dir /home/user/quickstart-js/dataconnect \
  -a '{}' \
  --workspace-name 'dataconnect' \
  /home/user/quickstart-js/template-test \
  --failure-report

*/

{pkgs, ... }: {
  packages = [];
  bootstrap = ''
    mkdir "$out" 
    mkdir "$out"/src
    mkdir "$out"/public
    mkdir "$out"/.idx
    mkdir "$out"/dataconnect
    mkdir "$out"/.vscode

    cp ${.idx/dev.nix} "$out"/.idx/dev.nix
    cp -a ${./src}/* "$out"/src/
    cp -a ${./public} "$out"/public/
    cp ./* "$out"/
    cp -a ${./dataconnect}/* "$out"/dataconnect/

    cp ${./firebase.json} "$out"/firebase.json
    cp ${./README.md} "$out"/README.md
    cp ${./package.json} "$out"/package.json
    cp ${./angular.json} "$out"/angular.json
    cp ${./tsconfig.json} "$out"/tsconfig.json
    cp ${./.gitignore} "$out"/.gitignore
    cp ${./tsconfig.app.json} "$out"/tsconfig.app.json
    cp ${./firebase-js-config.json} "$out"/firebase-js-config.json
    chmod -R u+w "$out" 
    mv "$out"/src/proxy.conf.idx.json "$out"/src/proxy.conf.json
  '';
}