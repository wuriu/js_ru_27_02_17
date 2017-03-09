import React, {Component} from 'react'

export default (ItemList) => class Accordion extends Component {
	state = {
        openItemId: null
    }

    toggleOpenItem = openItemId => ev => {
        this.setState({
            openItemId
        })
    }

  	render() {
  		return <ItemList {...this.props} {...this.state} toggleOpenItem={this.toggleOpenItem} />
  	}
}