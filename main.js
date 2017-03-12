// import modules
require('prototype.spawn')();
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairer = require('role.repairer');
var roleWallRepairer = require('role.wallRepairer');
var roleMiner = require('role.miner');
var roleTransport = require('role.transport');
var roleDefender = require('role.defender');

module.exports.loop = function () {
    // check for memory entries of died creeps by iterating over Memory.creeps
    for (let name in Memory.creeps) {
        // and checking if the creep is still alive
        if (Game.creeps[name] == undefined) {
            // if not, delete the memory entry
            delete Memory.creeps[name];
        }
    }

    // for every creep name in Game.creeps
    for (let name in Game.creeps) {
        // get the creep object
        var creep = Game.creeps[name];

    
        // if creep is upgrader, call upgrader script
        if (creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        // if creep is builder, call builder script
        else if (creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        // if creep is repairer, call repairer script
        else if (creep.memory.role == 'repairer') {
            roleRepairer.run(creep);
        }
        //if creep is miner, call repairer script
        else if (creep.memory.role == 'miner') {
            roleMiner.run(creep);
        }
        // if creep is wallRepairer, call wallRepairer script
        else if (creep.memory.role == 'wallRepairer') {
            roleWallRepairer.run(creep);
        }
        else if (creep.memory.role == 'transport') {
            roleTransport.run(creep);
        }
        else if (creep.memory.role == 'defender') {
            roleDefender.run(creep);
        }
    }
    
/*    //WHEN LINK IS BUILT
    var linkFrom = Game.spawns.Home.room.lookForAt('structure', 5, 3)[0];
    var linkTo = Game.spawns.Home.pos.findInRange(FIND_MY_STRUCTURES, 2, 
        {filter: {structureType: STRUCTURE_LINK}})[0];
        linkFrom.transferEnergy(linkTo);
 */

    // setup some minimum numbers for different roles
    var minimumNumberOfUpgraders = 2;       //Good
    var minimumNumberOfBuilders = 3;        //Good
    var minimumNumberOfRepairers = 2;       //Good
    var minimumNumberOfWallRepairers = 1;
    var minimumNumberOfMiner = 3;           //Good
    var minimumNumberOfTransport = 3;       //Good
    var minimumNumberOfDefender = 1;        //NEED TO WORK ON

    // count the number of creeps alive for each role
    // _.sum will count the number of properties in Game.creeps filtered by the
    //  arrow function, which checks for the creep being a harvester
    var numberOfUpgraders = _.sum(Game.creeps, (c) => c.memory.role == 'upgrader');
    var numberOfBuilders = _.sum(Game.creeps, (c) => c.memory.role == 'builder');
    var numberOfRepairers = _.sum(Game.creeps, (c) => c.memory.role == 'repairer');
    var numberOfWallRepairers = _.sum(Game.creeps, (c) => c.memory.role == 'wallRepairer');
    var numberOfMiners = _.sum(Game.creeps, (c) => c.memory.role == 'miner');
    var numberOfTransport = _.sum(Game.creeps, (c) => c.memory.role == 'transport');
    var numberOfDefender = _.sum(Game.creeps, (c) => c.memory.role == 'defender');

    var energy = Game.spawns.Home.room.energyCapacityAvailable;
    var name = undefined;
    
    
    // if not enough MINERS
    if (numberOfMiners < minimumNumberOfMiner) {
        // try to spawn miner
        name = Game.spawns.Home.createCustomCreepM(energy, 'miner');
        // if spawning failed and we have no miners left
        if (name == ERR_NOT_ENOUGH_ENERGY && numberOfMiners == 0) {
            //spawn one with what is available
            name = Game.spawns.Home.createCustomCreepM(
                Game.spawns.Home.room.energyAvailable, 'miner');
        }
    }
    // if not enough TRANSPORTS
    if (numberOfTransport < minimumNumberOfTransport) {
        // try to spawn one
        name = Game.spawns.Home.createCustomCreepT(energy, 'transport');
        // if spawning failed and we have no transports left
        if (name == ERR_NOT_ENOUGH_ENERGY && numberOfTransport == 0) {
            name = Game.spawns.Home.createCustomCreepT(
                Game.spawns.Home.room.energyAvailable, 'transport')
        }
    }
    // if not enough UPGRADERS
    if (numberOfUpgraders < minimumNumberOfUpgraders) {
        name = Game.spawns.Home.createCustomCreepU(energy, 'upgrader');
    }
    // if not enough BUILDERS
    if (numberOfBuilders < minimumNumberOfBuilders) {
        name = Game.spawns.Home.createCustomCreepU(energy, 'builder');
    }
    // if not enough REPAIRERS
    if (numberOfRepairers < minimumNumberOfRepairers) {
        name = Game.spawns.Home.createCustomCreepU(energy, 'repairer');
    } 
    
    /*
    if (numberOfDefender < minimumNumberOfDefender) {
        name = Game.spawn.Home.createCustomCreepZAP(energy, 'defender');
    }  */
};