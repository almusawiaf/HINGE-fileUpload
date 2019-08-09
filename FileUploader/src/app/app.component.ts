// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   selectedFile: File = null;

//   constructor(private http: HttpClient){

//   }
//   onFileSelected(event){
//     this.selectedFile = <File>event.target.files[0];
//     console.log(event)
//   }

//   onUpload(){
//     const fd = new FormData();
//     fd.append('image', this.selectedFile, this.selectedFile.name);
//     console.log ("this is the data on the frontend", fd);
//     this.http.post('http://localhost:8000/upload', fd)
//       .subscribe(res =>{
//         console.log ("this is the file sent", res)
//       });
//   }
// }

// version two
// import { Component } from '@angular/core';
// import { FileUploader } from 'ng2-file-upload';
 
// // const URL = '/api/';
// const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
 
// @Component({
//   selector: 'simple-demo',
//   templateUrl: './simple-demo.html'
// })
// export class SimpleDemoComponent {
//   public uploader:FileUploader = new FileUploader({url: URL});
//   public hasBaseDropZoneOver:boolean = false;
//   public hasAnotherDropZoneOver:boolean = false;
 
//   public fileOverBase(e:any):void {
//     this.hasBaseDropZoneOver = e;
//   }
 
//   public fileOverAnother(e:any):void {
//     this.hasAnotherDropZoneOver = e;
//   }
// }

import { Component, EventEmitter } from '@angular/core';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';
 
function readBase64(file): Promise<any> {
    var reader  = new FileReader();
    var future = new Promise((resolve, reject) => {
      reader.addEventListener("load", function () {
        resolve(reader.result);
      }, false);

      reader.addEventListener("error", function (event) {
        reject(event);
      }, false);

      reader.readAsDataURL(file);
    });
    return future;
  }

// const URL = '/api/';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'my-app',
  styles: [`
      .my-drop-zone { border: dotted 3px lightgray; }
    .nv-file-over { border: dotted 3px red; } 
    .another-file-over-class { border: dotted 3px green; }    
 
    html, body { height: 100%; }
  `],
  templateUrl: './app.component.html'
})
export class AppComponent {
  public uploader:FileUploader = new FileUploader({
    url: URL, 
    disableMultipart:true
    });
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;

  fileObject: any;


  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e; 
  }
 
  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }

  public onFileSelected(event: EventEmitter<File[]>) {
    const file: File = event[0];

    console.log(file);

    readBase64(file)
      .then(function(data) {
      console.log(data);
    })

  }
}