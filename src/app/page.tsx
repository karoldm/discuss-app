import { Button } from "@nextui-org/react";
import * as actions from '@/actions';
import { auth } from '@/auth';
import Profile from "@/components/Profile";

export default async function Home() {
  const session = await auth();

  return (
    <div>

    </div>
  );
}
