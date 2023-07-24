    function levelOrder($root) 
    {
        if ($root === null) return [];

        $result = [];
        $queue = [$root];

        while(!empty($queue)) 
        {
            $level = [];
            $count = count($queue);

            for($i = 0; $i < $count; $i++)
            {
                $currentNode = array_shift($queue);
                array_push($level, $currentNode->val);

                if ($currentNode->left !== null) 
                {
                    array_push($queue, $currentNode->left);
                }

                if ($currentNode->right !== null) 
                {
                    array_push($queue, $currentNode->right);
                }
            }

            array_push($result, $level);
        }

        return $result;
    }