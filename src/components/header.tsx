import Link from "next/link";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Input,
} from '@nextui-org/react';
import HeaderAuth from "./HeaderAuth";

export default function Header() {

    return (
        <Navbar className="shadow md-6">
            <NavbarBrand>
                <Link href="/" className="font-bold">Discuss</Link>
            </NavbarBrand>

            <NavbarContent justify="center">
                <NavbarItem>
                    <Input />
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem>
                    <HeaderAuth />
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}