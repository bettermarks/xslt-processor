'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var he = createCommonjsModule(function (module, exports) {
(function(root) {

	// Detect free variables `exports`.
	var freeExports = 'object' == 'object' && exports;

	// Detect free variable `module`.
	var freeModule = 'object' == 'object' && module &&
		module.exports == freeExports && module;

	// Detect free variable `global`, from Node.js or Browserified code,
	// and use it as `root`.
	var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal;
	if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
		root = freeGlobal;
	}

	/*--------------------------------------------------------------------------*/

	// All astral symbols.
	var regexAstralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
	// All ASCII symbols (not just printable ASCII) except those listed in the
	// first column of the overrides table.
	// https://html.spec.whatwg.org/multipage/syntax.html#table-charref-overrides
	var regexAsciiWhitelist = /[\x01-\x7F]/g;
	// All BMP symbols that are not ASCII newlines, printable ASCII symbols, or
	// code points listed in the first column of the overrides table on
	// https://html.spec.whatwg.org/multipage/syntax.html#table-charref-overrides.
	var regexBmpWhitelist = /[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g;

	var regexEncodeNonAscii = /<\u20D2|=\u20E5|>\u20D2|\u205F\u200A|\u219D\u0338|\u2202\u0338|\u2220\u20D2|\u2229\uFE00|\u222A\uFE00|\u223C\u20D2|\u223D\u0331|\u223E\u0333|\u2242\u0338|\u224B\u0338|\u224D\u20D2|\u224E\u0338|\u224F\u0338|\u2250\u0338|\u2261\u20E5|\u2264\u20D2|\u2265\u20D2|\u2266\u0338|\u2267\u0338|\u2268\uFE00|\u2269\uFE00|\u226A\u0338|\u226A\u20D2|\u226B\u0338|\u226B\u20D2|\u227F\u0338|\u2282\u20D2|\u2283\u20D2|\u228A\uFE00|\u228B\uFE00|\u228F\u0338|\u2290\u0338|\u2293\uFE00|\u2294\uFE00|\u22B4\u20D2|\u22B5\u20D2|\u22D8\u0338|\u22D9\u0338|\u22DA\uFE00|\u22DB\uFE00|\u22F5\u0338|\u22F9\u0338|\u2933\u0338|\u29CF\u0338|\u29D0\u0338|\u2A6D\u0338|\u2A70\u0338|\u2A7D\u0338|\u2A7E\u0338|\u2AA1\u0338|\u2AA2\u0338|\u2AAC\uFE00|\u2AAD\uFE00|\u2AAF\u0338|\u2AB0\u0338|\u2AC5\u0338|\u2AC6\u0338|\u2ACB\uFE00|\u2ACC\uFE00|\u2AFD\u20E5|[\xA0-\u0113\u0116-\u0122\u0124-\u012B\u012E-\u014D\u0150-\u017E\u0192\u01B5\u01F5\u0237\u02C6\u02C7\u02D8-\u02DD\u0311\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1\u03D2\u03D5\u03D6\u03DC\u03DD\u03F0\u03F1\u03F5\u03F6\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E\u045F\u2002-\u2005\u2007-\u2010\u2013-\u2016\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2025\u2026\u2030-\u2035\u2039\u203A\u203E\u2041\u2043\u2044\u204F\u2057\u205F-\u2063\u20AC\u20DB\u20DC\u2102\u2105\u210A-\u2113\u2115-\u211E\u2122\u2124\u2127-\u2129\u212C\u212D\u212F-\u2131\u2133-\u2138\u2145-\u2148\u2153-\u215E\u2190-\u219B\u219D-\u21A7\u21A9-\u21AE\u21B0-\u21B3\u21B5-\u21B7\u21BA-\u21DB\u21DD\u21E4\u21E5\u21F5\u21FD-\u2205\u2207-\u2209\u220B\u220C\u220F-\u2214\u2216-\u2218\u221A\u221D-\u2238\u223A-\u2257\u2259\u225A\u225C\u225F-\u2262\u2264-\u228B\u228D-\u229B\u229D-\u22A5\u22A7-\u22B0\u22B2-\u22BB\u22BD-\u22DB\u22DE-\u22E3\u22E6-\u22F7\u22F9-\u22FE\u2305\u2306\u2308-\u2310\u2312\u2313\u2315\u2316\u231C-\u231F\u2322\u2323\u232D\u232E\u2336\u233D\u233F\u237C\u23B0\u23B1\u23B4-\u23B6\u23DC-\u23DF\u23E2\u23E7\u2423\u24C8\u2500\u2502\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\u2550-\u256C\u2580\u2584\u2588\u2591-\u2593\u25A1\u25AA\u25AB\u25AD\u25AE\u25B1\u25B3-\u25B5\u25B8\u25B9\u25BD-\u25BF\u25C2\u25C3\u25CA\u25CB\u25EC\u25EF\u25F8-\u25FC\u2605\u2606\u260E\u2640\u2642\u2660\u2663\u2665\u2666\u266A\u266D-\u266F\u2713\u2717\u2720\u2736\u2758\u2772\u2773\u27C8\u27C9\u27E6-\u27ED\u27F5-\u27FA\u27FC\u27FF\u2902-\u2905\u290C-\u2913\u2916\u2919-\u2920\u2923-\u292A\u2933\u2935-\u2939\u293C\u293D\u2945\u2948-\u294B\u294E-\u2976\u2978\u2979\u297B-\u297F\u2985\u2986\u298B-\u2996\u299A\u299C\u299D\u29A4-\u29B7\u29B9\u29BB\u29BC\u29BE-\u29C5\u29C9\u29CD-\u29D0\u29DC-\u29DE\u29E3-\u29E5\u29EB\u29F4\u29F6\u2A00-\u2A02\u2A04\u2A06\u2A0C\u2A0D\u2A10-\u2A17\u2A22-\u2A27\u2A29\u2A2A\u2A2D-\u2A31\u2A33-\u2A3C\u2A3F\u2A40\u2A42-\u2A4D\u2A50\u2A53-\u2A58\u2A5A-\u2A5D\u2A5F\u2A66\u2A6A\u2A6D-\u2A75\u2A77-\u2A9A\u2A9D-\u2AA2\u2AA4-\u2AB0\u2AB3-\u2AC8\u2ACB\u2ACC\u2ACF-\u2ADB\u2AE4\u2AE6-\u2AE9\u2AEB-\u2AF3\u2AFD\uFB00-\uFB04]|\uD835[\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDD6B]/g;
	var encodeMap = {'\xAD':'shy','\u200C':'zwnj','\u200D':'zwj','\u200E':'lrm','\u2063':'ic','\u2062':'it','\u2061':'af','\u200F':'rlm','\u200B':'ZeroWidthSpace','\u2060':'NoBreak','\u0311':'DownBreve','\u20DB':'tdot','\u20DC':'DotDot','\t':'Tab','\n':'NewLine','\u2008':'puncsp','\u205F':'MediumSpace','\u2009':'thinsp','\u200A':'hairsp','\u2004':'emsp13','\u2002':'ensp','\u2005':'emsp14','\u2003':'emsp','\u2007':'numsp','\xA0':'nbsp','\u205F\u200A':'ThickSpace','\u203E':'oline','_':'lowbar','\u2010':'dash','\u2013':'ndash','\u2014':'mdash','\u2015':'horbar',',':'comma',';':'semi','\u204F':'bsemi',':':'colon','\u2A74':'Colone','!':'excl','\xA1':'iexcl','?':'quest','\xBF':'iquest','.':'period','\u2025':'nldr','\u2026':'mldr','\xB7':'middot','\'':'apos','\u2018':'lsquo','\u2019':'rsquo','\u201A':'sbquo','\u2039':'lsaquo','\u203A':'rsaquo','"':'quot','\u201C':'ldquo','\u201D':'rdquo','\u201E':'bdquo','\xAB':'laquo','\xBB':'raquo','(':'lpar',')':'rpar','[':'lsqb',']':'rsqb','{':'lcub','}':'rcub','\u2308':'lceil','\u2309':'rceil','\u230A':'lfloor','\u230B':'rfloor','\u2985':'lopar','\u2986':'ropar','\u298B':'lbrke','\u298C':'rbrke','\u298D':'lbrkslu','\u298E':'rbrksld','\u298F':'lbrksld','\u2990':'rbrkslu','\u2991':'langd','\u2992':'rangd','\u2993':'lparlt','\u2994':'rpargt','\u2995':'gtlPar','\u2996':'ltrPar','\u27E6':'lobrk','\u27E7':'robrk','\u27E8':'lang','\u27E9':'rang','\u27EA':'Lang','\u27EB':'Rang','\u27EC':'loang','\u27ED':'roang','\u2772':'lbbrk','\u2773':'rbbrk','\u2016':'Vert','\xA7':'sect','\xB6':'para','@':'commat','*':'ast','/':'sol','undefined':null,'&':'amp','#':'num','%':'percnt','\u2030':'permil','\u2031':'pertenk','\u2020':'dagger','\u2021':'Dagger','\u2022':'bull','\u2043':'hybull','\u2032':'prime','\u2033':'Prime','\u2034':'tprime','\u2057':'qprime','\u2035':'bprime','\u2041':'caret','`':'grave','\xB4':'acute','\u02DC':'tilde','^':'Hat','\xAF':'macr','\u02D8':'breve','\u02D9':'dot','\xA8':'die','\u02DA':'ring','\u02DD':'dblac','\xB8':'cedil','\u02DB':'ogon','\u02C6':'circ','\u02C7':'caron','\xB0':'deg','\xA9':'copy','\xAE':'reg','\u2117':'copysr','\u2118':'wp','\u211E':'rx','\u2127':'mho','\u2129':'iiota','\u2190':'larr','\u219A':'nlarr','\u2192':'rarr','\u219B':'nrarr','\u2191':'uarr','\u2193':'darr','\u2194':'harr','\u21AE':'nharr','\u2195':'varr','\u2196':'nwarr','\u2197':'nearr','\u2198':'searr','\u2199':'swarr','\u219D':'rarrw','\u219D\u0338':'nrarrw','\u219E':'Larr','\u219F':'Uarr','\u21A0':'Rarr','\u21A1':'Darr','\u21A2':'larrtl','\u21A3':'rarrtl','\u21A4':'mapstoleft','\u21A5':'mapstoup','\u21A6':'map','\u21A7':'mapstodown','\u21A9':'larrhk','\u21AA':'rarrhk','\u21AB':'larrlp','\u21AC':'rarrlp','\u21AD':'harrw','\u21B0':'lsh','\u21B1':'rsh','\u21B2':'ldsh','\u21B3':'rdsh','\u21B5':'crarr','\u21B6':'cularr','\u21B7':'curarr','\u21BA':'olarr','\u21BB':'orarr','\u21BC':'lharu','\u21BD':'lhard','\u21BE':'uharr','\u21BF':'uharl','\u21C0':'rharu','\u21C1':'rhard','\u21C2':'dharr','\u21C3':'dharl','\u21C4':'rlarr','\u21C5':'udarr','\u21C6':'lrarr','\u21C7':'llarr','\u21C8':'uuarr','\u21C9':'rrarr','\u21CA':'ddarr','\u21CB':'lrhar','\u21CC':'rlhar','\u21D0':'lArr','\u21CD':'nlArr','\u21D1':'uArr','\u21D2':'rArr','\u21CF':'nrArr','\u21D3':'dArr','\u21D4':'iff','\u21CE':'nhArr','\u21D5':'vArr','\u21D6':'nwArr','\u21D7':'neArr','\u21D8':'seArr','\u21D9':'swArr','\u21DA':'lAarr','\u21DB':'rAarr','\u21DD':'zigrarr','\u21E4':'larrb','\u21E5':'rarrb','\u21F5':'duarr','\u21FD':'loarr','\u21FE':'roarr','\u21FF':'hoarr','\u2200':'forall','\u2201':'comp','\u2202':'part','\u2202\u0338':'npart','\u2203':'exist','\u2204':'nexist','\u2205':'empty','\u2207':'Del','\u2208':'in','\u2209':'notin','\u220B':'ni','\u220C':'notni','\u03F6':'bepsi','\u220F':'prod','\u2210':'coprod','\u2211':'sum','+':'plus','\xB1':'pm','\xF7':'div','\xD7':'times','<':'lt','\u226E':'nlt','<\u20D2':'nvlt','=':'equals','\u2260':'ne','=\u20E5':'bne','\u2A75':'Equal','>':'gt','\u226F':'ngt','>\u20D2':'nvgt','\xAC':'not','|':'vert','\xA6':'brvbar','\u2212':'minus','\u2213':'mp','\u2214':'plusdo','\u2044':'frasl','\u2216':'setmn','\u2217':'lowast','\u2218':'compfn','\u221A':'Sqrt','\u221D':'prop','\u221E':'infin','\u221F':'angrt','\u2220':'ang','\u2220\u20D2':'nang','\u2221':'angmsd','\u2222':'angsph','\u2223':'mid','\u2224':'nmid','\u2225':'par','\u2226':'npar','\u2227':'and','\u2228':'or','\u2229':'cap','\u2229\uFE00':'caps','\u222A':'cup','\u222A\uFE00':'cups','\u222B':'int','\u222C':'Int','\u222D':'tint','\u2A0C':'qint','\u222E':'oint','\u222F':'Conint','\u2230':'Cconint','\u2231':'cwint','\u2232':'cwconint','\u2233':'awconint','\u2234':'there4','\u2235':'becaus','\u2236':'ratio','\u2237':'Colon','\u2238':'minusd','\u223A':'mDDot','\u223B':'homtht','\u223C':'sim','\u2241':'nsim','\u223C\u20D2':'nvsim','\u223D':'bsim','\u223D\u0331':'race','\u223E':'ac','\u223E\u0333':'acE','\u223F':'acd','\u2240':'wr','\u2242':'esim','\u2242\u0338':'nesim','\u2243':'sime','\u2244':'nsime','\u2245':'cong','\u2247':'ncong','\u2246':'simne','\u2248':'ap','\u2249':'nap','\u224A':'ape','\u224B':'apid','\u224B\u0338':'napid','\u224C':'bcong','\u224D':'CupCap','\u226D':'NotCupCap','\u224D\u20D2':'nvap','\u224E':'bump','\u224E\u0338':'nbump','\u224F':'bumpe','\u224F\u0338':'nbumpe','\u2250':'doteq','\u2250\u0338':'nedot','\u2251':'eDot','\u2252':'efDot','\u2253':'erDot','\u2254':'colone','\u2255':'ecolon','\u2256':'ecir','\u2257':'cire','\u2259':'wedgeq','\u225A':'veeeq','\u225C':'trie','\u225F':'equest','\u2261':'equiv','\u2262':'nequiv','\u2261\u20E5':'bnequiv','\u2264':'le','\u2270':'nle','\u2264\u20D2':'nvle','\u2265':'ge','\u2271':'nge','\u2265\u20D2':'nvge','\u2266':'lE','\u2266\u0338':'nlE','\u2267':'gE','\u2267\u0338':'ngE','\u2268\uFE00':'lvnE','\u2268':'lnE','\u2269':'gnE','\u2269\uFE00':'gvnE','\u226A':'ll','\u226A\u0338':'nLtv','\u226A\u20D2':'nLt','\u226B':'gg','\u226B\u0338':'nGtv','\u226B\u20D2':'nGt','\u226C':'twixt','\u2272':'lsim','\u2274':'nlsim','\u2273':'gsim','\u2275':'ngsim','\u2276':'lg','\u2278':'ntlg','\u2277':'gl','\u2279':'ntgl','\u227A':'pr','\u2280':'npr','\u227B':'sc','\u2281':'nsc','\u227C':'prcue','\u22E0':'nprcue','\u227D':'sccue','\u22E1':'nsccue','\u227E':'prsim','\u227F':'scsim','\u227F\u0338':'NotSucceedsTilde','\u2282':'sub','\u2284':'nsub','\u2282\u20D2':'vnsub','\u2283':'sup','\u2285':'nsup','\u2283\u20D2':'vnsup','\u2286':'sube','\u2288':'nsube','\u2287':'supe','\u2289':'nsupe','\u228A\uFE00':'vsubne','\u228A':'subne','\u228B\uFE00':'vsupne','\u228B':'supne','\u228D':'cupdot','\u228E':'uplus','\u228F':'sqsub','\u228F\u0338':'NotSquareSubset','\u2290':'sqsup','\u2290\u0338':'NotSquareSuperset','\u2291':'sqsube','\u22E2':'nsqsube','\u2292':'sqsupe','\u22E3':'nsqsupe','\u2293':'sqcap','\u2293\uFE00':'sqcaps','\u2294':'sqcup','\u2294\uFE00':'sqcups','\u2295':'oplus','\u2296':'ominus','\u2297':'otimes','\u2298':'osol','\u2299':'odot','\u229A':'ocir','\u229B':'oast','\u229D':'odash','\u229E':'plusb','\u229F':'minusb','\u22A0':'timesb','\u22A1':'sdotb','\u22A2':'vdash','\u22AC':'nvdash','\u22A3':'dashv','\u22A4':'top','\u22A5':'bot','\u22A7':'models','\u22A8':'vDash','\u22AD':'nvDash','\u22A9':'Vdash','\u22AE':'nVdash','\u22AA':'Vvdash','\u22AB':'VDash','\u22AF':'nVDash','\u22B0':'prurel','\u22B2':'vltri','\u22EA':'nltri','\u22B3':'vrtri','\u22EB':'nrtri','\u22B4':'ltrie','\u22EC':'nltrie','\u22B4\u20D2':'nvltrie','\u22B5':'rtrie','\u22ED':'nrtrie','\u22B5\u20D2':'nvrtrie','\u22B6':'origof','\u22B7':'imof','\u22B8':'mumap','\u22B9':'hercon','\u22BA':'intcal','\u22BB':'veebar','\u22BD':'barvee','\u22BE':'angrtvb','\u22BF':'lrtri','\u22C0':'Wedge','\u22C1':'Vee','\u22C2':'xcap','\u22C3':'xcup','\u22C4':'diam','\u22C5':'sdot','\u22C6':'Star','\u22C7':'divonx','\u22C8':'bowtie','\u22C9':'ltimes','\u22CA':'rtimes','\u22CB':'lthree','\u22CC':'rthree','\u22CD':'bsime','\u22CE':'cuvee','\u22CF':'cuwed','\u22D0':'Sub','\u22D1':'Sup','\u22D2':'Cap','\u22D3':'Cup','\u22D4':'fork','\u22D5':'epar','\u22D6':'ltdot','\u22D7':'gtdot','\u22D8':'Ll','\u22D8\u0338':'nLl','\u22D9':'Gg','\u22D9\u0338':'nGg','\u22DA\uFE00':'lesg','\u22DA':'leg','\u22DB':'gel','\u22DB\uFE00':'gesl','\u22DE':'cuepr','\u22DF':'cuesc','\u22E6':'lnsim','\u22E7':'gnsim','\u22E8':'prnsim','\u22E9':'scnsim','\u22EE':'vellip','\u22EF':'ctdot','\u22F0':'utdot','\u22F1':'dtdot','\u22F2':'disin','\u22F3':'isinsv','\u22F4':'isins','\u22F5':'isindot','\u22F5\u0338':'notindot','\u22F6':'notinvc','\u22F7':'notinvb','\u22F9':'isinE','\u22F9\u0338':'notinE','\u22FA':'nisd','\u22FB':'xnis','\u22FC':'nis','\u22FD':'notnivc','\u22FE':'notnivb','\u2305':'barwed','\u2306':'Barwed','\u230C':'drcrop','\u230D':'dlcrop','\u230E':'urcrop','\u230F':'ulcrop','\u2310':'bnot','\u2312':'profline','\u2313':'profsurf','\u2315':'telrec','\u2316':'target','\u231C':'ulcorn','\u231D':'urcorn','\u231E':'dlcorn','\u231F':'drcorn','\u2322':'frown','\u2323':'smile','\u232D':'cylcty','\u232E':'profalar','\u2336':'topbot','\u233D':'ovbar','\u233F':'solbar','\u237C':'angzarr','\u23B0':'lmoust','\u23B1':'rmoust','\u23B4':'tbrk','\u23B5':'bbrk','\u23B6':'bbrktbrk','\u23DC':'OverParenthesis','\u23DD':'UnderParenthesis','\u23DE':'OverBrace','\u23DF':'UnderBrace','\u23E2':'trpezium','\u23E7':'elinters','\u2423':'blank','\u2500':'boxh','\u2502':'boxv','\u250C':'boxdr','\u2510':'boxdl','\u2514':'boxur','\u2518':'boxul','\u251C':'boxvr','\u2524':'boxvl','\u252C':'boxhd','\u2534':'boxhu','\u253C':'boxvh','\u2550':'boxH','\u2551':'boxV','\u2552':'boxdR','\u2553':'boxDr','\u2554':'boxDR','\u2555':'boxdL','\u2556':'boxDl','\u2557':'boxDL','\u2558':'boxuR','\u2559':'boxUr','\u255A':'boxUR','\u255B':'boxuL','\u255C':'boxUl','\u255D':'boxUL','\u255E':'boxvR','\u255F':'boxVr','\u2560':'boxVR','\u2561':'boxvL','\u2562':'boxVl','\u2563':'boxVL','\u2564':'boxHd','\u2565':'boxhD','\u2566':'boxHD','\u2567':'boxHu','\u2568':'boxhU','\u2569':'boxHU','\u256A':'boxvH','\u256B':'boxVh','\u256C':'boxVH','\u2580':'uhblk','\u2584':'lhblk','\u2588':'block','\u2591':'blk14','\u2592':'blk12','\u2593':'blk34','\u25A1':'squ','\u25AA':'squf','\u25AB':'EmptyVerySmallSquare','\u25AD':'rect','\u25AE':'marker','\u25B1':'fltns','\u25B3':'xutri','\u25B4':'utrif','\u25B5':'utri','\u25B8':'rtrif','\u25B9':'rtri','\u25BD':'xdtri','\u25BE':'dtrif','\u25BF':'dtri','\u25C2':'ltrif','\u25C3':'ltri','\u25CA':'loz','\u25CB':'cir','\u25EC':'tridot','\u25EF':'xcirc','\u25F8':'ultri','\u25F9':'urtri','\u25FA':'lltri','\u25FB':'EmptySmallSquare','\u25FC':'FilledSmallSquare','\u2605':'starf','\u2606':'star','\u260E':'phone','\u2640':'female','\u2642':'male','\u2660':'spades','\u2663':'clubs','\u2665':'hearts','\u2666':'diams','\u266A':'sung','\u2713':'check','\u2717':'cross','\u2720':'malt','\u2736':'sext','\u2758':'VerticalSeparator','\u27C8':'bsolhsub','\u27C9':'suphsol','\u27F5':'xlarr','\u27F6':'xrarr','\u27F7':'xharr','\u27F8':'xlArr','\u27F9':'xrArr','\u27FA':'xhArr','\u27FC':'xmap','\u27FF':'dzigrarr','\u2902':'nvlArr','\u2903':'nvrArr','\u2904':'nvHarr','\u2905':'Map','\u290C':'lbarr','\u290D':'rbarr','\u290E':'lBarr','\u290F':'rBarr','\u2910':'RBarr','\u2911':'DDotrahd','\u2912':'UpArrowBar','\u2913':'DownArrowBar','\u2916':'Rarrtl','\u2919':'latail','\u291A':'ratail','\u291B':'lAtail','\u291C':'rAtail','\u291D':'larrfs','\u291E':'rarrfs','\u291F':'larrbfs','\u2920':'rarrbfs','\u2923':'nwarhk','\u2924':'nearhk','\u2925':'searhk','\u2926':'swarhk','\u2927':'nwnear','\u2928':'toea','\u2929':'tosa','\u292A':'swnwar','\u2933':'rarrc','\u2933\u0338':'nrarrc','\u2935':'cudarrr','\u2936':'ldca','\u2937':'rdca','\u2938':'cudarrl','\u2939':'larrpl','\u293C':'curarrm','\u293D':'cularrp','\u2945':'rarrpl','\u2948':'harrcir','\u2949':'Uarrocir','\u294A':'lurdshar','\u294B':'ldrushar','\u294E':'LeftRightVector','\u294F':'RightUpDownVector','\u2950':'DownLeftRightVector','\u2951':'LeftUpDownVector','\u2952':'LeftVectorBar','\u2953':'RightVectorBar','\u2954':'RightUpVectorBar','\u2955':'RightDownVectorBar','\u2956':'DownLeftVectorBar','\u2957':'DownRightVectorBar','\u2958':'LeftUpVectorBar','\u2959':'LeftDownVectorBar','\u295A':'LeftTeeVector','\u295B':'RightTeeVector','\u295C':'RightUpTeeVector','\u295D':'RightDownTeeVector','\u295E':'DownLeftTeeVector','\u295F':'DownRightTeeVector','\u2960':'LeftUpTeeVector','\u2961':'LeftDownTeeVector','\u2962':'lHar','\u2963':'uHar','\u2964':'rHar','\u2965':'dHar','\u2966':'luruhar','\u2967':'ldrdhar','\u2968':'ruluhar','\u2969':'rdldhar','\u296A':'lharul','\u296B':'llhard','\u296C':'rharul','\u296D':'lrhard','\u296E':'udhar','\u296F':'duhar','\u2970':'RoundImplies','\u2971':'erarr','\u2972':'simrarr','\u2973':'larrsim','\u2974':'rarrsim','\u2975':'rarrap','\u2976':'ltlarr','\u2978':'gtrarr','\u2979':'subrarr','\u297B':'suplarr','\u297C':'lfisht','\u297D':'rfisht','\u297E':'ufisht','\u297F':'dfisht','\u299A':'vzigzag','\u299C':'vangrt','\u299D':'angrtvbd','\u29A4':'ange','\u29A5':'range','\u29A6':'dwangle','\u29A7':'uwangle','\u29A8':'angmsdaa','\u29A9':'angmsdab','\u29AA':'angmsdac','\u29AB':'angmsdad','\u29AC':'angmsdae','\u29AD':'angmsdaf','\u29AE':'angmsdag','\u29AF':'angmsdah','\u29B0':'bemptyv','\u29B1':'demptyv','\u29B2':'cemptyv','\u29B3':'raemptyv','\u29B4':'laemptyv','\u29B5':'ohbar','\u29B6':'omid','\u29B7':'opar','\u29B9':'operp','\u29BB':'olcross','\u29BC':'odsold','\u29BE':'olcir','\u29BF':'ofcir','\u29C0':'olt','\u29C1':'ogt','\u29C2':'cirscir','\u29C3':'cirE','\u29C4':'solb','\u29C5':'bsolb','\u29C9':'boxbox','\u29CD':'trisb','\u29CE':'rtriltri','\u29CF':'LeftTriangleBar','\u29CF\u0338':'NotLeftTriangleBar','\u29D0':'RightTriangleBar','\u29D0\u0338':'NotRightTriangleBar','\u29DC':'iinfin','\u29DD':'infintie','\u29DE':'nvinfin','\u29E3':'eparsl','\u29E4':'smeparsl','\u29E5':'eqvparsl','\u29EB':'lozf','\u29F4':'RuleDelayed','\u29F6':'dsol','\u2A00':'xodot','\u2A01':'xoplus','\u2A02':'xotime','\u2A04':'xuplus','\u2A06':'xsqcup','\u2A0D':'fpartint','\u2A10':'cirfnint','\u2A11':'awint','\u2A12':'rppolint','\u2A13':'scpolint','\u2A14':'npolint','\u2A15':'pointint','\u2A16':'quatint','\u2A17':'intlarhk','\u2A22':'pluscir','\u2A23':'plusacir','\u2A24':'simplus','\u2A25':'plusdu','\u2A26':'plussim','\u2A27':'plustwo','\u2A29':'mcomma','\u2A2A':'minusdu','\u2A2D':'loplus','\u2A2E':'roplus','\u2A2F':'Cross','\u2A30':'timesd','\u2A31':'timesbar','\u2A33':'smashp','\u2A34':'lotimes','\u2A35':'rotimes','\u2A36':'otimesas','\u2A37':'Otimes','\u2A38':'odiv','\u2A39':'triplus','\u2A3A':'triminus','\u2A3B':'tritime','\u2A3C':'iprod','\u2A3F':'amalg','\u2A40':'capdot','\u2A42':'ncup','\u2A43':'ncap','\u2A44':'capand','\u2A45':'cupor','\u2A46':'cupcap','\u2A47':'capcup','\u2A48':'cupbrcap','\u2A49':'capbrcup','\u2A4A':'cupcup','\u2A4B':'capcap','\u2A4C':'ccups','\u2A4D':'ccaps','\u2A50':'ccupssm','\u2A53':'And','\u2A54':'Or','\u2A55':'andand','\u2A56':'oror','\u2A57':'orslope','\u2A58':'andslope','\u2A5A':'andv','\u2A5B':'orv','\u2A5C':'andd','\u2A5D':'ord','\u2A5F':'wedbar','\u2A66':'sdote','\u2A6A':'simdot','\u2A6D':'congdot','\u2A6D\u0338':'ncongdot','\u2A6E':'easter','\u2A6F':'apacir','\u2A70':'apE','\u2A70\u0338':'napE','\u2A71':'eplus','\u2A72':'pluse','\u2A73':'Esim','\u2A77':'eDDot','\u2A78':'equivDD','\u2A79':'ltcir','\u2A7A':'gtcir','\u2A7B':'ltquest','\u2A7C':'gtquest','\u2A7D':'les','\u2A7D\u0338':'nles','\u2A7E':'ges','\u2A7E\u0338':'nges','\u2A7F':'lesdot','\u2A80':'gesdot','\u2A81':'lesdoto','\u2A82':'gesdoto','\u2A83':'lesdotor','\u2A84':'gesdotol','\u2A85':'lap','\u2A86':'gap','\u2A87':'lne','\u2A88':'gne','\u2A89':'lnap','\u2A8A':'gnap','\u2A8B':'lEg','\u2A8C':'gEl','\u2A8D':'lsime','\u2A8E':'gsime','\u2A8F':'lsimg','\u2A90':'gsiml','\u2A91':'lgE','\u2A92':'glE','\u2A93':'lesges','\u2A94':'gesles','\u2A95':'els','\u2A96':'egs','\u2A97':'elsdot','\u2A98':'egsdot','\u2A99':'el','\u2A9A':'eg','\u2A9D':'siml','\u2A9E':'simg','\u2A9F':'simlE','\u2AA0':'simgE','\u2AA1':'LessLess','\u2AA1\u0338':'NotNestedLessLess','\u2AA2':'GreaterGreater','\u2AA2\u0338':'NotNestedGreaterGreater','\u2AA4':'glj','\u2AA5':'gla','\u2AA6':'ltcc','\u2AA7':'gtcc','\u2AA8':'lescc','\u2AA9':'gescc','\u2AAA':'smt','\u2AAB':'lat','\u2AAC':'smte','\u2AAC\uFE00':'smtes','\u2AAD':'late','\u2AAD\uFE00':'lates','\u2AAE':'bumpE','\u2AAF':'pre','\u2AAF\u0338':'npre','\u2AB0':'sce','\u2AB0\u0338':'nsce','\u2AB3':'prE','\u2AB4':'scE','\u2AB5':'prnE','\u2AB6':'scnE','\u2AB7':'prap','\u2AB8':'scap','\u2AB9':'prnap','\u2ABA':'scnap','\u2ABB':'Pr','\u2ABC':'Sc','\u2ABD':'subdot','\u2ABE':'supdot','\u2ABF':'subplus','\u2AC0':'supplus','\u2AC1':'submult','\u2AC2':'supmult','\u2AC3':'subedot','\u2AC4':'supedot','\u2AC5':'subE','\u2AC5\u0338':'nsubE','\u2AC6':'supE','\u2AC6\u0338':'nsupE','\u2AC7':'subsim','\u2AC8':'supsim','\u2ACB\uFE00':'vsubnE','\u2ACB':'subnE','\u2ACC\uFE00':'vsupnE','\u2ACC':'supnE','\u2ACF':'csub','\u2AD0':'csup','\u2AD1':'csube','\u2AD2':'csupe','\u2AD3':'subsup','\u2AD4':'supsub','\u2AD5':'subsub','\u2AD6':'supsup','\u2AD7':'suphsub','\u2AD8':'supdsub','\u2AD9':'forkv','\u2ADA':'topfork','\u2ADB':'mlcp','\u2AE4':'Dashv','\u2AE6':'Vdashl','\u2AE7':'Barv','\u2AE8':'vBar','\u2AE9':'vBarv','\u2AEB':'Vbar','\u2AEC':'Not','\u2AED':'bNot','\u2AEE':'rnmid','\u2AEF':'cirmid','\u2AF0':'midcir','\u2AF1':'topcir','\u2AF2':'nhpar','\u2AF3':'parsim','\u2AFD':'parsl','\u2AFD\u20E5':'nparsl','\u266D':'flat','\u266E':'natur','\u266F':'sharp','\xA4':'curren','\xA2':'cent','$':'dollar','\xA3':'pound','\xA5':'yen','\u20AC':'euro','\xB9':'sup1','\xBD':'half','\u2153':'frac13','\xBC':'frac14','\u2155':'frac15','\u2159':'frac16','\u215B':'frac18','\xB2':'sup2','\u2154':'frac23','\u2156':'frac25','\xB3':'sup3','\xBE':'frac34','\u2157':'frac35','\u215C':'frac38','\u2158':'frac45','\u215A':'frac56','\u215D':'frac58','\u215E':'frac78','\uD835\uDCB6':'ascr','\uD835\uDD52':'aopf','\uD835\uDD1E':'afr','\uD835\uDD38':'Aopf','\uD835\uDD04':'Afr','\uD835\uDC9C':'Ascr','\xAA':'ordf','\xE1':'aacute','\xC1':'Aacute','\xE0':'agrave','\xC0':'Agrave','\u0103':'abreve','\u0102':'Abreve','\xE2':'acirc','\xC2':'Acirc','\xE5':'aring','\xC5':'angst','\xE4':'auml','\xC4':'Auml','\xE3':'atilde','\xC3':'Atilde','\u0105':'aogon','\u0104':'Aogon','\u0101':'amacr','\u0100':'Amacr','\xE6':'aelig','\xC6':'AElig','\uD835\uDCB7':'bscr','\uD835\uDD53':'bopf','\uD835\uDD1F':'bfr','\uD835\uDD39':'Bopf','\u212C':'Bscr','\uD835\uDD05':'Bfr','\uD835\uDD20':'cfr','\uD835\uDCB8':'cscr','\uD835\uDD54':'copf','\u212D':'Cfr','\uD835\uDC9E':'Cscr','\u2102':'Copf','\u0107':'cacute','\u0106':'Cacute','\u0109':'ccirc','\u0108':'Ccirc','\u010D':'ccaron','\u010C':'Ccaron','\u010B':'cdot','\u010A':'Cdot','\xE7':'ccedil','\xC7':'Ccedil','\u2105':'incare','\uD835\uDD21':'dfr','\u2146':'dd','\uD835\uDD55':'dopf','\uD835\uDCB9':'dscr','\uD835\uDC9F':'Dscr','\uD835\uDD07':'Dfr','\u2145':'DD','\uD835\uDD3B':'Dopf','\u010F':'dcaron','\u010E':'Dcaron','\u0111':'dstrok','\u0110':'Dstrok','\xF0':'eth','\xD0':'ETH','\u2147':'ee','\u212F':'escr','\uD835\uDD22':'efr','\uD835\uDD56':'eopf','\u2130':'Escr','\uD835\uDD08':'Efr','\uD835\uDD3C':'Eopf','\xE9':'eacute','\xC9':'Eacute','\xE8':'egrave','\xC8':'Egrave','\xEA':'ecirc','\xCA':'Ecirc','\u011B':'ecaron','\u011A':'Ecaron','\xEB':'euml','\xCB':'Euml','\u0117':'edot','\u0116':'Edot','\u0119':'eogon','\u0118':'Eogon','\u0113':'emacr','\u0112':'Emacr','\uD835\uDD23':'ffr','\uD835\uDD57':'fopf','\uD835\uDCBB':'fscr','\uD835\uDD09':'Ffr','\uD835\uDD3D':'Fopf','\u2131':'Fscr','\uFB00':'fflig','\uFB03':'ffilig','\uFB04':'ffllig','\uFB01':'filig','fj':'fjlig','\uFB02':'fllig','\u0192':'fnof','\u210A':'gscr','\uD835\uDD58':'gopf','\uD835\uDD24':'gfr','\uD835\uDCA2':'Gscr','\uD835\uDD3E':'Gopf','\uD835\uDD0A':'Gfr','\u01F5':'gacute','\u011F':'gbreve','\u011E':'Gbreve','\u011D':'gcirc','\u011C':'Gcirc','\u0121':'gdot','\u0120':'Gdot','\u0122':'Gcedil','\uD835\uDD25':'hfr','\u210E':'planckh','\uD835\uDCBD':'hscr','\uD835\uDD59':'hopf','\u210B':'Hscr','\u210C':'Hfr','\u210D':'Hopf','\u0125':'hcirc','\u0124':'Hcirc','\u210F':'hbar','\u0127':'hstrok','\u0126':'Hstrok','\uD835\uDD5A':'iopf','\uD835\uDD26':'ifr','\uD835\uDCBE':'iscr','\u2148':'ii','\uD835\uDD40':'Iopf','\u2110':'Iscr','\u2111':'Im','\xED':'iacute','\xCD':'Iacute','\xEC':'igrave','\xCC':'Igrave','\xEE':'icirc','\xCE':'Icirc','\xEF':'iuml','\xCF':'Iuml','\u0129':'itilde','\u0128':'Itilde','\u0130':'Idot','\u012F':'iogon','\u012E':'Iogon','\u012B':'imacr','\u012A':'Imacr','\u0133':'ijlig','\u0132':'IJlig','\u0131':'imath','\uD835\uDCBF':'jscr','\uD835\uDD5B':'jopf','\uD835\uDD27':'jfr','\uD835\uDCA5':'Jscr','\uD835\uDD0D':'Jfr','\uD835\uDD41':'Jopf','\u0135':'jcirc','\u0134':'Jcirc','\u0237':'jmath','\uD835\uDD5C':'kopf','\uD835\uDCC0':'kscr','\uD835\uDD28':'kfr','\uD835\uDCA6':'Kscr','\uD835\uDD42':'Kopf','\uD835\uDD0E':'Kfr','\u0137':'kcedil','\u0136':'Kcedil','\uD835\uDD29':'lfr','\uD835\uDCC1':'lscr','\u2113':'ell','\uD835\uDD5D':'lopf','\u2112':'Lscr','\uD835\uDD0F':'Lfr','\uD835\uDD43':'Lopf','\u013A':'lacute','\u0139':'Lacute','\u013E':'lcaron','\u013D':'Lcaron','\u013C':'lcedil','\u013B':'Lcedil','\u0142':'lstrok','\u0141':'Lstrok','\u0140':'lmidot','\u013F':'Lmidot','\uD835\uDD2A':'mfr','\uD835\uDD5E':'mopf','\uD835\uDCC2':'mscr','\uD835\uDD10':'Mfr','\uD835\uDD44':'Mopf','\u2133':'Mscr','\uD835\uDD2B':'nfr','\uD835\uDD5F':'nopf','\uD835\uDCC3':'nscr','\u2115':'Nopf','\uD835\uDCA9':'Nscr','\uD835\uDD11':'Nfr','\u0144':'nacute','\u0143':'Nacute','\u0148':'ncaron','\u0147':'Ncaron','\xF1':'ntilde','\xD1':'Ntilde','\u0146':'ncedil','\u0145':'Ncedil','\u2116':'numero','\u014B':'eng','\u014A':'ENG','\uD835\uDD60':'oopf','\uD835\uDD2C':'ofr','\u2134':'oscr','\uD835\uDCAA':'Oscr','\uD835\uDD12':'Ofr','\uD835\uDD46':'Oopf','\xBA':'ordm','\xF3':'oacute','\xD3':'Oacute','\xF2':'ograve','\xD2':'Ograve','\xF4':'ocirc','\xD4':'Ocirc','\xF6':'ouml','\xD6':'Ouml','\u0151':'odblac','\u0150':'Odblac','\xF5':'otilde','\xD5':'Otilde','\xF8':'oslash','\xD8':'Oslash','\u014D':'omacr','\u014C':'Omacr','\u0153':'oelig','\u0152':'OElig','\uD835\uDD2D':'pfr','\uD835\uDCC5':'pscr','\uD835\uDD61':'popf','\u2119':'Popf','\uD835\uDD13':'Pfr','\uD835\uDCAB':'Pscr','\uD835\uDD62':'qopf','\uD835\uDD2E':'qfr','\uD835\uDCC6':'qscr','\uD835\uDCAC':'Qscr','\uD835\uDD14':'Qfr','\u211A':'Qopf','\u0138':'kgreen','\uD835\uDD2F':'rfr','\uD835\uDD63':'ropf','\uD835\uDCC7':'rscr','\u211B':'Rscr','\u211C':'Re','\u211D':'Ropf','\u0155':'racute','\u0154':'Racute','\u0159':'rcaron','\u0158':'Rcaron','\u0157':'rcedil','\u0156':'Rcedil','\uD835\uDD64':'sopf','\uD835\uDCC8':'sscr','\uD835\uDD30':'sfr','\uD835\uDD4A':'Sopf','\uD835\uDD16':'Sfr','\uD835\uDCAE':'Sscr','\u24C8':'oS','\u015B':'sacute','\u015A':'Sacute','\u015D':'scirc','\u015C':'Scirc','\u0161':'scaron','\u0160':'Scaron','\u015F':'scedil','\u015E':'Scedil','\xDF':'szlig','\uD835\uDD31':'tfr','\uD835\uDCC9':'tscr','\uD835\uDD65':'topf','\uD835\uDCAF':'Tscr','\uD835\uDD17':'Tfr','\uD835\uDD4B':'Topf','\u0165':'tcaron','\u0164':'Tcaron','\u0163':'tcedil','\u0162':'Tcedil','\u2122':'trade','\u0167':'tstrok','\u0166':'Tstrok','\uD835\uDCCA':'uscr','\uD835\uDD66':'uopf','\uD835\uDD32':'ufr','\uD835\uDD4C':'Uopf','\uD835\uDD18':'Ufr','\uD835\uDCB0':'Uscr','\xFA':'uacute','\xDA':'Uacute','\xF9':'ugrave','\xD9':'Ugrave','\u016D':'ubreve','\u016C':'Ubreve','\xFB':'ucirc','\xDB':'Ucirc','\u016F':'uring','\u016E':'Uring','\xFC':'uuml','\xDC':'Uuml','\u0171':'udblac','\u0170':'Udblac','\u0169':'utilde','\u0168':'Utilde','\u0173':'uogon','\u0172':'Uogon','\u016B':'umacr','\u016A':'Umacr','\uD835\uDD33':'vfr','\uD835\uDD67':'vopf','\uD835\uDCCB':'vscr','\uD835\uDD19':'Vfr','\uD835\uDD4D':'Vopf','\uD835\uDCB1':'Vscr','\uD835\uDD68':'wopf','\uD835\uDCCC':'wscr','\uD835\uDD34':'wfr','\uD835\uDCB2':'Wscr','\uD835\uDD4E':'Wopf','\uD835\uDD1A':'Wfr','\u0175':'wcirc','\u0174':'Wcirc','\uD835\uDD35':'xfr','\uD835\uDCCD':'xscr','\uD835\uDD69':'xopf','\uD835\uDD4F':'Xopf','\uD835\uDD1B':'Xfr','\uD835\uDCB3':'Xscr','\uD835\uDD36':'yfr','\uD835\uDCCE':'yscr','\uD835\uDD6A':'yopf','\uD835\uDCB4':'Yscr','\uD835\uDD1C':'Yfr','\uD835\uDD50':'Yopf','\xFD':'yacute','\xDD':'Yacute','\u0177':'ycirc','\u0176':'Ycirc','\xFF':'yuml','\u0178':'Yuml','\uD835\uDCCF':'zscr','\uD835\uDD37':'zfr','\uD835\uDD6B':'zopf','\u2128':'Zfr','\u2124':'Zopf','\uD835\uDCB5':'Zscr','\u017A':'zacute','\u0179':'Zacute','\u017E':'zcaron','\u017D':'Zcaron','\u017C':'zdot','\u017B':'Zdot','\u01B5':'imped','\xFE':'thorn','\xDE':'THORN','\u0149':'napos','\u03B1':'alpha','\u0391':'Alpha','\u03B2':'beta','\u0392':'Beta','\u03B3':'gamma','\u0393':'Gamma','\u03B4':'delta','\u0394':'Delta','\u03B5':'epsi','\u03F5':'epsiv','\u0395':'Epsilon','\u03DD':'gammad','\u03DC':'Gammad','\u03B6':'zeta','\u0396':'Zeta','\u03B7':'eta','\u0397':'Eta','\u03B8':'theta','\u03D1':'thetav','\u0398':'Theta','\u03B9':'iota','\u0399':'Iota','\u03BA':'kappa','\u03F0':'kappav','\u039A':'Kappa','\u03BB':'lambda','\u039B':'Lambda','\u03BC':'mu','\xB5':'micro','\u039C':'Mu','\u03BD':'nu','\u039D':'Nu','\u03BE':'xi','\u039E':'Xi','\u03BF':'omicron','\u039F':'Omicron','\u03C0':'pi','\u03D6':'piv','\u03A0':'Pi','\u03C1':'rho','\u03F1':'rhov','\u03A1':'Rho','\u03C3':'sigma','\u03A3':'Sigma','\u03C2':'sigmaf','\u03C4':'tau','\u03A4':'Tau','\u03C5':'upsi','\u03A5':'Upsilon','\u03D2':'Upsi','\u03C6':'phi','\u03D5':'phiv','\u03A6':'Phi','\u03C7':'chi','\u03A7':'Chi','\u03C8':'psi','\u03A8':'Psi','\u03C9':'omega','\u03A9':'ohm','\u0430':'acy','\u0410':'Acy','\u0431':'bcy','\u0411':'Bcy','\u0432':'vcy','\u0412':'Vcy','\u0433':'gcy','\u0413':'Gcy','\u0453':'gjcy','\u0403':'GJcy','\u0434':'dcy','\u0414':'Dcy','\u0452':'djcy','\u0402':'DJcy','\u0435':'iecy','\u0415':'IEcy','\u0451':'iocy','\u0401':'IOcy','\u0454':'jukcy','\u0404':'Jukcy','\u0436':'zhcy','\u0416':'ZHcy','\u0437':'zcy','\u0417':'Zcy','\u0455':'dscy','\u0405':'DScy','\u0438':'icy','\u0418':'Icy','\u0456':'iukcy','\u0406':'Iukcy','\u0457':'yicy','\u0407':'YIcy','\u0439':'jcy','\u0419':'Jcy','\u0458':'jsercy','\u0408':'Jsercy','\u043A':'kcy','\u041A':'Kcy','\u045C':'kjcy','\u040C':'KJcy','\u043B':'lcy','\u041B':'Lcy','\u0459':'ljcy','\u0409':'LJcy','\u043C':'mcy','\u041C':'Mcy','\u043D':'ncy','\u041D':'Ncy','\u045A':'njcy','\u040A':'NJcy','\u043E':'ocy','\u041E':'Ocy','\u043F':'pcy','\u041F':'Pcy','\u0440':'rcy','\u0420':'Rcy','\u0441':'scy','\u0421':'Scy','\u0442':'tcy','\u0422':'Tcy','\u045B':'tshcy','\u040B':'TSHcy','\u0443':'ucy','\u0423':'Ucy','\u045E':'ubrcy','\u040E':'Ubrcy','\u0444':'fcy','\u0424':'Fcy','\u0445':'khcy','\u0425':'KHcy','\u0446':'tscy','\u0426':'TScy','\u0447':'chcy','\u0427':'CHcy','\u045F':'dzcy','\u040F':'DZcy','\u0448':'shcy','\u0428':'SHcy','\u0449':'shchcy','\u0429':'SHCHcy','\u044A':'hardcy','\u042A':'HARDcy','\u044B':'ycy','\u042B':'Ycy','\u044C':'softcy','\u042C':'SOFTcy','\u044D':'ecy','\u042D':'Ecy','\u044E':'yucy','\u042E':'YUcy','\u044F':'yacy','\u042F':'YAcy','\u2135':'aleph','\u2136':'beth','\u2137':'gimel','\u2138':'daleth'};

	var regexEscape = /["&'<>`]/g;
	var escapeMap = {
		'"': '&quot;',
		'&': '&amp;',
		'\'': '&#x27;',
		'<': '&lt;',
		// See https://mathiasbynens.be/notes/ambiguous-ampersands: in HTML, the
		// following is not strictly necessary unless it’s part of a tag or an
		// unquoted attribute value. We’re only escaping it to support those
		// situations, and for XML support.
		'>': '&gt;',
		// In Internet Explorer ≤ 8, the backtick character can be used
		// to break out of (un)quoted attribute values or HTML comments.
		// See http://html5sec.org/#102, http://html5sec.org/#108, and
		// http://html5sec.org/#133.
		'`': '&#x60;'
	};

	var regexInvalidEntity = /&#(?:[xX][^a-fA-F0-9]|[^0-9xX])/;
	var regexInvalidRawCodePoint = /[\0-\x08\x0B\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
	var regexDecode = /&#([0-9]+)(;?)|&#[xX]([a-fA-F0-9]+)(;?)|&([0-9a-zA-Z]+);|&(Aacute|Agrave|Atilde|Ccedil|Eacute|Egrave|Iacute|Igrave|Ntilde|Oacute|Ograve|Oslash|Otilde|Uacute|Ugrave|Yacute|aacute|agrave|atilde|brvbar|ccedil|curren|divide|eacute|egrave|frac12|frac14|frac34|iacute|igrave|iquest|middot|ntilde|oacute|ograve|oslash|otilde|plusmn|uacute|ugrave|yacute|AElig|Acirc|Aring|Ecirc|Icirc|Ocirc|THORN|Ucirc|acirc|acute|aelig|aring|cedil|ecirc|icirc|iexcl|laquo|micro|ocirc|pound|raquo|szlig|thorn|times|ucirc|Auml|COPY|Euml|Iuml|Ouml|QUOT|Uuml|auml|cent|copy|euml|iuml|macr|nbsp|ordf|ordm|ouml|para|quot|sect|sup1|sup2|sup3|uuml|yuml|AMP|ETH|REG|amp|deg|eth|not|reg|shy|uml|yen|GT|LT|gt|lt)([=a-zA-Z0-9])?/g;
	var decodeMap = {'aacute':'\xE1','Aacute':'\xC1','abreve':'\u0103','Abreve':'\u0102','ac':'\u223E','acd':'\u223F','acE':'\u223E\u0333','acirc':'\xE2','Acirc':'\xC2','acute':'\xB4','acy':'\u0430','Acy':'\u0410','aelig':'\xE6','AElig':'\xC6','af':'\u2061','afr':'\uD835\uDD1E','Afr':'\uD835\uDD04','agrave':'\xE0','Agrave':'\xC0','alefsym':'\u2135','aleph':'\u2135','alpha':'\u03B1','Alpha':'\u0391','amacr':'\u0101','Amacr':'\u0100','amalg':'\u2A3F','amp':'&','AMP':'&','and':'\u2227','And':'\u2A53','andand':'\u2A55','andd':'\u2A5C','andslope':'\u2A58','andv':'\u2A5A','ang':'\u2220','ange':'\u29A4','angle':'\u2220','angmsd':'\u2221','angmsdaa':'\u29A8','angmsdab':'\u29A9','angmsdac':'\u29AA','angmsdad':'\u29AB','angmsdae':'\u29AC','angmsdaf':'\u29AD','angmsdag':'\u29AE','angmsdah':'\u29AF','angrt':'\u221F','angrtvb':'\u22BE','angrtvbd':'\u299D','angsph':'\u2222','angst':'\xC5','angzarr':'\u237C','aogon':'\u0105','Aogon':'\u0104','aopf':'\uD835\uDD52','Aopf':'\uD835\uDD38','ap':'\u2248','apacir':'\u2A6F','ape':'\u224A','apE':'\u2A70','apid':'\u224B','apos':'\'','ApplyFunction':'\u2061','approx':'\u2248','approxeq':'\u224A','aring':'\xE5','Aring':'\xC5','ascr':'\uD835\uDCB6','Ascr':'\uD835\uDC9C','Assign':'\u2254','ast':'*','asymp':'\u2248','asympeq':'\u224D','atilde':'\xE3','Atilde':'\xC3','auml':'\xE4','Auml':'\xC4','awconint':'\u2233','awint':'\u2A11','backcong':'\u224C','backepsilon':'\u03F6','backprime':'\u2035','backsim':'\u223D','backsimeq':'\u22CD','Backslash':'\u2216','Barv':'\u2AE7','barvee':'\u22BD','barwed':'\u2305','Barwed':'\u2306','barwedge':'\u2305','bbrk':'\u23B5','bbrktbrk':'\u23B6','bcong':'\u224C','bcy':'\u0431','Bcy':'\u0411','bdquo':'\u201E','becaus':'\u2235','because':'\u2235','Because':'\u2235','bemptyv':'\u29B0','bepsi':'\u03F6','bernou':'\u212C','Bernoullis':'\u212C','beta':'\u03B2','Beta':'\u0392','beth':'\u2136','between':'\u226C','bfr':'\uD835\uDD1F','Bfr':'\uD835\uDD05','bigcap':'\u22C2','bigcirc':'\u25EF','bigcup':'\u22C3','bigodot':'\u2A00','bigoplus':'\u2A01','bigotimes':'\u2A02','bigsqcup':'\u2A06','bigstar':'\u2605','bigtriangledown':'\u25BD','bigtriangleup':'\u25B3','biguplus':'\u2A04','bigvee':'\u22C1','bigwedge':'\u22C0','bkarow':'\u290D','blacklozenge':'\u29EB','blacksquare':'\u25AA','blacktriangle':'\u25B4','blacktriangledown':'\u25BE','blacktriangleleft':'\u25C2','blacktriangleright':'\u25B8','blank':'\u2423','blk12':'\u2592','blk14':'\u2591','blk34':'\u2593','block':'\u2588','bne':'=\u20E5','bnequiv':'\u2261\u20E5','bnot':'\u2310','bNot':'\u2AED','bopf':'\uD835\uDD53','Bopf':'\uD835\uDD39','bot':'\u22A5','bottom':'\u22A5','bowtie':'\u22C8','boxbox':'\u29C9','boxdl':'\u2510','boxdL':'\u2555','boxDl':'\u2556','boxDL':'\u2557','boxdr':'\u250C','boxdR':'\u2552','boxDr':'\u2553','boxDR':'\u2554','boxh':'\u2500','boxH':'\u2550','boxhd':'\u252C','boxhD':'\u2565','boxHd':'\u2564','boxHD':'\u2566','boxhu':'\u2534','boxhU':'\u2568','boxHu':'\u2567','boxHU':'\u2569','boxminus':'\u229F','boxplus':'\u229E','boxtimes':'\u22A0','boxul':'\u2518','boxuL':'\u255B','boxUl':'\u255C','boxUL':'\u255D','boxur':'\u2514','boxuR':'\u2558','boxUr':'\u2559','boxUR':'\u255A','boxv':'\u2502','boxV':'\u2551','boxvh':'\u253C','boxvH':'\u256A','boxVh':'\u256B','boxVH':'\u256C','boxvl':'\u2524','boxvL':'\u2561','boxVl':'\u2562','boxVL':'\u2563','boxvr':'\u251C','boxvR':'\u255E','boxVr':'\u255F','boxVR':'\u2560','bprime':'\u2035','breve':'\u02D8','Breve':'\u02D8','brvbar':'\xA6','bscr':'\uD835\uDCB7','Bscr':'\u212C','bsemi':'\u204F','bsim':'\u223D','bsime':'\u22CD','bsol':'\\','bsolb':'\u29C5','bsolhsub':'\u27C8','bull':'\u2022','bullet':'\u2022','bump':'\u224E','bumpe':'\u224F','bumpE':'\u2AAE','bumpeq':'\u224F','Bumpeq':'\u224E','cacute':'\u0107','Cacute':'\u0106','cap':'\u2229','Cap':'\u22D2','capand':'\u2A44','capbrcup':'\u2A49','capcap':'\u2A4B','capcup':'\u2A47','capdot':'\u2A40','CapitalDifferentialD':'\u2145','caps':'\u2229\uFE00','caret':'\u2041','caron':'\u02C7','Cayleys':'\u212D','ccaps':'\u2A4D','ccaron':'\u010D','Ccaron':'\u010C','ccedil':'\xE7','Ccedil':'\xC7','ccirc':'\u0109','Ccirc':'\u0108','Cconint':'\u2230','ccups':'\u2A4C','ccupssm':'\u2A50','cdot':'\u010B','Cdot':'\u010A','cedil':'\xB8','Cedilla':'\xB8','cemptyv':'\u29B2','cent':'\xA2','centerdot':'\xB7','CenterDot':'\xB7','cfr':'\uD835\uDD20','Cfr':'\u212D','chcy':'\u0447','CHcy':'\u0427','check':'\u2713','checkmark':'\u2713','chi':'\u03C7','Chi':'\u03A7','cir':'\u25CB','circ':'\u02C6','circeq':'\u2257','circlearrowleft':'\u21BA','circlearrowright':'\u21BB','circledast':'\u229B','circledcirc':'\u229A','circleddash':'\u229D','CircleDot':'\u2299','circledR':'\xAE','circledS':'\u24C8','CircleMinus':'\u2296','CirclePlus':'\u2295','CircleTimes':'\u2297','cire':'\u2257','cirE':'\u29C3','cirfnint':'\u2A10','cirmid':'\u2AEF','cirscir':'\u29C2','ClockwiseContourIntegral':'\u2232','CloseCurlyDoubleQuote':'\u201D','CloseCurlyQuote':'\u2019','clubs':'\u2663','clubsuit':'\u2663','colon':':','Colon':'\u2237','colone':'\u2254','Colone':'\u2A74','coloneq':'\u2254','comma':',','commat':'@','comp':'\u2201','compfn':'\u2218','complement':'\u2201','complexes':'\u2102','cong':'\u2245','congdot':'\u2A6D','Congruent':'\u2261','conint':'\u222E','Conint':'\u222F','ContourIntegral':'\u222E','copf':'\uD835\uDD54','Copf':'\u2102','coprod':'\u2210','Coproduct':'\u2210','copy':'\xA9','COPY':'\xA9','copysr':'\u2117','CounterClockwiseContourIntegral':'\u2233','crarr':'\u21B5','cross':'\u2717','Cross':'\u2A2F','cscr':'\uD835\uDCB8','Cscr':'\uD835\uDC9E','csub':'\u2ACF','csube':'\u2AD1','csup':'\u2AD0','csupe':'\u2AD2','ctdot':'\u22EF','cudarrl':'\u2938','cudarrr':'\u2935','cuepr':'\u22DE','cuesc':'\u22DF','cularr':'\u21B6','cularrp':'\u293D','cup':'\u222A','Cup':'\u22D3','cupbrcap':'\u2A48','cupcap':'\u2A46','CupCap':'\u224D','cupcup':'\u2A4A','cupdot':'\u228D','cupor':'\u2A45','cups':'\u222A\uFE00','curarr':'\u21B7','curarrm':'\u293C','curlyeqprec':'\u22DE','curlyeqsucc':'\u22DF','curlyvee':'\u22CE','curlywedge':'\u22CF','curren':'\xA4','curvearrowleft':'\u21B6','curvearrowright':'\u21B7','cuvee':'\u22CE','cuwed':'\u22CF','cwconint':'\u2232','cwint':'\u2231','cylcty':'\u232D','dagger':'\u2020','Dagger':'\u2021','daleth':'\u2138','darr':'\u2193','dArr':'\u21D3','Darr':'\u21A1','dash':'\u2010','dashv':'\u22A3','Dashv':'\u2AE4','dbkarow':'\u290F','dblac':'\u02DD','dcaron':'\u010F','Dcaron':'\u010E','dcy':'\u0434','Dcy':'\u0414','dd':'\u2146','DD':'\u2145','ddagger':'\u2021','ddarr':'\u21CA','DDotrahd':'\u2911','ddotseq':'\u2A77','deg':'\xB0','Del':'\u2207','delta':'\u03B4','Delta':'\u0394','demptyv':'\u29B1','dfisht':'\u297F','dfr':'\uD835\uDD21','Dfr':'\uD835\uDD07','dHar':'\u2965','dharl':'\u21C3','dharr':'\u21C2','DiacriticalAcute':'\xB4','DiacriticalDot':'\u02D9','DiacriticalDoubleAcute':'\u02DD','DiacriticalGrave':'`','DiacriticalTilde':'\u02DC','diam':'\u22C4','diamond':'\u22C4','Diamond':'\u22C4','diamondsuit':'\u2666','diams':'\u2666','die':'\xA8','DifferentialD':'\u2146','digamma':'\u03DD','disin':'\u22F2','div':'\xF7','divide':'\xF7','divideontimes':'\u22C7','divonx':'\u22C7','djcy':'\u0452','DJcy':'\u0402','dlcorn':'\u231E','dlcrop':'\u230D','dollar':'$','dopf':'\uD835\uDD55','Dopf':'\uD835\uDD3B','dot':'\u02D9','Dot':'\xA8','DotDot':'\u20DC','doteq':'\u2250','doteqdot':'\u2251','DotEqual':'\u2250','dotminus':'\u2238','dotplus':'\u2214','dotsquare':'\u22A1','doublebarwedge':'\u2306','DoubleContourIntegral':'\u222F','DoubleDot':'\xA8','DoubleDownArrow':'\u21D3','DoubleLeftArrow':'\u21D0','DoubleLeftRightArrow':'\u21D4','DoubleLeftTee':'\u2AE4','DoubleLongLeftArrow':'\u27F8','DoubleLongLeftRightArrow':'\u27FA','DoubleLongRightArrow':'\u27F9','DoubleRightArrow':'\u21D2','DoubleRightTee':'\u22A8','DoubleUpArrow':'\u21D1','DoubleUpDownArrow':'\u21D5','DoubleVerticalBar':'\u2225','downarrow':'\u2193','Downarrow':'\u21D3','DownArrow':'\u2193','DownArrowBar':'\u2913','DownArrowUpArrow':'\u21F5','DownBreve':'\u0311','downdownarrows':'\u21CA','downharpoonleft':'\u21C3','downharpoonright':'\u21C2','DownLeftRightVector':'\u2950','DownLeftTeeVector':'\u295E','DownLeftVector':'\u21BD','DownLeftVectorBar':'\u2956','DownRightTeeVector':'\u295F','DownRightVector':'\u21C1','DownRightVectorBar':'\u2957','DownTee':'\u22A4','DownTeeArrow':'\u21A7','drbkarow':'\u2910','drcorn':'\u231F','drcrop':'\u230C','dscr':'\uD835\uDCB9','Dscr':'\uD835\uDC9F','dscy':'\u0455','DScy':'\u0405','dsol':'\u29F6','dstrok':'\u0111','Dstrok':'\u0110','dtdot':'\u22F1','dtri':'\u25BF','dtrif':'\u25BE','duarr':'\u21F5','duhar':'\u296F','dwangle':'\u29A6','dzcy':'\u045F','DZcy':'\u040F','dzigrarr':'\u27FF','eacute':'\xE9','Eacute':'\xC9','easter':'\u2A6E','ecaron':'\u011B','Ecaron':'\u011A','ecir':'\u2256','ecirc':'\xEA','Ecirc':'\xCA','ecolon':'\u2255','ecy':'\u044D','Ecy':'\u042D','eDDot':'\u2A77','edot':'\u0117','eDot':'\u2251','Edot':'\u0116','ee':'\u2147','efDot':'\u2252','efr':'\uD835\uDD22','Efr':'\uD835\uDD08','eg':'\u2A9A','egrave':'\xE8','Egrave':'\xC8','egs':'\u2A96','egsdot':'\u2A98','el':'\u2A99','Element':'\u2208','elinters':'\u23E7','ell':'\u2113','els':'\u2A95','elsdot':'\u2A97','emacr':'\u0113','Emacr':'\u0112','empty':'\u2205','emptyset':'\u2205','EmptySmallSquare':'\u25FB','emptyv':'\u2205','EmptyVerySmallSquare':'\u25AB','emsp':'\u2003','emsp13':'\u2004','emsp14':'\u2005','eng':'\u014B','ENG':'\u014A','ensp':'\u2002','eogon':'\u0119','Eogon':'\u0118','eopf':'\uD835\uDD56','Eopf':'\uD835\uDD3C','epar':'\u22D5','eparsl':'\u29E3','eplus':'\u2A71','epsi':'\u03B5','epsilon':'\u03B5','Epsilon':'\u0395','epsiv':'\u03F5','eqcirc':'\u2256','eqcolon':'\u2255','eqsim':'\u2242','eqslantgtr':'\u2A96','eqslantless':'\u2A95','Equal':'\u2A75','equals':'=','EqualTilde':'\u2242','equest':'\u225F','Equilibrium':'\u21CC','equiv':'\u2261','equivDD':'\u2A78','eqvparsl':'\u29E5','erarr':'\u2971','erDot':'\u2253','escr':'\u212F','Escr':'\u2130','esdot':'\u2250','esim':'\u2242','Esim':'\u2A73','eta':'\u03B7','Eta':'\u0397','eth':'\xF0','ETH':'\xD0','euml':'\xEB','Euml':'\xCB','euro':'\u20AC','excl':'!','exist':'\u2203','Exists':'\u2203','expectation':'\u2130','exponentiale':'\u2147','ExponentialE':'\u2147','fallingdotseq':'\u2252','fcy':'\u0444','Fcy':'\u0424','female':'\u2640','ffilig':'\uFB03','fflig':'\uFB00','ffllig':'\uFB04','ffr':'\uD835\uDD23','Ffr':'\uD835\uDD09','filig':'\uFB01','FilledSmallSquare':'\u25FC','FilledVerySmallSquare':'\u25AA','fjlig':'fj','flat':'\u266D','fllig':'\uFB02','fltns':'\u25B1','fnof':'\u0192','fopf':'\uD835\uDD57','Fopf':'\uD835\uDD3D','forall':'\u2200','ForAll':'\u2200','fork':'\u22D4','forkv':'\u2AD9','Fouriertrf':'\u2131','fpartint':'\u2A0D','frac12':'\xBD','frac13':'\u2153','frac14':'\xBC','frac15':'\u2155','frac16':'\u2159','frac18':'\u215B','frac23':'\u2154','frac25':'\u2156','frac34':'\xBE','frac35':'\u2157','frac38':'\u215C','frac45':'\u2158','frac56':'\u215A','frac58':'\u215D','frac78':'\u215E','frasl':'\u2044','frown':'\u2322','fscr':'\uD835\uDCBB','Fscr':'\u2131','gacute':'\u01F5','gamma':'\u03B3','Gamma':'\u0393','gammad':'\u03DD','Gammad':'\u03DC','gap':'\u2A86','gbreve':'\u011F','Gbreve':'\u011E','Gcedil':'\u0122','gcirc':'\u011D','Gcirc':'\u011C','gcy':'\u0433','Gcy':'\u0413','gdot':'\u0121','Gdot':'\u0120','ge':'\u2265','gE':'\u2267','gel':'\u22DB','gEl':'\u2A8C','geq':'\u2265','geqq':'\u2267','geqslant':'\u2A7E','ges':'\u2A7E','gescc':'\u2AA9','gesdot':'\u2A80','gesdoto':'\u2A82','gesdotol':'\u2A84','gesl':'\u22DB\uFE00','gesles':'\u2A94','gfr':'\uD835\uDD24','Gfr':'\uD835\uDD0A','gg':'\u226B','Gg':'\u22D9','ggg':'\u22D9','gimel':'\u2137','gjcy':'\u0453','GJcy':'\u0403','gl':'\u2277','gla':'\u2AA5','glE':'\u2A92','glj':'\u2AA4','gnap':'\u2A8A','gnapprox':'\u2A8A','gne':'\u2A88','gnE':'\u2269','gneq':'\u2A88','gneqq':'\u2269','gnsim':'\u22E7','gopf':'\uD835\uDD58','Gopf':'\uD835\uDD3E','grave':'`','GreaterEqual':'\u2265','GreaterEqualLess':'\u22DB','GreaterFullEqual':'\u2267','GreaterGreater':'\u2AA2','GreaterLess':'\u2277','GreaterSlantEqual':'\u2A7E','GreaterTilde':'\u2273','gscr':'\u210A','Gscr':'\uD835\uDCA2','gsim':'\u2273','gsime':'\u2A8E','gsiml':'\u2A90','gt':'>','Gt':'\u226B','GT':'>','gtcc':'\u2AA7','gtcir':'\u2A7A','gtdot':'\u22D7','gtlPar':'\u2995','gtquest':'\u2A7C','gtrapprox':'\u2A86','gtrarr':'\u2978','gtrdot':'\u22D7','gtreqless':'\u22DB','gtreqqless':'\u2A8C','gtrless':'\u2277','gtrsim':'\u2273','gvertneqq':'\u2269\uFE00','gvnE':'\u2269\uFE00','Hacek':'\u02C7','hairsp':'\u200A','half':'\xBD','hamilt':'\u210B','hardcy':'\u044A','HARDcy':'\u042A','harr':'\u2194','hArr':'\u21D4','harrcir':'\u2948','harrw':'\u21AD','Hat':'^','hbar':'\u210F','hcirc':'\u0125','Hcirc':'\u0124','hearts':'\u2665','heartsuit':'\u2665','hellip':'\u2026','hercon':'\u22B9','hfr':'\uD835\uDD25','Hfr':'\u210C','HilbertSpace':'\u210B','hksearow':'\u2925','hkswarow':'\u2926','hoarr':'\u21FF','homtht':'\u223B','hookleftarrow':'\u21A9','hookrightarrow':'\u21AA','hopf':'\uD835\uDD59','Hopf':'\u210D','horbar':'\u2015','HorizontalLine':'\u2500','hscr':'\uD835\uDCBD','Hscr':'\u210B','hslash':'\u210F','hstrok':'\u0127','Hstrok':'\u0126','HumpDownHump':'\u224E','HumpEqual':'\u224F','hybull':'\u2043','hyphen':'\u2010','iacute':'\xED','Iacute':'\xCD','ic':'\u2063','icirc':'\xEE','Icirc':'\xCE','icy':'\u0438','Icy':'\u0418','Idot':'\u0130','iecy':'\u0435','IEcy':'\u0415','iexcl':'\xA1','iff':'\u21D4','ifr':'\uD835\uDD26','Ifr':'\u2111','igrave':'\xEC','Igrave':'\xCC','ii':'\u2148','iiiint':'\u2A0C','iiint':'\u222D','iinfin':'\u29DC','iiota':'\u2129','ijlig':'\u0133','IJlig':'\u0132','Im':'\u2111','imacr':'\u012B','Imacr':'\u012A','image':'\u2111','ImaginaryI':'\u2148','imagline':'\u2110','imagpart':'\u2111','imath':'\u0131','imof':'\u22B7','imped':'\u01B5','Implies':'\u21D2','in':'\u2208','incare':'\u2105','infin':'\u221E','infintie':'\u29DD','inodot':'\u0131','int':'\u222B','Int':'\u222C','intcal':'\u22BA','integers':'\u2124','Integral':'\u222B','intercal':'\u22BA','Intersection':'\u22C2','intlarhk':'\u2A17','intprod':'\u2A3C','InvisibleComma':'\u2063','InvisibleTimes':'\u2062','iocy':'\u0451','IOcy':'\u0401','iogon':'\u012F','Iogon':'\u012E','iopf':'\uD835\uDD5A','Iopf':'\uD835\uDD40','iota':'\u03B9','Iota':'\u0399','iprod':'\u2A3C','iquest':'\xBF','iscr':'\uD835\uDCBE','Iscr':'\u2110','isin':'\u2208','isindot':'\u22F5','isinE':'\u22F9','isins':'\u22F4','isinsv':'\u22F3','isinv':'\u2208','it':'\u2062','itilde':'\u0129','Itilde':'\u0128','iukcy':'\u0456','Iukcy':'\u0406','iuml':'\xEF','Iuml':'\xCF','jcirc':'\u0135','Jcirc':'\u0134','jcy':'\u0439','Jcy':'\u0419','jfr':'\uD835\uDD27','Jfr':'\uD835\uDD0D','jmath':'\u0237','jopf':'\uD835\uDD5B','Jopf':'\uD835\uDD41','jscr':'\uD835\uDCBF','Jscr':'\uD835\uDCA5','jsercy':'\u0458','Jsercy':'\u0408','jukcy':'\u0454','Jukcy':'\u0404','kappa':'\u03BA','Kappa':'\u039A','kappav':'\u03F0','kcedil':'\u0137','Kcedil':'\u0136','kcy':'\u043A','Kcy':'\u041A','kfr':'\uD835\uDD28','Kfr':'\uD835\uDD0E','kgreen':'\u0138','khcy':'\u0445','KHcy':'\u0425','kjcy':'\u045C','KJcy':'\u040C','kopf':'\uD835\uDD5C','Kopf':'\uD835\uDD42','kscr':'\uD835\uDCC0','Kscr':'\uD835\uDCA6','lAarr':'\u21DA','lacute':'\u013A','Lacute':'\u0139','laemptyv':'\u29B4','lagran':'\u2112','lambda':'\u03BB','Lambda':'\u039B','lang':'\u27E8','Lang':'\u27EA','langd':'\u2991','langle':'\u27E8','lap':'\u2A85','Laplacetrf':'\u2112','laquo':'\xAB','larr':'\u2190','lArr':'\u21D0','Larr':'\u219E','larrb':'\u21E4','larrbfs':'\u291F','larrfs':'\u291D','larrhk':'\u21A9','larrlp':'\u21AB','larrpl':'\u2939','larrsim':'\u2973','larrtl':'\u21A2','lat':'\u2AAB','latail':'\u2919','lAtail':'\u291B','late':'\u2AAD','lates':'\u2AAD\uFE00','lbarr':'\u290C','lBarr':'\u290E','lbbrk':'\u2772','lbrace':'{','lbrack':'[','lbrke':'\u298B','lbrksld':'\u298F','lbrkslu':'\u298D','lcaron':'\u013E','Lcaron':'\u013D','lcedil':'\u013C','Lcedil':'\u013B','lceil':'\u2308','lcub':'{','lcy':'\u043B','Lcy':'\u041B','ldca':'\u2936','ldquo':'\u201C','ldquor':'\u201E','ldrdhar':'\u2967','ldrushar':'\u294B','ldsh':'\u21B2','le':'\u2264','lE':'\u2266','LeftAngleBracket':'\u27E8','leftarrow':'\u2190','Leftarrow':'\u21D0','LeftArrow':'\u2190','LeftArrowBar':'\u21E4','LeftArrowRightArrow':'\u21C6','leftarrowtail':'\u21A2','LeftCeiling':'\u2308','LeftDoubleBracket':'\u27E6','LeftDownTeeVector':'\u2961','LeftDownVector':'\u21C3','LeftDownVectorBar':'\u2959','LeftFloor':'\u230A','leftharpoondown':'\u21BD','leftharpoonup':'\u21BC','leftleftarrows':'\u21C7','leftrightarrow':'\u2194','Leftrightarrow':'\u21D4','LeftRightArrow':'\u2194','leftrightarrows':'\u21C6','leftrightharpoons':'\u21CB','leftrightsquigarrow':'\u21AD','LeftRightVector':'\u294E','LeftTee':'\u22A3','LeftTeeArrow':'\u21A4','LeftTeeVector':'\u295A','leftthreetimes':'\u22CB','LeftTriangle':'\u22B2','LeftTriangleBar':'\u29CF','LeftTriangleEqual':'\u22B4','LeftUpDownVector':'\u2951','LeftUpTeeVector':'\u2960','LeftUpVector':'\u21BF','LeftUpVectorBar':'\u2958','LeftVector':'\u21BC','LeftVectorBar':'\u2952','leg':'\u22DA','lEg':'\u2A8B','leq':'\u2264','leqq':'\u2266','leqslant':'\u2A7D','les':'\u2A7D','lescc':'\u2AA8','lesdot':'\u2A7F','lesdoto':'\u2A81','lesdotor':'\u2A83','lesg':'\u22DA\uFE00','lesges':'\u2A93','lessapprox':'\u2A85','lessdot':'\u22D6','lesseqgtr':'\u22DA','lesseqqgtr':'\u2A8B','LessEqualGreater':'\u22DA','LessFullEqual':'\u2266','LessGreater':'\u2276','lessgtr':'\u2276','LessLess':'\u2AA1','lesssim':'\u2272','LessSlantEqual':'\u2A7D','LessTilde':'\u2272','lfisht':'\u297C','lfloor':'\u230A','lfr':'\uD835\uDD29','Lfr':'\uD835\uDD0F','lg':'\u2276','lgE':'\u2A91','lHar':'\u2962','lhard':'\u21BD','lharu':'\u21BC','lharul':'\u296A','lhblk':'\u2584','ljcy':'\u0459','LJcy':'\u0409','ll':'\u226A','Ll':'\u22D8','llarr':'\u21C7','llcorner':'\u231E','Lleftarrow':'\u21DA','llhard':'\u296B','lltri':'\u25FA','lmidot':'\u0140','Lmidot':'\u013F','lmoust':'\u23B0','lmoustache':'\u23B0','lnap':'\u2A89','lnapprox':'\u2A89','lne':'\u2A87','lnE':'\u2268','lneq':'\u2A87','lneqq':'\u2268','lnsim':'\u22E6','loang':'\u27EC','loarr':'\u21FD','lobrk':'\u27E6','longleftarrow':'\u27F5','Longleftarrow':'\u27F8','LongLeftArrow':'\u27F5','longleftrightarrow':'\u27F7','Longleftrightarrow':'\u27FA','LongLeftRightArrow':'\u27F7','longmapsto':'\u27FC','longrightarrow':'\u27F6','Longrightarrow':'\u27F9','LongRightArrow':'\u27F6','looparrowleft':'\u21AB','looparrowright':'\u21AC','lopar':'\u2985','lopf':'\uD835\uDD5D','Lopf':'\uD835\uDD43','loplus':'\u2A2D','lotimes':'\u2A34','lowast':'\u2217','lowbar':'_','LowerLeftArrow':'\u2199','LowerRightArrow':'\u2198','loz':'\u25CA','lozenge':'\u25CA','lozf':'\u29EB','lpar':'(','lparlt':'\u2993','lrarr':'\u21C6','lrcorner':'\u231F','lrhar':'\u21CB','lrhard':'\u296D','lrm':'\u200E','lrtri':'\u22BF','lsaquo':'\u2039','lscr':'\uD835\uDCC1','Lscr':'\u2112','lsh':'\u21B0','Lsh':'\u21B0','lsim':'\u2272','lsime':'\u2A8D','lsimg':'\u2A8F','lsqb':'[','lsquo':'\u2018','lsquor':'\u201A','lstrok':'\u0142','Lstrok':'\u0141','lt':'<','Lt':'\u226A','LT':'<','ltcc':'\u2AA6','ltcir':'\u2A79','ltdot':'\u22D6','lthree':'\u22CB','ltimes':'\u22C9','ltlarr':'\u2976','ltquest':'\u2A7B','ltri':'\u25C3','ltrie':'\u22B4','ltrif':'\u25C2','ltrPar':'\u2996','lurdshar':'\u294A','luruhar':'\u2966','lvertneqq':'\u2268\uFE00','lvnE':'\u2268\uFE00','macr':'\xAF','male':'\u2642','malt':'\u2720','maltese':'\u2720','map':'\u21A6','Map':'\u2905','mapsto':'\u21A6','mapstodown':'\u21A7','mapstoleft':'\u21A4','mapstoup':'\u21A5','marker':'\u25AE','mcomma':'\u2A29','mcy':'\u043C','Mcy':'\u041C','mdash':'\u2014','mDDot':'\u223A','measuredangle':'\u2221','MediumSpace':'\u205F','Mellintrf':'\u2133','mfr':'\uD835\uDD2A','Mfr':'\uD835\uDD10','mho':'\u2127','micro':'\xB5','mid':'\u2223','midast':'*','midcir':'\u2AF0','middot':'\xB7','minus':'\u2212','minusb':'\u229F','minusd':'\u2238','minusdu':'\u2A2A','MinusPlus':'\u2213','mlcp':'\u2ADB','mldr':'\u2026','mnplus':'\u2213','models':'\u22A7','mopf':'\uD835\uDD5E','Mopf':'\uD835\uDD44','mp':'\u2213','mscr':'\uD835\uDCC2','Mscr':'\u2133','mstpos':'\u223E','mu':'\u03BC','Mu':'\u039C','multimap':'\u22B8','mumap':'\u22B8','nabla':'\u2207','nacute':'\u0144','Nacute':'\u0143','nang':'\u2220\u20D2','nap':'\u2249','napE':'\u2A70\u0338','napid':'\u224B\u0338','napos':'\u0149','napprox':'\u2249','natur':'\u266E','natural':'\u266E','naturals':'\u2115','nbsp':'\xA0','nbump':'\u224E\u0338','nbumpe':'\u224F\u0338','ncap':'\u2A43','ncaron':'\u0148','Ncaron':'\u0147','ncedil':'\u0146','Ncedil':'\u0145','ncong':'\u2247','ncongdot':'\u2A6D\u0338','ncup':'\u2A42','ncy':'\u043D','Ncy':'\u041D','ndash':'\u2013','ne':'\u2260','nearhk':'\u2924','nearr':'\u2197','neArr':'\u21D7','nearrow':'\u2197','nedot':'\u2250\u0338','NegativeMediumSpace':'\u200B','NegativeThickSpace':'\u200B','NegativeThinSpace':'\u200B','NegativeVeryThinSpace':'\u200B','nequiv':'\u2262','nesear':'\u2928','nesim':'\u2242\u0338','NestedGreaterGreater':'\u226B','NestedLessLess':'\u226A','NewLine':'\n','nexist':'\u2204','nexists':'\u2204','nfr':'\uD835\uDD2B','Nfr':'\uD835\uDD11','nge':'\u2271','ngE':'\u2267\u0338','ngeq':'\u2271','ngeqq':'\u2267\u0338','ngeqslant':'\u2A7E\u0338','nges':'\u2A7E\u0338','nGg':'\u22D9\u0338','ngsim':'\u2275','ngt':'\u226F','nGt':'\u226B\u20D2','ngtr':'\u226F','nGtv':'\u226B\u0338','nharr':'\u21AE','nhArr':'\u21CE','nhpar':'\u2AF2','ni':'\u220B','nis':'\u22FC','nisd':'\u22FA','niv':'\u220B','njcy':'\u045A','NJcy':'\u040A','nlarr':'\u219A','nlArr':'\u21CD','nldr':'\u2025','nle':'\u2270','nlE':'\u2266\u0338','nleftarrow':'\u219A','nLeftarrow':'\u21CD','nleftrightarrow':'\u21AE','nLeftrightarrow':'\u21CE','nleq':'\u2270','nleqq':'\u2266\u0338','nleqslant':'\u2A7D\u0338','nles':'\u2A7D\u0338','nless':'\u226E','nLl':'\u22D8\u0338','nlsim':'\u2274','nlt':'\u226E','nLt':'\u226A\u20D2','nltri':'\u22EA','nltrie':'\u22EC','nLtv':'\u226A\u0338','nmid':'\u2224','NoBreak':'\u2060','NonBreakingSpace':'\xA0','nopf':'\uD835\uDD5F','Nopf':'\u2115','not':'\xAC','Not':'\u2AEC','NotCongruent':'\u2262','NotCupCap':'\u226D','NotDoubleVerticalBar':'\u2226','NotElement':'\u2209','NotEqual':'\u2260','NotEqualTilde':'\u2242\u0338','NotExists':'\u2204','NotGreater':'\u226F','NotGreaterEqual':'\u2271','NotGreaterFullEqual':'\u2267\u0338','NotGreaterGreater':'\u226B\u0338','NotGreaterLess':'\u2279','NotGreaterSlantEqual':'\u2A7E\u0338','NotGreaterTilde':'\u2275','NotHumpDownHump':'\u224E\u0338','NotHumpEqual':'\u224F\u0338','notin':'\u2209','notindot':'\u22F5\u0338','notinE':'\u22F9\u0338','notinva':'\u2209','notinvb':'\u22F7','notinvc':'\u22F6','NotLeftTriangle':'\u22EA','NotLeftTriangleBar':'\u29CF\u0338','NotLeftTriangleEqual':'\u22EC','NotLess':'\u226E','NotLessEqual':'\u2270','NotLessGreater':'\u2278','NotLessLess':'\u226A\u0338','NotLessSlantEqual':'\u2A7D\u0338','NotLessTilde':'\u2274','NotNestedGreaterGreater':'\u2AA2\u0338','NotNestedLessLess':'\u2AA1\u0338','notni':'\u220C','notniva':'\u220C','notnivb':'\u22FE','notnivc':'\u22FD','NotPrecedes':'\u2280','NotPrecedesEqual':'\u2AAF\u0338','NotPrecedesSlantEqual':'\u22E0','NotReverseElement':'\u220C','NotRightTriangle':'\u22EB','NotRightTriangleBar':'\u29D0\u0338','NotRightTriangleEqual':'\u22ED','NotSquareSubset':'\u228F\u0338','NotSquareSubsetEqual':'\u22E2','NotSquareSuperset':'\u2290\u0338','NotSquareSupersetEqual':'\u22E3','NotSubset':'\u2282\u20D2','NotSubsetEqual':'\u2288','NotSucceeds':'\u2281','NotSucceedsEqual':'\u2AB0\u0338','NotSucceedsSlantEqual':'\u22E1','NotSucceedsTilde':'\u227F\u0338','NotSuperset':'\u2283\u20D2','NotSupersetEqual':'\u2289','NotTilde':'\u2241','NotTildeEqual':'\u2244','NotTildeFullEqual':'\u2247','NotTildeTilde':'\u2249','NotVerticalBar':'\u2224','npar':'\u2226','nparallel':'\u2226','nparsl':'\u2AFD\u20E5','npart':'\u2202\u0338','npolint':'\u2A14','npr':'\u2280','nprcue':'\u22E0','npre':'\u2AAF\u0338','nprec':'\u2280','npreceq':'\u2AAF\u0338','nrarr':'\u219B','nrArr':'\u21CF','nrarrc':'\u2933\u0338','nrarrw':'\u219D\u0338','nrightarrow':'\u219B','nRightarrow':'\u21CF','nrtri':'\u22EB','nrtrie':'\u22ED','nsc':'\u2281','nsccue':'\u22E1','nsce':'\u2AB0\u0338','nscr':'\uD835\uDCC3','Nscr':'\uD835\uDCA9','nshortmid':'\u2224','nshortparallel':'\u2226','nsim':'\u2241','nsime':'\u2244','nsimeq':'\u2244','nsmid':'\u2224','nspar':'\u2226','nsqsube':'\u22E2','nsqsupe':'\u22E3','nsub':'\u2284','nsube':'\u2288','nsubE':'\u2AC5\u0338','nsubset':'\u2282\u20D2','nsubseteq':'\u2288','nsubseteqq':'\u2AC5\u0338','nsucc':'\u2281','nsucceq':'\u2AB0\u0338','nsup':'\u2285','nsupe':'\u2289','nsupE':'\u2AC6\u0338','nsupset':'\u2283\u20D2','nsupseteq':'\u2289','nsupseteqq':'\u2AC6\u0338','ntgl':'\u2279','ntilde':'\xF1','Ntilde':'\xD1','ntlg':'\u2278','ntriangleleft':'\u22EA','ntrianglelefteq':'\u22EC','ntriangleright':'\u22EB','ntrianglerighteq':'\u22ED','nu':'\u03BD','Nu':'\u039D','num':'#','numero':'\u2116','numsp':'\u2007','nvap':'\u224D\u20D2','nvdash':'\u22AC','nvDash':'\u22AD','nVdash':'\u22AE','nVDash':'\u22AF','nvge':'\u2265\u20D2','nvgt':'>\u20D2','nvHarr':'\u2904','nvinfin':'\u29DE','nvlArr':'\u2902','nvle':'\u2264\u20D2','nvlt':'<\u20D2','nvltrie':'\u22B4\u20D2','nvrArr':'\u2903','nvrtrie':'\u22B5\u20D2','nvsim':'\u223C\u20D2','nwarhk':'\u2923','nwarr':'\u2196','nwArr':'\u21D6','nwarrow':'\u2196','nwnear':'\u2927','oacute':'\xF3','Oacute':'\xD3','oast':'\u229B','ocir':'\u229A','ocirc':'\xF4','Ocirc':'\xD4','ocy':'\u043E','Ocy':'\u041E','odash':'\u229D','odblac':'\u0151','Odblac':'\u0150','odiv':'\u2A38','odot':'\u2299','odsold':'\u29BC','oelig':'\u0153','OElig':'\u0152','ofcir':'\u29BF','ofr':'\uD835\uDD2C','Ofr':'\uD835\uDD12','ogon':'\u02DB','ograve':'\xF2','Ograve':'\xD2','ogt':'\u29C1','ohbar':'\u29B5','ohm':'\u03A9','oint':'\u222E','olarr':'\u21BA','olcir':'\u29BE','olcross':'\u29BB','oline':'\u203E','olt':'\u29C0','omacr':'\u014D','Omacr':'\u014C','omega':'\u03C9','Omega':'\u03A9','omicron':'\u03BF','Omicron':'\u039F','omid':'\u29B6','ominus':'\u2296','oopf':'\uD835\uDD60','Oopf':'\uD835\uDD46','opar':'\u29B7','OpenCurlyDoubleQuote':'\u201C','OpenCurlyQuote':'\u2018','operp':'\u29B9','oplus':'\u2295','or':'\u2228','Or':'\u2A54','orarr':'\u21BB','ord':'\u2A5D','order':'\u2134','orderof':'\u2134','ordf':'\xAA','ordm':'\xBA','origof':'\u22B6','oror':'\u2A56','orslope':'\u2A57','orv':'\u2A5B','oS':'\u24C8','oscr':'\u2134','Oscr':'\uD835\uDCAA','oslash':'\xF8','Oslash':'\xD8','osol':'\u2298','otilde':'\xF5','Otilde':'\xD5','otimes':'\u2297','Otimes':'\u2A37','otimesas':'\u2A36','ouml':'\xF6','Ouml':'\xD6','ovbar':'\u233D','OverBar':'\u203E','OverBrace':'\u23DE','OverBracket':'\u23B4','OverParenthesis':'\u23DC','par':'\u2225','para':'\xB6','parallel':'\u2225','parsim':'\u2AF3','parsl':'\u2AFD','part':'\u2202','PartialD':'\u2202','pcy':'\u043F','Pcy':'\u041F','percnt':'%','period':'.','permil':'\u2030','perp':'\u22A5','pertenk':'\u2031','pfr':'\uD835\uDD2D','Pfr':'\uD835\uDD13','phi':'\u03C6','Phi':'\u03A6','phiv':'\u03D5','phmmat':'\u2133','phone':'\u260E','pi':'\u03C0','Pi':'\u03A0','pitchfork':'\u22D4','piv':'\u03D6','planck':'\u210F','planckh':'\u210E','plankv':'\u210F','plus':'+','plusacir':'\u2A23','plusb':'\u229E','pluscir':'\u2A22','plusdo':'\u2214','plusdu':'\u2A25','pluse':'\u2A72','PlusMinus':'\xB1','plusmn':'\xB1','plussim':'\u2A26','plustwo':'\u2A27','pm':'\xB1','Poincareplane':'\u210C','pointint':'\u2A15','popf':'\uD835\uDD61','Popf':'\u2119','pound':'\xA3','pr':'\u227A','Pr':'\u2ABB','prap':'\u2AB7','prcue':'\u227C','pre':'\u2AAF','prE':'\u2AB3','prec':'\u227A','precapprox':'\u2AB7','preccurlyeq':'\u227C','Precedes':'\u227A','PrecedesEqual':'\u2AAF','PrecedesSlantEqual':'\u227C','PrecedesTilde':'\u227E','preceq':'\u2AAF','precnapprox':'\u2AB9','precneqq':'\u2AB5','precnsim':'\u22E8','precsim':'\u227E','prime':'\u2032','Prime':'\u2033','primes':'\u2119','prnap':'\u2AB9','prnE':'\u2AB5','prnsim':'\u22E8','prod':'\u220F','Product':'\u220F','profalar':'\u232E','profline':'\u2312','profsurf':'\u2313','prop':'\u221D','Proportion':'\u2237','Proportional':'\u221D','propto':'\u221D','prsim':'\u227E','prurel':'\u22B0','pscr':'\uD835\uDCC5','Pscr':'\uD835\uDCAB','psi':'\u03C8','Psi':'\u03A8','puncsp':'\u2008','qfr':'\uD835\uDD2E','Qfr':'\uD835\uDD14','qint':'\u2A0C','qopf':'\uD835\uDD62','Qopf':'\u211A','qprime':'\u2057','qscr':'\uD835\uDCC6','Qscr':'\uD835\uDCAC','quaternions':'\u210D','quatint':'\u2A16','quest':'?','questeq':'\u225F','quot':'"','QUOT':'"','rAarr':'\u21DB','race':'\u223D\u0331','racute':'\u0155','Racute':'\u0154','radic':'\u221A','raemptyv':'\u29B3','rang':'\u27E9','Rang':'\u27EB','rangd':'\u2992','range':'\u29A5','rangle':'\u27E9','raquo':'\xBB','rarr':'\u2192','rArr':'\u21D2','Rarr':'\u21A0','rarrap':'\u2975','rarrb':'\u21E5','rarrbfs':'\u2920','rarrc':'\u2933','rarrfs':'\u291E','rarrhk':'\u21AA','rarrlp':'\u21AC','rarrpl':'\u2945','rarrsim':'\u2974','rarrtl':'\u21A3','Rarrtl':'\u2916','rarrw':'\u219D','ratail':'\u291A','rAtail':'\u291C','ratio':'\u2236','rationals':'\u211A','rbarr':'\u290D','rBarr':'\u290F','RBarr':'\u2910','rbbrk':'\u2773','rbrace':'}','rbrack':']','rbrke':'\u298C','rbrksld':'\u298E','rbrkslu':'\u2990','rcaron':'\u0159','Rcaron':'\u0158','rcedil':'\u0157','Rcedil':'\u0156','rceil':'\u2309','rcub':'}','rcy':'\u0440','Rcy':'\u0420','rdca':'\u2937','rdldhar':'\u2969','rdquo':'\u201D','rdquor':'\u201D','rdsh':'\u21B3','Re':'\u211C','real':'\u211C','realine':'\u211B','realpart':'\u211C','reals':'\u211D','rect':'\u25AD','reg':'\xAE','REG':'\xAE','ReverseElement':'\u220B','ReverseEquilibrium':'\u21CB','ReverseUpEquilibrium':'\u296F','rfisht':'\u297D','rfloor':'\u230B','rfr':'\uD835\uDD2F','Rfr':'\u211C','rHar':'\u2964','rhard':'\u21C1','rharu':'\u21C0','rharul':'\u296C','rho':'\u03C1','Rho':'\u03A1','rhov':'\u03F1','RightAngleBracket':'\u27E9','rightarrow':'\u2192','Rightarrow':'\u21D2','RightArrow':'\u2192','RightArrowBar':'\u21E5','RightArrowLeftArrow':'\u21C4','rightarrowtail':'\u21A3','RightCeiling':'\u2309','RightDoubleBracket':'\u27E7','RightDownTeeVector':'\u295D','RightDownVector':'\u21C2','RightDownVectorBar':'\u2955','RightFloor':'\u230B','rightharpoondown':'\u21C1','rightharpoonup':'\u21C0','rightleftarrows':'\u21C4','rightleftharpoons':'\u21CC','rightrightarrows':'\u21C9','rightsquigarrow':'\u219D','RightTee':'\u22A2','RightTeeArrow':'\u21A6','RightTeeVector':'\u295B','rightthreetimes':'\u22CC','RightTriangle':'\u22B3','RightTriangleBar':'\u29D0','RightTriangleEqual':'\u22B5','RightUpDownVector':'\u294F','RightUpTeeVector':'\u295C','RightUpVector':'\u21BE','RightUpVectorBar':'\u2954','RightVector':'\u21C0','RightVectorBar':'\u2953','ring':'\u02DA','risingdotseq':'\u2253','rlarr':'\u21C4','rlhar':'\u21CC','rlm':'\u200F','rmoust':'\u23B1','rmoustache':'\u23B1','rnmid':'\u2AEE','roang':'\u27ED','roarr':'\u21FE','robrk':'\u27E7','ropar':'\u2986','ropf':'\uD835\uDD63','Ropf':'\u211D','roplus':'\u2A2E','rotimes':'\u2A35','RoundImplies':'\u2970','rpar':')','rpargt':'\u2994','rppolint':'\u2A12','rrarr':'\u21C9','Rrightarrow':'\u21DB','rsaquo':'\u203A','rscr':'\uD835\uDCC7','Rscr':'\u211B','rsh':'\u21B1','Rsh':'\u21B1','rsqb':']','rsquo':'\u2019','rsquor':'\u2019','rthree':'\u22CC','rtimes':'\u22CA','rtri':'\u25B9','rtrie':'\u22B5','rtrif':'\u25B8','rtriltri':'\u29CE','RuleDelayed':'\u29F4','ruluhar':'\u2968','rx':'\u211E','sacute':'\u015B','Sacute':'\u015A','sbquo':'\u201A','sc':'\u227B','Sc':'\u2ABC','scap':'\u2AB8','scaron':'\u0161','Scaron':'\u0160','sccue':'\u227D','sce':'\u2AB0','scE':'\u2AB4','scedil':'\u015F','Scedil':'\u015E','scirc':'\u015D','Scirc':'\u015C','scnap':'\u2ABA','scnE':'\u2AB6','scnsim':'\u22E9','scpolint':'\u2A13','scsim':'\u227F','scy':'\u0441','Scy':'\u0421','sdot':'\u22C5','sdotb':'\u22A1','sdote':'\u2A66','searhk':'\u2925','searr':'\u2198','seArr':'\u21D8','searrow':'\u2198','sect':'\xA7','semi':';','seswar':'\u2929','setminus':'\u2216','setmn':'\u2216','sext':'\u2736','sfr':'\uD835\uDD30','Sfr':'\uD835\uDD16','sfrown':'\u2322','sharp':'\u266F','shchcy':'\u0449','SHCHcy':'\u0429','shcy':'\u0448','SHcy':'\u0428','ShortDownArrow':'\u2193','ShortLeftArrow':'\u2190','shortmid':'\u2223','shortparallel':'\u2225','ShortRightArrow':'\u2192','ShortUpArrow':'\u2191','shy':'\xAD','sigma':'\u03C3','Sigma':'\u03A3','sigmaf':'\u03C2','sigmav':'\u03C2','sim':'\u223C','simdot':'\u2A6A','sime':'\u2243','simeq':'\u2243','simg':'\u2A9E','simgE':'\u2AA0','siml':'\u2A9D','simlE':'\u2A9F','simne':'\u2246','simplus':'\u2A24','simrarr':'\u2972','slarr':'\u2190','SmallCircle':'\u2218','smallsetminus':'\u2216','smashp':'\u2A33','smeparsl':'\u29E4','smid':'\u2223','smile':'\u2323','smt':'\u2AAA','smte':'\u2AAC','smtes':'\u2AAC\uFE00','softcy':'\u044C','SOFTcy':'\u042C','sol':'/','solb':'\u29C4','solbar':'\u233F','sopf':'\uD835\uDD64','Sopf':'\uD835\uDD4A','spades':'\u2660','spadesuit':'\u2660','spar':'\u2225','sqcap':'\u2293','sqcaps':'\u2293\uFE00','sqcup':'\u2294','sqcups':'\u2294\uFE00','Sqrt':'\u221A','sqsub':'\u228F','sqsube':'\u2291','sqsubset':'\u228F','sqsubseteq':'\u2291','sqsup':'\u2290','sqsupe':'\u2292','sqsupset':'\u2290','sqsupseteq':'\u2292','squ':'\u25A1','square':'\u25A1','Square':'\u25A1','SquareIntersection':'\u2293','SquareSubset':'\u228F','SquareSubsetEqual':'\u2291','SquareSuperset':'\u2290','SquareSupersetEqual':'\u2292','SquareUnion':'\u2294','squarf':'\u25AA','squf':'\u25AA','srarr':'\u2192','sscr':'\uD835\uDCC8','Sscr':'\uD835\uDCAE','ssetmn':'\u2216','ssmile':'\u2323','sstarf':'\u22C6','star':'\u2606','Star':'\u22C6','starf':'\u2605','straightepsilon':'\u03F5','straightphi':'\u03D5','strns':'\xAF','sub':'\u2282','Sub':'\u22D0','subdot':'\u2ABD','sube':'\u2286','subE':'\u2AC5','subedot':'\u2AC3','submult':'\u2AC1','subne':'\u228A','subnE':'\u2ACB','subplus':'\u2ABF','subrarr':'\u2979','subset':'\u2282','Subset':'\u22D0','subseteq':'\u2286','subseteqq':'\u2AC5','SubsetEqual':'\u2286','subsetneq':'\u228A','subsetneqq':'\u2ACB','subsim':'\u2AC7','subsub':'\u2AD5','subsup':'\u2AD3','succ':'\u227B','succapprox':'\u2AB8','succcurlyeq':'\u227D','Succeeds':'\u227B','SucceedsEqual':'\u2AB0','SucceedsSlantEqual':'\u227D','SucceedsTilde':'\u227F','succeq':'\u2AB0','succnapprox':'\u2ABA','succneqq':'\u2AB6','succnsim':'\u22E9','succsim':'\u227F','SuchThat':'\u220B','sum':'\u2211','Sum':'\u2211','sung':'\u266A','sup':'\u2283','Sup':'\u22D1','sup1':'\xB9','sup2':'\xB2','sup3':'\xB3','supdot':'\u2ABE','supdsub':'\u2AD8','supe':'\u2287','supE':'\u2AC6','supedot':'\u2AC4','Superset':'\u2283','SupersetEqual':'\u2287','suphsol':'\u27C9','suphsub':'\u2AD7','suplarr':'\u297B','supmult':'\u2AC2','supne':'\u228B','supnE':'\u2ACC','supplus':'\u2AC0','supset':'\u2283','Supset':'\u22D1','supseteq':'\u2287','supseteqq':'\u2AC6','supsetneq':'\u228B','supsetneqq':'\u2ACC','supsim':'\u2AC8','supsub':'\u2AD4','supsup':'\u2AD6','swarhk':'\u2926','swarr':'\u2199','swArr':'\u21D9','swarrow':'\u2199','swnwar':'\u292A','szlig':'\xDF','Tab':'\t','target':'\u2316','tau':'\u03C4','Tau':'\u03A4','tbrk':'\u23B4','tcaron':'\u0165','Tcaron':'\u0164','tcedil':'\u0163','Tcedil':'\u0162','tcy':'\u0442','Tcy':'\u0422','tdot':'\u20DB','telrec':'\u2315','tfr':'\uD835\uDD31','Tfr':'\uD835\uDD17','there4':'\u2234','therefore':'\u2234','Therefore':'\u2234','theta':'\u03B8','Theta':'\u0398','thetasym':'\u03D1','thetav':'\u03D1','thickapprox':'\u2248','thicksim':'\u223C','ThickSpace':'\u205F\u200A','thinsp':'\u2009','ThinSpace':'\u2009','thkap':'\u2248','thksim':'\u223C','thorn':'\xFE','THORN':'\xDE','tilde':'\u02DC','Tilde':'\u223C','TildeEqual':'\u2243','TildeFullEqual':'\u2245','TildeTilde':'\u2248','times':'\xD7','timesb':'\u22A0','timesbar':'\u2A31','timesd':'\u2A30','tint':'\u222D','toea':'\u2928','top':'\u22A4','topbot':'\u2336','topcir':'\u2AF1','topf':'\uD835\uDD65','Topf':'\uD835\uDD4B','topfork':'\u2ADA','tosa':'\u2929','tprime':'\u2034','trade':'\u2122','TRADE':'\u2122','triangle':'\u25B5','triangledown':'\u25BF','triangleleft':'\u25C3','trianglelefteq':'\u22B4','triangleq':'\u225C','triangleright':'\u25B9','trianglerighteq':'\u22B5','tridot':'\u25EC','trie':'\u225C','triminus':'\u2A3A','TripleDot':'\u20DB','triplus':'\u2A39','trisb':'\u29CD','tritime':'\u2A3B','trpezium':'\u23E2','tscr':'\uD835\uDCC9','Tscr':'\uD835\uDCAF','tscy':'\u0446','TScy':'\u0426','tshcy':'\u045B','TSHcy':'\u040B','tstrok':'\u0167','Tstrok':'\u0166','twixt':'\u226C','twoheadleftarrow':'\u219E','twoheadrightarrow':'\u21A0','uacute':'\xFA','Uacute':'\xDA','uarr':'\u2191','uArr':'\u21D1','Uarr':'\u219F','Uarrocir':'\u2949','ubrcy':'\u045E','Ubrcy':'\u040E','ubreve':'\u016D','Ubreve':'\u016C','ucirc':'\xFB','Ucirc':'\xDB','ucy':'\u0443','Ucy':'\u0423','udarr':'\u21C5','udblac':'\u0171','Udblac':'\u0170','udhar':'\u296E','ufisht':'\u297E','ufr':'\uD835\uDD32','Ufr':'\uD835\uDD18','ugrave':'\xF9','Ugrave':'\xD9','uHar':'\u2963','uharl':'\u21BF','uharr':'\u21BE','uhblk':'\u2580','ulcorn':'\u231C','ulcorner':'\u231C','ulcrop':'\u230F','ultri':'\u25F8','umacr':'\u016B','Umacr':'\u016A','uml':'\xA8','UnderBar':'_','UnderBrace':'\u23DF','UnderBracket':'\u23B5','UnderParenthesis':'\u23DD','Union':'\u22C3','UnionPlus':'\u228E','uogon':'\u0173','Uogon':'\u0172','uopf':'\uD835\uDD66','Uopf':'\uD835\uDD4C','uparrow':'\u2191','Uparrow':'\u21D1','UpArrow':'\u2191','UpArrowBar':'\u2912','UpArrowDownArrow':'\u21C5','updownarrow':'\u2195','Updownarrow':'\u21D5','UpDownArrow':'\u2195','UpEquilibrium':'\u296E','upharpoonleft':'\u21BF','upharpoonright':'\u21BE','uplus':'\u228E','UpperLeftArrow':'\u2196','UpperRightArrow':'\u2197','upsi':'\u03C5','Upsi':'\u03D2','upsih':'\u03D2','upsilon':'\u03C5','Upsilon':'\u03A5','UpTee':'\u22A5','UpTeeArrow':'\u21A5','upuparrows':'\u21C8','urcorn':'\u231D','urcorner':'\u231D','urcrop':'\u230E','uring':'\u016F','Uring':'\u016E','urtri':'\u25F9','uscr':'\uD835\uDCCA','Uscr':'\uD835\uDCB0','utdot':'\u22F0','utilde':'\u0169','Utilde':'\u0168','utri':'\u25B5','utrif':'\u25B4','uuarr':'\u21C8','uuml':'\xFC','Uuml':'\xDC','uwangle':'\u29A7','vangrt':'\u299C','varepsilon':'\u03F5','varkappa':'\u03F0','varnothing':'\u2205','varphi':'\u03D5','varpi':'\u03D6','varpropto':'\u221D','varr':'\u2195','vArr':'\u21D5','varrho':'\u03F1','varsigma':'\u03C2','varsubsetneq':'\u228A\uFE00','varsubsetneqq':'\u2ACB\uFE00','varsupsetneq':'\u228B\uFE00','varsupsetneqq':'\u2ACC\uFE00','vartheta':'\u03D1','vartriangleleft':'\u22B2','vartriangleright':'\u22B3','vBar':'\u2AE8','Vbar':'\u2AEB','vBarv':'\u2AE9','vcy':'\u0432','Vcy':'\u0412','vdash':'\u22A2','vDash':'\u22A8','Vdash':'\u22A9','VDash':'\u22AB','Vdashl':'\u2AE6','vee':'\u2228','Vee':'\u22C1','veebar':'\u22BB','veeeq':'\u225A','vellip':'\u22EE','verbar':'|','Verbar':'\u2016','vert':'|','Vert':'\u2016','VerticalBar':'\u2223','VerticalLine':'|','VerticalSeparator':'\u2758','VerticalTilde':'\u2240','VeryThinSpace':'\u200A','vfr':'\uD835\uDD33','Vfr':'\uD835\uDD19','vltri':'\u22B2','vnsub':'\u2282\u20D2','vnsup':'\u2283\u20D2','vopf':'\uD835\uDD67','Vopf':'\uD835\uDD4D','vprop':'\u221D','vrtri':'\u22B3','vscr':'\uD835\uDCCB','Vscr':'\uD835\uDCB1','vsubne':'\u228A\uFE00','vsubnE':'\u2ACB\uFE00','vsupne':'\u228B\uFE00','vsupnE':'\u2ACC\uFE00','Vvdash':'\u22AA','vzigzag':'\u299A','wcirc':'\u0175','Wcirc':'\u0174','wedbar':'\u2A5F','wedge':'\u2227','Wedge':'\u22C0','wedgeq':'\u2259','weierp':'\u2118','wfr':'\uD835\uDD34','Wfr':'\uD835\uDD1A','wopf':'\uD835\uDD68','Wopf':'\uD835\uDD4E','wp':'\u2118','wr':'\u2240','wreath':'\u2240','wscr':'\uD835\uDCCC','Wscr':'\uD835\uDCB2','xcap':'\u22C2','xcirc':'\u25EF','xcup':'\u22C3','xdtri':'\u25BD','xfr':'\uD835\uDD35','Xfr':'\uD835\uDD1B','xharr':'\u27F7','xhArr':'\u27FA','xi':'\u03BE','Xi':'\u039E','xlarr':'\u27F5','xlArr':'\u27F8','xmap':'\u27FC','xnis':'\u22FB','xodot':'\u2A00','xopf':'\uD835\uDD69','Xopf':'\uD835\uDD4F','xoplus':'\u2A01','xotime':'\u2A02','xrarr':'\u27F6','xrArr':'\u27F9','xscr':'\uD835\uDCCD','Xscr':'\uD835\uDCB3','xsqcup':'\u2A06','xuplus':'\u2A04','xutri':'\u25B3','xvee':'\u22C1','xwedge':'\u22C0','yacute':'\xFD','Yacute':'\xDD','yacy':'\u044F','YAcy':'\u042F','ycirc':'\u0177','Ycirc':'\u0176','ycy':'\u044B','Ycy':'\u042B','yen':'\xA5','yfr':'\uD835\uDD36','Yfr':'\uD835\uDD1C','yicy':'\u0457','YIcy':'\u0407','yopf':'\uD835\uDD6A','Yopf':'\uD835\uDD50','yscr':'\uD835\uDCCE','Yscr':'\uD835\uDCB4','yucy':'\u044E','YUcy':'\u042E','yuml':'\xFF','Yuml':'\u0178','zacute':'\u017A','Zacute':'\u0179','zcaron':'\u017E','Zcaron':'\u017D','zcy':'\u0437','Zcy':'\u0417','zdot':'\u017C','Zdot':'\u017B','zeetrf':'\u2128','ZeroWidthSpace':'\u200B','zeta':'\u03B6','Zeta':'\u0396','zfr':'\uD835\uDD37','Zfr':'\u2128','zhcy':'\u0436','ZHcy':'\u0416','zigrarr':'\u21DD','zopf':'\uD835\uDD6B','Zopf':'\u2124','zscr':'\uD835\uDCCF','Zscr':'\uD835\uDCB5','zwj':'\u200D','zwnj':'\u200C'};
	var decodeMapLegacy = {'aacute':'\xE1','Aacute':'\xC1','acirc':'\xE2','Acirc':'\xC2','acute':'\xB4','aelig':'\xE6','AElig':'\xC6','agrave':'\xE0','Agrave':'\xC0','amp':'&','AMP':'&','aring':'\xE5','Aring':'\xC5','atilde':'\xE3','Atilde':'\xC3','auml':'\xE4','Auml':'\xC4','brvbar':'\xA6','ccedil':'\xE7','Ccedil':'\xC7','cedil':'\xB8','cent':'\xA2','copy':'\xA9','COPY':'\xA9','curren':'\xA4','deg':'\xB0','divide':'\xF7','eacute':'\xE9','Eacute':'\xC9','ecirc':'\xEA','Ecirc':'\xCA','egrave':'\xE8','Egrave':'\xC8','eth':'\xF0','ETH':'\xD0','euml':'\xEB','Euml':'\xCB','frac12':'\xBD','frac14':'\xBC','frac34':'\xBE','gt':'>','GT':'>','iacute':'\xED','Iacute':'\xCD','icirc':'\xEE','Icirc':'\xCE','iexcl':'\xA1','igrave':'\xEC','Igrave':'\xCC','iquest':'\xBF','iuml':'\xEF','Iuml':'\xCF','laquo':'\xAB','lt':'<','LT':'<','macr':'\xAF','micro':'\xB5','middot':'\xB7','nbsp':'\xA0','not':'\xAC','ntilde':'\xF1','Ntilde':'\xD1','oacute':'\xF3','Oacute':'\xD3','ocirc':'\xF4','Ocirc':'\xD4','ograve':'\xF2','Ograve':'\xD2','ordf':'\xAA','ordm':'\xBA','oslash':'\xF8','Oslash':'\xD8','otilde':'\xF5','Otilde':'\xD5','ouml':'\xF6','Ouml':'\xD6','para':'\xB6','plusmn':'\xB1','pound':'\xA3','quot':'"','QUOT':'"','raquo':'\xBB','reg':'\xAE','REG':'\xAE','sect':'\xA7','shy':'\xAD','sup1':'\xB9','sup2':'\xB2','sup3':'\xB3','szlig':'\xDF','thorn':'\xFE','THORN':'\xDE','times':'\xD7','uacute':'\xFA','Uacute':'\xDA','ucirc':'\xFB','Ucirc':'\xDB','ugrave':'\xF9','Ugrave':'\xD9','uml':'\xA8','uuml':'\xFC','Uuml':'\xDC','yacute':'\xFD','Yacute':'\xDD','yen':'\xA5','yuml':'\xFF'};
	var decodeMapNumeric = {'0':'\uFFFD','128':'\u20AC','130':'\u201A','131':'\u0192','132':'\u201E','133':'\u2026','134':'\u2020','135':'\u2021','136':'\u02C6','137':'\u2030','138':'\u0160','139':'\u2039','140':'\u0152','142':'\u017D','145':'\u2018','146':'\u2019','147':'\u201C','148':'\u201D','149':'\u2022','150':'\u2013','151':'\u2014','152':'\u02DC','153':'\u2122','154':'\u0161','155':'\u203A','156':'\u0153','158':'\u017E','159':'\u0178'};
	var invalidReferenceCodePoints = [1,2,3,4,5,6,7,8,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,64976,64977,64978,64979,64980,64981,64982,64983,64984,64985,64986,64987,64988,64989,64990,64991,64992,64993,64994,64995,64996,64997,64998,64999,65000,65001,65002,65003,65004,65005,65006,65007,65534,65535,131070,131071,196606,196607,262142,262143,327678,327679,393214,393215,458750,458751,524286,524287,589822,589823,655358,655359,720894,720895,786430,786431,851966,851967,917502,917503,983038,983039,1048574,1048575,1114110,1114111];

	/*--------------------------------------------------------------------------*/

	var stringFromCharCode = String.fromCharCode;

	var object = {};
	var hasOwnProperty = object.hasOwnProperty;
	var has = function(object, propertyName) {
		return hasOwnProperty.call(object, propertyName);
	};

	var contains = function(array, value) {
		var index = -1;
		var length = array.length;
		while (++index < length) {
			if (array[index] == value) {
				return true;
			}
		}
		return false;
	};

	var merge = function(options, defaults) {
		if (!options) {
			return defaults;
		}
		var result = {};
		var key;
		for (key in defaults) {
			// A `hasOwnProperty` check is not needed here, since only recognized
			// option names are used anyway. Any others are ignored.
			result[key] = has(options, key) ? options[key] : defaults[key];
		}
		return result;
	};

	// Modified version of `ucs2encode`; see https://mths.be/punycode.
	var codePointToSymbol = function(codePoint, strict) {
		var output = '';
		if ((codePoint >= 0xD800 && codePoint <= 0xDFFF) || codePoint > 0x10FFFF) {
			// See issue #4:
			// “Otherwise, if the number is in the range 0xD800 to 0xDFFF or is
			// greater than 0x10FFFF, then this is a parse error. Return a U+FFFD
			// REPLACEMENT CHARACTER.”
			if (strict) {
				parseError('character reference outside the permissible Unicode range');
			}
			return '\uFFFD';
		}
		if (has(decodeMapNumeric, codePoint)) {
			if (strict) {
				parseError('disallowed character reference');
			}
			return decodeMapNumeric[codePoint];
		}
		if (strict && contains(invalidReferenceCodePoints, codePoint)) {
			parseError('disallowed character reference');
		}
		if (codePoint > 0xFFFF) {
			codePoint -= 0x10000;
			output += stringFromCharCode(codePoint >>> 10 & 0x3FF | 0xD800);
			codePoint = 0xDC00 | codePoint & 0x3FF;
		}
		output += stringFromCharCode(codePoint);
		return output;
	};

	var hexEscape = function(codePoint) {
		return '&#x' + codePoint.toString(16).toUpperCase() + ';';
	};

	var decEscape = function(codePoint) {
		return '&#' + codePoint + ';';
	};

	var parseError = function(message) {
		throw Error('Parse error: ' + message);
	};

	/*--------------------------------------------------------------------------*/

	var encode = function(string, options) {
		options = merge(options, encode.options);
		var strict = options.strict;
		if (strict && regexInvalidRawCodePoint.test(string)) {
			parseError('forbidden code point');
		}
		var encodeEverything = options.encodeEverything;
		var useNamedReferences = options.useNamedReferences;
		var allowUnsafeSymbols = options.allowUnsafeSymbols;
		var escapeCodePoint = options.decimal ? decEscape : hexEscape;

		var escapeBmpSymbol = function(symbol) {
			return escapeCodePoint(symbol.charCodeAt(0));
		};

		if (encodeEverything) {
			// Encode ASCII symbols.
			string = string.replace(regexAsciiWhitelist, function(symbol) {
				// Use named references if requested & possible.
				if (useNamedReferences && has(encodeMap, symbol)) {
					return '&' + encodeMap[symbol] + ';';
				}
				return escapeBmpSymbol(symbol);
			});
			// Shorten a few escapes that represent two symbols, of which at least one
			// is within the ASCII range.
			if (useNamedReferences) {
				string = string
					.replace(/&gt;\u20D2/g, '&nvgt;')
					.replace(/&lt;\u20D2/g, '&nvlt;')
					.replace(/&#x66;&#x6A;/g, '&fjlig;');
			}
			// Encode non-ASCII symbols.
			if (useNamedReferences) {
				// Encode non-ASCII symbols that can be replaced with a named reference.
				string = string.replace(regexEncodeNonAscii, function(string) {
					// Note: there is no need to check `has(encodeMap, string)` here.
					return '&' + encodeMap[string] + ';';
				});
			}
			// Note: any remaining non-ASCII symbols are handled outside of the `if`.
		} else if (useNamedReferences) {
			// Apply named character references.
			// Encode `<>"'&` using named character references.
			if (!allowUnsafeSymbols) {
				string = string.replace(regexEscape, function(string) {
					return '&' + encodeMap[string] + ';'; // no need to check `has()` here
				});
			}
			// Shorten escapes that represent two symbols, of which at least one is
			// `<>"'&`.
			string = string
				.replace(/&gt;\u20D2/g, '&nvgt;')
				.replace(/&lt;\u20D2/g, '&nvlt;');
			// Encode non-ASCII symbols that can be replaced with a named reference.
			string = string.replace(regexEncodeNonAscii, function(string) {
				// Note: there is no need to check `has(encodeMap, string)` here.
				return '&' + encodeMap[string] + ';';
			});
		} else if (!allowUnsafeSymbols) {
			// Encode `<>"'&` using hexadecimal escapes, now that they’re not handled
			// using named character references.
			string = string.replace(regexEscape, escapeBmpSymbol);
		}
		return string
			// Encode astral symbols.
			.replace(regexAstralSymbols, function($0) {
				// https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
				var high = $0.charCodeAt(0);
				var low = $0.charCodeAt(1);
				var codePoint = (high - 0xD800) * 0x400 + low - 0xDC00 + 0x10000;
				return escapeCodePoint(codePoint);
			})
			// Encode any remaining BMP symbols that are not printable ASCII symbols
			// using a hexadecimal escape.
			.replace(regexBmpWhitelist, escapeBmpSymbol);
	};
	// Expose default options (so they can be overridden globally).
	encode.options = {
		'allowUnsafeSymbols': false,
		'encodeEverything': false,
		'strict': false,
		'useNamedReferences': false,
		'decimal' : false
	};

	var decode = function(html, options) {
		options = merge(options, decode.options);
		var strict = options.strict;
		if (strict && regexInvalidEntity.test(html)) {
			parseError('malformed character reference');
		}
		return html.replace(regexDecode, function($0, $1, $2, $3, $4, $5, $6, $7) {
			var codePoint;
			var semicolon;
			var decDigits;
			var hexDigits;
			var reference;
			var next;
			if ($1) {
				// Decode decimal escapes, e.g. `&#119558;`.
				decDigits = $1;
				semicolon = $2;
				if (strict && !semicolon) {
					parseError('character reference was not terminated by a semicolon');
				}
				codePoint = parseInt(decDigits, 10);
				return codePointToSymbol(codePoint, strict);
			}
			if ($3) {
				// Decode hexadecimal escapes, e.g. `&#x1D306;`.
				hexDigits = $3;
				semicolon = $4;
				if (strict && !semicolon) {
					parseError('character reference was not terminated by a semicolon');
				}
				codePoint = parseInt(hexDigits, 16);
				return codePointToSymbol(codePoint, strict);
			}
			if ($5) {
				// Decode named character references with trailing `;`, e.g. `&copy;`.
				reference = $5;
				if (has(decodeMap, reference)) {
					return decodeMap[reference];
				} else {
					// Ambiguous ampersand. https://mths.be/notes/ambiguous-ampersands
					if (strict) {
						parseError(
							'named character reference was not terminated by a semicolon'
						);
					}
					return $0;
				}
			}
			// If we’re still here, it’s a legacy reference for sure. No need for an
			// extra `if` check.
			// Decode named character references without trailing `;`, e.g. `&amp`
			// This is only a parse error if it gets converted to `&`, or if it is
			// followed by `=` in an attribute context.
			reference = $6;
			next = $7;
			if (next && options.isAttributeValue) {
				if (strict && next == '=') {
					parseError('`&` did not start a character reference');
				}
				return $0;
			} else {
				if (strict) {
					parseError(
						'named character reference was not terminated by a semicolon'
					);
				}
				// Note: there is no need to check `has(decodeMapLegacy, reference)`.
				return decodeMapLegacy[reference] + (next || '');
			}
		});
	};
	// Expose default options (so they can be overridden globally).
	decode.options = {
		'isAttributeValue': false,
		'strict': false
	};

	var escape = function(string) {
		return string.replace(regexEscape, function($0) {
			// Note: there is no need to check `has(escapeMap, $0)` here.
			return escapeMap[$0];
		});
	};

	/*--------------------------------------------------------------------------*/

	var he = {
		'version': '1.1.1',
		'encode': encode,
		'decode': decode,
		'escape': escape,
		'unescape': decode
	};

	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		typeof undefined == 'function' &&
		typeof undefined.amd == 'object' &&
		undefined.amd
	) {
		undefined(function() {
			return he;
		});
	}	else if (freeExports && !freeExports.nodeType) {
		if (freeModule) { // in Node.js, io.js, or RingoJS v0.8.0+
			freeModule.exports = he;
		} else { // in Narwhal or RingoJS v0.7.0-
			for (var key in he) {
				has(he, key) && (freeExports[key] = he[key]);
			}
		}
	} else { // in Rhino or a web browser
		root.he = he;
	}

}(commonjsGlobal));
});

