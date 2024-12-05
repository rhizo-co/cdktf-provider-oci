# `dataOciCoreVolumeBackupPolicyAssignments` Submodule <a name="`dataOciCoreVolumeBackupPolicyAssignments` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreVolumeBackupPolicyAssignments <a name="DataOciCoreVolumeBackupPolicyAssignments" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments oci_core_volume_backup_policy_assignments}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.Initializer"></a>

```typescript
import { dataOciCoreVolumeBackupPolicyAssignments } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments(scope: Construct, id: string, config: DataOciCoreVolumeBackupPolicyAssignmentsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig">DataOciCoreVolumeBackupPolicyAssignmentsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig">DataOciCoreVolumeBackupPolicyAssignmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciCoreVolumeBackupPolicyAssignmentsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter">DataOciCoreVolumeBackupPolicyAssignmentsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreVolumeBackupPolicyAssignments resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.isConstruct"></a>

```typescript
import { dataOciCoreVolumeBackupPolicyAssignments } from 'rhizo-co-terraform-provider-oci'

dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.isTerraformElement"></a>

```typescript
import { dataOciCoreVolumeBackupPolicyAssignments } from 'rhizo-co-terraform-provider-oci'

dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.isTerraformDataSource"></a>

```typescript
import { dataOciCoreVolumeBackupPolicyAssignments } from 'rhizo-co-terraform-provider-oci'

dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.generateConfigForImport"></a>

```typescript
import { dataOciCoreVolumeBackupPolicyAssignments } from 'rhizo-co-terraform-provider-oci'

dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCoreVolumeBackupPolicyAssignments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreVolumeBackupPolicyAssignments to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreVolumeBackupPolicyAssignments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreVolumeBackupPolicyAssignments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList">DataOciCoreVolumeBackupPolicyAssignmentsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.volumeBackupPolicyAssignments">volumeBackupPolicyAssignments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList">DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.assetIdInput">assetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter">DataOciCoreVolumeBackupPolicyAssignmentsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.assetId">assetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.filter"></a>

```typescript
public readonly filter: DataOciCoreVolumeBackupPolicyAssignmentsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList">DataOciCoreVolumeBackupPolicyAssignmentsFilterList</a>

---

##### `volumeBackupPolicyAssignments`<sup>Required</sup> <a name="volumeBackupPolicyAssignments" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.volumeBackupPolicyAssignments"></a>

```typescript
public readonly volumeBackupPolicyAssignments: DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList">DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList</a>

---

##### `assetIdInput`<sup>Optional</sup> <a name="assetIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.assetIdInput"></a>

```typescript
public readonly assetIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciCoreVolumeBackupPolicyAssignmentsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter">DataOciCoreVolumeBackupPolicyAssignmentsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `assetId`<sup>Required</sup> <a name="assetId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.assetId"></a>

```typescript
public readonly assetId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreVolumeBackupPolicyAssignmentsConfig <a name="DataOciCoreVolumeBackupPolicyAssignmentsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.Initializer"></a>

```typescript
import { dataOciCoreVolumeBackupPolicyAssignments } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreVolumeBackupPolicyAssignmentsConfig: dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.assetId">assetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments#asset_id DataOciCoreVolumeBackupPolicyAssignments#asset_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter">DataOciCoreVolumeBackupPolicyAssignmentsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments#id DataOciCoreVolumeBackupPolicyAssignments#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `assetId`<sup>Required</sup> <a name="assetId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.assetId"></a>

```typescript
public readonly assetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments#asset_id DataOciCoreVolumeBackupPolicyAssignments#asset_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciCoreVolumeBackupPolicyAssignmentsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter">DataOciCoreVolumeBackupPolicyAssignmentsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments#filter DataOciCoreVolumeBackupPolicyAssignments#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments#id DataOciCoreVolumeBackupPolicyAssignments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreVolumeBackupPolicyAssignmentsFilter <a name="DataOciCoreVolumeBackupPolicyAssignmentsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter.Initializer"></a>

```typescript
import { dataOciCoreVolumeBackupPolicyAssignments } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreVolumeBackupPolicyAssignmentsFilter: dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments#name DataOciCoreVolumeBackupPolicyAssignments#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments#values DataOciCoreVolumeBackupPolicyAssignments#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments#regex DataOciCoreVolumeBackupPolicyAssignments#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments#name DataOciCoreVolumeBackupPolicyAssignments#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments#values DataOciCoreVolumeBackupPolicyAssignments#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments#regex DataOciCoreVolumeBackupPolicyAssignments#regex}.

---

### DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignments <a name="DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignments" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignments.Initializer"></a>

```typescript
import { dataOciCoreVolumeBackupPolicyAssignments } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignments: dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignments = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreVolumeBackupPolicyAssignmentsFilterList <a name="DataOciCoreVolumeBackupPolicyAssignmentsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.Initializer"></a>

```typescript
import { dataOciCoreVolumeBackupPolicyAssignments } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.get"></a>

```typescript
public get(index: number): DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter">DataOciCoreVolumeBackupPolicyAssignmentsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreVolumeBackupPolicyAssignmentsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter">DataOciCoreVolumeBackupPolicyAssignmentsFilter</a>[]

---


### DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference <a name="DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciCoreVolumeBackupPolicyAssignments } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter">DataOciCoreVolumeBackupPolicyAssignmentsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreVolumeBackupPolicyAssignmentsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter">DataOciCoreVolumeBackupPolicyAssignmentsFilter</a>

---


### DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList <a name="DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.Initializer"></a>

```typescript
import { dataOciCoreVolumeBackupPolicyAssignments } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.get"></a>

```typescript
public get(index: number): DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference <a name="DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreVolumeBackupPolicyAssignments } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.assetId">assetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.xrcKmsKeyId">xrcKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignments">DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `assetId`<sup>Required</sup> <a name="assetId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.assetId"></a>

```typescript
public readonly assetId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `xrcKmsKeyId`<sup>Required</sup> <a name="xrcKmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.xrcKmsKeyId"></a>

```typescript
public readonly xrcKmsKeyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignments;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignments">DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignments</a>

---



