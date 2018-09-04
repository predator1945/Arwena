const minioSettings = {
    endPoint: 'localhost',
    port: 9000,
    useSSL: false,
    accessKey: 'AKIAIOSFODNN7EXAMPLE',
    secretKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY'
}

const serverSettings = {
    port: process.env.PORT || 3000,
}

const qSettings = {
    username: 'guest',
    password: 'guest',
    url: 'localhost',
    name: 'video'
}

module.exports = Object.assign({}, { minioSettings, serverSettings, qSettings });
