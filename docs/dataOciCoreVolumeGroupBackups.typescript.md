# `dataOciCoreVolumeGroupBackups` Submodule <a name="`dataOciCoreVolumeGroupBackups` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreVolumeGroupBackups <a name="DataOciCoreVolumeGroupBackups" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_backups oci_core_volume_group_backups}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.Initializer"></a>

```typescript
import { dataOciCoreVolumeGroupBackups } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups(scope: Construct, id: string, config: DataOciCoreVolumeGroupBackupsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsConfig">DataOciCoreVolumeGroupBackupsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsConfig">DataOciCoreVolumeGroupBackupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.resetVolumeGroupId">resetVolumeGroupId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciCoreVolumeGroupBackupsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilter">DataOciCoreVolumeGroupBackupsFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.resetId"></a>

```typescript
public resetId(): void
```

##### `resetVolumeGroupId` <a name="resetVolumeGroupId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.resetVolumeGroupId"></a>

```typescript
public resetVolumeGroupId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreVolumeGroupBackups resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.isConstruct"></a>

```typescript
import { dataOciCoreVolumeGroupBackups } from 'rhizo-co-terraform-provider-oci'

dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.isTerraformElement"></a>

```typescript
import { dataOciCoreVolumeGroupBackups } from 'rhizo-co-terraform-provider-oci'

dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.isTerraformDataSource"></a>

```typescript
import { dataOciCoreVolumeGroupBackups } from 'rhizo-co-terraform-provider-oci'

dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.generateConfigForImport"></a>

```typescript
import { dataOciCoreVolumeGroupBackups } from 'rhizo-co-terraform-provider-oci'

dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCoreVolumeGroupBackups resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreVolumeGroupBackups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreVolumeGroupBackups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_backups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreVolumeGroupBackups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterList">DataOciCoreVolumeGroupBackupsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.property.volumeGroupBackups">volumeGroupBackups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsList">DataOciCoreVolumeGroupBackupsVolumeGroupBackupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilter">DataOciCoreVolumeGroupBackupsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.property.volumeGroupIdInput">volumeGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.property.volumeGroupId">volumeGroupId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.property.filter"></a>

```typescript
public readonly filter: DataOciCoreVolumeGroupBackupsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterList">DataOciCoreVolumeGroupBackupsFilterList</a>

---

##### `volumeGroupBackups`<sup>Required</sup> <a name="volumeGroupBackups" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.property.volumeGroupBackups"></a>

```typescript
public readonly volumeGroupBackups: DataOciCoreVolumeGroupBackupsVolumeGroupBackupsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsList">DataOciCoreVolumeGroupBackupsVolumeGroupBackupsList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciCoreVolumeGroupBackupsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilter">DataOciCoreVolumeGroupBackupsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `volumeGroupIdInput`<sup>Optional</sup> <a name="volumeGroupIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.property.volumeGroupIdInput"></a>

```typescript
public readonly volumeGroupIdInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `volumeGroupId`<sup>Required</sup> <a name="volumeGroupId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.property.volumeGroupId"></a>

```typescript
public readonly volumeGroupId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackups.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreVolumeGroupBackupsConfig <a name="DataOciCoreVolumeGroupBackupsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsConfig.Initializer"></a>

```typescript
import { dataOciCoreVolumeGroupBackups } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreVolumeGroupBackupsConfig: dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_backups#compartment_id DataOciCoreVolumeGroupBackups#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_backups#display_name DataOciCoreVolumeGroupBackups#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilter">DataOciCoreVolumeGroupBackupsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_backups#id DataOciCoreVolumeGroupBackups#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsConfig.property.volumeGroupId">volumeGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_backups#volume_group_id DataOciCoreVolumeGroupBackups#volume_group_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_backups#compartment_id DataOciCoreVolumeGroupBackups#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_backups#display_name DataOciCoreVolumeGroupBackups#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciCoreVolumeGroupBackupsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilter">DataOciCoreVolumeGroupBackupsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_backups#filter DataOciCoreVolumeGroupBackups#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_backups#id DataOciCoreVolumeGroupBackups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `volumeGroupId`<sup>Optional</sup> <a name="volumeGroupId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsConfig.property.volumeGroupId"></a>

```typescript
public readonly volumeGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_backups#volume_group_id DataOciCoreVolumeGroupBackups#volume_group_id}.

---

### DataOciCoreVolumeGroupBackupsFilter <a name="DataOciCoreVolumeGroupBackupsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilter.Initializer"></a>

