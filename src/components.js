class Navbar extends HTMLElement {
  constructor() {
    super()
  }
  connectedCallback() {
    this.innerHTML = 
    `
    <nav class="justify-center bg-[#d77746] content-center text-center w-full  text-white mb-4 p-4 px-16">
        <div class="overflow-hidden bg-[rgb(150,84,31)] shadow-2xl rounded-lg">
          <a href="/" class="float-left text-base text-white text-center no-underline px-4 py-3.5 hover:text-black mr-2 hover:bg-white transition-all">funCha</a>
          <a href="/about/" class="float-left text-base text-white text-center no-underline px-4 py-3.5 hover:text-black mx-2 hover:bg-white transition-all">About</a>
          <a href="/music/" class="float-left text-base text-white text-center no-underline px-4 py-3.5 hover:text-black mx-2 hover:bg-white transition-all">Music</a>
          <a href="/events/" class="float-left text-base text-white text-center no-underline px-4 py-3.5 hover:text-black mx-2 hover:bg-white transition-all">Events</a>
          <a href="/credits/" class="float-right text-base text-white text-center no-underline px-4 py-3.5 hover:text-black ml-2 hover:bg-white transition-all">Credits</a>
          <div class="float-left group overflow-hidden hover:text-black mx-2 bg:bg-white transition-all">
            <button class="text-base text-white bg-inherit m-0 px-4 py-3.5 border-[none] outline-0 hover:text-black  hover:bg-white transition-all">Food 
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="hidden group-hover:block absolute bg-[#f9f9f9] min-w-[160px] shadow-2xl z-[1]">
              <a href="/food/" class="float-none text-[black] no-underline block text-left px-4 py-3 hover:bg-[#ddd]">Food and History</a>
              <a href="/recipes/modern/" class="float-none text-[black] no-underline block text-left px-4 py-3 hover:bg-[#ddd]">Modern Recipes</a>
              <a href="/recipes/classical/" class="float-none text-[black] no-underline block text-left px-4 py-3 hover:bg-[#ddd]">Classical Recipes</a>
            </div>
          </div> 
        </div>
    
      </nav>
    `;
  }
}

customElements.define('navbar-component', Navbar);

class Footer extends HTMLElement {
  constructor() {
    super()
  }
  connectedCallback() {
    this.innerHTML = 
    `
    <footer class="bg-gray-900 text-white pt-12 pb-8 px-4">
    <div class="mx-auto px-4 container overflow-hidden flex flex-col lg:flex-row justify-between">
        <a href="/" class="block mr-4 w-1/3">
            <img src="https://i.imgur.com/JYin6lK.png" class="w-40 ml-4 lg:ml-0" alt="logo">
        </a>
        <div class="w-2/3 block sm:flex text-sm mt-6 lg:mt-0">
            <ul class="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
                <li class="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">Recipes</li>
                <li><a href="#" class="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">Features</a></li>
                <li><a href="#" class="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">Integrations</a></li>
                <li><a href="#" class="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">Pricing</a></li>
                <li><a href="#" class="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">FAQ</a></li>
            </ul>
            <ul class="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
                <li class="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">Company</li>
                <li><a href="#" class="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">Privacy</a>
                </li>
                <li><a href="#" class="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">Terms of Service</a></li>
            </ul>
            <ul class="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
                <li class="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">Developers</li>
                <li><a href="#" class="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">Developer API</a></li>
                <li><a href="#" class="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">Documentation</a></li>
                <li><a href="#" class="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">Guides</a></li>
                </li>
            </ul>
            <div class="text-gray-700 flex flex-col w-full">
                <div class="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">Follow Us</div>
                <div class="flex pl-4 justify-start mt-2">
                    <a class="block flex items-center text-gray-300 hover:text-white mr-6 no-underline" href="#">
                        <svg viewBox="0 0 24 24" class="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z" /></svg>
                    </a>
                    <a class="block flex items-center text-gray-300 hover:text-white mr-6 no-underline" href="#">
                        <svg viewBox="0 0 24 24" class="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" /></svg>
                    </a>
                    <a class="block flex items-center text-gray-300 hover:text-white no-underline" href="#">
                        <svg viewBox="0 0 24 24" class="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="mt-4 pt-6 text-gray-600 border-t border-gray-800 text-center"> © 2023 Funcha. All rights reserved.</div>
</footer>
    `;
  }
}

customElements.define('footer-component', Footer);