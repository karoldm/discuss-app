'use client'
import { useSession } from "next-auth/react";

export default function Profile() {
    const session = useSession();

    if (session.data?.user) {
        return <div>user logged: {JSON.stringify(session.data!.user)}</div>
    }

    return <div>user not logged</div>
}