import resumeData from "../resumeData";

const About = () => {

    return(
        <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>
               </div>
            </div>
      </section>
    )

}

export default About;