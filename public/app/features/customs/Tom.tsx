import React, { useEffect, useState } from 'react';
import ShowcaseGroup from 'app/core/components/ShowcaseGroup/ShowcaseGroup';
import { ShowcaseInterface } from 'app/core/components/Showcase/Showcase';

import { merge, random } from 'lodash';

import { DataFrame, FieldType, GrafanaTheme, MutableDataFrame, FieldConfig } from '@grafana/data';
import { Table, useTheme } from '@grafana/ui';

function buildData(theme: GrafanaTheme, config: Record<string, FieldConfig>): DataFrame {
  const data = new MutableDataFrame({
    fields: [
      { name: 'Name/Age', type: FieldType.string, values: [] }, // The time field
      {
        name: 'Address',
        type: FieldType.string,
        values: [],
      },
      { name: 'Math Score', type: FieldType.number, values: [] },
      {
        name: 'English Score',
        type: FieldType.number,
        values: [],
      },
      {
        name: 'Physics Score',
        type: FieldType.number,
        values: [],
      },
    ],
  });

  for (const field of data.fields) {
    field.config = merge(field.config, config[field.name]);
  }

  for (let i = 0; i < 9; i++) {
    data.appendRow([
      `Tom / ${random(10, 100)}`,
      `New York No. ${random(0, 100)} Lake Park`,
      random(1, 100),
      random(1, 100),
      random(1, 100),
    ]);
  }
  console.log('table data: ', data);
  return { fields: data.fields, length: 9 };
}
interface Size {
  width: number;
  height: number;
}
const Tom = () => {
  const [size, setSize] = useState<Size>({ width: window.innerWidth - 120, height: window.innerHeight - 60 });
  const theme = useTheme();
  const dataTable = buildData(theme, {});
  const data: ShowcaseInterface[] = [
    {
      id: 'name',
      title: 'Name/Age',
      value1: 2124,
      value2: 4324,
    },
    {
      id: 'address',
      title: 'Address',
      value1: 8778,
    },
    {
      id: 'math',
      title: 'Math Score',
      value1: 8778,
    },
    {
      id: 'english',
      title: 'English Score',
      value1: 8778,
    },
    {
      id: 'physics',
      title: 'Physics Score',
      value1: 8778,
    },
  ];
  const resizeHanlder = () => {
    const width = window.innerWidth - 60;
    const height = window.innerHeight - 60;
    setSize({
      width: width,
      height: height,
    });
  };
  useEffect(() => {
    window.onresize = resizeHanlder;

    // You can also use:
    // window.addEventListener('resize', myHandlerFunction);
  }, []);
  return (
    <>
      <ShowcaseGroup data={data} />
      <div className="grafana-table-wrapper" style={{ padding: 30 }}>
        <div className="grafana-table-title-wrapper">
          <div className="grafana-table-title">Profile</div>
        </div>
        <Table data={dataTable} height={500} width={size?.width || 1000} />
      </div>
    </>
  );
};

export default Tom;
