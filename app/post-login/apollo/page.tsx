import React from "react";
import { Query } from "@tanstack/react-query";
import Query1 from "../apollo/components/Query1";
import Query2 from "../apollo/components/Query2";
import FormQueryUpdated from "../apollo/components/FormQueryUpdated";
import FormQuery from "../apollo/components/FormQuery";

function Page() {
  return (
    <>
    {/* <Query1/> */}
    {/* <Query2/> */}
    {/* <FormQueryUpdated/> */}
    <FormQuery/>
    </>
  )
 }

export default Page;