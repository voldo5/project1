import styled from "styled-components";

// export const ColumnContainer = styled.div``;

// export const Column = styled.div``;

// export const ColumnTitle = styled.div``;

//WeatherDetails
//height: 400px;
//width: 650px;
//  height: minmax(120px, 200px);
//  width: minmax(192px, 320px);
//height: clamp(120px, 36vw, 200px);
export const Widget = styled.article`
  display: flex;
  width: clamp(192px, 50vw, 320px);
  min-width: 192px;
  max-width: 320px;
  height: calc(1.6 * width);
  flex-wrap: wrap;
  cursor: pointer;
  border-radius: 20px;
  box-shadow: 0 27px 55px 0 rgba(0, 0, 0, 0.3),
    0 17px 17px 0 rgba(0, 0, 0, 0.15);
`;

//font-size: 100px;
export const WeatherIcon = styled.div`
  flex: 1 100%;
  height: 50%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background: #fafafa;
  font-family: weathericons;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: clamp(1.6rem, -0.875rem + 8.333vw, 2.6rem);
`;

//flex: 0 0 56%;
export const WeatherDescription = styled.div`
  flex: 0 0 100%;
  justify-content: space-around;
  justify-items: center;
  height: 40%;
  background: var(----color-dark1);
  display: flex;
  align-items: center;
  color: white;
`;
//  font-size: calc(16px + 6 * ((100vw - 320px) / 680));
//font-size: 65px;
//font-size: 300%;
//font-size: clamp(1rem, -0.875rem + 8.333vw, 3.5rem);
//font-size: clamp(2rem, 10vw, 5rem);
//  text-alight: center;
//  margin-left: 10px;
export const Temperature = styled.div`
  flex: 0 0 56%;
  width: 100%;
  height: 100%;
  font-size: clamp(1rem, -0.875rem + 8.333vw, 2rem);
  display: flex;
  justify-content: space-around;
`;
//font-size: 30px;
export const CalendarDate = styled.div`
  flex: 0 0 44%;
  height: 40%;
  background: var(--color-green3);
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  font-size: clamp(0.8rem, -0.8rem + 6vw, 1.2rem);
  font-weight: 600;
  text-align: center;
`;

export const Description = styled.div`
  flex: 0 60%;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  text-align: center;
`;

//font-size: 35px;
export const WeatherCondition = styled.div`
  text-transform: uppercase;

  font-size: clamp(0.8rem, -0.875rem + 8.333vw, 1.2rem);
  font-weight: 100;
`;

//font-size: 15px;
export const Place = styled.div`
  font-size: clamp(0.8rem, -0.875rem + 8.333vw, 1.2rem);
`;

//font-size: 25px;
export const ExtraTemp = styled.div`
  flex: 1 100%;
  padding: 5% 0;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background: #fafafa;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  align-items: center;
  font-size: 100px;
  .w-icon {
    font-size: clamp(0.8rem, -0.6rem + 6vw, 1.6rem);
    font-weight: 600;
  }
  .extra-info {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    text-align: center;
    align-items: center;
    color: var(--color-green3);
    /* background-color: blanchedalmond; */
  }
`;

export const TwoSidedSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  text-align: center;
  align-items: center;
  color: var(--color-green3);
  /* background-color: blanchedalmond; */
`;

//font-size: 15px;
export const ExtraInfoLeftSide = styled.p`
  text-align: left;
  font-weight: 600;
  text-transform: capitalize;
  color: var(--color-dark1);

  font-size: clamp(0.6rem, -1rem + 5vw, 1.1rem);
`;

// interface ExtraInfoLeftSideProps {
//   value: number;
//   info: string;
// }
// export const ExtraInfoLeftSide = styled.p<ExtraInfoLeftSideProps>`
//   ${(props) => props.value} <br />
// 	  ${(props) => props.info}
// `;
