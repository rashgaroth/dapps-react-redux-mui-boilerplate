//use your unit testing
import renderer from 'react-test-renderer';
import NavbarComponent from '../index';

it('Describe Navbar.js Tests', () => {
  const component = renderer.create(<NavbarComponent />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
