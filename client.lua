RegisterCommand('openapp', function()
    SetNuiFocus(true, true)
    SendNUIMessage({
        action = "openApp",
        data = {
            msg = "Hello from Lua backend!",
            someValue = 42
        }
    })
end, false)

RegisterNUICallback('closeApp', function(data, cb)
    print('[NUI] App closed, received:', json.encode(data))

    SetNuiFocus(false, false)

    cb({ status = "ok" })
end)
