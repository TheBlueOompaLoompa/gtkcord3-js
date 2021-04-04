npm -g install ts-for-gir
cd node_modules/node-gtk
echo "Please select Gtk4 when generating types"
sleep 3
ts-for-gir generate '*' -e node