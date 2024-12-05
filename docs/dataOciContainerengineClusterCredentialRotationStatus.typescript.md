# `dataOciContainerengineClusterCredentialRotationStatus` Submodule <a name="`dataOciContainerengineClusterCredentialRotationStatus` Submodule" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciContainerengineClusterCredentialRotationStatus <a name="DataOciContainerengineClusterCredentialRotationStatus" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster_credential_rotation_status oci_containerengine_cluster_credential_rotation_status}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.Initializer"></a>

```typescript
import { dataOciContainerengineClusterCredentialRotationStatus } from 'rhizo-co-terraform-provider-oci'

new dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus(scope: Construct, id: string, config: DataOciContainerengineClusterCredentialRotationStatusConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatusConfig">DataOciContainerengineClusterCredentialRotationStatusConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatusConfig">DataOciContainerengineClusterCredentialRotationStatusConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciContainerengineClusterCredentialRotationStatus resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.isConstruct"></a>

```typescript
import { dataOciContainerengineClusterCredentialRotationStatus } from 'rhizo-co-terraform-provider-oci'

dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.isTerraformElement"></a>

```typescript
import { dataOciContainerengineClusterCredentialRotationStatus } from 'rhizo-co-terraform-provider-oci'

dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.isTerraformDataSource"></a>

```typescript
import { dataOciContainerengineClusterCredentialRotationStatus } from 'rhizo-co-terraform-provider-oci'

dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.generateConfigForImport"></a>

```typescript
import { dataOciContainerengineClusterCredentialRotationStatus } from 'rhizo-co-terraform-provider-oci'

dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciContainerengineClusterCredentialRotationStatus resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciContainerengineClusterCredentialRotationStatus to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciContainerengineClusterCredentialRotationStatus that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster_credential_rotation_status#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciContainerengineClusterCredentialRotationStatus to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.property.statusDetails">statusDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.property.timeAutoCompletionScheduled">timeAutoCompletionScheduled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusDetails`<sup>Required</sup> <a name="statusDetails" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.property.statusDetails"></a>

```typescript
public readonly statusDetails: string;
```

- *Type:* string

---

##### `timeAutoCompletionScheduled`<sup>Required</sup> <a name="timeAutoCompletionScheduled" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.property.timeAutoCompletionScheduled"></a>

```typescript
public readonly timeAutoCompletionScheduled: string;
```

- *Type:* string

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatus.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciContainerengineClusterCredentialRotationStatusConfig <a name="DataOciContainerengineClusterCredentialRotationStatusConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatusConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatusConfig.Initializer"></a>

```typescript
import { dataOciContainerengineClusterCredentialRotationStatus } from 'rhizo-co-terraform-provider-oci'

const dataOciContainerengineClusterCredentialRotationStatusConfig: dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatusConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatusConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatusConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatusConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatusConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatusConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatusConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatusConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatusConfig.property.clusterId">clusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster_credential_rotation_status#cluster_id DataOciContainerengineClusterCredentialRotationStatus#cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatusConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster_credential_rotation_status#id DataOciContainerengineClusterCredentialRotationStatus#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatusConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatusConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatusConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatusConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatusConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatusConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatusConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatusConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster_credential_rotation_status#cluster_id DataOciContainerengineClusterCredentialRotationStatus#cluster_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterCredentialRotationStatus.DataOciContainerengineClusterCredentialRotationStatusConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster_credential_rotation_status#id DataOciContainerengineClusterCredentialRotationStatus#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



