const formatter = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export default value => formatter.format(value);