import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { useSessionStorage } from '../src';
import ShowDocs from './util/ShowDocs';

const Demo = () => {
  const [value, setValue] = useSessionStorage('hello-key', 'foo');
  const [removableValue, setRemovableValue, remove] = useSessionStorage('removable-key');

  return (
    <div>
      <div>Value: {value}</div>
      <button onClick={() => setValue('bar')}>bar</button>
      <button onClick={() => setValue('baz')}>baz</button>
      <br />
      <br />
      <div>Removable Value: {removableValue}</div>
      <button onClick={() => setRemovableValue('foo')}>foo</button>
      <button onClick={() => setRemovableValue('bar')}>bar</button>
      <button onClick={() => remove()}>Remove</button>
    </div>
  );
};

storiesOf('Side effects/useSessionStorage', module)
  .add('Docs', () => <ShowDocs md={require('../docs/useSessionStorage.md')} />)
  .add('Demo', () => <Demo />);
