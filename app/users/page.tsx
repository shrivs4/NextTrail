import type { Metadata } from "next";
import React from "react";
import getAllUsers from "../lib/getAllUsers";
import Link from "next/link";


export const metadata: Metadata = {
    title:'Users',
}

export default async function UsersPage() {
    const userData: Promise<Users[]> = getAllUsers();

    const user = await userData;

    console.log("Hello")


    const content = (
        <section>
            <Link href={'/'}>Go to Main Page</Link>
            <br />
            <br />
            {user.map((val,index)=>{
              return(
                <>
                <p key={val?.id}>
                  <Link href={`/users/${val.id}`}>{val.name}</Link>
                </p>
                <br />
                </>
              )
            })}
        </section>
    )


  return content;
}
