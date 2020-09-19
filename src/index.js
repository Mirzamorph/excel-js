import './scss/index.scss'

async function start() {
    return await Promise.resolve('its working!')
}

start().then(console.log)