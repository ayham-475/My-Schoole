import Image from "next/image";
import { CategoryIcon } from "../features/landing/components/CategoryIcons";
import HeroSearchSection from "../features/landing/components/HeroSearchSection";
import MainCategoriesSection from "../features/landing/components/MainCategoriesSection";
import GuestHeader from "../features/landing/components/GuestHeader";
export default function Home() {
 
  return (
    
    <div>
         <GuestHeader />
         <HeroSearchSection />
         <MainCategoriesSection />
    </div>
  );
}
