import React, { useState } from 'react';
import Project from '../Project';



function Portfolio() {

    const [projects] = useState([
        {
            name: 'Strength',
            totalScore: 16,
            modifier: '+3'
        },
        {
            name: 'Dexterity',
            totalScore: 16,
            modifier: '+3'
        },
        {
            name: 'Constitution',
            totalScore: 16,
            modifier: '+3'
        },
        {
            name: 'Intelligence',
            totalScore: 9,
            modifier: '-1'
        },
        {
            name: 'Wisdom',
            totalScore: 10,
            modifier: '+0'
        },
        {
            name: 'Charisma',
            totalScore: 13,
            modifier: '+1'
        }
    ])
    
    return (
      <section class="content">
        <div>
          <div className="flex-row">
            {projects.map((project, idx) => (
              <Project
                project={project}
                key={"project" + idx}
              />
            ))}
          </div>
        </div>
      </section>
      );
    };

export default Portfolio;