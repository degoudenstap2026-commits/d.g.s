const grid=document.querySelector('#products');
const search=document.querySelector('#search');
const category=document.querySelector('#category');

[...new Set(products.map(p=>p.category))].sort().forEach(c=>{
  const o=document.createElement('option');
  o.value=c;
  o.textContent=c[0].toUpperCase()+c.slice(1);
  category.appendChild(o);
});

function render(){
  const q=search.value.toLowerCase().trim();
  const cat=category.value;
  const list=products.filter(p =>
    (p.name.toLowerCase().includes(q) || p.category.includes(q)) &&
    (cat==='all' || p.category===cat)
  );

  grid.innerHTML=list.map(p=>`
    <article class="product">
      <div class="img-wrap">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <span>${p.category}</span>
      </div>
      <div class="product-info">
        <h3>${p.name}</h3>
      </div>
    </article>
  `).join('') || '<p>Geen producten gevonden.</p>';
}

search.addEventListener('input',render);
category.addEventListener('change',render);
render();