```typescript
import { dataOciCoreVolumeGroupBackups } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreVolumeGroupBackupsFilter: dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_backups#name DataOciCoreVolumeGroupBackups#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_backups#values DataOciCoreVolumeGroupBackups#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_backups#regex DataOciCoreVolumeGroupBackups#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_backups#name DataOciCoreVolumeGroupBackups#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_backups#values DataOciCoreVolumeGroupBackups#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_backups#regex DataOciCoreVolumeGroupBackups#regex}.

---

### DataOciCoreVolumeGroupBackupsVolumeGroupBackups <a name="DataOciCoreVolumeGroupBackupsVolumeGroupBackups" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackups.Initializer"></a>

```typescript
import { dataOciCoreVolumeGroupBackups } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreVolumeGroupBackupsVolumeGroupBackups: dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackups = { ... }
```


### DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetails <a name="DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetails.Initializer"></a>

```typescript
import { dataOciCoreVolumeGroupBackups } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetails: dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetails = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreVolumeGroupBackupsFilterList <a name="DataOciCoreVolumeGroupBackupsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterList.Initializer"></a>

```typescript
import { dataOciCoreVolumeGroupBackups } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterList.get"></a>

```typescript
public get(index: number): DataOciCoreVolumeGroupBackupsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilter">DataOciCoreVolumeGroupBackupsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreVolumeGroupBackupsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilter">DataOciCoreVolumeGroupBackupsFilter</a>[]

---


### DataOciCoreVolumeGroupBackupsFilterOutputReference <a name="DataOciCoreVolumeGroupBackupsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciCoreVolumeGroupBackups } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilter">DataOciCoreVolumeGroupBackupsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreVolumeGroupBackupsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsFilter">DataOciCoreVolumeGroupBackupsFilter</a>

---


### DataOciCoreVolumeGroupBackupsVolumeGroupBackupsList <a name="DataOciCoreVolumeGroupBackupsVolumeGroupBackupsList" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsList.Initializer"></a>

```typescript
import { dataOciCoreVolumeGroupBackups } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsList.get"></a>

```typescript
public get(index: number): DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference <a name="DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreVolumeGroupBackups } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.property.expirationTime">expirationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.property.sizeInGbs">sizeInGbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.property.sizeInMbs">sizeInMbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.property.sourceDetails">sourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsList">DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.property.sourceVolumeGroupBackupId">sourceVolumeGroupBackupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.property.timeRequestReceived">timeRequestReceived</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.property.uniqueSizeInGbs">uniqueSizeInGbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.property.uniqueSizeInMbs">uniqueSizeInMbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.property.volumeBackupIds">volumeBackupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.property.volumeGroupId">volumeGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackups">DataOciCoreVolumeGroupBackupsVolumeGroupBackups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `expirationTime`<sup>Required</sup> <a name="expirationTime" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.property.expirationTime"></a>

```typescript
public readonly expirationTime: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `sizeInGbs`<sup>Required</sup> <a name="sizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.property.sizeInGbs"></a>

```typescript
public readonly sizeInGbs: string;
```

- *Type:* string

---

##### `sizeInMbs`<sup>Required</sup> <a name="sizeInMbs" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.property.sizeInMbs"></a>

```typescript
public readonly sizeInMbs: string;
```

- *Type:* string

---

##### `sourceDetails`<sup>Required</sup> <a name="sourceDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.property.sourceDetails"></a>

```typescript
public readonly sourceDetails: DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsList">DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsList</a>

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `sourceVolumeGroupBackupId`<sup>Required</sup> <a name="sourceVolumeGroupBackupId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.property.sourceVolumeGroupBackupId"></a>

```typescript
public readonly sourceVolumeGroupBackupId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeRequestReceived`<sup>Required</sup> <a name="timeRequestReceived" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.property.timeRequestReceived"></a>

```typescript
public readonly timeRequestReceived: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `uniqueSizeInGbs`<sup>Required</sup> <a name="uniqueSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.property.uniqueSizeInGbs"></a>

```typescript
public readonly uniqueSizeInGbs: string;
```

- *Type:* string

---

##### `uniqueSizeInMbs`<sup>Required</sup> <a name="uniqueSizeInMbs" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.property.uniqueSizeInMbs"></a>

```typescript
public readonly uniqueSizeInMbs: string;
```

- *Type:* string

---

##### `volumeBackupIds`<sup>Required</sup> <a name="volumeBackupIds" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.property.volumeBackupIds"></a>

```typescript
public readonly volumeBackupIds: string[];
```

- *Type:* string[]

---

##### `volumeGroupId`<sup>Required</sup> <a name="volumeGroupId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.property.volumeGroupId"></a>

```typescript
public readonly volumeGroupId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreVolumeGroupBackupsVolumeGroupBackups;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackups">DataOciCoreVolumeGroupBackupsVolumeGroupBackups</a>

---


### DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsList <a name="DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsList.Initializer"></a>

```typescript
import { dataOciCoreVolumeGroupBackups } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsList.get"></a>

```typescript
public get(index: number): DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference <a name="DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreVolumeGroupBackups } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.property.volumeGroupBackupId">volumeGroupBackupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetails">DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `volumeGroupBackupId`<sup>Required</sup> <a name="volumeGroupBackupId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.property.volumeGroupBackupId"></a>

```typescript
public readonly volumeGroupBackupId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeGroupBackups.DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetails">DataOciCoreVolumeGroupBackupsVolumeGroupBackupsSourceDetails</a>

---



