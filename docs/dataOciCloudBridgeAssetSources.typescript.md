# `dataOciCloudBridgeAssetSources` Submodule <a name="`dataOciCloudBridgeAssetSources` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudBridgeAssetSources <a name="DataOciCloudBridgeAssetSources" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_asset_sources oci_cloud_bridge_asset_sources}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssetSources } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources(scope: Construct, id: string, config: DataOciCloudBridgeAssetSourcesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesConfig">DataOciCloudBridgeAssetSourcesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesConfig">DataOciCloudBridgeAssetSourcesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.resetAssetSourceId">resetAssetSourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciCloudBridgeAssetSourcesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilter">DataOciCloudBridgeAssetSourcesFilter</a>[]

---

##### `resetAssetSourceId` <a name="resetAssetSourceId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.resetAssetSourceId"></a>

```typescript
public resetAssetSourceId(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCloudBridgeAssetSources resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.isConstruct"></a>

```typescript
import { dataOciCloudBridgeAssetSources } from 'rhizo-co-terraform-provider-oci'

dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.isTerraformElement"></a>

```typescript
import { dataOciCloudBridgeAssetSources } from 'rhizo-co-terraform-provider-oci'

dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.isTerraformDataSource"></a>

```typescript
import { dataOciCloudBridgeAssetSources } from 'rhizo-co-terraform-provider-oci'

dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.generateConfigForImport"></a>

```typescript
import { dataOciCloudBridgeAssetSources } from 'rhizo-co-terraform-provider-oci'

dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCloudBridgeAssetSources resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCloudBridgeAssetSources to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCloudBridgeAssetSources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_asset_sources#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudBridgeAssetSources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.property.assetSourceCollection">assetSourceCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionList">DataOciCloudBridgeAssetSourcesAssetSourceCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterList">DataOciCloudBridgeAssetSourcesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.property.assetSourceIdInput">assetSourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilter">DataOciCloudBridgeAssetSourcesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.property.assetSourceId">assetSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `assetSourceCollection`<sup>Required</sup> <a name="assetSourceCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.property.assetSourceCollection"></a>

```typescript
public readonly assetSourceCollection: DataOciCloudBridgeAssetSourcesAssetSourceCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionList">DataOciCloudBridgeAssetSourcesAssetSourceCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.property.filter"></a>

```typescript
public readonly filter: DataOciCloudBridgeAssetSourcesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterList">DataOciCloudBridgeAssetSourcesFilterList</a>

---

##### `assetSourceIdInput`<sup>Optional</sup> <a name="assetSourceIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.property.assetSourceIdInput"></a>

```typescript
public readonly assetSourceIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciCloudBridgeAssetSourcesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilter">DataOciCloudBridgeAssetSourcesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `assetSourceId`<sup>Required</sup> <a name="assetSourceId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.property.assetSourceId"></a>

```typescript
public readonly assetSourceId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSources.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudBridgeAssetSourcesAssetSourceCollection <a name="DataOciCloudBridgeAssetSourcesAssetSourceCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollection.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssetSources } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudBridgeAssetSourcesAssetSourceCollection: dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollection = { ... }
```


### DataOciCloudBridgeAssetSourcesAssetSourceCollectionItems <a name="DataOciCloudBridgeAssetSourcesAssetSourceCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItems.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssetSources } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudBridgeAssetSourcesAssetSourceCollectionItems: dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItems = { ... }
```


### DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentials <a name="DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentials" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentials.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssetSources } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentials: dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentials = { ... }
```


### DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentials <a name="DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentials" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentials.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssetSources } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentials: dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentials = { ... }
```


### DataOciCloudBridgeAssetSourcesConfig <a name="DataOciCloudBridgeAssetSourcesConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesConfig.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssetSources } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudBridgeAssetSourcesConfig: dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_asset_sources#compartment_id DataOciCloudBridgeAssetSources#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesConfig.property.assetSourceId">assetSourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_asset_sources#asset_source_id DataOciCloudBridgeAssetSources#asset_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_asset_sources#display_name DataOciCloudBridgeAssetSources#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilter">DataOciCloudBridgeAssetSourcesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_asset_sources#id DataOciCloudBridgeAssetSources#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_asset_sources#state DataOciCloudBridgeAssetSources#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_asset_sources#compartment_id DataOciCloudBridgeAssetSources#compartment_id}.

---

##### `assetSourceId`<sup>Optional</sup> <a name="assetSourceId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesConfig.property.assetSourceId"></a>

```typescript
public readonly assetSourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_asset_sources#asset_source_id DataOciCloudBridgeAssetSources#asset_source_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_asset_sources#display_name DataOciCloudBridgeAssetSources#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciCloudBridgeAssetSourcesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilter">DataOciCloudBridgeAssetSourcesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_asset_sources#filter DataOciCloudBridgeAssetSources#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_asset_sources#id DataOciCloudBridgeAssetSources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_asset_sources#state DataOciCloudBridgeAssetSources#state}.

