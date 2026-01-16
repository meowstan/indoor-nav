let currentFloor = 1; // Default Floor 
let globalPath = null; // Stores the calculated route


// INITIALIZATION

const img = document.getElementById('floorPlan');
const canvas = document.getElementById('navCanvas');
const ctx = canvas.getContext('2d');

//  Populate dropdowns 
populateDropdowns();

// Handle Image Loading (For canvas sizing)
img.onload = function () {
    resizeCanvas();
};
if (img.complete) {
    resizeCanvas();
}

// Also handle window resizing
window.addEventListener('resize', resizeCanvas);

function resizeCanvas() {
    // Set the internal resolution of the canvas to match the image resolution
    canvas.width = img.width;
    canvas.height = img.height;
    // Redraw the path if one exists
    if (globalPath) drawPathOnCurrentFloor();
}

function populateDropdowns() {
    const startSel = document.getElementById('startSelect');
    const endSel = document.getElementById('endSelect');

    // Clear existing options first (except "Choose...")
    startSel.length = 1;
    endSel.length = 1;

    // Sort room names by floor
    const keys = Object.keys(nodes).sort((a, b) => nodes[a].floor - nodes[b].floor);

    keys.forEach(key => {
        // Only show named rooms, not hallway points (start with "h") or Stairs
        if (!key.startsWith('h')) {
            let opt1 = new Option(nodes[key].name, key);
            let opt2 = new Option(nodes[key].name, key);
            startSel.add(opt1);
            endSel.add(opt2);
        }
    });
}

// Floor Switching & Pathfinding

function changeFloor(floorNum) {
    currentFloor = parseInt(floorNum);

    // Update active button state - FIXED
    document.querySelectorAll('.floor-btn').forEach(btn => {
        btn.classList.remove('active');
        if (parseInt(btn.getAttribute('data-floor')) === currentFloor) {
            btn.classList.add('active');
        }
    });

    // If the image is already the correct one, just redraw the path
    if (img.getAttribute('src') === `floorplans/floor_${floorNum}.png`) {
        drawPathOnCurrentFloor();
    } else {
        img.src = `floorplans/floor_${floorNum}.png`;
        // img.onload will trigger automatically and call resizeCanvas -> drawPathOnCurrentFloor
    }
}
function calculatePath() {
    const startSelect = document.getElementById('startSelect');
    const endSelect = document.getElementById('endSelect');
    const status = document.getElementById('status');
    const legend = document.getElementById('legendSidebar');

    const start = startSelect.value;
    const end = endSelect.value;

    // Validation: Did the user select rooms?
    if (!start || !end) {
        status.className = 'status-box show error';
        status.innerHTML = '<strong>⚠️ Selection Required</strong><br>Please select both a Start and Destination.';
        legend.classList.remove('show');
        return;
    }

    // Run Dijkstra Algorithm
    globalPath = dijkstra(start, end);

    // Handle "No Path Found"
    if (!globalPath || globalPath.length === 0) {
        status.className = 'status-box show error';
        status.innerHTML = '<strong>❌ No Route Found</strong><br>No path found! Check graph connections (stairs/elevators).';
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        legend.classList.remove('show');
        return;
    }

    // Determine Start Floor and End Floor
    const startFloor = parseInt(nodes[start].floor);
    const endFloor = parseInt(nodes[end].floor);

    // Floor Switching Logic
    if (currentFloor !== startFloor) {
        changeFloor(startFloor);
    } else {
        drawPathOnCurrentFloor();
    }

    // Show legend
    legend.classList.add('show');

    // Update Status Text for User with visual improvements
    status.className = 'status-box show success';
    
    if (startFloor === endFloor) {
        status.innerHTML = `<strong>✅ Route Found!</strong><br>Distance: ${globalPath.length} meters on Floor ${startFloor}.`;
    } else {
        status.innerHTML = `<strong>✅ Multi-Floor Route Found!</strong><br>Start on Floor ${startFloor} → Take Stairs/Elevator → End on Floor ${endFloor}.<br><small>Use floor buttons above to view each level.</small>`;
    }
}

