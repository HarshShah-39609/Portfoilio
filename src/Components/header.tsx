import resumeData from "../resumeData";

const buttonStyles: React.CSSProperties = {
   color: 'white',
   border: 'none',
   textAlign: 'center',
   textDecoration: 'none',
   display: 'inline-block',
   fontSize: '14px',
   cursor: 'pointer',
   padding:'5px',
   background:'none'
};


const Header = () =>{
    return(
        <header id="home">
         <nav id="nav-wrap" style={{backgroundColor:'black'}}>
            <ul id="nav" className="nav">
               <li className="current" ><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
                <li><a className="smoothscroll" href="#resume">Resume</a></li>
               <li><a className="smoothscroll" href="#portfolio">Works</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
               <li>
                    <a href="/HarshShah.pdf" download="Harsh Shah.pdf">
                        <button style={buttonStyles}>Download Resume</button>
                    </a>
                </li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">Hi, I am {resumeData.name}.</h1>
               <h3 style={{color:'#fff', fontFamily:'sans-serif', paddingLeft:'20px', paddingRight:'20px'}}>I am a {resumeData.role}.{resumeData.roleDescription}
               </h3>
               <hr/>
               <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
    )
}
export default Header;