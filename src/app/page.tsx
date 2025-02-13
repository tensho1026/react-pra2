
import { SignIn, SignUp } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
  //  <div>
     <div className="mt-4 space-x-4">
     <Link href="/sign-in">
       <button className="px-4 py-2 bg-blue-500 text-white rounded">ログイン</button>
    </Link>
    <Link href="/sign-up">
      <button className="px-4 py-2 bg-green-500 text-white rounded">新規登録</button>
    </Link> 
    </div>
  )
}
