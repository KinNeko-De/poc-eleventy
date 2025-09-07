

export default async function () {
  const api = await import('./api.json', { assert: { type: 'json' } });
  const files = api.default.files;
  const packages = Array.from(new Set(files.map(f => f.package)));
  const scalarTypes = api.default.scalarValueTypes || [];
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
