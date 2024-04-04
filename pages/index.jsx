import Head from "next/head";
import { useRouter } from "next/router";
import Experienced from "../components/Experienced";
import Graphics from "../components/Graphics";
import PersonalInfo from "../components/PersonalInfo";

export default function Home() {
  const router = useRouter()
  function _print(e) {
    router.push({ pathname: "/print", query: { next: "/", level: router.query?.level } })
  }

  return (
    <div>
      <Head>
        <title>Himanshu Gautam Portfolio</title>
      </Head>
      <main>
        <div className="position-fixed top-0 left-0 w-100">
          <div className="container">
            <div className="p-4 d-flex justify-content-end" >
              <button onClick={_print} className="btn btn-light" > PRINT </button>
            </div>
          </div>
        </div>
        <Graphics className="hide-print" />

        <div className="container  ">
          <div className="row">
            <div className="col-12">
              <div className="page ">
                <div className="personal-info"></div>
                <div className=" bg-white shadow-lg  h-100  p-3 p-md-5 rounded">
                  <PersonalInfo></PersonalInfo>
                  <Experienced showAchievement={true} showSkill={true} skillWithLevel={router.query?.level == 'true' ? true : false} showEducation={true} showTitle={true} ></Experienced>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
