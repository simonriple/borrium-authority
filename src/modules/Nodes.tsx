
import { Box, Circle, HStack, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Node as NodeType } from "../types/node";
 
export const Nodes = () => {
    const [nodes, setNodes] = useState<NodeType[]>([]);

    useEffect(() => {
        fetch('/api/nodes')
        .then(res => res.json())
        .then(nodes => setNodes(nodes))
    },[])

    return (
        <Stack margin={5}>
            {nodes?.map(node => <Node node={node}/>)}
        </Stack>
    )
}

export const Node = ({node}:{node: NodeType}) => {
    return (
        <Box>
            <HStack>
                <Link href={node.link}>
                    <Circle size='10' bg='green'/>
                </Link>
                <Text>{node.name}</Text>
            </HStack>
        </Box>
    )
} 