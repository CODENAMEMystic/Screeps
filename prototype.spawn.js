module.exports = function() {
    // create a new function for StructureSpawn
    StructureSpawn.prototype.createCustomCreepM =
        function(energy, roleName) {
            // create a balanced body as big as possible with the given energy
            var numberOfParts = Math.floor(energy / 200);
            var body = [];
            for (let i = 0; i < numberOfParts; i++) {
                body.push(WORK);
            }
            for (let i = 0; i < numberOfParts; i+=2) {
                body.push(MOVE);
            }
            // create creep with the created body and the given role
            return this.createCreep(body, undefined, { role: roleName, working: false });
        };
    StructureSpawn.prototype.createCustomCreepT =
        function(energy, roleName) {
            // create a balanced body as big as possible with the given energy
            var numberOfParts = Math.floor(energy / 100);
            var body = [];
            for (let i = 0; i < numberOfParts; i++) {
                body.push(CARRY);
            }
            for (let i = 0; i < numberOfParts; i++) {
                body.push(MOVE);
            }
            // create creep with the created body and the given role
            return this.createCreep(body, undefined, { role: roleName, working: false });
        };
    StructureSpawn.prototype.createCustomCreepU =
        function(energy, roleName) {
            // create a balanced body as big as possible with the given energy
            var numberOfParts = Math.floor(energy / 250);
            var body = [];
            for (let i = 0; i < numberOfParts; i+=2) {
                body.push(WORK);
            }
            for (let i = 0; i < numberOfParts; i+=2) {
                body.push(CARRY);
            }
            for (let i = 0; i < numberOfParts; i++) {
                body.push(MOVE);
            }
            // create creep with the created body and the given role
            return this.createCreep(body, undefined, { role: roleName, working: false });
        };
            StructureSpawn.prototype.createCustomCreepD =
        function(energy, roleName) {
            // create a balanced body as big as possible with the given energy
            var numberOfParts = Math.floor(energy / 190);
            var body = [];
            for (let i = 0; i < numberOfParts; i+=2) { //80
                body.push(ATTACK);
            }
            for (let i = 0; i < numberOfParts; i+=2) { //10
                body.push(TOUGH);
            }
            for (let i = 0; i < numberOfParts; i++) { //100
                body.push(MOVE);
            }
            // create creep with the created body and the given role
            return this.createCreep(body, undefined, { role: roleName, working: true });
        };
};