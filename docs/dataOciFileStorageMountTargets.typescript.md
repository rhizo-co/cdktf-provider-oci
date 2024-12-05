# `dataOciFileStorageMountTargets` Submodule <a name="`dataOciFileStorageMountTargets` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFileStorageMountTargets <a name="DataOciFileStorageMountTargets" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets oci_file_storage_mount_targets}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.Initializer"></a>

```typescript
import { dataOciFileStorageMountTargets } from 'rhizo-co-terraform-provider-oci'

new dataOciFileStorageMountTargets.DataOciFileStorageMountTargets(scope: Construct, id: string, config: DataOciFileStorageMountTargetsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig">DataOciFileStorageMountTargetsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig">DataOciFileStorageMountTargetsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.resetExportSetId">resetExportSetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciFileStorageMountTargetsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilter">DataOciFileStorageMountTargetsFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetExportSetId` <a name="resetExportSetId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.resetExportSetId"></a>

```typescript
public resetExportSetId(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFileStorageMountTargets resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.isConstruct"></a>

```typescript
import { dataOciFileStorageMountTargets } from 'rhizo-co-terraform-provider-oci'

dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.isTerraformElement"></a>

```typescript
import { dataOciFileStorageMountTargets } from 'rhizo-co-terraform-provider-oci'

dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.isTerraformDataSource"></a>

```typescript
import { dataOciFileStorageMountTargets } from 'rhizo-co-terraform-provider-oci'

dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.generateConfigForImport"></a>

```typescript
import { dataOciFileStorageMountTargets } from 'rhizo-co-terraform-provider-oci'

dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciFileStorageMountTargets resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciFileStorageMountTargets to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciFileStorageMountTargets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFileStorageMountTargets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList">DataOciFileStorageMountTargetsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.mountTargets">mountTargets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList">DataOciFileStorageMountTargetsMountTargetsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.exportSetIdInput">exportSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilter">DataOciFileStorageMountTargetsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.exportSetId">exportSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.filter"></a>

```typescript
public readonly filter: DataOciFileStorageMountTargetsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList">DataOciFileStorageMountTargetsFilterList</a>

---

##### `mountTargets`<sup>Required</sup> <a name="mountTargets" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.mountTargets"></a>

```typescript
public readonly mountTargets: DataOciFileStorageMountTargetsMountTargetsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList">DataOciFileStorageMountTargetsMountTargetsList</a>

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.availabilityDomainInput"></a>

```typescript
public readonly availabilityDomainInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `exportSetIdInput`<sup>Optional</sup> <a name="exportSetIdInput" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.exportSetIdInput"></a>

```typescript
public readonly exportSetIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciFileStorageMountTargetsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilter">DataOciFileStorageMountTargetsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `exportSetId`<sup>Required</sup> <a name="exportSetId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.exportSetId"></a>

```typescript
public readonly exportSetId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargets.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFileStorageMountTargetsConfig <a name="DataOciFileStorageMountTargetsConfig" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.Initializer"></a>

```typescript
import { dataOciFileStorageMountTargets } from 'rhizo-co-terraform-provider-oci'

const dataOciFileStorageMountTargetsConfig: dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets#availability_domain DataOciFileStorageMountTargets#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets#compartment_id DataOciFileStorageMountTargets#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets#display_name DataOciFileStorageMountTargets#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.exportSetId">exportSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets#export_set_id DataOciFileStorageMountTargets#export_set_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilter">DataOciFileStorageMountTargetsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets#id DataOciFileStorageMountTargets#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets#state DataOciFileStorageMountTargets#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets#availability_domain DataOciFileStorageMountTargets#availability_domain}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets#compartment_id DataOciFileStorageMountTargets#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets#display_name DataOciFileStorageMountTargets#display_name}.

---

##### `exportSetId`<sup>Optional</sup> <a name="exportSetId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.exportSetId"></a>

```typescript
public readonly exportSetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets#export_set_id DataOciFileStorageMountTargets#export_set_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciFileStorageMountTargetsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilter">DataOciFileStorageMountTargetsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets#filter DataOciFileStorageMountTargets#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets#id DataOciFileStorageMountTargets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets#state DataOciFileStorageMountTargets#state}.

---

### DataOciFileStorageMountTargetsFilter <a name="DataOciFileStorageMountTargetsFilter" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilter.Initializer"></a>

