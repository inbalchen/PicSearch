import React from 'react';

class ImageCard extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            spans: 0
        };
        this.ImageRef = React.createRef(); // a way to communicate with DOM element
    }

    componentDidMount() {
        this.ImageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.ImageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        this.setState({spans:spans});
    }

    render(){
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.ImageRef} alt={this.props.image.alt_description} 
                    src={this.props.image.urls.regular}/>
            </div>
        );
    }
}

export default ImageCard;