function solution(maps) {
  const result = [];
  const [Row, Column] = [maps.length, maps[0].length];
  const visited = Array.from({ length: Row }, () => Array(Column).fill(0));
  const move = [[0, 1], [0, -1], [1, 0], [-1, 0]];

  const bfs = (a, b) => {
    let cnt = 0;
    const q = [[a, b]];
    cnt += parseInt(maps[a][b]);
    visited[a][b] = 1;

    while (q.length) {
      const [row, column] = q.shift();
      for (let i = 0; i < 4; i++) {
        const new_row = row + move[i][0];
        const new_column = column + move[i][1];
        if (new_row >= 0 && new_column >= 0 && new_row < Row && new_column < Column && 
            !visited[new_row][new_column] && maps[new_row][new_column] !== "X") {
          visited[new_row][new_column] = 1;
          cnt += parseInt(maps[new_row][new_column]);
          q.push([new_row, new_column]);
        }
      }
    }
    result.push(cnt);
  };

  for (let i = 0; i < Row; i++) {
    for (let j = 0; j < Column; j++) {
      if (!visited[i][j] && maps[i][j] !== "X") bfs(i, j);
    }
  }

  return result.length === 0 ? [-1] : result.sort((a, b) => a - b);
}