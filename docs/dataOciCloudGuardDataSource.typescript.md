# `dataOciCloudGuardDataSource` Submodule <a name="`dataOciCloudGuardDataSource` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudGuardDataSource <a name="DataOciCloudGuardDataSource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_source oci_cloud_guard_data_source}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.Initializer"></a>

```typescript
import { dataOciCloudGuardDataSource } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDataSource.DataOciCloudGuardDataSource(scope: Construct, id: string, config: DataOciCloudGuardDataSourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceConfig">DataOciCloudGuardDataSourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceConfig">DataOciCloudGuardDataSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCloudGuardDataSource resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.isConstruct"></a>

```typescript
import { dataOciCloudGuardDataSource } from 'rhizo-co-terraform-provider-oci'

dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.isTerraformElement"></a>

```typescript
import { dataOciCloudGuardDataSource } from 'rhizo-co-terraform-provider-oci'

dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.isTerraformDataSource"></a>

```typescript
import { dataOciCloudGuardDataSource } from 'rhizo-co-terraform-provider-oci'

dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.generateConfigForImport"></a>

```typescript
import { dataOciCloudGuardDataSource } from 'rhizo-co-terraform-provider-oci'

dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCloudGuardDataSource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCloudGuardDataSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCloudGuardDataSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudGuardDataSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.dataSourceDetails">dataSourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsList">DataOciCloudGuardDataSourceDataSourceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.dataSourceDetectorMappingInfo">dataSourceDetectorMappingInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoList">DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.dataSourceFeedProvider">dataSourceFeedProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.regionStatusDetail">regionStatusDetail</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailList">DataOciCloudGuardDataSourceRegionStatusDetailList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.dataSourceIdInput">dataSourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.dataSourceId">dataSourceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `dataSourceDetails`<sup>Required</sup> <a name="dataSourceDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.dataSourceDetails"></a>

```typescript
public readonly dataSourceDetails: DataOciCloudGuardDataSourceDataSourceDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsList">DataOciCloudGuardDataSourceDataSourceDetailsList</a>

---

##### `dataSourceDetectorMappingInfo`<sup>Required</sup> <a name="dataSourceDetectorMappingInfo" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.dataSourceDetectorMappingInfo"></a>

```typescript
public readonly dataSourceDetectorMappingInfo: DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoList">DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoList</a>

---

##### `dataSourceFeedProvider`<sup>Required</sup> <a name="dataSourceFeedProvider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.dataSourceFeedProvider"></a>

```typescript
public readonly dataSourceFeedProvider: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `regionStatusDetail`<sup>Required</sup> <a name="regionStatusDetail" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.regionStatusDetail"></a>

```typescript
public readonly regionStatusDetail: DataOciCloudGuardDataSourceRegionStatusDetailList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailList">DataOciCloudGuardDataSourceRegionStatusDetailList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `dataSourceIdInput`<sup>Optional</sup> <a name="dataSourceIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.dataSourceIdInput"></a>

```typescript
public readonly dataSourceIdInput: string;
```

- *Type:* string

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.dataSourceId"></a>

```typescript
public readonly dataSourceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSource.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudGuardDataSourceConfig <a name="DataOciCloudGuardDataSourceConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceConfig.Initializer"></a>

```typescript
import { dataOciCloudGuardDataSource } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardDataSourceConfig: dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceConfig.property.dataSourceId">dataSourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_source#data_source_id DataOciCloudGuardDataSource#data_source_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceConfig.property.dataSourceId"></a>

```typescript
public readonly dataSourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_source#data_source_id DataOciCloudGuardDataSource#data_source_id}.

---

### DataOciCloudGuardDataSourceDataSourceDetails <a name="DataOciCloudGuardDataSourceDataSourceDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetails.Initializer"></a>

```typescript
import { dataOciCloudGuardDataSource } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardDataSourceDataSourceDetails: dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetails = { ... }
```


### DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetails <a name="DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetails.Initializer"></a>

```typescript
import { dataOciCloudGuardDataSource } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetails: dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetails = { ... }
```


### DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTime <a name="DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTime" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTime"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTime.Initializer"></a>

```typescript
import { dataOciCloudGuardDataSource } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardDataSourceDataSourceDetailsQueryStartTime: dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTime = { ... }
```


### DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails <a name="DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails.Initializer"></a>

```typescript
import { dataOciCloudGuardDataSource } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails: dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails = { ... }
```


### DataOciCloudGuardDataSourceDataSourceDetectorMappingInfo <a name="DataOciCloudGuardDataSourceDataSourceDetectorMappingInfo" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfo.Initializer"></a>

```typescript
import { dataOciCloudGuardDataSource } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardDataSourceDataSourceDetectorMappingInfo: dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfo = { ... }
```


### DataOciCloudGuardDataSourceRegionStatusDetail <a name="DataOciCloudGuardDataSourceRegionStatusDetail" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetail"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetail.Initializer"></a>

```typescript
import { dataOciCloudGuardDataSource } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardDataSourceRegionStatusDetail: dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetail = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudGuardDataSourceDataSourceDetailsList <a name="DataOciCloudGuardDataSourceDataSourceDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsList.Initializer"></a>

```typescript
import { dataOciCloudGuardDataSource } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardDataSourceDataSourceDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsList <a name="DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsList.Initializer"></a>

```typescript
import { dataOciCloudGuardDataSource } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference <a name="DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardDataSource } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.property.keyEntitiesCount">keyEntitiesCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.property.loggingQueryType">loggingQueryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetails">DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyEntitiesCount`<sup>Required</sup> <a name="keyEntitiesCount" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.property.keyEntitiesCount"></a>

