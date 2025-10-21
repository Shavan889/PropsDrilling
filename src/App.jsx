import Card from './components/Card';


const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: '$55/hr',
    location: "Menlo Park, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: '$85/hr',
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "10 days ago",
    post: "Backend Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: '$45/hr',
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "3 weeks ago",
    post: "Data Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: '$75/hr',
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSV7Hxcxl15KubCyHNbRgX7wnINoeShmbqrw&s",
    companyName: "Google",
    datePosted: "1 week ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: '$70/hr',
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "6 days ago",
    post: "Cloud Architect",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: '$90/hr',
    location: "Redmond, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/openai.com",
    companyName: "OpenAI",
    datePosted: "4 weeks ago",
    post: "AI Researcher",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: '$120/hr',
    location: "San Francisco, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "3 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: '$65/hr',
    location: "Fremont, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/samsung.com",
    companyName: "Samsung",
    datePosted: "10 weeks ago",
    post: "Embedded Systems Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: '$40/hr',
    location: "Seoul, South Korea"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    companyName: "NVIDIA",
    datePosted: "1 day ago",
    post: "ML Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: '$95/hr',
    location: "Santa Clara, USA"
  }
];


const App = () => {
  return (
    <div className="parent">
     {jobOpenings.map((elem,idx)=>{
      return <div key={idx}>
        <Card  brandLogo={elem.brandLogo} companyName={elem.companyName} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location}/>
      </div>
      
     })}
    </div>
  )
}

export default App