# `dataOciGoldenGateConnectionAssignments` Submodule <a name="`dataOciGoldenGateConnectionAssignments` Submodule" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciGoldenGateConnectionAssignments <a name="DataOciGoldenGateConnectionAssignments" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection_assignments oci_golden_gate_connection_assignments}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.Initializer"></a>

```typescript
import { dataOciGoldenGateConnectionAssignments } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments(scope: Construct, id: string, config: DataOciGoldenGateConnectionAssignmentsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig">DataOciGoldenGateConnectionAssignmentsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig">DataOciGoldenGateConnectionAssignmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.resetConnectionId">resetConnectionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.resetDeploymentId">resetDeploymentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciGoldenGateConnectionAssignmentsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilter">DataOciGoldenGateConnectionAssignmentsFilter</a>[]

---

##### `resetConnectionId` <a name="resetConnectionId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.resetConnectionId"></a>

```typescript
public resetConnectionId(): void
```

##### `resetDeploymentId` <a name="resetDeploymentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.resetDeploymentId"></a>

```typescript
public resetDeploymentId(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.resetName"></a>

```typescript
public resetName(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciGoldenGateConnectionAssignments resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.isConstruct"></a>

```typescript
import { dataOciGoldenGateConnectionAssignments } from 'rhizo-co-terraform-provider-oci'

dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.isTerraformElement"></a>

```typescript
import { dataOciGoldenGateConnectionAssignments } from 'rhizo-co-terraform-provider-oci'

dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.isTerraformDataSource"></a>

```typescript
import { dataOciGoldenGateConnectionAssignments } from 'rhizo-co-terraform-provider-oci'

dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.generateConfigForImport"></a>

```typescript
import { dataOciGoldenGateConnectionAssignments } from 'rhizo-co-terraform-provider-oci'

dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciGoldenGateConnectionAssignments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciGoldenGateConnectionAssignments to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciGoldenGateConnectionAssignments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection_assignments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciGoldenGateConnectionAssignments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.connectionAssignmentCollection">connectionAssignmentCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList">DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList">DataOciGoldenGateConnectionAssignmentsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.connectionIdInput">connectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.deploymentIdInput">deploymentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilter">DataOciGoldenGateConnectionAssignmentsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.connectionId">connectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.deploymentId">deploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `connectionAssignmentCollection`<sup>Required</sup> <a name="connectionAssignmentCollection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.connectionAssignmentCollection"></a>

```typescript
public readonly connectionAssignmentCollection: DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList">DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.filter"></a>

```typescript
public readonly filter: DataOciGoldenGateConnectionAssignmentsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList">DataOciGoldenGateConnectionAssignmentsFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `connectionIdInput`<sup>Optional</sup> <a name="connectionIdInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.connectionIdInput"></a>

```typescript
public readonly connectionIdInput: string;
```

- *Type:* string

---

##### `deploymentIdInput`<sup>Optional</sup> <a name="deploymentIdInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.deploymentIdInput"></a>

```typescript
public readonly deploymentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciGoldenGateConnectionAssignmentsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilter">DataOciGoldenGateConnectionAssignmentsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciGoldenGateConnectionAssignmentsConfig <a name="DataOciGoldenGateConnectionAssignmentsConfig" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.Initializer"></a>

```typescript
import { dataOciGoldenGateConnectionAssignments } from 'rhizo-co-terraform-provider-oci'

const dataOciGoldenGateConnectionAssignmentsConfig: dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection_assignments#compartment_id DataOciGoldenGateConnectionAssignments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.connectionId">connectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection_assignments#connection_id DataOciGoldenGateConnectionAssignments#connection_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.deploymentId">deploymentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection_assignments#deployment_id DataOciGoldenGateConnectionAssignments#deployment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilter">DataOciGoldenGateConnectionAssignmentsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection_assignments#id DataOciGoldenGateConnectionAssignments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection_assignments#name DataOciGoldenGateConnectionAssignments#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection_assignments#state DataOciGoldenGateConnectionAssignments#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection_assignments#compartment_id DataOciGoldenGateConnectionAssignments#compartment_id}.

---

##### `connectionId`<sup>Optional</sup> <a name="connectionId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection_assignments#connection_id DataOciGoldenGateConnectionAssignments#connection_id}.

---

##### `deploymentId`<sup>Optional</sup> <a name="deploymentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection_assignments#deployment_id DataOciGoldenGateConnectionAssignments#deployment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciGoldenGateConnectionAssignmentsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilter">DataOciGoldenGateConnectionAssignmentsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection_assignments#filter DataOciGoldenGateConnectionAssignments#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection_assignments#id DataOciGoldenGateConnectionAssignments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection_assignments#name DataOciGoldenGateConnectionAssignments#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection_assignments#state DataOciGoldenGateConnectionAssignments#state}.

---

### DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollection <a name="DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollection.Initializer"></a>

```typescript
import { dataOciGoldenGateConnectionAssignments } from 'rhizo-co-terraform-provider-oci'

const dataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollection: dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollection = { ... }
```


### DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItems <a name="DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItems.Initializer"></a>

```typescript
import { dataOciGoldenGateConnectionAssignments } from 'rhizo-co-terraform-provider-oci'

const dataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItems: dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItems = { ... }
```


### DataOciGoldenGateConnectionAssignmentsFilter <a name="DataOciGoldenGateConnectionAssignmentsFilter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilter.Initializer"></a>

```typescript
import { dataOciGoldenGateConnectionAssignments } from 'rhizo-co-terraform-provider-oci'

const dataOciGoldenGateConnectionAssignmentsFilter: dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection_assignments#name DataOciGoldenGateConnectionAssignments#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection_assignments#values DataOciGoldenGateConnectionAssignments#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection_assignments#regex DataOciGoldenGateConnectionAssignments#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection_assignments#name DataOciGoldenGateConnectionAssignments#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection_assignments#values DataOciGoldenGateConnectionAssignments#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection_assignments#regex DataOciGoldenGateConnectionAssignments#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList <a name="DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList.Initializer"></a>

```typescript
import { dataOciGoldenGateConnectionAssignments } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference <a name="DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciGoldenGateConnectionAssignments } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.property.aliasName">aliasName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.property.connectionId">connectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.property.deploymentId">deploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.property.isLockOverride">isLockOverride</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItems">DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aliasName`<sup>Required</sup> <a name="aliasName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.property.aliasName"></a>

```typescript
public readonly aliasName: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isLockOverride`<sup>Required</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.property.isLockOverride"></a>

```typescript
public readonly isLockOverride: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItems">DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItems</a>

---


### DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList <a name="DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList.Initializer"></a>

```typescript
import { dataOciGoldenGateConnectionAssignments } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList.get"></a>

```typescript
public get(index: number): DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference <a name="DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciGoldenGateConnectionAssignments } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList">DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollection">DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList">DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollection">DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollection</a>

---


### DataOciGoldenGateConnectionAssignmentsFilterList <a name="DataOciGoldenGateConnectionAssignmentsFilterList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList.Initializer"></a>

```typescript
import { dataOciGoldenGateConnectionAssignments } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList.get"></a>

```typescript
public get(index: number): DataOciGoldenGateConnectionAssignmentsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilter">DataOciGoldenGateConnectionAssignmentsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciGoldenGateConnectionAssignmentsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilter">DataOciGoldenGateConnectionAssignmentsFilter</a>[]

---


### DataOciGoldenGateConnectionAssignmentsFilterOutputReference <a name="DataOciGoldenGateConnectionAssignmentsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciGoldenGateConnectionAssignments } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilter">DataOciGoldenGateConnectionAssignmentsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciGoldenGateConnectionAssignmentsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilter">DataOciGoldenGateConnectionAssignmentsFilter</a>

---



