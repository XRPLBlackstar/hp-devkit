const process = require('process');

const appenv = {
    cluster: 'default',
    clusterSize: process.env.HP_CLUSTER_SIZE || 3,
    defaultNode: process.env.HP_DEFAULT_NODE || 1,
    devkitImage: process.env.HP_DEVKIT_IMAGE || 'evernode/hpdevkit',
    instanceImage: process.env.HP_INSTANCE_IMAGE || 'evernode/hotpocket:0.6.4-ubt.20.04-njs.20',
    hpUserPortBegin: process.env.HP_USER_PORT_BEGIN || 8081,
    hpPeerPortBegin: process.env.HP_PEER_PORT_BEGIN || 22861,
}

Object.freeze(appenv);

module.exports = appenv