# `dataOciManagementAgentManagementAgents` Submodule <a name="`dataOciManagementAgentManagementAgents` Submodule" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciManagementAgentManagementAgents <a name="DataOciManagementAgentManagementAgents" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agents oci_management_agent_management_agents}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgents } from 'rhizo-co-terraform-provider-oci'

new dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents(scope: Construct, id: string, config: DataOciManagementAgentManagementAgentsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig">DataOciManagementAgentManagementAgentsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig">DataOciManagementAgentManagementAgentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.resetAvailabilityStatus">resetAvailabilityStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.resetDataSourceName">resetDataSourceName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.resetDataSourceType">resetDataSourceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.resetGatewayId">resetGatewayId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.resetHostId">resetHostId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.resetInstallType">resetInstallType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.resetIsCustomerDeployed">resetIsCustomerDeployed</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.resetPlatformType">resetPlatformType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.resetPluginName">resetPluginName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.resetVersion">resetVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.resetWaitForHostId">resetWaitForHostId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciManagementAgentManagementAgentsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilter">DataOciManagementAgentManagementAgentsFilter</a>[]

---

##### `resetAccessLevel` <a name="resetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.resetAccessLevel"></a>

```typescript
public resetAccessLevel(): void
```

##### `resetAvailabilityStatus` <a name="resetAvailabilityStatus" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.resetAvailabilityStatus"></a>

```typescript
public resetAvailabilityStatus(): void
```

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.resetCompartmentIdInSubtree"></a>

```typescript
public resetCompartmentIdInSubtree(): void
```

##### `resetDataSourceName` <a name="resetDataSourceName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.resetDataSourceName"></a>

```typescript
public resetDataSourceName(): void
```

##### `resetDataSourceType` <a name="resetDataSourceType" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.resetDataSourceType"></a>

```typescript
public resetDataSourceType(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetGatewayId` <a name="resetGatewayId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.resetGatewayId"></a>

```typescript
public resetGatewayId(): void
```

##### `resetHostId` <a name="resetHostId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.resetHostId"></a>

```typescript
public resetHostId(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstallType` <a name="resetInstallType" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.resetInstallType"></a>

```typescript
public resetInstallType(): void
```

##### `resetIsCustomerDeployed` <a name="resetIsCustomerDeployed" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.resetIsCustomerDeployed"></a>

```typescript
public resetIsCustomerDeployed(): void
```

##### `resetPlatformType` <a name="resetPlatformType" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.resetPlatformType"></a>

```typescript
public resetPlatformType(): void
```

##### `resetPluginName` <a name="resetPluginName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.resetPluginName"></a>

```typescript
public resetPluginName(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.resetState"></a>

```typescript
public resetState(): void
```

##### `resetVersion` <a name="resetVersion" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.resetVersion"></a>

```typescript
public resetVersion(): void
```

##### `resetWaitForHostId` <a name="resetWaitForHostId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.resetWaitForHostId"></a>

```typescript
public resetWaitForHostId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciManagementAgentManagementAgents resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.isConstruct"></a>

```typescript
import { dataOciManagementAgentManagementAgents } from 'rhizo-co-terraform-provider-oci'

dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.isTerraformElement"></a>

```typescript
import { dataOciManagementAgentManagementAgents } from 'rhizo-co-terraform-provider-oci'

dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.isTerraformDataSource"></a>

```typescript
import { dataOciManagementAgentManagementAgents } from 'rhizo-co-terraform-provider-oci'

dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.generateConfigForImport"></a>

```typescript
import { dataOciManagementAgentManagementAgents } from 'rhizo-co-terraform-provider-oci'

dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciManagementAgentManagementAgents resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciManagementAgentManagementAgents to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciManagementAgentManagementAgents that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agents#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciManagementAgentManagementAgents to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterList">DataOciManagementAgentManagementAgentsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.managementAgents">managementAgents</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsList">DataOciManagementAgentManagementAgentsManagementAgentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.accessLevelInput">accessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.availabilityStatusInput">availabilityStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.dataSourceNameInput">dataSourceNameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.dataSourceTypeInput">dataSourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilter">DataOciManagementAgentManagementAgentsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.gatewayIdInput">gatewayIdInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.hostIdInput">hostIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.installTypeInput">installTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.isCustomerDeployedInput">isCustomerDeployedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.platformTypeInput">platformTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.pluginNameInput">pluginNameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.versionInput">versionInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.waitForHostIdInput">waitForHostIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.accessLevel">accessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.availabilityStatus">availabilityStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.dataSourceName">dataSourceName</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.dataSourceType">dataSourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.gatewayId">gatewayId</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.hostId">hostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.installType">installType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.isCustomerDeployed">isCustomerDeployed</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.platformType">platformType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.pluginName">pluginName</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.version">version</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.waitForHostId">waitForHostId</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.filter"></a>

```typescript
public readonly filter: DataOciManagementAgentManagementAgentsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterList">DataOciManagementAgentManagementAgentsFilterList</a>

---

##### `managementAgents`<sup>Required</sup> <a name="managementAgents" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.managementAgents"></a>

```typescript
public readonly managementAgents: DataOciManagementAgentManagementAgentsManagementAgentsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsList">DataOciManagementAgentManagementAgentsManagementAgentsList</a>

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.accessLevelInput"></a>

```typescript
public readonly accessLevelInput: string;
```

- *Type:* string

---

##### `availabilityStatusInput`<sup>Optional</sup> <a name="availabilityStatusInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.availabilityStatusInput"></a>

```typescript
public readonly availabilityStatusInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.compartmentIdInSubtreeInput"></a>

```typescript
public readonly compartmentIdInSubtreeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dataSourceNameInput`<sup>Optional</sup> <a name="dataSourceNameInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.dataSourceNameInput"></a>

```typescript
public readonly dataSourceNameInput: string[];
```

- *Type:* string[]

---

##### `dataSourceTypeInput`<sup>Optional</sup> <a name="dataSourceTypeInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.dataSourceTypeInput"></a>

```typescript
public readonly dataSourceTypeInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciManagementAgentManagementAgentsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilter">DataOciManagementAgentManagementAgentsFilter</a>[]

---

##### `gatewayIdInput`<sup>Optional</sup> <a name="gatewayIdInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.gatewayIdInput"></a>

```typescript
public readonly gatewayIdInput: string[];
```

- *Type:* string[]

---

##### `hostIdInput`<sup>Optional</sup> <a name="hostIdInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.hostIdInput"></a>

```typescript
public readonly hostIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `installTypeInput`<sup>Optional</sup> <a name="installTypeInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.installTypeInput"></a>

```typescript
public readonly installTypeInput: string;
```

- *Type:* string

---

##### `isCustomerDeployedInput`<sup>Optional</sup> <a name="isCustomerDeployedInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.isCustomerDeployedInput"></a>

```typescript
public readonly isCustomerDeployedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `platformTypeInput`<sup>Optional</sup> <a name="platformTypeInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.platformTypeInput"></a>

```typescript
public readonly platformTypeInput: string[];
```

- *Type:* string[]

---

##### `pluginNameInput`<sup>Optional</sup> <a name="pluginNameInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.pluginNameInput"></a>

```typescript
public readonly pluginNameInput: string[];
```

- *Type:* string[]

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.versionInput"></a>

```typescript
public readonly versionInput: string[];
```

- *Type:* string[]

---

##### `waitForHostIdInput`<sup>Optional</sup> <a name="waitForHostIdInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.waitForHostIdInput"></a>

```typescript
public readonly waitForHostIdInput: number;
```

- *Type:* number

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

---

##### `availabilityStatus`<sup>Required</sup> <a name="availabilityStatus" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.availabilityStatus"></a>

```typescript
public readonly availabilityStatus: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dataSourceName`<sup>Required</sup> <a name="dataSourceName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.dataSourceName"></a>

```typescript
public readonly dataSourceName: string[];
```

- *Type:* string[]

---

##### `dataSourceType`<sup>Required</sup> <a name="dataSourceType" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.dataSourceType"></a>

```typescript
public readonly dataSourceType: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.gatewayId"></a>

```typescript
public readonly gatewayId: string[];
```

- *Type:* string[]

---

##### `hostId`<sup>Required</sup> <a name="hostId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.hostId"></a>

```typescript
public readonly hostId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `installType`<sup>Required</sup> <a name="installType" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.installType"></a>

```typescript
public readonly installType: string;
```

- *Type:* string

---

##### `isCustomerDeployed`<sup>Required</sup> <a name="isCustomerDeployed" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.isCustomerDeployed"></a>

```typescript
public readonly isCustomerDeployed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `platformType`<sup>Required</sup> <a name="platformType" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.platformType"></a>

```typescript
public readonly platformType: string[];
```

- *Type:* string[]

---

##### `pluginName`<sup>Required</sup> <a name="pluginName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.pluginName"></a>

```typescript
public readonly pluginName: string[];
```

- *Type:* string[]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.version"></a>

```typescript
public readonly version: string[];
```

- *Type:* string[]

---

##### `waitForHostId`<sup>Required</sup> <a name="waitForHostId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.waitForHostId"></a>

```typescript
public readonly waitForHostId: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgents.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciManagementAgentManagementAgentsConfig <a name="DataOciManagementAgentManagementAgentsConfig" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgents } from 'rhizo-co-terraform-provider-oci'

