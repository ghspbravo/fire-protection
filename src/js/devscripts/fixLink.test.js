import { fixLink, fixPageLinks } from "./fixLink";

describe('devscripts/fixPageLinks', () => {
  /** @type {Node} */
  let wrapper = document.createElement('div');
  document.body.appendChild(wrapper);

  beforeEach(() => {
    document.body.removeChild(wrapper);
    const wrapperChilds = [...wrapper.childNodes]
    wrapperChilds.length && wrapperChilds.forEach(node => wrapper.removeChild(node));
  })

  it('should complete all local links in <a> page', () => {
    const a1 = document.createElement('a');
    a1.href = '/page';
    const a2 = document.createElement('a');
    a2.href = '/page.html';
    wrapper.appendChild(a1);
    wrapper.appendChild(a2);

    document.body.appendChild(wrapper);

    fixPageLinks();

    [...document.querySelectorAll('a')].forEach(link => {
      expect(/.html$/.test(link.href)).toBeTruthy();
    })
  })

})

describe('devscripts/fixLinks', () => {

  it('should complete string with .html if no ending', function () {
    expect(fixLink('/catalog'))
      .toBe('/catalog.html');
  })

  it('should change full site address links if no ending', function () {
    expect(fixLink('http://www.example.com/catalog'))
      .toBe('http://www.example.com/catalog.html');
    expect(fixLink('https://www.example.com/catalog'))
      .toBe('https://www.example.com/catalog.html');
    expect(fixLink('www.example.com/catalog'))
      .toBe('www.example.com/catalog.html');
    expect(fixLink('www.example.com/catalog.html'))
      .toBe('www.example.com/catalog.html');
  })

  it('should not change index page (/)', function() {
    expect(fixLink('/'))
      .toBe('/');
    expect(fixLink('www.example.com/'))
      .toBe('www.example.com/');
    expect(fixLink('www.example.com'))
      .toBe('www.example.com');
  })

  it('should not change action links (mailto:)', function() {
    expect(fixLink('mailto:mail@mail.ru'))
      .toBe('mailto:mail@mail.ru');
    expect(fixLink('tel:88005553535'))
      .toBe('tel:88005553535');
  })

  it('should not change input data if has .html or .php ending', function () {
    expect(fixLink('/catalog.html'))
      .toBe('/catalog.html');
    expect(fixLink('/catalog.php'))
      .toBe('/catalog.php');
  })

  it('should not change files addresses', function () {
    expect(fixLink('/file.extension'))
      .toBe('/file.extension');
    expect(fixLink('/file.sub.extension'))
      .toBe('/file.sub.extension');
  })

  it('should not change files addresses with params', function () {
    expect(fixLink('//cdn.shopify.com/s/files/1/0037/8925/8841/t/25/assets/vendors@layout.theme.js?22384'))
      .toBe('//cdn.shopify.com/s/files/1/0037/8925/8841/t/25/assets/vendors@layout.theme.js?22384');
  })

  it('should change null, empty or undefined on index page', function () {
    expect(fixLink(undefined))
      .toBe('/');
    expect(fixLink(null))
      .toBe('/');
    expect(fixLink(''))
      .toBe('/');
  })

})