//use your unit testing
import renderer from 'react-test-renderer';
import SeoComponent from '../index';

it('Describe Seo.js Tests', () => {
  const component = renderer.create(<SeoComponent />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
