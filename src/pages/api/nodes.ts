import RequestHandler from '../../modules/RequestHandler'
import type { NextApiRequest, NextApiResponse } from 'next'
import { Node } from '../../types/node';

const nodes:Node[] = [
    {
        name: "Vg", 
        link: 'https://www.vg.no/'
    },{
        name: "SimonRiple", 
        link: 'https://simonriple.no/'
    }]

const nodesHandler = new RequestHandler();

nodesHandler.get = (req: NextApiRequest, res: NextApiResponse) => {
    console.log('getting')
    res.status(200).json(nodes)
}

nodesHandler.post = (req: NextApiRequest, res: NextApiResponse) => {
    console.log('posting')
    nodes.push(req.body)
    res.status(200).json({success: true})
}

export default nodesHandler.handleRequest