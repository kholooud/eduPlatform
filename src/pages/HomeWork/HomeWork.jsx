import React from 'react'
import Question from '../../components/Question/Question'
import Course_Header from '../../components/Course_Header/Course_Header'
import { Container } from '@mui/material'

export default function HomeWork() {
    return (
        <Container>
            <Course_Header />
            <Question />
        </Container>
    )
}
