import React, { Component } from 'react';
import { Layout, Menu, BackTop, Affix, Card, Timeline, Progress } from 'antd';

import 'antd/dist/antd.min.css';
import './App.css';

import 'react-responsive-carousel/lib/styles/carousel.css';


function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); return images});
  return images;
}
const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));


var Carousel = require('react-responsive-carousel').Carousel;
const { Header, Footer, Content } = Layout;
class App extends Component {
  state = {
    percent: 1,
    show: true,
  }
  increase = () => {
    let percent = this.state.percent + Math.random();
    if (percent > 100) {
      this.setState({show:false})
      clearInterval(this.interval_id);
    }
    this.setState({ percent });
  }

  interval_id = setInterval(this.increase, 25);

  render() {
    const showprog=this.state.show;
    return (
      <div className="App">
        <BackTop />
        <Layout className="layout">
          {showprog &&
            <Progress percent={this.state.percent} />
          }
          <Affix>
            <Header>
              <div className="logo" />
              <div className="wrapper">
                <ul>
                  <li className="facebook"><i className="fa fa-facebook fa-2x" aria-hidden="true"></i></li>
                  <li className="twitter"><i className="fa fa-twitter fa-2x" aria-hidden="true"></i></li>
                  <li className="instagram"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></li>
                  <li className="google"><i className="fa fa-google fa-2x" aria-hidden="true"></i></li>
                  <li className="whatsapp"><i className="fa fa-whatsapp fa-2x" aria-hidden="true"></i></li>
                </ul>
              </div>
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
              >
                <Menu.Item key="1" className="msg">Bio</Menu.Item>
                <Menu.Item key="2" className="msg">Work</Menu.Item>
                <Menu.Item key="3" className="msg">Contact</Menu.Item>
              </Menu>
            </Header>
          </Affix>
          <Content>
            <div className="carousel">
              <Carousel showArrows={true}
                autoPlay={true}
                showStatus={false}
                interval={3000}
                showIndicators={true}
                showThumbs={true}
                infiniteLoop={true}
                transitionTime={75}
                axis={"vertical"}>
                <div>
                  <img src={images['image1.jpg']} alt="img not found" />
                </div>
                <div>
                  <img src={images['image2.jpg']} alt="img not found" />
                </div>
                <div>
                  <img src={images['image3.jpg']} alt="img not found" />
                </div>
                <div>
                  <img src={images['image6.jpg']} alt="img not found" />
                </div>
              </Carousel>
            </div>
            <div className="summary">
              <div className="info">
                <h4>Summary</h4>
                <Timeline>
                  <Timeline.Item color="green">Born on 1995-05-27</Timeline.Item>
                  <Timeline.Item color="green">PUC with distinction May 2013</Timeline.Item>
                  <Timeline.Item color="red">
                    <p>Computer Science Engineering at PESIT Bengaluru Aug 2013</p>
                    <p>Internship at Mahindra Comviva Jan 2017</p>
                    <p>Graduated from PESIT May 2017</p>
                  </Timeline.Item>
                  <Timeline.Item>
                    <p>Software Engineer at Mahindra Comviva Aug 2017</p>
                  </Timeline.Item>
                </Timeline>
                <p className="msg">I’m the most awesome person I know.My life motto is ‘Do my best, so that I can’t blame myself for anything.</p>
                <p className="msg">I have a new theory in life...what other people think of me is truly none of my business! </p>
              </div>
              <div>
                <img className="mypic" src={images['image5.png']} alt="img not found" />
              </div>
            </div>
            <div className="projects">
              <h3>Projects</h3>
              <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
                <div className="custom-image">
                  <img alt="example" width="100%" src={images['image4.jpg']} />
                </div>
                <div className="custom-card">
                  <h3>Europe Street beat</h3>
                  <p>www.instagram.com</p>
                </div>
              </Card>
            </div>
            <div className="contact">
              <h3>Contact</h3>
            </div>
          </Content>

          <Footer style={{ textAlign: 'center' }}>
            All copyrights reserved ©2017
          </Footer>
        </Layout>

      </div>
    );
  }
}

export default App;
