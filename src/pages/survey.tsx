import React from "react"
import dynamic from "next/dynamic"
// import styled from "styled-components"
const SurveyComponent = dynamic(() => import("./components/survey/index"), {
  ssr: false,
})

const Survey = () => {
  return (
      <SurveyComponent />
  )
}
export default Survey
