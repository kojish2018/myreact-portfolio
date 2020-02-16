import React from 'react';
import './Skills.css'

function Skills(){
    let frontList=["HTML","CSS","Pug","Sass","Javascript"];
    let serverList=["Typescript","Google Apps Script", "Python", "Php"];
    let DatabaseList=["MongoDB","MySQL"];
    let infruList=["Google Cloud Platform","Amazon Web Services"];
    let otherList=["Git","JIRA","Slack","R","Stata"];
    let qualList=["TOEIC 950", "TOEFL iBT 100","Society of Actuary"]

    return(
        <div className='skills' id="skills">
            <h3>スキルセット</h3>
            <h2>Skills</h2>
            <div className='row'>
            <span>
            <div className="background-blue"></div>
            <h4>Front-end:</h4>
            <SkillSet skillList={frontList} />
            </span>
            <span>
            <div className="background-blue"></div>
                <h4>Server-side:</h4>
                <SkillSet skillList={serverList} />
            </span>
            <span>
            <div className="background-blue"></div>
                <h4>Database:</h4>
                <SkillSet skillList={DatabaseList} />
            </span>
            </div>
            <div className="row under">
            <span>
            <div className="background-blue"></div>
                <h4>Infrustructure:</h4>
                <SkillSet skillList={infruList} />
            </span>
            <span>
            <div className="background-blue"></div>
                <h4>Others:</h4>
                <SkillSet skillList={otherList} />
            </span>
            <span>
            <div className="background-blue"></div>
                <h4>Qualifications:</h4>
                <SkillSet skillList={qualList} />
            </span>

            </div>
            
        </div>

    );
}

function SkillSet(props){
    const skillList = props.skillList;
    return(
        skillList.map((value)=>{
            return <p key={value}>{value}</p>
        })
    )
}

export default Skills;