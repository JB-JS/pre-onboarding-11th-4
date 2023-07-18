import styled from '@emotion/styled';
import Search from './components/Search';

function App() {
  return (
    <Root>
      <div>
        <h2>
          국내 모든 임상시험 검색하고
          <br />
          온라인으로 참여하기
        </h2>
        <Search />
      </div>
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
