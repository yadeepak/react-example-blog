import React, { Component } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from "axios";
class UpdateBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forms: {
        title: "",
        author: "",
        description: "",
        image: "",
      },
    };
  }


  async  componentDidMount(){
     const title =  this.props.match.params.title;
     const response = await axios.get(`https://mern-be-2.herokuapp.com/get-blog-by-title?title=${title}`)
     if(response && response.status === 200){
         const {title,description,author,image} = response.data;
         const stateObj = {
             title,
             author,
             description,
             image
         }
         this.setState({forms:stateObj})
     }
  }

  handleForm = (key,value) => {
    const forms = {...this.state.forms};
     this.setState({forms:{...forms,[key]:value}})
  }

  formSubmit = async (e) => {
      e.preventDefault()
    // const { title, author, description, image } = this.state.forms;
    const title =  this.props.match.params.title;
    const response = await axios.put(`https://mern-be-2.herokuapp.com/update-blog/${title}`,this.state.forms);
    console.log(response);
    if(response && response.status === 200){
        alert("added")
    }
  }
  render() {
    const { title, author, description, image } = this.state.forms;
    return (
      <Container fluid>
        <Row className="mt-3">
          <Col lg="5" className="mx-auto">
            <Card style={{ width: "45rem" }} className="p-3">
              <h1 className="text-center">Edit {this.props.match.params.title}</h1>
              <Form onSubmit={this.formSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Title</Form.Label>
                  <Form.Control type="text" placeholder="Enter title" value={title} onChange={(e)=>this.handleForm("title",e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Author</Form.Label>
                  <Form.Control type="text" placeholder="Author" value={author} onChange={(e)=>this.handleForm("author",e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Description</Form.Label>
                  <CKEditor
                    editor={ ClassicEditor }
                    data={description}
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                       this.handleForm('description',data);
                    } }
                    />
                </Form.Group>

                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Image</Form.Label>
                  <Form.Control type="file" onChange={(e)=>this.handleForm("image",e.target.files[0])}/>
                  {image && <img src={`https://mern-be-2.herokuapp.com/${image}`} alt="alt"/>}
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default UpdateBlog;