// Copyright 2018 Johannes Wilm
// Copyright 2006 Google Inc.
// All Rights Reserved
//
// Defines regular expression patterns to extract XML tokens from string.
// See <http://www.w3.org/TR/REC-xml/#sec-common-syn>,
// <http://www.w3.org/TR/xml11/#sec-common-syn> and
// <http://www.w3.org/TR/REC-xml-names/#NT-NCName> for the specifications.
//
// Original author: Junji Takagi <jtakagi@google.com>

// Common tokens in XML 1.0 and XML 1.1.

const XML_S = '[ \t\r\n]+';
const XML_EQ = `(${XML_S})?=(${XML_S})?`;
const XML_CHAR_REF = '&#[0-9]+;|&#x[0-9a-fA-F]+;';

// XML 1.0 tokens.

const XML10_VERSION_INFO = `${XML_S}version${XML_EQ}("1\\.0"|'1\\.0')`;
const XML10_BASE_CHAR =
    '\u0041-\u005a\u0061-\u007a\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff' +
    '\u0100-\u0131\u0134-\u013e\u0141-\u0148\u014a-\u017e\u0180-\u01c3' +
    '\u01cd-\u01f0\u01f4-\u01f5\u01fa-\u0217\u0250-\u02a8\u02bb-\u02c1\u0386' +
    '\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03ce\u03d0-\u03d6\u03da\u03dc' +
    '\u03de\u03e0\u03e2-\u03f3\u0401-\u040c\u040e-\u044f\u0451-\u045c' +
    '\u045e-\u0481\u0490-\u04c4\u04c7-\u04c8\u04cb-\u04cc\u04d0-\u04eb' +
    '\u04ee-\u04f5\u04f8-\u04f9\u0531-\u0556\u0559\u0561-\u0586\u05d0-\u05ea' +
    '\u05f0-\u05f2\u0621-\u063a\u0641-\u064a\u0671-\u06b7\u06ba-\u06be' +
    '\u06c0-\u06ce\u06d0-\u06d3\u06d5\u06e5-\u06e6\u0905-\u0939\u093d' +
    '\u0958-\u0961\u0985-\u098c\u098f-\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2' +
    '\u09b6-\u09b9\u09dc-\u09dd\u09df-\u09e1\u09f0-\u09f1\u0a05-\u0a0a' +
    '\u0a0f-\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32-\u0a33\u0a35-\u0a36' +
    '\u0a38-\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8b\u0a8d' +
    '\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2-\u0ab3\u0ab5-\u0ab9' +
    '\u0abd\u0ae0\u0b05-\u0b0c\u0b0f-\u0b10\u0b13-\u0b28\u0b2a-\u0b30' +
    '\u0b32-\u0b33\u0b36-\u0b39\u0b3d\u0b5c-\u0b5d\u0b5f-\u0b61\u0b85-\u0b8a' +
    '\u0b8e-\u0b90\u0b92-\u0b95\u0b99-\u0b9a\u0b9c\u0b9e-\u0b9f\u0ba3-\u0ba4' +
    '\u0ba8-\u0baa\u0bae-\u0bb5\u0bb7-\u0bb9\u0c05-\u0c0c\u0c0e-\u0c10' +
    '\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c60-\u0c61\u0c85-\u0c8c' +
    '\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cde\u0ce0-\u0ce1' +
    '\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d28\u0d2a-\u0d39\u0d60-\u0d61' +
    '\u0e01-\u0e2e\u0e30\u0e32-\u0e33\u0e40-\u0e45\u0e81-\u0e82\u0e84' +
    '\u0e87-\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5' +
    '\u0ea7\u0eaa-\u0eab\u0ead-\u0eae\u0eb0\u0eb2-\u0eb3\u0ebd\u0ec0-\u0ec4' +
    '\u0f40-\u0f47\u0f49-\u0f69\u10a0-\u10c5\u10d0-\u10f6\u1100\u1102-\u1103' +
    '\u1105-\u1107\u1109\u110b-\u110c\u110e-\u1112\u113c\u113e\u1140\u114c' +
    '\u114e\u1150\u1154-\u1155\u1159\u115f-\u1161\u1163\u1165\u1167\u1169' +
    '\u116d-\u116e\u1172-\u1173\u1175\u119e\u11a8\u11ab\u11ae-\u11af' +
    '\u11b7-\u11b8\u11ba\u11bc-\u11c2\u11eb\u11f0\u11f9\u1e00-\u1e9b' +
    '\u1ea0-\u1ef9\u1f00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d' +
    '\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc' +
    '\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec' +
    '\u1ff2-\u1ff4\u1ff6-\u1ffc\u2126\u212a-\u212b\u212e\u2180-\u2182' +
    '\u3041-\u3094\u30a1-\u30fa\u3105-\u312c\uac00-\ud7a3';
