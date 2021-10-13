
const NavItem = (nav) => {
    return (`      
        <div class="row">
            <div class="col-2">
                <a href="#">
                    <i class="${nav.icon}" style="color:white"></i>
                </a>
            </div>
            <div class="col-10 d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block">
                <a href=${nav.link} class="text-decoration-none" style="color: white">${nav.title}</a>
            </div>

        </div>  
    `)
}

export default NavItem;