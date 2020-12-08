export var bloomPrefilterShader = `
  precision mediump float;
  precision mediump sampler2D;

  varying vec2 vUv;
  uniform sampler2D uTexture;
  uniform vec3 curve;
  uniform float threshold;

  void main () {
      vec3 c = texture2D(uTexture, vUv).rgb;
      float br = max(c.r, max(c.g, c.b));
      float rq = clamp(br - curve.x, 0.0, curve.y);
      rq = curve.z * rq * rq;
      c *= max(rq, br - threshold) / max(br, 0.0001);
      gl_FragColor = vec4(c, 0.0);
  }
`

export var bloomBlurShader = `
  precision mediump float;
  precision mediump sampler2D;

  varying vec2 vL;
  varying vec2 vR;
  varying vec2 vT;
  varying vec2 vB;
  uniform sampler2D uTexture;

  void main () {
      vec4 sum = vec4(0.0);
      sum += texture2D(uTexture, vL);
      sum += texture2D(uTexture, vR);
      sum += texture2D(uTexture, vT);
      sum += texture2D(uTexture, vB);
      sum *= 0.25;
      gl_FragColor = sum;
  }
`

export var bloomFinalShader = `
  precision mediump float;
  precision mediump sampler2D;

  varying vec2 vL;
  varying vec2 vR;
  varying vec2 vT;
  varying vec2 vB;
  uniform sampler2D uTexture;
  uniform float intensity;

  void main () {
      vec4 sum = vec4(0.0);
      sum += texture2D(uTexture, vL);
      sum += texture2D(uTexture, vR);
      sum += texture2D(uTexture, vT);
      sum += texture2D(uTexture, vB);
      sum *= 0.25;
      gl_FragColor = sum * intensity;
  }
`