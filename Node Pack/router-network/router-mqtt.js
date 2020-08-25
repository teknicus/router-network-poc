module.exports = function(RED) {
    function router_mqtt(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            msg.payload = "This is a front-end Proof of concept of router.network.";
            node.send(msg);
        });
    }
    RED.nodes.registerType("router-mqtt",router_mqtt);
}