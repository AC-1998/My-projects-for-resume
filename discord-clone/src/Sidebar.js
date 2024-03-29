import React, { useState, useEffect } from 'react'
import './sidebar.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CallIcon from '@mui/icons-material/Call';
import { Avatar } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import HeadsetIcon from '@mui/icons-material/Headset';
import SettingsIcon from '@mui/icons-material/Settings';
import { useSelector } from 'react-redux';
import { selectUser } from './userSlice';
import db, { auth } from './firebase';


function Sidebar() {
    const user = useSelector(selectUser);
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        db.collection('channels').onSnapshot(snapshot => {
            setChannels(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                 channel: doc.data(),
               }))
            )
        }); 
    }, []);

    const handleAddChannel = () => {
        const channelName = prompt('Enter channel name');

        if (channelName) {
            db.collection('channels').add({
                channelName: channelName,
            });
        }
    }

    /* const handleRemoveChannel = (channelId) => {
        const channelName = prompt('Enter channel name')

        if (channelName) {
            db.collection('channels').doc(channelId).delete();
        } 
      };
    */


  return (
    <div className="sidebar">
        <div className="sidebar__top">
            <h3>Game Lobby</h3>
            <ExpandMoreIcon />
        </div>

        <div className="sidebar__channels">
            <div className='sidebar__channelsHeader'>
                <div className="sidebar__header">
                    <ExpandMoreIcon/>
                    <h4>Text Channels</h4>
                </div>

                <AddIcon className="sidebar__addChannel" onClick={handleAddChannel}/>
                <RemoveIcon className='sidebar__removeChannel' /*onClick={handleRemoveChannel}*//>
            </div>

            <div className='sidebar__channelsList'>
                {channels.map(({id, channel}) => (
                     <SidebarChannel 
                     key={id} 
                     id={id} 
                     channelName={channel.channelName}
                     /*removeChannel={handleRemoveChannel}*/
                     />
                ))}
            </div>
        </div>
        <div className='sidebar__voice'>
            <SignalCellularAltIcon 
                className='sidebar__voiceIcon' 
                fontSize='large'
            />
            <div className='sidebar__voiceInfo'>
                <h3>Voice Connected</h3>
                <p>Stream</p>
            </div>    

            <div className='sidebar__voiceIcons'>
                <InfoOutlinedIcon/>
                <CallIcon/>
            </div>
        </div>
        <div className='sidebar__profile'>
            <Avatar onClick={() => auth.signOut()} src={user.photo}/>
            <div className='sidebar__profileInfo'>
                <h3>{user.displayName}</h3>
                <p>#{user.uid.substring(0, 5)}</p>
            </div>

            <div className='sidebar__profileIcons'>
            <MicIcon/>
            <HeadsetIcon/>
            <SettingsIcon/>
            </div>
        </div>        
    </div>
  )
}

export default Sidebar
