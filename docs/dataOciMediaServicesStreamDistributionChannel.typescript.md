# `dataOciMediaServicesStreamDistributionChannel` Submodule <a name="`dataOciMediaServicesStreamDistributionChannel` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMediaServicesStreamDistributionChannel <a name="DataOciMediaServicesStreamDistributionChannel" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channel oci_media_services_stream_distribution_channel}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.Initializer"></a>

```typescript
import { dataOciMediaServicesStreamDistributionChannel } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel(scope: Construct, id: string, config: DataOciMediaServicesStreamDistributionChannelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelConfig">DataOciMediaServicesStreamDistributionChannelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelConfig">DataOciMediaServicesStreamDistributionChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMediaServicesStreamDistributionChannel resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.isConstruct"></a>

```typescript
import { dataOciMediaServicesStreamDistributionChannel } from 'rhizo-co-terraform-provider-oci'

dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.isTerraformElement"></a>

```typescript
import { dataOciMediaServicesStreamDistributionChannel } from 'rhizo-co-terraform-provider-oci'

dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.isTerraformDataSource"></a>

```typescript
import { dataOciMediaServicesStreamDistributionChannel } from 'rhizo-co-terraform-provider-oci'

dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.generateConfigForImport"></a>

```typescript
import { dataOciMediaServicesStreamDistributionChannel } from 'rhizo-co-terraform-provider-oci'

dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciMediaServicesStreamDistributionChannel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciMediaServicesStreamDistributionChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciMediaServicesStreamDistributionChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMediaServicesStreamDistributionChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.isLockOverride">isLockOverride</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList">DataOciMediaServicesStreamDistributionChannelLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.streamDistributionChannelIdInput">streamDistributionChannelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.streamDistributionChannelId">streamDistributionChannelId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isLockOverride`<sup>Required</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.isLockOverride"></a>

```typescript
public readonly isLockOverride: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.locks"></a>

```typescript
public readonly locks: DataOciMediaServicesStreamDistributionChannelLocksList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList">DataOciMediaServicesStreamDistributionChannelLocksList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `streamDistributionChannelIdInput`<sup>Optional</sup> <a name="streamDistributionChannelIdInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.streamDistributionChannelIdInput"></a>

```typescript
public readonly streamDistributionChannelIdInput: string;
```

- *Type:* string

---

##### `streamDistributionChannelId`<sup>Required</sup> <a name="streamDistributionChannelId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.streamDistributionChannelId"></a>

```typescript
public readonly streamDistributionChannelId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMediaServicesStreamDistributionChannelConfig <a name="DataOciMediaServicesStreamDistributionChannelConfig" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelConfig.Initializer"></a>

```typescript
import { dataOciMediaServicesStreamDistributionChannel } from 'rhizo-co-terraform-provider-oci'

const dataOciMediaServicesStreamDistributionChannelConfig: dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelConfig.property.streamDistributionChannelId">streamDistributionChannelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channel#stream_distribution_channel_id DataOciMediaServicesStreamDistributionChannel#stream_distribution_channel_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `streamDistributionChannelId`<sup>Required</sup> <a name="streamDistributionChannelId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelConfig.property.streamDistributionChannelId"></a>

```typescript
public readonly streamDistributionChannelId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channel#stream_distribution_channel_id DataOciMediaServicesStreamDistributionChannel#stream_distribution_channel_id}.

---

### DataOciMediaServicesStreamDistributionChannelLocks <a name="DataOciMediaServicesStreamDistributionChannelLocks" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocks.Initializer"></a>

```typescript
import { dataOciMediaServicesStreamDistributionChannel } from 'rhizo-co-terraform-provider-oci'

const dataOciMediaServicesStreamDistributionChannelLocks: dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocks = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMediaServicesStreamDistributionChannelLocksList <a name="DataOciMediaServicesStreamDistributionChannelLocksList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList.Initializer"></a>

```typescript
import { dataOciMediaServicesStreamDistributionChannel } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList.get"></a>

```typescript
public get(index: number): DataOciMediaServicesStreamDistributionChannelLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMediaServicesStreamDistributionChannelLocksOutputReference <a name="DataOciMediaServicesStreamDistributionChannelLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.Initializer"></a>

```typescript
import { dataOciMediaServicesStreamDistributionChannel } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.property.relatedResourceId">relatedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocks">DataOciMediaServicesStreamDistributionChannelLocks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `relatedResourceId`<sup>Required</sup> <a name="relatedResourceId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.property.relatedResourceId"></a>

```typescript
public readonly relatedResourceId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMediaServicesStreamDistributionChannelLocks;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocks">DataOciMediaServicesStreamDistributionChannelLocks</a>

---



