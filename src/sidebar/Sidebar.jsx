import "./sidebar.css"

export default function Sidebar(){
    return (
        <div className="sidebar">
            <div className="sidebarItemOne">
                <div className="redBar">
                   
                </div>
                <div className="redBarIcon"> </div>

               
                <span className="sidebarTitle">John Doe</span>
                <span className="titleBar">Graphics Designer at Self Employed</span>

                <hr />

                <span className="titleDesc"> Following </span>
                <span className="titleFollower">34</span>
                
                <hr />

                <span className="titleDesc"> Followers </span>
                <span className="titleFollower">155</span>

                <hr />

                <p>View Profile</p>

            </div>
           
            <div className="sidebarItemTwo">
            <div className="headerDiv"></div>
            <div className="sideBarTwoIcon"></div>
            <span className="sideBarTwoDesc">John Doe</span>
            <span className="sideBarThreeDesc"><i class="fa-solid fa-clock"> 3 mins ago</i></span>

            <span><i class="verticalDots fa-solid fa-ellipsis-vertical"></i></span>

            <div className="location">
                <span className=""><i className="coder fa-solid fa-table-cells-large">  </i> Epic Coder </span>
                <span className=""><i className="locationIcon fa-brands fa-telegram">  </i> India </span>
            </div>
            
                <i className="sideIconMessage fa-solid fa-envelope"></i>
                <i className="sideIconBadge fa-thin fa-route-interstate"></i>

                <ul className="sidebarList">
                    Senior WordPress Developer
                </ul>
                <p className="lorem">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Doloremque deserunt ea maiores modi saepe, aut ex a expedita laudantium magni beatae incidunt libero? Nesciunt, tempore id autem dolorum dicta impedit.
                </p>
            </div>


            <div className="sidebarItemThree">

                 <div className="sideBarThreeIcon"></div>

                <span className="sidebarTitle">
                    Track Time on Workwise
                </span>

                <span className="sidebarSecondTitle">
                   Pay only for the hours worked
                </span>
                
                <hr />

                <span className="sidebarSignup">
                   Sign up
                </span>

                <span className="sidebarLearnmore">
                   Learn More
                </span>

                <p>
               
                </p>
            </div>
        </div>
    );
}