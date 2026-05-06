import React from 'react'
import styled from 'styled-components'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + "bb"};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Span = styled.span`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  white-space: pre-line;
`

const Card = styled.div`
    width: 650px;
    border-radius: 10px;
    padding: 16px 20px;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    background: ${({ theme }) => theme.card};
    border: 1px solid rgba(0, 201, 255, 0.12);
    border-left: 3px solid ${({ theme }) => theme.primary};
    box-shadow: rgba(0, 201, 255, 0.08) 0px 4px 24px;
    transition: all 0.25s ease-in-out;

    &:hover{
        transform: translateX(5px);
        border-left-color: #00a8d8;
        box-shadow: -4px 0 20px rgba(0, 201, 255, 0.18), 0 4px 24px rgba(0, 0, 0, 0.25);
    }

    @media only screen and (max-width: 768px){
        padding: 12px 14px;
        gap: 8px;
        width: 100%;
    }

    &:hover ${Document}{
        display: flex;
    }

    &:hover ${Span}{
        overflow: visible;
        -webkit-line-clamp: unset;
    }
`

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;
`

const Image = styled.img`
    height: 90px;
    width: 90px;
    object-fit: contain;
    background-color: transparent;
    border-radius: 10px;
    margin-top: 4px;
    flex-shrink: 0;
    @media only screen and (max-width: 768px){
        height: 70px;
        width: 70px;
    }
`

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const Role = styled.div`
    font-size: 19px;
    font-weight: 700;
    color: ${({ theme }) => theme.text_primary};
    letter-spacing: 0.01em;
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`

const Company = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.primary};
    opacity: 0.85;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const DateLocation = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 3px;
`

const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + "cc"};
    font-family: 'Fira Code', monospace;
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`

const Location = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
    display: flex;
    align-items: center;
    gap: 4px;
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`

const Skills = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;
    margin-top: -4px;
`

const ItemWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`

const Skill = styled.div`
    font-size: 12px;
    font-weight: 500;
    color: ${({ theme }) => theme.primary};
    background: rgba(0, 201, 255, 0.08);
    border: 1px solid rgba(0, 201, 255, 0.2);
    border-radius: 20px;
    padding: 3px 10px;
    letter-spacing: 0.02em;
    @media only screen and (max-width: 768px){
        font-size: 11px;
        padding: 2px 8px;
    }
`

const ExperienceCard = ({ experience }) => {
    const { t } = useTranslation();
    const role = t(`experience.items.${experience.id}.role`, { defaultValue: experience.role });
    const desc = t(`experience.items.${experience.id}.desc`, { defaultValue: experience.desc });

    return (
        <Card>
            <Top>
                <Image src={experience.img} />
                <Body>
                    <Role>{role}</Role>
                    <Company>{experience.company}</Company>
                    <DateLocation>
                        <Date>{experience.date}</Date>
                        {experience.location && (
                            <Location>
                                <FaMapMarkerAlt size={10} />
                                {experience.location}
                            </Location>
                        )}
                    </DateLocation>
                </Body>
            </Top>
            <Description>
                {desc && <Span>{desc}</Span>}
                {experience?.skills &&
                    <>
                        <br />
                        <Skills>
                            <ItemWrapper>
                                {experience?.skills?.map((skill, index) => (
                                    <Skill key={index}>{skill}</Skill>
                                ))}
                            </ItemWrapper>
                        </Skills>
                    </>
                }
            </Description>
            {experience.doc &&
                <a href={experience.doc} target="new">
                    <Document src={experience.doc} />
                </a>
            }
        </Card>
    )
}

export default ExperienceCard
