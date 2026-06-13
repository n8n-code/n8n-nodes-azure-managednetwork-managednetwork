import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureManagednetworkManagednetworkApi implements ICredentialType {
        name = 'N8nDevAzureManagednetworkManagednetworkApi';

        displayName = 'Azure Managednetwork Managednetwork API';

        icon: Icon = { light: 'file:../nodes/AzureManagednetworkManagednetwork/azure-managednetwork-managednetwork.png', dark: 'file:../nodes/AzureManagednetworkManagednetwork/azure-managednetwork-managednetwork.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Managednetwork Managednetwork API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
