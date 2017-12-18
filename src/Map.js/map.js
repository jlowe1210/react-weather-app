import React, {Component} from 'react';


class Map extends Component{

    static map;

    static defaultProps = {
        lat: 0,
        lng: 0
    }

    componentDidMount(){
        this.map = new window.google.maps.Map(this.myMap, {
            center: {lat: this.props.location ? this.props.location.lat : this.props.lat , lng: this.props.location ? this.props.location.lon : this.props.lng},
            zoom: 1
          });
       
          this.getPostition(this.props.weathercoord)
       
    }

    getPostition(cb){
        this.map.addListener('click', function(e) {
            const me = e.latLng;
            const location = {
                lat: me.lat(),
                lon: me.lng()
            }
            cb(location)
          });
        
    }

    componentWillReceiveProps(nextProps){
        this.map.setCenter({
            lat : nextProps.location.lat,
            lng : nextProps.location.lon,
        });
        this.map.setZoom(10)
    }
    

    render(){
        const style = {
            height: '300px'
        }
        return(
            <div>
                <div style={style} ref={input => this.myMap = input}></div>
            </div>
        )
    }
}

export default Map;