'use strict'
const Docker = require('dockerode')

module.exports = (options) => {
  return new Promise((resolve, reject) => {
    const docker = new Docker(options)

    let routes = []

    const addRoute = (container) => {
      const { route, port } = container.Labels

      if (typeof route !== 'undefined') {
        console.log(route)
        routes.push({
          route,
          port
        })
      }
    }

    docker.listContainers({ all: true }, (err, containers) => {
      if (err) reject(err)

      containers.forEach(container => {
        addRoute(container)
      })

      resolve(routes)
    })
  })
}
