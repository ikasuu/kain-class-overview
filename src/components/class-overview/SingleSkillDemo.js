import React from 'react'
import SkillInfo from './SkillInfo'

/*
    This file contains Link Skills and Notable Skills, any skills that need to be rendered on its own
*/

/*
    Renders a single skill, makes API call and renders a SkillInfo component
    Created by: Ikasuu, Fall 2020
*/

function SingleSkillDemo({skillData}) {

    return (
        <SkillInfo 
            skillData={skillData}
            name={skillData.name}
            desc={skillData.desc}
            shortDesc={skillData.shortDesc}
            properties={{}} 
            maxLevel={skillData.maxLevel}/>
    );
}

/*
    Component to hold link skill
    Created by: Ikasuu, Fall 2020
*/

export function LinkSkillDemo({linkSkill}) {
    return (
        <div>
            <h2>Link Skill</h2>
            <SingleSkillDemo skillData={linkSkill}/> 
        </div>
    );
}

export default LinkSkillDemo
