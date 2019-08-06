import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedFile: File = null;

  constructor(private http: HttpClient){

  }
  onFileSelected(event){
    this.selectedFile = <File>event.target.files[0];
    console.log(event)
  }

  onUpload(){
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    console.log ("this is the data on the frontend", fd);
    this.http.post('http://localhost:3000/api/files', fd)
      .subscribe(res =>{
        console.log ("this is the file sent", res)
      });
  }
}
