Number.prototype.formatMoney = function(c, d, t){
  let n = this;
  c = isNaN(c = Math.abs(c)) ? 2 : c;
  d = d === undefined ? "." : d;
  t = t === undefined ? "," : t;
  let s = n < 0 ? "-" : "";
  let i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "";
  let j = (j = i.length) > 3 ? j % 3 : 0;
  return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

let months = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "Jun",
  7: "Jul",
  8: "Aug",
  9: "Sept",
  10: "Oct",
  11: "Nov",
  12: "Dec"
};

let loremString = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla felis vitae lacinia facilisis. Curabitur rutrum posuere justo. Integer ut tortor orci. Ut rhoncus congue odio a cursus. Maecenas sapien nulla, fermentum eget eros tincidunt, condimentum tempor lacus. Vivamus pulvinar sagittis mattis. Duis diam tellus, lacinia in blandit convallis, molestie vitae enim. Nam mauris justo, mattis sit amet massa id, ultricies porta lacus. Proin velit turpis, suscipit laoreet tempor in, dignissim eget ex. Vivamus et mi quis velit faucibus porttitor.

Donec semper nisl finibus ornare gravida. Phasellus porttitor sollicitudin dui vel posuere. In at ex ac ligula egestas congue. Vestibulum leo nulla, aliquet vitae suscipit eu, gravida eu ex. Nulla elementum fringilla tincidunt. Nulla facilisi. Cras porta luctus nisi at vehicula. Proin ut nisl neque. Nullam non facilisis enim. Vestibulum fermentum in lectus in rutrum.

Vivamus eu sapien pretium, interdum sapien vitae, tincidunt nibh. In ac turpis ac nulla laoreet iaculis a a justo. Aenean vehicula diam quis finibus gravida. Donec in metus pulvinar libero vulputate finibus. Vestibulum sit amet arcu in velit ullamcorper rhoncus consequat id tellus. Suspendisse vitae nunc efficitur, dictum sem sit amet, vestibulum risus. Cras hendrerit odio tellus, a efficitur orci bibendum at. Nullam aliquam dignissim nisl non fringilla. Sed iaculis, magna eu sagittis cursus, enim tortor dictum nulla, nec semper quam justo id ex. Aenean sed elit luctus lacus ullamcorper faucibus. Nam a imperdiet odio. Phasellus tincidunt sapien eget vestibulum malesuada. Nam in iaculis est, vel mollis ipsum.

Donec vehicula venenatis pretium. Vestibulum ornare bibendum felis, in vehicula dolor luctus nec. Pellentesque ut viverra nunc, eu placerat diam. Nunc est magna, commodo id ante non, porttitor ultrices tortor. Duis scelerisque, justo quis pellentesque faucibus, mi felis vehicula sapien, non porttitor justo elit id metus. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut placerat lorem. Praesent finibus neque eget eros dignissim tincidunt. Nullam fringilla vitae mauris vel finibus.

