import React, {PureComponent} from "react";
import leaflet from "leaflet";
import PropTypes from "prop-types";

class OfferMap extends PureComponent {
  constructor(props) {
    super(props);

    this._mapRef = React.createRef();
  }

  render() {
    return (
      <div id="map" ref={this._mapRef} style={{height: `100%`}} />
    );
  }

  componentDidMount() {
    const coordinates = (this.props.coordinates.length <= 3)
      ? this.props.coordinates
      : this.props.coordinates.slice(0, 3);

    const offerCoordinates = this.props.offerCoordinates;

    const city = [52.38333, 4.9];

    const zoom = 12;
    const map = leaflet.map(this._mapRef.current, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(map);

    const iconOrange = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [30, 30]
    });

    const iconBlue = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    leaflet
        .marker(offerCoordinates, {icon: iconOrange})
        .addTo(map);

    coordinates.forEach((item) => {
      leaflet
        .marker(item, {icon: iconBlue})
        .addTo(map);
    });
  }
}

OfferMap.propTypes = {
  offerCoordinates: PropTypes.arrayOf(PropTypes.number),
  coordinates: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
};

export default OfferMap;
