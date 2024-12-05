# `dataOciDatacatalogDataAssets` Submodule <a name="`dataOciDatacatalogDataAssets` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatacatalogDataAssets <a name="DataOciDatacatalogDataAssets" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_data_assets oci_datacatalog_data_assets}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.Initializer"></a>

```typescript
import { dataOciDatacatalogDataAssets } from 'rhizo-co-terraform-provider-oci'

new dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets(scope: Construct, id: string, config: DataOciDatacatalogDataAssetsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsConfig">DataOciDatacatalogDataAssetsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsConfig">DataOciDatacatalogDataAssetsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.resetCreatedById">resetCreatedById</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.resetDisplayNameContains">resetDisplayNameContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.resetExternalKey">resetExternalKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.resetFields">resetFields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.resetTypeKey">resetTypeKey</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDatacatalogDataAssetsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilter">DataOciDatacatalogDataAssetsFilter</a>[]

---

##### `resetCreatedById` <a name="resetCreatedById" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.resetCreatedById"></a>

```typescript
public resetCreatedById(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetDisplayNameContains` <a name="resetDisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.resetDisplayNameContains"></a>

```typescript
public resetDisplayNameContains(): void
```

##### `resetExternalKey` <a name="resetExternalKey" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.resetExternalKey"></a>

```typescript
public resetExternalKey(): void
```

##### `resetFields` <a name="resetFields" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.resetFields"></a>

```typescript
public resetFields(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTypeKey` <a name="resetTypeKey" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.resetTypeKey"></a>

```typescript
public resetTypeKey(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatacatalogDataAssets resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.isConstruct"></a>

```typescript
import { dataOciDatacatalogDataAssets } from 'rhizo-co-terraform-provider-oci'

dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.isTerraformElement"></a>

```typescript
import { dataOciDatacatalogDataAssets } from 'rhizo-co-terraform-provider-oci'

dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.isTerraformDataSource"></a>

```typescript
import { dataOciDatacatalogDataAssets } from 'rhizo-co-terraform-provider-oci'

dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.generateConfigForImport"></a>

```typescript
import { dataOciDatacatalogDataAssets } from 'rhizo-co-terraform-provider-oci'

dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatacatalogDataAssets resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatacatalogDataAssets to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatacatalogDataAssets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_data_assets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatacatalogDataAssets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.dataAssetCollection">dataAssetCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionList">DataOciDatacatalogDataAssetsDataAssetCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterList">DataOciDatacatalogDataAssetsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.createdByIdInput">createdByIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.displayNameContainsInput">displayNameContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.externalKeyInput">externalKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.fieldsInput">fieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilter">DataOciDatacatalogDataAssetsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.typeKeyInput">typeKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.createdById">createdById</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.displayNameContains">displayNameContains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.externalKey">externalKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.fields">fields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.typeKey">typeKey</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `dataAssetCollection`<sup>Required</sup> <a name="dataAssetCollection" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.dataAssetCollection"></a>

```typescript
public readonly dataAssetCollection: DataOciDatacatalogDataAssetsDataAssetCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionList">DataOciDatacatalogDataAssetsDataAssetCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.filter"></a>

```typescript
public readonly filter: DataOciDatacatalogDataAssetsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterList">DataOciDatacatalogDataAssetsFilterList</a>

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `createdByIdInput`<sup>Optional</sup> <a name="createdByIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.createdByIdInput"></a>

```typescript
public readonly createdByIdInput: string;
```

- *Type:* string

---

##### `displayNameContainsInput`<sup>Optional</sup> <a name="displayNameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.displayNameContainsInput"></a>

```typescript
public readonly displayNameContainsInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `externalKeyInput`<sup>Optional</sup> <a name="externalKeyInput" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.externalKeyInput"></a>

```typescript
public readonly externalKeyInput: string;
```

- *Type:* string

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.fieldsInput"></a>

```typescript
public readonly fieldsInput: string[];
```

- *Type:* string[]

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDatacatalogDataAssetsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilter">DataOciDatacatalogDataAssetsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `typeKeyInput`<sup>Optional</sup> <a name="typeKeyInput" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.typeKeyInput"></a>

```typescript
public readonly typeKeyInput: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `createdById`<sup>Required</sup> <a name="createdById" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.createdById"></a>

```typescript
public readonly createdById: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `displayNameContains`<sup>Required</sup> <a name="displayNameContains" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.displayNameContains"></a>

```typescript
public readonly displayNameContains: string;
```

- *Type:* string

---

##### `externalKey`<sup>Required</sup> <a name="externalKey" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.externalKey"></a>

```typescript
public readonly externalKey: string;
```

- *Type:* string

---

##### `fields`<sup>Required</sup> <a name="fields" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.fields"></a>

```typescript
public readonly fields: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `typeKey`<sup>Required</sup> <a name="typeKey" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.typeKey"></a>

```typescript
public readonly typeKey: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssets.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatacatalogDataAssetsConfig <a name="DataOciDatacatalogDataAssetsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsConfig.Initializer"></a>

```typescript
import { dataOciDatacatalogDataAssets } from 'rhizo-co-terraform-provider-oci'

const dataOciDatacatalogDataAssetsConfig: dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsConfig.property.catalogId">catalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_data_assets#catalog_id DataOciDatacatalogDataAssets#catalog_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsConfig.property.createdById">createdById</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_data_assets#created_by_id DataOciDatacatalogDataAssets#created_by_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_data_assets#display_name DataOciDatacatalogDataAssets#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsConfig.property.displayNameContains">displayNameContains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_data_assets#display_name_contains DataOciDatacatalogDataAssets#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsConfig.property.externalKey">externalKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_data_assets#external_key DataOciDatacatalogDataAssets#external_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsConfig.property.fields">fields</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_data_assets#fields DataOciDatacatalogDataAssets#fields}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilter">DataOciDatacatalogDataAssetsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_data_assets#id DataOciDatacatalogDataAssets#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_data_assets#state DataOciDatacatalogDataAssets#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsConfig.property.typeKey">typeKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_data_assets#type_key DataOciDatacatalogDataAssets#type_key}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsConfig.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_data_assets#catalog_id DataOciDatacatalogDataAssets#catalog_id}.

---

##### `createdById`<sup>Optional</sup> <a name="createdById" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsConfig.property.createdById"></a>

```typescript
public readonly createdById: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_data_assets#created_by_id DataOciDatacatalogDataAssets#created_by_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_data_assets#display_name DataOciDatacatalogDataAssets#display_name}.

---

##### `displayNameContains`<sup>Optional</sup> <a name="displayNameContains" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsConfig.property.displayNameContains"></a>

```typescript
public readonly displayNameContains: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_data_assets#display_name_contains DataOciDatacatalogDataAssets#display_name_contains}.

---

##### `externalKey`<sup>Optional</sup> <a name="externalKey" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsConfig.property.externalKey"></a>

```typescript
public readonly externalKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_data_assets#external_key DataOciDatacatalogDataAssets#external_key}.

---

##### `fields`<sup>Optional</sup> <a name="fields" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsConfig.property.fields"></a>

```typescript
public readonly fields: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_data_assets#fields DataOciDatacatalogDataAssets#fields}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDatacatalogDataAssetsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilter">DataOciDatacatalogDataAssetsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_data_assets#filter DataOciDatacatalogDataAssets#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_data_assets#id DataOciDatacatalogDataAssets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_data_assets#state DataOciDatacatalogDataAssets#state}.

---

##### `typeKey`<sup>Optional</sup> <a name="typeKey" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsConfig.property.typeKey"></a>

```typescript
public readonly typeKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_data_assets#type_key DataOciDatacatalogDataAssets#type_key}.

---

### DataOciDatacatalogDataAssetsDataAssetCollection <a name="DataOciDatacatalogDataAssetsDataAssetCollection" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollection.Initializer"></a>

```typescript
import { dataOciDatacatalogDataAssets } from 'rhizo-co-terraform-provider-oci'

const dataOciDatacatalogDataAssetsDataAssetCollection: dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollection = { ... }
```


### DataOciDatacatalogDataAssetsDataAssetCollectionItems <a name="DataOciDatacatalogDataAssetsDataAssetCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItems.Initializer"></a>

```typescript
import { dataOciDatacatalogDataAssets } from 'rhizo-co-terraform-provider-oci'

const dataOciDatacatalogDataAssetsDataAssetCollectionItems: dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItems = { ... }
```


### DataOciDatacatalogDataAssetsFilter <a name="DataOciDatacatalogDataAssetsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilter.Initializer"></a>

```typescript
import { dataOciDatacatalogDataAssets } from 'rhizo-co-terraform-provider-oci'

const dataOciDatacatalogDataAssetsFilter: dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_data_assets#name DataOciDatacatalogDataAssets#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_data_assets#values DataOciDatacatalogDataAssets#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_data_assets#regex DataOciDatacatalogDataAssets#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_data_assets#name DataOciDatacatalogDataAssets#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_data_assets#values DataOciDatacatalogDataAssets#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_data_assets#regex DataOciDatacatalogDataAssets#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatacatalogDataAssetsDataAssetCollectionItemsList <a name="DataOciDatacatalogDataAssetsDataAssetCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDatacatalogDataAssets } from 'rhizo-co-terraform-provider-oci'

new dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference <a name="DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDatacatalogDataAssets } from 'rhizo-co-terraform-provider-oci'

new dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.property.createdById">createdById</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.property.externalKey">externalKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.property.properties">properties</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.property.timeHarvested">timeHarvested</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.property.typeKey">typeKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.property.updatedById">updatedById</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItems">DataOciDatacatalogDataAssetsDataAssetCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `createdById`<sup>Required</sup> <a name="createdById" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.property.createdById"></a>

```typescript
public readonly createdById: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `externalKey`<sup>Required</sup> <a name="externalKey" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.property.externalKey"></a>

```typescript
public readonly externalKey: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.property.properties"></a>

```typescript
public readonly properties: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeHarvested`<sup>Required</sup> <a name="timeHarvested" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.property.timeHarvested"></a>

```typescript
public readonly timeHarvested: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `typeKey`<sup>Required</sup> <a name="typeKey" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.property.typeKey"></a>

```typescript
public readonly typeKey: string;
```

- *Type:* string

---

##### `updatedById`<sup>Required</sup> <a name="updatedById" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.property.updatedById"></a>

```typescript
public readonly updatedById: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatacatalogDataAssetsDataAssetCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItems">DataOciDatacatalogDataAssetsDataAssetCollectionItems</a>

---


### DataOciDatacatalogDataAssetsDataAssetCollectionList <a name="DataOciDatacatalogDataAssetsDataAssetCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionList.Initializer"></a>

```typescript
import { dataOciDatacatalogDataAssets } from 'rhizo-co-terraform-provider-oci'

new dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionList.get"></a>

```typescript
public get(index: number): DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference <a name="DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDatacatalogDataAssets } from 'rhizo-co-terraform-provider-oci'

new dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsList">DataOciDatacatalogDataAssetsDataAssetCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollection">DataOciDatacatalogDataAssetsDataAssetCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDatacatalogDataAssetsDataAssetCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionItemsList">DataOciDatacatalogDataAssetsDataAssetCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatacatalogDataAssetsDataAssetCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsDataAssetCollection">DataOciDatacatalogDataAssetsDataAssetCollection</a>

---


### DataOciDatacatalogDataAssetsFilterList <a name="DataOciDatacatalogDataAssetsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterList.Initializer"></a>

```typescript
import { dataOciDatacatalogDataAssets } from 'rhizo-co-terraform-provider-oci'

new dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterList.get"></a>

```typescript
public get(index: number): DataOciDatacatalogDataAssetsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilter">DataOciDatacatalogDataAssetsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatacatalogDataAssetsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilter">DataOciDatacatalogDataAssetsFilter</a>[]

---


### DataOciDatacatalogDataAssetsFilterOutputReference <a name="DataOciDatacatalogDataAssetsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDatacatalogDataAssets } from 'rhizo-co-terraform-provider-oci'

new dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilter">DataOciDatacatalogDataAssetsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatacatalogDataAssetsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogDataAssets.DataOciDatacatalogDataAssetsFilter">DataOciDatacatalogDataAssetsFilter</a>

---



