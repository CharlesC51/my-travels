import React from "react";

import Travel from "./Travel";

const travels = [
  {
    destination:
      "Tokyo",
    country: "Japan",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Tokyo_Tower_and_around_Skyscrapers.jpg/220px-Tokyo_Tower_and_around_Skyscrapers.jpg",
    distance:"à l'autre bout du monde !"
  },
  {
    destination: "Madrid",
    country: "Spain",
    image:"https://www.telegraph.co.uk/content/dam/Travel/2016/November/madrid-TT-hres-2011_8.jpg?imwidth=450",
    distance:"1500km"
  },
  {
    destination: "Bordeaux",
    country: "France",
    image:"https://www.bordeaux-tourisme.com/var/ezwebin_site/storage/images/media/images/bordeaux-360/bordeaux-360/320062-4-fre-FR/Bordeaux-360_format_360x360.jpg",
    distance:"700km"
  },
  {
    destination:
      "Roma",
    country: "Italia",
    image:"https://www.connections.be/~/media/images/connections/vliegtickets/europa/rome/romefountain.jpg",
    distance:"1400km"
  }
];

const Travels = () => (
  <div> 
  {travels.map( travels => (
    <Travel destination={travels.destination} country={travels.country} image={travels.image} distance={travels.distance}/>
  ))}
  </div>
);

export default Travels;