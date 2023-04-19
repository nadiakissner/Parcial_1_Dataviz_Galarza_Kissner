
d3.dsv(';','../data/dataset.csv', d3.autoType).then(data =>  {
  

  let filteredData = data.filter(d => d["domicilio_barrio"] === "PALERMO");
  console.log(filteredData);

  let canales = d3.groups(filteredData, d => d.canal)
    .map(d => {
      return {
        canal: d[0],
        sum: d[1].length,
      }
    });

  let chart = Plot.plot({
    marks: [
      Plot.barX(canales, {
        x: 'sum',
        y: 'canal',
        sort: {y: 'x', reverse: true},
        fill: d => (d.canal === "App BA 147" ? "#54288f" :"#848484" && d.canal =="GCS Web" ? "#7567af" : "#848484"),
      }),
      Plot.text(canales, {
        x: d => d.sum + 5,
        y: 'canal',
        text: d => d.sum,
        textAnchor: "top",
        fontWeight: 'bold',
        fontSize: '14px',
        fill: d => (d.canal === "App BA 147" ? "#54288f" : "#848484" && d.canal =="GCS Web" ? "#7567af" : "#848484"),
        dy: -2,
        dx: 15
      }),
    ],
    width: 800,
    height: 300,
    marginLeft: 200,
    marginBottom: 80,
    insetLeft: 20,
    style: {
      fontFamily: "Segoe UI",
      fontSize: 18,
      color: 'black',
      fontWeight: 400,
    },
    x: {
      label: 'Denuncias',
      labelOffset: 50,
      ticks: 5,
      tickFormat: d => `${d}`,
      domain: [0, d3.max(canales, d => d.sum) * 1.1],
    },
    y: {
      label: '',
      ticks: false,
      labelOffset: 150
    },
  })

  d3.select("#chart2").append(() => chart);
});


["#fcfbfd","#fcfbfd","#fbfafc","#fbfafc","#faf9fc","#faf9fc","#faf8fb","#f9f8fb","#f9f7fb","#f8f7fb","#f8f7fa","#f7f6fa","#f7f6fa","#f7f5fa","#f6f5f9","#f6f4f9","#f5f4f9","#f5f3f9","#f4f3f8","#f4f2f8","#f4f2f8","#f3f2f8","#f3f1f7","#f2f1f7","#f2f0f7","#f1f0f7","#f1eff6","#f0eff6","#f0eef6","#efeef5","#efedf5","#eeedf5","#eeecf5","#edecf4","#edebf4","#ecebf4","#ebeaf3","#ebe9f3","#eae9f3","#eae8f3","#e9e8f2","#e8e7f2","#e8e7f2","#e7e6f1","#e7e5f1","#e6e5f1","#e5e4f0","#e5e4f0","#e4e3f0","#e3e2ef","#e3e2ef","#e2e1ef","#e1e1ee","#e1e0ee","#e0dfee","#dfdfed","#dedeed","#dedded","#ddddec","#dcdcec","#dbdbec","#dbdaeb","#dadaeb","#d9d9ea","#d8d8ea","#d7d7ea","#d7d7e9","#d6d6e9","#d5d5e8","#d4d4e8","#d3d3e8","#d2d3e7","#d2d2e7","#d1d1e6","#d0d0e6","#cfcfe5","#cecee5","#cdcee5","#cccde4","#cbcce4","#cbcbe3","#cacae3","#c9c9e2","#c8c8e2","#c7c7e1","#c6c6e1","#c5c5e0","#c4c4e0","#c3c3df","#c2c3df","#c1c2de","#c0c1de","#bfc0dd","#bebfdd","#bebedc","#bdbddc","#bcbcdb","#bbbbda","#babada","#b9b9d9","#b8b8d9","#b7b7d8","#b6b5d8","#b5b4d7","#b4b3d6","#b3b2d6","#b2b1d5","#b1b0d5","#b0afd4","#afaed4","#aeadd3","#aeacd2","#adabd2","#acaad1","#aba9d1","#aaa8d0","#a9a7cf","#a8a6cf","#a7a5ce","#a6a4ce","#a5a3cd","#a4a2cd","#a3a1cc","#a2a0cb","#a19fcb","#a09eca","#9f9dca","#9e9cc9","#9e9ac9","#9d9ac8","#9c99c8","#9b98c7","#9a97c7","#9996c6","#9895c6","#9794c5","#9693c5","#9592c4","#9491c4","#9390c3","#928fc3","#918ec2","#908dc2","#908cc1","#8f8bc1","#8e8ac0","#8d89c0","#8c88bf","#8b87bf","#8a86be","#8985be","#8884bd","#8883bd","#8782bc","#8680bc","#857fbb","#847eba","#837dba","#827cb9","#827bb9","#817ab8","#8079b8","#7f77b7","#7e76b6","#7e75b6","#7d74b5","#7c73b4","#7b71b4","#7b70b3","#7a6fb3","#796eb2","#786cb1","#786bb1","#776ab0","#7668af","#7567af","#7566ae","#7465ad","#7363ad","#7362ac","#7261ab","#715fab","#705eaa","#705ca9","#6f5ba8","#6e5aa8","#6e58a7","#6d57a6","#6c56a6","#6c54a5","#6b53a4","#6a52a4","#6950a3","#694fa2","#684ea2","#674ca1","#674ba0","#664aa0","#65489f","#65479e","#64469e","#63449d","#63439c","#62429c","#61409b","#613f9a","#603e9a","#5f3c99","#5e3b99","#5e3a98","#5d3897","#5c3797","#5c3696","#5b3595","#5a3395","#5a3294","#593194","#582f93","#582e92","#572d92","#562b91","#562a91","#552990","#54288f","#54268f","#53258e","#52248e","#52238d","#51218c","#50208c","#501f8b","#4f1e8b","#4e1c8a","#4e1b8a","#4d1a89","#4c1988","#4c1788","#4b1687","#4a1587","#4a1486","#491286","#481185","#481084","#470f84","#460d83","#460c83","#450b82","#440a82","#440981","#430780","#420680","#42057f","#41047f","#40027e","#40017e","#3f007d"]