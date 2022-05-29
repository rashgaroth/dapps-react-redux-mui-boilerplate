//use your unit testing
import renderer from 'react-test-renderer';
import LoaderComponent from '../index';

it('Describe Loader.js Tests', () => {
  const component = renderer.create(<LoaderComponent />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
