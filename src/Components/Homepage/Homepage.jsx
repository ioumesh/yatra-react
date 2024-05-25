import {Leftsection} from "./LeftSection/Left-section";
import {RightSection} from "./RightSection/RightSection";
import {StyledNavbar} from "./Navbar.styled";
import {StyledLeftSection} from "./LeftSection.styled";
import {StyledHomepageBody} from "./HomepageBody.styled";
import { Navbar } from "../Header/Navbar";

const Homepage =()=>{
    
    return (
        <>
            <StyledNavbar>
                <Navbar/> 
            </StyledNavbar>
      
            <StyledHomepageBody>

                <StyledLeftSection>
                    <Leftsection/>
                </StyledLeftSection>

                <RightSection />
            
            </StyledHomepageBody>
        </>
    );
}

export{Homepage};