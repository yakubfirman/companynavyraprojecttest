const fs = require('fs');
const path = require('path');

const dirs = [
    path.join(__dirname, 'resources/js/Pages'),
    path.join(__dirname, 'resources/js/Layouts')
];

const replacements = [
    { from: /bg-black/g, to: 'bg-white' },
    { from: /text-white/g, to: 'text-gray-900' },
    { from: /text-gray-400/g, to: 'text-gray-600' },
    { from: /text-gray-300/g, to: 'text-gray-600' },
    { from: /text-green-500/g, to: 'text-blue-600' },
    { from: /text-green-400/g, to: 'text-blue-500' },
    { from: /bg-green-500/g, to: 'bg-blue-600' },
    { from: /bg-green-400/g, to: 'bg-blue-500' },
    { from: /bg-green-100/g, to: 'bg-blue-100' },
    { from: /text-green-600/g, to: 'text-blue-700' },
    { from: /text-green-800/g, to: 'text-blue-900' },
    { from: /bg-green-50/g, to: 'bg-blue-50' },
    { from: /border-white/g, to: 'border-blue-600' },
    { from: /hover:text-black/g, to: 'hover:text-white' }, // since bg became white, we want buttons to be blue with white text or something.
];

function processDirectory(directory) {
    fs.readdirSync(directory).forEach(file => {
        const fullPath = path.join(directory, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.jsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            replacements.forEach(r => {
                content = content.replace(r.from, r.to);
            });

            // Additional fix for specific elements to look good on white bg
            // Make the footer look okay
            content = content.replace(/className="bg-white text-gray-900 px-6 py-4 sticky top-0 z-50"/g, 'className="bg-white text-gray-900 px-6 py-4 sticky top-0 z-50 shadow-sm"');
            
            fs.writeFileSync(fullPath, content, 'utf8');
        }
    });
}

dirs.forEach(processDirectory);
console.log('Color replacements completed.');
