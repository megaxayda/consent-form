import styled from '@emotion/styled';
import React from 'react';

export default function RegisterPage() {
  return (
    <Wrapper>
      <StyledP>
        You understand that by using the site or site services, you agree to be bound by
        this agreement. If you do not accept this agreement in its entirety, you must not
        access or use the site or the site services.
      </StyledP>
      <p>
        Do you agree to this agreement? Please respond by saying &ldquo;Yes&ldquo; or
        &ldquo;No&ldquo;.
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 522px;
  margin: auto;
`;

const StyledP = styled.p`
  margin-top: 60px;
`;
