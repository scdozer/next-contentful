import { useRouter } from 'next/router';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  // left: calc(50vw - 100px);
  top: 0;
  width: 100vw;
  // height: 0px;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Banner = styled.div`
  padding: 10px 16px;
  background-color: gold;
  color: black;
  width: auto;
  @supports (backdrop-filter: blur(20px)) {
    backdrop-filter: blur(20px);
    background: rgba(0, 0, 0, 0.5);
  }
  a {
    color: white;
    text-decoration: underline;
  }
`;

export default function PreviewBanner() {
  const router = useRouter();
  const path = `/api/v2/${router?.asPath}`;
  const exitUrl = `/api/exit-preview?redirect=${path}`;
  return (
    <Container>
      <Banner>
        PREVIEW MODE <a href={exitUrl}>EXIT</a>
      </Banner>
    </Container>
  );
}
