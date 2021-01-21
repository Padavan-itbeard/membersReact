import propTypes from 'prop-types';

const Member = ({ email, picture, name, location }) =>
  <div className="member">
    <img src={picture.thumbnail} alt="" />
    <h1>{name.first} {name.last}</h1>
    <p><a href={"mailto:" + email}>{email}</a></p>
    <p>{location.city}, {location.state}</p>
  </div>

export default Member;

Member.propTypes = {
  email: propTypes.string,
  picture: propTypes.string,
  name: propTypes.string,
  location: propTypes.string,
}