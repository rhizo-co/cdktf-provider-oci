# `dataOciGoldenGateDeployments` Submodule <a name="`dataOciGoldenGateDeployments` Submodule" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciGoldenGateDeployments <a name="DataOciGoldenGateDeployments" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments oci_golden_gate_deployments}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.Initializer"></a>

```typescript
import { dataOciGoldenGateDeployments } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateDeployments.DataOciGoldenGateDeployments(scope: Construct, id: string, config: DataOciGoldenGateDeploymentsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig">DataOciGoldenGateDeploymentsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig">DataOciGoldenGateDeploymentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetAssignableConnectionId">resetAssignableConnectionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetAssignedConnectionId">resetAssignedConnectionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetFqdn">resetFqdn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetLifecycleSubState">resetLifecycleSubState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetSupportedConnectionType">resetSupportedConnectionType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciGoldenGateDeploymentsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilter">DataOciGoldenGateDeploymentsFilter</a>[]

---

##### `resetAssignableConnectionId` <a name="resetAssignableConnectionId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetAssignableConnectionId"></a>

```typescript
public resetAssignableConnectionId(): void
```

##### `resetAssignedConnectionId` <a name="resetAssignedConnectionId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetAssignedConnectionId"></a>

```typescript
public resetAssignedConnectionId(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetFqdn` <a name="resetFqdn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetFqdn"></a>

```typescript
public resetFqdn(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLifecycleSubState` <a name="resetLifecycleSubState" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetLifecycleSubState"></a>

```typescript
public resetLifecycleSubState(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetState"></a>

```typescript
public resetState(): void
```

##### `resetSupportedConnectionType` <a name="resetSupportedConnectionType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetSupportedConnectionType"></a>

```typescript
public resetSupportedConnectionType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciGoldenGateDeployments resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.isConstruct"></a>

```typescript
import { dataOciGoldenGateDeployments } from 'rhizo-co-terraform-provider-oci'

dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.isTerraformElement"></a>

```typescript
import { dataOciGoldenGateDeployments } from 'rhizo-co-terraform-provider-oci'

dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.isTerraformDataSource"></a>

```typescript
import { dataOciGoldenGateDeployments } from 'rhizo-co-terraform-provider-oci'

dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.generateConfigForImport"></a>

```typescript
import { dataOciGoldenGateDeployments } from 'rhizo-co-terraform-provider-oci'

dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciGoldenGateDeployments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciGoldenGateDeployments to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciGoldenGateDeployments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciGoldenGateDeployments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.deploymentCollection">deploymentCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList">DataOciGoldenGateDeploymentsDeploymentCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList">DataOciGoldenGateDeploymentsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.assignableConnectionIdInput">assignableConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.assignedConnectionIdInput">assignedConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilter">DataOciGoldenGateDeploymentsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.fqdnInput">fqdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.lifecycleSubStateInput">lifecycleSubStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.supportedConnectionTypeInput">supportedConnectionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.assignableConnectionId">assignableConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.assignedConnectionId">assignedConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.lifecycleSubState">lifecycleSubState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.supportedConnectionType">supportedConnectionType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `deploymentCollection`<sup>Required</sup> <a name="deploymentCollection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.deploymentCollection"></a>

```typescript
public readonly deploymentCollection: DataOciGoldenGateDeploymentsDeploymentCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList">DataOciGoldenGateDeploymentsDeploymentCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.filter"></a>

```typescript
public readonly filter: DataOciGoldenGateDeploymentsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList">DataOciGoldenGateDeploymentsFilterList</a>

---

##### `assignableConnectionIdInput`<sup>Optional</sup> <a name="assignableConnectionIdInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.assignableConnectionIdInput"></a>

```typescript
public readonly assignableConnectionIdInput: string;
```

- *Type:* string

---

##### `assignedConnectionIdInput`<sup>Optional</sup> <a name="assignedConnectionIdInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.assignedConnectionIdInput"></a>

```typescript
public readonly assignedConnectionIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciGoldenGateDeploymentsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilter">DataOciGoldenGateDeploymentsFilter</a>[]

---

##### `fqdnInput`<sup>Optional</sup> <a name="fqdnInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.fqdnInput"></a>

```typescript
public readonly fqdnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `lifecycleSubStateInput`<sup>Optional</sup> <a name="lifecycleSubStateInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.lifecycleSubStateInput"></a>

```typescript
public readonly lifecycleSubStateInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `supportedConnectionTypeInput`<sup>Optional</sup> <a name="supportedConnectionTypeInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.supportedConnectionTypeInput"></a>

```typescript
public readonly supportedConnectionTypeInput: string;
```

- *Type:* string

---

##### `assignableConnectionId`<sup>Required</sup> <a name="assignableConnectionId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.assignableConnectionId"></a>

```typescript
public readonly assignableConnectionId: string;
```

- *Type:* string

---

##### `assignedConnectionId`<sup>Required</sup> <a name="assignedConnectionId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.assignedConnectionId"></a>

```typescript
public readonly assignedConnectionId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleSubState`<sup>Required</sup> <a name="lifecycleSubState" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.lifecycleSubState"></a>

```typescript
public readonly lifecycleSubState: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `supportedConnectionType`<sup>Required</sup> <a name="supportedConnectionType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.supportedConnectionType"></a>

```typescript
public readonly supportedConnectionType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciGoldenGateDeploymentsConfig <a name="DataOciGoldenGateDeploymentsConfig" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.Initializer"></a>

```typescript
import { dataOciGoldenGateDeployments } from 'rhizo-co-terraform-provider-oci'

const dataOciGoldenGateDeploymentsConfig: dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#compartment_id DataOciGoldenGateDeployments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.assignableConnectionId">assignableConnectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#assignable_connection_id DataOciGoldenGateDeployments#assignable_connection_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.assignedConnectionId">assignedConnectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#assigned_connection_id DataOciGoldenGateDeployments#assigned_connection_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#display_name DataOciGoldenGateDeployments#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilter">DataOciGoldenGateDeploymentsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.fqdn">fqdn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#fqdn DataOciGoldenGateDeployments#fqdn}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#id DataOciGoldenGateDeployments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.lifecycleSubState">lifecycleSubState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#lifecycle_sub_state DataOciGoldenGateDeployments#lifecycle_sub_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#state DataOciGoldenGateDeployments#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.supportedConnectionType">supportedConnectionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#supported_connection_type DataOciGoldenGateDeployments#supported_connection_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#compartment_id DataOciGoldenGateDeployments#compartment_id}.

---

##### `assignableConnectionId`<sup>Optional</sup> <a name="assignableConnectionId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.assignableConnectionId"></a>

```typescript
public readonly assignableConnectionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#assignable_connection_id DataOciGoldenGateDeployments#assignable_connection_id}.

---

##### `assignedConnectionId`<sup>Optional</sup> <a name="assignedConnectionId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.assignedConnectionId"></a>

```typescript
public readonly assignedConnectionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#assigned_connection_id DataOciGoldenGateDeployments#assigned_connection_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#display_name DataOciGoldenGateDeployments#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciGoldenGateDeploymentsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilter">DataOciGoldenGateDeploymentsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#filter DataOciGoldenGateDeployments#filter}

---

##### `fqdn`<sup>Optional</sup> <a name="fqdn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#fqdn DataOciGoldenGateDeployments#fqdn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#id DataOciGoldenGateDeployments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lifecycleSubState`<sup>Optional</sup> <a name="lifecycleSubState" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.lifecycleSubState"></a>

```typescript
public readonly lifecycleSubState: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#lifecycle_sub_state DataOciGoldenGateDeployments#lifecycle_sub_state}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#state DataOciGoldenGateDeployments#state}.

---

##### `supportedConnectionType`<sup>Optional</sup> <a name="supportedConnectionType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.supportedConnectionType"></a>

```typescript
public readonly supportedConnectionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#supported_connection_type DataOciGoldenGateDeployments#supported_connection_type}.

---

### DataOciGoldenGateDeploymentsDeploymentCollection <a name="DataOciGoldenGateDeploymentsDeploymentCollection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollection.Initializer"></a>

```typescript
import { dataOciGoldenGateDeployments } from 'rhizo-co-terraform-provider-oci'

const dataOciGoldenGateDeploymentsDeploymentCollection: dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollection = { ... }
```


### DataOciGoldenGateDeploymentsDeploymentCollectionItems <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItems.Initializer"></a>

```typescript
import { dataOciGoldenGateDeployments } from 'rhizo-co-terraform-provider-oci'

const dataOciGoldenGateDeploymentsDeploymentCollectionItems: dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItems = { ... }
```


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticData <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticData" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticData.Initializer"></a>

```typescript
import { dataOciGoldenGateDeployments } from 'rhizo-co-terraform-provider-oci'

const dataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticData: dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticData = { ... }
```


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIps <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIps" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIps.Initializer"></a>

```typescript
import { dataOciGoldenGateDeployments } from 'rhizo-co-terraform-provider-oci'

const dataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIps: dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIps = { ... }
```


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocks <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocks" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocks.Initializer"></a>

```typescript
import { dataOciGoldenGateDeployments } from 'rhizo-co-terraform-provider-oci'

const dataOciGoldenGateDeploymentsDeploymentCollectionItemsLocks: dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocks = { ... }
```


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfiguration <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfiguration" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfiguration.Initializer"></a>

```typescript
import { dataOciGoldenGateDeployments } from 'rhizo-co-terraform-provider-oci'

const dataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfiguration: dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfiguration = { ... }
```


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindow <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindow" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindow.Initializer"></a>

```typescript
import { dataOciGoldenGateDeployments } from 'rhizo-co-terraform-provider-oci'

const dataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindow: dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindow = { ... }
```


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggData <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggData" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggData.Initializer"></a>

```typescript
import { dataOciGoldenGateDeployments } from 'rhizo-co-terraform-provider-oci'

const dataOciGoldenGateDeploymentsDeploymentCollectionItemsOggData: dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggData = { ... }
```


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMapping <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMapping" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMapping"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMapping.Initializer"></a>

```typescript
import { dataOciGoldenGateDeployments } from 'rhizo-co-terraform-provider-oci'

const dataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMapping: dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMapping = { ... }
```


### DataOciGoldenGateDeploymentsFilter <a name="DataOciGoldenGateDeploymentsFilter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilter.Initializer"></a>

```typescript
import { dataOciGoldenGateDeployments } from 'rhizo-co-terraform-provider-oci'

const dataOciGoldenGateDeploymentsFilter: dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#name DataOciGoldenGateDeployments#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#values DataOciGoldenGateDeployments#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#regex DataOciGoldenGateDeployments#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#name DataOciGoldenGateDeployments#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#values DataOciGoldenGateDeployments#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#regex DataOciGoldenGateDeployments#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.Initializer"></a>

```typescript
import { dataOciGoldenGateDeployments } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.get"></a>

```typescript
public get(index: number): DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.Initializer"></a>

```typescript
import { dataOciGoldenGateDeployments } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.property.diagnosticState">diagnosticState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.property.timeDiagnosticEnd">timeDiagnosticEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.property.timeDiagnosticStart">timeDiagnosticStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticData">DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `diagnosticState`<sup>Required</sup> <a name="diagnosticState" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.property.diagnosticState"></a>

```typescript
public readonly diagnosticState: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `timeDiagnosticEnd`<sup>Required</sup> <a name="timeDiagnosticEnd" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.property.timeDiagnosticEnd"></a>

```typescript
public readonly timeDiagnosticEnd: string;
```

- *Type:* string

---

##### `timeDiagnosticStart`<sup>Required</sup> <a name="timeDiagnosticStart" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.property.timeDiagnosticStart"></a>

```typescript
public readonly timeDiagnosticStart: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticData;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticData">DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticData</a>

---


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.Initializer"></a>

```typescript
import { dataOciGoldenGateDeployments } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.get"></a>

```typescript
public get(index: number): DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.Initializer"></a>

```typescript
import { dataOciGoldenGateDeployments } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.property.ingressIp">ingressIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIps">DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ingressIp`<sup>Required</sup> <a name="ingressIp" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.property.ingressIp"></a>

```typescript
public readonly ingressIp: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIps;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIps">DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIps</a>

---


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsList <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.Initializer"></a>

```typescript
import { dataOciGoldenGateDeployments } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.Initializer"></a>

```typescript
import { dataOciGoldenGateDeployments } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.get"></a>

```typescript
public get(index: number): DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.Initializer"></a>

```typescript
import { dataOciGoldenGateDeployments } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.property.relatedResourceId">relatedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocks">DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `relatedResourceId`<sup>Required</sup> <a name="relatedResourceId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.property.relatedResourceId"></a>

```typescript
public readonly relatedResourceId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocks;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocks">DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocks</a>

---


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.Initializer"></a>

```typescript
import { dataOciGoldenGateDeployments } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.get"></a>

```typescript
public get(index: number): DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.Initializer"></a>

```typescript
import { dataOciGoldenGateDeployments } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.property.bundleReleaseUpgradePeriodInDays">bundleReleaseUpgradePeriodInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.property.interimReleaseUpgradePeriodInDays">interimReleaseUpgradePeriodInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.property.isInterimReleaseAutoUpgradeEnabled">isInterimReleaseAutoUpgradeEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.property.majorReleaseUpgradePeriodInDays">majorReleaseUpgradePeriodInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.property.securityPatchUpgradePeriodInDays">securityPatchUpgradePeriodInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfiguration">DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bundleReleaseUpgradePeriodInDays`<sup>Required</sup> <a name="bundleReleaseUpgradePeriodInDays" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.property.bundleReleaseUpgradePeriodInDays"></a>

```typescript
public readonly bundleReleaseUpgradePeriodInDays: number;
```

- *Type:* number

---

##### `interimReleaseUpgradePeriodInDays`<sup>Required</sup> <a name="interimReleaseUpgradePeriodInDays" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.property.interimReleaseUpgradePeriodInDays"></a>

```typescript
public readonly interimReleaseUpgradePeriodInDays: number;
```

- *Type:* number

---

##### `isInterimReleaseAutoUpgradeEnabled`<sup>Required</sup> <a name="isInterimReleaseAutoUpgradeEnabled" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.property.isInterimReleaseAutoUpgradeEnabled"></a>

```typescript
public readonly isInterimReleaseAutoUpgradeEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `majorReleaseUpgradePeriodInDays`<sup>Required</sup> <a name="majorReleaseUpgradePeriodInDays" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.property.majorReleaseUpgradePeriodInDays"></a>

```typescript
public readonly majorReleaseUpgradePeriodInDays: number;
```

- *Type:* number

---

##### `securityPatchUpgradePeriodInDays`<sup>Required</sup> <a name="securityPatchUpgradePeriodInDays" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.property.securityPatchUpgradePeriodInDays"></a>

```typescript
public readonly securityPatchUpgradePeriodInDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfiguration">DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfiguration</a>

---


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.Initializer"></a>

```typescript
import { dataOciGoldenGateDeployments } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.get"></a>

```typescript
public get(index: number): DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.Initializer"></a>

```typescript
import { dataOciGoldenGateDeployments } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.property.day">day</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.property.startHour">startHour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindow">DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `day`<sup>Required</sup> <a name="day" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.property.day"></a>

```typescript
public readonly day: string;
```

- *Type:* string

---

##### `startHour`<sup>Required</sup> <a name="startHour" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.property.startHour"></a>

```typescript
public readonly startHour: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindow;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindow">DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindow</a>

---


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.Initializer"></a>

```typescript
import { dataOciGoldenGateDeployments } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.get"></a>

```typescript
public get(index: number): DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.Initializer"></a>

```typescript
import { dataOciGoldenGateDeployments } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.property.administratorGroupId">administratorGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.property.operatorGroupId">operatorGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.property.securityGroupId">securityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.property.userGroupId">userGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMapping">DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `administratorGroupId`<sup>Required</sup> <a name="administratorGroupId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.property.administratorGroupId"></a>

```typescript
public readonly administratorGroupId: string;
```

- *Type:* string

---

##### `operatorGroupId`<sup>Required</sup> <a name="operatorGroupId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.property.operatorGroupId"></a>

```typescript
public readonly operatorGroupId: string;
```

- *Type:* string

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.property.securityGroupId"></a>

```typescript
public readonly securityGroupId: string;
```

- *Type:* string

---

##### `userGroupId`<sup>Required</sup> <a name="userGroupId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.property.userGroupId"></a>

```typescript
public readonly userGroupId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMapping;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMapping">DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMapping</a>

---


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.Initializer"></a>

```typescript
import { dataOciGoldenGateDeployments } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.get"></a>

```typescript
public get(index: number): DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.Initializer"></a>

```typescript
import { dataOciGoldenGateDeployments } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.adminPassword">adminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.adminUsername">adminUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.credentialStore">credentialStore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.deploymentName">deploymentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.groupToRolesMapping">groupToRolesMapping</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList">DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.identityDomainId">identityDomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.oggVersion">oggVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.passwordSecretId">passwordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggData">DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.adminPassword"></a>

```typescript
public readonly adminPassword: string;
```

- *Type:* string

---

##### `adminUsername`<sup>Required</sup> <a name="adminUsername" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.adminUsername"></a>

```typescript
public readonly adminUsername: string;
```

- *Type:* string

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `credentialStore`<sup>Required</sup> <a name="credentialStore" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.credentialStore"></a>

```typescript
public readonly credentialStore: string;
```

- *Type:* string

---

##### `deploymentName`<sup>Required</sup> <a name="deploymentName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.deploymentName"></a>

```typescript
public readonly deploymentName: string;
```

- *Type:* string

---

##### `groupToRolesMapping`<sup>Required</sup> <a name="groupToRolesMapping" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.groupToRolesMapping"></a>

```typescript
public readonly groupToRolesMapping: DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList">DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList</a>

---

##### `identityDomainId`<sup>Required</sup> <a name="identityDomainId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.identityDomainId"></a>

```typescript
public readonly identityDomainId: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `oggVersion`<sup>Required</sup> <a name="oggVersion" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.oggVersion"></a>

```typescript
public readonly oggVersion: string;
```

- *Type:* string

---

##### `passwordSecretId`<sup>Required</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.passwordSecretId"></a>

```typescript
public readonly passwordSecretId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggData;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggData">DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggData</a>

---


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciGoldenGateDeployments } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.cpuCoreCount">cpuCoreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.deploymentBackupId">deploymentBackupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.deploymentDiagnosticData">deploymentDiagnosticData</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList">DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.deploymentType">deploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.deploymentUrl">deploymentUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.environmentType">environmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.ingressIps">ingressIps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList">DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.isAutoScalingEnabled">isAutoScalingEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.isHealthy">isHealthy</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.isLatestVersion">isLatestVersion</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.isLockOverride">isLockOverride</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.isPublic">isPublic</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.isStorageUtilizationLimitExceeded">isStorageUtilizationLimitExceeded</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.licenseModel">licenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.lifecycleSubState">lifecycleSubState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.loadBalancerSubnetId">loadBalancerSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList">DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.maintenanceConfiguration">maintenanceConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList">DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList">DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.nextMaintenanceActionType">nextMaintenanceActionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.nextMaintenanceDescription">nextMaintenanceDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.oggData">oggData</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList">DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.privateIpAddress">privateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.publicIpAddress">publicIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.storageUtilizationInBytes">storageUtilizationInBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.timeOfNextMaintenance">timeOfNextMaintenance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.timeOggVersionSupportedUntil">timeOggVersionSupportedUntil</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.timeUpgradeRequired">timeUpgradeRequired</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItems">DataOciGoldenGateDeploymentsDeploymentCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.cpuCoreCount"></a>

```typescript
public readonly cpuCoreCount: number;
```

- *Type:* number

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `deploymentBackupId`<sup>Required</sup> <a name="deploymentBackupId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.deploymentBackupId"></a>

```typescript
public readonly deploymentBackupId: string;
```

- *Type:* string

---

##### `deploymentDiagnosticData`<sup>Required</sup> <a name="deploymentDiagnosticData" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.deploymentDiagnosticData"></a>

```typescript
public readonly deploymentDiagnosticData: DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList">DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList</a>

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.deploymentType"></a>

```typescript
public readonly deploymentType: string;
```

- *Type:* string

---

##### `deploymentUrl`<sup>Required</sup> <a name="deploymentUrl" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.deploymentUrl"></a>

```typescript
public readonly deploymentUrl: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `environmentType`<sup>Required</sup> <a name="environmentType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.environmentType"></a>

```typescript
public readonly environmentType: string;
```

- *Type:* string

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ingressIps`<sup>Required</sup> <a name="ingressIps" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.ingressIps"></a>

```typescript
public readonly ingressIps: DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList">DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList</a>

---

##### `isAutoScalingEnabled`<sup>Required</sup> <a name="isAutoScalingEnabled" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.isAutoScalingEnabled"></a>

```typescript
public readonly isAutoScalingEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isHealthy`<sup>Required</sup> <a name="isHealthy" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.isHealthy"></a>

```typescript
public readonly isHealthy: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isLatestVersion`<sup>Required</sup> <a name="isLatestVersion" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.isLatestVersion"></a>

```typescript
public readonly isLatestVersion: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isLockOverride`<sup>Required</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.isLockOverride"></a>

```typescript
public readonly isLockOverride: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isPublic`<sup>Required</sup> <a name="isPublic" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.isPublic"></a>

```typescript
public readonly isPublic: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isStorageUtilizationLimitExceeded`<sup>Required</sup> <a name="isStorageUtilizationLimitExceeded" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.isStorageUtilizationLimitExceeded"></a>

```typescript
public readonly isStorageUtilizationLimitExceeded: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.licenseModel"></a>

```typescript
public readonly licenseModel: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `lifecycleSubState`<sup>Required</sup> <a name="lifecycleSubState" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.lifecycleSubState"></a>

```typescript
public readonly lifecycleSubState: string;
```

- *Type:* string

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

---

##### `loadBalancerSubnetId`<sup>Required</sup> <a name="loadBalancerSubnetId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.loadBalancerSubnetId"></a>

```typescript
public readonly loadBalancerSubnetId: string;
```

- *Type:* string

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.locks"></a>

```typescript
public readonly locks: DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList">DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList</a>

---

##### `maintenanceConfiguration`<sup>Required</sup> <a name="maintenanceConfiguration" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.maintenanceConfiguration"></a>

```typescript
public readonly maintenanceConfiguration: DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList">DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList</a>

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList">DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList</a>

---

##### `nextMaintenanceActionType`<sup>Required</sup> <a name="nextMaintenanceActionType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.nextMaintenanceActionType"></a>

```typescript
public readonly nextMaintenanceActionType: string;
```

- *Type:* string

---

##### `nextMaintenanceDescription`<sup>Required</sup> <a name="nextMaintenanceDescription" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.nextMaintenanceDescription"></a>

```typescript
public readonly nextMaintenanceDescription: string;
```

- *Type:* string

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

---

##### `oggData`<sup>Required</sup> <a name="oggData" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.oggData"></a>

```typescript
public readonly oggData: DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList">DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList</a>

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: string;
```

- *Type:* string

---

##### `publicIpAddress`<sup>Required</sup> <a name="publicIpAddress" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.publicIpAddress"></a>

```typescript
public readonly publicIpAddress: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `storageUtilizationInBytes`<sup>Required</sup> <a name="storageUtilizationInBytes" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.storageUtilizationInBytes"></a>

```typescript
public readonly storageUtilizationInBytes: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeOfNextMaintenance`<sup>Required</sup> <a name="timeOfNextMaintenance" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.timeOfNextMaintenance"></a>

```typescript
public readonly timeOfNextMaintenance: string;
```

- *Type:* string

---

##### `timeOggVersionSupportedUntil`<sup>Required</sup> <a name="timeOggVersionSupportedUntil" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.timeOggVersionSupportedUntil"></a>

```typescript
public readonly timeOggVersionSupportedUntil: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `timeUpgradeRequired`<sup>Required</sup> <a name="timeUpgradeRequired" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.timeUpgradeRequired"></a>

```typescript
public readonly timeUpgradeRequired: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciGoldenGateDeploymentsDeploymentCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItems">DataOciGoldenGateDeploymentsDeploymentCollectionItems</a>

---


### DataOciGoldenGateDeploymentsDeploymentCollectionList <a name="DataOciGoldenGateDeploymentsDeploymentCollectionList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.Initializer"></a>

```typescript
import { dataOciGoldenGateDeployments } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.get"></a>

```typescript
public get(index: number): DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference <a name="DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciGoldenGateDeployments } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList">DataOciGoldenGateDeploymentsDeploymentCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollection">DataOciGoldenGateDeploymentsDeploymentCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciGoldenGateDeploymentsDeploymentCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList">DataOciGoldenGateDeploymentsDeploymentCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciGoldenGateDeploymentsDeploymentCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollection">DataOciGoldenGateDeploymentsDeploymentCollection</a>

---


### DataOciGoldenGateDeploymentsFilterList <a name="DataOciGoldenGateDeploymentsFilterList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.Initializer"></a>

```typescript
import { dataOciGoldenGateDeployments } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.get"></a>

```typescript
public get(index: number): DataOciGoldenGateDeploymentsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilter">DataOciGoldenGateDeploymentsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciGoldenGateDeploymentsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilter">DataOciGoldenGateDeploymentsFilter</a>[]

---


### DataOciGoldenGateDeploymentsFilterOutputReference <a name="DataOciGoldenGateDeploymentsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciGoldenGateDeployments } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilter">DataOciGoldenGateDeploymentsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciGoldenGateDeploymentsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilter">DataOciGoldenGateDeploymentsFilter</a>

---



