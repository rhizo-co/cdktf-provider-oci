# `dataOciStreamingStreamPool` Submodule <a name="`dataOciStreamingStreamPool` Submodule" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciStreamingStreamPool <a name="DataOciStreamingStreamPool" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/streaming_stream_pool oci_streaming_stream_pool}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.Initializer"></a>

```typescript
import { dataOciStreamingStreamPool } from 'rhizo-co-terraform-provider-oci'

new dataOciStreamingStreamPool.DataOciStreamingStreamPool(scope: Construct, id: string, config: DataOciStreamingStreamPoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolConfig">DataOciStreamingStreamPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolConfig">DataOciStreamingStreamPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciStreamingStreamPool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.isConstruct"></a>

```typescript
import { dataOciStreamingStreamPool } from 'rhizo-co-terraform-provider-oci'

dataOciStreamingStreamPool.DataOciStreamingStreamPool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.isTerraformElement"></a>

```typescript
import { dataOciStreamingStreamPool } from 'rhizo-co-terraform-provider-oci'

dataOciStreamingStreamPool.DataOciStreamingStreamPool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.isTerraformDataSource"></a>

```typescript
import { dataOciStreamingStreamPool } from 'rhizo-co-terraform-provider-oci'

dataOciStreamingStreamPool.DataOciStreamingStreamPool.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.generateConfigForImport"></a>

```typescript
import { dataOciStreamingStreamPool } from 'rhizo-co-terraform-provider-oci'

dataOciStreamingStreamPool.DataOciStreamingStreamPool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciStreamingStreamPool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciStreamingStreamPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciStreamingStreamPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/streaming_stream_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciStreamingStreamPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.customEncryptionKey">customEncryptionKey</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList">DataOciStreamingStreamPoolCustomEncryptionKeyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.endpointFqdn">endpointFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.isPrivate">isPrivate</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.kafkaSettings">kafkaSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList">DataOciStreamingStreamPoolKafkaSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.lifecycleStateDetails">lifecycleStateDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.privateEndpointSettings">privateEndpointSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList">DataOciStreamingStreamPoolPrivateEndpointSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.streamPoolIdInput">streamPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.streamPoolId">streamPoolId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `customEncryptionKey`<sup>Required</sup> <a name="customEncryptionKey" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.customEncryptionKey"></a>

```typescript
public readonly customEncryptionKey: DataOciStreamingStreamPoolCustomEncryptionKeyList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList">DataOciStreamingStreamPoolCustomEncryptionKeyList</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `endpointFqdn`<sup>Required</sup> <a name="endpointFqdn" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.endpointFqdn"></a>

```typescript
public readonly endpointFqdn: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isPrivate`<sup>Required</sup> <a name="isPrivate" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.isPrivate"></a>

```typescript
public readonly isPrivate: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `kafkaSettings`<sup>Required</sup> <a name="kafkaSettings" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.kafkaSettings"></a>

```typescript
public readonly kafkaSettings: DataOciStreamingStreamPoolKafkaSettingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList">DataOciStreamingStreamPoolKafkaSettingsList</a>

---

##### `lifecycleStateDetails`<sup>Required</sup> <a name="lifecycleStateDetails" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.lifecycleStateDetails"></a>

```typescript
public readonly lifecycleStateDetails: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `privateEndpointSettings`<sup>Required</sup> <a name="privateEndpointSettings" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.privateEndpointSettings"></a>

```typescript
public readonly privateEndpointSettings: DataOciStreamingStreamPoolPrivateEndpointSettingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList">DataOciStreamingStreamPoolPrivateEndpointSettingsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `streamPoolIdInput`<sup>Optional</sup> <a name="streamPoolIdInput" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.streamPoolIdInput"></a>

```typescript
public readonly streamPoolIdInput: string;
```

- *Type:* string

---

##### `streamPoolId`<sup>Required</sup> <a name="streamPoolId" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.streamPoolId"></a>

```typescript
public readonly streamPoolId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciStreamingStreamPoolConfig <a name="DataOciStreamingStreamPoolConfig" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolConfig.Initializer"></a>

```typescript
import { dataOciStreamingStreamPool } from 'rhizo-co-terraform-provider-oci'

const dataOciStreamingStreamPoolConfig: dataOciStreamingStreamPool.DataOciStreamingStreamPoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolConfig.property.streamPoolId">streamPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/streaming_stream_pool#stream_pool_id DataOciStreamingStreamPool#stream_pool_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `streamPoolId`<sup>Required</sup> <a name="streamPoolId" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolConfig.property.streamPoolId"></a>

