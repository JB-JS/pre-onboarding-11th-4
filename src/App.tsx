import styled from '@emotion/styled';
import Search from './components/Search';

function App() {
  return (
    <Root>
      <Search />
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background: #e0f1f9;

  h2 {
    margin-bottom: 40px;
    font-size: 2.125rem;
    line-height: 1.6;
  }
`;

export default App;
