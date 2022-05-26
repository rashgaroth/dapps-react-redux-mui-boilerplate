//use your unit testing
import renderer from 'react-test-renderer';
import TextFieldComponent from '../index';

it('Describe TextField.js Tests', () => {
  const component = renderer.create(<TextFieldComponent />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
