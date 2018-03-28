import React from 'react'

import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem, Button, Form, FormGroup, Input
} from 'reactstrap';
import "../../styles/navbar.css";
import "../../styles/main.css";
import Timeline from '../../components/timeline'
import Newpost from '../../components/newpost'
import Post from '../../components/post'
import Following from '../../components/following'
import Signin from '../../components/signin'
import storage from "../../services/storage"





export default class NavbarHead extends React.Component {

  

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      show : 'signin', 
      timelineName: '',
      search: '',
      postId: '', 
      userView : '',
      filter: 'ownPostsTimeline',
      loged: false,
      userLoged: ''
    };
  }



  handleViews=(e)=>{
    e.preventDefault()
    if (e.target.id === 'myTimeline') this.setState( {timelineName: '·|my timeline|·', filter: 'ownPostsTimeline', show:'timeline'})
    else if (e.target.id === 'ourTimeline') this.setState( {timelineName: '·|our timeline|·', filter: 'followPostTimeline' ,show:'timeline'})
    else if (e.target.id === 'justnowTimeline') this.setState( {timelineName: '·|just now timeline|·', filter: 'allPostTimeline' ,show:'timeline'})
    else if (e.target.id === 'otheruser') this.setState( {timelineName: '·|selected user|·',filter: 'userTimeline' , show:'timeline'})
    else if (e.target.id === 'search') this.setState( {timelineName: '·|results|·', filter: 'searchPost' ,show:'timeline'})
    else if (e.target.id === 'newpost') this.setState( {timelineName: '·|new post|·', filter: 'newpost', show:'newpost'})
    else if (e.target.id === 'following'){ this.setState( {timelineName: '·|following|·', filter: 'followingPost', show:'following'})}
  }

  loged = (swt) => {
    this.setState({ loged: swt })

    swt ? this.setState( {timelineName: '·|my timeline|·', filter: 'ownPostsTimeline', show:'timeline'}):undefined
  }

  otherUserView = (e) => {
   e.preventDefault()
   this.setState({userView: e.target.id, timelineName: '·|selected user|·',  show:'timeline',filter: 'userTimeline' })
  }

  signout = () =>{
    storage.removeToken()
  }

   
  updateSearch = (e) => {
    this.setState({ search: e.target.value, timelineName: '·|results|·' ,filter: 'searchPost' ,show:'timeline'})} 

    
  postView=(e)=>{
    e.preventDefault()
    this.setState({show: 'post', postId: e.target.id, filter: 'newpost' })
   }

   
   postResult=()=>{
    this.setState({timelineName: '·|my timeline|·',show: 'timeline', filter: 'ownPostsTimeline'})
   }

   prevent=(e)=>{
    e.preventDefault()
   }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>

        {this.state.loged === true ?
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
                <NavLink id='following'onClick={this.handleViews}href="">Following</NavLink>
              </NavItem>
              <NavItem>
                <NavLink id='following'className="text-warning" onClick={this.signout}href="">Logoff</NavLink>
              </NavItem>
              <Form inline  id="search" onSubmit={ this.prevent }>
                <FormGroup  id="search" className="mb-2 mr-sm-2 mb-sm-0">
                  <Input onChange={ this.updateSearch } type="Search" name="find" id="find" placeholder="Find..." />
                </FormGroup>  
              </Form>
            </Nav>
          </Collapse>
        </Navbar> : undefined}


            {this.state.show === 'newpost'?<Newpost postResult= {this.postResult}/>:undefined}
            {this.state.show === 'post'?<Post postId={this.state.postId} otherUserView={this.otherUserView} />:undefined}
            {this.state.show === 'timeline'?<Timeline userView={this.state.userView} userId={this.state.userId} search= {this.state.search} postView = {this.postView} show = {this.state.show} filter = {this.state.filter} header = {this.state.timelineName}/>:undefined}
            {this.state.show === 'following'?<Following otherUserView={this.otherUserView} />:undefined}
            {this.state.show === 'signin'?<Signin loged={this.loged} />:undefined}

      </div>
    );
  }
}
