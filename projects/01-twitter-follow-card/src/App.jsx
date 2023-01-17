import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';


export function App() {
    return (
        <div className='App'>
        <TwitterFollowCard userName='midudev' name='Migule Angel Duran' initialIsFollowing/>
        <TwitterFollowCard userName='pheralb' name='Pablo Hernandez' initialIsFollowing={false}/>
        </div>
    )
}