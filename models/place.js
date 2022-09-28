export class Place {
  constructor(title, imageUri, location, id) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = this.address;
    this.location = {lat: this.lat, lng: this.lng}; //{lat:......., lng: ........}
    this.id = id; //new Date().toString() + Math.random().toString();
  }
}
