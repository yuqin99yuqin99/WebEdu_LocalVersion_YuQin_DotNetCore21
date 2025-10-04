function fnStringSimilarity(a, b) {
    // Levenshtein distance
    const m = a.length, n = b.length;
    if (m === 0 || n === 0) return 0;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (a[i - 1] === b[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(
                    dp[i - 1][j] + 1,
                    dp[i][j - 1] + 1,
                    dp[i - 1][j - 1] + 1
                );
            }
        }
    }
    const distance = dp[m][n];
    // Similarity: 1 - normalized distance
    return 1 - distance / Math.max(m, n);
}

// Example usage:
//console.log(fnStringSimilarity("kitten", "sitting")); // Output: ~0.571
//console.log(fnStringSimilarity("hello", "hello"));    // Output: 1
//---------------------------------------------------------------

// Compare two images by pixel similarity (returns a value between 0 and 1)
async function fnImageSimilarity(img1Src, img2Src) {
    // Load images
    const loadImage = src => new Promise(resolve => {
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.onload = () => resolve(img);
        img.src = src;
    });

    const [img1, img2] = await Promise.all([loadImage(img1Src), loadImage(img2Src)]);

    // Set canvas size to smallest image
    const width = Math.min(img1.width, img2.width);
    const height = Math.min(img1.height, img2.height);

    // Draw images to canvases
    const canvas1 = document.createElement('canvas');
    const canvas2 = document.createElement('canvas');
    canvas1.width = canvas2.width = width;
    canvas1.height = canvas2.height = height;

    const ctx1 = canvas1.getContext('2d');
    const ctx2 = canvas2.getContext('2d');
    ctx1.drawImage(img1, 0, 0, width, height);
    ctx2.drawImage(img2, 0, 0, width, height);

    // Get pixel data
    const data1 = ctx1.getImageData(0, 0, width, height).data;
    const data2 = ctx2.getImageData(0, 0, width, height).data;

    // Compare pixels
    let same = 0;
    for (let i = 0; i < data1.length; i += 4) {
        // Compare RGBA
        if (
            data1[i] === data2[i] &&
            data1[i + 1] === data2[i + 1] &&
            data1[i + 2] === data2[i + 2] &&
            data1[i + 3] === data2[i + 3]
        ) {
            same++;
        }
    }
    const total = data1.length / 4;
    return same / total; // Similarity ratio (0~1)
}

/** Example usage:
fnImageSimilarity('image1.png', 'image2.png').then(sim => {
  console.log('Similarity:', sim);
});
**/
//---------------------------------------------------------

// Compare two videos by sampling frames and averaging image similarity
async function fnVideoSimilarity(video1Src, video2Src, frameCount = 10) {
    // Helper to load video and seek to a specific time, then get frame as image data
    async function getFrameData(videoSrc, time) {
        return new Promise(resolve => {
            const video = document.createElement('video');
            video.crossOrigin = "Anonymous";
            video.src = videoSrc;
            video.muted = true;
            video.currentTime = time;
            video.onloadeddata = () => {
                video.currentTime = time;
            };
            video.onseeked = () => {
                const canvas = document.createElement('canvas');
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                resolve(ctx.getImageData(0, 0, canvas.width, canvas.height).data);
            };
        });
    }

    // Helper to get duration of video
    async function getDuration(videoSrc) {
        return new Promise(resolve => {
            const video = document.createElement('video');
            video.src = videoSrc;
            video.onloadedmetadata = () => resolve(video.duration);
        });
    }

    // Get durations
    const [duration1, duration2] = await Promise.all([
        getDuration(video1Src),
        getDuration(video2Src)
    ]);
    const minDuration = Math.min(duration1, duration2);

    // Sample frames at equal intervals
    let similarities = [];
    for (let i = 0; i < frameCount; i++) {
        const time = (minDuration * i) / (frameCount - 1);
        const [frame1, frame2] = await Promise.all([
            getFrameData(video1Src, time),
            getFrameData(video2Src, time)
        ]);
        // Compare frames (pixel similarity)
        let same = 0;
        const len = Math.min(frame1.length, frame2.length);
        for (let j = 0; j < len; j += 4) {
            if (
                frame1[j] === frame2[j] &&
                frame1[j + 1] === frame2[j + 1] &&
                frame1[j + 2] === frame2[j + 2] &&
                frame1[j + 3] === frame2[j + 3]
            ) {
                same++;
            }
        }
        similarities.push(same / (len / 4));
    }
    // Average similarity across frames
    return similarities.reduce((a, b) => a + b, 0) / similarities.length;
}

