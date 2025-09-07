
export default async function () {
  const api = await import('./api.json', { assert: { type: 'json' } });
  const files = api.default.files;
  const packages = Array.from(new Set(files.map(f => f.package)));
  return {
    packages,
    filesByPackage: Object.fromEntries(
      packages.map(pkg => [pkg, files.filter(f => f.package === pkg)])
    )
  };
}
