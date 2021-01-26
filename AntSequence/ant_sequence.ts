export function ant_sequence(seq: string) {
  const ant_reg_exp = new RegExp(/(\d)\1+/g);
  return seq.replace(ant_reg_exp, (m, s) => s + m.length);
}