const dataOciManagementAgentManagementAgentsConfig: dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agents#compartment_id DataOciManagementAgentManagementAgents#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig.property.accessLevel">accessLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agents#access_level DataOciManagementAgentManagementAgents#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig.property.availabilityStatus">availabilityStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agents#availability_status DataOciManagementAgentManagementAgents#availability_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agents#compartment_id_in_subtree DataOciManagementAgentManagementAgents#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig.property.dataSourceName">dataSourceName</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agents#data_source_name DataOciManagementAgentManagementAgents#data_source_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig.property.dataSourceType">dataSourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agents#data_source_type DataOciManagementAgentManagementAgents#data_source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agents#display_name DataOciManagementAgentManagementAgents#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilter">DataOciManagementAgentManagementAgentsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig.property.gatewayId">gatewayId</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agents#gateway_id DataOciManagementAgentManagementAgents#gateway_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig.property.hostId">hostId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agents#host_id DataOciManagementAgentManagementAgents#host_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agents#id DataOciManagementAgentManagementAgents#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig.property.installType">installType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agents#install_type DataOciManagementAgentManagementAgents#install_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig.property.isCustomerDeployed">isCustomerDeployed</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agents#is_customer_deployed DataOciManagementAgentManagementAgents#is_customer_deployed}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig.property.platformType">platformType</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agents#platform_type DataOciManagementAgentManagementAgents#platform_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig.property.pluginName">pluginName</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agents#plugin_name DataOciManagementAgentManagementAgents#plugin_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agents#state DataOciManagementAgentManagementAgents#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig.property.version">version</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agents#version DataOciManagementAgentManagementAgents#version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig.property.waitForHostId">waitForHostId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agents#wait_for_host_id DataOciManagementAgentManagementAgents#wait_for_host_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agents#compartment_id DataOciManagementAgentManagementAgents#compartment_id}.

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agents#access_level DataOciManagementAgentManagementAgents#access_level}.

