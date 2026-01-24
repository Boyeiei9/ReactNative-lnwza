import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import MapView from "react-native-maps";
import UniversityMarkers from "./UniversityMarkers";

export default function MyMapView(props:any) {
  const width = Dimensions.get("screen").width;
  const height = Dimensions.get("screen").height;  

   const [universities, setUniversities] = useState([]);
  const loadUniversities = async () => {
    let url_endpoint = "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/week10/universities.json";
    try {
      let response = await fetch(url_endpoint);
      let items = await response.json();
      //   console.log(items);
      setUniversities(items);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => { loadUniversities(); }, [])
  if (props.location) {
    //DISPLAY MAP ON YOUR LOCATION
    return (
      <MapView
        style={{ width: width, height: height }}
        initialRegion={{
          latitude: props.location.coords.latitude,
          longitude: props.location.coords.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,

          
        }}
           
        showsUserLocation={true} 
        
             
      > 
    <UniversityMarkers items={universities} />
      </MapView>
    );
  } else {
    //DISPLAY DEFAULT MAP on 0,0
    return <MapView style={{ width: width, height: height }}></MapView>;
  }
}