Proin eu consequat lectus, nec interdum mi. Duis elementum augue nec dui rhoncus, et venenatis metus scelerisque. Donec quis urna nec mi sollicitudin congue. Ut rhoncus sed nisl vel blandit. Fusce aliquam magna at nunc bibendum, quis lobortis velit posuere. Curabitur accumsan et nunc commodo volutpat. Nullam velit dui, aliquam vitae placerat eget, ultricies eget neque.
`;

let loremString2 = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla felis vitae lacinia facilisis. Curabitur rutrum posuere justo. Integer ut tortor orci. Ut rhoncus congue odio a cursus. Maecenas sapien nulla, fermentum eget eros tincidunt, condimentum tempor lacus. Vivamus pulvinar sagittis mattis. Duis diam tellus, lacinia in blandit convallis, molestie vitae enim. Nam mauris justo, mattis sit amet massa id, ultricies porta lacus. Proin velit turpis, suscipit laoreet tempor in, dignissim eget ex. Vivamus et mi quis velit faucibus porttitor.

Donec semper nisl finibus ornare gravida. Phasellus porttitor sollicitudin dui vel posuere. In at ex ac ligula egestas congue. Vestibulum leo nulla, aliquet vitae suscipit eu, gravida eu ex. Nulla elementum fringilla tincidunt. Nulla facilisi. Cras porta luctus nisi at vehicula. Proin ut nisl neque. Nullam non facilisis enim. Vestibulum fermentum in lectus in rutrum.

Vivamus eu sapien pretium, interdum sapien vitae, tincidunt nibh. In ac turpis ac nulla laoreet iaculis a a justo. Aenean vehicula diam quis finibus gravida. Donec in metus pulvinar libero vulputate finibus. Vestibulum sit amet arcu in velit ullamcorper rhoncus consequat id tellus. Suspendisse vitae nunc efficitur, dictum sem sit amet, vestibulum risus. Cras hendrerit odio tellus, a efficitur orci bibendum at. Nullam aliquam dignissim nisl non fringilla. Sed iaculis, magna eu sagittis cursus, enim tortor dictum nulla, nec semper quam justo id ex. Aenean sed elit luctus lacus ullamcorper faucibus. Nam a imperdiet odio. Phasellus tincidunt sapien eget vestibulum malesuada. Nam in iaculis est, vel mollis ipsum.

Donec vehicula venenatis pretium. Vestibulum ornare bibendum felis, in vehicula dolor luctus nec. Pellentesque ut viverra nunc, eu placerat diam. Nunc est magna, commodo id ante non, porttitor ultrices tortor. Duis scelerisque, justo quis pellentesque faucibus, mi felis vehicula sapien, non porttitor justo elit id metus. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut placerat lorem. Praesent finibus neque eget eros dignissim tincidunt. Nullam fringilla vitae mauris vel finibus.

Proin eu consequat lectus, nec interdum mi. Duis elementum augue nec dui rhoncus, et venenatis metus scelerisque. Donec quis urna nec mi sollicitudin congue. Ut rhoncus sed nisl vel blandit. Fusce aliquam magna at nunc bibendum, quis lobortis velit posuere. Curabitur accumsan et nunc commodo volutpat. Nullam velit dui, aliquam vitae placerat eget, ultricies eget neque.

Pellentesque vestibulum quis odio ut vulputate. Nullam accumsan metus sed accumsan congue. Ut euismod porttitor tortor, eget malesuada purus rutrum scelerisque. Suspendisse congue nisl a feugiat fermentum. In venenatis, dui ac scelerisque suscipit, tortor nulla feugiat enim, non aliquet diam mi eu nisl. Suspendisse venenatis tellus quam, ac placerat orci euismod in. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur facilisis pulvinar mi, eget scelerisque dolor eleifend ut. Sed consequat justo vitae mauris ornare commodo. Nunc consequat, tellus sit amet dictum faucibus, erat enim elementum nisl, et volutpat dui felis at nibh.

Nullam eget metus et nulla semper efficitur vitae eu mauris. Nulla aliquet eu libero sit amet dignissim. Pellentesque in venenatis sapien. Ut enim elit, blandit quis vestibulum vitae, euismod quis nisi. Mauris ac iaculis lectus. Praesent aliquet varius ex, at blandit risus viverra nec. Nullam tempor, neque efficitur scelerisque euismod, nisl eros semper nibh, quis egestas dolor lectus ac arcu. Duis lacus risus, pretium in pulvinar vel, vestibulum imperdiet eros. Nam mattis, libero in porta blandit, libero magna finibus nibh, in consectetur libero nibh eu metus. Sed porttitor id metus a vehicula. Etiam aliquet dui vel elit ullamcorper porttitor. Mauris vitae luctus sapien.

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam massa tortor, dignissim sodales sapien placerat, convallis interdum purus. Nullam interdum id tellus non commodo. Suspendisse ut massa molestie, pretium tellus ut, placerat odio. Quisque varius efficitur enim id tristique. Integer efficitur dictum placerat. Donec eget tellus eu lacus eleifend tempor ut quis dui. Proin ligula nibh, euismod quis efficitur nec, hendrerit id sapien. Maecenas at sapien efficitur, imperdiet ex nec, iaculis leo.

Curabitur a vehicula ipsum, nec faucibus ex. Quisque leo ligula, sagittis ac molestie a, fringilla accumsan augue. Vivamus ut arcu rhoncus dui interdum porta vitae nec nunc. Duis iaculis lacus eget purus laoreet, a mattis nisl consectetur. Quisque ut tempor turpis. Nulla iaculis, turpis sit amet mollis vehicula, arcu sem pretium velit, id ornare ipsum elit quis libero. Nunc sed varius dolor, sit amet finibus ante. Integer quis maximus dolor, nec pharetra diam. Vivamus sed mauris lacus. Phasellus dapibus libero elit, et aliquet purus sollicitudin sit amet. Curabitur cursus nulla eu luctus hendrerit. Sed tincidunt nec lacus non sodales. Phasellus tortor justo, egestas ac faucibus at, venenatis a massa.

Sed iaculis mollis justo maximus interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat dolor neque, at molestie est mollis nec. Quisque ornare nulla id justo consectetur pharetra. Praesent fringilla a tellus ac dapibus. Vivamus suscipit dolor odio, ut tempor nisl hendrerit ut. Vestibulum vitae condimentum metus, eget condimentum massa. Praesent sodales est vitae volutpat dignissim. Aliquam congue, augue id sodales mollis, tellus felis ullamcorper sem, eu aliquet augue purus ut tellus. Duis tellus libero, tincidunt semper feugiat vel, fringilla eget sapien. Sed ac urna ac leo molestie sollicitudin. Phasellus ac eleifend tortor, et dictum urna. Praesent laoreet malesuada metus, id ullamcorper ligula mollis sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur ut lorem ultricies, egestas leo a, accumsan odio. Pellentesque ac diam at nulla tempus tempor vitae et quam.

Duis eleifend, sem in dictum imperdiet, orci tortor lacinia nulla, a tincidunt dolor turpis finibus mi. Phasellus ullamcorper euismod dolor nec iaculis. Aliquam vehicula porttitor augue, id mollis mi cursus eget. Aliquam sem purus, sodales non semper vel, feugiat consectetur mauris. Praesent tortor augue, condimentum nec mattis eu, dictum sed metus. Curabitur nec sapien vitae nisi maximus volutpat sit amet at lorem. Donec sed eros et massa luctus efficitur. Donec eget dignissim diam. Nulla condimentum velit a ipsum finibus, a interdum arcu mattis. Sed ipsum orci, pulvinar in ipsum ac, accumsan pretium dolor. Morbi maximus tortor vel erat aliquet, eget tincidunt dui rutrum.

Donec aliquam ligula sed eros sollicitudin, id semper libero faucibus. Sed dolor dui, lacinia nec faucibus eu, consequat ut neque. Aliquam dolor metus, consequat id urna scelerisque, aliquam convallis felis. Pellentesque lacinia condimentum ipsum nec lobortis. Nam libero sem, imperdiet sit amet purus quis, condimentum mattis tellus. Nulla pretium viverra libero, at ornare lectus tincidunt sed. Praesent bibendum iaculis molestie. Praesent nulla nisi, ultrices at nisi sit amet, vestibulum sagittis risus. Ut sed posuere odio, vitae interdum ligula. Curabitur nec diam eget elit hendrerit accumsan. Quisque molestie a est rhoncus dapibus. Aliquam rhoncus pharetra velit in dictum. Proin commodo lectus in justo vestibulum, a molestie sem bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

Praesent vulputate pulvinar erat, quis vulputate ante fringilla pharetra. Proin vel pulvinar ex, eget consectetur odio. Etiam commodo arcu vitae accumsan fringilla. Sed sed dignissim massa. Fusce lacus ante, vulputate vel bibendum quis, scelerisque sed risus. Donec eu augue odio. Sed viverra velit dui, a volutpat tortor fermentum ut. Sed lacinia enim velit, in pellentesque turpis mattis sed. Phasellus justo urna, ultrices et imperdiet laoreet, varius id tortor. In non aliquet purus, eu sodales ipsum. Vestibulum sit amet quam quis ipsum gravida auctor eget ac lorem. Nullam ac vestibulum risus. Nam libero nulla, pellentesque vel dolor eu, pretium dapibus lorem. Nam viverra dictum sollicitudin.

Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent in venenatis tellus. Cras elementum felis in turpis sagittis elementum. Suspendisse sit amet purus massa. Mauris sollicitudin varius convallis. Donec finibus felis sed laoreet gravida. Cras tellus dolor, dignissim sed aliquam vitae, viverra sed ligula. Proin viverra risus in neque laoreet, sed vestibulum dolor tempor. Phasellus at maximus justo. Vestibulum rhoncus, magna vitae elementum finibus, quam dolor tincidunt ante, non vehicula orci eros quis turpis. Sed faucibus condimentum sollicitudin. Quisque placerat odio at purus ullamcorper, ut tempor ipsum ullamcorper. Aliquam quis suscipit tellus. Quisque mi magna, feugiat a odio non, interdum iaculis lorem. Integer dapibus felis nibh, in sodales mauris malesuada nec. Integer id vehicula felis.

Sed rhoncus magna at sollicitudin rutrum. Praesent nulla dui, vulputate quis aliquam vel, luctus non ante. Donec sem magna, mollis in interdum non, tincidunt quis ligula. Nullam sem erat, placerat ut consequat sed, mattis id arcu. Nulla congue urna at arcu pellentesque, a cursus magna semper. Cras in vestibulum lectus, in aliquet sem. Aenean in leo at nibh finibus sollicitudin a id ligula.

Vestibulum vel velit vitae tellus pellentesque auctor eu nec sapien. Nullam finibus purus in orci bibendum hendrerit. Etiam rutrum orci maximus facilisis blandit. Integer sit amet orci luctus, luctus erat nec, pellentesque risus. Morbi nec turpis sagittis, tristique odio in, vulputate elit. Duis nec convallis dui. Praesent vitae dictum mi. Fusce lobortis hendrerit turpis, nec laoreet urna tincidunt eu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus scelerisque risus nulla, eu gravida lectus scelerisque et. Vivamus sit amet euismod arcu. Ut justo ante, blandit nec semper vitae, consequat sed justo. Nunc ac viverra leo. Aenean est diam, placerat sed fringilla ac, accumsan sit amet nunc.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque aliquet, diam mollis euismod pellentesque, nulla odio rhoncus ex, at scelerisque dui est at lacus. Duis elementum magna vel blandit eleifend. Sed tristique, erat nec lacinia scelerisque, purus augue mattis metus, vel dapibus nisl ligula nec metus. Proin nibh turpis, condimentum id nibh et, aliquet sodales nisi. Sed in porta eros. Cras vulputate mi orci, eu venenatis ipsum dapibus sit amet. Nam quis lacinia enim, ut convallis enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam tincidunt consectetur ipsum sed bibendum. Sed et condimentum massa, a suscipit dolor. Nunc nunc nisl, pellentesque eget blandit eget, convallis ut mauris.

Aenean ultrices ligula sit amet ipsum suscipit pretium. Sed malesuada nec metus nec vestibulum. Cras blandit molestie leo, eu gravida eros luctus in. Proin vehicula ornare aliquam. Aliquam non eros vehicula, pretium purus a, vehicula leo. Donec tincidunt sagittis sem. Duis dui arcu, fermentum at felis non, vulputate pharetra augue.

Integer non turpis leo. Donec sodales egestas ligula in egestas. Sed interdum nunc non mollis suscipit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam porttitor fermentum metus. Sed magna justo, auctor vel accumsan nec, congue ut ante. Nullam egestas felis sit amet libero aliquam aliquam. Ut finibus ipsum quis purus aliquet feugiat. Curabitur nisi turpis, malesuada id malesuada non, condimentum id mauris. Nulla vulputate, erat id viverra ornare, est enim dignissim est, eget molestie nunc lectus id justo. Cras porta justo orci, at feugiat risus ornare id. Mauris ut interdum arcu. Nam in dolor convallis, gravida tortor sed, fringilla est. Vestibulum at mi vestibulum, lobortis nulla et, aliquam neque.

Donec vehicula nisl luctus metus pharetra, at bibendum diam pulvinar. Nam felis arcu, suscipit quis condimentum consectetur, posuere tempus sapien. Nam et magna ut dui egestas posuere. Etiam quis urna sollicitudin, placerat nunc sed, lacinia libero. Pellentesque accumsan ipsum in felis finibus, sit amet consequat orci euismod. Integer facilisis felis erat, non venenatis tortor finibus in. Sed dictum sed ex sit amet rutrum. Nunc id arcu non lorem euismod facilisis. Mauris sed felis ultricies, aliquet lectus ut, fringilla diam.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas gravida eros lacinia dolor bibendum porttitor. Vestibulum sodales, eros at lobortis aliquam, metus ipsum varius justo, et posuere nunc metus sit amet dolor. Curabitur vel auctor mi. In quis mi ac orci vulputate blandit nec vitae mi. Aenean vehicula tellus mattis, eleifend augue vel, tincidunt dolor. Nullam malesuada, lorem vestibulum vestibulum auctor, nunc sapien posuere quam, et malesuada velit dui pellentesque arcu. Fusce ante elit, varius et viverra sit amet, condimentum mollis eros. Sed ut dui nec nisl tempus malesuada eget ac mi. Etiam sit amet ipsum in mauris consectetur ullamcorper quis nec diam. Proin sodales pellentesque est, vel viverra odio sodales vitae. Nulla eu orci porttitor, vehicula quam sit amet, auctor elit. Phasellus eu orci sit amet dui maximus mattis sed venenatis nunc. Cras molestie rhoncus blandit. Etiam cursus diam urna, quis dignissim urna cursus scelerisque.

Etiam urna lectus, commodo vitae tincidunt eu, dapibus eu justo. Duis feugiat tristique elit. Nulla velit sem, luctus in lacus a, tempus viverra purus. Integer id eros ex. Nam gravida magna ac nisl efficitur pellentesque. Vivamus eleifend ut lectus at rhoncus. Suspendisse at rhoncus metus. Vivamus elementum sapien erat, non rhoncus leo bibendum ut. Maecenas suscipit diam a euismod facilisis. Integer sit amet urna ipsum. Etiam elementum at purus id fermentum. Nunc sodales ex lorem, vitae auctor eros commodo ut. Curabitur pharetra sed libero non malesuada. Nunc facilisis sapien at eros volutpat faucibus.

Sed scelerisque faucibus eleifend. Suspendisse iaculis tempus nulla non sagittis. Aenean massa sem, tempus eget convallis vel, varius id elit. Ut finibus tellus eu leo congue mollis. Integer iaculis sem nibh, id mollis nisi dictum nec. Morbi vestibulum elit fermentum posuere egestas. Pellentesque nisi tellus, congue sed lorem ut, imperdiet ornare magna. In hac habitasse platea dictumst.

Nullam sodales odio ac odio fringilla, in tempor nibh gravida. Vestibulum eros lectus, fringilla sit amet facilisis ac, accumsan ut libero. Proin ligula nunc, interdum a ante sit amet, sagittis laoreet odio. Mauris nec tortor velit. Quisque eu ante est. In eget consectetur ipsum. Nullam ut bibendum justo. Donec nec dapibus nisi. Duis laoreet magna in erat eleifend, quis tempus risus aliquet. Donec feugiat mi suscipit lacus egestas bibendum. Nunc id dolor bibendum, viverra ipsum et, malesuada sem. Etiam quis libero ut dui accumsan maximus in vel nibh. Maecenas nisl nisi, suscipit ac metus at, dapibus malesuada erat. Nam aliquam mi id elementum ultricies.

Pellentesque interdum convallis feugiat. Integer ultricies eget magna quis pharetra. Aenean enim urna, molestie ut lacus vitae, sollicitudin vulputate arcu. Mauris ut ligula vel lacus dapibus mattis. Nunc massa tortor, volutpat in nisi non, mattis ullamcorper nulla. Duis commodo nulla non elementum vestibulum. Ut id venenatis lectus. Sed ultricies dictum ornare. Vivamus lacinia, urna eu vulputate blandit, sem dui semper sapien, id gravida nulla massa ac nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris eu mattis leo. Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sit amet vehicula nisi, eget hendrerit dolor.

Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec gravida finibus aliquam. Sed id ante rutrum, tempor enim non, tempus elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla ornare fringilla est, at consequat massa consequat quis. Aliquam nec arcu ac erat pharetra fringilla sed ac tortor. Nunc pellentesque quis dui in bibendum. Praesent in risus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam convallis enim, ac pulvinar purus tristique ut. Integer id efficitur ligula. Pellentesque tincidunt mauris ac magna vestibulum, non malesuada felis facilisis. Praesent volutpat, velit ut laoreet dictum, risus ante imperdiet lorem, semper congue elit erat ac ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id sodales ex. Etiam faucibus pellentesque arcu vitae cursus.

Praesent convallis neque risus, a interdum nunc laoreet varius. Aenean congue libero urna, sit amet accumsan dolor ultrices sed. Integer ut neque mauris. Sed faucibus, ante sit amet pretium ultrices, velit diam imperdiet justo, eu aliquam est urna ut velit. Donec sed posuere arcu, eu bibendum velit. Duis et augue gravida, varius metus sit amet, porta est. Pellentesque condimentum imperdiet ligula, eu malesuada libero tempus eget. Nullam consequat felis sed risus fermentum luctus. Nunc commodo vitae enim eget laoreet. Phasellus convallis, neque quis volutpat ullamcorper, felis urna sodales purus, ut viverra enim eros vitae arcu. Nulla consequat varius est vitae ultrices. Donec ornare iaculis varius. Integer id tempus augue, vitae ornare quam.

Vestibulum interdum elementum tellus sit amet porttitor. Phasellus ultrices, orci vel gravida facilisis, elit purus vehicula massa, a commodo elit dui vitae erat. Phasellus ac malesuada justo. Etiam euismod enim nulla, quis congue nunc consectetur dictum. Praesent vitae iaculis purus. Nam ultricies, augue ut finibus molestie, est elit maximus lacus, nec pulvinar nisl arcu fringilla sem. Fusce luctus, velit quis egestas volutpat, leo tortor blandit augue, nec congue velit felis quis quam. Donec vitae nulla sed tortor tincidunt interdum ut vitae mi. Mauris id posuere justo.

Donec convallis sem augue, nec lobortis tellus vulputate sed. Integer laoreet elit ut mattis pulvinar. Nunc bibendum neque eu urna condimentum laoreet. Praesent a ligula quis odio aliquam euismod vel vel lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis eros metus, fermentum at erat a, fermentum mollis ante. Quisque elementum felis ac dui dignissim, eu accumsan massa convallis. Fusce gravida felis justo, non dictum nibh rutrum non. Pellentesque sodales accumsan ligula, a sollicitudin tortor aliquam eu. Vestibulum faucibus mi nunc, sed iaculis turpis mollis id. Proin sagittis, tellus et gravida blandit, nibh nulla aliquam arcu, porta suscipit turpis risus ac nulla. Donec ut tincidunt ipsum. Duis ut nisi hendrerit nibh accumsan gravida vitae non enim. Nulla tincidunt magna hendrerit orci egestas, eget viverra tellus luctus.

Sed ultrices tortor a turpis dignissim porttitor. Vivamus ornare euismod libero vel accumsan. Fusce ut urna mauris. Nulla facilisi. Donec vel venenatis est, ut semper sem. Praesent pharetra in ante nec ornare. Nam feugiat volutpat faucibus. Curabitur tellus tellus, porta nec nibh a, iaculis efficitur mauris. Donec auctor efficitur urna, et pulvinar metus varius nec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
strings!`;

module.exports = {
  parseDollarAmount(amount) {
    // if (!amount) return "$0";
    // return "$" + amount.formatMoney(0);
    return "$" + this.parseAmount(amount);
  },

  parseAmount(amount) {
    if (!amount) return "0";


    return amount.formatMoney(0);
  },

  backers(amount) {
    return (amount === 1) ? "backer" : "backers";
  },

  parseBackers(amount){
    return this.parseAmount(amount) + " " + this.backers(amount);
  },

  lorem: loremString,
  months

};
