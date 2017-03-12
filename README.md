#Screeps
- All code found here can be used freely for any means. This all was developed by me for the game Screeps
- Screeps.com

##Current Goals 
- Proper defensive creeps for different types (ranged + melee)
- Create offensive creeps
- More efficient transport creeps
- Have transport creeps transfer TO containers when possible
- Have other creeps transfer energy FROM containers when possible
- Clean up code to make it more memory + CPU efficient
- Stable prototype spawner

###All [v0.2.0+] patch Changes:
- Removed function that spawns MINERS, TRANSPORTS, and DEFENDERS if there are none left
- Added function to check if MINER or TRANSPORT is == 0 and spawns a RECOVERY creep
- Modified RECOVERY role spawning qualifications and a suicide function if MINERS and TRANSPORTS equal or exceeds 4
- Disabled prototype spawning for select roles
- Adjusted prototype spawning for basic survival and advancement: MINER, TRANSPORT, UPGRADER, REPAIRIER

###Known Bugs:
- When creating a creep, if potential body parts from energy exceeds 50 then the creep will not spawn.
- Prototype spawning doesnt work properly, avoids given commands in regards to how to spawn creeps



##Stable Release Changes:
- Various adjustments
- Created Defender role!
- Removed Harvester role

##Version: 0.2.0
- main.js
- prototype.spawn.js
- role.builder.js
- role.miner.js
- role.repairer.js
- role.transport.js
- role.upgrader.js
- role.wallRepairer.js
