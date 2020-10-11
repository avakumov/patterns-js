class Server {
  constructor(name, ip) {
    this.name = name
    this.ip = ip
  }

  getUrl() {
    return `http://${this.ip}:80`
  }
  getName() {
    return this.name
  }
}

const vds = new Server("RU-VDS-KAZAN", "45.11.26.23")
console.log(vds.getUrl())
console.log(vds.getName())
