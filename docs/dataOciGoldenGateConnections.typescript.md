# `dataOciGoldenGateConnections` Submodule <a name="`dataOciGoldenGateConnections` Submodule" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciGoldenGateConnections <a name="DataOciGoldenGateConnections" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections oci_golden_gate_connections}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.Initializer"></a>

```typescript
import { dataOciGoldenGateConnections } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateConnections.DataOciGoldenGateConnections(scope: Construct, id: string, config: DataOciGoldenGateConnectionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig">DataOciGoldenGateConnectionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig">DataOciGoldenGateConnectionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.resetAssignableDeploymentId">resetAssignableDeploymentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.resetAssignableDeploymentType">resetAssignableDeploymentType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.resetAssignedDeploymentId">resetAssignedDeploymentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.resetConnectionType">resetConnectionType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.resetTechnologyType">resetTechnologyType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciGoldenGateConnectionsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilter">DataOciGoldenGateConnectionsFilter</a>[]

---

##### `resetAssignableDeploymentId` <a name="resetAssignableDeploymentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.resetAssignableDeploymentId"></a>

```typescript
public resetAssignableDeploymentId(): void
```

##### `resetAssignableDeploymentType` <a name="resetAssignableDeploymentType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.resetAssignableDeploymentType"></a>

```typescript
public resetAssignableDeploymentType(): void
```

##### `resetAssignedDeploymentId` <a name="resetAssignedDeploymentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.resetAssignedDeploymentId"></a>

```typescript
public resetAssignedDeploymentId(): void
```

##### `resetConnectionType` <a name="resetConnectionType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.resetConnectionType"></a>

```typescript
public resetConnectionType(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTechnologyType` <a name="resetTechnologyType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.resetTechnologyType"></a>

```typescript
public resetTechnologyType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciGoldenGateConnections resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.isConstruct"></a>

```typescript
import { dataOciGoldenGateConnections } from 'rhizo-co-terraform-provider-oci'

dataOciGoldenGateConnections.DataOciGoldenGateConnections.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.isTerraformElement"></a>

```typescript
import { dataOciGoldenGateConnections } from 'rhizo-co-terraform-provider-oci'

dataOciGoldenGateConnections.DataOciGoldenGateConnections.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.isTerraformDataSource"></a>

```typescript
import { dataOciGoldenGateConnections } from 'rhizo-co-terraform-provider-oci'

dataOciGoldenGateConnections.DataOciGoldenGateConnections.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.generateConfigForImport"></a>

```typescript
import { dataOciGoldenGateConnections } from 'rhizo-co-terraform-provider-oci'

dataOciGoldenGateConnections.DataOciGoldenGateConnections.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciGoldenGateConnections resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciGoldenGateConnections to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciGoldenGateConnections that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciGoldenGateConnections to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.connectionCollection">connectionCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList">DataOciGoldenGateConnectionsConnectionCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList">DataOciGoldenGateConnectionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.assignableDeploymentIdInput">assignableDeploymentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.assignableDeploymentTypeInput">assignableDeploymentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.assignedDeploymentIdInput">assignedDeploymentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.connectionTypeInput">connectionTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilter">DataOciGoldenGateConnectionsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.technologyTypeInput">technologyTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.assignableDeploymentId">assignableDeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.assignableDeploymentType">assignableDeploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.assignedDeploymentId">assignedDeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.connectionType">connectionType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.technologyType">technologyType</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `connectionCollection`<sup>Required</sup> <a name="connectionCollection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.connectionCollection"></a>

```typescript
public readonly connectionCollection: DataOciGoldenGateConnectionsConnectionCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList">DataOciGoldenGateConnectionsConnectionCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.filter"></a>

```typescript
public readonly filter: DataOciGoldenGateConnectionsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList">DataOciGoldenGateConnectionsFilterList</a>

---

##### `assignableDeploymentIdInput`<sup>Optional</sup> <a name="assignableDeploymentIdInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.assignableDeploymentIdInput"></a>

```typescript
public readonly assignableDeploymentIdInput: string;
```

- *Type:* string

---

##### `assignableDeploymentTypeInput`<sup>Optional</sup> <a name="assignableDeploymentTypeInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.assignableDeploymentTypeInput"></a>

```typescript
public readonly assignableDeploymentTypeInput: string;
```

- *Type:* string

---

##### `assignedDeploymentIdInput`<sup>Optional</sup> <a name="assignedDeploymentIdInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.assignedDeploymentIdInput"></a>

```typescript
public readonly assignedDeploymentIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `connectionTypeInput`<sup>Optional</sup> <a name="connectionTypeInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.connectionTypeInput"></a>

```typescript
public readonly connectionTypeInput: string[];
```

- *Type:* string[]

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciGoldenGateConnectionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilter">DataOciGoldenGateConnectionsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `technologyTypeInput`<sup>Optional</sup> <a name="technologyTypeInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.technologyTypeInput"></a>

```typescript
public readonly technologyTypeInput: string[];
```

- *Type:* string[]

---

##### `assignableDeploymentId`<sup>Required</sup> <a name="assignableDeploymentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.assignableDeploymentId"></a>

```typescript
public readonly assignableDeploymentId: string;
```

- *Type:* string

---

##### `assignableDeploymentType`<sup>Required</sup> <a name="assignableDeploymentType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.assignableDeploymentType"></a>

```typescript
public readonly assignableDeploymentType: string;
```

- *Type:* string

---

##### `assignedDeploymentId`<sup>Required</sup> <a name="assignedDeploymentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.assignedDeploymentId"></a>

```typescript
public readonly assignedDeploymentId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.connectionType"></a>

```typescript
public readonly connectionType: string[];
```

- *Type:* string[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `technologyType`<sup>Required</sup> <a name="technologyType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.technologyType"></a>

```typescript
public readonly technologyType: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciGoldenGateConnectionsConfig <a name="DataOciGoldenGateConnectionsConfig" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.Initializer"></a>

```typescript
import { dataOciGoldenGateConnections } from 'rhizo-co-terraform-provider-oci'

const dataOciGoldenGateConnectionsConfig: dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#compartment_id DataOciGoldenGateConnections#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.assignableDeploymentId">assignableDeploymentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#assignable_deployment_id DataOciGoldenGateConnections#assignable_deployment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.assignableDeploymentType">assignableDeploymentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#assignable_deployment_type DataOciGoldenGateConnections#assignable_deployment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.assignedDeploymentId">assignedDeploymentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#assigned_deployment_id DataOciGoldenGateConnections#assigned_deployment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.connectionType">connectionType</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#connection_type DataOciGoldenGateConnections#connection_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#display_name DataOciGoldenGateConnections#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilter">DataOciGoldenGateConnectionsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#id DataOciGoldenGateConnections#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#state DataOciGoldenGateConnections#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.technologyType">technologyType</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#technology_type DataOciGoldenGateConnections#technology_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#compartment_id DataOciGoldenGateConnections#compartment_id}.

---

##### `assignableDeploymentId`<sup>Optional</sup> <a name="assignableDeploymentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.assignableDeploymentId"></a>

```typescript
public readonly assignableDeploymentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#assignable_deployment_id DataOciGoldenGateConnections#assignable_deployment_id}.

---

##### `assignableDeploymentType`<sup>Optional</sup> <a name="assignableDeploymentType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.assignableDeploymentType"></a>

```typescript
public readonly assignableDeploymentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#assignable_deployment_type DataOciGoldenGateConnections#assignable_deployment_type}.

---

##### `assignedDeploymentId`<sup>Optional</sup> <a name="assignedDeploymentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.assignedDeploymentId"></a>

```typescript
public readonly assignedDeploymentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#assigned_deployment_id DataOciGoldenGateConnections#assigned_deployment_id}.

---

##### `connectionType`<sup>Optional</sup> <a name="connectionType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.connectionType"></a>

```typescript
public readonly connectionType: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#connection_type DataOciGoldenGateConnections#connection_type}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#display_name DataOciGoldenGateConnections#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciGoldenGateConnectionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilter">DataOciGoldenGateConnectionsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#filter DataOciGoldenGateConnections#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#id DataOciGoldenGateConnections#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#state DataOciGoldenGateConnections#state}.

---

##### `technologyType`<sup>Optional</sup> <a name="technologyType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.technologyType"></a>

```typescript
public readonly technologyType: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#technology_type DataOciGoldenGateConnections#technology_type}.

---

### DataOciGoldenGateConnectionsConnectionCollection <a name="DataOciGoldenGateConnectionsConnectionCollection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollection.Initializer"></a>

```typescript
import { dataOciGoldenGateConnections } from 'rhizo-co-terraform-provider-oci'

const dataOciGoldenGateConnectionsConnectionCollection: dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollection = { ... }
```


### DataOciGoldenGateConnectionsConnectionCollectionItems <a name="DataOciGoldenGateConnectionsConnectionCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItems.Initializer"></a>

```typescript
import { dataOciGoldenGateConnections } from 'rhizo-co-terraform-provider-oci'

const dataOciGoldenGateConnectionsConnectionCollectionItems: dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItems = { ... }
```


### DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributes <a name="DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributes" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributes.Initializer"></a>

```typescript
import { dataOciGoldenGateConnections } from 'rhizo-co-terraform-provider-oci'

const dataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributes: dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributes = { ... }
```


### DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServers <a name="DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServers.Initializer"></a>

```typescript
import { dataOciGoldenGateConnections } from 'rhizo-co-terraform-provider-oci'

const dataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServers: dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServers = { ... }
```


### DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIps <a name="DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIps" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIps.Initializer"></a>

```typescript
import { dataOciGoldenGateConnections } from 'rhizo-co-terraform-provider-oci'

const dataOciGoldenGateConnectionsConnectionCollectionItemsIngressIps: dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIps = { ... }
```


### DataOciGoldenGateConnectionsConnectionCollectionItemsLocks <a name="DataOciGoldenGateConnectionsConnectionCollectionItemsLocks" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocks.Initializer"></a>

```typescript
import { dataOciGoldenGateConnections } from 'rhizo-co-terraform-provider-oci'

const dataOciGoldenGateConnectionsConnectionCollectionItemsLocks: dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocks = { ... }
```


### DataOciGoldenGateConnectionsFilter <a name="DataOciGoldenGateConnectionsFilter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilter.Initializer"></a>

```typescript
import { dataOciGoldenGateConnections } from 'rhizo-co-terraform-provider-oci'

const dataOciGoldenGateConnectionsFilter: dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#name DataOciGoldenGateConnections#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#values DataOciGoldenGateConnections#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#regex DataOciGoldenGateConnections#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#name DataOciGoldenGateConnections#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#values DataOciGoldenGateConnections#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#regex DataOciGoldenGateConnections#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList <a name="DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList.Initializer"></a>

```typescript
import { dataOciGoldenGateConnections } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList.get"></a>

```typescript
public get(index: number): DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference <a name="DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.Initializer"></a>

```typescript
import { dataOciGoldenGateConnections } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributes">DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributes;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributes">DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributes</a>

---


### DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList <a name="DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList.Initializer"></a>

```typescript
import { dataOciGoldenGateConnections } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList.get"></a>

```typescript
public get(index: number): DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference <a name="DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.Initializer"></a>

```typescript
import { dataOciGoldenGateConnections } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.property.privateIp">privateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServers">DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServers;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServers">DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServers</a>

---


### DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList <a name="DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList.Initializer"></a>

```typescript
import { dataOciGoldenGateConnections } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList.get"></a>

```typescript
public get(index: number): DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference <a name="DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.Initializer"></a>

```typescript
import { dataOciGoldenGateConnections } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.property.ingressIp">ingressIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIps">DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ingressIp`<sup>Required</sup> <a name="ingressIp" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.property.ingressIp"></a>

```typescript
public readonly ingressIp: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIps;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIps">DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIps</a>

---


### DataOciGoldenGateConnectionsConnectionCollectionItemsList <a name="DataOciGoldenGateConnectionsConnectionCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList.Initializer"></a>

```typescript
import { dataOciGoldenGateConnections } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList <a name="DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList.Initializer"></a>

```typescript
import { dataOciGoldenGateConnections } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList.get"></a>

```typescript
public get(index: number): DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference <a name="DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.Initializer"></a>

```typescript
import { dataOciGoldenGateConnections } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.property.relatedResourceId">relatedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocks">DataOciGoldenGateConnectionsConnectionCollectionItemsLocks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `relatedResourceId`<sup>Required</sup> <a name="relatedResourceId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.property.relatedResourceId"></a>

```typescript
public readonly relatedResourceId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciGoldenGateConnectionsConnectionCollectionItemsLocks;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocks">DataOciGoldenGateConnectionsConnectionCollectionItemsLocks</a>

---


### DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference <a name="DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciGoldenGateConnections } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.accessKeyId">accessKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.accountKey">accountKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.accountKeySecretId">accountKeySecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.accountName">accountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.additionalAttributes">additionalAttributes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList">DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.authenticationMode">authenticationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.authenticationType">authenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.azureTenantId">azureTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.bootstrapServers">bootstrapServers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList">DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.clientSecretSecretId">clientSecretSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.connectionFactory">connectionFactory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.connectionString">connectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.connectionType">connectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.connectionUrl">connectionUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.consumerProperties">consumerProperties</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.coreSiteXml">coreSiteXml</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.databaseId">databaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.dbSystemId">dbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.deploymentId">deploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.doesUseSecretIds">doesUseSecretIds</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.fingerprint">fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.ingressIps">ingressIps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList">DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.isLockOverride">isLockOverride</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.jndiConnectionFactory">jndiConnectionFactory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.jndiInitialContextFactory">jndiInitialContextFactory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.jndiProviderUrl">jndiProviderUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.jndiSecurityCredentials">jndiSecurityCredentials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.jndiSecurityCredentialsSecretId">jndiSecurityCredentialsSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.jndiSecurityPrincipal">jndiSecurityPrincipal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.keyStore">keyStore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.keyStorePassword">keyStorePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.keyStorePasswordSecretId">keyStorePasswordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.keyStoreSecretId">keyStoreSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList">DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.passwordSecretId">passwordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.privateIp">privateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.privateKeyFile">privateKeyFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.privateKeyFileSecretId">privateKeyFileSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.privateKeyPassphrase">privateKeyPassphrase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.privateKeyPassphraseSecretId">privateKeyPassphraseSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.producerProperties">producerProperties</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.publicKeyFingerprint">publicKeyFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.redisClusterId">redisClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.routingMethod">routingMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sasToken">sasToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sasTokenSecretId">sasTokenSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.secretAccessKey">secretAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.secretAccessKeySecretId">secretAccessKeySecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.securityProtocol">securityProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.servers">servers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.serviceAccountKeyFile">serviceAccountKeyFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.serviceAccountKeyFileSecretId">serviceAccountKeyFileSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sessionMode">sessionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.shouldUseJndi">shouldUseJndi</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.shouldValidateServerCertificate">shouldValidateServerCertificate</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sslCa">sslCa</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sslCert">sslCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sslClientKeystash">sslClientKeystash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sslClientKeystashSecretId">sslClientKeystashSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sslClientKeystoredb">sslClientKeystoredb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sslClientKeystoredbSecretId">sslClientKeystoredbSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sslCrl">sslCrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sslKey">sslKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sslKeyPassword">sslKeyPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sslKeyPasswordSecretId">sslKeyPasswordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sslKeySecretId">sslKeySecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sslMode">sslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sslServerCertificate">sslServerCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.streamPoolId">streamPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.technologyType">technologyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.tenancyId">tenancyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.triggerRefresh">triggerRefresh</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.trustStore">trustStore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.trustStorePassword">trustStorePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.trustStorePasswordSecretId">trustStorePasswordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.trustStoreSecretId">trustStoreSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.userId">userId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.vaultId">vaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.wallet">wallet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.walletSecretId">walletSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItems">DataOciGoldenGateConnectionsConnectionCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessKeyId`<sup>Required</sup> <a name="accessKeyId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.accessKeyId"></a>

```typescript
public readonly accessKeyId: string;
```

- *Type:* string

---

##### `accountKey`<sup>Required</sup> <a name="accountKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.accountKey"></a>

```typescript
public readonly accountKey: string;
```

- *Type:* string

---

##### `accountKeySecretId`<sup>Required</sup> <a name="accountKeySecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.accountKeySecretId"></a>

```typescript
public readonly accountKeySecretId: string;
```

- *Type:* string

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

---

##### `additionalAttributes`<sup>Required</sup> <a name="additionalAttributes" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.additionalAttributes"></a>

```typescript
public readonly additionalAttributes: DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList">DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList</a>

---

##### `authenticationMode`<sup>Required</sup> <a name="authenticationMode" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.authenticationMode"></a>

```typescript
public readonly authenticationMode: string;
```

- *Type:* string

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

---

##### `azureTenantId`<sup>Required</sup> <a name="azureTenantId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.azureTenantId"></a>

```typescript
public readonly azureTenantId: string;
```

- *Type:* string

---

##### `bootstrapServers`<sup>Required</sup> <a name="bootstrapServers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.bootstrapServers"></a>

```typescript
public readonly bootstrapServers: DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList">DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList</a>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `clientSecretSecretId`<sup>Required</sup> <a name="clientSecretSecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.clientSecretSecretId"></a>

```typescript
public readonly clientSecretSecretId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `connectionFactory`<sup>Required</sup> <a name="connectionFactory" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.connectionFactory"></a>

```typescript
public readonly connectionFactory: string;
```

- *Type:* string

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.connectionString"></a>

```typescript
public readonly connectionString: string;
```

- *Type:* string

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.connectionType"></a>

```typescript
public readonly connectionType: string;
```

- *Type:* string

---

##### `connectionUrl`<sup>Required</sup> <a name="connectionUrl" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.connectionUrl"></a>

```typescript
public readonly connectionUrl: string;
```

- *Type:* string

---

##### `consumerProperties`<sup>Required</sup> <a name="consumerProperties" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.consumerProperties"></a>

```typescript
public readonly consumerProperties: string;
```

- *Type:* string

---

##### `coreSiteXml`<sup>Required</sup> <a name="coreSiteXml" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.coreSiteXml"></a>

```typescript
public readonly coreSiteXml: string;
```

- *Type:* string

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.databaseId"></a>

```typescript
public readonly databaseId: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.dbSystemId"></a>

```typescript
public readonly dbSystemId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `doesUseSecretIds`<sup>Required</sup> <a name="doesUseSecretIds" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.doesUseSecretIds"></a>

```typescript
public readonly doesUseSecretIds: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.fingerprint"></a>

```typescript
public readonly fingerprint: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `host`<sup>Required</sup> <a name="host" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ingressIps`<sup>Required</sup> <a name="ingressIps" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.ingressIps"></a>

```typescript
public readonly ingressIps: DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList">DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList</a>

---

##### `isLockOverride`<sup>Required</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.isLockOverride"></a>

```typescript
public readonly isLockOverride: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `jndiConnectionFactory`<sup>Required</sup> <a name="jndiConnectionFactory" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.jndiConnectionFactory"></a>

```typescript
public readonly jndiConnectionFactory: string;
```

- *Type:* string

---

##### `jndiInitialContextFactory`<sup>Required</sup> <a name="jndiInitialContextFactory" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.jndiInitialContextFactory"></a>

```typescript
public readonly jndiInitialContextFactory: string;
```

- *Type:* string

---

##### `jndiProviderUrl`<sup>Required</sup> <a name="jndiProviderUrl" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.jndiProviderUrl"></a>

```typescript
public readonly jndiProviderUrl: string;
```

- *Type:* string

---

##### `jndiSecurityCredentials`<sup>Required</sup> <a name="jndiSecurityCredentials" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.jndiSecurityCredentials"></a>

```typescript
public readonly jndiSecurityCredentials: string;
```

- *Type:* string

---

##### `jndiSecurityCredentialsSecretId`<sup>Required</sup> <a name="jndiSecurityCredentialsSecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.jndiSecurityCredentialsSecretId"></a>

```typescript
public readonly jndiSecurityCredentialsSecretId: string;
```

- *Type:* string

---

##### `jndiSecurityPrincipal`<sup>Required</sup> <a name="jndiSecurityPrincipal" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.jndiSecurityPrincipal"></a>

```typescript
public readonly jndiSecurityPrincipal: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `keyStore`<sup>Required</sup> <a name="keyStore" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.keyStore"></a>

```typescript
public readonly keyStore: string;
```

- *Type:* string

---

##### `keyStorePassword`<sup>Required</sup> <a name="keyStorePassword" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.keyStorePassword"></a>

```typescript
public readonly keyStorePassword: string;
```

- *Type:* string

---

##### `keyStorePasswordSecretId`<sup>Required</sup> <a name="keyStorePasswordSecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.keyStorePasswordSecretId"></a>

```typescript
public readonly keyStorePasswordSecretId: string;
```

- *Type:* string

---

##### `keyStoreSecretId`<sup>Required</sup> <a name="keyStoreSecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.keyStoreSecretId"></a>

```typescript
public readonly keyStoreSecretId: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.locks"></a>

```typescript
public readonly locks: DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList">DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList</a>

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `passwordSecretId`<sup>Required</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.passwordSecretId"></a>

```typescript
public readonly passwordSecretId: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

---

##### `privateKeyFile`<sup>Required</sup> <a name="privateKeyFile" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.privateKeyFile"></a>

```typescript
public readonly privateKeyFile: string;
```

- *Type:* string

---

##### `privateKeyFileSecretId`<sup>Required</sup> <a name="privateKeyFileSecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.privateKeyFileSecretId"></a>

```typescript
public readonly privateKeyFileSecretId: string;
```

- *Type:* string

---

##### `privateKeyPassphrase`<sup>Required</sup> <a name="privateKeyPassphrase" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.privateKeyPassphrase"></a>

```typescript
public readonly privateKeyPassphrase: string;
```

- *Type:* string

---

##### `privateKeyPassphraseSecretId`<sup>Required</sup> <a name="privateKeyPassphraseSecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.privateKeyPassphraseSecretId"></a>

```typescript
public readonly privateKeyPassphraseSecretId: string;
```

- *Type:* string

---

##### `producerProperties`<sup>Required</sup> <a name="producerProperties" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.producerProperties"></a>

```typescript
public readonly producerProperties: string;
```

- *Type:* string

---

##### `publicKeyFingerprint`<sup>Required</sup> <a name="publicKeyFingerprint" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.publicKeyFingerprint"></a>

```typescript
public readonly publicKeyFingerprint: string;
```

- *Type:* string

---

##### `redisClusterId`<sup>Required</sup> <a name="redisClusterId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.redisClusterId"></a>

```typescript
public readonly redisClusterId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `routingMethod`<sup>Required</sup> <a name="routingMethod" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.routingMethod"></a>

```typescript
public readonly routingMethod: string;
```

- *Type:* string

---

##### `sasToken`<sup>Required</sup> <a name="sasToken" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sasToken"></a>

```typescript
public readonly sasToken: string;
```

- *Type:* string

---

##### `sasTokenSecretId`<sup>Required</sup> <a name="sasTokenSecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sasTokenSecretId"></a>

```typescript
public readonly sasTokenSecretId: string;
```

- *Type:* string

---

##### `secretAccessKey`<sup>Required</sup> <a name="secretAccessKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.secretAccessKey"></a>

```typescript
public readonly secretAccessKey: string;
```

- *Type:* string

---

##### `secretAccessKeySecretId`<sup>Required</sup> <a name="secretAccessKeySecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.secretAccessKeySecretId"></a>

```typescript
public readonly secretAccessKeySecretId: string;
```

- *Type:* string

---

##### `securityProtocol`<sup>Required</sup> <a name="securityProtocol" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.securityProtocol"></a>

```typescript
public readonly securityProtocol: string;
```

- *Type:* string

---

##### `servers`<sup>Required</sup> <a name="servers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.servers"></a>

```typescript
public readonly servers: string;
```

- *Type:* string

---

##### `serviceAccountKeyFile`<sup>Required</sup> <a name="serviceAccountKeyFile" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.serviceAccountKeyFile"></a>

```typescript
public readonly serviceAccountKeyFile: string;
```

- *Type:* string

---

##### `serviceAccountKeyFileSecretId`<sup>Required</sup> <a name="serviceAccountKeyFileSecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.serviceAccountKeyFileSecretId"></a>

```typescript
public readonly serviceAccountKeyFileSecretId: string;
```

- *Type:* string

---

##### `sessionMode`<sup>Required</sup> <a name="sessionMode" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sessionMode"></a>

```typescript
public readonly sessionMode: string;
```

- *Type:* string

---

##### `shouldUseJndi`<sup>Required</sup> <a name="shouldUseJndi" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.shouldUseJndi"></a>

```typescript
public readonly shouldUseJndi: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `shouldValidateServerCertificate`<sup>Required</sup> <a name="shouldValidateServerCertificate" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.shouldValidateServerCertificate"></a>

```typescript
public readonly shouldValidateServerCertificate: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `sslCa`<sup>Required</sup> <a name="sslCa" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sslCa"></a>

```typescript
public readonly sslCa: string;
```

- *Type:* string

---

##### `sslCert`<sup>Required</sup> <a name="sslCert" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sslCert"></a>

```typescript
public readonly sslCert: string;
```

- *Type:* string

---

##### `sslClientKeystash`<sup>Required</sup> <a name="sslClientKeystash" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sslClientKeystash"></a>

```typescript
public readonly sslClientKeystash: string;
```

- *Type:* string

---

##### `sslClientKeystashSecretId`<sup>Required</sup> <a name="sslClientKeystashSecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sslClientKeystashSecretId"></a>

```typescript
public readonly sslClientKeystashSecretId: string;
```

- *Type:* string

---

##### `sslClientKeystoredb`<sup>Required</sup> <a name="sslClientKeystoredb" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sslClientKeystoredb"></a>

```typescript
public readonly sslClientKeystoredb: string;
```

- *Type:* string

---

##### `sslClientKeystoredbSecretId`<sup>Required</sup> <a name="sslClientKeystoredbSecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sslClientKeystoredbSecretId"></a>

```typescript
public readonly sslClientKeystoredbSecretId: string;
```

- *Type:* string

---

##### `sslCrl`<sup>Required</sup> <a name="sslCrl" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sslCrl"></a>

```typescript
public readonly sslCrl: string;
```

- *Type:* string

---

##### `sslKey`<sup>Required</sup> <a name="sslKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sslKey"></a>

```typescript
public readonly sslKey: string;
```

- *Type:* string

---

##### `sslKeyPassword`<sup>Required</sup> <a name="sslKeyPassword" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sslKeyPassword"></a>

```typescript
public readonly sslKeyPassword: string;
```

- *Type:* string

---

##### `sslKeyPasswordSecretId`<sup>Required</sup> <a name="sslKeyPasswordSecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sslKeyPasswordSecretId"></a>

```typescript
public readonly sslKeyPasswordSecretId: string;
```

- *Type:* string

---

##### `sslKeySecretId`<sup>Required</sup> <a name="sslKeySecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sslKeySecretId"></a>

```typescript
public readonly sslKeySecretId: string;
```

- *Type:* string

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

---

##### `sslServerCertificate`<sup>Required</sup> <a name="sslServerCertificate" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sslServerCertificate"></a>

```typescript
public readonly sslServerCertificate: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `streamPoolId`<sup>Required</sup> <a name="streamPoolId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.streamPoolId"></a>

```typescript
public readonly streamPoolId: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `technologyType`<sup>Required</sup> <a name="technologyType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.technologyType"></a>

```typescript
public readonly technologyType: string;
```

- *Type:* string

---

##### `tenancyId`<sup>Required</sup> <a name="tenancyId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.tenancyId"></a>

```typescript
public readonly tenancyId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `triggerRefresh`<sup>Required</sup> <a name="triggerRefresh" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.triggerRefresh"></a>

```typescript
public readonly triggerRefresh: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `trustStore`<sup>Required</sup> <a name="trustStore" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.trustStore"></a>

```typescript
public readonly trustStore: string;
```

- *Type:* string

---

##### `trustStorePassword`<sup>Required</sup> <a name="trustStorePassword" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.trustStorePassword"></a>

```typescript
public readonly trustStorePassword: string;
```

- *Type:* string

---

##### `trustStorePasswordSecretId`<sup>Required</sup> <a name="trustStorePasswordSecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.trustStorePasswordSecretId"></a>

```typescript
public readonly trustStorePasswordSecretId: string;
```

- *Type:* string

---

##### `trustStoreSecretId`<sup>Required</sup> <a name="trustStoreSecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.trustStoreSecretId"></a>

```typescript
public readonly trustStoreSecretId: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `userId`<sup>Required</sup> <a name="userId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.vaultId"></a>

```typescript
public readonly vaultId: string;
```

- *Type:* string

---

##### `wallet`<sup>Required</sup> <a name="wallet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.wallet"></a>

```typescript
public readonly wallet: string;
```

- *Type:* string

---

##### `walletSecretId`<sup>Required</sup> <a name="walletSecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.walletSecretId"></a>

```typescript
public readonly walletSecretId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciGoldenGateConnectionsConnectionCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItems">DataOciGoldenGateConnectionsConnectionCollectionItems</a>

---


### DataOciGoldenGateConnectionsConnectionCollectionList <a name="DataOciGoldenGateConnectionsConnectionCollectionList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList.Initializer"></a>

```typescript
import { dataOciGoldenGateConnections } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList.get"></a>

```typescript
public get(index: number): DataOciGoldenGateConnectionsConnectionCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciGoldenGateConnectionsConnectionCollectionOutputReference <a name="DataOciGoldenGateConnectionsConnectionCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciGoldenGateConnections } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList">DataOciGoldenGateConnectionsConnectionCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollection">DataOciGoldenGateConnectionsConnectionCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciGoldenGateConnectionsConnectionCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList">DataOciGoldenGateConnectionsConnectionCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciGoldenGateConnectionsConnectionCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollection">DataOciGoldenGateConnectionsConnectionCollection</a>

---


### DataOciGoldenGateConnectionsFilterList <a name="DataOciGoldenGateConnectionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList.Initializer"></a>

```typescript
import { dataOciGoldenGateConnections } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList.get"></a>

```typescript
public get(index: number): DataOciGoldenGateConnectionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilter">DataOciGoldenGateConnectionsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciGoldenGateConnectionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilter">DataOciGoldenGateConnectionsFilter</a>[]

---


### DataOciGoldenGateConnectionsFilterOutputReference <a name="DataOciGoldenGateConnectionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciGoldenGateConnections } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilter">DataOciGoldenGateConnectionsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciGoldenGateConnectionsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilter">DataOciGoldenGateConnectionsFilter</a>

---



