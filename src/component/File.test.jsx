import React from 'react';
import { File } from './File'
import { render } from '@testing-library/react'

test('salut',function(){
    render(<File name="Salut"></File>)
    expect(demo).toBe('<div id="demo">Salut</div>')
})