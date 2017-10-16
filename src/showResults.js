export default (async function showResults(values) {
  values["date_of_birth"] = new Date(values.yyyy,values.mnth,values.dd).getTime();
  const res = {
    "user_data": (({email, password, date_of_birth,gender,how_hear_about_us}) =>({email, password, date_of_birth,gender,how_hear_about_us}))(values)
  }
  const replacer = (key,val) =>((typeof(val)==="undefined")?null:val);
  console.log(`${JSON.stringify(res, replacer, 2)}`);
});
