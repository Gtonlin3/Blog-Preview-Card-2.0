import Image from "next/image";
import Header from "@/components/Header";
import Blog from "@/components/Blog";
import Profile from "@/components/Profile";

const Card = () => {
  return (
    <div className="targeta">
        <div className="cabeza">
            <Image src={"./illustration-article.svg"} alt={""} width={320} height={220}/> 
        <Header />
        <Blog />
        <Profile />
        </div>
    </div>
  )
}

export default Card
