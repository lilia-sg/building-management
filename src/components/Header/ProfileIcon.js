export default function ProfileIcon({onProfileClick}) {
    return (			
    <div>
        <button type="button" 
                className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" 
                id="user-menu-button" aria-expanded="false" aria-haspopup="true"
                onClick={onProfileClick}>
            <img className="h-8 w-8 rounded-full" src="./profile_icon.svg" alt="Profile menu icon"/>
        </button>
    </div>);
}