const XML10_IDEOGRAPHIC =
    '\u4e00-\u9fa5\u3007\u3021-\u3029';
const XML10_COMBINING_CHAR =
    '\u0300-\u0345\u0360-\u0361\u0483-\u0486\u0591-\u05a1\u05a3-\u05b9' +
    '\u05bb-\u05bd\u05bf\u05c1-\u05c2\u05c4\u064b-\u0652\u0670\u06d6-\u06dc' +
    '\u06dd-\u06df\u06e0-\u06e4\u06e7-\u06e8\u06ea-\u06ed\u0901-\u0903\u093c' +
    '\u093e-\u094c\u094d\u0951-\u0954\u0962-\u0963\u0981-\u0983\u09bc\u09be' +
    '\u09bf\u09c0-\u09c4\u09c7-\u09c8\u09cb-\u09cd\u09d7\u09e2-\u09e3\u0a02' +
    '\u0a3c\u0a3e\u0a3f\u0a40-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a70-\u0a71' +
    '\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0b01-\u0b03' +
    '\u0b3c\u0b3e-\u0b43\u0b47-\u0b48\u0b4b-\u0b4d\u0b56-\u0b57\u0b82-\u0b83' +
    '\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0c01-\u0c03\u0c3e-\u0c44' +
    '\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56\u0c82-\u0c83\u0cbe-\u0cc4' +
    '\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5-\u0cd6\u0d02-\u0d03\u0d3e-\u0d43' +
    '\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1' +
    '\u0eb4-\u0eb9\u0ebb-\u0ebc\u0ec8-\u0ecd\u0f18-\u0f19\u0f35\u0f37\u0f39' +
    '\u0f3e\u0f3f\u0f71-\u0f84\u0f86-\u0f8b\u0f90-\u0f95\u0f97\u0f99-\u0fad' +
    '\u0fb1-\u0fb7\u0fb9\u20d0-\u20dc\u20e1\u302a-\u302f\u3099\u309a';
