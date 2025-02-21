import { FC } from "react";
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from "@/components/ui/menubar";
import { MdKeyboardArrowDown } from "react-icons/md";
import {signOut } from "next-auth/react";
import { CiLogout } from "react-icons/ci";

interface UserInfoProps {
  name: string | null;
  email: string | null;
  image: string | null;
}

const UserInfo: FC<UserInfoProps> = ({ name, email, image }) => (
  <Menubar className="border-0 shadow-none">
    <MenubarMenu>
      <MenubarTrigger className="flex items-center gap-2 px-4 py-2 rounded-md border-0">
        {image && (
          <img src={image} alt="Foto do usuário" className="w-8 h-8 rounded-full" />
        )}
        <span className="text-sm">{name || "Usuário"}</span>
        <MdKeyboardArrowDown />
      </MenubarTrigger>
      <MenubarContent>
        <MenubarItem className="border-b">
          <div className="flex gap-3">
            {image && (
              <img src={image} alt="Foto do usuário" className="w-8 h-8 rounded-full" />
            )}
            <div className="flex flex-col items-start">
              <span>{name || "Sem nome"}</span>
              <span className="text-sm  text-gray-500">{email || "Sem e-mail"}</span> 
            </div>
          </div>
        </MenubarItem>
        <MenubarItem onClick={() => signOut()} className="flex gap-2 text-red-500">
          <CiLogout />
          Sair
        </MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
);

export default UserInfo;