/* module.exports = {
     a function to run the logic for this role
    run: function(creep) {
        // if creep is trying to complete a constructionSite but has no energy left
        if (creep.memory.working == true) {
            var target = creep.pos.findInRange(
                FIND_HOSTILE_CREEPS
                50);
                if(target !== null);
                    creep.rangedAttack(target);
                else(
                    creep.heal(creep));
                    
            
            }
        
        
            
        } 
};
*/

var roleUpgrader = require('role.upgrader');

module.exports = {
    // a function to run the logic for this role
    run: function(creep) {
        
        /*
        // if creep is trying to complete a constructionSite but has no energy left
        if (creep.memory.working == true && creep.carry.energy == 0) {
            // switch state
            creep.memory.working = false;
        }
        // if creep is harvesting energy but is full
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            // switch state
            creep.memory.working = true;
        }
        */
        // if creep is supposed to complete a constructionSite
        if (creep.memory.working == true) {
            // find closest enemy
            var enemy = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS);
            // if one is found
            if (enemy != undefined) {
                // try to kill, if the enemy is not in range
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
        // if creep is supposed to harvest energy from source
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