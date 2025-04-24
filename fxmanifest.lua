fx_version 'cerulean'
game 'gta5'

ui_page 'nui/dist/index.html'

files {
  'nui/dist/index.html',
  'nui/dist/assets/*.*'
}

shared_scripts {
    '@ox_lib/init.lua',
}

client_scripts {
  'client.lua',
}

server_scripts {
  'server.lua',
}
