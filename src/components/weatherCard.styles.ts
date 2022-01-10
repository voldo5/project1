import styled from "styled-components";

export const CardContainer = styled.div`
  grid-area: card1;
  width: clamp(192px, 50vw, 320px);
  height: clamp(120px, 32vw, 200px);
  cursor: pointer;
  border-radius: 2px;
  display: grid;
  grid-template:
    "wicon wicon condition condition condition condition" 1fr
    "wicon wicon place place place place" 1fr
    "temperature temperature temperature date1 date1 date1" 0.9fr
    "temperature temperature temperature date2 date2 date2" 0.9fr
    "hicon hval picon pval sicon sval" 0.7fr
    "hicon hval picon pval sicon sval" 0.7fr
    / 1fr 1.5fr 1fr 1.5fr 1fr 1.5fr;
  grid-gap: 0px;
  background: var(--color-grey-light);
`;

export const WeatherIcon = styled.div`
  grid-area: wicon;
  border-top-left-radius: 2px;
  font-family: weathericons;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: clamp(1.6rem, -0.875rem + 8.333vw, 2.6rem);
`;

export const WeatherCondition = styled.div`
  grid-area: condition;
  text-transform: uppercase;
  font-size: clamp(0.8rem, -0.875rem + 7.333vw, 1.2rem);
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const Place = styled.div`
  grid-area: place;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  font-size: clamp(0.7rem, -0.775rem + 7.333vw, 1.1rem);
`;

export const Temperature = styled.div`
  grid-area: temperature;
  color: var(--color-grey-light);
  background: var(--color-dark1);
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: clamp(1rem, -0.875rem + 8.333vw, 2rem);
`;

export const CalendarDate1 = styled.div`
  grid-area: date1;
  background: var(--color-green3);
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  color: var(--color-grey-light);
  font-size: clamp(0.7rem, -0.8rem + 6vw, 1.1rem);
  font-weight: 600;
`;

export const CalendarDate2 = styled(CalendarDate1)`
  grid-area: date2;
  align-items: flex-start;
  font-size: clamp(0.7rem, -0.8rem + 5vw, 1.1rem);
`;

export const HumidityIcon = styled.div`
  grid-area: hicon;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: var(--color-green3);
  font-size: clamp(0.7rem, -0.8rem + 5vw, 1.1rem);
  font-weight: 600;
  padding-left: 4px;
`;

export const HumidityValue = styled.div`
  grid-area: hval;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: var(----color-dark1);
  font-size: clamp(0.7rem, -0.8rem + 5vw, 1rem);
  font-weight: 400;
`;

export const PressureIcon = styled(HumidityIcon)`
  grid-area: picon;
`;

export const PressureValue = styled(HumidityValue)`
  grid-area: pval;
`;

export const WindIcon = styled(HumidityIcon)`
  grid-area: sicon;
`;

export const WindValue = styled(HumidityValue)`
  grid-area: sval;
`;
