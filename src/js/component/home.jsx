import React from "react";
import Card from "./card";
import Navbar from "./navbar";
import Footer from "./footer";
import Topp from "./Header";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
<>	
	<Navbar/>
	<Topp/>
		<div className="row">
		
		<Card url = "https://lamaquinamedio.com/wp-content/uploads/2020/02/screen-4-1-850x560.jpg"/>
		<Card url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAvpsC94VGxw9pMi-D5tWRXVeUqnmosVow8w&usqp=CAU"/>
		<Card url = "https://pm1.narvii.com/6643/455de566b353b447433e7572cb9b611f2fcc548c_hq.jpg"/>
		<Card url = "https://e7.pngegg.com/pngimages/296/68/png-clipart-pokemon-pokemon.png"/>
			
		</div>
	<Footer/>

		</>
	);
};

export default Home;
