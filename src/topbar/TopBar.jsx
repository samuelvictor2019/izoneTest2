import "./topbar.css"

export default function TopBar() {
    return (
    <div className="top">
        
        <div className="topRight">
           <div className="searchIcon">
            <input className="inputSearch" type="text" value="Search..."></input>
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>

        <div className="topCenter">
            <ul className="topList">
                <i class="fa-solid fa-house">
                <li className="topListItem">Home</li>
                </i>
            </ul>

            <ul className="topList">
                <i class="fa-solid fa-building">
                <li className="topListItem">Companies</li>
                </i>
            </ul>

            <ul className="topList">
                <i class="fa-brands fa-react">
                <li className="topListItem">Projects</li>
                </i>
            </ul>

            <ul className="topList">
                <i class="fa-solid fa-user-group">
                <li className="topListItem">Profiles</li>
                </i>
            </ul>

            <ul className="topList">
                <i class="fa-solid fa-briefcase">
                <li className="topListItem">Jobs</li> 
                </i>
            </ul>

            <ul className="topList">
                <i class="fa-solid fa-envelope">
                <li className="topListItem">Messages</li>
                </i>
            </ul>

            <ul className="topList">
                <i class="fa-solid fa-bolt-lightning">
                <li className="topListItem">Notifications</li>
                </i>
            </ul>

        </div>

        <div>
        <div className="redBarIcon"> </div>
        </div>
      
    </div>


    );
}