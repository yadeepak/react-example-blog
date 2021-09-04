import React ,{Component} from 'react';
import axios from 'axios';
class BlogListv2 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

   async componentDidMount(){
    const blogsData = await axios.get('http://localhost:3001/blogs');
    console.log(blogsData);
    }
    render() { 
        return null;
    }
}
 
export default BlogListv2;