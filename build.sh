kill -9 $(sudo lsof -t -i:5000)

rm -R build 

yarn build 

serve -s build 
