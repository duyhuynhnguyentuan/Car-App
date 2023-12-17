import { faCalendarAlt, faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";  
import tw from "twin.macro";
import { Marginer } from "../marginer";
import { Button } from "../button";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'
import { start } from "repl";
const CardContainer = styled.div`
min-height: 4.3em;
box-shadow: 0 1.3px 12px -3px rgba(0,0,0,0.4);
 ${tw`
    flex
    justify-center
    items-center
    rounded-md
    bg-white
    py-1 
    px-2
    md:py-2
    md:px-9
 `}
 `  
 
 const ItemContainer = styled.div`
   ${tw`flex relative`}
 `

const Icon = styled.span`
${tw`
    text-red-500
    fill-current
    text-sm
    md:text-base
    mr-1
    md:mr-3
`}
`

const Name = styled.span`
${tw`
  text-gray-600 
  text-xs
  md:text-sm
  cursor-pointer
  select-none
`}
`
const SmallIcon = styled.span`
${tw`
    text-gray-500
    fill-current
    text-xs
    md:text-base
    ml-1 
`}
`


const LineSeperator = styled.span`
    width: 2px;
    height: 45%;
    ${tw`
        bg-gray-300
        mx-2
        md:mx-5

    `}
`
const DateCalendar = styled(Calendar)`
position: absolute;
max-width: none;
top: 3.5em;
left: -2em;
user-select: none;
`

export function BookCard() {
    const [startDate, setStartDate] = useState<Date>(new Date())
    const [isStartCalendarOpen, setIsStartCalendarOpen] = useState(false)
    const [returnDate, setReturnDate] = useState<Date>(new Date())
    const [isReturnCalendarOpen, setIsReturnCalendarOpen] = useState(false)
    // console.log("Value: ", startDate)
    const toggleStartDateCalendar = () => {
        setIsStartCalendarOpen(!isStartCalendarOpen)
        if(isReturnCalendarOpen) setIsReturnCalendarOpen(false)
    }
    const toggleReturnDateCalendar = () => {
        setIsReturnCalendarOpen(!isReturnCalendarOpen)
        if(isStartCalendarOpen) setIsStartCalendarOpen(false)
    }
 return <CardContainer>
    <ItemContainer>
        <Icon>
            <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleStartDateCalendar}>
            Pick up date
        </Name>
        <SmallIcon>
            <FontAwesomeIcon icon={isStartCalendarOpen ? faCaretUp  : faCaretDown}/>
        </SmallIcon>
        {isStartCalendarOpen && <DateCalendar value={startDate} onChange={setStartDate as any}/>}  
    </ItemContainer>
    <LineSeperator/>
    <ItemContainer>
        <Icon>
            <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleReturnDateCalendar}>
            Return Date 
        </Name>
        <SmallIcon>
            <FontAwesomeIcon icon={isReturnCalendarOpen ? faCaretUp  : faCaretDown}/>
        </SmallIcon>
        {isReturnCalendarOpen && <DateCalendar value={returnDate} onChange={setReturnDate as any}/>} 
    </ItemContainer>
    <Marginer direction="horizontal" margin="2em"/>
    <Button text="Book your ride" />
 </CardContainer>
}