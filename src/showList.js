import React from 'react';
import { Table } from 'antd';
const { Column } = Table;
class ShowList extends React.Component {
    constructor (props) {//此处的props可以从父组件引入进来，当前静态页面写死state,哪个组件引入此组件，就传入props

        super(props);
        
        this.state = {
            dataSource : [
                {
                  key: '1',
                  positionName: 'ICBU-国际贸易事业部-海关运营专家(上海)',
                  address: '上海',
                  times:'1小时前'
                },
                {
                    key: '2',
                    positionName: '菜鸟-海外工程技术经理',
                    address: '杭州',
                    times:'1小时前'
                },
                {
                    key: '3',
                    positionName: '盒马-高级物流网络规划专家-上海',
                    address: '上海',
                    times:'1小时前'
                },
                {
                    key: '4',
                    positionName: '蚂蚁金服-产品体验专家(成都/杭州)',
                    address: '成都/杭州 ',
                    times:'1小时前'
                },
                {
                    key: '5',
                    positionName: 'ICBU-国际贸易事业部-政府事务高级专家(运营方向)',
                    address: '杭州',
                    times:'2小时前'
                }
              ]
        }
    }

    render() {
      return <div>
          <div style={{height:20}}><span style={{float:'left'}}>最新职位</span> <a href="#" style={{float:'right'}}>更多</a></div>
            <Table dataSource={this.state.dataSource} pagination={ false } showHeader={false}>
                <Column title="positionName" dataIndex="positionName" key="positionName" 
                    align="left"
                    render={(text, record) => (
                        <span>
                          <a href="#"> {record.positionName}</a>
                        </span>
                      )}
                />
                <Column title="address" dataIndex="address" key="address" align="center"/>
                <Column title="times" dataIndex="times" key="times" align="center"/>
            </Table>
      </div>;
    }
  }
  export default ShowList;