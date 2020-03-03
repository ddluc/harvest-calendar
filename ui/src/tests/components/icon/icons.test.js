import React from 'react';
import ExitIcon from '../../../components/icons/exit';
import PeakIcon from '../../../components/icons/peak';
import PhoneIcon from '../../../components/icons/phoneRotate';
import { shallow } from 'enzyme';

describe('ExitIcon', () => {
  it('should render', () => {
    let wrapper = shallow(<ExitIcon />);
    expect(wrapper.find('.icon'));
    expect(wrapper.find('svg'));
  });
});

describe('PeakIcon', () => {
  it('should render', () => {
    let wrapper = shallow(<PeakIcon />);
    expect(wrapper.find('.icon'));
    expect(wrapper.find('svg'));
  });
});

