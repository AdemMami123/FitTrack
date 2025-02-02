import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import {hash} from "bcrypt";
import {z} from "zod";

//define a schema for input validation
const userShema=z
.object({
    username:z.string().min(1,"Username is required").max(100),
    email:z.string().email("Invalid email").min(1,"Email is required").email("Invalid email"),
    password:z.string().min(1,"Password is required").min(6,"Password must be at least 6 characters long")

});





export async function POST(req:Request){
   try{
        const body=await req.json();
        const{email,username,password}=userShema.parse(body);

        //chekc if email exists
        const existingUserEmail=await db.user.findUnique({
            where:{email:email}

        });
        if(existingUserEmail){
            return NextResponse.json({user:null,message:"Email already exists"},{status:409});
        }

        //check if username exists
        const existingUsername=await db.user.findUnique({
            where:{username:username}
        });
        if(existingUsername){
            return NextResponse.json({user:null,message:"Username already exists"},{status:409});
        }
        //hash password
        const hashedPassword=await hash(password,10);
            //create new user
        const newUser=await db.user.create({
            data:{
                username,
                email,
                
                password:hashedPassword
            }
        });
        const {password:newUserPassword,...rest}=newUser;
        return NextResponse.json({user:rest,message:"User created successfully"},{status:201});
   }catch(error){
    return NextResponse.json({user:null,message:"Something went wrong"},{status:500});
   }
}