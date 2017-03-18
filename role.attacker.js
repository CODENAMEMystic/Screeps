module.exports = {
    // a function to run the logic for this role
    run: function(creep) {
        // if in target room
        
        if (creep.room.name != creep.memory.target) {
            // find exit to target room
            var exit = creep.room.findExitTo(creep.memory.target);
            // move to exit
            creep.moveTo(creep.pos.findClosestByRange(exit));
        }
        else {
            var enemy = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS);
            // if one is found
            if (enemy != undefined) {
                // try to kill, if the enemy is not in range
                creep.say('WARNING!')
                if (creep.attack(enemy) == ERR_NOT_IN_RANGE) {
                    // move towards the enemy
                    creep.moveTo(enemy);
                }
            }
            var structure = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                // the second argument for findClosestByPath is an object which takes
                // a property called filter which can be a function
                // we use the arrow operator to define it
                filter: (s) => (s.structureType == STRUCTURE_SPAWN
                             || s.structureType == STRUCTURE_EXTENSION
                             || s.structureType == STRUCTURE_TOWER)
                             && s.energy < s.energyCapacity
            });
            if (structure != undefined) {
                // try to transfer energy, if it is not in range
                if (creep.attack(structure) == ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.moveTo(structure);
                }
            } 
            
            
            /*
            // try to claim controller
            if (creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                // move towards the controller
                creep.moveTo(creep.room.controller);
            } */
        }
    }
};