ssh -i ${HOME}/secret-key/workspaces.pem root@120.77.208.251 "rm -rf app"
COPYFILE_DISABLE=1 tar -zcvf dist.tar.gz app/dist/*
scp -i ${HOME}/secret-key/workspaces.pem dist.tar.gz root@120.77.208.251:/root/
ssh -i ${HOME}/secret-key/workspaces.pem root@120.77.208.251 "tar -zxvf dist.tar.gz"
ssh -i ${HOME}/secret-key/workspaces.pem root@120.77.208.251 "\cp -rf app/dist/* ./BCWalletSvc/server/views"
