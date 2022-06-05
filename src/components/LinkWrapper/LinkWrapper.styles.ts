import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  top: var(--medium);
  right: var(--medium);
  z-index: 1100;
  color: var(--white);
  cursor: pointer;

  svg {
    transition: all 0.3s ease;
  }

  &:hover {
    svg {
      color: var(--highlight);
    }
  }
`
