import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getSubject } from '../../API/StudentServices';
import Course_Content from '../../components/Course_Content/Course_Content'
import Course_Header from '../../components/Course_Header/Course_Header'

const subjectCode = {
  'algebra': 1,
  'Trigonometry': 2,
  'geometry': 3,
  'vacummetry': 4,
  'calculus': 5,
  'calculusInt': 6,
  'static': 7,
  'dynamic': 8,
  'statistics': 9,
  'probability': 10
}
export default function Course() {
  let { CourseId } = useParams();


  const getSubjectData = async () => {
    let res = await getSubject(subjectCode[CourseId], userToken);
    console.log("get subject data", res);
  };
  useEffect(() => {
    console.log(subjectCode[CourseId])
    getSubjectData()
  }, [])

  return (
    <>
      {<Course_Header />}
      {<Course_Content />}
    </>
  )
}
