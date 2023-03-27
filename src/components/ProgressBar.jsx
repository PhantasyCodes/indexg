import React from 'react'
import { useSelector } from 'react-redux'

import './ProgressBar.css'

const ProgressBar = () => {
    const progress = useSelector(state => state.progress)

    return (
        <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
    )
}

export default ProgressBar