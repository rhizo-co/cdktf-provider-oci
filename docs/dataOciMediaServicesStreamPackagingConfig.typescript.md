# `dataOciMediaServicesStreamPackagingConfig` Submodule <a name="`dataOciMediaServicesStreamPackagingConfig` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMediaServicesStreamPackagingConfig <a name="DataOciMediaServicesStreamPackagingConfig" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_config oci_media_services_stream_packaging_config}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.Initializer"></a>

```typescript
import { dataOciMediaServicesStreamPackagingConfig } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig(scope: Construct, id: string, config: DataOciMediaServicesStreamPackagingConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigConfig">DataOciMediaServicesStreamPackagingConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigConfig">DataOciMediaServicesStreamPackagingConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMediaServicesStreamPackagingConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.isConstruct"></a>

```typescript
import { dataOciMediaServicesStreamPackagingConfig } from 'rhizo-co-terraform-provider-oci'

dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.isTerraformElement"></a>

```typescript
import { dataOciMediaServicesStreamPackagingConfig } from 'rhizo-co-terraform-provider-oci'

dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.isTerraformDataSource"></a>

```typescript
import { dataOciMediaServicesStreamPackagingConfig } from 'rhizo-co-terraform-provider-oci'

dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.generateConfigForImport"></a>

```typescript
import { dataOciMediaServicesStreamPackagingConfig } from 'rhizo-co-terraform-provider-oci'

dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciMediaServicesStreamPackagingConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciMediaServicesStreamPackagingConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciMediaServicesStreamPackagingConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMediaServicesStreamPackagingConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.distributionChannelId">distributionChannelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.encryption">encryption</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList">DataOciMediaServicesStreamPackagingConfigEncryptionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.isLockOverride">isLockOverride</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList">DataOciMediaServicesStreamPackagingConfigLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.segmentTimeInSeconds">segmentTimeInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.streamPackagingFormat">streamPackagingFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.streamPackagingConfigIdInput">streamPackagingConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.streamPackagingConfigId">streamPackagingConfigId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `distributionChannelId`<sup>Required</sup> <a name="distributionChannelId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.distributionChannelId"></a>

```typescript
public readonly distributionChannelId: string;
```

- *Type:* string

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.encryption"></a>

```typescript
public readonly encryption: DataOciMediaServicesStreamPackagingConfigEncryptionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList">DataOciMediaServicesStreamPackagingConfigEncryptionList</a>

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isLockOverride`<sup>Required</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.isLockOverride"></a>

```typescript
public readonly isLockOverride: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.locks"></a>

```typescript
public readonly locks: DataOciMediaServicesStreamPackagingConfigLocksList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList">DataOciMediaServicesStreamPackagingConfigLocksList</a>

---

##### `segmentTimeInSeconds`<sup>Required</sup> <a name="segmentTimeInSeconds" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.segmentTimeInSeconds"></a>

```typescript
public readonly segmentTimeInSeconds: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `streamPackagingFormat`<sup>Required</sup> <a name="streamPackagingFormat" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.streamPackagingFormat"></a>

```typescript
public readonly streamPackagingFormat: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `streamPackagingConfigIdInput`<sup>Optional</sup> <a name="streamPackagingConfigIdInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.streamPackagingConfigIdInput"></a>

```typescript
public readonly streamPackagingConfigIdInput: string;
```

- *Type:* string

---

##### `streamPackagingConfigId`<sup>Required</sup> <a name="streamPackagingConfigId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.streamPackagingConfigId"></a>

```typescript
public readonly streamPackagingConfigId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMediaServicesStreamPackagingConfigConfig <a name="DataOciMediaServicesStreamPackagingConfigConfig" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigConfig.Initializer"></a>

```typescript
import { dataOciMediaServicesStreamPackagingConfig } from 'rhizo-co-terraform-provider-oci'

const dataOciMediaServicesStreamPackagingConfigConfig: dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigConfig.property.streamPackagingConfigId">streamPackagingConfigId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_config#stream_packaging_config_id DataOciMediaServicesStreamPackagingConfig#stream_packaging_config_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `streamPackagingConfigId`<sup>Required</sup> <a name="streamPackagingConfigId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigConfig.property.streamPackagingConfigId"></a>

```typescript
public readonly streamPackagingConfigId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_config#stream_packaging_config_id DataOciMediaServicesStreamPackagingConfig#stream_packaging_config_id}.

---

### DataOciMediaServicesStreamPackagingConfigEncryption <a name="DataOciMediaServicesStreamPackagingConfigEncryption" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryption"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryption.Initializer"></a>

```typescript
import { dataOciMediaServicesStreamPackagingConfig } from 'rhizo-co-terraform-provider-oci'

const dataOciMediaServicesStreamPackagingConfigEncryption: dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryption = { ... }
```


### DataOciMediaServicesStreamPackagingConfigLocks <a name="DataOciMediaServicesStreamPackagingConfigLocks" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocks.Initializer"></a>

```typescript
import { dataOciMediaServicesStreamPackagingConfig } from 'rhizo-co-terraform-provider-oci'

const dataOciMediaServicesStreamPackagingConfigLocks: dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocks = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMediaServicesStreamPackagingConfigEncryptionList <a name="DataOciMediaServicesStreamPackagingConfigEncryptionList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList.Initializer"></a>

```typescript
import { dataOciMediaServicesStreamPackagingConfig } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList.get"></a>

```typescript
public get(index: number): DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference <a name="DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.Initializer"></a>

```typescript
import { dataOciMediaServicesStreamPackagingConfig } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.property.algorithm">algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryption">DataOciMediaServicesStreamPackagingConfigEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMediaServicesStreamPackagingConfigEncryption;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryption">DataOciMediaServicesStreamPackagingConfigEncryption</a>

---


### DataOciMediaServicesStreamPackagingConfigLocksList <a name="DataOciMediaServicesStreamPackagingConfigLocksList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList.Initializer"></a>

```typescript
import { dataOciMediaServicesStreamPackagingConfig } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList.get"></a>

```typescript
public get(index: number): DataOciMediaServicesStreamPackagingConfigLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMediaServicesStreamPackagingConfigLocksOutputReference <a name="DataOciMediaServicesStreamPackagingConfigLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.Initializer"></a>

```typescript
import { dataOciMediaServicesStreamPackagingConfig } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.property.relatedResourceId">relatedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocks">DataOciMediaServicesStreamPackagingConfigLocks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `relatedResourceId`<sup>Required</sup> <a name="relatedResourceId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.property.relatedResourceId"></a>

```typescript
public readonly relatedResourceId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMediaServicesStreamPackagingConfigLocks;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocks">DataOciMediaServicesStreamPackagingConfigLocks</a>

---



