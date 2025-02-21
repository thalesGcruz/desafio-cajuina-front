import { useSession } from "next-auth/react";
import { FC } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import UserInfo from "./user-info";
import Image from "next/image";

const Header: FC = () => {
  const { data: session, status } = useSession();

  return (
    <header className="p-4 border-b-2 border-green-600 w-full">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
       
        <Image
          className="rounded-lg"
          src="/logo.png"
          width={80}
          height={50}
          alt="logo cajuina"
        />

        <div className="flex items-center gap-6">
          {status === "loading" ? (
            <div className="flex items-center gap-4">
              <Skeleton className="w-10 h-10 rounded-full" />
              <div>
                <Skeleton className="w-32 h-4" />
              </div>
            </div>
          ) : (
            <UserInfo
              name={session?.user?.name || null}
              email={session?.user?.email || null}
              image={session?.user?.image || null}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
