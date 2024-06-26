"use client"
import Experienced from "@/components/Experienced"
import PersonalInfo from "@/components/PersonalInfo"
import Head from "next/head"
import { redirect } from "next/navigation"
import { useEffect } from "react"
export default function PrintComponent() {
  var print = true
  useEffect(() => {
    if (print) {
      print = false
      window.print()
      redirect("/")
    }
  }, [])
  return (
    <div>
      <Head>
        <title>Himanshu_Gautam_Resume</title>
      </Head>
      <main>
        <div className="page mt-0 ">
          <div className="personal-info"></div>
          <div className=" bg-white  h-100  p-3 p-md-5 rounded">
            <PersonalInfo />
            <Experienced />
          </div>
        </div>
      </main>
    </div>
  )
}
