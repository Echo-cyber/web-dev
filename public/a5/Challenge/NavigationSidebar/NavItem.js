
const NavItem = (nav) => {
    return (`      
        <div class="row">
            <div class="col-2">
                <a href="#">
                    <i class="${nav.icon}" style="color:white"></i>
                </a>
            </div>
            <span class="d-none d-sm-none d-md-none d-lg-none d-xl-block col-xl-2">
                <a href=${nav.link} class="text-decoration-none" style="color: white">${nav.title}</a>
            </span>

        </div>  
    `)
}

export default NavItem;