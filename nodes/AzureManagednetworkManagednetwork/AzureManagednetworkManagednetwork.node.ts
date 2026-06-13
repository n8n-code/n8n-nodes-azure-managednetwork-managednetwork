import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureManagednetworkManagednetwork implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Managednetwork Managednetwork',
                name: 'N8nDevAzureManagednetworkManagednetwork',
                icon: { light: 'file:./azure-managednetwork-managednetwork.png', dark: 'file:./azure-managednetwork-managednetwork.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Azure Managed Network API enables programmatic network management and monitoring.',
                defaults: { name: 'Azure Managednetwork Managednetwork' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureManagednetworkManagednetworkApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
