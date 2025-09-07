import api from './api.json' with { type: 'json' };

export default async function () {
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
