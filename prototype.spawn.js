module.exports = function() {
    // create a new function for StructureSpawn
    StructureSpawn.prototype.createCustomCreepM =
        function(energy, roleName) {
            // create a balanced body as big as possible with the given energy
            var numberOfParts = Math.floor((energy-50) / 100);
            
            var body = [];
            for (let i = 0; i < numberOfParts; i++) { //cost 100 energy
                body.push(WORK);
            }
            for (let i = 0; i < 1; i++) { //cost 50
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
            var numberOfParts = Math.floor(energy / 200);
            if (numberOfParts >= 48) {
                numberOfParts = 48
            }
            var body = [];
            for (let i = 0; i < numberOfParts; i++) {
                body.push(WORK);
            }
            for (let i = 0; i < numberOfParts; i++) {
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
            for (let i = 0; i < numberOfParts; i++) { //80
                body.push(ATTACK);
            }
            for (let i = 0; i < numberOfParts; i++) { //10
                body.push(TOUGH);
            }
            for (let i = 0; i < numberOfParts; i++) { //100
                body.push(MOVE);
            }
            // create creep with the created body and the given role
            return this.createCreep(body, undefined, { role: roleName, working: true });
        };
    StructureSpawn.prototype.createLongDistanceHarvester =
        function (energy, numberOfWorkParts, home, target, sourceIndex) {
            // create a body with the specified number of WORK parts and one MOVE part per non-MOVE part
            var body = [];
            for (let i = 0; i < numberOfWorkParts; i++) {
                body.push(WORK);
            }

            // 150 = 100 (cost of WORK) + 50 (cost of MOVE)
            energy -= 150 * numberOfWorkParts;

            var numberOfParts = Math.floor(energy / 100);
            for (let i = 0; i < numberOfParts; i++) {
                body.push(CARRY);
            }
            for (let i = 0; i < numberOfParts + numberOfWorkParts; i++) {
                body.push(MOVE);
            }

            // create creep with the created body
            return this.createCreep(body, undefined, {
                role: 'longDistanceHarvester',
                home: home,
                target: target,
                sourceIndex: sourceIndex,
                working: false
            });
        };
};