/** Example usage:
fnVideoSimilarity('video1.mp4', 'video2.mp4', 10).then(sim => {
    console.log('Video similarity:', sim); // Value between 0 and 1
});
**/
//---------------------------------------------------------
// Compare two SVG strings visually by rendering to canvas and comparing pixels
async function fnSVGSimilarity(svg1, svg2, width = 200, height = 200) {
    // Helper: Render SVG string to canvas and get pixel data
    function renderSVGToCanvas(svg, width, height) {
        return new Promise(resolve => {
            const img = new Image();
            img.crossOrigin = "Anonymous";
            const svgBlob = new Blob([svg], { type: "image/svg+xml" });
            const url = URL.createObjectURL(svgBlob);
            img.onload = () => {
                const canvas = document.createElement('canvas');
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.clearRect(0, 0, width, height);
                ctx.drawImage(img, 0, 0, width, height);
                const data = ctx.getImageData(0, 0, width, height).data;
                URL.revokeObjectURL(url);
                resolve(data);
            };
            img.src = url;
        });
    }

    // Render both SVGs
    const [data1, data2] = await Promise.all([
        renderSVGToCanvas(svg1, width, height),
        renderSVGToCanvas(svg2, width, height)
    ]);

    // Compare pixel data
    let same = 0;
    const len = Math.min(data1.length, data2.length);
    for (let i = 0; i < len; i += 4) {
        if (
            data1[i] === data2[i] &&
            data1[i + 1] === data2[i + 1] &&
            data1[i + 2] === data2[i + 2] &&
            data1[i + 3] === data2[i + 3]
        ) {
            same++;
        }
    }
    const total = len / 4;
    return same / total; // Similarity ratio (0~1)
}

/** Example usage:
const svgA = `<svg width="100" height="100"><circle cx="50" cy="50" r="40" fill="red"/></svg>`;
const svgB = `<svg width="100" height="100"><circle cx="50" cy="50" r="40" fill="blue"/></svg>`;
fnSVGSimilarity(svgA, svgB).then(sim => {
    console.log('SVG similarity:', sim);
});
**/

//---------------------------------------------------------
//Requires X3DOM or similar to render X3D in browser, then compare canvas pixels. (requires X3DOM and browser support).
async function fnX3DVisualSimilarity(x3d1, x3d2, width = 300, height = 300) {
    // Helper: Render X3D string to canvas and get pixel data
    async function renderX3DToCanvas(x3dString, width, height) {
        return new Promise(resolve => {
            // Create X3DOM scene
            const container = document.createElement('div');
            container.style.position = 'absolute';
            container.style.left = '-9999px';
            document.body.appendChild(container);
            container.innerHTML = x3dString;

            // Wait for X3DOM to render
            setTimeout(() => {
                const x3dElem = container.querySelector('x3d');
                if (!x3dElem) return resolve(null);
                const canvas = x3dElem.querySelector('canvas');
                if (!canvas) return resolve(null);

                // Draw canvas to image
                const tempCanvas = document.createElement('canvas');
                tempCanvas.width = width;
                tempCanvas.height = height;
                const ctx = tempCanvas.getContext('2d');
                ctx.drawImage(canvas, 0, 0, width, height);
                const data = ctx.getImageData(0, 0, width, height).data;
                document.body.removeChild(container);
                resolve(data);
            }, 1000); // Wait for rendering (may need to adjust)
        });
    }

    const [data1, data2] = await Promise.all([
        renderX3DToCanvas(x3d1, width, height),
        renderX3DToCanvas(x3d2, width, height)
    ]);
    if (!data1 || !data2) return 0;

    // Compare pixel data
    let same = 0;
    const len = Math.min(data1.length, data2.length);
    for (let i = 0; i < len; i += 4) {
        if (
            data1[i] === data2[i] &&
            data1[i + 1] === data2[i + 1] &&
            data1[i + 2] === data2[i + 2] &&
            data1[i + 3] === data2[i + 3]
        ) {
            same++;
        }
    }
    const total = len / 4;
    return same / total; // Similarity ratio (0~1)
}
/** Example usage:
 **/