import React from 'react';

const sample = [
  {id:1, title:'Spa Tub'},
  {id:2, title:'Refrigerator'},
  {id:3, title:'Hot Tub'}
];

export default function Products(){
  return (
    <div className="page-container">
      <div className="card">
        <h3>Products</h3>
        <div className="products-grid">
          {sample.map(p => (
            <div key={p.id} className="product-card">
              <div><strong>{p.title}</strong></div>
              <div className="muted">Product #{p.id}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}