import '../styles/styles.scss'
import TeamMember from './TeamMember'
const OperationalTeam = () => {
  return (
    <div className='container'>
        <h1>Operational Team</h1>
        <p className='description'>44 teams members from Malaysia, India, Nigeria and Nepal</p>
        <div className='grid'>
            <TeamMember classname='team'/>
            <TeamMember classname='team'/>
            <TeamMember classname='team'/>
            <TeamMember classname='team'/>
            <TeamMember classname='team'/>
            <TeamMember classname='team'/>
            <TeamMember classname='team'/>
            <TeamMember classname='team'/>
        </div>
    </div>
  )
}

export default OperationalTeam