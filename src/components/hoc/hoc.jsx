import React from 'react';
import Axios from 'axios';

/*const withName = Component => {
    const name = 'A.H. Jewell';
    
    return class MyComponent extends React.Component {
        render() {
            return(
                <Component name={name}/>
            );
        }
    }
}

export default withName;*/

const withData = (url, Component) => {
    return class MyComponent extends React.Component {
        state = {
            data: [],
            loading: false,
            error: ''
        }

        componentDidMount() {
            this.setState({loading: true});
    
            Axios.get(url)
                .then(({data}) => {
                    console.log(data);
                    this.setState({
                        data: data.slice(0, 5),
                        loading: false,
                        error: ''
                    })
                })
                .catch(error => {
                    // console.log(error.response.data);
                    this.setState({
                        loading: false,
                        error: 'Server Error Ocurred'
                    })
                })
        }

        render() {
            // console.log(url);
            
            const {data, loading, error} = this.state;

            return <Component data={data} loading={loading} error={error}/>
        }
    }
}

export default withData;