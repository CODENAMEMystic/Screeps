var roleUpgrader = require('role.upgrader');

module.exports = {
    // a function to run the logic for this role
    run: function(creep) {
        
        // if creep working
        if (creep.memory.working == true) {
            // find closest enemy
            var enemy = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS);
            // if one is found
            if (enemy != undefined) {
                // try to kill, if the enemy is not in range
                creep.say('WARNING! LEAVE IMMEDIATELY!')
                if (creep.attack(enemy) == ERR_NOT_IN_RANGE) {
                    // move towards the enemy
                    creep.moveTo(enemy);
                }
            }
            // if no enemy is found
            else {
                // go heal self
                roleUpgrader.run(creep);
            }
            }
        // TEMPORARY ELSE STATEMENT untill i properly manage it
        else {
            var energy = creep.pos.findInRange(
                FIND_DROPPED_ENERGY,
                50);
                
            if (energy.length) {
                //console.log('found ' + energy[0].energy + ' energy at ', energy[0].pos);
                //creep.say('Build!')
                creep.moveTo(energy[0]);
                creep.pickup(energy[0]);
                }
        }
    }
};