```typescript
public readonly streamPoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/streaming_stream_pool#stream_pool_id DataOciStreamingStreamPool#stream_pool_id}.

---

### DataOciStreamingStreamPoolCustomEncryptionKey <a name="DataOciStreamingStreamPoolCustomEncryptionKey" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKey"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKey.Initializer"></a>

```typescript
import { dataOciStreamingStreamPool } from 'rhizo-co-terraform-provider-oci'

const dataOciStreamingStreamPoolCustomEncryptionKey: dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKey = { ... }
```


### DataOciStreamingStreamPoolKafkaSettings <a name="DataOciStreamingStreamPoolKafkaSettings" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettings.Initializer"></a>

```typescript
import { dataOciStreamingStreamPool } from 'rhizo-co-terraform-provider-oci'

const dataOciStreamingStreamPoolKafkaSettings: dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettings = { ... }
```


### DataOciStreamingStreamPoolPrivateEndpointSettings <a name="DataOciStreamingStreamPoolPrivateEndpointSettings" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettings.Initializer"></a>

```typescript
import { dataOciStreamingStreamPool } from 'rhizo-co-terraform-provider-oci'

const dataOciStreamingStreamPoolPrivateEndpointSettings: dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettings = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciStreamingStreamPoolCustomEncryptionKeyList <a name="DataOciStreamingStreamPoolCustomEncryptionKeyList" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList.Initializer"></a>

```typescript
import { dataOciStreamingStreamPool } from 'rhizo-co-terraform-provider-oci'

new dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList.get"></a>

```typescript
public get(index: number): DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference <a name="DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.Initializer"></a>

```typescript
import { dataOciStreamingStreamPool } from 'rhizo-co-terraform-provider-oci'

new dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.property.keyState">keyState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKey">DataOciStreamingStreamPoolCustomEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyState`<sup>Required</sup> <a name="keyState" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.property.keyState"></a>

```typescript
public readonly keyState: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciStreamingStreamPoolCustomEncryptionKey;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKey">DataOciStreamingStreamPoolCustomEncryptionKey</a>

---


### DataOciStreamingStreamPoolKafkaSettingsList <a name="DataOciStreamingStreamPoolKafkaSettingsList" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList.Initializer"></a>

```typescript
import { dataOciStreamingStreamPool } from 'rhizo-co-terraform-provider-oci'

new dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList.get"></a>

```typescript
public get(index: number): DataOciStreamingStreamPoolKafkaSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciStreamingStreamPoolKafkaSettingsOutputReference <a name="DataOciStreamingStreamPoolKafkaSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.Initializer"></a>

```typescript
import { dataOciStreamingStreamPool } from 'rhizo-co-terraform-provider-oci'

new dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.property.autoCreateTopicsEnable">autoCreateTopicsEnable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.property.bootstrapServers">bootstrapServers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.property.logRetentionHours">logRetentionHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.property.numPartitions">numPartitions</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettings">DataOciStreamingStreamPoolKafkaSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoCreateTopicsEnable`<sup>Required</sup> <a name="autoCreateTopicsEnable" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.property.autoCreateTopicsEnable"></a>

```typescript
public readonly autoCreateTopicsEnable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `bootstrapServers`<sup>Required</sup> <a name="bootstrapServers" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.property.bootstrapServers"></a>

```typescript
public readonly bootstrapServers: string;
```

- *Type:* string

---

##### `logRetentionHours`<sup>Required</sup> <a name="logRetentionHours" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.property.logRetentionHours"></a>

```typescript
public readonly logRetentionHours: number;
```

- *Type:* number

---

##### `numPartitions`<sup>Required</sup> <a name="numPartitions" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.property.numPartitions"></a>

```typescript
public readonly numPartitions: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciStreamingStreamPoolKafkaSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettings">DataOciStreamingStreamPoolKafkaSettings</a>

---


### DataOciStreamingStreamPoolPrivateEndpointSettingsList <a name="DataOciStreamingStreamPoolPrivateEndpointSettingsList" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList.Initializer"></a>

```typescript
import { dataOciStreamingStreamPool } from 'rhizo-co-terraform-provider-oci'

new dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList.get"></a>

```typescript
public get(index: number): DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference <a name="DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.Initializer"></a>

```typescript
import { dataOciStreamingStreamPool } from 'rhizo-co-terraform-provider-oci'

new dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.property.privateEndpointIp">privateEndpointIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettings">DataOciStreamingStreamPoolPrivateEndpointSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

---

##### `privateEndpointIp`<sup>Required</sup> <a name="privateEndpointIp" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.property.privateEndpointIp"></a>

```typescript
public readonly privateEndpointIp: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciStreamingStreamPoolPrivateEndpointSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettings">DataOciStreamingStreamPoolPrivateEndpointSettings</a>

---