```typescript
import { dataOciFileStorageMountTargets } from 'rhizo-co-terraform-provider-oci'

const dataOciFileStorageMountTargetsFilter: dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets#name DataOciFileStorageMountTargets#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets#values DataOciFileStorageMountTargets#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets#regex DataOciFileStorageMountTargets#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets#name DataOciFileStorageMountTargets#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets#values DataOciFileStorageMountTargets#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_mount_targets#regex DataOciFileStorageMountTargets#regex}.

---

### DataOciFileStorageMountTargetsMountTargets <a name="DataOciFileStorageMountTargetsMountTargets" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargets.Initializer"></a>

```typescript
import { dataOciFileStorageMountTargets } from 'rhizo-co-terraform-provider-oci'

const dataOciFileStorageMountTargetsMountTargets: dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargets = { ... }
```


### DataOciFileStorageMountTargetsMountTargetsKerberos <a name="DataOciFileStorageMountTargetsMountTargetsKerberos" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberos"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberos.Initializer"></a>

```typescript
import { dataOciFileStorageMountTargets } from 'rhizo-co-terraform-provider-oci'

const dataOciFileStorageMountTargetsMountTargetsKerberos: dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberos = { ... }
```


### DataOciFileStorageMountTargetsMountTargetsLdapIdmap <a name="DataOciFileStorageMountTargetsMountTargetsLdapIdmap" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmap"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmap.Initializer"></a>

```typescript
import { dataOciFileStorageMountTargets } from 'rhizo-co-terraform-provider-oci'

const dataOciFileStorageMountTargetsMountTargetsLdapIdmap: dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmap = { ... }
```


### DataOciFileStorageMountTargetsMountTargetsLocks <a name="DataOciFileStorageMountTargetsMountTargetsLocks" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocks.Initializer"></a>

```typescript
import { dataOciFileStorageMountTargets } from 'rhizo-co-terraform-provider-oci'

const dataOciFileStorageMountTargetsMountTargetsLocks: dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocks = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFileStorageMountTargetsFilterList <a name="DataOciFileStorageMountTargetsFilterList" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList.Initializer"></a>

```typescript
import { dataOciFileStorageMountTargets } from 'rhizo-co-terraform-provider-oci'

new dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList.get"></a>

```typescript
public get(index: number): DataOciFileStorageMountTargetsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilter">DataOciFileStorageMountTargetsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciFileStorageMountTargetsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilter">DataOciFileStorageMountTargetsFilter</a>[]

---


### DataOciFileStorageMountTargetsFilterOutputReference <a name="DataOciFileStorageMountTargetsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciFileStorageMountTargets } from 'rhizo-co-terraform-provider-oci'

new dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilter">DataOciFileStorageMountTargetsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciFileStorageMountTargetsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsFilter">DataOciFileStorageMountTargetsFilter</a>

---


### DataOciFileStorageMountTargetsMountTargetsKerberosList <a name="DataOciFileStorageMountTargetsMountTargetsKerberosList" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList.Initializer"></a>

```typescript
import { dataOciFileStorageMountTargets } from 'rhizo-co-terraform-provider-oci'

new dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList.get"></a>

```typescript
public get(index: number): DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference <a name="DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.Initializer"></a>

```typescript
import { dataOciFileStorageMountTargets } from 'rhizo-co-terraform-provider-oci'

new dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.property.backupKeyTabSecretVersion">backupKeyTabSecretVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.property.currentKeyTabSecretVersion">currentKeyTabSecretVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.property.isKerberosEnabled">isKerberosEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.property.kerberosRealm">kerberosRealm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.property.keyTabSecretId">keyTabSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberos">DataOciFileStorageMountTargetsMountTargetsKerberos</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupKeyTabSecretVersion`<sup>Required</sup> <a name="backupKeyTabSecretVersion" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.property.backupKeyTabSecretVersion"></a>

```typescript
public readonly backupKeyTabSecretVersion: number;
```

- *Type:* number

---

##### `currentKeyTabSecretVersion`<sup>Required</sup> <a name="currentKeyTabSecretVersion" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.property.currentKeyTabSecretVersion"></a>

```typescript
public readonly currentKeyTabSecretVersion: number;
```

- *Type:* number

---

