import { ROUTE } from 'constants/routes';
import React from 'react';
import { MdPlaylistAddCheck } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { GreyButton, Wrapper } from './ConsentSuccessPage.style';

export default function ConsentSuccessPage() {
  return (
    <Wrapper>
      <GreyButton>
        <MdPlaylistAddCheck />
      </GreyButton>
      <p>Thank you, your consent has been successfully saved!</p>
      <Link to={ROUTE.ROOT + ROUTE.CONSENTS}>View all consents</Link>
    </Wrapper>
  );
}
