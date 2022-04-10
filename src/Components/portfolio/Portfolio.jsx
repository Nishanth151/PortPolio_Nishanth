import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/New Project (1).jpg'
import IMG2 from '../../assets/New Project (2).jpg'
import IMG3 from '../../assets/New Project (3).jpg'
import IMG4 from '../../assets/New Project.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
const data = [
    {
      id: 1,
      image:IMG1,
      title:'Colmar_Project',
      github:'https://github.com/Nishanth151/Colmar_Project',
      demo:'https://dribbble.com/shots/17727100-Miracles-Skincare-Beauty-Spa-Landing-Page',
    },
    {
      id: 2,
      image:IMG2,
      title:'Musical App',
      github:'https://github.com/Nishanth151/Jamming_Pojectx',
      demo:'https://www.editorx.com/prowebsites/your-next-site?utm_source=mb&utm_medium=cpc&utm_campaign=ma_ads_edx-dribbble-shots-business',
    },
    {
      id: 3,
      image:IMG3,
      title:'Weather',
      github:'https://github.com/Nishanth151/Weather',
      demo:'https://dribbble.com/shots/17723581-Call-Service-Web-Exploration',
    },
    {
      id: 4,
      image:IMG4,
      title:'E-Commerce',
      github:'https://github.com/Nishanth151/E-Commerce',
      demo:'https://dribbble.com/shots/17723581-Call-Service-Web-Exploration',
    }
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        {
          data.map(({id, image, title, github, demo})=>{
             return (
            <article key={id} className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={image} alt={title} />
          </div>
         
            <h3>{title}</h3>
            <div className='portfolio_item-cta'>
            <a href={github} className='btn' target={'_blank'}> Github</a>
          </div>
        </article>
             )
          })
            }
</div> 
        
    </section>
  )
}

export default Portfolio