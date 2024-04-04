import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Experienced from "../components/Experienced";
import PersonalInfo from "../components/PersonalInfo";


export default function Print() {
  const router = useRouter();


  useEffect(() => {
    setTimeout(() => {
      window.print();

      if (router.query?.next) {
        router.push(router.query?.next);
      } else {
        router.push("/")
      }


    }, 200);
  }, []);

  return (
    <div>
      <Head>
        <title>Himanshu_Gautam_Resume</title>
      </Head>

      <main  >
        <div className="page mt-0 ">
          <div className="personal-info"></div>
          <div className=" bg-white  h-100  p-3 p-md-5 rounded">
            <PersonalInfo print={true}></PersonalInfo>
            <Experienced showSkill={true} skillWithLevel={router.query?.level == 'true' ? true : false} showEducation={true} showTitle={true} showAchievement={true} ></Experienced>
          </div>
        </div>
      </main>
    </div>
  );
}
