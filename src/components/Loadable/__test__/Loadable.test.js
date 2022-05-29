//use your unit testing
import renderer from 'react-test-renderer';
import LoadableComponent from '../index';

it('Describe Loadable.js Tests', () => {
  const component = renderer.create(<LoadableComponent />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
