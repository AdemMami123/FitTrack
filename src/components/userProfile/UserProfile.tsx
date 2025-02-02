
"use client"; 

import { useSession, signOut } from "next-auth/react";

export default function UserProfile() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <p>Welcome, {session.user?.name}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }

  return <p>You are not signed in.</p>;
}