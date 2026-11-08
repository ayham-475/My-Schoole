import Image from "next/image";
import { CategoryIcon } from "../Components/shared/CategoryIcons";
import HeroSearchSection from "./HeroSearchSection";
import MainCategoriesSection from "./MainCategoriesSection";
import GuestHeader from "../Components/shared/GuestHeader";
export default function Home() {
 
  return (
    
    <div>
         <GuestHeader />
         <HeroSearchSection />
         <MainCategoriesSection />
    </div>
  );
}
