import React from 'react';
import EarlyIcon  from '../../../components/icons/early';
import ExitIcon from '../../../components/icons/exit';
import LateIcon from '../../../components/icons/late';
import PeakIcon from '../../../components/icons/peak';
import PhoneIcon from '../../../components/icons/phoneRotate';
import { shallow } from 'enzyme';

describe('EarlyIcon', () => {
  it('should render', () => {
    let wrapper = shallow(<EarlyIcon />);
    expect(wrapper.find('.icon'));
    expect(wrapper.find('svg'));
  });
});

describe('ExitIcon', () => {
  it('should render', () => {
    let wrapper = shallow(<ExitIcon />);
    expect(wrapper.find('.icon'));
    expect(wrapper.find('svg'));
  });
});

describe('LateIcon', () => {
  it('should render', () => {
    let wrapper = shallow(<LateIcon />);
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

describe('PhoneIcon', () => {
  it('should render', () => {
    let wrapper = shallow(<PhoneIcon />);
    expect(wrapper.find('.icon'));
    expect(wrapper.find('svg'));
  });
});
