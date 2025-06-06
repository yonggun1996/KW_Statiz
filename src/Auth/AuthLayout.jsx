import { useState } from 'react';
import styled from 'styled-components';
import kwLogo from '../assets/kw_logo.png';
import { authenticateUser } from './auth';

const AuthLayout = () => {
  const [backNumber, setBackNumber] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const authResult = await authenticateUser({ 
        backNumber: Number(backNumber), 
        name 
      });
      if (!authResult.success) {
        window.alert('킬러웨일즈 선수단이 아닙니다.')
        return
      } 

      window.alert('킬러웨일즈 선수단입니다.')
    } catch (error) {
      window.alert('인증 중 오류가 발생했습니다.')
      console.error('인증 오류:', error);
    }
  }
  
  return (
    <Container>
      <LogoWrapper>
        <Logo src={kwLogo} alt="KW Logo" />
      </LogoWrapper>
      <AuthForm onSubmit={handleSubmit}>
        <Input 
          type="number" 
          placeholder="등번호를 입력하세요"
          value={backNumber}
          onChange={(e) => setBackNumber(e.target.value)}
        />
        <Input 
          type="text" 
          placeholder="이름을 입력하세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <AuthButton type="submit">인증하기</AuthButton>
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