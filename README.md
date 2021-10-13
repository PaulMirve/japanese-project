# Description
This is the project I made as final project in my japanese course. We had to make a project that involved all the topics we saw during the course, and I thought a good idea would be to build a website and have it for future references.

# Technologies
This project is built with **React** and **MaterialUI** for the interface components. Y used a JSON file structure to build all the topics of the page.  Each topic of the page has it's own examples escrtuctured like this:

   

     const examples = [
    { example: { first: 'ホーマーシンプソンの誕生日は5月12日', highlight: 'でしょうね。', second: '', secondHighlight: '', third: '' }, translation: 'El cumpleaños de Homer Simpson será el 12 de mayo,¿cierto? ' },
    { example: { first: 'マリアさんは、恋人とわかれて、きっと', highlight: '悲しい', second: '', secondHighlight: 'でしょうね。', third: '' }, translation: 'Seguramente María estará triste tras separarse de su novio,¿verdad?' },
    { example: { first: 'キムさんは、お父さんが入院して、', highlight: '心配', second: '', secondHighlight: 'でしょうね。', third: '' }, translation: 'Kim estará preocupada porque su padre ha sido hospitalizado,¿cierto?' }
    ];
Where *example* is the current example to show, each example with  its  own set of highlights to remark the most important part of the grammar of the current example, and finally the *translation* value, which  is the translated sentence to represent.
