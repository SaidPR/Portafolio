export async function getRepos(user, repoNames = []) {
  const response = await fetch(`https://api.github.com/users/${user}/repos`);

  if (!response.ok) {
    throw new Error('No se pudieron obtener los repositorios de GitHub.');
  }

  const repos = await response.json();
  const byName = new Map(repos.map((repo) => [repo.name, repo]));

  return repoNames
    .map((name) => byName.get(name))
    .filter(Boolean);
}
