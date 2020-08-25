module.exports = function(RED) {
    function router_redis(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            msg.payload = "This is a front-end Proof of concept of router.network.";
            node.send(msg);
        });
    }
    RED.nodes.registerType("router-redis",router_redis);
}