---

##### `availabilityStatus`<sup>Optional</sup> <a name="availabilityStatus" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig.property.availabilityStatus"></a>

```typescript
public readonly availabilityStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agents#availability_status DataOciManagementAgentManagementAgents#availability_status}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agents#compartment_id_in_subtree DataOciManagementAgentManagementAgents#compartment_id_in_subtree}.

---

##### `dataSourceName`<sup>Optional</sup> <a name="dataSourceName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig.property.dataSourceName"></a>

```typescript
public readonly dataSourceName: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agents#data_source_name DataOciManagementAgentManagementAgents#data_source_name}.

---

##### `dataSourceType`<sup>Optional</sup> <a name="dataSourceType" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig.property.dataSourceType"></a>

```typescript
public readonly dataSourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agents#data_source_type DataOciManagementAgentManagementAgents#data_source_type}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agents#display_name DataOciManagementAgentManagementAgents#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciManagementAgentManagementAgentsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilter">DataOciManagementAgentManagementAgentsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agents#filter DataOciManagementAgentManagementAgents#filter}

---

##### `gatewayId`<sup>Optional</sup> <a name="gatewayId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig.property.gatewayId"></a>

```typescript
public readonly gatewayId: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agents#gateway_id DataOciManagementAgentManagementAgents#gateway_id}.

