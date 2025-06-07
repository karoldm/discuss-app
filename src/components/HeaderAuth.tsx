'use client'

import {
    Button,
    Avatar,
    Popover,
    PopoverTrigger,
    PopoverContent,
} from '@nextui-org/react';
import * as actions from '@/actions';
import { useSession } from "next-auth/react";

export default function HeaderAuth() {
    const session = useSession();

    let authContent: React.ReactNode;

    if (session.status == 'loading') {
        authContent = null;
    }
    else if (session?.data?.user) {
        authContent = (
            <Popover placement="left" >
                <PopoverTrigger>
                    <Avatar
                        src={session?.data?.user.image || undefined}
                        alt={session?.data?.user.name || "User Avatar"}
                        className="cursor-pointer"
                    />
                </PopoverTrigger>
                <PopoverContent>
                    <form action={actions.signOut}>
                        <Button type="submit">Sing out</Button>
                    </form>
                </PopoverContent>
            </Popover>
        );
    } else {
        authContent = (
            <form action={actions.singIn}>
                <Button color='primary' variant='flat' type="submit">sign in</Button>
            </form>
        );
    }

    return authContent;
}