// Standard Dijkstra Algorithm
function dijkstra(start, end) {
    let distances = {};
    let prev = {};
    let pq = [];

    for (let node in nodes) {
        if (graph[node]) {
            distances[node] = Infinity;
            prev[node] = null;
            pq.push(node);
        }
    }
    distances[start] = 0;

    while (pq.length > 0) {
        pq.sort((a, b) => distances[a] - distances[b]);
        let closest = pq.shift();

        if (closest === end) {
            let path = [];
            let curr = end;
            while (curr) {
                path.unshift(curr);
                curr = prev[curr];
            }
            return path;
        }

        if (distances[closest] === Infinity) break;

        for (let neighbor in graph[closest]) {
            let newDist = distances[closest] + graph[closest][neighbor];
            if (newDist < distances[neighbor]) {
                distances[neighbor] = newDist;
                prev[neighbor] = closest;
            }
        }
    }
    return null;
}

//  DRAWING LOGIC (Percentage to Pixels)

function drawPathOnCurrentFloor() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (!globalPath || globalPath.length === 0) return;

    // Line settings
    ctx.lineWidth = 5;
    ctx.strokeStyle = "#e60000"; // Red
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    // Iterate through the path
    for (let i = 0; i < globalPath.length - 1; i++) {
        let idA = globalPath[i];
        let idB = globalPath[i + 1];

        let nodeA = nodes[idA];
        let nodeB = nodes[idB];

        // ERROR CHECK (If a node is missing definition in nodes list)
        if (!nodeA) { console.error(`Missing node definition for: ${idA}`); continue; }
        if (!nodeB) { console.error(`Missing node definition for: ${idB}`); continue; }

        // Draw line ONLY if both nodes are on the CURRENT floor
        if (nodeA.floor === currentFloor && nodeB.floor === currentFloor) {
            ctx.beginPath();
            ctx.moveTo(nodeA.x * canvas.width, nodeA.y * canvas.height);
            ctx.lineTo(nodeB.x * canvas.width, nodeB.y * canvas.height);
            ctx.stroke();
        }

        // Draw Orange dot if leaving to another floor (Stairs/Elevator)
        else if (nodeA.floor === currentFloor && nodeB.floor !== currentFloor) {
            drawDot(nodeA.x, nodeA.y, "orange");
        }

        // Draw Orange dot if arriving from another floor
        else if (nodeA.floor !== currentFloor && nodeB.floor === currentFloor) {
            drawDot(nodeB.x, nodeB.y, "orange");
        }
    }

    // Draw Start and Finish endpoints
    const startNode = nodes[globalPath[0]];
    const endNode = nodes[globalPath[globalPath.length - 1]];

    if (startNode && startNode.floor === currentFloor) drawDot(startNode.x, startNode.y, "green");
    if (endNode && endNode.floor === currentFloor) drawDot(endNode.x, endNode.y, "blue");
}

function drawDot(xPct, yPct, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    // Convert % to Pixels
    ctx.arc(xPct * canvas.width, yPct * canvas.height, 8, 0, 2 * Math.PI);
    ctx.fill();
}

function clearMap() {
    globalPath = null;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Clear status message
    const status = document.getElementById('status');
    status.classList.remove('show');
    status.className = 'status-box';
    
    // Hide legend
    const legend = document.getElementById('legendSidebar');
    legend.classList.remove('show');
    
    // Clear dropdown selections - ADDED
    document.getElementById('startSelect').value = '';
    document.getElementById('endSelect').value = '';
}


//  DEVELOPER TOOLS (Coordinate Finder)

//  CLICK HANDLER (Generates 0-100 Coordinates) 

// canvas.addEventListener('mousedown', function (e) {
//     const rect = canvas.getBoundingClientRect();
//     const clickedX = e.clientX - rect.left;
//     const clickedY = e.clientY - rect.top;

//     // Calculate raw 0-1 percentage for internal drawing
//     const xRaw = clickedX / rect.width;
//     const yRaw = clickedY / rect.height;

