import resumeData from "../resumeData";

const Resume = () => {

    return(
        <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info" style={{fontSize:'18px'}}>
                          {item.specialization}<br/><span>&bull;</span>{item.degree}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}<br/><span>&bull;</span><em className="date">{item.MonthofJoining} {item.YearofJoining}</em>
                          <span>-</span><em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>


         <div className="row skill">
        <div className="three columns header-col">
          <h1><span>Skills</span></h1>
        </div>

        <div className="nine columns main-col">
          <div className="bars">
            <ul className="skills">
              {resumeData.skills && resumeData.skills.map((item, index) => (
                <li key={index} style={{marginLeft:'20px'}}>
                  <img src={item.imageUrl} alt={item.skillname} className="skill-image" /><br/>
                  <p style={{display:'flex',justifyContent:'center',color:'black',marginTop:"3px",fontSize:'18px'}}>{item.skillname}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      </section>
    )

}

export default Resume;