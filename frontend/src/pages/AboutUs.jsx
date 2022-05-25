import './aboutUs.css'
const AboutUs = () => {
  return(
    <>
      <div className="about-section backgroundImg">
  <h1 style={{margin:10, fontSize:22, position:'absolute', left:'45%', fontWeight:'bold',
   fontSize:40}}>About us</h1>
  {/* <img src="/images/aboutUsBackground.jpg" className="background-img" style={{}} /> */}
  
  <p style={{fontSize:18, position:'absolute', bottom:100, padding:'0px 200px'}}> 
    Personalized Trip Planner site help to browse reviews and opinions of accommodations, restaurants, experiences. 
    Whether planning or on a trip, travelers turn to this site to compare low prices on hotels, plan to visit popular 
    tours and attractions. Personalized Trip Planner brings people, passions and places together. We aim to help make you 
    a better traveller, from travel planning, to taking a trip. Our app lets you get the most out of your trip – 
    whether you’re planning or on-the-go. Discover where to stay, what to do and where to eat based on guidance from 
    millions of travellers who have been there before.  discover great places nearby. No matter what type of trip you’re 
    looking to take, we help in planning it easy and also lets you guide others on their way.
</p>
</div>

<div style={{width:'80%', margin:'auto'}}>
  <h1 style={{margin:'auto', width:'10%', fontSize:25, paddingTop:30, color:'gray'}}>Our vision</h1>
    <div class="overflow-hidden shadow-lg">
        {/* <div class="px-6 py-4"> */}
           <div class="text-xl mb-2" style={{color:'#708090', padding:25}}>
              Our vision is to make travel simple and fun for all, and guide in making this possible. We aim to give
               the best possible user experience across their entire travel journey, which includes effective planning 
               resources. We help people to get an overview of the trip for which they are planning, access millions of 
               reviews about hotels, restaurants, tours, attractions and other experiences from travellers just like you, 
               discover traveller-recommended places nearby and view them on a map. Our aim is to design a flexible system 
               that can help users to plan their trip with a variety of options to choose from, suggest budget-friendly 
               staying, travelling and eating options and help in maximum utilization of days the person is planning for. 
               This project is to reduce the time spent on planning for the vacation and help travellers spend more time 
               on a vacation that they will love.  </div> 
    </div>
                {/* </div> */}
</div>

<h1 style={{margin:'auto', width:'10%', fontSize:25, paddingTop:30, color:'gray'}}>Our team</h1>

<div style={{margin:'20px auto', display:'flex', width:'80%'}}>

    {/* -----------------------Sagar------------------------------ */}
 <div className="wrapper antialiased text-gray-900" style={{margin:50}} >
     <div>
      <img src={'/images/sagar.jpg'} alt=" random imgee" className="object-cover object-center rounded-lg shadow-md" 
      style={{width: 200, height: 300}} />    
       <div className="bg-white  rounded-lg shadow-lg relative px-2" style={{width:150, marginTop:'-3.25rem'}}>
        <span className="text-gray-600 text-sm" style={{fontWeight:'bold', display:'block'}}>Sagar Patil</span>
        <span className="text-gray-600 text-sm">Backend developer</span>
       </div>
     </div>
  </div>

  {/* -----------------------Atharva------------------------------ */}
  <div className="wrapper antialiased text-gray-900" style={{margin:50}} >
     <div>
      <img src={'/images/atharva.jpg'} alt=" random imgee" className="object-cover object-center rounded-lg shadow-md" 
      style={{width: 200, height: 300}} />    
       <div className="bg-white  rounded-lg shadow-lg relative px-2" style={{width:150, marginTop:'-3.25rem'}}>
        <span className="text-gray-600 text-sm" style={{fontWeight:'bold', display:'block'}}>Atharva Muratkar</span>
        <span className="text-gray-600 text-sm">Frontend developer</span>
       </div>
     </div>
  </div>

  {/* -----------------------Utkarsha------------------------------ */}

  <div className="wrapper antialiased text-gray-900" style={{margin:50}} >
     <div>
      <img src={'/images/utkarsha.jpg'} alt=" random imgee" className="object-cover object-center rounded-lg shadow-md" 
      style={{width: 200, height: 300}} />    
       <div className="bg-white  rounded-lg shadow-lg relative px-2" style={{width:150, marginTop:'-3.25rem'}}>
        <span className="text-gray-600 text-sm" style={{fontWeight:'bold', display:'block'}}>Utkarsha Dhumal</span>
        <span className="text-gray-600 text-sm">Backend developer</span>
       </div>
     </div>
  </div>

   {/* -----------------------Mrunal------------------------------ */}

   <div className="wrapper antialiased text-gray-900" style={{margin:50}} >
     <div>
      <img src={'/images/mrunal.jpg'} alt=" random imgee" className="object-cover object-center rounded-lg shadow-md" 
      style={{width: 200, height: 300}} />    
       <div className="bg-white  rounded-lg shadow-lg relative px-2" style={{width:150, marginTop:'-3.25rem'}}>
        <span className="text-gray-600 text-sm" style={{fontWeight:'bold', display:'block'}}>Mrunal Tupe</span>
        <span className="text-gray-600 text-sm">Frontend developer</span>
       </div>
     </div>
  </div>

</div>

</>
  )
}

export default AboutUs