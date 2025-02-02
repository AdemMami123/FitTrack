import Image from "next/image";
import Home from "@/components/home/home"
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
const Page=async() =>{
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div>
      
      <Home/>
    </div>
  );
}
export default Page;