const XML10_DIGIT =
    '\u0030-\u0039\u0660-\u0669\u06f0-\u06f9\u0966-\u096f\u09e6-\u09ef' +
    '\u0a66-\u0a6f\u0ae6-\u0aef\u0b66-\u0b6f\u0be7-\u0bef\u0c66-\u0c6f' +
    '\u0ce6-\u0cef\u0d66-\u0d6f\u0e50-\u0e59\u0ed0-\u0ed9\u0f20-\u0f29';
const XML10_EXTENDER =
    '\u00b7\u02d0\u02d1\u0387\u0640\u0e46\u0ec6\u3005\u3031-\u3035' +
    '\u309d-\u309e\u30fc-\u30fe';
const XML10_LETTER = XML10_BASE_CHAR + XML10_IDEOGRAPHIC;
const XML10_NAME_CHAR = `${XML10_LETTER + XML10_DIGIT}\\._:${XML10_COMBINING_CHAR}${XML10_EXTENDER}-`;
const XML10_NAME = `[${XML10_LETTER}_:][${XML10_NAME_CHAR}]*`;

const XML10_ENTITY_REF = `&${XML10_NAME};`;
const XML10_REFERENCE = `${XML10_ENTITY_REF}|${XML_CHAR_REF}`;
const XML10_ATT_VALUE = `"(([^<&"]|${XML10_REFERENCE})*)"|'(([^<&']|${XML10_REFERENCE})*)'`;
const XML10_ATTRIBUTE =
    `(${XML10_NAME})${XML_EQ}(${XML10_ATT_VALUE})`;

