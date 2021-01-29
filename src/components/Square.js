import React from 'react'
class Square extends React.Component {
    render() {
        console.log(this.props)
        return (
            <button className="square">
                {this.props.value}
            </button>
        );
    }
}
export default Square;