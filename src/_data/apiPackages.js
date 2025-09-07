import fs from 'fs';
import path from 'path';

export default function () {
  const apiPath = path.resolve(process.cwd(), 'src', '_data', 'api.json');
  const api = JSON.parse(fs.readFileSync(apiPath, 'utf-8'));
  const files = api.files;
  const packages = Array.from(new Set(files.map(f => f.package)));
  const scalarTypes = api.scalarValueTypes || [];
  const scalarTypeMap = Object.fromEntries(scalarTypes.map(t => [t.protoType, t]));
  return {
    packages,
    filesByPackage: Object.fromEntries(
      packages.map(pkg => [pkg, files.filter(f => f.package === pkg)])
    ),
    scalarTypes,
    scalarTypeMap
  };
}
