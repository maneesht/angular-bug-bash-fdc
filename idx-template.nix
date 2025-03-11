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
    mkdir "$out"/.idx
    mkdir "$out"/dataconnect
    mkdir "$out"/.vscode

    cp ${.idx/dev.nix} "$out"/.idx/dev.nix
    cp -a ./* "$out"/
    cp -a ${./dataconnect}/* "$out"/dataconnect/

    cp ${./firebase.json} "$out"/firebase.json
    cp ${./README.md} "$out"/README.md
    cp ${./.gitignore} "$out"/.gitignore
    chmod -R u+w "$out" 
    # mv "$out"/src/proxy.conf.idx.json "$out"/src/proxy.conf.json
  '';
}