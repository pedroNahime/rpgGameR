import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import BounceMessage from '../components/BounceMessage'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });
describe('bounce component', () => {
    test('renders', () => {
        const wrapper = shallow(<BounceMessage message="Bora Começar Galerinha"/>);
        expect(wrapper.exists()).toBe(true)
    })
});