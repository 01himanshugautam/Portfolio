import Experienced from "@/components/Experienced"
import Graphics from "@/components/Graphics"
import PersonalInfo from "@/components/PersonalInfo"
import Head from "next/head"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Himanshu_Gautam_Resume</title>
      </Head>
      <main>
        <div className="position-fixed top-0 left-0 w-100">
          <div className="container">
            <div className="p-4 d-flex justify-content-end">
              <Link href="/prints" className="btn btn-light">
                Print
              </Link>
            </div>
          </div>
        </div>
        <Graphics className="hide-print" />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="page">
                <div className="personal-info"></div>
                <div className="bg-white shadow-lg h-100 p-md-5 rounded">
                  <PersonalInfo />
                  <Experienced />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