```typescript
public readonly keyEntitiesCount: number;
```

- *Type:* number

---

##### `loggingQueryType`<sup>Required</sup> <a name="loggingQueryType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.property.loggingQueryType"></a>

```typescript
public readonly loggingQueryType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetails">DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetails</a>

---


### DataOciCloudGuardDataSourceDataSourceDetailsOutputReference <a name="DataOciCloudGuardDataSourceDataSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardDataSource } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.property.additionalEntitiesCount">additionalEntitiesCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.property.dataSourceFeedProvider">dataSourceFeedProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.property.intervalInMinutes">intervalInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.property.intervalInSeconds">intervalInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.property.loggingQueryDetails">loggingQueryDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsList">DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.property.loggingQueryType">loggingQueryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.property.queryStartTime">queryStartTime</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeList">DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.property.regions">regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.property.scheduledQueryScopeDetails">scheduledQueryScopeDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList">DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetails">DataOciCloudGuardDataSourceDataSourceDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalEntitiesCount`<sup>Required</sup> <a name="additionalEntitiesCount" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.property.additionalEntitiesCount"></a>

```typescript
public readonly additionalEntitiesCount: number;
```

- *Type:* number

---

##### `dataSourceFeedProvider`<sup>Required</sup> <a name="dataSourceFeedProvider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.property.dataSourceFeedProvider"></a>

```typescript
public readonly dataSourceFeedProvider: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `intervalInMinutes`<sup>Required</sup> <a name="intervalInMinutes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.property.intervalInMinutes"></a>

```typescript
public readonly intervalInMinutes: number;
```

- *Type:* number

---

##### `intervalInSeconds`<sup>Required</sup> <a name="intervalInSeconds" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.property.intervalInSeconds"></a>

```typescript
public readonly intervalInSeconds: number;
```

- *Type:* number

---

##### `loggingQueryDetails`<sup>Required</sup> <a name="loggingQueryDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.property.loggingQueryDetails"></a>

```typescript
public readonly loggingQueryDetails: DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsList">DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsList</a>

---

##### `loggingQueryType`<sup>Required</sup> <a name="loggingQueryType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.property.loggingQueryType"></a>

```typescript
public readonly loggingQueryType: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `queryStartTime`<sup>Required</sup> <a name="queryStartTime" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.property.queryStartTime"></a>

```typescript
public readonly queryStartTime: DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeList">DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeList</a>

---

##### `regions`<sup>Required</sup> <a name="regions" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

---

##### `scheduledQueryScopeDetails`<sup>Required</sup> <a name="scheduledQueryScopeDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.property.scheduledQueryScopeDetails"></a>

```typescript
public readonly scheduledQueryScopeDetails: DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList">DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList</a>

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardDataSourceDataSourceDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetails">DataOciCloudGuardDataSourceDataSourceDetails</a>

---


### DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeList <a name="DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeList.Initializer"></a>

```typescript
import { dataOciCloudGuardDataSource } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference <a name="DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardDataSource } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.property.queryStartTime">queryStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.property.startPolicyType">startPolicyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTime">DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `queryStartTime`<sup>Required</sup> <a name="queryStartTime" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.property.queryStartTime"></a>

```typescript
public readonly queryStartTime: string;
```

- *Type:* string

---

##### `startPolicyType`<sup>Required</sup> <a name="startPolicyType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.property.startPolicyType"></a>

```typescript
public readonly startPolicyType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTime;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTime">DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTime</a>

---


### DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList <a name="DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.Initializer"></a>

```typescript
import { dataOciCloudGuardDataSource } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference <a name="DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardDataSource } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.resourceIds">resourceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails">DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `resourceIds`<sup>Required</sup> <a name="resourceIds" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.resourceIds"></a>

```typescript
public readonly resourceIds: string[];
```

- *Type:* string[]

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails">DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails</a>

---


### DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoList <a name="DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoList.Initializer"></a>

```typescript
import { dataOciCloudGuardDataSource } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference <a name="DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardDataSource } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.property.detectorRecipeId">detectorRecipeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.property.detectorRuleId">detectorRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfo">DataOciCloudGuardDataSourceDataSourceDetectorMappingInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `detectorRecipeId`<sup>Required</sup> <a name="detectorRecipeId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.property.detectorRecipeId"></a>

```typescript
public readonly detectorRecipeId: string;
```

- *Type:* string

---

##### `detectorRuleId`<sup>Required</sup> <a name="detectorRuleId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.property.detectorRuleId"></a>

```typescript
public readonly detectorRuleId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardDataSourceDataSourceDetectorMappingInfo;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceDataSourceDetectorMappingInfo">DataOciCloudGuardDataSourceDataSourceDetectorMappingInfo</a>

---


### DataOciCloudGuardDataSourceRegionStatusDetailList <a name="DataOciCloudGuardDataSourceRegionStatusDetailList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailList.Initializer"></a>

```typescript
import { dataOciCloudGuardDataSource } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardDataSourceRegionStatusDetailOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardDataSourceRegionStatusDetailOutputReference <a name="DataOciCloudGuardDataSourceRegionStatusDetailOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardDataSource } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetail">DataOciCloudGuardDataSourceRegionStatusDetail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetailOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardDataSourceRegionStatusDetail;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSource.DataOciCloudGuardDataSourceRegionStatusDetail">DataOciCloudGuardDataSourceRegionStatusDetail</a>

---