// XML 1.1 tokens.
// TODO(jtakagi): NameStartChar also includes \u10000-\ueffff.
// ECMAScript Language Specifiction defines UnicodeEscapeSequence as
// "\u HexDigit HexDigit HexDigit HexDigit" and we may need to use
// surrogate pairs, but any browser doesn't support surrogate paris in
// character classes of regular expression, so avoid including them for now.

const XML11_VERSION_INFO = `${XML_S}version${XML_EQ}("1\\.1"|'1\\.1')`;
const XML11_NAME_START_CHAR =
    ':A-Z_a-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02ff\u0370-\u037d' +
    '\u037f-\u1fff\u200c-\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff' +
    '\uf900-\ufdcf\ufdf0-\ufffd';
const XML11_NAME_CHAR = XML11_NAME_START_CHAR +
    '\\.0-9\u00b7\u0300-\u036f\u203f-\u2040-';
const XML11_NAME = `[${XML11_NAME_START_CHAR}][${XML11_NAME_CHAR}]*`;

const XML11_ENTITY_REF = `&${XML11_NAME};`;
const XML11_REFERENCE = `${XML11_ENTITY_REF}|${XML_CHAR_REF}`;
const XML11_ATT_VALUE = `"(([^<&"]|${XML11_REFERENCE})*)"|'(([^<&']|${XML11_REFERENCE})*)'`;
const XML11_ATTRIBUTE =
    `(${XML11_NAME})${XML_EQ}(${XML11_ATT_VALUE})`;

// XML Namespace tokens.
// Used in XML parser and XPath parser.

const XML_NC_NAME_CHAR = `${XML10_LETTER + XML10_DIGIT}\\._${XML10_COMBINING_CHAR}${XML10_EXTENDER}-`;
const XML_NC_NAME = `[${XML10_LETTER}_][${XML_NC_NAME_CHAR}]*`;

// Copyright 2018 Johannes Wilm


const XML10_TAGNAME_REGEXP = new RegExp(`^(${XML10_NAME})`);
const XML10_ATTRIBUTE_REGEXP = new RegExp(XML10_ATTRIBUTE, 'g');

const XML11_TAGNAME_REGEXP = new RegExp(`^(${XML11_NAME})`);
const XML11_ATTRIBUTE_REGEXP = new RegExp(XML11_ATTRIBUTE, 'g');


// Parses the given XML string with our custom, JavaScript XML parser. Written
// by Steffen Meschkat (mesch@google.com).
function xmlParse(xml) {
    const regex_empty = /\/$/;

    let regex_tagname;
    let regex_attribute;
    if (xml.match(/^<\?xml/)) {
        // When an XML document begins with an XML declaration
        // VersionInfo must appear.
        if (xml.search(new RegExp(XML10_VERSION_INFO)) == 5) {
            regex_tagname = XML10_TAGNAME_REGEXP;
            regex_attribute = XML10_ATTRIBUTE_REGEXP;
        } else if (xml.search(new RegExp(XML11_VERSION_INFO)) == 5) {
            regex_tagname = XML11_TAGNAME_REGEXP;
            regex_attribute = XML11_ATTRIBUTE_REGEXP;
        } else {
            // VersionInfo is missing, or unknown version number.
            // TODO : Fallback to XML 1.0 or XML 1.1, or just return null?
            alert('VersionInfo is missing, or unknown version number.');
        }
    } else {
        // When an XML declaration is missing it's an XML 1.0 document.
        regex_tagname = XML10_TAGNAME_REGEXP;
        regex_attribute = XML10_ATTRIBUTE_REGEXP;
    }

    const xmldoc = new XDocument();
    const root = xmldoc;
    const stack = [];

    let parent = root;
    stack.push(parent);

    let tag = false,
        quotes = false,
        doublequotes = false,
        start = 0;
    for (let i = 0; i < xml.length; ++i) {
        let char = xml.charAt(i);
        if (tag && char === "'") {
            quotes = !quotes;
        } else if (tag && char === "\"") {
            doublequotes = !doublequotes;
        } else if (tag && char === ">" && !quotes && !doublequotes) {
            let text = xml.slice(start, i);
            if (text.charAt(0) == '/') {
                stack.pop();
                parent = stack[stack.length - 1];
            } else if (text.charAt(0) == '?') {
                // Ignore XML declaration and processing instructions
            } else if (text.charAt(0) == '!') {
                // Ignore malformed notation and comments
            } else {
                const empty = text.match(regex_empty);
                const tagname = regex_tagname.exec(text)[1];
                var node = domCreateElement(xmldoc, tagname);

                let att;
                while (att = regex_attribute.exec(text)) {
                    const val = he.decode(att[5] || att[7] || '');
                    domSetAttribute(node, att[1], val);
                }

                domAppendChild(parent, node);
                if (!empty) {
                    parent = node;
                    stack.push(node);
                }
            }
            start = i + 1;
            tag = false;
            quotes = false;
            doublequotes = false;
        } else if (!tag && char === "<") {
            let text = xml.slice(start, i);
            if (text && parent != root) {
                domAppendChild(parent, domCreateTextNode(xmldoc, text));
            }
            if (xml.slice(i+1,i+4)==="!--") {
                let endTagIndex = xml.slice(i+4).indexOf('-->');
                if (endTagIndex) {
                    let node = domCreateComment(xmldoc, xml.slice(i+4, i+endTagIndex+4));
                    domAppendChild(parent, node);
                    i += endTagIndex+7;
                }
            } else if (xml.slice(i+1,i+9)==="![CDATA[") {
                let endTagIndex = xml.slice(i+9).indexOf(']]>');
                if (endTagIndex) {
                    let node = domCreateCDATASection(xmldoc, xml.slice(i+9, i+endTagIndex+9));
                    domAppendChild(parent, node);
                    i += endTagIndex+12;
                }
            } else {
                tag = true;
            }
            start = i + 1;
        }
    }

    return root;
}

// Based on <http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/
// core.html#ID-1950641247>
const DOM_ELEMENT_NODE = 1;
const DOM_ATTRIBUTE_NODE = 2;
const DOM_TEXT_NODE = 3;
const DOM_CDATA_SECTION_NODE = 4;
const DOM_PROCESSING_INSTRUCTION_NODE = 7;
const DOM_COMMENT_NODE = 8;
const DOM_DOCUMENT_NODE = 9;
const DOM_DOCUMENT_FRAGMENT_NODE = 11;

// Traverses the element nodes in the DOM section underneath the given
// node and invokes the given callbacks as methods on every element
// node encountered. Function opt_pre is invoked before a node's
// children are traversed; opt_post is invoked after they are
// traversed. Traversal will not be continued if a callback function
// returns boolean false. NOTE(mesch): copied from
// <//google3/maps/webmaps/javascript/dom.js>.
function domTraverseElements(node, opt_pre, opt_post) {
    let ret;
    if (opt_pre) {
        ret = opt_pre.call(null, node);
        if (typeof ret == 'boolean' && !ret) {
            return false;
        }
    }

    for (let c = node.firstChild; c; c = c.nextSibling) {
        if (c.nodeType == DOM_ELEMENT_NODE) {
            ret = domTraverseElements.call(this, c, opt_pre, opt_post);
            if (typeof ret == 'boolean' && !ret) {
                return false;
            }
        }
    }

    if (opt_post) {
        ret = opt_post.call(null, node);
        if (typeof ret == 'boolean' && !ret) {
            return false;
        }
    }
}

let _unusedXNodes = [];

// Our W3C DOM Node implementation. Note we call it XNode because we
// can't define the identifier Node. We do this mostly for Opera,
// where we can't reuse the HTML DOM for parsing our own XML, and for
// Safari, where it is too expensive to have the template processor
// operate on native DOM nodes.
class XNode {
    constructor(type, name, opt_value, opt_owner) {
        this.attributes = [];
        this.childNodes = [];

        this.init(type, name, opt_value, opt_owner);
    }

    init(type, name, value, owner) {
        this.nodeType = type - 0;
        this.nodeName = `${name}`;
        this.nodeValue = `${value}`;
        this.ownerDocument = owner;

        this.firstChild = null;
        this.lastChild = null;
        this.nextSibling = null;
        this.previousSibling = null;
        this.parentNode = null;
    }

    static recycle(node) {
        if (!node) {
            return;
        }

        if (node.constructor == XDocument) {
            this.recycle(node.documentElement);
            return;
        }

        if (node.constructor != this) {
            return;
        }

        _unusedXNodes.push(node);
        for (let a = 0; a < node.attributes.length; ++a) {
            this.recycle(node.attributes[a]);
        }
        for (let c = 0; c < node.childNodes.length; ++c) {
            this.recycle(node.childNodes[c]);
        }
        node.attributes.length = 0;
        node.childNodes.length = 0;
        node.init.call(0, '', '', null);
    }

    create(type, name, value, owner) {
        if (_unusedXNodes.length > 0) {
            const node = _unusedXNodes.pop();
            node.init(type, name, value, owner);
            return node;
        } else {
            return new XNode(type, name, value, owner);
        }
    }

    appendChild(node) {
        // firstChild
        if (this.childNodes.length == 0) {
            this.firstChild = node;
        }

        // previousSibling
        node.previousSibling = this.lastChild;

        // nextSibling
        node.nextSibling = null;
        if (this.lastChild) {
            this.lastChild.nextSibling = node;
        }

        // parentNode
        node.parentNode = this;

        // lastChild
        this.lastChild = node;

        // childNodes
        this.childNodes.push(node);
    }

    replaceChild(newNode, oldNode) {
        if (oldNode == newNode) {
            return;
        }

        for (let i = 0; i < this.childNodes.length; ++i) {
            if (this.childNodes[i] == oldNode) {
                this.childNodes[i] = newNode;

                let p = oldNode.parentNode;
                oldNode.parentNode = null;
                newNode.parentNode = p;

                p = oldNode.previousSibling;
                oldNode.previousSibling = null;
                newNode.previousSibling = p;
                if (newNode.previousSibling) {
                    newNode.previousSibling.nextSibling = newNode;
                }

                p = oldNode.nextSibling;
                oldNode.nextSibling = null;
                newNode.nextSibling = p;
                if (newNode.nextSibling) {
                    newNode.nextSibling.previousSibling = newNode;
                }

                if (this.firstChild == oldNode) {
                    this.firstChild = newNode;
                }

                if (this.lastChild == oldNode) {
                    this.lastChild = newNode;
                }

                break;
            }
        }
    }

    insertBefore(newNode, oldNode) {
        if (oldNode == newNode) {
            return;
        }

        if (oldNode.parentNode != this) {
            return;
        }

        if (newNode.parentNode) {
            newNode.parentNode.removeChild(newNode);
        }

        const newChildren = [];

        for (const c of this.childNodes) {
            if (c == oldNode) {
                newChildren.push(newNode);

                newNode.parentNode = this;

                newNode.previousSibling = oldNode.previousSibling;
                oldNode.previousSibling = newNode;
                if (newNode.previousSibling) {
                    newNode.previousSibling.nextSibling = newNode;
                }

                newNode.nextSibling = oldNode;

                if (this.firstChild == oldNode) {
                    this.firstChild = newNode;
                }
            }
            newChildren.push(c);
        }

        this.childNodes = newChildren;
    }

    removeChild(node) {
        const newChildren = [];

        for (const c of this.childNodes) {
            if (c != node) {
                newChildren.push(c);
            } else {
                if (c.previousSibling) {
                    c.previousSibling.nextSibling = c.nextSibling;
                }
                if (c.nextSibling) {
                    c.nextSibling.previousSibling = c.previousSibling;
                }
                if (this.firstChild == c) {
                    this.firstChild = c.nextSibling;
                }
                if (this.lastChild == c) {
                    this.lastChild = c.previousSibling;
                }
            }
        }

        this.childNodes = newChildren;
    }

    hasAttributes() {
        return this.attributes.length > 0;
    }

    setAttribute(name, value) {
        for (let i = 0; i < this.attributes.length; ++i) {
            if (this.attributes[i].nodeName == name) {
                this.attributes[i].nodeValue = `${value}`;
                return;
            }
        }
        this.attributes.push(this.create(DOM_ATTRIBUTE_NODE, name, value, this));
    }

    getAttribute(name) {
        for (let i = 0; i < this.attributes.length; ++i) {
            if (this.attributes[i].nodeName == name) {
                return this.attributes[i].nodeValue;
            }
        }
        return null;
    }

    removeAttribute(name) {
        const a = [];
        for (let i = 0; i < this.attributes.length; ++i) {
            if (this.attributes[i].nodeName != name) {
                a.push(this.attributes[i]);
            }
        }
        this.attributes = a;
    }

    getElementsByTagName(name) {
        const ret = [];
        const self = this;
        if ("*" == name) {
            domTraverseElements(this, node => {
                if (self == node) return;
                ret.push(node);
            }, null);
        } else {
            domTraverseElements(this, node => {
                if (self == node) return;
                if (node.nodeName == name) {
                    ret.push(node);
                }
            }, null);
        }
        return ret;
    }

    getElementById(id) {
        let ret = null;
        domTraverseElements(this, node => {
            if (node.getAttribute('id') == id) {
                ret = node;
                return false;
            }
        }, null);
        return ret;
    }
}

class XDocument extends XNode {
    constructor() {
        // NOTE(mesch): According to the DOM Spec, ownerDocument of a
        // document node is null.
        super(DOM_DOCUMENT_NODE, '#document', null, null);
        this.documentElement = null;
    }

    clear() {
        this.recycle(this.documentElement);
        this.documentElement = null;
    }

    appendChild(node) {
        super.appendChild(node);
        this.documentElement = this.childNodes[0];
    }

    createElement(name) {
        return super.create(DOM_ELEMENT_NODE, name, null, this);
    }

    createDocumentFragment() {
        return super.create(DOM_DOCUMENT_FRAGMENT_NODE, '#document-fragment',
            null, this);
    }

    createTextNode(value) {
        return super.create(DOM_TEXT_NODE, '#text', value, this);
    }

    createAttribute(name) {
        return super.create(DOM_ATTRIBUTE_NODE, name, null, this);
    }

    createComment(data) {
        return super.create(DOM_COMMENT_NODE, '#comment', data, this);
    }

    createCDATASection(data) {
        return super.create(DOM_CDATA_SECTION_NODE, '#cdata-section', data, this);
    }
}

//XDocument.prototype = new XNode(DOM_DOCUMENT_NODE, '#document');

// Copyright 2018 Johannes Wilm

let toString = function(expr) {
    let ret;
    switch(expr.constructor) {
        case FunctionCallExpr:
            ret = `${expr.name.value}(`;
            for (let i = 0; i < expr.args.length; ++i) {
                if (i > 0) {
                    ret += ', ';
                }
                ret += toString(expr.args[i]);
            }
            ret += ')';
            break;
        case UnionExpr:
            ret = `${toString(expr.expr1)} | ${toString(expr.expr2)}`;
            break;
        case PathExpr:
            ret = `{path: {${toString(expr.filter)}} {${toString(expr.rel)}}}`;
            break;
        case FilterExpr:
            ret = toString(expr.expr);
            for (let i = 0; i < expr.predicate.length; ++i) {
                ret += toString(expr.predicate[i]);
            }
            break;
        case UnaryMinusExpr:
            ret = `-${toString(expr.expr)}`;
            break;
        case BinaryExpr:
            ret = `${toString(expr.expr1)} ${expr.op.value} ${toString(expr.expr2)}`;
            break;
        case LiteralExpr:
            ret = `"${expr.value}"`;
            break;
        case NumberExpr:
            ret = `${expr.value}`;
            break;
        case VariableExpr:
            ret = `$${expr.name}`;
            break;
        case XNode:
            ret = expr.nodeName;
            break;
        case ExprContext:
            ret = `[${expr.position}/${expr.nodelist.length}] ${expr.node.nodeName}`;
            break;
        case TokenExpr:
            ret = expr.value;
            break;
        case LocationExpr:
            ret = '';
            if (expr.absolute) {
                ret += '/';
            }
            for (let i = 0; i < expr.steps.length; ++i) {
                if (i > 0) {
                    ret += '/';
                }
                ret += toString(expr.steps[i]);
            }
            break;
        case StepExpr:
            ret = `${expr.axis}::${toString(expr.nodetest)}`;
            for (let i = 0; i < expr.predicate.length; ++i) {
                ret += toString(expr.predicate[i]);
            }
            break;
        case NodeTestAny:
            ret = 'node()';
            break;
        case NodeTestElementOrAttribute:
            ret = '*';
            break;
        case NodeTestText:
            ret = 'text()';
            break;
        case NodeTestComment:
            ret = 'comment()';
            break;
        case NodeTestPI:
            ret = 'processing-instruction()';
            break;
        case NodeTestNC:
            ret = `${expr.nsprefix}:*`;
            break;
        case NodeTestName:
            ret = expr.name;
            break;
        case PredicateExpr:
            ret = `[${toString(expr.expr)}]`;
        default:
            break;
    }
    return ret;
};

// Copyright 2018 Johannes Wilm

function xpathParse(expr) {
    xpathLog(`parse ${expr}`);
    xpathParseInit(xpathLog);

    const cached = xpathCacheLookup(expr);
    if (cached) {
        xpathLog(' ... cached');
        return cached;
    }

    // Optimize for a few common cases: simple attribute node tests
    // (@id), simple element node tests (page), variable references
    // ($address), numbers (4), multi-step path expressions where each
    // step is a plain element node test
    // (page/overlay/locations/location).

    if (expr.match(/^(\$|@)?\w+$/i)) {
        var ret = makeSimpleExpr(expr);
        xpathParseCache[expr] = ret;
        xpathLog(' ... simple');
        return ret;
    }

    if (expr.match(/^\w+(\/\w+)*$/i)) {
        var ret = makeSimpleExpr2(expr);
        xpathParseCache[expr] = ret;
        xpathLog(' ... simple 2');
        return ret;
    }

    const cachekey = expr; // expr is modified during parse

    const stack = [];
    let ahead = null;
    let previous = null;
    let done = false;

    let parse_count = 0;
    let lexer_count = 0;
    let reduce_count = 0;

    while (!done) {
        parse_count++;
        expr = expr.replace(/^\s*/, '');
        previous = ahead;
        ahead = null;

        let rule = null;
        let match = '';
        for (let i = 0; i < xpathTokenRules.length; ++i) {
            var result = xpathTokenRules[i].re.exec(expr);
            lexer_count++;
            if (result && result.length > 0 && result[0].length > match.length) {
                rule = xpathTokenRules[i];
                match = result[0];
                break;
            }
        }

        // Special case: allow operator keywords to be element and
        // variable names.

        // NOTE(mesch): The parser resolves conflicts by looking ahead,
        // and this is the only case where we look back to
        // disambiguate. So this is indeed something different, and
        // looking back is usually done in the lexer (via states in the
        // general case, called "start conditions" in flex(1)). Also,the
        // conflict resolution in the parser is not as robust as it could
        // be, so I'd like to keep as much off the parser as possible (all
        // these precedence values should be computed from the grammar
        // rules and possibly associativity declarations, as in bison(1),
        // and not explicitly set.

        if (rule &&
            (rule == TOK_DIV ||
                rule == TOK_MOD ||
                rule == TOK_AND ||
                rule == TOK_OR) &&
            (!previous ||
                previous.tag == TOK_AT ||
                previous.tag == TOK_DSLASH ||
                previous.tag == TOK_SLASH ||
                previous.tag == TOK_AXIS ||
                previous.tag == TOK_DOLLAR)) {
            rule = TOK_QNAME;
        }

        if (rule) {
            expr = expr.substr(match.length);
            xpathLog(`token: ${match} -- ${rule.label}`);
            ahead = {
                tag: rule,
                match,
                prec: rule.prec ? rule.prec : 0, // || 0 is removed by the compiler
                expr: makeTokenExpr(match)
            };

        } else {
            xpathLog('DONE');
            done = true;
        }

        while (xpathReduce(stack, ahead, xpathLog)) {
            reduce_count++;
            xpathLog(`stack: ${stackToString(stack)}`);
        }
    }

    xpathLog(`stack: ${stackToString(stack)}`);

    // DGF any valid XPath should "reduce" to a single Expr token
    if (stack.length != 1) {
        throw `XPath parse error ${cachekey}:\n${stackToString(stack)}`;
    }

    var result = stack[0].expr;
    xpathParseCache[cachekey] = result;

    xpathLog(`XPath parse: ${parse_count} / ${lexer_count} / ${reduce_count}`);

    return result;
}

let xpathParseCache = {};

function xpathCacheLookup(expr) {
    return xpathParseCache[expr];
}

/*DGF xpathReduce is where the magic happens in this parser.
Skim down to the bottom of this file to find the table of
grammatical rules and precedence numbers, "The productions of the grammar".

The idea here
is that we want to take a stack of tokens and apply
grammatical rules to them, "reducing" them to higher-level
tokens.  Ultimately, any valid XPath should reduce to exactly one
"Expr" token.

Reduce too early or too late and you'll have two tokens that can't reduce
to single Expr.  For example, you may hastily reduce a qname that
should name a function, incorrectly treating it as a tag name.
Or you may reduce too late, accidentally reducing the last part of the
XPath into a top-level "Expr" that won't reduce with earlier parts of
the XPath.

A "cand" is a grammatical rule candidate, with a given precedence
number.  "ahead" is the upcoming token, which also has a precedence
number.  If the token has a higher precedence number than
the rule candidate, we'll "shift" the token onto the token stack,
instead of immediately applying the rule candidate.

Some tokens have left associativity, in which case we shift when they
have LOWER precedence than the candidate.
*/
function xpathReduce(stack, ahead, xpathLog) {
    let cand = null;

    if (stack.length > 0) {
        const top = stack[stack.length - 1];
        const ruleset = xpathRules[top.tag.key];

        if (ruleset) {
            for (var i = 0; i < ruleset.length; ++i) {
                const rule = ruleset[i];
                const match = xpathMatchStack(stack, rule[1]);
                if (match.length) {
                    cand = {
                        tag: rule[0],
                        rule,
                        match
                    };
                    cand.prec = xpathGrammarPrecedence(cand);
                    break;
                }
            }
        }
    }

    let ret;
    if (cand && (!ahead || cand.prec > ahead.prec ||
            (ahead.tag.left && cand.prec >= ahead.prec))) {
        for (var i = 0; i < cand.match.matchlength; ++i) {
            stack.pop();
        }

        xpathLog(`reduce ${cand.tag.label} ${cand.prec} ahead ${ahead ? ahead.tag.label + ' ' + ahead.prec +
                      (ahead.tag.left ? ' left' : '')
                      : ' none '}`);

        const matchexpr = mapExpr(cand.match, m => m.expr);
        xpathLog(`going to apply ${toString(cand.rule[3])}`);
        cand.expr = cand.rule[3].apply(null, matchexpr);

        stack.push(cand);
        ret = true;

    } else {
        if (ahead) {
            xpathLog(`shift ${ahead.tag.label} ${ahead.prec}${ahead.tag.left ? ' left' : ''} over ${cand ? cand.tag.label + ' ' +
                     cand.prec : ' none'}`);
            stack.push(ahead);
        }
        ret = false;
    }
    return ret;
}

