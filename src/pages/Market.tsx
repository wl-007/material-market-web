import { useState } from 'react';
import './market.less';
import { Radio, Space, Table, Tag } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}
import type { TableProps } from 'antd';
import { Button, message, Upload } from 'antd';
import type { GetProp, UploadFile, UploadProps } from 'antd';
type ColumnsType<T extends object> = TableProps<T>['columns'];

function Market() {

  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags: string[]) => (
        <span>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  return (
    <>
      <Upload action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload" directory>
				<Button icon={<UploadOutlined />}>Upload Directory</Button>
			</Upload>
      <Table columns={columns} pagination={{ position: ['bottomRight'] }} dataSource={data} />
    </>
  );
}

export default Market;
