(()=>{class s{constructor(s){this.x=s[0],this.y=s[1],this.moves=[]}connect(s){this.moves.includes(s)||this.moves.push(s),s.moves.includes(this)||s.moves.push(this)}}const t=new class{constructor(){this.squares=[],this.populate(),this.connect()}findSquare(s,t){for(let o=0;o<this.squares.length;o++){const e=this.squares[o];if(e.x===s&&e.y===t)return e}}populate(){for(let t=0;t<8;t++)for(let o=0;o<8;o++)this.squares.push(new s([t,o]))}connect(){for(let s of this.squares){const t=s.x,o=s.y,e=[[t+2,o+1],[t+2,o-1],[t+1,o+2],[t+1,o-2],[t-2,o-1],[t-2,o+1],[t-1,o+2],[t-1,o-2]];for(let t of e){const o=this.findSquare(t[0],t[1]);o&&s.moves.push(o)}}}bfs(s,t,o=new Set){const e=[s];for(o.add(s);0!=e.length;){const s=e.shift();if(s===t)return void console.log(`[${s.x}, ${s.y}]`);for(const t of s.moves)o.has(t)||(e.push(t),o.add(t));console.log(`[${s.x}, ${s.y}]`)}}};var o,e;o=[0,0],e=[3,3],t.bfs(t.findSquare(o[0],o[1]),t.findSquare(e[0],e[1]))})();