function xpathMatchStack(stack, pattern) {
    // NOTE(mesch): The stack matches for variable cardinality are
    // greedy but don't do backtracking. This would be an issue only
    // with rules of the form A* A, i.e. with an element with variable
    // cardinality followed by the same element. Since that doesn't
    // occur in the grammar at hand, all matches on the stack are
    // unambiguous.

    const S = stack.length;
    const P = pattern.length;
    let p;
    let s;
    const match = [];
    match.matchlength = 0;
    let ds = 0;
    for (p = P - 1, s = S - 1; p >= 0 && s >= 0; --p, s -= ds) {
        ds = 0;
        const qmatch = [];
        if (pattern[p] == Q_MM) {
            p -= 1;
            match.push(qmatch);
            while (s - ds >= 0 && stack[s - ds].tag == pattern[p]) {
                qmatch.push(stack[s - ds]);
                ds += 1;
                match.matchlength += 1;
            }

        } else if (pattern[p] == Q_01) {
            p -= 1;
            match.push(qmatch);
            while (s - ds >= 0 && ds < 2 && stack[s - ds].tag == pattern[p]) {
                qmatch.push(stack[s - ds]);
                ds += 1;
                match.matchlength += 1;
            }

        } else if (pattern[p] == Q_1M) {
            p -= 1;
            match.push(qmatch);
            if (stack[s].tag == pattern[p]) {
                while (s - ds >= 0 && stack[s - ds].tag == pattern[p]) {
                    qmatch.push(stack[s - ds]);
                    ds += 1;
                    match.matchlength += 1;
                }
            } else {
                return [];
            }

        } else if (stack[s].tag == pattern[p]) {
            match.push(stack[s]);
            ds += 1;
            match.matchlength += 1;

        } else {
            return [];
        }

        reverseInplace(qmatch);
        qmatch.expr = mapExpr(qmatch, m => m.expr);
    }

    reverseInplace(match);

    if (p == -1) {
        return match;

    } else {
        return [];
    }
}

function xpathTokenPrecedence(tag) {
    return tag.prec || 2;
}

function xpathGrammarPrecedence(frame) {
    let ret = 0;

    if (frame.rule) { /* normal reduce */
        if (frame.rule.length >= 3 && frame.rule[2] >= 0) {
            ret = frame.rule[2];

        } else {
            for (let i = 0; i < frame.rule[1].length; ++i) {
                var p = xpathTokenPrecedence(frame.rule[1][i]);
                ret = Math.max(ret, p);
            }
        }
    } else if (frame.tag) { /* TOKEN match */
        ret = xpathTokenPrecedence(frame.tag);

    } else if (frame.length) { /* Q_ match */
        for (let j = 0; j < frame.length; ++j) {
            var p = xpathGrammarPrecedence(frame[j]);
            ret = Math.max(ret, p);
        }
    }

    return ret;
}

function stackToString(stack) {
    let ret = '';
    for (let i = 0; i < stack.length; ++i) {
        if (ret) {
            ret += '\n';
        }
        ret += stack[i].tag.label;
    }
    return ret;
}


// XPath expression evaluation context. An XPath context consists of a
// DOM node, a list of DOM nodes that contains this node, a number
// that represents the position of the single node in the list, and a
// current set of variable bindings. (See XPath spec.)
//
// The interface of the expression context:
//
//   Constructor -- gets the node, its position, the node set it
//   belongs to, and a parent context as arguments. The parent context
//   is used to implement scoping rules for variables: if a variable
//   is not found in the current context, it is looked for in the
//   parent context, recursively. Except for node, all arguments have
//   default values: default position is 0, default node set is the
//   set that contains only the node, and the default parent is null.
//
//     Notice that position starts at 0 at the outside interface;
//     inside XPath expressions this shows up as position()=1.
//
//   clone() -- creates a new context with the current context as
//   parent. If passed as argument to clone(), the new context has a
//   different node, position, or node set. What is not passed is
//   inherited from the cloned context.
//
//   setVariable(name, expr) -- binds given XPath expression to the
//   name.
//
//   getVariable(name) -- what the name says.
//
//   setNode(position) -- sets the context to the node at the given
//   position. Needed to implement scoping rules for variables in
//   XPath. (A variable is visible to all subsequent siblings, not
//   only to its children.)
//
//   set/isCaseInsensitive -- specifies whether node name tests should
//   be case sensitive.  If you're executing xpaths against a regular
//   HTML DOM, you probably don't want case-sensitivity, because
//   browsers tend to disagree about whether elements & attributes
//   should be upper/lower case.  If you're running xpaths in an
//   XSLT instance, you probably DO want case sensitivity, as per the
//   XSL spec.
//
//   set/isReturnOnFirstMatch -- whether XPath evaluation should quit as soon
//   as a result is found. This is an optimization that might make sense if you
//   only care about the first result.
//
//   set/isIgnoreNonElementNodesForNTA -- whether to ignore non-element nodes
//   when evaluating the "node()" any node test. While technically this is
//   contrary to the XPath spec, practically it can enhance performance
//   significantly, and makes sense if you a) use "node()" when you mean "*",
//   and b) use "//" when you mean "/descendant::*/".

class ExprContext {
    constructor(
        node,
        opt_position,
        opt_nodelist,
        opt_parent,
        opt_caseInsensitive,
        opt_ignoreAttributesWithoutValue,
        opt_returnOnFirstMatch,
        opt_ignoreNonElementNodesForNTA) {
        this.node = node;
        this.position = opt_position || 0;
        this.nodelist = opt_nodelist || [node];
        this.variables = {};
        this.parent = opt_parent || null;
        this.caseInsensitive = opt_caseInsensitive || false;
        this.ignoreAttributesWithoutValue = opt_ignoreAttributesWithoutValue || false;
        this.returnOnFirstMatch = opt_returnOnFirstMatch || false;
        this.ignoreNonElementNodesForNTA = opt_ignoreNonElementNodesForNTA || false;
        if (opt_parent) {
            this.root = opt_parent.root;
        } else if (this.node.nodeType == DOM_DOCUMENT_NODE) {
            // NOTE(mesch): DOM Spec stipulates that the ownerDocument of a
            // document is null. Our root, however is the document that we are
            // processing, so the initial context is created from its document
            // node, which case we must handle here explcitly.
            this.root = node;
        } else {
            this.root = node.ownerDocument;
        }
    }

    clone(opt_node, opt_position, opt_nodelist) {
        return new ExprContext(
            opt_node || this.node,
            typeof opt_position != 'undefined' ? opt_position : this.position,
            opt_nodelist || this.nodelist, this, this.caseInsensitive,
            this.ignoreAttributesWithoutValue, this.returnOnFirstMatch,
            this.ignoreNonElementNodesForNTA);
    }

    setVariable(name, value) {
        if (value instanceof StringValue || value instanceof BooleanValue ||
            value instanceof NumberValue || value instanceof NodeSetValue) {
            this.variables[name] = value;
            return;
        }
        if ('true' === value) {
            this.variables[name] = new BooleanValue(true);
        } else if ('false' === value) {
            this.variables[name] = new BooleanValue(false);
        } else if (TOK_NUMBER.re.test(value)) {
            this.variables[name] = new NumberValue(value);
        } else {
            // DGF What if it's null?
            this.variables[name] = new StringValue(value);
        }
    }

    getVariable(name) {
        if (typeof this.variables[name] != 'undefined') {
            return this.variables[name];

        } else if (this.parent) {
            return this.parent.getVariable(name);

        } else {
            return null;
        }
    }

    setNode(position) {
        this.node = this.nodelist[position];
        this.position = position;
    }

    contextSize() {
        return this.nodelist.length;
    }

    isCaseInsensitive() {
        return this.caseInsensitive;
    }

    setCaseInsensitive(caseInsensitive) {
        return this.caseInsensitive = caseInsensitive;
    }

    isIgnoreAttributesWithoutValue() {
        return this.ignoreAttributesWithoutValue;
    }

    setIgnoreAttributesWithoutValue(ignore) {
        return this.ignoreAttributesWithoutValue = ignore;
    }

    isReturnOnFirstMatch() {
        return this.returnOnFirstMatch;
    }

    setReturnOnFirstMatch(returnOnFirstMatch) {
        return this.returnOnFirstMatch = returnOnFirstMatch;
    }

    isIgnoreNonElementNodesForNTA() {
        return this.ignoreNonElementNodesForNTA;
    }

    setIgnoreNonElementNodesForNTA(ignoreNonElementNodesForNTA) {
        return this.ignoreNonElementNodesForNTA = ignoreNonElementNodesForNTA;
    }
}

// XPath expression values. They are what XPath expressions evaluate
// to. Strangely, the different value types are not specified in the
// XPath syntax, but only in the semantics, so they don't show up as
// nonterminals in the grammar. Yet, some expressions are required to
// evaluate to particular types, and not every type can be coerced
// into every other type. Although the types of XPath values are
// similar to the types present in JavaScript, the type coercion rules
// are a bit peculiar, so we explicitly model XPath types instead of
// mapping them onto JavaScript types. (See XPath spec.)
//
// The four types are:
//
//   StringValue
//
//   NumberValue
//
//   BooleanValue
//
//   NodeSetValue
//
// The common interface of the value classes consists of methods that
// implement the XPath type coercion rules:
//
//   stringValue() -- returns the value as a JavaScript String,
//
//   numberValue() -- returns the value as a JavaScript Number,
//
//   booleanValue() -- returns the value as a JavaScript Boolean,
//
//   nodeSetValue() -- returns the value as a JavaScript Array of DOM
//   Node objects.
//

class StringValue {
    constructor(value) {
        this.value = value;
        this.type = 'string';
    }

    stringValue() {
        return this.value;
    }

    booleanValue() {
        return this.value.length > 0;
    }

    numberValue() {
        return this.value - 0;
    }

    nodeSetValue() {
        throw this;
    }
}

class BooleanValue {
    constructor(value) {
        this.value = value;
        this.type = 'boolean';
    }

    stringValue() {
        return `${this.value}`;
    }

    booleanValue() {
        return this.value;
    }

    numberValue() {
        return this.value ? 1 : 0;
    }

    nodeSetValue() {
        throw this;
    }
}

class NumberValue {
    constructor(value) {
        this.value = value;
        this.type = 'number';
    }

    stringValue() {
        return `${this.value}`;
    }

    booleanValue() {
        return !!this.value;
    }

    numberValue() {
        return this.value - 0;
    }

    nodeSetValue() {
        throw this;
    }
}

class NodeSetValue {
    constructor(value) {
        this.value = value;
        this.type = 'node-set';
    }

    stringValue() {
        if (this.value.length == 0) {
            return '';
        } else {
            return xmlValue(this.value[0]);
        }
    }

    booleanValue() {
        return this.value.length > 0;
    }

    numberValue() {
        return this.stringValue() - 0;
    }

    nodeSetValue() {
        return this.value;
    }
}

// XPath expressions. They are used as nodes in the parse tree and
// possess an evaluate() method to compute an XPath value given an XPath
// context. Expressions are returned from the parser. Teh set of
// expression classes closely mirrors the set of non terminal symbols
// in the grammar. Every non trivial nonterminal symbol has a
// corresponding expression class.
//
// The common expression interface consists of the following methods:
//
// evaluate(context) -- evaluates the expression, returns a value.
//
// toString(expr) -- returns the XPath text representation of the
// expression (defined in xsltdebug.js).
//
// parseTree(expr, indent) -- returns a parse tree representation of the
// expression (defined in xsltdebug.js).

class TokenExpr {
    constructor(m) {
        this.value = m;
    }

    evaluate() {
        return new StringValue(this.value);
    }
}

class LocationExpr {
    constructor() {
        this.absolute = false;
        this.steps = [];
    }

    appendStep(s) {
        const combinedStep = this._combineSteps(this.steps[this.steps.length - 1], s);
        if (combinedStep) {
            this.steps[this.steps.length - 1] = combinedStep;
        } else {
            this.steps.push(s);
        }
    }

    prependStep(s) {
        const combinedStep = this._combineSteps(s, this.steps[0]);
        if (combinedStep) {
            this.steps[0] = combinedStep;
        } else {
            this.steps.unshift(s);
        }
    }

    // DGF try to combine two steps into one step (perf enhancement)
    _combineSteps(prevStep, nextStep) {
        if (!prevStep) return null;
        if (!nextStep) return null;
        const hasPredicates = (prevStep.predicates && prevStep.predicates.length > 0);
        if (prevStep.nodetest instanceof NodeTestAny && !hasPredicates) {
            // maybe suitable to be combined
            if (prevStep.axis == xpathAxis.DESCENDANT_OR_SELF) {
                if (nextStep.axis == xpathAxis.CHILD) {
                    // HBC - commenting out, because this is not a valid reduction
                    //nextStep.axis = xpathAxis.DESCENDANT;
                    //return nextStep;
                } else if (nextStep.axis == xpathAxis.SELF) {
                    nextStep.axis = xpathAxis.DESCENDANT_OR_SELF;
                    return nextStep;
                }
            } else if (prevStep.axis == xpathAxis.DESCENDANT) {
                if (nextStep.axis == xpathAxis.SELF) {
                    nextStep.axis = xpathAxis.DESCENDANT;
                    return nextStep;
                }
            }
        }
        return null;
    }

    evaluate(ctx) {
        let start;
        if (this.absolute) {
            start = ctx.root;

        } else {
            start = ctx.node;
        }

        const nodes = [];
        xPathStep(nodes, this.steps, 0, start, ctx);
        return new NodeSetValue(nodes);
    }
}

function xPathStep(nodes, steps, step, input, ctx) {
    const s = steps[step];
    const ctx2 = ctx.clone(input);

    if (ctx.returnOnFirstMatch && !s.hasPositionalPredicate) {
        var nodelist = s.evaluate(ctx2).nodeSetValue();
        // the predicates were not processed in the last evaluate(), so that we can
        // process them here with the returnOnFirstMatch optimization. We do a
        // depth-first grab at any nodes that pass the predicate tests. There is no
        // way to optimize when predicates contain positional selectors, including
        // indexes or uses of the last() or position() functions, because they
        // typically require the entire nodelist for context. Process without
        // optimization if we encounter such selectors.
        const nLength = nodelist.length;
        const pLength = s.predicate.length;
        nodelistLoop:
            for (var i = 0; i < nLength; ++i) {
                const n = nodelist[i];
                for (let j = 0; j < pLength; ++j) {
                    if (!s.predicate[j].evaluate(ctx.clone(n, i, nodelist)).booleanValue()) {
                        continue nodelistLoop;
                    }
                }
                // n survived the predicate tests!
                if (step == steps.length - 1) {
                    nodes.push(n);
                } else {
                    xPathStep(nodes, steps, step + 1, n, ctx);
                }
                if (nodes.length > 0) {
                    break;
                }
            }
    } else {
        // set returnOnFirstMatch to false for the cloned ExprContext, because
        // behavior in StepExpr.prototype.evaluate is driven off its value. Note
        // that the original context may still have true for this value.
        ctx2.returnOnFirstMatch = false;
        var nodelist = s.evaluate(ctx2).nodeSetValue();
        for (var i = 0; i < nodelist.length; ++i) {
            if (step == steps.length - 1) {
                nodes.push(nodelist[i]);
            } else {
                xPathStep(nodes, steps, step + 1, nodelist[i], ctx);
            }
        }
    }
}

class StepExpr {
    constructor(axis, nodetest, opt_predicate) {
        this.axis = axis;
        this.nodetest = nodetest;
        this.predicate = opt_predicate || [];
        this.hasPositionalPredicate = false;
        for (let i = 0; i < this.predicate.length; ++i) {
            if (predicateExprHasPositionalSelector(this.predicate[i].expr)) {
                this.hasPositionalPredicate = true;
                break;
            }
        }
    }

    appendPredicate(p) {
        this.predicate.push(p);
        if (!this.hasPositionalPredicate) {
            this.hasPositionalPredicate = predicateExprHasPositionalSelector(p.expr);
        }
    }

    evaluate(ctx) {
        const input = ctx.node;
        let nodelist = [];
        let skipNodeTest = false;

        if (this.nodetest instanceof NodeTestAny) {
            skipNodeTest = true;
        }

        if (this.axis == xpathAxis.ANCESTOR_OR_SELF) {
            nodelist.push(input);
            for (var n = input.parentNode; n; n = n.parentNode) {
                nodelist.push(n);
            }

        } else if (this.axis == xpathAxis.ANCESTOR) {
            for (var n = input.parentNode; n; n = n.parentNode) {
                nodelist.push(n);
            }

        } else if (this.axis == xpathAxis.ATTRIBUTE) {
            if (this.nodetest.name != undefined) {
                // single-attribute step
                if (input.attributes) {
                    if (input.attributes instanceof Array) {
                        // probably evaluating on document created by xmlParse()
                        copyArray(nodelist, input.attributes);
                    } else {
                        if (this.nodetest.name == 'style') {
                            const value = input.getAttribute('style');
                            if (value && typeof(value) != 'string') {
                                // this is the case where indexing into the attributes array
                                // doesn't give us the attribute node in IE - we create our own
                                // node instead
                                nodelist.push(XNode.create(DOM_ATTRIBUTE_NODE, 'style',
                                    value.cssText, document));
                            } else {
                                nodelist.push(input.attributes[this.nodetest.name]);
                            }
                        } else {
                            nodelist.push(input.attributes[this.nodetest.name]);
                        }
                    }
                }
            } else {
                // all-attributes step
                if (ctx.ignoreAttributesWithoutValue) {
                    copyArrayIgnoringAttributesWithoutValue(nodelist, input.attributes);
                } else {
                    copyArray(nodelist, input.attributes);
                }
            }

        } else if (this.axis == xpathAxis.CHILD) {
            copyArray(nodelist, input.childNodes);

        } else if (this.axis == xpathAxis.DESCENDANT_OR_SELF) {
            if (this.nodetest.evaluate(ctx).booleanValue()) {
                nodelist.push(input);
            }
            var tagName = xpathExtractTagNameFromNodeTest(this.nodetest, ctx.ignoreNonElementNodesForNTA);
            xpathCollectDescendants(nodelist, input, tagName);
            if (tagName) skipNodeTest = true;

        } else if (this.axis == xpathAxis.DESCENDANT) {
            var tagName = xpathExtractTagNameFromNodeTest(this.nodetest, ctx.ignoreNonElementNodesForNTA);
            xpathCollectDescendants(nodelist, input, tagName);
            if (tagName) skipNodeTest = true;

        } else if (this.axis == xpathAxis.FOLLOWING) {
            for (var n = input; n; n = n.parentNode) {
                for (var nn = n.nextSibling; nn; nn = nn.nextSibling) {
                    nodelist.push(nn);
                    xpathCollectDescendants(nodelist, nn);
                }
            }

        } else if (this.axis == xpathAxis.FOLLOWING_SIBLING) {
            for (var n = input.nextSibling; n; n = n.nextSibling) {
                nodelist.push(n);
            }

        } else if (this.axis == xpathAxis.NAMESPACE) {
            alert('not implemented: axis namespace');

        } else if (this.axis == xpathAxis.PARENT) {
            if (input.parentNode) {
                nodelist.push(input.parentNode);
            }

        } else if (this.axis == xpathAxis.PRECEDING) {
            for (var n = input; n; n = n.parentNode) {
                for (var nn = n.previousSibling; nn; nn = nn.previousSibling) {
                    nodelist.push(nn);
                    xpathCollectDescendantsReverse(nodelist, nn);
                }
            }

        } else if (this.axis == xpathAxis.PRECEDING_SIBLING) {
            for (var n = input.previousSibling; n; n = n.previousSibling) {
                nodelist.push(n);
            }

        } else if (this.axis == xpathAxis.SELF) {
            nodelist.push(input);

        } else {
            throw `ERROR -- NO SUCH AXIS: ${this.axis}`;
        }

        if (!skipNodeTest) {
            // process node test
            var nodelist0 = nodelist;
            nodelist = [];
            for (var i = 0; i < nodelist0.length; ++i) {
                var n = nodelist0[i];
                if (this.nodetest.evaluate(ctx.clone(n, i, nodelist0)).booleanValue()) {
                    nodelist.push(n);
                }
            }
        }

        // process predicates
        if (!ctx.returnOnFirstMatch) {
            for (var i = 0; i < this.predicate.length; ++i) {
                var nodelist0 = nodelist;
                nodelist = [];
                for (let ii = 0; ii < nodelist0.length; ++ii) {
                    var n = nodelist0[ii];
                    if (this.predicate[i].evaluate(ctx.clone(n, ii, nodelist0)).booleanValue()) {
                        nodelist.push(n);
                    }
                }
            }
        }

        return new NodeSetValue(nodelist);
    }
}

class NodeTestAny {
    constructor() {
        this.value = new BooleanValue(true);
    }

    evaluate(ctx) {
        return this.value;
    }
}

class NodeTestElementOrAttribute {
    evaluate(ctx) {
        return new BooleanValue(
            ctx.node.nodeType == DOM_ELEMENT_NODE ||
            ctx.node.nodeType == DOM_ATTRIBUTE_NODE);
    }
}

class NodeTestText {
    evaluate(ctx) {
        return new BooleanValue(ctx.node.nodeType == DOM_TEXT_NODE);
    }
}

class NodeTestComment {
    evaluate(ctx) {
        return new BooleanValue(ctx.node.nodeType == DOM_COMMENT_NODE);
    }
}

class NodeTestPI {
    constructor(target) {
        this.target = target;
    }

    evaluate(ctx) {
        return new
        BooleanValue(ctx.node.nodeType == DOM_PROCESSING_INSTRUCTION_NODE &&
            (!this.target || ctx.node.nodeName == this.target));
    }
}

class NodeTestNC {
    constructor(nsprefix) {
        this.regex = new RegExp(`^${nsprefix}:`);
        this.nsprefix = nsprefix;
    }

    evaluate(ctx) {
        const n = ctx.node;
        return new BooleanValue(this.regex.match(n.nodeName));
    }
}

class NodeTestName {
    constructor(name) {
        this.name = name;
        this.re = new RegExp(`^${name}$`, "i");
    }

    evaluate(ctx) {
        const n = ctx.node;
        if (ctx.caseInsensitive) {
            if (n.nodeName.length != this.name.length) return new BooleanValue(false);
            return new BooleanValue(this.re.test(n.nodeName));
        } else {
            return new BooleanValue(n.nodeName == this.name);
        }
    }
}

class PredicateExpr {
    constructor(expr) {
        this.expr = expr;
    }

    evaluate(ctx) {
        const v = this.expr.evaluate(ctx);
        if (v.type == 'number') {
            // NOTE(mesch): Internally, position is represented starting with
            // 0, however in XPath position starts with 1. See functions
            // position() and last().
            return new BooleanValue(ctx.position == v.numberValue() - 1);
        } else {
            return new BooleanValue(v.booleanValue());
        }
    }
}

let xpathfunctions = {
    'last' (ctx) {
        assert(this.args.length == 0);
        // NOTE(mesch): XPath position starts at 1.
        return new NumberValue(ctx.contextSize());
    },

    'position' (ctx) {
        assert(this.args.length == 0);
        // NOTE(mesch): XPath position starts at 1.
        return new NumberValue(ctx.position + 1);
    },

    'count' (ctx) {
        assert(this.args.length == 1);
        const v = this.args[0].evaluate(ctx);
        return new NumberValue(v.nodeSetValue().length);
    },

    'id' (ctx) {
        assert(this.args.length == 1);
        const e = this.args[0].evaluate(ctx);
        const ret = [];
        let ids;
        if (e.type == 'node-set') {
            ids = [];
            const en = e.nodeSetValue();
            for (var i = 0; i < en.length; ++i) {
                const v = xmlValue(en[i]).split(/\s+/);
                for (let ii = 0; ii < v.length; ++ii) {
                    ids.push(v[ii]);
                }
            }
        } else {
            ids = e.stringValue().split(/\s+/);
        }
        const d = ctx.root;
        for (var i = 0; i < ids.length; ++i) {
            const n = d.getElementById(ids[i]);
            if (n) {
                ret.push(n);
            }
        }
        return new NodeSetValue(ret);
    },

    'local-name' (ctx) {
        alert('not implmented yet: XPath function local-name()');
    },

    'namespace-uri' (ctx) {
        alert('not implmented yet: XPath function namespace-uri()');
    },

    'name' (ctx) {
        assert(this.args.length == 1 || this.args.length == 0);
        let n;
        if (this.args.length == 0) {
            n = [ctx.node];
        } else {
            n = this.args[0].evaluate(ctx).nodeSetValue();
        }

        if (n.length == 0) {
            return new StringValue('');
        } else {
            return new StringValue(n[0].nodeName);
        }
    },

    'string' (ctx) {
        assert(this.args.length == 1 || this.args.length == 0);
        if (this.args.length == 0) {
            return new StringValue(new NodeSetValue([ctx.node]).stringValue());
        } else {
            return new StringValue(this.args[0].evaluate(ctx).stringValue());
        }
    },

    'concat' (ctx) {
        let ret = '';
        for (let i = 0; i < this.args.length; ++i) {
            ret += this.args[i].evaluate(ctx).stringValue();
        }
        return new StringValue(ret);
    },

    'starts-with' (ctx) {
        assert(this.args.length == 2);
        const s0 = this.args[0].evaluate(ctx).stringValue();
        const s1 = this.args[1].evaluate(ctx).stringValue();
        return new BooleanValue(s0.indexOf(s1) == 0);
    },

    'ends-with' (ctx) {
        assert(this.args.length == 2);
        const s0 = this.args[0].evaluate(ctx).stringValue();
        const s1 = this.args[1].evaluate(ctx).stringValue();
        const re = new RegExp(`${regExpEscape(s1)}$`);
        return new BooleanValue(re.test(s0));
    },

    'contains' (ctx) {
        assert(this.args.length == 2);
        const s0 = this.args[0].evaluate(ctx).stringValue();
        const s1 = this.args[1].evaluate(ctx).stringValue();
        return new BooleanValue(s0.includes(s1));
    },

    'substring-before' (ctx) {
        assert(this.args.length == 2);
        const s0 = this.args[0].evaluate(ctx).stringValue();
        const s1 = this.args[1].evaluate(ctx).stringValue();
        const i = s0.indexOf(s1);
        let ret;
        if (i == -1) {
            ret = '';
        } else {
            ret = s0.substr(0, i);
        }
        return new StringValue(ret);
    },

    'substring-after' (ctx) {
        assert(this.args.length == 2);
        const s0 = this.args[0].evaluate(ctx).stringValue();
        const s1 = this.args[1].evaluate(ctx).stringValue();
        const i = s0.indexOf(s1);
        let ret;
        if (i == -1) {
            ret = '';
        } else {
            ret = s0.substr(i + s1.length);
        }
        return new StringValue(ret);
    },

    'substring' (ctx) {
        // NOTE: XPath defines the position of the first character in a
        // string to be 1, in JavaScript this is 0 ([XPATH] Section 4.2).
        assert(this.args.length == 2 || this.args.length == 3);
        const s0 = this.args[0].evaluate(ctx).stringValue();
        const s1 = this.args[1].evaluate(ctx).numberValue();
        let ret;
        if (this.args.length == 2) {
            var i1 = Math.max(0, Math.round(s1) - 1);
            ret = s0.substr(i1);

        } else {
            const s2 = this.args[2].evaluate(ctx).numberValue();
            const i0 = Math.round(s1) - 1;
            var i1 = Math.max(0, i0);
            const i2 = Math.round(s2) - Math.max(0, -i0);
            ret = s0.substr(i1, i2);
        }
        return new StringValue(ret);
    },

    'string-length' (ctx) {
        let s;
        if (this.args.length > 0) {
            s = this.args[0].evaluate(ctx).stringValue();
        } else {
            s = new NodeSetValue([ctx.node]).stringValue();
        }
        return new NumberValue(s.length);
    },

    'normalize-space' (ctx) {
        let s;
        if (this.args.length > 0) {
            s = this.args[0].evaluate(ctx).stringValue();
        } else {
            s = new NodeSetValue([ctx.node]).stringValue();
        }
        s = s.replace(/^\s*/, '').replace(/\s*$/, '').replace(/\s+/g, ' ');
        return new StringValue(s);
    },

    'translate' (ctx) {
        assert(this.args.length == 3);
        let s0 = this.args[0].evaluate(ctx).stringValue();
        const s1 = this.args[1].evaluate(ctx).stringValue();
        const s2 = this.args[2].evaluate(ctx).stringValue();

        for (let i = 0; i < s1.length; ++i) {
            s0 = s0.replace(new RegExp(s1.charAt(i), 'g'), s2.charAt(i));
        }
        return new StringValue(s0);
    },

    'matches' (ctx) {
        assert(this.args.length >= 2);
        const s0 = this.args[0].evaluate(ctx).stringValue();
        const s1 = this.args[1].evaluate(ctx).stringValue();
        if (this.args.length > 2) {
            var s2 = this.args[2].evaluate(ctx).stringValue();
            if (/[^mi]/.test(s2)) {
                throw `Invalid regular expression syntax: ${s2}`;
            }
        }

        try {
            var re = new RegExp(s1, s2);
        } catch (e) {
            throw `Invalid matches argument: ${s1}`;
        }
        return new BooleanValue(re.test(s0));
    },

    'boolean' (ctx) {
        assert(this.args.length == 1);
        return new BooleanValue(this.args[0].evaluate(ctx).booleanValue());
    },

    'not' (ctx) {
        assert(this.args.length == 1);
        const ret = !this.args[0].evaluate(ctx).booleanValue();
        return new BooleanValue(ret);
    },

    'true' (ctx) {
        assert(this.args.length == 0);
        return new BooleanValue(true);
    },

    'false' (ctx) {
        assert(this.args.length == 0);
        return new BooleanValue(false);
    },

    'lang' (ctx) {
        assert(this.args.length == 1);
        const lang = this.args[0].evaluate(ctx).stringValue();
        let xmllang;
        let n = ctx.node;
        while (n && n != n.parentNode /* just in case ... */ ) {
            xmllang = n.getAttribute('xml:lang');
            if (xmllang) {
                break;
            }
            n = n.parentNode;
        }
        if (!xmllang) {
            return new BooleanValue(false);
        } else {
            const re = new RegExp(`^${lang}$`, 'i');
            return new BooleanValue(xmllang.match(re) ||
                xmllang.replace(/_.*$/, '').match(re));
        }
    },

    'number' (ctx) {
        assert(this.args.length == 1 || this.args.length == 0);

        if (this.args.length == 1) {
            return new NumberValue(this.args[0].evaluate(ctx).numberValue());
        } else {
            return new NumberValue(new NodeSetValue([ctx.node]).numberValue());
        }
    },

    'sum' (ctx) {
        assert(this.args.length == 1);
        const n = this.args[0].evaluate(ctx).nodeSetValue();
        let sum = 0;
        for (let i = 0; i < n.length; ++i) {
            sum += xmlValue(n[i]) - 0;
        }
        return new NumberValue(sum);
    },

    'floor' (ctx) {
        assert(this.args.length == 1);
        const num = this.args[0].evaluate(ctx).numberValue();
        return new NumberValue(Math.floor(num));
    },

    'ceiling' (ctx) {
        assert(this.args.length == 1);
        const num = this.args[0].evaluate(ctx).numberValue();
        return new NumberValue(Math.ceil(num));
    },

    'round' (ctx) {
        assert(this.args.length == 1);
        const num = this.args[0].evaluate(ctx).numberValue();
        return new NumberValue(Math.round(num));
    },

    // TODO(mesch): The following functions are custom. There is a
    // standard that defines how to add functions, which should be
    // applied here.

    'ext-join' (ctx) {
        assert(this.args.length == 2);
        const nodes = this.args[0].evaluate(ctx).nodeSetValue();
        const delim = this.args[1].evaluate(ctx).stringValue();
        let ret = '';
        for (let i = 0; i < nodes.length; ++i) {
            if (ret) {
                ret += delim;
            }
            ret += xmlValue(nodes[i]);
        }
        return new StringValue(ret);
    },

    // ext-if() evaluates and returns its second argument, if the
    // boolean value of its first argument is true, otherwise it
    // evaluates and returns its third argument.

    'ext-if' (ctx) {
        assert(this.args.length == 3);
        if (this.args[0].evaluate(ctx).booleanValue()) {
            return this.args[1].evaluate(ctx);
        } else {
            return this.args[2].evaluate(ctx);
        }
    },

    // ext-cardinal() evaluates its single argument as a number, and
    // returns the current node that many times. It can be used in the
    // select attribute to iterate over an integer range.

    'ext-cardinal' (ctx) {
        assert(this.args.length >= 1);
        const c = this.args[0].evaluate(ctx).numberValue();
        const ret = [];
        for (let i = 0; i < c; ++i) {
            ret.push(ctx.node);
        }
        return new NodeSetValue(ret);
    }
};