---

##### `hostId`<sup>Optional</sup> <a name="hostId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig.property.hostId"></a>

```typescript
public readonly hostId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agents#host_id DataOciManagementAgentManagementAgents#host_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agents#id DataOciManagementAgentManagementAgents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `installType`<sup>Optional</sup> <a name="installType" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig.property.installType"></a>

```typescript
public readonly installType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agents#install_type DataOciManagementAgentManagementAgents#install_type}.

---

##### `isCustomerDeployed`<sup>Optional</sup> <a name="isCustomerDeployed" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig.property.isCustomerDeployed"></a>

```typescript
public readonly isCustomerDeployed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agents#is_customer_deployed DataOciManagementAgentManagementAgents#is_customer_deployed}.

---

##### `platformType`<sup>Optional</sup> <a name="platformType" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig.property.platformType"></a>

```typescript
public readonly platformType: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agents#platform_type DataOciManagementAgentManagementAgents#platform_type}.

---

##### `pluginName`<sup>Optional</sup> <a name="pluginName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig.property.pluginName"></a>

```typescript
public readonly pluginName: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agents#plugin_name DataOciManagementAgentManagementAgents#plugin_name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agents#state DataOciManagementAgentManagementAgents#state}.

---

##### `version`<sup>Optional</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig.property.version"></a>

```typescript
public readonly version: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agents#version DataOciManagementAgentManagementAgents#version}.

---

##### `waitForHostId`<sup>Optional</sup> <a name="waitForHostId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsConfig.property.waitForHostId"></a>

```typescript
public readonly waitForHostId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agents#wait_for_host_id DataOciManagementAgentManagementAgents#wait_for_host_id}.

---

### DataOciManagementAgentManagementAgentsFilter <a name="DataOciManagementAgentManagementAgentsFilter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilter.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgents } from 'rhizo-co-terraform-provider-oci'

const dataOciManagementAgentManagementAgentsFilter: dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agents#name DataOciManagementAgentManagementAgents#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agents#values DataOciManagementAgentManagementAgents#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agents#regex DataOciManagementAgentManagementAgents#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agents#name DataOciManagementAgentManagementAgents#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agents#values DataOciManagementAgentManagementAgents#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agents#regex DataOciManagementAgentManagementAgents#regex}.

---

### DataOciManagementAgentManagementAgentsManagementAgents <a name="DataOciManagementAgentManagementAgentsManagementAgents" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgents"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgents.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgents } from 'rhizo-co-terraform-provider-oci'

const dataOciManagementAgentManagementAgentsManagementAgents: dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgents = { ... }
```


### DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensions <a name="DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensions" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensions.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgents } from 'rhizo-co-terraform-provider-oci'

const dataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensions: dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensions = { ... }
```


### DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStruct <a name="DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStruct" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStruct.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgents } from 'rhizo-co-terraform-provider-oci'

const dataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStruct: dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStruct = { ... }
```


### DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStruct <a name="DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStruct" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStruct.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgents } from 'rhizo-co-terraform-provider-oci'

const dataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStruct: dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStruct = { ... }
```


### DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentProperties <a name="DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentProperties" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentProperties.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgents } from 'rhizo-co-terraform-provider-oci'

const dataOciManagementAgentManagementAgentsManagementAgentsManagementAgentProperties: dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentProperties = { ... }
```


### DataOciManagementAgentManagementAgentsManagementAgentsPluginListStruct <a name="DataOciManagementAgentManagementAgentsManagementAgentsPluginListStruct" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStruct.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgents } from 'rhizo-co-terraform-provider-oci'

const dataOciManagementAgentManagementAgentsManagementAgentsPluginListStruct: dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStruct = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciManagementAgentManagementAgentsFilterList <a name="DataOciManagementAgentManagementAgentsFilterList" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterList.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgents } from 'rhizo-co-terraform-provider-oci'

new dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterList.get"></a>

```typescript
public get(index: number): DataOciManagementAgentManagementAgentsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilter">DataOciManagementAgentManagementAgentsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciManagementAgentManagementAgentsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilter">DataOciManagementAgentManagementAgentsFilter</a>[]

---


### DataOciManagementAgentManagementAgentsFilterOutputReference <a name="DataOciManagementAgentManagementAgentsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgents } from 'rhizo-co-terraform-provider-oci'

new dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilter">DataOciManagementAgentManagementAgentsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciManagementAgentManagementAgentsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsFilter">DataOciManagementAgentManagementAgentsFilter</a>

---


### DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsList <a name="DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsList" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsList.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgents } from 'rhizo-co-terraform-provider-oci'

new dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsList.get"></a>

```typescript
public get(index: number): DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference <a name="DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgents } from 'rhizo-co-terraform-provider-oci'

new dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensions">DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensions">DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensions</a>

---


### DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructList <a name="DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructList" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructList.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgents } from 'rhizo-co-terraform-provider-oci'

new dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructList.get"></a>

```typescript
public get(index: number): DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference <a name="DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgents } from 'rhizo-co-terraform-provider-oci'

new dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.property.allowMetrics">allowMetrics</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.property.connectionTimeout">connectionTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.property.isDaemonSet">isDaemonSet</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.property.metricDimensions">metricDimensions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsList">DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.property.proxyUrl">proxyUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.property.readDataLimit">readDataLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.property.readTimeout">readTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.property.resourceGroup">resourceGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.property.scheduleMins">scheduleMins</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStruct">DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowMetrics`<sup>Required</sup> <a name="allowMetrics" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.property.allowMetrics"></a>

```typescript
public readonly allowMetrics: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `connectionTimeout`<sup>Required</sup> <a name="connectionTimeout" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.property.connectionTimeout"></a>

```typescript
public readonly connectionTimeout: number;
```

- *Type:* number

---

##### `isDaemonSet`<sup>Required</sup> <a name="isDaemonSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.property.isDaemonSet"></a>

```typescript
public readonly isDaemonSet: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `metricDimensions`<sup>Required</sup> <a name="metricDimensions" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.property.metricDimensions"></a>

```typescript
public readonly metricDimensions: DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsList">DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `proxyUrl`<sup>Required</sup> <a name="proxyUrl" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.property.proxyUrl"></a>

```typescript
public readonly proxyUrl: string;
```

- *Type:* string

---

##### `readDataLimit`<sup>Required</sup> <a name="readDataLimit" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.property.readDataLimit"></a>

```typescript
public readonly readDataLimit: number;
```

- *Type:* number

---

##### `readTimeout`<sup>Required</sup> <a name="readTimeout" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.property.readTimeout"></a>

```typescript
public readonly readTimeout: number;
```

- *Type:* number

---

##### `resourceGroup`<sup>Required</sup> <a name="resourceGroup" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.property.resourceGroup"></a>

```typescript
public readonly resourceGroup: string;
```

- *Type:* string

---

##### `scheduleMins`<sup>Required</sup> <a name="scheduleMins" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.property.scheduleMins"></a>

```typescript
public readonly scheduleMins: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStruct;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStruct">DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStruct</a>

