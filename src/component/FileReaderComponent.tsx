import { Component } from "react";
const fs = require("fs");
const path = require("path");

export class FileReaderComponent extends Component<any, any> {

  setTabletImages = () => {
    fs.readdirSync('.').forEach( (file: string) => {

      const extname = path.extname( file );
      const filename = path.basename( file, extname );
      const absolutePath = path.resolve( 'D:\\geo\\tablets\\9x7\\temp', file );

      console.log( "File : ", file );
      console.log( "filename : ", filename );
      console.log( "extname : ", extname );
      console.log( "absolutePath : ", absolutePath);

    });
  }

  render() {
    return (
      <button onClick={this.setTabletImages}>
        <span>Log filenames</span>
      </button>
    );
  }
}