class FunctionCallExpr {
    constructor(name) {
        this.name = name;
        this.args = [];
    }

    appendArg(arg) {
        this.args.push(arg);
    }

    evaluate(ctx) {
        const fn = `${this.name.value}`;
        const f = xpathfunctions[fn];
        if (f) {
            return f.call(this, ctx);
        } else {
            return new BooleanValue(false);
        }
    }
}

class UnionExpr {
    constructor(expr1, expr2) {
        this.expr1 = expr1;
        this.expr2 = expr2;
    }

    evaluate(ctx) {
        const nodes1 = this.expr1.evaluate(ctx).nodeSetValue();
        const nodes2 = this.expr2.evaluate(ctx).nodeSetValue();
        const I1 = nodes1.length;

        for (const n of nodes2) {
            let inBoth = false;
            for (let i1 = 0; i1 < I1; ++i1) {
                if (nodes1[i1] == n) {
                    inBoth = true;
                    i1 = I1; // break inner loop
                }
            }
            if (!inBoth) {
                nodes1.push(n);
            }
        }

        return new NodeSetValue(nodes1);
    }
}

class PathExpr {
    constructor(filter, rel) {
        this.filter = filter;
        this.rel = rel;
    }

    evaluate(ctx) {
        const nodes = this.filter.evaluate(ctx).nodeSetValue();
        let nodes1 = [];
        if (ctx.returnOnFirstMatch) {
            for (var i = 0; i < nodes.length; ++i) {
                nodes1 = this.rel.evaluate(ctx.clone(nodes[i], i, nodes)).nodeSetValue();
                if (nodes1.length > 0) {
                    break;
                }
            }
            return new NodeSetValue(nodes1);
        } else {
            for (var i = 0; i < nodes.length; ++i) {
                const nodes0 = this.rel.evaluate(ctx.clone(nodes[i], i, nodes)).nodeSetValue();
                for (let ii = 0; ii < nodes0.length; ++ii) {
                    nodes1.push(nodes0[ii]);
                }
            }
            return new NodeSetValue(nodes1);
        }
    }
}

class FilterExpr {
    constructor(expr, predicate) {
        this.expr = expr;
        this.predicate = predicate;
    }

    evaluate(ctx) {
        // the filter expression should be evaluated in its entirety with no
        // optimization, as we can't backtrack to it after having moved on to
        // evaluating the relative location path. See the testReturnOnFirstMatch
        // unit test.
        const flag = ctx.returnOnFirstMatch;
        ctx.setReturnOnFirstMatch(false);
        let nodes = this.expr.evaluate(ctx).nodeSetValue();
        ctx.setReturnOnFirstMatch(flag);

        for (let i = 0; i < this.predicate.length; ++i) {
            const nodes0 = nodes;
            nodes = [];
            for (let j = 0; j < nodes0.length; ++j) {
                const n = nodes0[j];
                if (this.predicate[i].evaluate(ctx.clone(n, j, nodes0)).booleanValue()) {
                    nodes.push(n);
                }
            }
        }

        return new NodeSetValue(nodes);
    }
}

class UnaryMinusExpr {
    constructor(expr) {
        this.expr = expr;
    }

    evaluate(ctx) {
        return new NumberValue(-this.expr.evaluate(ctx).numberValue());
    }
}

class BinaryExpr {
    constructor(expr1, op, expr2) {
        this.expr1 = expr1;
        this.expr2 = expr2;
        this.op = op;
    }

    evaluate(ctx) {
        let ret;
        switch (this.op.value) {
            case 'or':
                ret = new BooleanValue(this.expr1.evaluate(ctx).booleanValue() ||
                    this.expr2.evaluate(ctx).booleanValue());
                break;

            case 'and':
                ret = new BooleanValue(this.expr1.evaluate(ctx).booleanValue() &&
                    this.expr2.evaluate(ctx).booleanValue());
                break;

            case '+':
                ret = new NumberValue(this.expr1.evaluate(ctx).numberValue() +
                    this.expr2.evaluate(ctx).numberValue());
                break;

            case '-':
                ret = new NumberValue(this.expr1.evaluate(ctx).numberValue() -
                    this.expr2.evaluate(ctx).numberValue());
                break;

            case '*':
                ret = new NumberValue(this.expr1.evaluate(ctx).numberValue() *
                    this.expr2.evaluate(ctx).numberValue());
                break;

            case 'mod':
                ret = new NumberValue(this.expr1.evaluate(ctx).numberValue() %
                    this.expr2.evaluate(ctx).numberValue());
                break;

            case 'div':
                ret = new NumberValue(this.expr1.evaluate(ctx).numberValue() /
                    this.expr2.evaluate(ctx).numberValue());
                break;

            case '=':
                ret = this.compare(ctx, (x1, x2) => x1 == x2);
                break;

            case '!=':
                ret = this.compare(ctx, (x1, x2) => x1 != x2);
                break;

            case '<':
                ret = this.compare(ctx, (x1, x2) => x1 < x2);
                break;

            case '<=':
                ret = this.compare(ctx, (x1, x2) => x1 <= x2);
                break;

            case '>':
                ret = this.compare(ctx, (x1, x2) => x1 > x2);
                break;

            case '>=':
                ret = this.compare(ctx, (x1, x2) => x1 >= x2);
                break;

            default:
                alert(`BinaryExpr.evaluate: ${this.op.value}`);
        }
        return ret;
    }

    compare(ctx, cmp) {
        const v1 = this.expr1.evaluate(ctx);
        const v2 = this.expr2.evaluate(ctx);

        let ret;
        if (v1.type == 'node-set' && v2.type == 'node-set') {
            const n1 = v1.nodeSetValue();
            const n2 = v2.nodeSetValue();
            ret = false;
            for (let i1 = 0; i1 < n1.length; ++i1) {
                for (let i2 = 0; i2 < n2.length; ++i2) {
                    if (cmp(xmlValue(n1[i1]), xmlValue(n2[i2]))) {
                        ret = true;
                        // Break outer loop. Labels confuse the jscompiler and we
                        // don't use them.
                        i2 = n2.length;
                        i1 = n1.length;
                    }
                }
            }

        } else if (v1.type == 'node-set' || v2.type == 'node-set') {

            if (v1.type == 'number') {
                var s = v1.numberValue();
                var n = v2.nodeSetValue();

                ret = false;
                for (var i = 0; i < n.length; ++i) {
                    var nn = xmlValue(n[i]) - 0;
                    if (cmp(s, nn)) {
                        ret = true;
                        break;
                    }
                }

            } else if (v2.type == 'number') {
                var n = v1.nodeSetValue();
                var s = v2.numberValue();

                ret = false;
                for (var i = 0; i < n.length; ++i) {
                    var nn = xmlValue(n[i]) - 0;
                    if (cmp(nn, s)) {
                        ret = true;
                        break;
                    }
                }

            } else if (v1.type == 'string') {
                var s = v1.stringValue();
                var n = v2.nodeSetValue();

                ret = false;
                for (var i = 0; i < n.length; ++i) {
                    var nn = xmlValue(n[i]);
                    if (cmp(s, nn)) {
                        ret = true;
                        break;
                    }
                }

            } else if (v2.type == 'string') {
                var n = v1.nodeSetValue();
                var s = v2.stringValue();

                ret = false;
                for (var i = 0; i < n.length; ++i) {
                    var nn = xmlValue(n[i]);
                    if (cmp(nn, s)) {
                        ret = true;
                        break;
                    }
                }

            } else {
                ret = cmp(v1.booleanValue(), v2.booleanValue());
            }

        } else if (v1.type == 'boolean' || v2.type == 'boolean') {
            ret = cmp(v1.booleanValue(), v2.booleanValue());

        } else if (v1.type == 'number' || v2.type == 'number') {
            ret = cmp(v1.numberValue(), v2.numberValue());

        } else {
            ret = cmp(v1.stringValue(), v2.stringValue());
        }

        return new BooleanValue(ret);
    }
}

class LiteralExpr {
    constructor(value) {
        this.value = value;
    }

    evaluate(ctx) {
        return new StringValue(this.value);
    }
}

class NumberExpr {
    constructor(value) {
        this.value = value;
    }

    evaluate(ctx) {
        return new NumberValue(this.value);
    }
}

class VariableExpr {
    constructor(name) {
        this.name = name;
    }

    evaluate(ctx) {
        return ctx.getVariable(this.name);
    }
}

// Factory functions for semantic values (i.e. Expressions) of the
// productions in the grammar. When a production is matched to reduce
// the current parse state stack, the function is called with the
// semantic values of the matched elements as arguments, and returns
// another semantic value. The semantic value is a node of the parse
// tree, an expression object with an evaluate() method that evaluates the
// expression in an actual context. These factory functions are used
// in the specification of the grammar rules, below.

function makeTokenExpr(m) {
    return new TokenExpr(m);
}

function passExpr(e) {
    return e;
}

function makeLocationExpr1(slash, rel) {
    rel.absolute = true;
    return rel;
}

function makeLocationExpr2(dslash, rel) {
    rel.absolute = true;
    rel.prependStep(makeAbbrevStep(dslash.value));
    return rel;
}

function makeLocationExpr3(slash) {
    const ret = new LocationExpr();
    ret.appendStep(makeAbbrevStep('.'));
    ret.absolute = true;
    return ret;
}

function makeLocationExpr4(dslash) {
    const ret = new LocationExpr();
    ret.absolute = true;
    ret.appendStep(makeAbbrevStep(dslash.value));
    return ret;
}

function makeLocationExpr5(step) {
    const ret = new LocationExpr();
    ret.appendStep(step);
    return ret;
}

function makeLocationExpr6(rel, slash, step) {
    rel.appendStep(step);
    return rel;
}

function makeLocationExpr7(rel, dslash, step) {
    rel.appendStep(makeAbbrevStep(dslash.value));
    rel.appendStep(step);
    return rel;
}

function makeStepExpr1(dot) {
    return makeAbbrevStep(dot.value);
}

function makeStepExpr2(ddot) {
    return makeAbbrevStep(ddot.value);
}

function makeStepExpr3(axisname, axis, nodetest) {
    return new StepExpr(axisname.value, nodetest);
}

function makeStepExpr4(at, nodetest) {
    return new StepExpr('attribute', nodetest);
}

function makeStepExpr5(nodetest) {
    return new StepExpr('child', nodetest);
}

function makeStepExpr6(step, predicate) {
    step.appendPredicate(predicate);
    return step;
}

function makeAbbrevStep(abbrev) {
    switch (abbrev) {
        case '//':
            return new StepExpr('descendant-or-self', new NodeTestAny);

        case '.':
            return new StepExpr('self', new NodeTestAny);

        case '..':
            return new StepExpr('parent', new NodeTestAny);
    }
}

function makeNodeTestExpr1(asterisk) {
    return new NodeTestElementOrAttribute;
}

function makeNodeTestExpr2(ncname, colon, asterisk) {
    return new NodeTestNC(ncname.value);
}

function makeNodeTestExpr3(qname) {
    return new NodeTestName(qname.value);
}

