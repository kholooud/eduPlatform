import React from 'react'
import Card_section from '../../components/Card_section/Card_section'
import Course_Content from '../../components/Course_Content/Course_Content'
import Course_Header from '../../components/Course_Header/Course_Header'
export default function Course() {
  return (
    <>
      {<Course_Header />}
      {<Card_section />}
      {<Course_Content />}
    </>
  )
}
