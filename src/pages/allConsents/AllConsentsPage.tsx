import { StyledH1 } from 'layouts/HomeLayout';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectConsents } from 'selectors/consentSelector';

import { HeadText, StyledTh, Wrapper } from './AllConsentsPage.style';
import ConsentRow from './ConsentRow';

export default function AllConsentsPage() {
  const consents = useSelector(selectConsents);

  return (
    <Wrapper>
      <StyledH1>All Consents</StyledH1>

      <table>
        <thead>
          <tr>
            <StyledTh>
              <HeadText>Details</HeadText>
            </StyledTh>
            <th>
              <HeadText>Consent Given</HeadText>
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.values(consents).map((e, index) => (
            <ConsentRow key={index} consentInfo={e} />
          ))}
        </tbody>
      </table>
    </Wrapper>
  );
}
