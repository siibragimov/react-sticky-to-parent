import { readFile, writeFile } from 'fs';
import { join } from 'path';

const filePath = join(process.cwd(), 'dist/react-sticky-to-parent.d.ts');
const originalModuleName = 'lib/main';
const originalCssModuleName = 'ReactStickyToParent';
const newModuleName = 'react-sticky-to-parent';

readFile(filePath, 'utf8', (err, data) => {
  if (err) throw err;

  const result = data
    .replace(new RegExp(`declare module "${originalModuleName}"`, 'g'), `declare module "${newModuleName}"`)
    .replace(new RegExp(`import './${originalCssModuleName}.css'`, 'g'), `import './${newModuleName}.css'`);

  writeFile(filePath, result, 'utf8', (err) => {
    if (err) throw err;
    console.log('Module name has been updated!');
  });
});