//     // Calculate Display Coordinates (0-100 Integers)
//     // .toFixed(0) removes decimals (e.g., 54)
//     const xDisplay = (xRaw * 100).toFixed(0);
//     const yDisplay = (yRaw * 100).toFixed(0);

//     // Log format updated to integers
//     console.log(`"${Math.random().toString(36).substr(2, 5)}": { x: ${xDisplay}, y: ${yDisplay}, floor: ${currentFloor}, name: "Name" },`);

//     // Show in Sidebar as integers
//     const coordBox = document.getElementById('click-coords');
//     if (coordBox) coordBox.innerText = `Floor ${currentFloor} -> X: ${xDisplay}, Y: ${yDisplay}`;

//     // Auto-fill inputs with integers
//     const inX = document.getElementById('inputX');
//     const inY = document.getElementById('inputY');
//     if (inX && inY) {
//         inX.value = xDisplay;
//         inY.value = yDisplay;
//     }

//     // Clear and Draw (We pass the raw 0-1 values to the draw function)
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawDevDot(xRaw, yRaw, "#00ff00");
// });

// function drawDevDot(xPct, yPct, color = "#00ff00") {
//     // Clear canvas so we see only the dot
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     ctx.fillStyle = color;
//     ctx.beginPath();
//     // Expects 0-1 values here
//     ctx.arc(xPct * canvas.width, yPct * canvas.height, 6, 0, Math.PI * 2);
//     ctx.fill();
//     ctx.strokeStyle = "black";
//     ctx.stroke();
// }

// // --- TEST BUTTON (Handles 0-100 Inputs) ---

// function testCoord() {
//     const xInput = parseFloat(document.getElementById('inputX').value);
//     const yInput = parseFloat(document.getElementById('inputY').value);

//     if (!isNaN(xInput) && !isNaN(yInput)) {
//         // Convert inputs (0-100) back to (0-1) for the drawing function
//         // If user enters 54, we pass 0.54
//         let finalX = xInput > 1 ? xInput / 100 : xInput;
//         let finalY = yInput > 1 ? yInput / 100 : yInput;

//         drawDevDot(finalX, finalY);
//     }
// }

// // DEV TOOLS BULK VISUALIZER 

// function visualizeBulk() {
//     const text = document.getElementById('bulkInput').value;

//     // Regex matches integers or decimals
//     const regex = /"([^"]+)"\s*:\s*\{\s*x:\s*([0-9.]+),\s*y:\s*([0-9.]+),\s*floor:\s*([0-9]+)/g;

//     let match;
//     let count = 0;

//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     while ((match = regex.exec(text)) !== null) {
//         const id = match[1];
//         let x = parseFloat(match[2]);
//         let y = parseFloat(match[3]);
//         const floor = parseInt(match[4]);

//         if (floor === currentFloor) {

//             // SMART FIX: If coordinate is > 1 (e.g., 54), assume it is 0-100 format
//             // and divide by 100. If it is 0.54, leave it alone.
//             if (x > 1) x = x / 100;
//             if (y > 1) y = y / 100;

//             let color = id.startsWith('h_') ? "orange" : "cyan";
//             let radius = id.startsWith('h_') ? 4 : 6;

//             drawVisualizerDot(x, y, color, radius);

//             ctx.fillStyle = "white";
//             ctx.font = "10px monospace";
//             ctx.fillText(id, x * canvas.width + 8, y * canvas.height + 3);

//             count++;
//         }
//     }

//     if (count === 0) {
//         alert(`No points found for Floor ${currentFloor}.`);
//     }
// }

// function drawVisualizerDot(xPct, yPct, color, r) {
//     ctx.fillStyle = color;
//     ctx.beginPath();
//     ctx.arc(xPct * canvas.width, yPct * canvas.height, r, 0, Math.PI * 2);
//     ctx.fill();
//     ctx.strokeStyle = "black";
//     ctx.lineWidth = 1;
//     ctx.stroke();
// }

