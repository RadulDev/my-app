import Link from 'next/link';
import React from 'react'


async function fetchRepoContents(name){

    await new Promise((resolve) => setTimeout(resolve,3000));

    const response = await fetch(`https://api.github.com/repos/raduldev/${name}/contents`);
    const contents = await response.json();
    return contents;
}


const RepoDirs = async ({name}) => {
    const contents = await fetchRepoContents(name);
    const dirs = contents.filter((contents) => contents.type == 'dir');

  return (
    <div>
        <h3>Directories</h3>
        <ul>
            {dirs.map((dirs) => (
                <li key={dirs.path}>
                    <Link href={`/code/repos/${name}/${dirs.path}`}>
                        {dirs.name}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default RepoDirs