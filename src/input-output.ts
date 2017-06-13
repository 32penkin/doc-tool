import { DocJsParser } from './doc-js.parser/doc-js.parser';
import * as fs from 'fs';
const program = require('commander');

export class InputOutput {
  inputStr: any = '';
  outputStr: any = '';

  setInputOutputPathes(): void {
    program
      .version('0.0.1')
      .option('-i, --input <value>', 'Path to input file:')
      .option('-o, --output <value>', 'Path to output file: ')
      .parse(process.argv);

    this.inputStr = program['input'];
    this.outputStr = program['output'];
  }

  createFile(): void {
    this.setInputOutputPathes();

    fs.readFile(process.cwd() + this.inputStr, (err: any, data: any) => {
      const newdoc = new DocJsParser().parse(JSON.parse(data));
      const outputObj: any = JSON.stringify(newdoc, null, 2);
      fs.writeFile(process.cwd() + this.outputStr, outputObj);
    });
  }

}