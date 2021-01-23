import propTypes from 'prop-types';
import { css } from '@emotion/react';


const Member = ({ email, picture, name, location }) =>
  <div
    css={css`
      flex-basis: calc(25% - 2px - 0.5em);
      @media screen and (max-width: 1200px) {
        flex-basis: calc(33.3334% - 2px - 0.5em);
      }
      @media screen and (max-width: 800px) {
        flex-basis: calc(50% - 2px - 0.5em);
      }
      @media screen and (max-width: 500px) {
        flex-basis: calc(100% - 2px - 0.5em);
      }
      margin: 0.25em;
      border: 1px solid #ededed;
      background-color: #d7d7d7;
    `}
  >
    <div
      css={css`
        display: flex;
      `}
    > 
      <div css={css`display: flex; flex-direction: column; height: 100%;`}>
        <img src={picture.large} alt="" />
      </div>
      <div css={css`
        flex-grow: 1;
        text-align: center;
      `}>
        <h1>{name.first} {name.last}</h1>
        <p><a href={"mailto:" + email}>{email}</a></p>
        <p>{location.city}, {location.state}</p>
      </div>
    </div>
  </div>

export default Member;

Member.propTypes = {
  email: propTypes.string,
  picture: propTypes.string,
  name: propTypes.string,
  location: propTypes.string,
}