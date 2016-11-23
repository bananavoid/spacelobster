define("animations/localTweenEngine/localTweenEngine", ["tweenEngine"], function(a) {
	"use strict";
	var b = new a;
	b.engine.adjustLagSmoothing(500, 33);
	b.engine.useRAF(true);
	return b
});
define("animations/animationClasses/animation/defaults/defaults", [], function() {
	"use strict";
	return [{
		action: "screenIn",
		name: "FadeIn",
		params: {
			delay: 0,
			duration: 1.2
		}
	}, {
		name: "FadeOut",
		params: {
			delay: 0,
			duration: 1.2
		}
	}, {
		action: "screenIn",
		name: "FloatIn",
		params: {
			delay: 0,
			duration: 1.2,
			direction: "right"
		}
	}, {
		name: "FloatOut",
		params: {
			delay: 0,
			duration: 1.2,
			direction: "right"
		}
	}, {
		action: "screenIn",
		name: "ExpandIn",
		params: {
			delay: 0,
			duration: 1.2,
			direction: "right"
		}
	}, {
		action: "screenIn",
		name: "SpinIn",
		params: {
			delay: 0,
			duration: 1.2,
			cycles: 2,
			direction: "cw"
		}
	}, {
		name: "SpinOut",
		params: {
			delay: 0,
			duration: 1.2,
			cycles: 2,
			direction: "cw"
		}
	}, {
		action: "screenIn",
		name: "FlyIn",
		params: {
			delay: .4,
			duration: 1.2,
			direction: "right"
		}
	}, {
		name: "FlyOut",
		params: {
			delay: .4,
			duration: 1.2,
			direction: "right"
		}
	}, {
		action: "screenIn",
		name: "TurnIn",
		params: {
			delay: 0,
			duration: 1.2,
			direction: "right"
		}
	}, {
		name: "TurnOut",
		params: {
			delay: 0,
			duration: 1.2,
			direction: "right"
		}
	}, {
		action: "screenIn",
		name: "ArcIn",
		params: {
			delay: 0,
			duration: 1.2,
			direction: "right"
		}
	}, {
		name: "ArcOut",
		params: {
			delay: 0,
			duration: 1.2,
			direction: "right"
		}
	}, {
		name: "Conceal",
		params: {
			delay: 0,
			duration: 1.2,
			direction: "right"
		}
	}, {
		name: "CollapseOut",
		params: {
			delay: 0,
			duration: 1.2
		}
	}, {
		name: "PopOut",
		params: {
			delay: 0,
			duration: 1.2
		}
	}, {
		action: "screenIn",
		name: "DropIn",
		params: {
			delay: 0,
			duration: 1.2
		}
	}, {
		action: "screenIn",
		name: "FlipIn",
		params: {
			delay: 0,
			duration: 1.2,
			direction: "left"
		}
	}, {
		name: "FlipOut",
		params: {
			delay: 0,
			duration: 1.2,
			direction: "left"
		}
	}, {
		action: "screenIn",
		name: "FoldIn",
		params: {
			delay: 0,
			duration: 1.2,
			direction: "left"
		}
	}, {
		name: "FoldOut",
		params: {
			delay: 0,
			duration: 1.2,
			direction: "left"
		}
	}, {
		action: "screenIn",
		name: "Reveal",
		params: {
			delay: 0,
			duration: 1.2,
			direction: "left"
		}
	}, {
		action: "screenIn",
		name: "SlideIn",
		params: {
			delay: 0,
			duration: 1.2,
			direction: "left"
		}
	}, {
		name: "SlideOut",
		params: {
			delay: 0,
			duration: 3,
			direction: "left"
		}
	}, {
		action: "screenIn",
		name: "BounceIn",
		delay: 0,
		duration: 1.2,
		params: {
			direction: "top left",
			bounce: "medium"
		}
	}, {
		action: "screenIn",
		name: "GlideIn",
		delay: 0,
		duration: 1.2,
		params: {
			angle: 0,
			distance: 150
		}
	}, {
		name: "BounceOut",
		delay: 0,
		duration: 1.2,
		params: {
			direction: "top left",
			bounce: "medium"
		}
	}, {
		name: "GlideOut",
		delay: 0,
		duration: 1.2,
		params: {
			angle: 0,
			distance: 150
		}
	}, {
		action: "modeChange",
		name: "ModesMotion",
		delay: 0,
		duration: .5
	}, {
		action: "modeIn",
		name: "FadeIn",
		params: {
			delay: 0,
			duration: 1.2
		}
	}, {
		action: "modeIn",
		name: "FloatIn",
		params: {
			delay: 0,
			duration: 1.2,
			direction: "right"
		}
	}, {
		action: "modeIn",
		name: "ExpandIn",
		params: {
			delay: 0,
			duration: 1.2,
			direction: "right"
		}
	}, {
		action: "modeIn",
		name: "SpinIn",
		params: {
			delay: 0,
			duration: 1.2,
			cycles: 2,
			direction: "cw"
		}
	}, {
		action: "modeIn",
		name: "FlyIn",
		params: {
			delay: 0,
			duration: 1.2,
			direction: "right"
		}
	}, {
		action: "modeIn",
		name: "TurnIn",
		params: {
			delay: 0,
			duration: 1.2,
			direction: "right"
		}
	}, {
		action: "modeIn",
		name: "ArcIn",
		params: {
			delay: 0,
			duration: 1.2,
			direction: "right"
		}
	}, {
		action: "modeIn",
		name: "DropIn",
		params: {
			delay: 0,
			duration: 1.2
		}
	}, {
		action: "modeIn",
		name: "FlipIn",
		params: {
			delay: 0,
			duration: 1.2,
			direction: "left"
		}
	}, {
		action: "modeIn",
		name: "FoldIn",
		params: {
			delay: 0,
			duration: 1.2,
			direction: "left"
		}
	}, {
		action: "modeIn",
		name: "Reveal",
		params: {
			delay: 0,
			duration: 1.2,
			direction: "left"
		}
	}, {
		action: "modeIn",
		name: "SlideIn",
		params: {
			delay: 0,
			duration: 1.2,
			direction: "left"
		}
	}]
});
define("animations/animationClasses/base/sequence/baseSequence", ["animations/localTweenEngine/localTweenEngine"], function(a) {
	"use strict";
	var b = a.engine;
	var c = a.factory;

	function d(a) {
		return b.timeline(a, [])
	}
	c.registerAnimation("BaseSequence", d)
});
define("animations/animationClasses/base/baseNone", ["animations/localTweenEngine/localTweenEngine"], function(a) {
	"use strict";
	var b = a.engine;
	var c = a.factory;

	function d(a, c, d, e) {
		e.duration = c || 0;
		e.delay = d || 0;
		e.to = {};
		return b.tween(a, e, [])
	}
	c.registerAnimation("BaseNone", d)
});
define("animations/animationClasses/base/baseFade", ["animations/localTweenEngine/localTweenEngine"], function(a) {
	"use strict";
	var b = a.engine;
	var c = a.factory;

	function d(a, c, d, e) {
		e.duration = c || 0;
		e.delay = d || 0;
		e.lazy = !!e.lazy;
		if (e.to) {
			e.to.autoAlpha = e.to.autoAlpha || e.to.opacity || 0;
			delete e.to.opacity
		}
		if (e.from) {
			e.from.autoAlpha = e.from.autoAlpha || e.from.opacity || 0;
			delete e.from.opacity
		}
		return b.tween(a, e, ["opacity", "autoAlpha"])
	}
	c.registerAnimation("BaseFade", d)
});
define("animations/animationClasses/base/basePosition", ["animations/localTweenEngine/localTweenEngine"], function(a) {
	"use strict";
	var b = a.engine;
	var c = a.factory;

	function d(a, c, d, e) {
		e.duration = c || 0;
		e.delay = d || 0;
		return b.tween(a, e, ["left", "top", "x", "y", "z", "bezier"])
	}
	c.registerAnimation("BasePosition", d)
});
define("animations/animationClasses/base/baseScale", ["animations/localTweenEngine/localTweenEngine"], function(a) {
	"use strict";
	var b = a.engine;
	var c = a.factory;

	function d(a, c, d, e) {
		e.duration = c || 0;
		e.delay = d || 0;
		return b.tween(a, e, ["scale", "scaleX", "scaleY"])
	}
	c.registerAnimation("BaseScale", d)
});
define("animations/animationClasses/base/baseSkew", ["animations/localTweenEngine/localTweenEngine"], function(a) {
	"use strict";
	var b = a.engine;
	var c = a.factory;

	function d(a, c, d, e) {
		e.duration = c || 0;
		e.delay = d || 0;
		return b.tween(a, e, ["skewX", "skewY"])
	}
	c.registerAnimation("BaseSkew", d)
});
define("animations/animationClasses/base/baseRotate", ["animations/localTweenEngine/localTweenEngine"], function(a) {
	"use strict";
	var b = a.engine;
	var c = a.factory;

	function d(a, c, d, e) {
		e.duration = c || 0;
		e.delay = d || 0;
		return b.tween(a, e, ["rotation"])
	}
	c.registerAnimation("BaseRotate", d)
});
define("animations/animationClasses/base/baseRotate3D", ["lodash", "animations/localTweenEngine/localTweenEngine"], function(a, b) {
	"use strict";
	var c = b.engine;
	var d = b.factory;

	function e(b) {
		a.forEach(b, function(a) {
			var b = a.getAttribute("data-z-counter");
			b = b ? Number(b) : 0;
			a.setAttribute("data-z-counter", b + 1)
		})
	}

	function f(a, b) {
		b.add(c.set(a, {
			attr: {
				"data-z-counter": "-=1"
			},
			immediateRender: false
		}))
	}

	function g(b, g, h, i) {
		var j = ["rotationX", "rotationY", "rotationZ"];
		b = b.length ? b : [b];
		var k = a.uniq(a.map(b, "parentNode"));
		i = a.cloneDeep(i || {});
		i.duration = g || 0;
		i.delay = h || 0;
		var l = i.perspective;
		delete i.perspective;
		delete i.fallbackFor3D;
		var m = d.sequence();
		e(k);
		m.add(c.set(b, {
			transformPerspective: l
		}), 0).add(c.tween(b, i, j));
		f(k, m);
		return m.get()
	}
	d.registerAnimation("BaseRotate3D", g)
});
define("animations/animationClasses/base/baseClip", ["animations/localTweenEngine/localTweenEngine"], function(a) {
	"use strict";
	var b = a.engine;
	var c = a.factory;

	function d(a) {
		var c = b.getBoundingRect(a);
		var d = b.getBoundingContentRect(a);
		var e = d.top - c.top;
		var f = d.left - c.left;
		var g = d.width + f;
		var h = d.height + e;
		return "rect(" + [e, g, h, f].join("px,") + "px)"
	}

	function e(a, c, e, f) {
		f.duration = c || 0;
		f.delay = e || 0;
		a = a instanceof window.HTMLElement ? [a] : a;
		if (!f.to || !f.to.clip) {
			f.to = f.to || {};
			f.to.clip = d(a[0])
		}
		if (!f.from || !f.from.clip) {
			f.from = f.from || {};
			f.from.clip = d(a[0])
		}
		return b.tween(a, f, ["clip"])
	}
	c.registerAnimation("BaseClip", e)
});
define("animations/animationClasses/base/baseDimensions", ["animations/localTweenEngine/localTweenEngine"], function(a) {
	"use strict";
	var b = a.engine;
	var c = a.factory;

	function d(a, c, d, e) {
		e.duration = c || 0;
		e.delay = d || 0;
		return b.tween(a, e, ["width", "height", "top", "left", "maxWidth", "maxHeight", "minWidth", "minHeight", "bottom", "right", "margin", "padding", "marginTop", "marginBottom", "marginLeft",
			"marginRight", "paddingTop", "paddingBottom", "paddingRight", "paddingLeft", "zIndex"
		])
	}
	c.registerAnimation("BaseDimensions", d)
});
define("animations/animationClasses/base/baseScroll", ["lodash", "animations/localTweenEngine/localTweenEngine"], function(a, b) {
	"use strict";
	var c = b.engine;
	var d = b.factory;

	function e(b, e, f, g) {
		g = g || {};
		g.duration = e || 0;
		g.delay = f || 0;
		g.scrollTo = {
			x: g.x || 0,
			y: g.y || 0,
			autoKill: g.autoKill || false
		};
		delete g.x;
		delete g.y;
		delete g.autoKill;
		b = b instanceof window.HTMLElement || b === window ? [b] : b;
		var h = d.sequence();
		a.forEach(b, function(a) {
			h.add(c.tween(a, g, ["scrollTo", "autoKill"]), 0)
		});
		return h.get()
	}
	d.registerAnimation("BaseScroll", e)
});
define("animations/animationClasses/base/baseAttribute", ["lodash", "animations/localTweenEngine/localTweenEngine"], function(a, b) {
	"use strict";
	var c = b.engine;
	var d = b.factory;

	function e(a, b, d, e) {
		e.duration = b || 0;
		e.delay = d || 0;
		return c.tween(a, e, ["attr"])
	}
	d.registerAnimation("BaseAttribute", e)
});
define("animations/animationClasses/base/baseClear", ["lodash", "animations/localTweenEngine/localTweenEngine"], function(a, b) {
	"use strict";
	var c = b.engine;
	var d = b.factory;
	var e = [{
		domAttr: "data-angle",
		gsapAttr: "rotation"
	}, {
		domAttr: "data-scale",
		gsapAttr: "scale"
	}];

	function f(b, e, f, i) {
		var j, k;
		e = 0;
		b = b.length ? b : [b];
		var l = a.uniq(a.map(b, "parentNode"));
		j = a.defaults({
			duration: e,
			delay: f || 0,
			to: {},
			clearProps: i.props
		}, i);
		delete j.props;
		delete j.parentProps;
		if (i.parentProps) {
			k = a.cloneDeep(j);
			k.delay = 0;
			k.clearProps = i.parentProps
		}
		var m = d.sequence({
			callbacks: {
				onComplete: h.bind(this, b)
			}
		});
		m.add(c.tween(b, j, []));
		if (k) {
			m.add(c.tween(l, k, []))
		}
		g(b, m);
		return m.get()
	}

	function g(b, d) {
		a.forEach(b, function(b) {
			var f = {};
			var g = {
				duration: 0,
				delay: 0,
				immediateRender: false
			};
			a.forEach(e, function(a) {
				var c = b.getAttribute(a.domAttr);
				if (c) {
					f[a.gsapAttr] = c
				}
			});
			if (!a.isEmpty(f)) {
				d.add(c.tween(b, a.assign(f, g), a.keys(f)))
			}
		})
	}

	function h(b) {
		a.forEach(b, function(a) {
			delete a._gsTransform
		})
	}
	d.registerAnimation("BaseClear", f)
});
define("animations/animationClasses/animation/fade", ["lodash", "animations/localTweenEngine/localTweenEngine"], function(a, b) {
	"use strict";
	var c = b.factory;

	function d(b, d, e, f) {
		var g = c.sequence(f);
		var h = a.defaultsDeep({
			ease: "Sine.easeIn",
			to: {
				opacity: 1
			}
		}, f);
		g.add(c.animate("BaseFade", b, d, e, h));
		return g.get()
	}
	c.registerAnimation("Fade", d)
});
define("animations/animationClasses/animation/position", ["lodash", "animations/localTweenEngine/localTweenEngine"], function(a, b) {
	"use strict";
	var c = b.factory;

	function d(b, d, e, f) {
		var g = c.sequence(f);
		var h = a.defaultsDeep({
			ease: "Sine.easeIn"
		}, f);
		g.add(c.animate("BasePosition", b, d, e, h));
		return g.get()
	}
	c.registerAnimation("Position", d)
});
define("animations/animationClasses/animation/scale", ["lodash", "animations/localTweenEngine/localTweenEngine"], function(a, b) {
	"use strict";
	var c = b.factory;

	function d(b, d, e, f) {
		var g = c.sequence(f);
		var h = a.defaultsDeep({
			ease: "Sine.easeIn"
		}, f);
		g.add(c.animate("BaseScale", b, d, e, h));
		return g.get()
	}
	c.registerAnimation("Scale", d)
});
define("animations/animationClasses/animation/rotate", ["lodash", "animations/localTweenEngine/localTweenEngine"], function(a, b) {
	"use strict";
	var c = b.factory;

	function d(b, d, e, f) {
		var g = c.sequence(f);
		var h = a.defaultsDeep({
			ease: "Sine.easeIn",
			to: {
				rotation: "360deg"
			}
		}, f);
		g.add(c.animate("BaseRotate", b, d, e, h));
		return g.get()
	}
	c.registerAnimation("Rotate", d)
});
define("animations/animationClasses/animation/in/arcIn", ["lodash", "animations/localTweenEngine/localTweenEngine"], function(a, b) {
	"use strict";
	var c = b.engine;
	var d = b.factory;
	var e = {
		pseudoRight: {
			angleX: "180",
			angleY: "0",
			idx: 0
		},
		right: {
			angleX: "0",
			angleY: "180",
			idx: 1
		},
		pseudoLeft: {
			angleX: "-180",
			angleY: "0",
			idx: 2
		},
		left: {
			angleX: "0",
			angleY: "-180",
			idx: 3
		}
	};

	function f(a, b) {
		var c = ["pseudoRight", "right", "pseudoLeft", "left"];
		var d = Math.round(b / 90);
		a = (a + (c.length - 1) * d) % c.length;
		return c[a]
	}

	function g(a) {
		return {
			rotationX: e[a].angleX,
			rotationY: e[a].angleY
		}
	}

	function h(a) {
		return "50% 50% " + -1.5 * a.offsetWidth
	}

	function i(b, i, j, k) {
		b = b instanceof window.HTMLElement ? [b] : b;
		var l = k.direction || "left";
		delete k.direction;
		var m = d.sequence(k);
		m.add(d.animate("BaseFade", b, i, j, {
			from: {
				opacity: 0
			},
			to: {
				opacity: 1
			},
			ease: "Sine.easeInOut"
		}));
		a.forEach(b, function(a) {
			var b = a.getAttribute("data-angle") || 0;
			var k = f(e[l].idx, b);
			var n = g(k);
			var o = h(a);
			m.add(c.set(a, {
				transformOrigin: o
			}), 0).add(d.animate("BaseRotate3D", a, i, j, {
				from: n,
				perspective: 200,
				fallbackFor3D: false,
				ease: "Sine.easeInOut"
			}), 0)
		});
		return m.get()
	}
	i.properties = {
		hideOnStart: true
	};
	d.registerAnimation("ArcIn", i)
});
define("animations/animationClasses/animation/in/dropIn", ["animations/localTweenEngine/localTweenEngine"], function(a) {
	"use strict";
	var b = a.factory;

	function c(a, c, d, e) {
		var f = b.sequence(e);
		f.add([b.animate("BaseFade", a, c * .25, d, {
			from: {
				opacity: 0
			},
			to: {
				opacity: 1
			},
			ease: "Sine.easeIn"
		}), b.animate("BaseScale", a, c, d, {
			from: {
				scale: 6
			},
			ease: "Sine.easeIn"
		})]);
		return f.get()
	}
	c.properties = {
		hideOnStart: true
	};
	b.registerAnimation("DropIn", c)
});
define("animations/animationClasses/animation/in/expandIn", ["animations/localTweenEngine/localTweenEngine"], function(a) {
	"use strict";
	var b = a.factory;

	function c(a, c, d, e) {
		var f = b.sequence(e);
		f.add([b.animate("BaseFade", a, c, d, {
			from: {
				opacity: 0
			},
			to: {
				opacity: 1
			},
			ease: "Cubic.easeIn"
		}), b.animate("BaseScale", a, c, d, {
			from: {
				scale: 0
			},
			ease: "Sine.easeIn"
		})]);
		return f.get()
	}
	c.properties = {
		hideOnStart: true
	};
	b.registerAnimation("ExpandIn", c)
});
define("animations/animationClasses/animation/in/fadeIn", ["animations/localTweenEngine/localTweenEngine"], function(a) {
	"use strict";
	var b = a.factory;

	function c(a, c, d, e) {
		var f = b.sequence(e);
		f.add(b.animate("BaseFade", a, c, d, {
			from: {
				opacity: 0
			},
			to: {
				opacity: 1
			},
			ease: "Cubic.easeIn"
		}));
		return f.get()
	}
	c.properties = {
		hideOnStart: true
	};
	b.registerAnimation("FadeIn", c)
});
define("animations/animationClasses/animation/in/flipIn", ["lodash", "animations/localTweenEngine/localTweenEngine"], function(a, b) {
	"use strict";
	var c = b.factory;
	var d = {
		top: {
			angleX: "90",
			angleY: "0",
			idx: 0
		},
		right: {
			angleX: "0",
			angleY: "90",
			idx: 1
		},
		bottom: {
			angleX: "-90",
			angleY: "0",
			idx: 2
		},
		left: {
			angleX: "0",
			angleY: "-90",
			idx: 3
		}
	};

	function e(a, b) {
		var c = ["top", "right", "bottom", "left"];
		var d = Math.round(b / 90);
		a = (a + (c.length - 1) * d) % c.length;
		return c[a]
	}

	function f(b, f, g, h) {
		b = b instanceof window.HTMLElement ? [b] : b;
		var i = h.direction || "left";
		delete h.direction;
		var j = c.sequence(h);
		j.add(c.animate("BaseFade", b, f * .25, g, {
			from: {
				opacity: 0
			},
			to: {
				opacity: 1
			},
			ease: "Strong.easeIn"
		}));
		a.forEach(b, function(a) {
			var b = a.getAttribute("data-angle") || 0;
			var h = e(d[i].idx, b);
			var k = {
				rotationX: d[h].angleX,
				rotationY: d[h].angleY
			};
			j.add(c.animate("BaseRotate3D", a, f * .75, g, {
				from: k,
				perspective: 800,
				fallbackFor3D: true,
				ease: "Strong.easeIn"
			}), 0)
		});
		return j.get()
	}
	f.properties = {
		hideOnStart: true
	};
	c.registerAnimation("FlipIn", f)
});
define("animations/animationClasses/animation/in/floatIn", ["lodash", "animations/localTweenEngine/localTweenEngine"], function(a, b) {
	"use strict";
	var c = b.engine;
	var d = b.factory;
	var e = {
		top: {
			dx: "0",
			dy: "-1",
			distance: "60"
		},
		right: {
			dx: "1",
			dy: "0",
			distance: "120"
		},
		bottom: {
			dx: "0",
			dy: "1",
			distance: "60"
		},
		left: {
			dx: "-1",
			dy: "0",
			distance: "120"
		}
	};

	function f(b, f, g, h) {
		b = b instanceof window.HTMLElement ? [b] : b;
		var i = h.direction || "right";
		delete h.direction;
		var j = e[i];
		var k = {
			width: window.innerWidth,
			height: window.innerHeight
		};
		var l = d.sequence(h);
		l.add(d.animate("BaseFade", b, f, g, {
			from: {
				opacity: 0
			},
			to: {
				opacity: 1
			},
			ease: "Cubic.easeIn"
		}));
		a.forEach(b, function(a) {
			var b = c.getBoundingRect(a);
			var e;
			var h = j.dy * j.distance;
			if (j.dx > 0) {
				e = j.dx * Math.max(0, Math.min(k.width - b.right, j.distance))
			} else {
				e = j.dx * Math.max(0, Math.min(b.left, j.distance))
			}
			l.add(d.animate("BasePosition", a, f, g, {
				from: {
					x: e,
					y: h
				},
				ease: "Sine.easeOut"
			}), 0)
		});
		return l.get()
	}
	f.properties = {
		hideOnStart: true
	};
	d.registerAnimation("FloatIn", f)
});
define("animations/animationClasses/animation/in/flyIn", ["lodash", "animations/localTweenEngine/localTweenEngine"], function(a, b) {
	"use strict";
	var c = b.engine;
	var d = b.factory;
	var e = {
		top: {
			dy: "-1"
		},
		right: {
			dx: "1"
		},
		bottom: {
			dy: "1"
		},
		left: {
			dx: "-1"
		}
	};

	function f(b) {
		var c = {
			dx: 0,
			dy: 0
		};
		a.forEach(b, function(b) {
			if (e[b]) {
				a.assign(c, e[b])
			}
		}, this);
		return c
	}

	function g(b, e, g, h) {
		b = b instanceof window.HTMLElement ? [b] : b;
		var i = h.direction || "right";
		delete h.direction;
		var j = f(i.split(" "));
		var k = {
			width: window.innerWidth,
			height: window.innerHeight
		};
		var l = d.sequence(h);
		l.add(d.animate("BaseFade", b, e, g, {
			from: {
				opacity: 0
			},
			to: {
				opacity: 1
			},
			ease: "Linear.easeIn"
		}));
		a.forEach(b, function(a) {
			var b = c.getBoundingRect(a);
			var f = j.dx > 0 ? k.width - b.right : j.dx * b.left;
			var h = j.dy > 0 ? k.height - b.top : j.dy * b.bottom;
			l.add(d.animate("BasePosition", a, e, g, {
				from: {
					x: f,
					y: h
				},
				ease: "Sine.easeOut"
			}), 0)
		});
		return l.get()
	}
	g.properties = {
		hideOnStart: true
	};
	d.registerAnimation("FlyIn", g)
});
define("animations/animationClasses/animation/in/foldIn", ["lodash", "animations/localTweenEngine/localTweenEngine"], function(a, b) {
	"use strict";
	var c = b.engine;
	var d = b.factory;
	var e = {
		top: {
			angleX: "-90",
			angleY: "0",
			origin: {
				x: "50%",
				y: "0"
			},
			idx: 0
		},
		right: {
			angleX: "0",
			angleY: "-90",
			origin: {
				x: "100%",
				y: "50%"
			},
			idx: 1
		},
		bottom: {
			angleX: "90",
			angleY: "0",
			origin: {
				x: "50%",
				y: "100%"
			},
			idx: 2
		},
		left: {
			angleX: "0",
			angleY: "90",
			origin: {
				x: "0",
				y: "50%"
			},
			idx: 3
		}
	};

	function f(a, b, c) {
		var d = {
			x: 0,
			y: 0
		};
		var e = b.width / 2;
		var f = b.height / 2;
		var g = b.width * parseInt(a.x, 10) / 100;
		var h = b.height * parseInt(a.y, 10) / 100;
		var i = e - e * Math.cos(c) + f * Math.sin(c);
		var j = f - e * Math.sin(c) - f * Math.cos(c);
		var k = g - g * Math.cos(c) + h * Math.sin(c);
		var l = h - g * Math.sin(c) - h * Math.cos(c);
		d.x = i - k;
		d.y = j - l;
		return d
	}

	function g(a, b) {
		var c = ["top", "right", "bottom", "left"];
		var d = Math.round(b / 90);
		a = (a + (c.length - 1) * d) % c.length;
		return c[a]
	}

	function h(a, b, c) {
		var d = {
			x: 0,
			y: 0
		};
		d.x = b.left + b.width * (parseInt(c.x, 10) / 100) - a.left;
		d.y = b.top + b.height * (parseInt(c.y, 10) / 100) - a.top;
		return d.x + "px" + " " + d.y + "px"
	}

	function i(b, i, j, k) {
		b = b instanceof window.HTMLElement ? [b] : b;
		var l = k.direction || "left";
		delete k.direction;
		var m = d.sequence(k);
		m.add(d.animate("BaseFade", b, i * .25, j, {
			from: {
				opacity: 0
			},
			to: {
				opacity: 1
			},
			ease: "Cubic.easeInOut"
		}));
		a.forEach(b, function(a) {
			var b = a.getAttribute("data-angle") || 0;
			var k = b * Math.PI / 180;
			var n = g(e[l].idx, b);
			var o = c.getBoundingRect(a);
			var p = c.getBoundingContentRect(a);
			var q = f(e[n].origin, p, k);
			var r = h(o, p, e[n].origin);
			var s = {
				rotationX: e[n].angleX,
				rotationY: e[n].angleY
			};
			m.add([d.animate("BasePosition", a, 0, j, {
				to: {
					transformOrigin: r,
					x: q.x,
					y: q.y
				}
			}), d.animate("BaseRotate3D", a, i, j, {
				from: s,
				perspective: 800,
				fallbackFor3D: true,
				ease: "Cubic.easeInOut"
			})], 0)
		});
		return m.get()
	}
	i.properties = {
		hideOnStart: true
	};
	d.registerAnimation("FoldIn", i)
});
define("animations/animationClasses/animation/in/reveal", ["lodash", "animations/localTweenEngine/localTweenEngine"], function(a, b) {
	"use strict";
	var c = b.engine;
	var d = b.factory;
	var e = {
		top: {
			idx: 0
		},
		right: {
			idx: 1
		},
		bottom: {
			idx: 2
		},
		left: {
			idx: 3
		}
	};

	function f(a, b) {
		var c = ["top", "right", "bottom", "left"];
		var d = Math.round(b / 90);
		a = (a + (c.length - 1) * d) % c.length;
		return c[a]
	}

	function g(a, b) {
		var d = c.getBoundingRect(a);
		var e = c.getBoundingContentRect(a);
		var f = e.top - d.top;
		var g = e.left - d.left;
		var h = e.width + g;
		var i = e.height + f;
		var j = {
			top: [f, h, f, g],
			right: [f, h, i, h],
			center: [(i + f) / 2, (h + g) / 2, (i + f) / 2, (h + g) / 2],
			bottom: [i, h, i, g],
			left: [f, g, i, g]
		};
		return {
			clip: "rect(" + j[b].join("px,") + "px)"
		}
	}

	function h(b, c, h, i) {
		b = b instanceof window.HTMLElement ? [b] : b;
		var j = i.direction || "left";
		delete i.direction;
		var k = d.sequence(i);
		k.add(d.animate("BaseFade", b, c * .25, h, {
			from: {
				opacity: 0
			},
			to: {
				opacity: 1
			},
			ease: "Cubic.easeInOut"
		}));
		a.forEach(b, function(a) {
			var b = a.getAttribute("data-angle") || 0;
			var i = j !== "center" ? f(e[j].idx, b) : j;
			var l = g(a, i);
			k.add(d.animate("BaseClip", a, c, h, {
				from: l,
				ease: "Cubic.easeInOut"
			}), 0)
		});
		return k.get()
	}
	h.properties = {
		hideOnStart: true
	};
	d.registerAnimation("Reveal", h)
});
define("animations/animationClasses/animation/in/slideIn", ["lodash", "animations/localTweenEngine/localTweenEngine"], function(a, b) {
	"use strict";
	var c = b.engine;
	var d = b.factory;
	var e = {
		top: {
			dx: 0,
			dy: -1,
			idx: 0
		},
		right: {
			dx: 1,
			dy: 0,
			idx: 1
		},
		bottom: {
			dx: 0,
			dy: 1,
			idx: 2
		},
		left: {
			dx: -1,
			dy: 0,
			idx: 3
		}
	};

	function f(a, b) {
		var c = ["top", "right", "bottom", "left"];
		var d = Math.round(b / 90);
		a = (a + (c.length - 1) * d) % c.length;
		return c[a]
	}

	function g(a, b, c) {
		var d = b.top - a.top;
		var e = b.left - a.left;
		var f = b.width + e;
		var g = b.height + d;
		var h = {
			top: [g, f, g, e],
			right: [d, e, g, e],
			bottom: [d, f, d, e],
			left: [d, f, g, f]
		};
		return {
			clip: "rect(" + h[c].join("px,") + "px)"
		}
	}

	function h(a, b, c) {
		var d = a.width;
		var e = a.height;
		var f = b.dy * e * Math.sin(-c) + b.dx * d * Math.cos(c);
		var g = b.dy * e * Math.cos(-c) + b.dx * d * Math.sin(c);
		return {
			x: f,
			y: g
		}
	}

	function i(b, i, j, k) {
		b = b instanceof window.HTMLElement ? [b] : b;
		var l = k.direction || "left";
		delete k.direction;
		var m = d.sequence(k);
		m.add(d.animate("BaseFade", b, i * .25, j, {
			from: {
				opacity: 0
			},
			to: {
				opacity: 1
			},
			ease: "Cubic.easeInOut"
		}));
		a.forEach(b, function(a) {
			var b = c.getBoundingRect(a);
			var k = c.getBoundingContentRect(a);
			var n = a.getAttribute("data-angle") || 0;
			var o = n * Math.PI / 180;
			var p = f(e[l].idx, n);
			var q = g(b, k, p);
			var r = h(k, e[p], o);
			m.add([d.animate("BaseClip", a, i, j, {
				from: q,
				ease: "Cubic.easeInOut"
			}), d.animate("BasePosition", a, i, j, {
				from: r,
				ease: "Cubic.easeInOut"
			})], 0)
		});
		return m.get()
	}
	i.properties = {
		hideOnStart: true
	};
	d.registerAnimation("SlideIn", i)
});
define("animations/animationClasses/animation/in/spinIn", ["lodash", "animations/localTweenEngine/localTweenEngine"], function(a, b) {
	"use strict";
	var c = b.factory;
	var d = {
		cw: {
			direction: "-1"
		},
		ccw: {
			direction: "1"
		}
	};

	function e(b, e, f, g) {
		var h = g.direction || "cw";
		var i = g.cycles || 5;
		delete g.direction;
		delete g.cycles;
		var j = a.clone(d[h]);
		var k = (j.direction > 0 ? "+=" : "-=") + 360 * i;
		var l = c.sequence(g);
		l.add([c.animate("BaseFade", b, e, f, {
			from: {
				opacity: 0
			},
			to: {
				opacity: 1
			},
			ease: "Sine.easeIn"
		}), c.animate("BaseScale", b, e, f, {
			from: {
				scale: 0
			},
			ease: "Sine.easeOut"
		}), c.animate("BaseRotate", b, e, f, {
			from: {
				rotation: k
			},
			ease: "Sine.easeIn"
		})]);
		return l.get()
	}
	e.properties = {
		hideOnStart: true
	};
	c.registerAnimation("SpinIn", e)
});
define("animations/animationClasses/animation/in/turnIn", ["lodash", "animations/localTweenEngine/localTweenEngine"], function(a, b) {
	"use strict";
	var c = b.engine;
	var d = b.factory;
	var e = {
		left: {
			dx: "-1",
			angle: "90"
		},
		right: {
			dx: "1",
			angle: "90"
		}
	};

	function f(b, f, g, h) {
		var i = h.direction || "right";
		delete h.direction;
		var j = e[i];
		var k = {
			width: window.innerWidth,
			height: window.innerHeight
		};
		var l = d.sequence(h);
		l.add(d.animate("BaseFade", b, f, g, {
			from: {
				opacity: 0
			},
			to: {
				opacity: 1
			},
			ease: "Linear.easeIn"
		}));
		a.forEach(b, function(a) {
			var b = c.getBoundingRect(a);
			var e = j.dx > 0 ? k.width - b.right : j.dx * b.left;
			var h = Math.min(-1.5 * b.height, Math.max(-300, -5.5 * b.height));
			var i = (j.dx > 0 ? "+=" : "-=") + j.angle;
			var m = [{
				x: j.dx * b.width,
				y: h
			}, {
				x: e,
				y: h
			}];
			l.add([d.animate("BasePosition", a, f, g, {
				from: {
					bezier: {
						values: m,
						type: "soft"
					}
				},
				ease: "Sine.easeOut",
				immediateRender: false
			}), d.animate("BaseRotate", a, f, g, {
				from: {
					rotation: i
				},
				ease: "Sine.easeOut",
				immediateRender: false
			})], 0)
		});
		return l.get()
	}
	f.properties = {
		hideOnStart: true
	};
	d.registerAnimation("TurnIn", f)
});
define("animations/animationClasses/animation/in/bounceIn", ["lodash", "animations/localTweenEngine/localTweenEngine"], function(a, b) {
	"use strict";
	var c = b.engine;
	var d = b.factory;
	var e = {
		"top left": {
			y: -1.1,
			x: -1.1,
			idx: 0
		},
		"top right": {
			y: -1.1,
			x: 1.1,
			idx: 1
		},
		"bottom right": {
			y: 1.1,
			x: 1.1,
			idx: 2
		},
		"bottom left": {
			y: 1.1,
			x: -1.1,
			idx: 3
		},
		center: {
			y: 0,
			x: 0,
			idx: -1
		}
	};
	var f = {
		soft: [.6, .25],
		medium: [.9, .22],
		hard: [1.3, .2]
	};

	function g(a, b, c) {
		c = c * Math.PI / 180;
		return {
			x: a * Math.cos(c) - b * Math.sin(c),
			y: a * Math.sin(c) + b * Math.cos(c)
		}
	}

	function h(a, b) {
		var c = ["top left", "top right", "bottom right", "bottom left"];
		var d = Math.round(b / 90);
		a = (a + (c.length - 1) * d) % c.length;
		return c[a]
	}

	function i(b, i, j, k) {
		b = b instanceof window.HTMLElement ? [b] : b;
		var l = e[k.direction || "top left"];
		var m = k.bounce || "medium";
		var n = i * .3;
		var o = i - n;
		k = a.omit(k, ["direction", "bounce"]);
		var p = d.sequence(k);
		p.add([d.animate("BaseFade", b, n, j, {
			from: {
				opacity: 0
			},
			to: {
				opacity: 1
			},
			ease: "Cubic.easeIn"
		})]);
		a.forEach(b, function(a) {
			var b = c.getElementRect(a);
			var i = a.getAttribute("data-angle") || 0;
			var k = l;
			if (l.idx >= 0 && i > 0) {
				k = e[h(l.idx, i)]
			}
			var q = g(b.width / 2 * k.x, b.height / 2 * k.y, i);
			var r = g(b.width / 3 * k.x, b.height / 3 * k.y, i);
			p.add([d.animate("BasePosition", a, n, j, {
				from: {
					x: q.x,
					y: q.y
				},
				to: {
					x: r.x,
					y: r.y
				},
				ease: "Expo.easeIn"
			}), d.animate("BaseScale", a, n, j, {
				from: {
					scale: 0
				},
				to: {
					scale: .3
				},
				ease: "Expo.easeIn"
			})], 0);
			p.add([d.animate("BasePosition", a, o, 0, {
				to: {
					x: 0,
					y: 0
				},
				ease: "Elastic.easeOut",
				easeParams: f[m]
			}), d.animate("BaseScale", a, o, 0, {
				to: {
					scale: 1
				},
				ease: "Elastic.easeOut",
				easeParams: f[m]
			})])
		});
		return p.get()
	}
	i.properties = {
		hideOnStart: true
	};
	d.registerAnimation("BounceIn", i)
});
define("animations/animationClasses/animation/in/glideIn", ["lodash", "animations/localTweenEngine/localTweenEngine"], function(a, b) {
	"use strict";
	var c = b.factory;

	function d(b, d, e, f) {
		b = b instanceof window.HTMLElement ? [b] : b;
		var g = (f.angle || 0) * Math.PI / 180;
		var h = f.distance || 0;
		var i = Math.sin(g) * h;
		var j = Math.cos(g) * h * -1;
		var k = 0;
		f = a.omit(f, ["angle", "distance"]);
		var l = c.sequence(f);
		l.add([c.animate("BaseFade", b, k, 0, {
			from: {
				opacity: 0
			},
			to: {
				opacity: 1
			},
			ease: "Sine.easeIn"
		}), c.animate("BasePosition", b, d, e, {
			from: {
				x: i,
				y: j
			},
			ease: "Sine.easeInOut"
		})], 0);
		return l.get()
	}
	d.properties = {
		hideOnStart: true
	};
	c.registerAnimation("GlideIn", d)
});
define("animations/animationClasses/animation/out/arcOut", ["lodash", "animations/localTweenEngine/localTweenEngine"], function(a, b) {
	"use strict";
	var c = b.engine;
	var d = b.factory;
	var e = {
		pseudoRight: {
			angleX: "180",
			angleY: "0",
			idx: 0
		},
		right: {
			angleX: "0",
			angleY: "180",
			idx: 1
		},
		pseudoLeft: {
			angleX: "-180",
			angleY: "0",
			idx: 2
		},
		left: {
			angleX: "0",
			angleY: "-180",
			idx: 3
		}
	};

	function f(a, b) {
		var c = ["pseudoRight", "right", "pseudoLeft", "left"];
		var d = Math.round(b / 90);
		a = (a + (c.length - 1) * d) % c.length;
		return c[a]
	}

	function g(a) {
		return {
			rotationX: e[a].angleX,
			rotationY: e[a].angleY
		}
	}

	function h(a) {
		return "50% 50% " + -1.5 * a.offsetWidth
	}

	function i(b, i, j, k) {
		b = b instanceof window.HTMLElement ? [b] : b;
		var l = k.direction || "left";
		delete k.direction;
		var m = d.sequence(k);
		m.add(d.animate("BaseFade", b, i, j, {
			from: {
				opacity: 1
			},
			to: {
				opacity: 0
			},
			ease: "Sine.easeInOut"
		}));
		a.forEach(b, function(a) {
			var b = a.getAttribute("data-angle") || 0;
			var k = f(e[l].idx, b);
			var n = g(k);
			var o = h(a);
			m.add(c.set(a, {
				transformOrigin: o
			}), 0).add(d.animate("BaseRotate3D", a, i, j, {
				to: n,
				perspective: 200,
				fallbackFor3D: false,
				ease: "Sine.easeInOut"
			}), 0)
		});
		return m.get()
	}
	i.properties = {
		hideOnStart: false
	};
	d.registerAnimation("ArcOut", i)
});
define("animations/animationClasses/animation/out/popOut", ["animations/localTweenEngine/localTweenEngine"], function(a) {
	"use strict";
	var b = a.factory;

	function c(a, c, d, e) {
		var f = b.sequence(e);
		f.add([b.animate("BaseFade", a, c * .75, d + c * .25, {
			from: {
				opacity: 1
			},
			to: {
				opacity: 0
			},
			ease: "Sine.easeOut"
		}), b.animate("BaseScale", a, c, d, {
			to: {
				scale: 6
			},
			ease: "Sine.easeOut"
		})]);
		return f.get()
	}
	c.properties = {
		hideOnStart: false
	};
	b.registerAnimation("PopOut", c)
});
define("animations/animationClasses/animation/out/collapseOut", ["animations/localTweenEngine/localTweenEngine"], function(a) {
	"use strict";
	var b = a.factory;

	function c(a, c, d, e) {
		var f = b.sequence(e);
		f.add([b.animate("BaseFade", a, c, d, {
			from: {
				opacity: 1
			},
			to: {
				opacity: 0
			},
			ease: "Cubic.easeOut"
		}), b.animate("BaseScale", a, c, d, {
			to: {
				scale: 0
			},
			ease: "Sine.easeOut"
		})]);
		return f.get()
	}
	c.properties = {
		hideOnStart: false
	};
	b.registerAnimation("CollapseOut", c)
});
define("animations/animationClasses/animation/out/fadeOut", ["animations/localTweenEngine/localTweenEngine"], function(a) {
	"use strict";
	var b = a.factory;

	function c(a, c, d, e) {
		var f = b.sequence(e);
		f.add(b.animate("BaseFade", a, c, d, {
			to: {
				opacity: 0
			},
			ease: "Cubic.easeIn"
		}));
		return f.get()
	}
	c.properties = {
		hideOnStart: false
	};
	b.registerAnimation("FadeOut", c)
});
define("animations/animationClasses/animation/out/flipOut", ["lodash", "animations/localTweenEngine/localTweenEngine"], function(a, b) {
	"use strict";
	var c = b.factory;
	var d = {
		top: {
			angleX: "90",
			angleY: "0",
			idx: 0
		},
		right: {
			angleX: "0",
			angleY: "90",
			idx: 1
		},
		bottom: {
			angleX: "-90",
			angleY: "0",
			idx: 2
		},
		left: {
			angleX: "0",
			angleY: "-90",
			idx: 3
		}
	};

	function e(a, b) {
		var c = ["top", "right", "bottom", "left"];
		var d = Math.round(b / 90);
		a = (a + (c.length - 1) * d) % c.length;
		return c[a]
	}

	function f(b, f, g, h) {
		b = b instanceof window.HTMLElement ? [b] : b;
		var i = h.direction || "left";
		delete h.direction;
		var j = c.sequence(h);
		j.add(c.animate("BaseFade", b, f * .75, g + f * .25, {
			from: {
				opacity: 1
			},
			to: {
				opacity: 0
			},
			ease: "Sine.easeOut"
		}));
		a.forEach(b, function(a) {
			var b = a.getAttribute("data-angle") || 0;
			var h = e(d[i].idx, b);
			var k = {
				rotationX: d[h].angleX,
				rotationY: d[h].angleY
			};
			j.add(c.animate("BaseRotate3D", a, f * .75, g, {
				to: k,
				perspective: 800,
				fallbackFor3D: true,
				ease: "Strong.easeOut"
			}), 0)
		});
		return j.get()
	}
	f.properties = {
		hideOnStart: false
	};
	c.registerAnimation("FlipOut", f)
});
define("animations/animationClasses/animation/out/floatOut", ["lodash", "animations/localTweenEngine/localTweenEngine"], function(a, b) {
	"use strict";
	var c = b.engine;
	var d = b.factory;
	var e = {
		top: {
			dx: "0",
			dy: "-1",
			distance: "60"
		},
		right: {
			dx: "1",
			dy: "0",
			distance: "120"
		},
		bottom: {
			dx: "0",
			dy: "1",
			distance: "60"
		},
		left: {
			dx: "-1",
			dy: "0",
			distance: "120"
		}
	};

	function f(b, f, g, h) {
		b = b instanceof window.HTMLElement ? [b] : b;
		var i = h.direction || "right";
		delete h.direction;
		var j = e[i];
		var k = {
			width: window.innerWidth,
			height: window.innerHeight
		};
		var l = d.sequence(h);
		l.add(d.animate("BaseFade", b, f, g, {
			from: {
				opacity: 1
			},
			to: {
				opacity: 0
			},
			ease: "Cubic.easeOut"
		}));
		a.forEach(b, function(a) {
			var b = c.getBoundingRect(a);
			var e;
			var h = j.dy * j.distance;
			if (j.dx > 0) {
				e = j.dx * Math.max(0, Math.min(k.width - b.right, j.distance))
			} else {
				e = j.dx * Math.max(0, Math.min(b.left, j.distance))
			}
			l.add(d.animate("BasePosition", a, f, g, {
				to: {
					x: e,
					y: h
				},
				ease: "Sine.easeIn"
			}), 0)
		});
		return l.get()
	}
	f.properties = {
		hideOnStart: false
	};
	d.registerAnimation("FloatOut", f)
});
define("animations/animationClasses/animation/out/flyOut", ["lodash", "animations/localTweenEngine/localTweenEngine"], function(a, b) {
	"use strict";
	var c = b.engine;
	var d = b.factory;
	var e = {
		top: {
			dy: "-1"
		},
		right: {
			dx: "1"
		},
		bottom: {
			dy: "1"
		},
		left: {
			dx: "-1"
		}
	};

	function f(b) {
		var c = {
			dx: 0,
			dy: 0
		};
		a.forEach(b, function(b) {
			if (e[b]) {
				a.assign(c, e[b])
			}
		}, this);
		return c
	}

	function g(b, e, g, h) {
		b = b instanceof window.HTMLElement ? [b] : b;
		var i = h.direction || "right";
		delete h.direction;
		var j = f(i.split(" "));
		var k = {
			width: window.innerWidth,
			height: window.innerHeight
		};
		var l = d.sequence(h);
		l.add(d.animate("BaseFade", b, e, g, {
			from: {
				opacity: 1
			},
			to: {
				opacity: 0
			},
			ease: "Linear.easeIn"
		}));
		a.forEach(b, function(a) {
			var b = c.getBoundingRect(a);
			var f = j.dx > 0 ? k.width - b.right : j.dx * b.left;
			var h = j.dy > 0 ? k.height - b.top : j.dy * b.bottom;
			l.add(d.animate("BasePosition", a, e, g, {
				to: {
					x: f,
					y: h
				},
				ease: "Sine.easeIn"
			}), 0)
		});
		return l.get()
	}
	g.properties = {
		hideOnStart: false
	};
	d.registerAnimation("FlyOut", g)
});
define("animations/animationClasses/animation/out/foldOut", ["lodash", "animations/localTweenEngine/localTweenEngine"], function(a, b) {
	"use strict";
	var c = b.engine;
	var d = b.factory;
	var e = {
		top: {
			angleX: "-90",
			angleY: "0",
			origin: {
				x: "50%",
				y: "0"
			},
			idx: 0
		},
		right: {
			angleX: "0",
			angleY: "-90",
			origin: {
				x: "100%",
				y: "50%"
			},
			idx: 1
		},
		bottom: {
			angleX: "90",
			angleY: "0",
			origin: {
				x: "50%",
				y: "100%"
			},
			idx: 2
		},
		left: {
			angleX: "0",
			angleY: "90",
			origin: {
				x: "0",
				y: "50%"
			},
			idx: 3
		}
	};

	function f(a, b, c) {
		var d = {
			x: 0,
			y: 0
		};
		var e = b.width / 2;
		var f = b.height / 2;
		var g = b.width * parseInt(a.x, 10) / 100;
		var h = b.height * parseInt(a.y, 10) / 100;
		var i = e - e * Math.cos(c) + f * Math.sin(c);
		var j = f - e * Math.sin(c) - f * Math.cos(c);
		var k = g - g * Math.cos(c) + h * Math.sin(c);
		var l = h - g * Math.sin(c) - h * Math.cos(c);
		d.x = i - k;
		d.y = j - l;
		return d
	}

	function g(a, b) {
		var c = ["top", "right", "bottom", "left"];
		var d = Math.round(b / 90);
		a = (a + (c.length - 1) * d) % c.length;
		return c[a]
	}

	function h(a, b, c) {
		var d = {
			x: 0,
			y: 0
		};
		d.x = b.left + b.width * (parseInt(c.x, 10) / 100) - a.left;
		d.y = b.top + b.height * (parseInt(c.y, 10) / 100) - a.top;
		return d.x + "px" + " " + d.y + "px"
	}

	function i(b, i, j, k) {
		b = b instanceof window.HTMLElement ? [b] : b;
		var l = k.direction || "left";
		delete k.direction;
		var m = d.sequence(k);
		m.add(d.animate("BaseFade", b, i * .75, j + i * .25, {
			from: {
				opacity: 1
			},
			to: {
				opacity: 0
			},
			ease: "Sine.easeInOut"
		}));
		a.forEach(b, function(a) {
			var b = a.getAttribute("data-angle") || 0;
			var k = b * Math.PI / 180;
			var n = g(e[l].idx, b);
			var o = c.getBoundingRect(a);
			var p = c.getBoundingContentRect(a);
			var q = f(e[n].origin, p, k);
			var r = h(o, p, e[n].origin);
			var s = {
				rotationX: e[n].angleX,
				rotationY: e[n].angleY
			};
			m.add([d.animate("BasePosition", a, 0, j, {
				from: {
					transformOrigin: r,
					x: q.x,
					y: q.y
				}
			}), d.animate("BaseRotate3D", a, i, j, {
				to: s,
				perspective: 800,
				fallbackFor3D: true,
				ease: "Cubic.easeInOut"
			})], 0)
		});
		return m.get()
	}
	i.properties = {
		hideOnStart: false
	};
	d.registerAnimation("FoldOut", i)
});
define("animations/animationClasses/animation/out/conceal", ["lodash", "animations/localTweenEngine/localTweenEngine"], function(a, b) {
	"use strict";
	var c = b.engine;
	var d = b.factory;
	var e = {
		top: {
			idx: 0
		},
		right: {
			idx: 1
		},
		bottom: {
			idx: 2
		},
		left: {
			idx: 3
		}
	};

	function f(a, b) {
		var c = ["top", "right", "bottom", "left"];
		var d = Math.round(b / 90);
		a = (a + (c.length - 1) * d) % c.length;
		return c[a]
	}

	function g(a, b) {
		var d = c.getBoundingRect(a);
		var e = c.getBoundingContentRect(a);
		var f = e.top - d.top;
		var g = e.left - d.left;
		var h = e.width + g;
		var i = e.height + f;
		var j = {
			top: [f, h, f, g],
			right: [f, h, i, h],
			center: [(i + f) / 2, (h + g) / 2, (i + f) / 2, (h + g) / 2],
			bottom: [i, h, i, g],
			left: [f, g, i, g]
		};
		return {
			clip: "rect(" + j[b].join("px,") + "px)"
		}
	}

	function h(b, c, h, i) {
		b = b instanceof window.HTMLElement ? [b] : b;
		var j = i.direction || "left";
		delete i.direction;
		var k = d.sequence(i);
		k.add(d.animate("BaseFade", b, c * .75, h + c * .25, {
			from: {
				opacity: 1
			},
			to: {
				opacity: 0
			},
			ease: "Cubic.easeInOut"
		}));
		a.forEach(b, function(a) {
			var b = a.getAttribute("data-angle") || 0;
			var i = j !== "center" ? f(e[j].idx, b) : j;
			var l = g(a, i);
			k.add(d.animate("BaseClip", a, c, h, {
				to: l,
				ease: "Cubic.easeInOut"
			}), 0)
		});
		return k.get()
	}
	h.properties = {
		hideOnStart: false
	};
	d.registerAnimation("Conceal", h);
});
define("animations/animationClasses/animation/out/slideOut", ["lodash", "animations/localTweenEngine/localTweenEngine"], function(a, b) {
	"use strict";
	var c = b.engine;
	var d = b.factory;
	var e = {
		top: {
			dx: 0,
			dy: -1,
			idx: 0
		},
		right: {
			dx: 1,
			dy: 0,
			idx: 1
		},
		bottom: {
			dx: 0,
			dy: 1,
			idx: 2
		},
		left: {
			dx: -1,
			dy: 0,
			idx: 3
		}
	};

	function f(a, b) {
		var c = ["top", "right", "bottom", "left"];
		var d = Math.round(b / 90);
		a = (a + (c.length - 1) * d) % c.length;
		return c[a]
	}

	function g(a, b, c) {
		var d = b.top - a.top;
		var e = b.left - a.left;
		var f = b.width + e;
		var g = b.height + d;
		var h = {
			top: [g, f, g, e],
			right: [d, e, g, e],
			bottom: [d, f, d, e],
			left: [d, f, g, f]
		};
		return {
			clip: "rect(" + h[c].join("px,") + "px)"
		}
	}

	function h(a, b, c) {
		var d = a.width;
		var e = a.height;
		var f = b.dy * e * Math.sin(-c) + b.dx * d * Math.cos(c);
		var g = b.dy * e * Math.cos(-c) + b.dx * d * Math.sin(c);
		return {
			x: f,
			y: g
		}
	}

	function i(b, i, j, k) {
		b = b instanceof window.HTMLElement ? [b] : b;
		var l = k.direction || "left";
		delete k.direction;
		var m = .75;
		var n = (j || 0) + i * m;
		var o = i * (1 - m);
		var p = d.sequence(k);
		p.add(d.animate("BaseFade", b, o, n, {
			from: {
				opacity: 1
			},
			to: {
				opacity: 0
			},
			ease: "Cubic.easeInOut"
		}));
		a.forEach(b, function(a) {
			var b = c.getBoundingRect(a);
			var k = c.getBoundingContentRect(a);
			var m = a.getAttribute("data-angle") || 0;
			var n = m * Math.PI / 180;
			var o = f(e[l].idx, m);
			var q = g(b, k, o);
			var r = h(k, e[o], n);
			p.add([d.animate("BaseClip", a, i, j, {
				to: q,
				ease: "Cubic.easeInOut"
			}), d.animate("BasePosition", a, i, j, {
				to: r,
				ease: "Cubic.easeInOut"
			})], 0)
		});
		return p.get()
	}
	i.properties = {};
	d.registerAnimation("SlideOut", i)
});
define("animations/animationClasses/animation/out/spinOut", ["lodash", "animations/localTweenEngine/localTweenEngine"], function(a, b) {
	"use strict";
	var c = b.factory;
	var d = {
		cw: {
			direction: "-1"
		},
		ccw: {
			direction: "1"
		}
	};

	function e(b, e, f, g) {
		var h = g.direction || "cw";
		var i = g.cycles || 5;
		delete g.direction;
		delete g.cycles;
		var j = a.clone(d[h]);
		var k = (j.direction > 0 ? "+=" : "-=") + 360 * i;
		var l = c.sequence(g);
		l.add([c.animate("BaseFade", b, e, f, {
			from: {
				opacity: 1
			},
			to: {
				opacity: 0
			},
			ease: "Sine.easeIn"
		}), c.animate("BaseScale", b, e, f, {
			to: {
				scale: 0
			},
			ease: "Sine.easeIn"
		}), c.animate("BaseRotate", b, e, f, {
			to: {
				rotation: k
			},
			ease: "Sine.easeOut"
		})]);
		return l.get()
	}
	e.properties = {
		hideOnStart: false
	};
	c.registerAnimation("SpinOut", e)
});
define("animations/animationClasses/animation/out/turnOut", ["lodash", "animations/localTweenEngine/localTweenEngine"], function(a, b) {
	"use strict";
	var c = b.engine;
	var d = b.factory;
	var e = {
		left: {
			dx: "-1",
			angle: "90"
		},
		right: {
			dx: "1",
			angle: "90"
		}
	};

	function f(b, f, g, h) {
		var i = h.direction || "right";
		delete h.direction;
		var j = e[i];
		var k = {
			width: window.innerWidth,
			height: window.innerHeight
		};
		var l = d.sequence(h);
		l.add(d.animate("BaseFade", b, f, g, {
			from: {
				opacity: 1
			},
			to: {
				opacity: 0
			},
			ease: "Linear.easeIn"
		}));
		a.forEach(b, function(a) {
			var b = c.getBoundingRect(a);
			var e = j.dx > 0 ? k.width - b.right : j.dx * b.left;
			var h = Math.min(-1.5 * b.height, Math.max(-300, -5.5 * b.height));
			var i = (j.dx > 0 ? "+=" : "-=") + j.angle;
			var m = [{
				x: e,
				y: h
			}, {
				x: j.dx * b.width,
				y: h
			}];
			l.add([d.animate("BasePosition", a, f, g, {
				to: {
					bezier: {
						values: m,
						type: "soft"
					}
				},
				ease: "Sine.easeIn"
			}), d.animate("BaseRotate", a, f, g, {
				to: {
					rotation: i
				},
				ease: "Sine.easeIn"
			})], 0)
		});
		return l.get()
	}
	f.properties = {
		hideOnStart: false
	};
	d.registerAnimation("TurnOut", f)
});
define("animations/animationClasses/animation/out/bounceOut", ["lodash", "animations/localTweenEngine/localTweenEngine"], function(a, b) {
	"use strict";
	var c = b.factory;
	var d = {
		"top left": "0 0",
		"top right": "100% 0",
		"bottom left": "0 100%",
		"bottom right": "100% 100%",
		center: "50% 50%"
	};
	var e = {
		soft: [.6],
		medium: [1],
		hard: [1.5]
	};

	function f(b, f, g, h) {
		b = b instanceof window.HTMLElement ? [b] : b;
		var i = h.direction || "top left";
		var j = h.bounce || "medium";
		var k = d[i];
		var l = .15;
		h = a.omit(h, ["direction", "bounce"]);
		var m = c.sequence(h);
		m.add(c.animate("BaseNone", b, 0, 0, {
			transformOrigin: k
		}), 0).add(c.animate("BaseScale", b, f, g, {
			to: {
				scale: 0
			},
			ease: "Quint.easeIn",
			easeParams: e[j]
		}), 0).add(c.animate("BaseFade", b, l, g, {
			to: {
				opacity: 0
			},
			ease: "Sine.easeOut"
		}), "-=" + l);
		return m.get()
	}
	f.properties = {
		hideOnStart: false
	};
	c.registerAnimation("BounceOut", f)
});
define("animations/animationClasses/animation/out/glideOut", ["lodash", "animations/localTweenEngine/localTweenEngine"], function(a, b) {
	"use strict";
	var c = b.factory;

	function d(b, d, e, f) {
		b = b instanceof window.HTMLElement ? [b] : b;
		var g = (f.angle || 0) * Math.PI / 180;
		var h = f.distance || 0;
		var i = Math.sin(g) * h;
		var j = Math.cos(g) * h * -1;
		var k = .1;
		f = a.omit(f, ["angle", "distance"]);
		var l = c.sequence(f);
		l.add(c.animate("BasePosition", b, d, e, {
			to: {
				x: i,
				y: j
			},
			ease: "Sine.easeInOut"
		}), 0).add(c.animate("BaseFade", b, k, 0, {
			from: {
				opacity: 1
			},
			to: {
				opacity: 0
			},
			ease: "Sine.easeOut",
			immediateRender: false
		}), "-=" + k);
		return l.get()
	}
	d.properties = {
		hideOnStart: false
	};
	c.registerAnimation("GlideOut", d)
});
define("animations/animationClasses/animation/modes/ModesMotionNoScale", ["lodash", "coreUtils", "animations/localTweenEngine/localTweenEngine"], function(a, b, c) {
	"use strict";
	var d = c.engine;
	var e = c.factory;

	function f(a, c) {
		var d = b.style.unitize(c.from.left - a.left, "px");
		var e = b.style.unitize(c.from.top - a.top, "px");
		return {
			x: d,
			y: e
		}
	}

	function g(a) {
		return {
			width: b.style.unitize(a.from.width),
			height: b.style.unitize(a.from.height)
		}
	}

	function h(b, c, h, i) {
		b = b instanceof window.HTMLElement ? [b] : b;
		var j = e.sequence(i);
		a.forEach(b, function(a) {
			var b = d.getBoundingRect(a);
			var k = f(b, i);
			var l = g(i);
			j.add(e.animate("BasePosition", a, c, h, {
				from: k,
				ease: "Cubic.easeInOut"
			}), 0);
			j.add(e.animate("BaseDimensions", a, c, h, {
				from: l,
				ease: "Cubic.easeInOut"
			}), 0);
			j.add(e.animate("BaseRotate", a, c, h, {
				from: {
					rotation: i.from.rotation
				},
				ease: "Cubic.easeInOut"
			}), 0)
		});
		return j.get()
	}
	e.registerAnimation("ModesMotionNoScale", h)
});
define("animations/animationClasses/animation/modes/ModesMotionNoDimensions", ["lodash", "animations/localTweenEngine/localTweenEngine"], function(a, b) {
	"use strict";
	var c = b.engine;
	var d = b.factory;

	function e(a, b) {
		return {
			x: b.from.left - a.left,
			y: b.from.top - a.top
		}
	}

	function f(b, f, g, h) {
		b = b instanceof window.HTMLElement ? [b] : b;
		var i = d.sequence(h);
		a.forEach(b, function(a) {
			var b = c.getBoundingRect(a);
			var j = e(b, h);
			i.add(d.animate("BasePosition", a, f, g, {
				from: j,
				ease: "Cubic.easeInOut"
			}), 0);
			i.add(d.animate("BaseRotate", a, f, g, {
				from: {
					rotation: h.from.rotation
				},
				ease: "Cubic.easeInOut"
			}), 0)
		});
		return i.get()
	}
	d.registerAnimation("ModesMotionNoDimensions", f)
});
define("animations/animationClasses/animation/modes/ModesMotionScale", ["lodash", "coreUtils", "animations/localTweenEngine/localTweenEngine"], function(a, b, c) {
	"use strict";
	var d = c.engine;
	var e = c.factory;

	function f(a, c) {
		var d = b.style.unitize(c.from.left - a.left, "px");
		var e = b.style.unitize(c.from.top - a.top, "px");
		return {
			x: d,
			y: e
		}
	}

	function g(a, b) {
		var c = b.from.width / a.width;
		var d = b.from.height / a.height;
		return {
			scaleX: c,
			scaleY: d
		}
	}

	function h(b, c, h, i) {
		b = b instanceof window.HTMLElement ? [b] : b;
		var j = e.sequence(i);
		a.forEach(b, function(a) {
			var b = d.getBoundingRect(a);
			var k = f(b, i);
			var l = g(b, i);
			j.add(e.animate("BasePosition", a, c, h, {
				from: k,
				ease: "Cubic.easeInOut"
			}), 0);
			j.add(e.animate("BaseScale", a, c, h, {
				from: l,
				ease: "Cubic.easeInOut",
				transformOrigin: "0 0"
			}), 0);
			j.add(e.animate("BaseRotate", a, c, h, {
				from: {
					rotation: i.from.rotation
				},
				ease: "Cubic.easeInOut"
			}), 0)
		});
		return j.get()
	}
	e.registerAnimation("ModesMotionScale", h)
});
define("animations/animationClasses/animation/backgroundScrollEffects/siteBackgroundParallax", ["animations/localTweenEngine/localTweenEngine"], function(a) {
	"use strict";
	var b = a.factory;

	function c(a, c, d, e) {
		var f = b.sequence(e);
		var g = .2;
		var h = Math.max(window.document.body.scrollHeight * g, 0);
		var i = window.innerHeight * g;
		var j = Math.min(h, i);
		f.add(b.animate("BasePosition", a, c, d, {
			from: {
				y: 0
			},
			to: {
				y: -j
			},
			force3D: true,
			ease: "Linear.easeNone"
		}));
		return f.get()
	}
	c.properties = {
		hideOnStart: false,
		getMaxTravel: function(a, b, c) {
			return Math.max(c - b, 0)
		}
	};
	b.registerAnimation("SiteBackgroundParallax", c)
});
define("animations/animationClasses/animation/backgroundScrollEffects/backgroundReveal", ["lodash", "coreUtils", "animations/localTweenEngine/localTweenEngine"], function(a, b, c) {
	"use strict";
	var d = c.factory;
	var e = b.balataConsts;
	var f = 1;
	var g = 1;

	function h(b, c, h, i) {
		i = i || {};
		var j = i.viewPortHeight || f;
		var k = i.componentHeight || g;
		var l = d.sequence(i);
		var m;
		if (a.get(i, ["browserFlags", "animateRevealScrubAction"])) {
			a.forEach(b, function(b) {
				m = a.map(e.REVEAL_SELECTORS, function(a) {
					return b.querySelector(a)
				});
				l.add([d.animate("BasePosition", b, c, h, {
					from: {
						y: j
					},
					to: {
						y: -k
					},
					force3D: true,
					immediateRender: true
				}), d.animate("BasePosition", m, c, h, {
					from: {
						y: -j
					},
					to: {
						y: k
					},
					force3D: true,
					immediateRender: true
				})])
			})
		} else {
			a.forEach(b, function(c) {
				m = a.map(e.REVEAL_SELECTORS, function(a) {
					return c.querySelector(a)
				});
				l.add(d.animate("BaseNone", b, 0, 0, {
					transformStyle: "preserve-3d",
					force3D: true
				}), d.animate("BaseNone", m, 0, 0, {
					transformStyle: "preserve-3d",
					force3D: true
				}))
			})
		}
		return l.get()
	}
	h.properties = {
		hideOnStart: false,
		shouldDisableSmoothScrolling: true,
		getMaxTravel: function(a, b) {
			return b + a.height
		}
	};
	d.registerAnimation("BackgroundReveal", h)
});
define("animations/animationClasses/animation/backgroundScrollEffects/backgroundParallax", ["lodash", "coreUtils", "animations/localTweenEngine/localTweenEngine"], function(a, b, c) {
	"use strict";
	var d = c.factory;
	var e = b.balataConsts;
	var f = .2;
	var g = 1;
	var h = 1;

	function i(b, c, i, j) {
		j = j || {};
		var k = a.isUndefined(j.speedFactor) ? f : j.speedFactor;
		var l = j.viewPortHeight || g;
		var m = j.componentHeight || h;
		var n = d.sequence(j);
		var o;
		if (a.get(j, ["browserFlags", "animateParallaxScrubAction"])) {
			a.forEach(b, function(b) {
				o = a.map(e.PARALLAX_SELECTORS, function(a) {
					return b.querySelector(a)
				});
				n.add([d.animate("BasePosition", b, c, i, {
					from: {
						y: l
					},
					to: {
						y: -m
					},
					force3D: true,
					immediateRender: true
				}), d.animate("BasePosition", o, c, i, {
					from: {
						y: l * (k - 1)
					},
					to: {
						y: m * (1 - k)
					},
					force3D: true,
					immediateRender: true
				})])
			})
		} else {
			var p = {};
			if (a.get(j, ["browserFlags", "preserve3DParallaxScrubAction"])) {
				p = {
					transformStyle: "preserve-3d"
				}
			}
			n.add(d.animate("BaseNone", b, 0, 0, p));
			a.forEach(b, function(b) {
				o = a.map(e.PARALLAX_SELECTORS, function(a) {
					return b.querySelector(a)
				});
				n.add(d.animate("BasePosition", o, c, i, {
					from: {
						y: l * k
					},
					to: {
						y: 0 - m * k
					},
					ease: "Linear.easeNone",
					force3D: true,
					immediateRender: true
				}))
			})
		}
		return n.get()
	}
	i.properties = {
		hideOnStart: false,
		shouldDisableSmoothScrolling: true,
		getMaxTravel: function(a, b) {
			return b + a.height
		}
	};
	d.registerAnimation("BackgroundParallax", i)
});
define("animations/animationClasses/animation/backgroundScrollEffects/backgroundZoom", ["lodash", "animations/localTweenEngine/localTweenEngine", "coreUtils"], function(a, b, c) {
	"use strict";
	var d = c.balataConsts;
	var e = b.factory;

	function f(b, c, f, g) {
		g = g || {};
		var h = e.sequence(g);
		a.forEach(b, function(b) {
			var g = a.map(d.ZOOM_SELECTORS, function(a) {
				return b.querySelector(a)
			});
			h.add([e.animate("BasePosition", b, 0, f, {
				perspective: 100,
				force3D: true,
				immediateRender: true
			}), e.animate("BasePosition", g, c, f, {
				force3D: true,
				from: {
					z: 0
				},
				to: {
					z: 40
				},
				ease: "Sine.easeIn",
				immediateRender: true
			})])
		});
		return h.get()
	}
	f.properties = {
		hideOnStart: false,
		shouldDisableSmoothScrolling: true,
		getMaxTravel: function(a, b) {
			return b + a.height
		}
	};
	e.registerAnimation("BackgroundZoom", f)
});
define("animations/animationClasses/animation/backgroundScrollEffects/backgroundFadeIn", ["lodash", "animations/localTweenEngine/localTweenEngine"], function(a, b) {
	"use strict";
	var c = b.factory;

	function d(a, b, d, e) {
		e = e || {};
		var f = c.sequence(e);
		f.add(c.animate("BaseFade", a, b, d, {
			from: {
				opacity: 0
			},
			to: {
				opacity: 1
			},
			ease: "Circ.easeIn",
			force3D: true,
			immediateRender: true
		}));
		return f.get()
	}
	d.properties = {
		hideOnStart: false,
		getMaxTravel: function(a, b, c) {
			return Math.min(c - a.top, (b + a.height) / 2, b * .9)
		}
	};
	c.registerAnimation("BackgroundFadeIn", d)
});
define("animations/animationClasses/animation/backgroundScrollEffects/backgroundBlurIn", ["lodash", "animations/localTweenEngine/localTweenEngine"], function(a, b) {
	"use strict";
	var c = b.engine;
	var d = b.factory;
	var e = 20;

	function f(b, f, g, h) {
		h = h || {};
		var i = h.blur || e;
		var j = d.sequence(h);
		var k = !a.isUndefined(b[0].style.WebkitFilter);
		a.forEach(b, function(a) {
			a.setAttribute("data-blur", 0);
			d.animate("BaseNone", a, 0, 0, {
				force3D: true
			});
			j.add(d.animate("BaseAttribute", a, f, g, {
				from: {
					attr: {
						"data-blur": i
					}
				},
				to: {
					attr: {
						"data-blur": 0
					}
				},
				ease: "Circ.easeIn",
				immediateRender: true,
				callbacks: {
					onUpdate: function() {
						var b = a.getAttribute("data-blur");
						c.tween(a, {
							duration: 0,
							delay: 0,
							WebkitFilter: "blur(" + b + "px)",
							filter: "blur(" + b + "px)"
						}, k ? ["WebkitFilter", "filter"] : ["filter"])
					}
				}
			}))
		});
		return j.get()
	}
	f.properties = {
		hideOnStart: false,
		getMaxTravel: function(a, b, c) {
			return Math.min(c - a.top, (b + a.height) / 2, b * .9)
		}
	};
	d.registerAnimation("BackgroundBlurIn", f)
});
define("animations/animationClasses/transition/noTransition", ["animations/localTweenEngine/localTweenEngine"], function(a) {
	"use strict";
	var b = a.factory;

	function c(a, c, d, e, f) {
		var g = b.sequence(f);
		g.add([b.animate("BaseNone", a, d, e), b.animate("BaseNone", c, d, e)]);
		return g.get()
	}
	c.properties = {
		defaultDuration: 0
	};
	b.registerTransition("NoTransition", c)
});
define("animations/animationClasses/transition/crossFade", ["animations/localTweenEngine/localTweenEngine"], function(a) {
	"use strict";
	var b = a.factory;

	function c(a, c, d, e, f) {
		var g = f.stagger || 0;
		var h = f.sourceEase || "Sine.easeInOut";
		var i = f.destEase || "Sine.easeInOut";
		delete f.sourceEase;
		delete f.destEase;
		delete f.stagger;
		var j = b.sequence(f);
		j.add([b.animate("BaseFade", a, d, e, {
			from: {
				opacity: 1
			},
			to: {
				opacity: 0
			},
			ease: h,
			stagger: g
		}), b.animate("BaseFade", c, d, e, {
			from: {
				opacity: 0
			},
			to: {
				opacity: 1
			},
			ease: i,
			stagger: g
		})]);
		return j.get()
	}
	c.properties = {
		defaultDuration: .6
	};
	b.registerTransition("CrossFade", c)
});
define("animations/animationClasses/transition/outIn", ["animations/localTweenEngine/localTweenEngine"], function(a) {
	"use strict";
	var b = a.factory;

	function c(a, c, d, e, f) {
		var g = f.stagger || 0;
		var h = f.sourceEase || "Strong.easeOut";
		var i = f.destEase || "Strong.easeIn";
		delete f.sourceEase;
		delete f.destEase;
		delete f.stagger;
		var j = b.sequence(f);
		j.add([b.animate("BaseFade", a, d, e, {
			from: {
				opacity: 1
			},
			to: {
				opacity: 0
			},
			ease: h,
			stagger: g
		}), b.animate("BaseFade", c, d, e, {
			from: {
				opacity: 0
			},
			to: {
				opacity: 1
			},
			ease: i,
			stagger: g
		})]);
		return j.get()
	}
	c.properties = {
		defaultDuration: .7
	};
	b.registerTransition("OutIn", c)
});
define("animations/animationClasses/transition/slideHorizontal", ["animations/localTweenEngine/localTweenEngine"], function(a) {
	"use strict";
	var b = a.factory;

	function c(a, c, d, e, f) {
		f = f || {};
		var g = f.reverse ? -1 : 1;
		var h = f.width || (a.length ? a[0].offsetWidth : a.offsetWidth);
		var i = f.ease || "Strong.easeInOut";
		delete f.ease;
		delete f.width;
		delete f.reverse;
		var j = b.sequence(f);
		j.add([b.animate("BaseFade", c, 0, e, {
			to: {
				opacity: 1
			},
			immediateRender: false
		}), b.animate("BasePosition", a, d, e, {
			from: {
				x: 0
			},
			to: {
				x: -h * g
			},
			ease: i
		}), b.animate("BasePosition", c, d, e, {
			from: {
				x: h * g
			},
			to: {
				x: 0
			},
			ease: i
		})]);
		return j.get()
	}
	c.properties = {
		defaultDuration: .6
	};
	b.registerTransition("SlideHorizontal", c)
});
define("animations/animationClasses/transition/slideVertical", ["animations/localTweenEngine/localTweenEngine"], function(a) {
	"use strict";
	var b = a.factory;

	function c(a, c, d, e, f) {
		f = f || {};
		var g = f.reverse ? -1 : 1;
		var h = f.height || (a.length ? a[0].offsetHeight : a.offsetHeight);
		var i = f.ease || "Strong.easeInOut";
		delete f.ease;
		delete f.height;
		delete f.reverse;
		var j = b.sequence(f);
		j.add([b.animate("BaseFade", c, 0, e, {
			to: {
				opacity: 1
			},
			immediateRender: false
		}), b.animate("BasePosition", a, d, e, {
			from: {
				y: 0
			},
			to: {
				y: -h * g
			},
			ease: i
		}), b.animate("BasePosition", c, d, e, {
			from: {
				y: h * g
			},
			to: {
				y: 0
			},
			ease: i
		})]);
		return j.get()
	}
	c.properties = {
		defaultDuration: .6
	};
	b.registerTransition("SlideVertical", c)
});
define("animations/animationClasses/transition/shrink", ["animations/localTweenEngine/localTweenEngine"], function(a) {
	"use strict";
	var b = a.factory;

	function c(a, c, d, e, f) {
		var g = f.height;
		var h = f.width;
		var i = "rect(" + [g / 2, h / 2, g / 2, h / 2].join("px,") + "px)";
		var j = f.stagger || 0;
		var k = f.sourceEase || "Sine.easeInOut";
		delete f.sourceEase;
		delete f.stagger;
		delete f.width;
		delete f.height;
		var l = b.sequence(f);
		l.add(b.animate("BaseFade", c, 0, e, {
			to: {
				opacity: 1
			},
			clearProps: "clip"
		})).add(b.animate("BaseClip", a, d, e, {
			to: {
				clip: i
			},
			ease: k,
			stagger: j
		}));
		return l.get()
	}
	c.properties = {};
	b.registerTransition("Shrink", c)
});
define("animations", ["animations/localTweenEngine/localTweenEngine", "animations/animationClasses/animation/defaults/defaults", "animations/animationClasses/base/sequence/baseSequence",
	"animations/animationClasses/base/baseNone", "animations/animationClasses/base/baseFade", "animations/animationClasses/base/basePosition", "animations/animationClasses/base/baseScale",
	"animations/animationClasses/base/baseSkew", "animations/animationClasses/base/baseRotate", "animations/animationClasses/base/baseRotate3D", "animations/animationClasses/base/baseClip",
	"animations/animationClasses/base/baseDimensions", "animations/animationClasses/base/baseScroll", "animations/animationClasses/base/baseAttribute", "animations/animationClasses/base/baseClear",
	"animations/animationClasses/animation/fade", "animations/animationClasses/animation/position", "animations/animationClasses/animation/scale", "animations/animationClasses/animation/rotate",
	"animations/animationClasses/animation/in/arcIn", "animations/animationClasses/animation/in/dropIn", "animations/animationClasses/animation/in/expandIn",
	"animations/animationClasses/animation/in/fadeIn", "animations/animationClasses/animation/in/flipIn", "animations/animationClasses/animation/in/floatIn",
	"animations/animationClasses/animation/in/flyIn", "animations/animationClasses/animation/in/foldIn", "animations/animationClasses/animation/in/reveal",
	"animations/animationClasses/animation/in/slideIn", "animations/animationClasses/animation/in/spinIn", "animations/animationClasses/animation/in/turnIn",
	"animations/animationClasses/animation/in/bounceIn", "animations/animationClasses/animation/in/glideIn", "animations/animationClasses/animation/out/arcOut",
	"animations/animationClasses/animation/out/popOut", "animations/animationClasses/animation/out/collapseOut", "animations/animationClasses/animation/out/fadeOut",
	"animations/animationClasses/animation/out/flipOut", "animations/animationClasses/animation/out/floatOut", "animations/animationClasses/animation/out/flyOut",
	"animations/animationClasses/animation/out/foldOut", "animations/animationClasses/animation/out/conceal", "animations/animationClasses/animation/out/slideOut",
	"animations/animationClasses/animation/out/spinOut", "animations/animationClasses/animation/out/turnOut", "animations/animationClasses/animation/out/bounceOut",
	"animations/animationClasses/animation/out/glideOut", "animations/animationClasses/animation/modes/ModesMotionNoScale", "animations/animationClasses/animation/modes/ModesMotionNoDimensions",
	"animations/animationClasses/animation/modes/ModesMotionScale", "animations/animationClasses/animation/backgroundScrollEffects/siteBackgroundParallax",
	"animations/animationClasses/animation/backgroundScrollEffects/backgroundReveal", "animations/animationClasses/animation/backgroundScrollEffects/backgroundParallax",
	"animations/animationClasses/animation/backgroundScrollEffects/backgroundZoom", "animations/animationClasses/animation/backgroundScrollEffects/backgroundFadeIn",
	"animations/animationClasses/animation/backgroundScrollEffects/backgroundBlurIn", "animations/animationClasses/transition/noTransition", "animations/animationClasses/transition/crossFade",
	"animations/animationClasses/transition/outIn", "animations/animationClasses/transition/slideHorizontal", "animations/animationClasses/transition/slideVertical",
	"animations/animationClasses/transition/shrink"
], function(a, b) {
	"use strict";
	var c = a.engine;
	var d = a.factory;
	return {
		animate: d.animate,
		transition: d.transition,
		sequence: d.sequence,
		getProperties: d.getProperties,
		addTickerEvent: c.addTickerEvent,
		removeTickerEvent: c.removeTickerEvent,
		kill: c.kill,
		delayedCall: c.delayedCall,
		animateTimeScale: c.animateTimeScale,
		viewerDefaults: b
	}
});
