import React from 'react'
import Panel from '../components/admin/Panel'
import TournamentForms from '../components/admin/TournamentForms'
import HamburgerMenu from '../components/hamburger-menu/HamburgerMenu'
import './Admin.css'

const Admin = () => {
  return (
    <div className="admin-page">
        <HamburgerMenu toggle={() => {}} isOpen={false} />
        <Panel />
        <TournamentForms />
    </div>
  )
}

export default Admin