import { configure } from 'enzyme';
import ReactAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import { loadEnvConfig } from '@next/env';

const projectDir = process.cwd();
jest.setTimeout(30000);
loadEnvConfig(projectDir);
configure({ adapter: new ReactAdapter() });
