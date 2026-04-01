import React from 'react'
import styled from 'styled-components'
import SegmentCard from '../Cards/SegmentCard'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 40px 0px 80px 0px;
`

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1100px;
    gap: 24px;
`

const Title = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    @media only screen and (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 28px;
    flex-wrap: wrap;
`

const RouteSegments = ({ simulationData }) => {
    if (!simulationData || !simulationData.segments || simulationData.segments.length === 0) return null;

    const segments = simulationData.segments;
    const firstSegment = segments[0];
    const middleSegment = segments[Math.floor((segments.length - 1) / 2)];
    const lastSegment = segments[segments.length - 1];

    return (
        <Container id="route-segments">
            <Wrapper>
                <Title>Route Segments</Title>
                <CardContainer>
                    <SegmentCard label="Start Point" segment={firstSegment} />
                    <SegmentCard label="Midpoint" segment={middleSegment} />
                    <SegmentCard label="End Point" segment={lastSegment} />
                </CardContainer>
            </Wrapper>
        </Container>
    )
}

export default RouteSegments
