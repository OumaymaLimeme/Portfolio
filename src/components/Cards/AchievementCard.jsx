import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

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
    flex-shrink: 0;
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
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
        filter: brightness(1.1);
    }
    &:hover ${Button} {
        display: block;
    }
`

const Image = styled.img`
    width: 100%;
    height: 180px;
    flex-shrink: 0;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
`

const Details = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 0px 2px;
    overflow: hidden;
`

const Title = styled.div`
    font-size: 18px;
    font-weight: 600;
    flex-shrink: 0;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`

const Date = styled.div`
    font-size: 12px;
    flex-shrink: 0;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
`

const Description = styled.div`
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 99};
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`

const Tags = styled.div`
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`

const Tag = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: hsla(213, 84%, 58%, 0.884);
    background-color: ${({ theme }) => theme.primary + 15};
    padding: 2px 8px;
    border-radius: 10px;
`

const AchievementCard = ({ achievement, setOpenModal }) => {
    const { t } = useTranslation()
    const title = t(`achievements.items.${achievement.id}.title`, { defaultValue: achievement.title })
    const description = t(`achievements.items.${achievement.id}.description`, { defaultValue: achievement.description })

    return (
        <Card onClick={() => setOpenModal({ state: true, achievement })}>
            <Image src={achievement.image} alt={title} />
            <Details>
                <Title>{title}</Title>
                <Date>{achievement.date}</Date>
                <Description>{description}</Description>
            </Details>
            <Tags>
                {achievement.tags?.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                ))}
            </Tags>
            <Button>{t('achievements.readMore', { defaultValue: 'Read More' })}</Button>
        </Card>
    )
}

export default AchievementCard
