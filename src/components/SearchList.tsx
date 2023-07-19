import styled from '@emotion/styled';
import { SearchItemType } from './Search';
import SearchItem from './SearchItem';

export default function SearchList({
  items,
  keyword,
}: {
  items: SearchItemType[];
  keyword: string;
}) {
  return (
    <Root>
      {!keyword ? (
        <Info>검색어 없음</Info>
      ) : (
        <>
          <SubTitle>추천 검색어</SubTitle>
          {items.length === 0 ? (
            <Info>검색어 없음</Info>
          ) : (
            items.map((item, idx) => (
              <SearchItem
                key={item.sickCd}
                item={item}
                keyword={keyword}
                tabIndex={0}
              />
            ))
          )}
        </>
      )}
    </Root>
  );
}

const Root = styled.div`
  padding: 25px;
  border-radius: 15px;
  margin-top: 15px;
  background: #fff;
  box-shadow: 0px 0px 5px #ccc;
  text-align: left;
`;

const Info = styled.p`
  color: #ccc;
`;

const SubTitle = styled.p`
  color: #808080;
  font-size: 12px;
  margin-bottom: 15px;
`;
