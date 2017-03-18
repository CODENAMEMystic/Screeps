

# Stable Update: v0.3.0
### Goals:
- Proper defensive creeps for different types (ranged + melee)
- Create offensive creeps
- Have transport creeps transfer TO containers when possible
- Have other creeps transfer energy FROM containers when possible
- Clean up code to make it more memory + CPU efficient
- Create ant like creeps that work together
- Minimize repetitive code


## Version: 0.3.2 [3/17/17]
### Changes:
- Adjusted everything for self managing again

## Version v0.3.1 [3/17/17]
### Changes:
- Fixed Main.js for prototype spawning


## Version v0.3.0
### Changes:
- Added Long Distance Harvester!
- Added Tower code!
- Stable prototype spawner
- More efficient transport creeps
- Adjusted all code for stable self managing creeps






# Stable Update: v0.2.0+
## Version: 0.2.3 [3/15/17]

### Changes:
- Disabled prototype spawning for select roles
- Adjusted prototype spawning for basic survival and advancement: MINER, TRANSPORT, UPGRADER, REPAIRIER
- Removed function that spawns MINERS, TRANSPORTS, and DEFENDERS if there are none left
- Added function to check if MINER or TRANSPORT is == 0 and spawns a RECOVERY creep
- Modified RECOVERY role spawning qualifications and a suicide function if MINERS and TRANSPORTS equal or exceeds 4

### Known Bugs:
- When creating a creep, if potential body parts from energy exceeds 50 then the creep will not spawn.

## Version: 0.2.0 [3/12/17]

### Goals:
- Proper defensive creeps for different types (ranged + melee)
- Create offensive creeps
- More efficient transport creeps

### Changes:
- Various adjustments
- Added Defender role!
- Removed Harvester role

## Version: 0.1.2 [3/11/17]

### Goals:
- Convert all harvesters into some extent of miner or transport
- Fix role balance
### Changes:
- Added Transport role!
- Added Miner role!