##### `isKerberosEnabled`<sup>Required</sup> <a name="isKerberosEnabled" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.property.isKerberosEnabled"></a>

```typescript
public readonly isKerberosEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `kerberosRealm`<sup>Required</sup> <a name="kerberosRealm" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.property.kerberosRealm"></a>

```typescript
public readonly kerberosRealm: string;
```

- *Type:* string

---

##### `keyTabSecretId`<sup>Required</sup> <a name="keyTabSecretId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.property.keyTabSecretId"></a>

```typescript
public readonly keyTabSecretId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFileStorageMountTargetsMountTargetsKerberos;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberos">DataOciFileStorageMountTargetsMountTargetsKerberos</a>

---


### DataOciFileStorageMountTargetsMountTargetsLdapIdmapList <a name="DataOciFileStorageMountTargetsMountTargetsLdapIdmapList" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList.Initializer"></a>

```typescript
import { dataOciFileStorageMountTargets } from 'rhizo-co-terraform-provider-oci'

new dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList.get"></a>

```typescript
public get(index: number): DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference <a name="DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.Initializer"></a>

```typescript
import { dataOciFileStorageMountTargets } from 'rhizo-co-terraform-provider-oci'

new dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.property.cacheLifetimeSeconds">cacheLifetimeSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.property.cacheRefreshIntervalSeconds">cacheRefreshIntervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.property.groupSearchBase">groupSearchBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.property.negativeCacheLifetimeSeconds">negativeCacheLifetimeSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.property.outboundConnector1Id">outboundConnector1Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.property.outboundConnector2Id">outboundConnector2Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.property.schemaType">schemaType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.property.userSearchBase">userSearchBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmap">DataOciFileStorageMountTargetsMountTargetsLdapIdmap</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cacheLifetimeSeconds`<sup>Required</sup> <a name="cacheLifetimeSeconds" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.property.cacheLifetimeSeconds"></a>

```typescript
public readonly cacheLifetimeSeconds: number;
```

- *Type:* number

---

##### `cacheRefreshIntervalSeconds`<sup>Required</sup> <a name="cacheRefreshIntervalSeconds" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.property.cacheRefreshIntervalSeconds"></a>

```typescript
public readonly cacheRefreshIntervalSeconds: number;
```

- *Type:* number

---

##### `groupSearchBase`<sup>Required</sup> <a name="groupSearchBase" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.property.groupSearchBase"></a>

```typescript
public readonly groupSearchBase: string;
```

- *Type:* string

---

##### `negativeCacheLifetimeSeconds`<sup>Required</sup> <a name="negativeCacheLifetimeSeconds" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.property.negativeCacheLifetimeSeconds"></a>

```typescript
public readonly negativeCacheLifetimeSeconds: number;
```

- *Type:* number

---

##### `outboundConnector1Id`<sup>Required</sup> <a name="outboundConnector1Id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.property.outboundConnector1Id"></a>

```typescript
public readonly outboundConnector1Id: string;
```

- *Type:* string

---

##### `outboundConnector2Id`<sup>Required</sup> <a name="outboundConnector2Id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.property.outboundConnector2Id"></a>

```typescript
public readonly outboundConnector2Id: string;
```

- *Type:* string

---

##### `schemaType`<sup>Required</sup> <a name="schemaType" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.property.schemaType"></a>

```typescript
public readonly schemaType: string;
```

- *Type:* string

---

##### `userSearchBase`<sup>Required</sup> <a name="userSearchBase" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.property.userSearchBase"></a>

```typescript
public readonly userSearchBase: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFileStorageMountTargetsMountTargetsLdapIdmap;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmap">DataOciFileStorageMountTargetsMountTargetsLdapIdmap</a>

---


### DataOciFileStorageMountTargetsMountTargetsList <a name="DataOciFileStorageMountTargetsMountTargetsList" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList.Initializer"></a>

```typescript
import { dataOciFileStorageMountTargets } from 'rhizo-co-terraform-provider-oci'

new dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList.get"></a>

```typescript
public get(index: number): DataOciFileStorageMountTargetsMountTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFileStorageMountTargetsMountTargetsLocksList <a name="DataOciFileStorageMountTargetsMountTargetsLocksList" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList.Initializer"></a>

```typescript
import { dataOciFileStorageMountTargets } from 'rhizo-co-terraform-provider-oci'

new dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList.get"></a>

```typescript
public get(index: number): DataOciFileStorageMountTargetsMountTargetsLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFileStorageMountTargetsMountTargetsLocksOutputReference <a name="DataOciFileStorageMountTargetsMountTargetsLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.Initializer"></a>

```typescript
import { dataOciFileStorageMountTargets } from 'rhizo-co-terraform-provider-oci'

new dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.property.relatedResourceId">relatedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocks">DataOciFileStorageMountTargetsMountTargetsLocks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `relatedResourceId`<sup>Required</sup> <a name="relatedResourceId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.property.relatedResourceId"></a>

```typescript
public readonly relatedResourceId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFileStorageMountTargetsMountTargetsLocks;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocks">DataOciFileStorageMountTargetsMountTargetsLocks</a>

---


### DataOciFileStorageMountTargetsMountTargetsOutputReference <a name="DataOciFileStorageMountTargetsMountTargetsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.Initializer"></a>

```typescript
import { dataOciFileStorageMountTargets } from 'rhizo-co-terraform-provider-oci'

new dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.exportSetId">exportSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.hostnameLabel">hostnameLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.idmapType">idmapType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.isLockOverride">isLockOverride</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.kerberos">kerberos</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList">DataOciFileStorageMountTargetsMountTargetsKerberosList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.ldapIdmap">ldapIdmap</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList">DataOciFileStorageMountTargetsMountTargetsLdapIdmapList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList">DataOciFileStorageMountTargetsMountTargetsLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.observedThroughput">observedThroughput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.privateIpIds">privateIpIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.requestedThroughput">requestedThroughput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.reservedStorageCapacity">reservedStorageCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.timeBillingCycleEnd">timeBillingCycleEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargets">DataOciFileStorageMountTargetsMountTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `exportSetId`<sup>Required</sup> <a name="exportSetId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.exportSetId"></a>

```typescript
public readonly exportSetId: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `hostnameLabel`<sup>Required</sup> <a name="hostnameLabel" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.hostnameLabel"></a>

```typescript
public readonly hostnameLabel: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idmapType`<sup>Required</sup> <a name="idmapType" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.idmapType"></a>

```typescript
public readonly idmapType: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `isLockOverride`<sup>Required</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.isLockOverride"></a>

```typescript
public readonly isLockOverride: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `kerberos`<sup>Required</sup> <a name="kerberos" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.kerberos"></a>

```typescript
public readonly kerberos: DataOciFileStorageMountTargetsMountTargetsKerberosList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsKerberosList">DataOciFileStorageMountTargetsMountTargetsKerberosList</a>

---

##### `ldapIdmap`<sup>Required</sup> <a name="ldapIdmap" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.ldapIdmap"></a>

```typescript
public readonly ldapIdmap: DataOciFileStorageMountTargetsMountTargetsLdapIdmapList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLdapIdmapList">DataOciFileStorageMountTargetsMountTargetsLdapIdmapList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.locks"></a>

```typescript
public readonly locks: DataOciFileStorageMountTargetsMountTargetsLocksList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsLocksList">DataOciFileStorageMountTargetsMountTargetsLocksList</a>

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

---

##### `observedThroughput`<sup>Required</sup> <a name="observedThroughput" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.observedThroughput"></a>

```typescript
public readonly observedThroughput: string;
```

- *Type:* string

---

##### `privateIpIds`<sup>Required</sup> <a name="privateIpIds" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.privateIpIds"></a>

```typescript
public readonly privateIpIds: string[];
```

- *Type:* string[]

---

##### `requestedThroughput`<sup>Required</sup> <a name="requestedThroughput" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.requestedThroughput"></a>

```typescript
public readonly requestedThroughput: string;
```

- *Type:* string

---

##### `reservedStorageCapacity`<sup>Required</sup> <a name="reservedStorageCapacity" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.reservedStorageCapacity"></a>

```typescript
public readonly reservedStorageCapacity: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `timeBillingCycleEnd`<sup>Required</sup> <a name="timeBillingCycleEnd" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.timeBillingCycleEnd"></a>

```typescript
public readonly timeBillingCycleEnd: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFileStorageMountTargetsMountTargets;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageMountTargets.DataOciFileStorageMountTargetsMountTargets">DataOciFileStorageMountTargetsMountTargets</a>

---



