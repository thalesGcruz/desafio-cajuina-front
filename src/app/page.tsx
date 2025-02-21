'use client'

import Image from "next/image";
import { 
  Card,
  CardContent, 
  CardHeader,
  CardTitle,
  CardDescription 
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { VscGithub } from "react-icons/vsc";
import { signIn } from "next-auth/react"

export default function Home() {
  return (
    <div className="bg-slate-50 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Card className="w-[325px]">
          <CardHeader>
            <Image
            className="m-auto mb-3 rounded-lg object-cover"
            src="/logo-full.png" 
            width={300}
            height={200}
            alt="logo cajuina"/>
            <CardTitle className="text-3xl text-gray-700 text-center">
             Taskify São Geraldo
            </CardTitle>
            <CardDescription>
              Bem-vindo ao sistema de gerenciamento de tarefas da Cajuína São Geraldo,
              onde eficiência e organização caminham juntas
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <Button onClick={() => signIn('google')} className="w-full text-gray-500" variant={"outline"}>
              <FcGoogle />
              Entrar com a conta do google
            </Button>
            <Button onClick={() => signIn('github')} className="w-full text-gray-500" variant={"outline"}>
              <VscGithub />
              Entrar com a conta do gitHub
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
