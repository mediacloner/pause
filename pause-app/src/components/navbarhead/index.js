import React from 'react'

import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem, Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import "../../styles/navbar.css";
import "../../styles/main.css";
import Timeline from '../../components/timeline'
import Newpost from '../../components/newpost'
import ApiClient from "../../models/api-client/src/index.js";

const apiClient = new ApiClient("http", "localhost", 5000);  

export default class NavbarHead extends React.Component {

  

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      show : 'timeline', 
      timelineName: '·|my timeline|·',
      posts: [],
    };
  }


  componentDidMount() {
    this.getList();

  }

  getList = () => {
    apiClient
      .listPosts()
      .then(posts => this.setState({ posts: posts.data }))
      .catch(console.error);
  };

  handleViews=(e)=>{
    e.preventDefault()
    if (e.target.id === 'myTimeline') this.setState( {timelineName: '·|my timeline|·', show:'timeline'})
    else if (e.target.id === 'ourTimeline') this.setState( {timelineName: '·|our timeline|·', show:'timeline'})
    else if (e.target.id === 'justnowTimeline') this.setState( {timelineName: '·|just now timeline|·', show:'timeline'})
    else if (e.target.id === 'newpost') this.setState( {timelineName: '·|new post|·',  show:'newpost'})
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" className="navbar-dark" light expand="md">
          <NavbarBrand href="/"><h1 className="logonav"> ·|pause|·</h1></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Timeline
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem id='myTimeline'onClick={this.handleViews}>
                    My Timeline
                  </DropdownItem>
                  <DropdownItem id='ourTimeline'onClick={this.handleViews}>
                    Our Timeline
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem id='justnowTimeline'onClick={this.handleViews}>
                    Just Now Timeline
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem >
                <NavLink id='newpost'onClick={this.handleViews} href="">New Post</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Settings</NavLink>
              </NavItem>
              <Form inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Input type="Search" name="find" id="find" placeholder="Find..." />
                </FormGroup>
                <Button>Search</Button>
              </Form>
            </Nav>
          </Collapse>
        </Navbar>

            {this.state.show == 'newpost'?<Newpost/>:undefined}
            {this.state.show == 'timeline'?<Timeline list={this.state.posts} header = {this.state.timelineName}/>:undefined}
      </div>
    );
  }
}
