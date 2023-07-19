import styled from '@emotion/styled';
import { Fragment } from 'react';
import Icon from './Icon';
import { SearchItemType } from './Search';

export default function SearchItem({
  item,
  keyword,
  tabIndex,
}: {
  item: SearchItemType;
  keyword: string;
  tabIndex: number;
}) {
  return (
    <Root tabIndex={tabIndex}>
      <Icon name="Search" opts={{ width: '15px', height: '15px' }} />
      <div>
        {item.sickNm.map((text: string, idx: number) => (
          <Fragment key={idx}>
            {keyword === text ? <Mark>{text}</Mark> : text}
          </Fragment>
        ))}
      </div>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  justify-content: space-between
  align-items: center;
  gap: 0 10px;
  font-size: 14px;

  &:not(:first-of-type) {
    margin-top: 15px;
  }
`;

const Mark = styled.span`
  color: #000;
  font-weight: 900;
`;
