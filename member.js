function skillsMember( member ) {
    var skills = [];
    if ( member.skills ) {
        member.skills.forEach( function( skill ) {
            skills.push( skill.name );
        });
    }
    return skills;
}