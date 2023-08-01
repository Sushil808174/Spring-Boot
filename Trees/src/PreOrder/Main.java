package PreOrder;

import java.util.LinkedList;
import java.util.Queue;

public class Main {
    static class Node{
        Node left;
        Node right;
        int data;
        public Node(int data){
            this.data = data;
            this.left = null;
            this.right = null;
        }
        public Node(){}
    }

    public static class BinarySearchTree{
        static int idx = -1;
        public static Node buildTree(int nodes[]){
            idx++;
            if(nodes[idx] == -1){
                return null;
            }
            Node node = new Node(nodes[idx]);
            node.left = buildTree(nodes);
            node.right = buildTree(nodes);

            return node;

        }
    }
    public static void main(String[] args) {
        int[] nodes = {1,2,4,-1,-1,5,-1,-1,3,-1,6,-1,-1};
        BinarySearchTree bTree = new BinarySearchTree();
        Node node = bTree.buildTree(nodes);
        preOrder(node);
        System.out.println();
        inOrder(node);
        System.out.println();
        postOrder(node);
        System.out.println("++++++++++++++++++++++");
        levelOrder(node);
        System.out.println("Depth of tree");
        int res = depth(node);
        System.out.println(res);

    }
    public static void preOrder(Node b){
        if(b != null){
            System.out.print(b.data+" ");
            preOrder(b.left);
            preOrder(b.right);
        }
    }
    public static void inOrder(Node b){
        if(b != null){
            inOrder(b.left);
            System.out.print(b.data+" ");
            inOrder(b.right);
        }
    }
    public static void postOrder(Node b){
        if(b != null){
            postOrder(b.left);

            postOrder(b.right);
            System.out.print(b.data+" ");
        }
    }

    public static int depth(Node node){
        if(node==null) return 0;
        int n1 =1 + depth(node.left);
        int n2 =1 + depth(node.right);
        return Math.max(n1,n2);
    }

    public static void levelOrder(Node node){
        if(node==null) return;
        Queue<Node> queue = new LinkedList<>();
        queue.add(node);
        queue.add(null);
        while(!queue.isEmpty()){

            Node newNode = queue.remove();
            if(newNode==null){
                System.out.println();
                if(queue.isEmpty()){
                    break;
                }else {
                    queue.add(null);
                }
            }else{
                System.out.print(newNode.data+" ");
                if(newNode.left !=null){
                    queue.add(newNode.left);
                }
                if(newNode.right!=null){
                    queue.add(newNode.right);
                }
            }
        }
    }

}
