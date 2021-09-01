import testWriter from './testWriter';

(() => {
    let missingFileCount = 0
    missingFileCount += testWriter()
    if (missingFileCount > 0) {
        throw new Error(
            `${missingFileCount} files were written. That means you haven't written a necessary file yet`
        )
    } else {
        console.log('good preflight check~')
    }
    console.log('writing updated README.md')
})()
