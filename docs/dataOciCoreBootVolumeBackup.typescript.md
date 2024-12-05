# `dataOciCoreBootVolumeBackup` Submodule <a name="`dataOciCoreBootVolumeBackup` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreBootVolumeBackup <a name="DataOciCoreBootVolumeBackup" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_boot_volume_backup oci_core_boot_volume_backup}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.Initializer"></a>

```typescript
import { dataOciCoreBootVolumeBackup } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup(scope: Construct, id: string, config: DataOciCoreBootVolumeBackupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupConfig">DataOciCoreBootVolumeBackupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupConfig">DataOciCoreBootVolumeBackupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreBootVolumeBackup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.isConstruct"></a>

```typescript
import { dataOciCoreBootVolumeBackup } from 'rhizo-co-terraform-provider-oci'

dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.isTerraformElement"></a>

```typescript
import { dataOciCoreBootVolumeBackup } from 'rhizo-co-terraform-provider-oci'

dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.isTerraformDataSource"></a>

```typescript
import { dataOciCoreBootVolumeBackup } from 'rhizo-co-terraform-provider-oci'

dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.generateConfigForImport"></a>

```typescript
import { dataOciCoreBootVolumeBackup } from 'rhizo-co-terraform-provider-oci'

dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCoreBootVolumeBackup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreBootVolumeBackup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreBootVolumeBackup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_boot_volume_backup#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreBootVolumeBackup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.bootVolumeId">bootVolumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.expirationTime">expirationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.imageId">imageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.sizeInGbs">sizeInGbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.sourceBootVolumeBackupId">sourceBootVolumeBackupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.sourceDetails">sourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsList">DataOciCoreBootVolumeBackupSourceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.timeRequestReceived">timeRequestReceived</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.uniqueSizeInGbs">uniqueSizeInGbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.bootVolumeBackupIdInput">bootVolumeBackupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.bootVolumeBackupId">bootVolumeBackupId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `bootVolumeId`<sup>Required</sup> <a name="bootVolumeId" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.bootVolumeId"></a>

```typescript
public readonly bootVolumeId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `expirationTime`<sup>Required</sup> <a name="expirationTime" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.expirationTime"></a>

```typescript
public readonly expirationTime: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `sizeInGbs`<sup>Required</sup> <a name="sizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.sizeInGbs"></a>

```typescript
public readonly sizeInGbs: string;
```

- *Type:* string

---

##### `sourceBootVolumeBackupId`<sup>Required</sup> <a name="sourceBootVolumeBackupId" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.sourceBootVolumeBackupId"></a>

```typescript
public readonly sourceBootVolumeBackupId: string;
```

- *Type:* string

---

##### `sourceDetails`<sup>Required</sup> <a name="sourceDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.sourceDetails"></a>

```typescript
public readonly sourceDetails: DataOciCoreBootVolumeBackupSourceDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsList">DataOciCoreBootVolumeBackupSourceDetailsList</a>

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeRequestReceived`<sup>Required</sup> <a name="timeRequestReceived" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.timeRequestReceived"></a>

```typescript
public readonly timeRequestReceived: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `uniqueSizeInGbs`<sup>Required</sup> <a name="uniqueSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.uniqueSizeInGbs"></a>

```typescript
public readonly uniqueSizeInGbs: string;
```

- *Type:* string

---

##### `bootVolumeBackupIdInput`<sup>Optional</sup> <a name="bootVolumeBackupIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.bootVolumeBackupIdInput"></a>

```typescript
public readonly bootVolumeBackupIdInput: string;
```

- *Type:* string

---

##### `bootVolumeBackupId`<sup>Required</sup> <a name="bootVolumeBackupId" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.bootVolumeBackupId"></a>

```typescript
public readonly bootVolumeBackupId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreBootVolumeBackupConfig <a name="DataOciCoreBootVolumeBackupConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupConfig.Initializer"></a>

```typescript
import { dataOciCoreBootVolumeBackup } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreBootVolumeBackupConfig: dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupConfig.property.bootVolumeBackupId">bootVolumeBackupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_boot_volume_backup#boot_volume_backup_id DataOciCoreBootVolumeBackup#boot_volume_backup_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bootVolumeBackupId`<sup>Required</sup> <a name="bootVolumeBackupId" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupConfig.property.bootVolumeBackupId"></a>

```typescript
public readonly bootVolumeBackupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_boot_volume_backup#boot_volume_backup_id DataOciCoreBootVolumeBackup#boot_volume_backup_id}.

---

### DataOciCoreBootVolumeBackupSourceDetails <a name="DataOciCoreBootVolumeBackupSourceDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetails.Initializer"></a>

```typescript
import { dataOciCoreBootVolumeBackup } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreBootVolumeBackupSourceDetails: dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetails = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreBootVolumeBackupSourceDetailsList <a name="DataOciCoreBootVolumeBackupSourceDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsList.Initializer"></a>

```typescript
import { dataOciCoreBootVolumeBackup } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsList.get"></a>

```typescript
public get(index: number): DataOciCoreBootVolumeBackupSourceDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreBootVolumeBackupSourceDetailsOutputReference <a name="DataOciCoreBootVolumeBackupSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreBootVolumeBackup } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.property.bootVolumeBackupId">bootVolumeBackupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetails">DataOciCoreBootVolumeBackupSourceDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bootVolumeBackupId`<sup>Required</sup> <a name="bootVolumeBackupId" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.property.bootVolumeBackupId"></a>

```typescript
public readonly bootVolumeBackupId: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreBootVolumeBackupSourceDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeBackup.DataOciCoreBootVolumeBackupSourceDetails">DataOciCoreBootVolumeBackupSourceDetails</a>

---



