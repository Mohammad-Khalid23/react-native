/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @emails oncall+react_native
 * @flow
 */

'use strict';

const React = require('react');
const LogBoxInspectorHeader = require('../LogBoxInspectorHeader').default;
const render = require('../../../../jest/renderer');

describe('LogBoxInspectorHeader', () => {
  it('should render no buttons for one total', () => {
    const output = render.shallowRender(
      <LogBoxInspectorHeader
        onSelectIndex={() => {}}
        selectedIndex={0}
        total={1}
      />,
    );

    expect(output).toMatchSnapshot();
  });

  it('should render one left button for two total, right selected', () => {
    const output = render.shallowRender(
      <LogBoxInspectorHeader
        onSelectIndex={() => {}}
        selectedIndex={1}
        total={2}
      />,
    );

    expect(output).toMatchSnapshot();
  });

  it('should render two buttons for three total, middle selected', () => {
    const output = render.shallowRender(
      <LogBoxInspectorHeader
        onSelectIndex={() => {}}
        selectedIndex={0}
        total={1}
      />,
    );

    expect(output).toMatchSnapshot();
  });

  it('should render one right button for two total, left selected', () => {
    const output = render.shallowRender(
      <LogBoxInspectorHeader
        onSelectIndex={() => {}}
        selectedIndex={0}
        total={2}
      />,
    );

    expect(output).toMatchSnapshot();
  });
});
