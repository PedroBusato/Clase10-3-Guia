import React from "react"
import FooterElements from "../FooterElements/FooterElements";

function Footer(){
    return(
        <footer class="sticky-footer bg-white">
            <div class="container my-auto">
                <div class="copyright text-center my-auto">
                    <FooterElements footerDescription="Copyright &copy; Dashboard 2020"/>
                </div>
            </div>
        </footer>
    )
}

export default Footer;