---


### DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructList <a name="DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructList" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructList.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgents } from 'rhizo-co-terraform-provider-oci'

new dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructList.get"></a>

```typescript
public get(index: number): DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference <a name="DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgents } from 'rhizo-co-terraform-provider-oci'

new dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.property.isDaemonSet">isDaemonSet</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStruct">DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isDaemonSet`<sup>Required</sup> <a name="isDaemonSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.property.isDaemonSet"></a>

```typescript
public readonly isDaemonSet: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStruct;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStruct">DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStruct</a>

---


### DataOciManagementAgentManagementAgentsManagementAgentsList <a name="DataOciManagementAgentManagementAgentsManagementAgentsList" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsList.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgents } from 'rhizo-co-terraform-provider-oci'

new dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsList.get"></a>

```typescript
public get(index: number): DataOciManagementAgentManagementAgentsManagementAgentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesList <a name="DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesList" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesList.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgents } from 'rhizo-co-terraform-provider-oci'

new dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesList.get"></a>

```typescript
public get(index: number): DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference <a name="DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgents } from 'rhizo-co-terraform-provider-oci'

new dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.property.units">units</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentProperties">DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `units`<sup>Required</sup> <a name="units" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.property.units"></a>

```typescript
public readonly units: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentProperties;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentProperties">DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentProperties</a>

---


### DataOciManagementAgentManagementAgentsManagementAgentsOutputReference <a name="DataOciManagementAgentManagementAgentsManagementAgentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgents } from 'rhizo-co-terraform-provider-oci'

new dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.availabilityStatus">availabilityStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.dataSourceList">dataSourceList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructList">DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.dataSourceSummaryList">dataSourceSummaryList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructList">DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.deployPluginsId">deployPluginsId</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.hostId">hostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.installKeyId">installKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.installPath">installPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.installType">installType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.isAgentAutoUpgradable">isAgentAutoUpgradable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.isCustomerDeployed">isCustomerDeployed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.managedAgentId">managedAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.managementAgentProperties">managementAgentProperties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesList">DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.platformName">platformName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.platformType">platformType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.platformVersion">platformVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.pluginList">pluginList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructList">DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.resourceArtifactVersion">resourceArtifactVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.timeLastHeartbeat">timeLastHeartbeat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgents">DataOciManagementAgentManagementAgentsManagementAgents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityStatus`<sup>Required</sup> <a name="availabilityStatus" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.availabilityStatus"></a>

```typescript
public readonly availabilityStatus: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `dataSourceList`<sup>Required</sup> <a name="dataSourceList" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.dataSourceList"></a>

```typescript
public readonly dataSourceList: DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructList">DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructList</a>

---

##### `dataSourceSummaryList`<sup>Required</sup> <a name="dataSourceSummaryList" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.dataSourceSummaryList"></a>

```typescript
public readonly dataSourceSummaryList: DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructList">DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructList</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `deployPluginsId`<sup>Required</sup> <a name="deployPluginsId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.deployPluginsId"></a>

```typescript
public readonly deployPluginsId: string[];
```

- *Type:* string[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `host`<sup>Required</sup> <a name="host" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `hostId`<sup>Required</sup> <a name="hostId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.hostId"></a>

```typescript
public readonly hostId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `installKeyId`<sup>Required</sup> <a name="installKeyId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.installKeyId"></a>

```typescript
public readonly installKeyId: string;
```

- *Type:* string

---

##### `installPath`<sup>Required</sup> <a name="installPath" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.installPath"></a>

```typescript
public readonly installPath: string;
```

- *Type:* string

---

##### `installType`<sup>Required</sup> <a name="installType" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.installType"></a>

```typescript
public readonly installType: string;
```

- *Type:* string

---

