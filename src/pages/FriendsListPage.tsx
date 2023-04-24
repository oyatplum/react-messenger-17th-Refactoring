import styled from 'styled-components';
import userList from '../json/users.json';
import { useState } from 'react';
import NotSearch from '../component/friends/notSearch';
import Search from '../component/friends/search';

const FriendsListPage = () => {
  const [isSearch, setSearch] = useState(false);

  return (
    <Container>
      <div className="header">
        <Friends>친구</Friends>
        <SearchImage
          src={`/images/search.png`}
          onClick={() => setSearch(!isSearch)}
        />
      </div>

      <SearchBox>{isSearch ? <Search /> : <NotSearch />}</SearchBox>
    </Container>
  );
};

const Container = styled.div`
  .header {
    display: flex;
  }
`;
const Friends = styled.div`
  font-size: 1.5rem;
  margin: 2rem 0 1rem 1rem;
`;
const SearchImage = styled.img`
  width: 1.2rem;
  height: 1.2rem;
  margin: 1.9rem 0 1rem 11rem;

  :hover {
    filter: opacity(40%);
    cursor: pointer;
  }
`;
const SearchBox = styled.div``;
const User = styled.div`
  display: flex;
  align-items: center;

  :hover {
    background-color: #e6e6e6;
    cursor: pointer;
  }
  .text {
    display: block;
    margin: 1.1rem 0 0 0.5rem;
    height: 3rem;
  }
`;
const MyImage = styled.img`
  margin: 0.5rem 0 0.5rem 1rem;
  height: 3.2rem;
  width: 3.2rem;
  border-radius: 1.2rem;
`;
const MyName = styled.div`
  font-size: 1rem;
`;
const Message = styled.div`
  font-size: 0.75rem;
  padding: 0.2rem 0 0 0.1rem;
  color: #4d4d4d;
`;
const Line = styled.div`
  border-top: 1px solid #cccccc;
  margin: 0.2rem 1rem 0 1rem;

  div {
    font-size: 0.7rem;
    padding: 0.5rem 0 0.5rem 0.5rem;
  }
`;
const PartImage = styled.img`
  margin: 0.5rem 0 0.5rem 1rem;
  height: 2.7rem;
  width: 2.7rem;
  border-radius: 1rem;
`;
const PartName = styled.div`
  font-size: 0.85rem;
`;
export default FriendsListPage;
