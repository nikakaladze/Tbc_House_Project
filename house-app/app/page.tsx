import Image from "next/image";
import ListingMapView from "./_components/ListngMapView";

export default function Home() {
 return (
   <div className=" p-10">
     <ListingMapView type="Sell" />
   </div>
 );
}
