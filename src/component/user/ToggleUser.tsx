import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { UserInfo } from '../../interface/interface';
import { selectedUser } from '../../atom/atom';

const ToggleUser = ({ userId, userName }: UserInfo) => {
  const [selectedId, setSelectedId] = useRecoilState(selectedUser);

  return (
    <>
      {selectedId == userId ? (
        <>
          <NowUser>{userName}</NowUser>
        </>
      ) : (
        <CounterPart onClick={() => setSelectedId(userId)}>
          {userName}
        </CounterPart>
      )}
    </>
  );
};

const NowUser = styled.div`
  font-size: 30px;
  margin-left: 15%;
`;
const CounterPart = styled.div`
  font-size: 20px;
  margin-left: 15%;
  opacity: 0.5;
`;

export default ToggleUser;
