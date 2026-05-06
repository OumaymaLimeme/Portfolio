import React, { useRef } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

const ImageOverlay = styled.div`
    position: absolute;
    inset: 0;
    background: rgba(0, 201, 255, 0.12);
    backdrop-filter: blur(1px);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 10px;
`

const ImageWrapper = styled.div`
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    width: 100%;
    height: 180px;
`

const Image = styled.img`
    width: 100%;
    height: 180px;
    background-color: ${({ theme }) => theme.white};
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
    display: block;
    object-fit: cover;
    transition: transform 0.4s ease;
`

const NumberBadge = styled.div`
    position: absolute;
    top: 14px;
    right: 14px;
    font-size: 11px;
    font-weight: 700;
    color: ${({ theme }) => theme.primary};
    opacity: 0.45;
    font-family: 'Fira Code', 'Courier New', monospace;
    letter-spacing: 0.05em;
    line-height: 1;
    pointer-events: none;
`

const Button = styled.button`
    display: none;
    width: 100%;
    padding: 10px;
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.text_black};
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.8s ease-in-out;
`

const Card = styled.div`
    width: 340px;
    height: 490px;
    background-color: ${({ theme }) => theme.card};
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
    overflow: hidden;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    position: relative;
    transition: transform 0.15s ease, box-shadow 0.4s ease-in-out;
    will-change: transform;

    &:hover {
        box-shadow: 0 0 40px 4px rgba(0,0,0,0.55), 0 0 0 1px rgba(0, 201, 255, 0.15);
    }

    &:hover ${ImageOverlay} {
        opacity: 1;
    }

    &:hover ${Image} {
        transform: scale(1.04);
    }

    &:hover ${Button} {
        display: block;
    }

    &:hover ${NumberBadge} {
        opacity: 0.8;
    }

    @media (max-width: 480px) {
        width: 100%;
        height: auto;
        padding: 18px 16px;
    }
`

const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`

const Tag = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: hsla(213, 84%, 58%, 0.884);
    background-color: ${({ theme }) => theme.primary + "15"};
    padding: 2px 8px;
    border-radius: 10px;
`

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`

const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`

const Date = styled.div`
    font-size: 12px;
    margin-left: 2px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + "80"};
    font-family: 'Fira Code', monospace;
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`

const Description = styled.div`
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + "99"};
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`

const Members = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
`

const Avatar = styled.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin-left: -10px;
    background-color: ${({ theme }) => theme.white};
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    border: 3px solid ${({ theme }) => theme.card};
`

const ProjectCards = ({ project, setOpenModal, index }) => {
    const { t } = useTranslation();
    const title = t(`projects.items.${project.id}.title`, { defaultValue: project.title });
    const description = t(`projects.items.${project.id}.description`, { defaultValue: project.description });
    const num = String((index ?? 0) + 1).padStart(2, '0');
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateY = ((x / rect.width) - 0.5) * 14;
        const rotateX = (0.5 - (y / rect.height)) * 14;
        cardRef.current.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`;
    };

    const handleMouseLeave = () => {
        if (cardRef.current) {
            cardRef.current.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)`;
        }
    };

    return (
        <Card
            ref={cardRef}
            onClick={() => setOpenModal({ state: true, project: project })}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <NumberBadge>{num} / {String(11).padStart(2, '0')}</NumberBadge>
            <ImageWrapper>
                <Image src={project.image} />
                <ImageOverlay>view project →</ImageOverlay>
            </ImageWrapper>
            <Tags>
                {project.tags?.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                ))}
            </Tags>
            <Details>
                <Title>{title}</Title>
                <Date>{project.date}</Date>
                <Description>{description}</Description>
            </Details>
            <Members>
                {project.member?.map((member, i) => (
                    <Avatar key={i} src={member.img} />
                ))}
            </Members>
        </Card>
    )
}

export default ProjectCards
