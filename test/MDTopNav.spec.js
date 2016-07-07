import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import { createRenderer } from 'react-addons-test-utils';
import MDTopNav from 'src/MDTopNav';

expect.extend(expectJSX);

describe('MDTopNav', () => {

  describe('default case', () => {

    let wrapper;

    before(() => {
      wrapper = shallow(<MDTopNav />);
    });

    it('should have no default props', () => {
      expect(Object.keys(wrapper.props()).length).toEqual(3);
    });

    it('should have a default logo', () => {
      expect(wrapper.find('img').length).toEqual(1);
    });

    it('should not have items', () => {
        wrapper
          .childAt(0)
          .childAt(1)
          .children()
          .forEach(node => expect(node.type()).toBe(null));
    });

  });

  describe('with items, without urls', () => {

    let wrapper;

    before(() => {
      wrapper = shallow(
        <MDTopNav
          items={['test1', 'test2']}
        />
      );
    });

    it('should render divs if given only items', () => {
      const itemList = wrapper
        .childAt(0)
        .childAt(1)
        .children();

      expect(itemList.length).toBe(2);

      itemList
        .children()
        .forEach(node => expect(node.type()).toBe('div'));
      itemList
        .children()
        .forEach(node => expect(node.type().toBe(null)));
    });

  });

  describe('with both items and urls', () => {

    let wrapper;

    before(() => {
      wrapper = shallow(
        <MDTopNav
          items={['test1', 'test2']}
          urls={['#', '#']}
        />
      );
    })

    it('should render links if given both items and urls', () => {
      const itemList = wrapper
        .childAt(0)
        .childAt(1)
        .children();

      itemList.forEach(node => {
        expect(node.childAt(0).type()).toBe('a');
      })
    })

    it('should render error message if items and urls do not match', () => {
      const wrongWrapper = shallow(
        <MDTopNav
          items={['test1', 'test2']}
          urls={['#']}
        />
      );
      expect(wrongWrapper.text()).toInclude('don\'t match');
    })

  });

});
