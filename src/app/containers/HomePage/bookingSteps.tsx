import { faCalendarAlt, faCarAlt, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
${tw`
    w-full
    flex
    flex-col
    items-center
    py-3
    lg:py-6 
`
}
`
const Title = styled.h2`
${tw`
 text-3xl
 lg:text-4xl
 text-black
 font-extrabold
`}
`

const StepsContainer = styled.div`
${tw`
 flex
 justify-evenly
 flex-wrap
 mt-7
 lg:mt-16
`}
`
const StepContainer = styled.div`
${tw`
flex
flex-col
md:w-96
items-center
transition-colors
hover:text-red-500
m-3
`}
`
const Step = styled.div`
/* box-shadow: 0 1.3px 12px 3px rgba(0, 0, 0, 0.4); */
${tw`
flex
rounded-lg
items-center
justify-center
p-6 
`}
`

const StepTitle = styled.h4`
${
tw`
text-lg
text-black
font-semibold
mt-4
`
}
`

const StepDescription = styled.p`
${tw`
   w-10/12
   text-xs
   md:text-sm 
   text-center
   text-gray-600 
`}
`
const StepIcon = styled.span`
${tw`
    text-red-500
    text-3xl
`}
`
 

 export function BookingSteps(){
    return <Container>
        <Title>Our working steps</Title>
        <StepsContainer>
            <StepContainer>
                <Step>
                    <StepIcon>
                      <FontAwesomeIcon icon={faMapMarkedAlt}/>  
                    </StepIcon>
                </Step>
                <StepTitle>
                    Choose Location 
                </StepTitle>
                <StepDescription>
                    Find the nearest point and book your car.
                </StepDescription>
            </StepContainer>
            <StepContainer>
                <Step>
                    <StepIcon>
                      <FontAwesomeIcon icon={faCalendarAlt}/>  
                    </StepIcon>
                </Step>
                <StepTitle>
                Pick-up date 
                </StepTitle>
                <StepDescription>
                    Choose the pickup date on your needs.
                </StepDescription>
            </StepContainer>
            <StepContainer>
                <Step>
                    <StepIcon>
                      <FontAwesomeIcon icon={faCarAlt}/>  
                    </StepIcon>
                </Step>
                <StepTitle>
                    Find your car  
                </StepTitle>
                <StepDescription>
                    Finding car based on your desired
                </StepDescription>
            </StepContainer>
        </StepsContainer>
    </Container>
 }