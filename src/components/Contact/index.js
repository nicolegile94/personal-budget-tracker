import React, { useState } from 'react';
import Action from '../Actions';



function Contact() {

    const [actions] = useState([
        {
            weapon: 'Crossbow, Light',
            range: 80,
            hitDC: '+5',
            damage: '1d8+3',
            type: 'Piercing'
        },
        {
          weapon: 'Greataxe',
          range: 5,
          hitDC: '+5',
          damage: '1d12+3',
          type: 'Slashing'
        },
        {
          weapon: 'Handaxe',
          range: 20,
          hitDC: '+5',
          damage: '1d6+3',
          type: 'Slashing'
        },
        {
          weapon: 'Unarmed Strike',
          range: 5,
          hitDC: '+5',
          damage: '4',
          type: 'Bludgeoning'
        }
    ])
    
    return (
      <section class="content">
        <div>
          <div className="flex-row">
            {actions.map((action, idx) => (
              <Action
                action={action}
                key={"action" + idx}
              />
            ))}
          </div>
        </div>
      </section>
      );
    };

export default Contact;