##### `isAgentAutoUpgradable`<sup>Required</sup> <a name="isAgentAutoUpgradable" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.isAgentAutoUpgradable"></a>

```typescript
public readonly isAgentAutoUpgradable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isCustomerDeployed`<sup>Required</sup> <a name="isCustomerDeployed" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.isCustomerDeployed"></a>

```typescript
public readonly isCustomerDeployed: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `managedAgentId`<sup>Required</sup> <a name="managedAgentId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.managedAgentId"></a>

```typescript
public readonly managedAgentId: string;
```

- *Type:* string

---

##### `managementAgentProperties`<sup>Required</sup> <a name="managementAgentProperties" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.managementAgentProperties"></a>

```typescript
public readonly managementAgentProperties: DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesList">DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesList</a>

---

##### `platformName`<sup>Required</sup> <a name="platformName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.platformName"></a>

```typescript
public readonly platformName: string;
```

- *Type:* string

---

##### `platformType`<sup>Required</sup> <a name="platformType" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.platformType"></a>

```typescript
public readonly platformType: string;
```

- *Type:* string

---

##### `platformVersion`<sup>Required</sup> <a name="platformVersion" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.platformVersion"></a>

```typescript
public readonly platformVersion: string;
```

- *Type:* string

---

##### `pluginList`<sup>Required</sup> <a name="pluginList" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.pluginList"></a>

```typescript
public readonly pluginList: DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructList">DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructList</a>

---

##### `resourceArtifactVersion`<sup>Required</sup> <a name="resourceArtifactVersion" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.resourceArtifactVersion"></a>

```typescript
public readonly resourceArtifactVersion: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeLastHeartbeat`<sup>Required</sup> <a name="timeLastHeartbeat" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.timeLastHeartbeat"></a>

```typescript
public readonly timeLastHeartbeat: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciManagementAgentManagementAgentsManagementAgents;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgents">DataOciManagementAgentManagementAgentsManagementAgents</a>

---


### DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructList <a name="DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructList" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructList.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgents } from 'rhizo-co-terraform-provider-oci'

new dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructList.get"></a>

```typescript
public get(index: number): DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference <a name="DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgents } from 'rhizo-co-terraform-provider-oci'

new dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.property.isEnabled">isEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.property.pluginDisplayName">pluginDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.property.pluginId">pluginId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.property.pluginName">pluginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.property.pluginStatus">pluginStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.property.pluginStatusMessage">pluginStatusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.property.pluginVersion">pluginVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStruct">DataOciManagementAgentManagementAgentsManagementAgentsPluginListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `pluginDisplayName`<sup>Required</sup> <a name="pluginDisplayName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.property.pluginDisplayName"></a>

```typescript
public readonly pluginDisplayName: string;
```

- *Type:* string

---

##### `pluginId`<sup>Required</sup> <a name="pluginId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.property.pluginId"></a>

```typescript
public readonly pluginId: string;
```

- *Type:* string

---

##### `pluginName`<sup>Required</sup> <a name="pluginName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.property.pluginName"></a>

```typescript
public readonly pluginName: string;
```

- *Type:* string

---

##### `pluginStatus`<sup>Required</sup> <a name="pluginStatus" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.property.pluginStatus"></a>

```typescript
public readonly pluginStatus: string;
```

- *Type:* string

---

##### `pluginStatusMessage`<sup>Required</sup> <a name="pluginStatusMessage" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.property.pluginStatusMessage"></a>

```typescript
public readonly pluginStatusMessage: string;
```

- *Type:* string

---

##### `pluginVersion`<sup>Required</sup> <a name="pluginVersion" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.property.pluginVersion"></a>

```typescript
public readonly pluginVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciManagementAgentManagementAgentsManagementAgentsPluginListStruct;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgents.DataOciManagementAgentManagementAgentsManagementAgentsPluginListStruct">DataOciManagementAgentManagementAgentsManagementAgentsPluginListStruct</a>

---



