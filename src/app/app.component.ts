import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';

  posts = [
  	{
  		title: "First Post",
  		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec velit ut odio tempus tempus ac a diam. Nulla facilisi.",
  		loveIts: 1,
  		created_at: new Date()
  	},
  	{
  		title: "Second Post",
  		content: "Phasellus efficitur nulla eget sapien tincidunt vehicula. Integer mollis enim varius, volutpat tellus vitae, aliquam felis.",
  		loveIts: -1,
  		created_at: new Date()
  	},
  	{
  		title: "Third Post",
  		content: "Fusce sollicitudin dolor id nulla venenatis, in aliquam nunc condimentum. Cras sit amet elit sit amet velit accumsan consequat.",
  		loveIts: 0,
  		created_at: new Date()
  	}
  ];
}
