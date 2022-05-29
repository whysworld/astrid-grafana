import React, { useState } from 'react';
import Showcase, { ShowcaseInterface } from '../Showcase/Showcase';
interface Props {
  data: ShowcaseInterface[];
}
const ShowcaseGroup: React.FC<Props> = ({ data }) => {
  const [selection, setSelection] = useState<string>('');
  const onChange = (value: string) => {
    console.log(value);
    setSelection(value.split('|')[0]);
  };
  return (
    <div
      className="showcase-group"
      style={{ gridTemplateColumns: `repeat(${data.length}, minmax(0px, 1fr))`, padding: 30 }}
    >
      {data.map((item) => (
        <Showcase
          className={selection === item.id ? 'showcase-selected' : ''}
          key={item.id}
          {...item}
          onChange={onChange}
        />
      ))}
    </div>
  );
};
export default ShowcaseGroup;
