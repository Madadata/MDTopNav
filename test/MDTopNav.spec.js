import React from 'react';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import { createRenderer } from 'react-addons-test-utils';
import MDTopNav from 'src/MDTopNav';

expect.extend(expectJSX);

describe('MDTopNav', () => {
  it('should work', () => {
    const renderer = createRenderer();
    renderer.render(
      <MDTopNav />
    );
    const actualElement = renderer.getRenderOutput();
  });
});
