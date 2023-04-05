import React from 'react'
import { useState } from 'react'
import './TwoSectionComponent.css'

const TwoSectionComponent = () => {
    const [activeSection, setActiveSection] = useState(1);

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

  return (
    <div className='two-section-component'>
        <div className="options">
            <div onClick={() => handleSectionChange(1)} >
                <h2>Rules</h2>
            </div>
            <div onClick={() => handleSectionChange(2)}>
                <h2>Location</h2>
            </div>
        </div>
      {activeSection === 1 ? (
        <div className='tournament-rules'>
          <p>- 4 players per team</p>
          <p>- No cheating</p>
          <p>- No cheating</p>
          <p>- No cheating</p>
          <p>- No cheating</p>
        </div>
      ) : (
        <div>
          <p>Content for section 2</p>
        </div>
      )}
    </div>
  )
}

export default TwoSectionComponent