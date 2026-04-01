import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    width: 280px;
    background-color: ${({ theme }) => theme.card};
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
    overflow: hidden;
    padding: 24px 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
        filter: brightness(1.1);
    }
`

const CardTitle = styled.div`
    font-size: 16px;
    font-weight: 700;
    color: ${({ theme }) => theme.primary};
    text-transform: uppercase;
    letter-spacing: 1px;
`

const Divider = styled.hr`
    border: none;
    border-top: 1px solid ${({ theme }) => theme.text_secondary + 20};
    margin: 4px 0;
`

const Row = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`

const Label = styled.span`
    font-size: 12px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary + 80};
    text-transform: uppercase;
    letter-spacing: 0.5px;
`

const Value = styled.span`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary};
`

const SegmentCard = ({ label, segment }) => {
    if (!segment) return null;
    return (
        <Card>
            <CardTitle>{label}</CardTitle>
            <Divider />
            <Row>
                <Label>Segment Index</Label>
                <Value>#{segment.segment_index}</Value>
            </Row>
            <Row>
                <Label>Latitude</Label>
                <Value>{segment.latitude != null ? segment.latitude.toFixed(6) : 'N/A'}°</Value>
            </Row>
            <Row>
                <Label>Longitude</Label>
                <Value>{segment.longitude != null ? segment.longitude.toFixed(6) : 'N/A'}°</Value>
            </Row>
        </Card>
    )
}

export default SegmentCard
