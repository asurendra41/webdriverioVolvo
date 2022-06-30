class VolvoCars {
    get acceptCookie() {
        return $("#onetrust-accept-btn-handler"); 
    }
    get volvoLogo(){
        return $("//*[@id='site-nav-topbar-wrapper']//a/img")
    }
    
    get mainHeader(){
        return $("(//h2)[1]")
    }
    get testimonialHeader(){
        return $("(//h2)[2]")
    } 
    get testimonialVideos(){
        return $$("//*[@data-autoid='videoTestimonials:container']")
    }
    get menu() {return $("#sitenav-sidenav-toggle")}
    
    get menupanel(){return $("//*[@data-autoid='nav:sideNavigationContainer']")}

    get close(){ return $("(//*[@id='nav:sideNavigation']//button)[1]")}

    get ourcars(){return $("//*[@id='nav:topNavCarMenu']")}

    get carspanel(){return $('#site-nav-cars-menu-section-panel-1')}

    get desclaimer(){return $$("//*[@id='Disclaimer-1']//p")}

}
module.exports = new VolvoCars()
