import styled from "styled-components";

export const AppContainer = styled.div`
  width: max(100vw, 586px);
  height: calc(0.625 * max(100vw, 586px));
  border: 2px solid red;
  display: grid;
  grid-template:
    "area-1 area-2 area-3" 1fr
    "area-4 area-5 area-6" 1fr
    "area-7 area-8 area-9" 1fr
    / 1fr 1fr 1fr;
  grid-gap: 2px;
  background: var(--color-green0);
  justify-items: stretch;
  align-items: stretch;
  justify-content: center;
`;
