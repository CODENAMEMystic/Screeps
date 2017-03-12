module.exports = {
    // a function to run the logic for this role
    run: function(creep) {
        // if creep is trying to complete a constructionSite but has no energy left
        if (creep.memory.working == true) {
            var target = creep.pos.getRangedTarget();
                if(target !== null)
                    creep.rangedAttack(target)
                else(
                    creep.heal(creep));
                    
            
        }
        
        
            
        }
};