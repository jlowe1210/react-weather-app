import React, {Component} from 'react';


class Search extends Component{
    state = {
        city: '',
    }

    onsubmit(e){
        e.preventDefault();
       const area = (e.target[0].value)
        this.props.getWeather(area);
        e.target[0].value = ''   
    }

    render(){
        return(
            <form className='form-group' onSubmit={this.onsubmit.bind(this)}>
                <input type='text' className='form-control' placeholder='Search or Click anywhere on the map for the weather '/>
            </form>
        )
    }
}

export default Search;