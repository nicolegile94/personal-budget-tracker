import React, { useState } from 'react';
import Supplies from '../Equipment';



function Resume() {

    const [supplies] = useState([
        {
            item: 'Bedroll',
            weight: 7,
            qty: 1,
            cost: 1
        },
        {
            item: "Cook's Utensils",
            weight: 8,
            qty: 1,
            cost: 1
        },
        {
            item: "Crowbar",
            weight: 5,
            qty: 1,
            cost: 2
        },
        {
            item: "Javelin",
            weight: 8,
            qty: 4,
            cost: 2
        },
        {
            item: "Torch",
            weight: 10,
            qty: 10,
            cost: 1
        }
    ])
    
    return (
      <section class="content">
        <div>
          <div className="flex-row">
            {supplies.map((supplies, idx) => (
              <Supplies
              supplies={supplies}
                key={"supplies" + idx}
              />
            ))}
          </div>
        </div>
      </section>
      );
    };

export default Resume;