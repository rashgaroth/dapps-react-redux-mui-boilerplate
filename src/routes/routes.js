import { useRoutes } from 'react-router-dom';
import config from '../config';
import MAIN_ROUTES from './MainRoute';

export default function RenderRoutes() {
  return useRoutes([...MAIN_ROUTES], config.basename);
}
