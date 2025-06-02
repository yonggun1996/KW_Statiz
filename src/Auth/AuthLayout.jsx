import styled from 'styled-components';
import kwLogo from '../assets/kw_logo.png';

const AuthLayout = () => {
  return (
    <Container>
      <LogoWrapper>
        <Logo src={kwLogo} alt="KW Logo" />
      </LogoWrapper>
      <AuthForm>
        <Input 
          type="text" 
          placeholder="등번호를 입력하세요"
        />
        <Input 
          type="text" 
          placeholder="이름을 입력하세요"
        />
        <AuthButton>인증하기</AuthButton>
      </AuthForm>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #ffffff;
`;

const LogoWrapper = styled.div`
  margin-bottom: 40px;
`;

const Logo = styled.img`
  width: 200px;
  height: auto;
`;

const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  gap: 16px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  
  &:focus {
    border-color: #666;
  }
`;

const AuthButton = styled.button`
  padding: 12px;
  background-color: #000;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 8px;
  
  &:hover {
    background-color: #333;
  }
`;

export default AuthLayout;