import React from 'react';
import App from '../../components/App';
import Calendar from '../../components/calendar/Calendar';
import Sidebar from '../../components/sidebar/Sidebar';
import { shallow } from 'enzyme';



describe('App', () => {

  it('should render the app', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeDefined();
    expect(wrapper.find('.app')).toBeTruthy();
    expect(wrapper.find('.acknowledgement')).toBeTruthy();
  })

  it('should render the calendar', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Calendar />)).toBeTruthy();
  });

  it('should render the calendar', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Sidebar />)).toBeTruthy();
  });


});
