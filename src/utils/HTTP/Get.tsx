import React from 'react';
import axios from 'axios';

type tProps = {
  url: string;
  delay: number;
  loading: any;
  reload: any;
  error: any;
  children: (e:any[])=>any[]
}

type tState = {
  data: any[];
  component: any
}

class Get extends React.Component<tProps, tState> {
  constructor(props:tProps) {
    super(props);
    this.state = {
      data: [],
      component: this.props.loading || '',
    };
  }
  async componentDidMount() {
    const { url, delay, children, error } = this.props;
    try {
      const result = await axios(url);
      this.setState({
        data: result.data,
      }, ()=> {
        setTimeout(()=>{
          this.setState({
            component: children(this.state.data),
          });
        }, delay || 0);
      });
    } catch (e) {
      this.setState({
        component: error || 'Error',
      });

      throw e;
    }
  }


  render() {
    return this.state.component;
  }
}

export default Get;
