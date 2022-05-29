import React, { useState } from 'react';
export interface ShowcaseInterface {
  title: string;
  className?: string;
  value1?: number;
  value2?: number;
  id: string;
}
interface Props {
  title: string;
  className?: string;
  value1?: number;
  value2?: number;
  id: string;
  onChange: (selection: string) => void;
}

const Showcase: React.FC<Props> = ({ title, className, id, onChange, value1, value2 }) => {
  const [selection, setSelection] = useState<string>('');

  const onItemSelect = (item: string) => {
    onChange(item);
    setSelection(item);
  };
  return (
    <div className={className ? `${className} showcase` : 'showcase'}>
      <div className="showcase-title">{title}</div>
      <div
        className={value1 && value2 ? 'showcase-content-wrapper justify-content-between' : 'showcase-content-wrapper'}
      >
        {value1 && (
          <div
            className={
              selection === `${id}|1`
                ? 'showcase-item-first showcase-item showcase-item-selected'
                : 'showcase-item-first showcase-item'
            }
            onClick={() => onItemSelect(`${id}|1`)}
          >
            {value1}
          </div>
        )}
        {value2 && (
          <div
            className={
              selection === `${id}|2`
                ? 'showcase-item-second showcase-item showcase-item-selected'
                : 'showcase-item-second showcase-item'
            }
            onClick={() => onItemSelect(`${id}|2`)}
          >
            {value2}
          </div>
        )}
      </div>
    </div>
  );
};

export default Showcase;