---

### DataOciCloudBridgeAssetSourcesFilter <a name="DataOciCloudBridgeAssetSourcesFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilter.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssetSources } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudBridgeAssetSourcesFilter: dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_asset_sources#name DataOciCloudBridgeAssetSources#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_asset_sources#values DataOciCloudBridgeAssetSources#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_asset_sources#regex DataOciCloudBridgeAssetSources#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_asset_sources#name DataOciCloudBridgeAssetSources#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_asset_sources#values DataOciCloudBridgeAssetSources#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_asset_sources#regex DataOciCloudBridgeAssetSources#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsList <a name="DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsList.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssetSources } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsList.get"></a>

```typescript
public get(index: number): DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference <a name="DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssetSources } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentials">DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentials;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentials">DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentials</a>

---


### DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsList <a name="DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsList.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssetSources } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference <a name="DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssetSources } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.property.areHistoricalMetricsCollected">areHistoricalMetricsCollected</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.property.areRealtimeMetricsCollected">areRealtimeMetricsCollected</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.property.assetsCompartmentId">assetsCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.property.discoveryCredentials">discoveryCredentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsList">DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.property.discoveryScheduleId">discoveryScheduleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.property.environmentId">environmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.property.inventoryId">inventoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.property.replicationCredentials">replicationCredentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsList">DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.property.vcenterEndpoint">vcenterEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItems">DataOciCloudBridgeAssetSourcesAssetSourceCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `areHistoricalMetricsCollected`<sup>Required</sup> <a name="areHistoricalMetricsCollected" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.property.areHistoricalMetricsCollected"></a>

```typescript
public readonly areHistoricalMetricsCollected: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `areRealtimeMetricsCollected`<sup>Required</sup> <a name="areRealtimeMetricsCollected" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.property.areRealtimeMetricsCollected"></a>

```typescript
public readonly areRealtimeMetricsCollected: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `assetsCompartmentId`<sup>Required</sup> <a name="assetsCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.property.assetsCompartmentId"></a>

```typescript
public readonly assetsCompartmentId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `discoveryCredentials`<sup>Required</sup> <a name="discoveryCredentials" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.property.discoveryCredentials"></a>

```typescript
public readonly discoveryCredentials: DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsList">DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsDiscoveryCredentialsList</a>

---

##### `discoveryScheduleId`<sup>Required</sup> <a name="discoveryScheduleId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.property.discoveryScheduleId"></a>

```typescript
public readonly discoveryScheduleId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inventoryId`<sup>Required</sup> <a name="inventoryId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.property.inventoryId"></a>

```typescript
public readonly inventoryId: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `replicationCredentials`<sup>Required</sup> <a name="replicationCredentials" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.property.replicationCredentials"></a>

```typescript
public readonly replicationCredentials: DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsList">DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `vcenterEndpoint`<sup>Required</sup> <a name="vcenterEndpoint" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.property.vcenterEndpoint"></a>

```typescript
public readonly vcenterEndpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudBridgeAssetSourcesAssetSourceCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItems">DataOciCloudBridgeAssetSourcesAssetSourceCollectionItems</a>

---


### DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsList <a name="DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsList.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssetSources } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsList.get"></a>

```typescript
public get(index: number): DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference <a name="DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssetSources } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentials">DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentials;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentials">DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsReplicationCredentials</a>

---


### DataOciCloudBridgeAssetSourcesAssetSourceCollectionList <a name="DataOciCloudBridgeAssetSourcesAssetSourceCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionList.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssetSources } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionList.get"></a>

```typescript
public get(index: number): DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference <a name="DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssetSources } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsList">DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollection">DataOciCloudBridgeAssetSourcesAssetSourceCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsList">DataOciCloudBridgeAssetSourcesAssetSourceCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudBridgeAssetSourcesAssetSourceCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesAssetSourceCollection">DataOciCloudBridgeAssetSourcesAssetSourceCollection</a>

---


### DataOciCloudBridgeAssetSourcesFilterList <a name="DataOciCloudBridgeAssetSourcesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterList.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssetSources } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterList.get"></a>

```typescript
public get(index: number): DataOciCloudBridgeAssetSourcesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilter">DataOciCloudBridgeAssetSourcesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCloudBridgeAssetSourcesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilter">DataOciCloudBridgeAssetSourcesFilter</a>[]

---


### DataOciCloudBridgeAssetSourcesFilterOutputReference <a name="DataOciCloudBridgeAssetSourcesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciCloudBridgeAssetSources } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilter">DataOciCloudBridgeAssetSourcesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCloudBridgeAssetSourcesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSources.DataOciCloudBridgeAssetSourcesFilter">DataOciCloudBridgeAssetSourcesFilter</a>

---



