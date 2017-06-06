import { DocJSParser } from './doc-js.parser/doc-js.parser';
import * as fs from 'fs';

fs.readFile('./input-examples/docJSInput.json', function (err: any, data: any) {
    let p1 = new DocJSParser();
    // let newdoc = p1.parse(JSON.parse(data));
    console.log(p1.parse(JSON.parse(data)));
    // const outputObj = JSON.stringify(p1.parse(JSON.parse(data)));
    // console.log(outputObj);
});

// const dp1 = new DocJSParser();
//   const inp = [
//     {
//       kind: 'class',
//       description: 'class1'
//     },
//     {
//       kind: 'class',
//       description: 'class2'
//     },
//     {
//       kind: 'method',
//       description: 'class3'
//     }
//   ];
//   const out = [
//     {
//       kind: 'class',
//       description: 'class1'
//     },
//     {
//       kind: 'class',
//       description: 'class2'
//     }
//   ];

// console.log(dp1.getClasses(inp));
























// function iter(obj: any) {
//     for (let property in obj) {
//         if (obj.hasOwnProperty(property) && obj[property] != null) {
//             if (obj[property].constructor == Object) {
//                 iter(obj[property]);
//             } else if (obj[property].constructor == Array) {
//                 for (let i = 0; i < obj[property].length; i++) {
//                     iter(obj[property][i]);
//                 }
//             } else {
//                 console.log(obj[property]);
//             }
//         }
//     }
// }