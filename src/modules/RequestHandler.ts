import type { NextApiRequest, NextApiResponse } from 'next'


export default class RequestHandler{
    get: (req: NextApiRequest, res: NextApiResponse) => void;
    post: (req: NextApiRequest, res: NextApiResponse) => void;
    delete: (req: NextApiRequest, res: NextApiResponse) => void;

    handleRequest = (req: NextApiRequest, res: NextApiResponse) => {
        if(req.method === 'POST'){
            this.post(req,res)
        }else if(req.method === 'GET'){
            this.get(req,res)
        }else if(req.method === 'DELETE'){
            this.delete(req,res)
        }else{
            res.status(404)
        }
    }


}