function makeNodeTestExpr4(typeo, parenc) {
    const type = typeo.value.replace(/\s*\($/, '');
    switch (type) {
        case 'node':
            return new NodeTestAny;

        case 'text':
            return new NodeTestText;

        case 'comment':
            return new NodeTestComment;

        case 'processing-instruction':
            return new NodeTestPI('');
    }
}

function makeNodeTestExpr5(typeo, target, parenc) {
    const type = typeo.replace(/\s*\($/, '');
    if (type != 'processing-instruction') {
        throw type;
    }
    return new NodeTestPI(target.value);
}

function makePredicateExpr(pareno, expr, parenc) {
    return new PredicateExpr(expr);
}

function makePrimaryExpr(pareno, expr, parenc) {
    return expr;
}

function makeFunctionCallExpr1(name, pareno, parenc) {
    return new FunctionCallExpr(name);
}

function makeFunctionCallExpr2(name, pareno, arg1, args, parenc) {
    const ret = new FunctionCallExpr(name);
    ret.appendArg(arg1);
    for (let i = 0; i < args.length; ++i) {
        ret.appendArg(args[i]);
    }
    return ret;
}

function makeArgumentExpr(comma, expr) {
    return expr;
}

function makeUnionExpr(expr1, pipe, expr2) {
    return new UnionExpr(expr1, expr2);
}

function makePathExpr1(filter, slash, rel) {
    return new PathExpr(filter, rel);
}

function makePathExpr2(filter, dslash, rel) {
    rel.prependStep(makeAbbrevStep(dslash.value));
    return new PathExpr(filter, rel);
}

function makeFilterExpr(expr, predicates) {
    if (predicates.length > 0) {
        return new FilterExpr(expr, predicates);
    } else {
        return expr;
    }
}

function makeUnaryMinusExpr(minus, expr) {
    return new UnaryMinusExpr(expr);
}

function makeBinaryExpr(expr1, op, expr2) {
    return new BinaryExpr(expr1, op, expr2);
}

function makeLiteralExpr(token) {
    // remove quotes from the parsed value:
    const value = token.value.substring(1, token.value.length - 1);
    return new LiteralExpr(value);
}

function makeNumberExpr(token) {
    return new NumberExpr(token.value);
}

function makeVariableReference(dollar, name) {
    return new VariableExpr(name.value);
}

// Used before parsing for optimization of common simple cases. See
// the begin of xpathParse() for which they are.
function makeSimpleExpr(expr) {
    if (expr.charAt(0) == '$') {
        return new VariableExpr(expr.substr(1));
    } else if (expr.charAt(0) == '@') {
        var a = new NodeTestName(expr.substr(1));
        var b = new StepExpr('attribute', a);
        var c = new LocationExpr();
        c.appendStep(b);
        return c;
    } else if (expr.match(/^[0-9]+$/)) {
        return new NumberExpr(expr);
    } else {
        var a = new NodeTestName(expr);
        var b = new StepExpr('child', a);
        var c = new LocationExpr();
        c.appendStep(b);
        return c;
    }
}

function makeSimpleExpr2(expr) {
    const steps = expr.split('/');
    const c = new LocationExpr();
    for (let i = 0; i < steps.length; ++i) {
        const a = new NodeTestName(steps[i]);
        const b = new StepExpr('child', a);
        c.appendStep(b);
    }
    return c;
}

// The axes of XPath expressions.

const xpathAxis = {
    ANCESTOR_OR_SELF: 'ancestor-or-self',
    ANCESTOR: 'ancestor',
    ATTRIBUTE: 'attribute',
    CHILD: 'child',
    DESCENDANT_OR_SELF: 'descendant-or-self',
    DESCENDANT: 'descendant',
    FOLLOWING_SIBLING: 'following-sibling',
    FOLLOWING: 'following',
    NAMESPACE: 'namespace',
    PARENT: 'parent',
    PRECEDING_SIBLING: 'preceding-sibling',
    PRECEDING: 'preceding',
    SELF: 'self'
};

const xpathAxesRe = [
    xpathAxis.ANCESTOR_OR_SELF,
    xpathAxis.ANCESTOR,
    xpathAxis.ATTRIBUTE,
    xpathAxis.CHILD,
    xpathAxis.DESCENDANT_OR_SELF,
    xpathAxis.DESCENDANT,
    xpathAxis.FOLLOWING_SIBLING,
    xpathAxis.FOLLOWING,
    xpathAxis.NAMESPACE,
    xpathAxis.PARENT,
    xpathAxis.PRECEDING_SIBLING,
    xpathAxis.PRECEDING,
    xpathAxis.SELF
].join('|');


// The tokens of the language. The label property is just used for
// generating debug output. The prec property is the precedence used
// for shift/reduce resolution. Default precedence is 0 as a lookahead
// token and 2 on the stack. TODO(mesch): this is certainly not
// necessary and too complicated. Simplify this!

// NOTE: tabular formatting is the big exception, but here it should
// be OK.

let TOK_PIPE = {
    label: "|",
    prec: 17,
    re: new RegExp("^\\|")
};
let TOK_DSLASH = {
    label: "//",
    prec: 19,
    re: new RegExp("^//")
};
let TOK_SLASH = {
    label: "/",
    prec: 30,
    re: new RegExp("^/")
};
let TOK_AXIS = {
    label: "::",
    prec: 20,
    re: new RegExp("^::")
};
let TOK_COLON = {
    label: ":",
    prec: 1000,
    re: new RegExp("^:")
};
let TOK_AXISNAME = {
    label: "[axis]",
    re: new RegExp(`^(${xpathAxesRe})`)
};
let TOK_PARENO = {
    label: "(",
    prec: 34,
    re: new RegExp("^\\(")
};
let TOK_PARENC = {
    label: ")",
    re: new RegExp("^\\)")
};
let TOK_DDOT = {
    label: "..",
    prec: 34,
    re: new RegExp("^\\.\\.")
};
let TOK_DOT = {
    label: ".",
    prec: 34,
    re: new RegExp("^\\.")
};
let TOK_AT = {
    label: "@",
    prec: 34,
    re: new RegExp("^@")
};

let TOK_COMMA = {
    label: ",",
    re: new RegExp("^,")
};

let TOK_OR = {
    label: "or",
    prec: 10,
    re: new RegExp("^or\\b")
};
let TOK_AND = {
    label: "and",
    prec: 11,
    re: new RegExp("^and\\b")
};
let TOK_EQ = {
    label: "=",
    prec: 12,
    re: new RegExp("^=")
};
let TOK_NEQ = {
    label: "!=",
    prec: 12,
    re: new RegExp("^!=")
};
let TOK_GE = {
    label: ">=",
    prec: 13,
    re: new RegExp("^>=")
};
let TOK_GT = {
    label: ">",
    prec: 13,
    re: new RegExp("^>")
};
let TOK_LE = {
    label: "<=",
    prec: 13,
    re: new RegExp("^<=")
};
let TOK_LT = {
    label: "<",
    prec: 13,
    re: new RegExp("^<")
};
let TOK_PLUS = {
    label: "+",
    prec: 14,
    re: new RegExp("^\\+"),
    left: true
};
let TOK_MINUS = {
    label: "-",
    prec: 14,
    re: new RegExp("^\\-"),
    left: true
};
let TOK_DIV = {
    label: "div",
    prec: 15,
    re: new RegExp("^div\\b"),
    left: true
};
let TOK_MOD = {
    label: "mod",
    prec: 15,
    re: new RegExp("^mod\\b"),
    left: true
};

let TOK_BRACKO = {
    label: "[",
    prec: 32,
    re: new RegExp("^\\[")
};
let TOK_BRACKC = {
    label: "]",
    re: new RegExp("^\\]")
};
let TOK_DOLLAR = {
    label: "$",
    re: new RegExp("^\\$")
};

let TOK_NCNAME = {
    label: "[ncname]",
    re: new RegExp(`^${XML_NC_NAME}`)
};

let TOK_ASTERISK = {
    label: "*",
    prec: 15,
    re: new RegExp("^\\*"),
    left: true
};
let TOK_LITERALQ = {
    label: "[litq]",
    prec: 20,
    re: new RegExp("^'[^\\']*'")
};
let TOK_LITERALQQ = {
    label: "[litqq]",
    prec: 20,
    re: new RegExp('^"[^\\"]*"')
};

let TOK_NUMBER = {
    label: "[number]",
    prec: 35,
    re: new RegExp('^\\d+(\\.\\d*)?')
};

let TOK_QNAME = {
    label: "[qname]",
    re: new RegExp(`^(${XML_NC_NAME}:)?${XML_NC_NAME}`)
};

let TOK_NODEO = {
    label: "[nodetest-start]",
    re: new RegExp('^(processing-instruction|comment|text|node)\\(')
};

// The table of the tokens of our grammar, used by the lexer: first
// column the tag, second column a regexp to recognize it in the
// input, third column the precedence of the token, fourth column a
// factory function for the semantic value of the token.
//
// NOTE: order of this list is important, because the first match
// counts. Cf. DDOT and DOT, and AXIS and COLON.

const xpathTokenRules = [
    TOK_DSLASH,
    TOK_SLASH,
    TOK_DDOT,
    TOK_DOT,
    TOK_AXIS,
    TOK_COLON,
    TOK_AXISNAME,
    TOK_NODEO,
    TOK_PARENO,
    TOK_PARENC,
    TOK_BRACKO,
    TOK_BRACKC,
    TOK_AT,
    TOK_COMMA,
    TOK_OR,
    TOK_AND,
    TOK_NEQ,
    TOK_EQ,
    TOK_GE,
    TOK_GT,
    TOK_LE,
    TOK_LT,
    TOK_PLUS,
    TOK_MINUS,
    TOK_ASTERISK,
    TOK_PIPE,
    TOK_MOD,
    TOK_DIV,
    TOK_LITERALQ,
    TOK_LITERALQQ,
    TOK_NUMBER,
    TOK_QNAME,
    TOK_NCNAME,
    TOK_DOLLAR
];

// All the nonterminals of the grammar. The nonterminal objects are
// identified by object identity; the labels are used in the debug
// output only.
const XPathLocationPath = {
    label: "LocationPath"
};
const XPathRelativeLocationPath = {
    label: "RelativeLocationPath"
};
const XPathAbsoluteLocationPath = {
    label: "AbsoluteLocationPath"
};
const XPathStep = {
    label: "Step"
};
const XPathNodeTest = {
    label: "NodeTest"
};
const XPathPredicate = {
    label: "Predicate"
};
const XPathLiteral = {
    label: "Literal"
};
const XPathExpr = {
    label: "Expr"
};
const XPathPrimaryExpr = {
    label: "PrimaryExpr"
};
const XPathVariableReference = {
    label: "Variablereference"
};
const XPathNumber = {
    label: "Number"
};
const XPathFunctionCall = {
    label: "FunctionCall"
};
const XPathArgumentRemainder = {
    label: "ArgumentRemainder"
};
const XPathPathExpr = {
    label: "PathExpr"
};
const XPathUnionExpr = {
    label: "UnionExpr"
};
const XPathFilterExpr = {
    label: "FilterExpr"
};
const XPathDigits = {
    label: "Digits"
};

const xpathNonTerminals = [
    XPathLocationPath,
    XPathRelativeLocationPath,
    XPathAbsoluteLocationPath,
    XPathStep,
    XPathNodeTest,
    XPathPredicate,
    XPathLiteral,
    XPathExpr,
    XPathPrimaryExpr,
    XPathVariableReference,
    XPathNumber,
    XPathFunctionCall,
    XPathArgumentRemainder,
    XPathPathExpr,
    XPathUnionExpr,
    XPathFilterExpr,
    XPathDigits
];

// Quantifiers that are used in the productions of the grammar.
const Q_01 = {
    label: "?"
};
const Q_MM = {
    label: "*"
};
const Q_1M = {
    label: "+"
};

// Tag for left associativity (right assoc is implied by undefined).
const ASSOC_LEFT = true;

// The productions of the grammar. Columns of the table:
//
// - target nonterminal,
// - pattern,
// - precedence,
// - semantic value factory
//
// The semantic value factory is a function that receives parse tree
// nodes from the stack frames of the matched symbols as arguments and
// returns an a node of the parse tree. The node is stored in the top
// stack frame along with the target object of the rule. The node in
// the parse tree is an expression object that has an evaluate() method
// and thus evaluates XPath expressions.
//
// The precedence is used to decide between reducing and shifting by
// comparing the precendence of the rule that is candidate for
// reducing with the precedence of the look ahead token. Precedence of
// -1 means that the precedence of the tokens in the pattern is used
// instead. TODO: It shouldn't be necessary to explicitly assign
// precedences to rules.


// DGF As it stands, these precedences are purely empirical; we're
// not sure they can be made to be consistent at all.

const xpathGrammarRules = [
    [XPathLocationPath, [XPathRelativeLocationPath], 18,
        passExpr
    ],
    [XPathLocationPath, [XPathAbsoluteLocationPath], 18,
        passExpr
    ],

    [XPathAbsoluteLocationPath, [TOK_SLASH, XPathRelativeLocationPath], 18,
        makeLocationExpr1
    ],
    [XPathAbsoluteLocationPath, [TOK_DSLASH, XPathRelativeLocationPath], 18,
        makeLocationExpr2
    ],

    [XPathAbsoluteLocationPath, [TOK_SLASH], 0,
        makeLocationExpr3
    ],
    [XPathAbsoluteLocationPath, [TOK_DSLASH], 0,
        makeLocationExpr4
    ],

    [XPathRelativeLocationPath, [XPathStep], 31,
        makeLocationExpr5
    ],
    [XPathRelativeLocationPath, [XPathRelativeLocationPath, TOK_SLASH, XPathStep], 31,
        makeLocationExpr6
    ],
    [XPathRelativeLocationPath, [XPathRelativeLocationPath, TOK_DSLASH, XPathStep], 31,
        makeLocationExpr7
    ],

    [XPathStep, [TOK_DOT], 33,
        makeStepExpr1
    ],
    [XPathStep, [TOK_DDOT], 33,
        makeStepExpr2
    ],
    [XPathStep, [TOK_AXISNAME, TOK_AXIS, XPathNodeTest], 33,
        makeStepExpr3
    ],
    [XPathStep, [TOK_AT, XPathNodeTest], 33,
        makeStepExpr4
    ],
    [XPathStep, [XPathNodeTest], 33,
        makeStepExpr5
    ],
    [XPathStep, [XPathStep, XPathPredicate], 33,
        makeStepExpr6
    ],

    [XPathNodeTest, [TOK_ASTERISK], 33,
        makeNodeTestExpr1
    ],
    [XPathNodeTest, [TOK_NCNAME, TOK_COLON, TOK_ASTERISK], 33,
        makeNodeTestExpr2
    ],
    [XPathNodeTest, [TOK_QNAME], 33,
        makeNodeTestExpr3
    ],
    [XPathNodeTest, [TOK_NODEO, TOK_PARENC], 33,
        makeNodeTestExpr4
    ],
    [XPathNodeTest, [TOK_NODEO, XPathLiteral, TOK_PARENC], 33,
        makeNodeTestExpr5
    ],

    [XPathPredicate, [TOK_BRACKO, XPathExpr, TOK_BRACKC], 33,
        makePredicateExpr
    ],

    [XPathPrimaryExpr, [XPathVariableReference], 33,
        passExpr
    ],
    [XPathPrimaryExpr, [TOK_PARENO, XPathExpr, TOK_PARENC], 33,
        makePrimaryExpr
    ],
    [XPathPrimaryExpr, [XPathLiteral], 30,
        passExpr
    ],
    [XPathPrimaryExpr, [XPathNumber], 30,
        passExpr
    ],
    [XPathPrimaryExpr, [XPathFunctionCall], 31,
        passExpr
    ],

    [XPathFunctionCall, [TOK_QNAME, TOK_PARENO, TOK_PARENC], -1,
        makeFunctionCallExpr1
    ],
    [XPathFunctionCall, [TOK_QNAME, TOK_PARENO, XPathExpr, XPathArgumentRemainder, Q_MM,
            TOK_PARENC
        ], -1,
        makeFunctionCallExpr2
    ],
    [XPathArgumentRemainder, [TOK_COMMA, XPathExpr], -1,
        makeArgumentExpr
    ],

    [XPathUnionExpr, [XPathPathExpr], 20,
        passExpr
    ],
    [XPathUnionExpr, [XPathUnionExpr, TOK_PIPE, XPathPathExpr], 20,
        makeUnionExpr
    ],

    [XPathPathExpr, [XPathLocationPath], 20,
        passExpr
    ],
    [XPathPathExpr, [XPathFilterExpr], 19,
        passExpr
    ],
    [XPathPathExpr, [XPathFilterExpr, TOK_SLASH, XPathRelativeLocationPath], 19,
        makePathExpr1
    ],
    [XPathPathExpr, [XPathFilterExpr, TOK_DSLASH, XPathRelativeLocationPath], 19,
        makePathExpr2
    ],

    [XPathFilterExpr, [XPathPrimaryExpr, XPathPredicate, Q_MM], 31,
        makeFilterExpr
    ],

    [XPathExpr, [XPathPrimaryExpr], 16,
        passExpr
    ],
    [XPathExpr, [XPathUnionExpr], 16,
        passExpr
    ],

    [XPathExpr, [TOK_MINUS, XPathExpr], -1,
        makeUnaryMinusExpr
    ],

    [XPathExpr, [XPathExpr, TOK_OR, XPathExpr], -1,
        makeBinaryExpr
    ],
    [XPathExpr, [XPathExpr, TOK_AND, XPathExpr], -1,
        makeBinaryExpr
    ],

    [XPathExpr, [XPathExpr, TOK_EQ, XPathExpr], -1,
        makeBinaryExpr
    ],
    [XPathExpr, [XPathExpr, TOK_NEQ, XPathExpr], -1,
        makeBinaryExpr
    ],

    [XPathExpr, [XPathExpr, TOK_LT, XPathExpr], -1,
        makeBinaryExpr
    ],
    [XPathExpr, [XPathExpr, TOK_LE, XPathExpr], -1,
        makeBinaryExpr
    ],
    [XPathExpr, [XPathExpr, TOK_GT, XPathExpr], -1,
        makeBinaryExpr
    ],
    [XPathExpr, [XPathExpr, TOK_GE, XPathExpr], -1,
        makeBinaryExpr
    ],

    [XPathExpr, [XPathExpr, TOK_PLUS, XPathExpr], -1,
        makeBinaryExpr, ASSOC_LEFT
    ],
    [XPathExpr, [XPathExpr, TOK_MINUS, XPathExpr], -1,
        makeBinaryExpr, ASSOC_LEFT
    ],

    [XPathExpr, [XPathExpr, TOK_ASTERISK, XPathExpr], -1,
        makeBinaryExpr, ASSOC_LEFT
    ],
    [XPathExpr, [XPathExpr, TOK_DIV, XPathExpr], -1,
        makeBinaryExpr, ASSOC_LEFT
    ],
    [XPathExpr, [XPathExpr, TOK_MOD, XPathExpr], -1,
        makeBinaryExpr, ASSOC_LEFT
    ],

    [XPathLiteral, [TOK_LITERALQ], -1,
        makeLiteralExpr
    ],
    [XPathLiteral, [TOK_LITERALQQ], -1,
        makeLiteralExpr
    ],

    [XPathNumber, [TOK_NUMBER], -1,
        makeNumberExpr
    ],

    [XPathVariableReference, [TOK_DOLLAR, TOK_QNAME], 200,
        makeVariableReference
    ]
];

// That function computes some optimizations of the above data
// structures and will be called right here. It merely takes the
// counter variables out of the global scope.

var xpathRules = [];

function xpathParseInit(xpathLog) {
    if (xpathRules.length) {
        return;
    }

    // Some simple optimizations for the xpath expression parser: sort
    // grammar rules descending by length, so that the longest match is
    // first found.

    xpathGrammarRules.sort((a, b) => {
        const la = a[1].length;
        const lb = b[1].length;
        if (la < lb) {
            return 1;
        } else if (la > lb) {
            return -1;
        } else {
            return 0;
        }
    });

    let k = 1;
    for (var i = 0; i < xpathNonTerminals.length; ++i) {
        xpathNonTerminals[i].key = k++;
    }

    for (i = 0; i < xpathTokenRules.length; ++i) {
        xpathTokenRules[i].key = k++;
    }

    xpathLog(`XPath parse INIT: ${k} rules`);

    // Another slight optimization: sort the rules into bins according
    // to the last element (observing quantifiers), so we can restrict
    // the match against the stack to the subest of rules that match the
    // top of the stack.
    //
    // TODO(mesch): What we actually want is to compute states as in
    // bison, so that we don't have to do any explicit and iterated
    // match against the stack.

    function push_(array, position, element) {
        if (!array[position]) {
            array[position] = [];
        }
        array[position].push(element);
    }

    for (i = 0; i < xpathGrammarRules.length; ++i) {
        const rule = xpathGrammarRules[i];
        const pattern = rule[1];

        for (let j = pattern.length - 1; j >= 0; --j) {
            if (pattern[j] == Q_1M) {
                push_(xpathRules, pattern[j - 1].key, rule);
                break;

            } else if (pattern[j] == Q_MM || pattern[j] == Q_01) {
                push_(xpathRules, pattern[j - 1].key, rule);
                --j;

            } else {
                push_(xpathRules, pattern[j].key, rule);
                break;
            }
        }
    }

    xpathLog(`XPath parse INIT: ${xpathRules.length} rule bins`);

    let sum = 0;
    mapExec(xpathRules, i => {
        if (i) {
            sum += i.length;
        }
    });

    xpathLog(`XPath parse INIT: ${sum / xpathRules.length} average bin size`);
}

// Local utility functions that are used by the lexer or parser.

function xpathCollectDescendants(nodelist, node, opt_tagName) {
    if (opt_tagName && node.getElementsByTagName) {
        copyArray(nodelist, node.getElementsByTagName(opt_tagName));
        return;
    }
    for (let n = node.firstChild; n; n = n.nextSibling) {
        nodelist.push(n);
        xpathCollectDescendants(nodelist, n);
    }
}

/**
 * DGF - extract a tag name suitable for getElementsByTagName
 *
 * @param nodetest                     the node test
 * @param ignoreNonElementNodesForNTA  if true, the node list returned when
 *                                     evaluating "node()" will not contain
 *                                     non-element nodes. This can boost
 *                                     performance. This is false by default.
 */
function xpathExtractTagNameFromNodeTest(nodetest, ignoreNonElementNodesForNTA) {
    if (nodetest instanceof NodeTestName) {
        return nodetest.name;
    }
    if ((ignoreNonElementNodesForNTA && nodetest instanceof NodeTestAny) ||
        nodetest instanceof NodeTestElementOrAttribute) {
        return "*";
    }
}

function xpathCollectDescendantsReverse(nodelist, node) {
    for (let n = node.lastChild; n; n = n.previousSibling) {
        nodelist.push(n);
        xpathCollectDescendantsReverse(nodelist, n);
    }
}

// Utility function to sort a list of nodes. Used by xsltSort() and
// nxslSelect().
function xpathSort(input, sort) {
    if (sort.length == 0) {
        return;
    }

    const sortlist = [];

    for (var i = 0; i < input.contextSize(); ++i) {
        const node = input.nodelist[i];
        const sortitem = {
            node,
            key: []
        };
        const context = input.clone(node, 0, [node]);

        for (const s of sort) {
            const value = s.expr.evaluate(context);

            let evalue;
            if (s.type == 'text') {
                evalue = value.stringValue();
            } else if (s.type == 'number') {
                evalue = value.numberValue();
            }
            sortitem.key.push({
                value: evalue,
                order: s.order
            });
        }

        // Make the sort stable by adding a lowest priority sort by
        // id. This is very convenient and furthermore required by the
        // spec ([XSLT] - Section 10 Sorting).
        sortitem.key.push({
            value: i,
            order: 'ascending'
        });

        sortlist.push(sortitem);
    }

    sortlist.sort(xpathSortByKey);

    const nodes = [];
    for (var i = 0; i < sortlist.length; ++i) {
        nodes.push(sortlist[i].node);
    }
    input.nodelist = nodes;
    input.setNode(0);
}


// Sorts by all order criteria defined. According to the JavaScript
// spec ([ECMA] Section 11.8.5), the compare operators compare strings
// as strings and numbers as numbers.
//
// NOTE: In browsers which do not follow the spec, this breaks only in
// the case that numbers should be sorted as strings, which is very
// uncommon.
function xpathSortByKey(v1, v2) {
    // NOTE: Sort key vectors of different length never occur in
    // xsltSort.

    for (let i = 0; i < v1.key.length; ++i) {
        const o = v1.key[i].order == 'descending' ? -1 : 1;
        if (v1.key[i].value > v2.key[i].value) {
            return +1 * o;
        } else if (v1.key[i].value < v2.key[i].value) {
            return -1 * o;
        }
    }

    return 0;
}


// Parses and then evaluates the given XPath expression in the given
// input context. Notice that parsed xpath expressions are cached.
function xpathEval(select, context) {
    const expr = xpathParse(select);
    const ret = expr.evaluate(context);
    return ret;
}

// Copyright 2018 Johannes Wilm
// Throws an exception if false.
function assert(b) {
    if (!b) {
        throw "Assertion failed";
    }
}

// Applies the given function to each element of the array, preserving
// this, and passing the index.
function mapExec(array, func) {
    for (let i = 0; i < array.length; ++i) {
        func.call(this, array[i], i);
    }
}

// Returns an array that contains the return value of the given
// function applied to every element of the input array.
function mapExpr(array, func) {
    const ret = [];
    for (let i = 0; i < array.length; ++i) {
        ret.push(func(array[i]));
    }
    return ret;
}

// Reverses the given array in place.
function reverseInplace(array) {
    for (let i = 0; i < array.length / 2; ++i) {
        const h = array[i];
        const ii = array.length - i - 1;
        array[i] = array[ii];
        array[ii] = h;
    }
}

// Shallow-copies an array to the end of another array
// Basically Array.concat, but works with other non-array collections
function copyArray(dst, src) {
    if (!src) return;
    const dstLength = dst.length;
    for (let i = src.length - 1; i >= 0; --i) {
        dst[i + dstLength] = src[i];
    }
}

/**
 * This is an optimization for copying attribute lists in IE. IE includes many
 * extraneous properties in its DOM attribute lists, which take require
 * significant extra processing when evaluating attribute steps. With this
 * function, we ignore any such attributes that has an empty string value.
 */
function copyArrayIgnoringAttributesWithoutValue(dst, src) {
    if (!src) return;
    for (let i = src.length - 1; i >= 0; --i) {
        // this test will pass so long as the attribute has a non-empty string
        // value, even if that value is "false", "0", "undefined", etc.
        if (src[i].nodeValue) {
            dst.push(src[i]);
        }
    }
}

// Returns the text value of a node; for nodes without children this
// is the nodeValue, for nodes with children this is the concatenation
// of the value of all children. Browser-specific optimizations are used by
// default; they can be disabled by passing "true" in as the second parameter.
function xmlValue(node, disallowBrowserSpecificOptimization) {
    if (!node) {
        return '';
    }

    let ret = '';
    if (node.nodeType == DOM_TEXT_NODE ||
        node.nodeType == DOM_CDATA_SECTION_NODE) {
        ret += node.nodeValue;

    } else if (node.nodeType == DOM_ATTRIBUTE_NODE) {
        ret += node.nodeValue;
    } else if (node.nodeType == DOM_ELEMENT_NODE ||
        node.nodeType == DOM_DOCUMENT_NODE ||
        node.nodeType == DOM_DOCUMENT_FRAGMENT_NODE) {
        if (!disallowBrowserSpecificOptimization) {
            // IE, Safari, Opera, and friends
            const innerText = node.innerText;
            if (innerText != undefined) {
                return innerText;
            }
            // Firefox
            const textContent = node.textContent;
            if (textContent != undefined) {
                return textContent;
            }
        }
        // pobrecito!
        const len = node.childNodes.length;
        for (let i = 0; i < len; ++i) {
            ret += xmlValue(node.childNodes[i]);
        }
    }
    return ret;
}

// Returns the representation of a node as XML text.
function xmlText(node, opt_cdata) {
    const buf = [];
    xmlTextR(node, buf, opt_cdata);
    return buf.join('');
}

function xmlTextR(node, buf, cdata) {
    if (node.nodeType == DOM_TEXT_NODE) {
        buf.push(xmlEscapeText(node.nodeValue));

    } else if (node.nodeType == DOM_CDATA_SECTION_NODE) {
        if (cdata) {
            buf.push(node.nodeValue);
        } else {
            buf.push(`<![CDATA[${node.nodeValue}]]>`);
        }

    } else if (node.nodeType == DOM_COMMENT_NODE) {
        buf.push(`<!--${node.nodeValue}-->`);

    } else if (node.nodeType == DOM_ELEMENT_NODE) {
        buf.push(`<${xmlFullNodeName(node)}`);
        for (var i = 0; i < node.attributes.length; ++i) {
            const a = node.attributes[i];
            if (a && a.nodeName && a.nodeValue) {
                buf.push(` ${xmlFullNodeName(a)}="${xmlEscapeAttr(a.nodeValue)}"`);
            }
        }

        if (node.childNodes.length == 0) {
            buf.push('/>');
        } else {
            buf.push('>');
            for (var i = 0; i < node.childNodes.length; ++i) {
                xmlTextR(node.childNodes[i], buf, cdata);
            }
            buf.push(`</${xmlFullNodeName(node)}>`);
        }

    } else if (node.nodeType == DOM_DOCUMENT_NODE ||
        node.nodeType == DOM_DOCUMENT_FRAGMENT_NODE) {
        for (var i = 0; i < node.childNodes.length; ++i) {
            xmlTextR(node.childNodes[i], buf, cdata);
        }
    }
}

function xmlFullNodeName(n) {
    if (n.prefix && n.nodeName.indexOf(`${n.prefix}:`) != 0) {
        return `${n.prefix}:${n.nodeName}`;
    } else {
        return n.nodeName;
    }
}

// Escape XML special markup chracters: tag delimiter < > and entity
// reference start delimiter &. The escaped string can be used in XML
// text portions (i.e. between tags).
function xmlEscapeText(s) {
    return (`${s}`).replace(/&/g, '&amp;').replace(/</g, '&lt;').
    replace(/>/g, '&gt;');
}

// Escape XML special markup characters: tag delimiter < > entity
// reference start delimiter & and quotes ". The escaped string can be
// used in double quoted XML attribute value portions (i.e. in
// attributes within start tags).
function xmlEscapeAttr(s) {
    return xmlEscapeText(s).replace(/\"/g, '&quot;');
}

// Escape markup in XML text, but don't touch entity references. The
// escaped string can be used as XML text (i.e. between tags).
//function xmlEscapeTags(s) {
//  return s.replace(/</g, '&lt;').replace(/>/g, '&gt;');
//}

/**
 * Wrapper function to access the owner document uniformly for document
 * and other nodes: for the document node, the owner document is the
 * node itself, for all others it's the ownerDocument property.
 *
 * @param {Node} node
 * @return {Document}
 */
function xmlOwnerDocument(node) {
    if (node.nodeType == DOM_DOCUMENT_NODE) {
        return node;
    } else {
        return node.ownerDocument;
    }
}

// Wrapper around DOM methods so we can condense their invocations.
function domGetAttribute(node, name) {
    return node.getAttribute(name);
}

function domSetAttribute(node, name, value) {
    return node.setAttribute(name, value);
}

function domAppendChild(node, child) {
    return node.appendChild(child);
}

function domCreateTextNode(doc, text) {
    return doc.createTextNode(text);
}

function domCreateElement(doc, name) {
    return doc.createElement(name);
}

function domCreateCDATASection(doc, data) {
    return doc.createCDATASection(data);
}

function domCreateComment(doc, text) {
    return doc.createComment(text);
}

function domCreateDocumentFragment(doc) {
    return doc.createDocumentFragment();
}

/**
 * Escape the special regular expression characters when the regular expression
 * is specified as a string.
 *
 * Based on: http://simonwillison.net/2006/Jan/20/escape/
 */
const regExpSpecials = [
    '/', '.', '*', '+', '?', '|', '^', '$',
    '(', ')', '[', ']', '{', '}', '\\'
];

const sRE = new RegExp(
    `(\\${regExpSpecials.join('|\\')})`, 'g'
);

function regExpEscape(text) {
    return text.replace(sRE, '\\$1')
}

/**
 * Determines whether a predicate expression contains a "positional selector".
 * A positional selector filters nodes from the nodelist input based on their
 * position within that list. When such selectors are encountered, the
 * evaluation of the predicate cannot be depth-first, because the positional
 * selector may be based on the result of evaluating predicates that precede
 * it.
 */
function predicateExprHasPositionalSelector(expr, isRecursiveCall) {
    if (!expr) {
        return false;
    }
    if (!isRecursiveCall && exprReturnsNumberValue(expr)) {
        // this is a "proximity position"-based predicate
        return true;
    }
    if (expr instanceof FunctionCallExpr) {
        const value = expr.name.value;
        return (value == 'last' || value == 'position');
    }
    if (expr instanceof BinaryExpr) {
        return (
            predicateExprHasPositionalSelector(expr.expr1, true) ||
            predicateExprHasPositionalSelector(expr.expr2, true));
    }
    return false;
}

function exprReturnsNumberValue(expr) {
    if (expr instanceof FunctionCallExpr) {
        var isMember = {
            last: true,
            position: true,
            count: true,
            'string-length': true,
            number: true,
            sum: true,
            floor: true,
            ceiling: true,
            round: true
        };
        return isMember[expr.name.value];
    } else if (expr instanceof UnaryMinusExpr) {
        return true;
    } else if (expr instanceof BinaryExpr) {
        var isMember = {
            '+': true,
            '-': true,
            '*': true,
            mod: true,
            div: true
        };
        return isMember[expr.op.value];
    } else if (expr instanceof NumberExpr) {
        return true;
    }
    return false;
}

// Copyright 2018 Johannes Wilm

// The exported entry point of the XSL-T processor, as explained
// above.
//
// @param xmlDoc The input document root, as DOM node.
// @param template The stylesheet document root, as DOM node.
// @return the processed document, as XML text in a string.
function xsltProcess(xmlDoc, stylesheet) {
    const output = domCreateDocumentFragment(new XDocument);
    xsltProcessContext(new ExprContext(xmlDoc), stylesheet, output);
    const ret = xmlText(output);
    return ret;
}

// The main entry point of the XSL-T processor, as explained above.
//
// @param input The input document root, as XPath ExprContext.
// @param template The stylesheet document root, as DOM node.
// @param the root of the generated output, as DOM node.

function xsltProcessContext(input, template, output) {
    const outputDocument = xmlOwnerDocument(output);

    const nodename = template.nodeName.split(/:/);
    if (nodename.length == 1 || nodename[0] != 'xsl') {
        xsltPassThrough(input, template, output, outputDocument);
    } else {
        switch (nodename[1]) {
            case 'apply-imports':
                alert(`not implemented: ${nodename[1]}`);
                break;

            case 'apply-templates':
                var select = xmlGetAttribute(template, 'select');
                var nodes;
                if (select) {
                    nodes = xpathEval(select, input).nodeSetValue();
                } else {
                    nodes = input.node.childNodes;
                }

                const sortContext = input.clone(nodes[0], 0, nodes);
                xsltWithParam(sortContext, template);
                xsltSort(sortContext, template);

                const mode = xmlGetAttribute(template, 'mode');
                var top = template.ownerDocument.documentElement;
                const templates = [];
                for (let i = 0; i < top.childNodes.length; ++i) {
                    let c = top.childNodes[i];
                    if (c.nodeType == DOM_ELEMENT_NODE &&
                        c.nodeName == 'xsl:template' &&
                        (!mode || c.getAttribute('mode') == mode)
                    ) {
                        templates.push(c);
                    }
                }
                for (let j = 0; j < sortContext.contextSize(); ++j) {
                    const nj = sortContext.nodelist[j];
                    for (let i = 0; i < templates.length; ++i) {
                        xsltProcessContext(sortContext.clone(nj, j), templates[i], output);
                    }
                }
                break;

            case 'attribute':
                var nameexpr = xmlGetAttribute(template, 'name');
                var name = xsltAttributeValue(nameexpr, input);
                var node = domCreateDocumentFragment(outputDocument);
                xsltChildNodes(input, template, node);
                var value = xmlValue(node);
                domSetAttribute(output, name, value);
                break;

            case 'attribute-set':
                alert(`not implemented: ${nodename[1]}`);
                break;

            case 'call-template':
                var name = xmlGetAttribute(template, 'name');
                var top = template.ownerDocument.documentElement;

                const paramContext = input.clone();
                xsltWithParam(paramContext, template);

                for (var i = 0; i < top.childNodes.length; ++i) {
                    var c = top.childNodes[i];
                    if (c.nodeType == DOM_ELEMENT_NODE &&
                        c.nodeName == 'xsl:template' &&
                        domGetAttribute(c, 'name') == name) {
                        xsltChildNodes(paramContext, c, output);
                        break;
                    }
                }
                break;

            case 'choose':
                xsltChoose(input, template, output);
                break;

            case 'comment':
                var node = domCreateDocumentFragment(outputDocument);
                xsltChildNodes(input, template, node);
                const commentData = xmlValue(node);
                const commentNode = domCreateComment(outputDocument, commentData);
                output.appendChild(commentNode);
                break;

            case 'copy':
                var node = xsltCopy(output, input.node, outputDocument);
                if (node) {
                    xsltChildNodes(input, template, node);
                }
                break;

            case 'copy-of':
                var select = xmlGetAttribute(template, 'select');
                var value = xpathEval(select, input);
                if (value.type == 'node-set') {
                    var nodes = value.nodeSetValue();
                    for (var i = 0; i < nodes.length; ++i) {
                        xsltCopyOf(output, nodes[i], outputDocument);
                    }

                } else {
                    var node = domCreateTextNode(outputDocument, value.stringValue());
                    domAppendChild(output, node);
                }
                break;

            case 'decimal-format':
                alert(`not implemented: ${nodename[1]}`);
                break;

            case 'element':
                var nameexpr = xmlGetAttribute(template, 'name');
                var name = xsltAttributeValue(nameexpr, input);
                var node = domCreateElement(outputDocument, name);
                domAppendChild(output, node);
                xsltChildNodes(input, template, node);
                break;

            case 'fallback':
                alert(`not implemented: ${nodename[1]}`);
                break;

            case 'for-each':
                xsltForEach(input, template, output);
                break;

            case 'if':
                const test = xmlGetAttribute(template, 'test');
                if (xpathEval(test, input).booleanValue()) {
                    xsltChildNodes(input, template, output);
                }
                break;

            case 'import':
                alert(`not implemented: ${nodename[1]}`);
                break;

            case 'include':
                alert(`not implemented: ${nodename[1]}`);
                break;

            case 'key':
                alert(`not implemented: ${nodename[1]}`);
                break;

            case 'message':
                alert(`not implemented: ${nodename[1]}`);
                break;

            case 'namespace-alias':
                alert(`not implemented: ${nodename[1]}`);
                break;

            case 'number':
                alert(`not implemented: ${nodename[1]}`);
                break;

            case 'otherwise':
                alert(`error if here: ${nodename[1]}`);
                break;

            case 'output':
                // Ignored. -- Since we operate on the DOM, and all further use
                // of the output of the XSL transformation is determined by the
                // browser that we run in, this parameter is not applicable to
                // this implementation.
                break;

            case 'preserve-space':
                alert(`not implemented: ${nodename[1]}`);
                break;

            case 'processing-instruction':
                alert(`not implemented: ${nodename[1]}`);
                break;

            case 'sort':
                // just ignore -- was handled by xsltSort()
                break;

            case 'strip-space':
                alert(`not implemented: ${nodename[1]}`);
                break;

            case 'stylesheet':
            case 'transform':
                xsltChildNodes(input, template, output);
                break;

            case 'template':
                const match = xmlGetAttribute(template, 'match');
                if (match && xsltMatch(match, input)) {
                    xsltChildNodes(input, template, output);
                }
                break;

            case 'text':
                const text = xmlValue(template);
                var node = domCreateTextNode(outputDocument, text);
                output.appendChild(node);
                break;

            case 'value-of':
                var select = xmlGetAttribute(template, 'select');
                var value = xpathEval(select, input).stringValue();
                var node = domCreateTextNode(outputDocument, value);
                output.appendChild(node);
                break;

            case 'param':
                xsltVariable(input, template, false);
                break;

            case 'variable':
                xsltVariable(input, template, true);
                break;

            case 'when':
                alert(`error if here: ${nodename[1]}`);
                break;

            case 'with-param':
                alert(`error if here: ${nodename[1]}`);
                break;

            default:
                alert(`error if here: ${nodename[1]}`);
                break;
        }
    }
}


// Sets parameters defined by xsl:with-param child nodes of the
// current template node, in the current input context. This happens
// before the operation specified by the current template node is
// executed.

function xsltWithParam(input, template) {
    for (const c of template.childNodes) {
        if (c.nodeType == DOM_ELEMENT_NODE && c.nodeName == 'xsl:with-param') {
            xsltVariable(input, c, true);
        }
    }
}


// Orders the current node list in the input context according to the
// sort order specified by xsl:sort child nodes of the current
// template node. This happens before the operation specified by the
// current template node is executed.
//
// TODO(mesch): case-order is not implemented.

function xsltSort(input, template) {
    const sort = [];

    for (const c of template.childNodes) {
        if (c.nodeType == DOM_ELEMENT_NODE && c.nodeName == 'xsl:sort') {
            const select = xmlGetAttribute(c, 'select');
            const expr = xpathParse(select);
            const type = xmlGetAttribute(c, 'data-type') || 'text';
            const order = xmlGetAttribute(c, 'order') || 'ascending';
            sort.push({
                expr,
                type,
                order
            });
        }
    }

    xpathSort(input, sort);
}


// Evaluates a variable or parameter and set it in the current input
// context. Implements xsl:variable, xsl:param, and xsl:with-param.
//
// @param override flag that defines if the value computed here
// overrides the one already in the input context if that is the
// case. I.e. decides if this is a default value or a local
// value. xsl:variable and xsl:with-param override; xsl:param doesn't.

function xsltVariable(input, template, override) {
    const name = xmlGetAttribute(template, 'name');
    const select = xmlGetAttribute(template, 'select');

    let value;

    if (template.childNodes.length > 0) {
        const root = domCreateDocumentFragment(template.ownerDocument);
        xsltChildNodes(input, template, root);
        value = new NodeSetValue([root]);

    } else if (select) {
        value = xpathEval(select, input);

    } else {
        value = new StringValue('');
    }

    if (override || !input.getVariable(name)) {
        input.setVariable(name, value);
    }
}


// Implements xsl:chose and its child nodes xsl:when and
// xsl:otherwise.

function xsltChoose(input, template, output) {
    for (const childNode of template.childNodes) {
        if (childNode.nodeType != DOM_ELEMENT_NODE) {
            continue;

        } else if (childNode.nodeName == 'xsl:when') {
            const test = xmlGetAttribute(childNode, 'test');
            if (xpathEval(test, input).booleanValue()) {
                xsltChildNodes(input, childNode, output);
                break;
            }

        } else if (childNode.nodeName == 'xsl:otherwise') {
            xsltChildNodes(input, childNode, output);
            break;
        }
    }
}


// Implements xsl:for-each.

function xsltForEach(input, template, output) {
    const select = xmlGetAttribute(template, 'select');
    const nodes = xpathEval(select, input).nodeSetValue();
    const sortContext = input.clone(nodes[0], 0, nodes);
    xsltSort(sortContext, template);
    for (let i = 0; i < sortContext.contextSize(); ++i) {
        const ni = sortContext.nodelist[i];
        xsltChildNodes(sortContext.clone(ni, i), template, output);
    }
}


// Traverses the template node tree. Calls the main processing
// function with the current input context for every child node of the
// current template node.

function xsltChildNodes(input, template, output) {
    // Clone input context to keep variables declared here local to the
    // siblings of the children.
    const context = input.clone();
    for (let i = 0; i < template.childNodes.length; ++i) {
        xsltProcessContext(context, template.childNodes[i], output);
    }
}


// Passes template text to the output. The current template node does
// not specify an XSL-T operation and therefore is appended to the
// output with all its attributes. Then continues traversing the
// template node tree.

function xsltPassThrough(input, template, output, outputDocument) {
    if (template.nodeType == DOM_TEXT_NODE) {
        if (xsltPassText(template)) {
            var node = domCreateTextNode(outputDocument, template.nodeValue);
            domAppendChild(output, node);
        }

    } else if (template.nodeType == DOM_ELEMENT_NODE) {
        var node = domCreateElement(outputDocument, template.nodeName);

        for (const a of template.attributes) {
            if (a) {
                const name = a.nodeName;
                const value = xsltAttributeValue(a.nodeValue, input);
                domSetAttribute(node, name, value);
            }
        }

        domAppendChild(output, node);
        xsltChildNodes(input, template, node);
    } else {
        // This applies also to the DOCUMENT_NODE of the XSL stylesheet,
        // so we don't have to treat it specially.
        xsltChildNodes(input, template, output);
    }
}

// Determines if a text node in the XSLT template document is to be
// stripped according to XSLT whitespace stipping rules.
//
// See [XSLT], section 3.4.
//
// TODO(mesch): Whitespace stripping on the input document is
// currently not implemented.

function xsltPassText(template) {
    if (!template.nodeValue.match(/^\s*$/)) {
        return true;
    }

    let element = template.parentNode;
    if (element.nodeName == 'xsl:text') {
        return true;
    }

    while (element && element.nodeType == DOM_ELEMENT_NODE) {
        const xmlspace = domGetAttribute(element, 'xml:space');
        if (xmlspace) {
            if (xmlspace == 'default') {
                return false;
            } else if (xmlspace == 'preserve') {
                return true;
            }
        }

        element = element.parentNode;
    }

    return false;
}

// Evaluates an XSL-T attribute value template. Attribute value
// templates are attributes on XSL-T elements that contain XPath
// expressions in braces {}. The XSL-T expressions are evaluated in
// the current input context.

function xsltAttributeValue(value, context) {
    const parts = value.split('{');
    if (parts.length == 1) {
        return value;
    }

    let ret = '';
    for (let i = 0; i < parts.length; ++i) {
        const rp = parts[i].split('}');
        if (rp.length != 2) {
            // first literal part of the value
            ret += parts[i];
            continue;
        }

        const val = xpathEval(rp[0], context).stringValue();
        ret += val + rp[1];
    }

    return ret;
}


// Wrapper function to access attribute values of template element
// nodes. Currently this calls he.decode because in some DOM
// implementations the return value of node.getAttributeValue()
// contains unresolved XML entities, although the DOM spec requires
// that entity references are resolved by te DOM.
function xmlGetAttribute(node, name) {
    // TODO(mesch): This should not be necessary if the DOM is working
    // correctly. The DOM is responsible for resolving entities, not the
    // application.
    const value = domGetAttribute(node, name);
    if (value) {
        return he.decode(value);
    } else {
        return value;
    }
}

// Implements xsl:copy-of for node-set values of the select
// expression. Recurses down the source node tree, which is part of
// the input document.
//
// @param {Node} dst the node being copied to, part of output document,
// @param {Node} src the node being copied, part in input document,
// @param {Document} dstDocument

function xsltCopyOf(dst, src, dstDocument) {
    if (src.nodeType == DOM_DOCUMENT_FRAGMENT_NODE ||
        src.nodeType == DOM_DOCUMENT_NODE) {
        for (var i = 0; i < src.childNodes.length; ++i) {
            xsltCopyOf(dst, src.childNodes[i], dstDocument);
        }
    } else {
        const node = xsltCopy(dst, src, dstDocument);
        if (node) {
            // This was an element node -- recurse to attributes and
            // children.
            for (var i = 0; i < src.attributes.length; ++i) {
                xsltCopyOf(node, src.attributes[i], dstDocument);
            }

            for (var i = 0; i < src.childNodes.length; ++i) {
                xsltCopyOf(node, src.childNodes[i], dstDocument);
            }
        }
    }
}


// Implements xsl:copy for all node types.
//
// @param {Node} dst the node being copied to, part of output document,
// @param {Node} src the node being copied, part in input document,
// @param {Document} dstDocument
// @return {Node|Null} If an element node was created, the element
// node. Otherwise null.

function xsltCopy(dst, src, dstDocument) {
    if (src.nodeType == DOM_ELEMENT_NODE) {
        var node = domCreateElement(dstDocument, src.nodeName);
        domAppendChild(dst, node);
        return node;
    }

    if (src.nodeType == DOM_TEXT_NODE) {
        var node = domCreateTextNode(dstDocument, src.nodeValue);
        domAppendChild(dst, node);

    } else if (src.nodeType == DOM_CDATA_SECTION_NODE) {
        var node = domCreateCDATASection(dstDocument, src.nodeValue);
        domAppendChild(dst, node);

    } else if (src.nodeType == DOM_COMMENT_NODE) {
        var node = domCreateComment(dstDocument, src.nodeValue);
        domAppendChild(dst, node);

    } else if (src.nodeType == DOM_ATTRIBUTE_NODE) {
        domSetAttribute(dst, src.nodeName, src.nodeValue);
    }

    return null;
}


// Evaluates an XPath expression in the current input context as a
// match (see [XSLT] section 5.2, paragraph 1).
function xsltMatch(match, context) {
    const expr = xpathParse(match);
    let ret;
    // Shortcut for the most common case.
    if (expr.steps && !expr.absolute && expr.steps.length == 1 &&
        expr.steps[0].axis == 'child' && expr.steps[0].predicate.length == 0) {
        ret = expr.steps[0].nodetest.evaluate(context).booleanValue();

    } else {

        ret = false;
        let node = context.node;

        while (!ret && node) {
            const result = expr.evaluate(context.clone(node, 0, [node])).nodeSetValue();
            for (let i = 0; i < result.length; ++i) {
                if (result[i] == context.node) {
                    ret = true;
                    break;
                }
            }
            node = node.parentNode;
        }
    }
    return ret;
}

exports.xsltProcess = xsltProcess;
exports.xmlParse = xmlParse;
