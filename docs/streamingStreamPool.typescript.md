# `streamingStreamPool` Submodule <a name="`streamingStreamPool` Submodule" id="rhizo-co-terraform-provider-oci.streamingStreamPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamingStreamPool <a name="StreamingStreamPool" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool oci_streaming_stream_pool}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer"></a>

```typescript
import { streamingStreamPool } from 'rhizo-co-terraform-provider-oci'

new streamingStreamPool.StreamingStreamPool(scope: Construct, id: string, config: StreamingStreamPoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig">StreamingStreamPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig">StreamingStreamPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.putCustomEncryptionKey">putCustomEncryptionKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.putKafkaSettings">putKafkaSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.putPrivateEndpointSettings">putPrivateEndpointSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.resetCustomEncryptionKey">resetCustomEncryptionKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.resetKafkaSettings">resetKafkaSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.resetPrivateEndpointSettings">resetPrivateEndpointSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomEncryptionKey` <a name="putCustomEncryptionKey" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.putCustomEncryptionKey"></a>

```typescript
public putCustomEncryptionKey(value: StreamingStreamPoolCustomEncryptionKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.putCustomEncryptionKey.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKey">StreamingStreamPoolCustomEncryptionKey</a>

---

##### `putKafkaSettings` <a name="putKafkaSettings" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.putKafkaSettings"></a>

```typescript
public putKafkaSettings(value: StreamingStreamPoolKafkaSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.putKafkaSettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettings">StreamingStreamPoolKafkaSettings</a>

---

##### `putPrivateEndpointSettings` <a name="putPrivateEndpointSettings" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.putPrivateEndpointSettings"></a>

```typescript
public putPrivateEndpointSettings(value: StreamingStreamPoolPrivateEndpointSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.putPrivateEndpointSettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettings">StreamingStreamPoolPrivateEndpointSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.putTimeouts"></a>

```typescript
public putTimeouts(value: StreamingStreamPoolTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeouts">StreamingStreamPoolTimeouts</a>

---

##### `resetCustomEncryptionKey` <a name="resetCustomEncryptionKey" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.resetCustomEncryptionKey"></a>

```typescript
public resetCustomEncryptionKey(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKafkaSettings` <a name="resetKafkaSettings" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.resetKafkaSettings"></a>

```typescript
public resetKafkaSettings(): void
```

##### `resetPrivateEndpointSettings` <a name="resetPrivateEndpointSettings" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.resetPrivateEndpointSettings"></a>

```typescript
public resetPrivateEndpointSettings(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StreamingStreamPool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.isConstruct"></a>

```typescript
import { streamingStreamPool } from 'rhizo-co-terraform-provider-oci'

streamingStreamPool.StreamingStreamPool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.isTerraformElement"></a>

```typescript
import { streamingStreamPool } from 'rhizo-co-terraform-provider-oci'

streamingStreamPool.StreamingStreamPool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.isTerraformResource"></a>

```typescript
import { streamingStreamPool } from 'rhizo-co-terraform-provider-oci'

streamingStreamPool.StreamingStreamPool.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.generateConfigForImport"></a>

```typescript
import { streamingStreamPool } from 'rhizo-co-terraform-provider-oci'

streamingStreamPool.StreamingStreamPool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a StreamingStreamPool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StreamingStreamPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StreamingStreamPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StreamingStreamPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.customEncryptionKey">customEncryptionKey</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference">StreamingStreamPoolCustomEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.endpointFqdn">endpointFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.isPrivate">isPrivate</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.kafkaSettings">kafkaSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference">StreamingStreamPoolKafkaSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.lifecycleStateDetails">lifecycleStateDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.privateEndpointSettings">privateEndpointSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference">StreamingStreamPoolPrivateEndpointSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference">StreamingStreamPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.customEncryptionKeyInput">customEncryptionKeyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKey">StreamingStreamPoolCustomEncryptionKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.kafkaSettingsInput">kafkaSettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettings">StreamingStreamPoolKafkaSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.privateEndpointSettingsInput">privateEndpointSettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettings">StreamingStreamPoolPrivateEndpointSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeouts">StreamingStreamPoolTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `customEncryptionKey`<sup>Required</sup> <a name="customEncryptionKey" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.customEncryptionKey"></a>

```typescript
public readonly customEncryptionKey: StreamingStreamPoolCustomEncryptionKeyOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference">StreamingStreamPoolCustomEncryptionKeyOutputReference</a>

---

##### `endpointFqdn`<sup>Required</sup> <a name="endpointFqdn" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.endpointFqdn"></a>

```typescript
public readonly endpointFqdn: string;
```

- *Type:* string

---

##### `isPrivate`<sup>Required</sup> <a name="isPrivate" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.isPrivate"></a>

```typescript
public readonly isPrivate: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `kafkaSettings`<sup>Required</sup> <a name="kafkaSettings" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.kafkaSettings"></a>

```typescript
public readonly kafkaSettings: StreamingStreamPoolKafkaSettingsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference">StreamingStreamPoolKafkaSettingsOutputReference</a>

---

##### `lifecycleStateDetails`<sup>Required</sup> <a name="lifecycleStateDetails" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.lifecycleStateDetails"></a>

```typescript
public readonly lifecycleStateDetails: string;
```

- *Type:* string

---

##### `privateEndpointSettings`<sup>Required</sup> <a name="privateEndpointSettings" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.privateEndpointSettings"></a>

```typescript
public readonly privateEndpointSettings: StreamingStreamPoolPrivateEndpointSettingsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference">StreamingStreamPoolPrivateEndpointSettingsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.timeouts"></a>

```typescript
public readonly timeouts: StreamingStreamPoolTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference">StreamingStreamPoolTimeoutsOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `customEncryptionKeyInput`<sup>Optional</sup> <a name="customEncryptionKeyInput" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.customEncryptionKeyInput"></a>

```typescript
public readonly customEncryptionKeyInput: StreamingStreamPoolCustomEncryptionKey;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKey">StreamingStreamPoolCustomEncryptionKey</a>

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kafkaSettingsInput`<sup>Optional</sup> <a name="kafkaSettingsInput" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.kafkaSettingsInput"></a>

```typescript
public readonly kafkaSettingsInput: StreamingStreamPoolKafkaSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettings">StreamingStreamPoolKafkaSettings</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `privateEndpointSettingsInput`<sup>Optional</sup> <a name="privateEndpointSettingsInput" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.privateEndpointSettingsInput"></a>

```typescript
public readonly privateEndpointSettingsInput: StreamingStreamPoolPrivateEndpointSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettings">StreamingStreamPoolPrivateEndpointSettings</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | StreamingStreamPoolTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeouts">StreamingStreamPoolTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StreamingStreamPoolConfig <a name="StreamingStreamPoolConfig" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.Initializer"></a>

```typescript
import { streamingStreamPool } from 'rhizo-co-terraform-provider-oci'

const streamingStreamPoolConfig: streamingStreamPool.StreamingStreamPoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#compartment_id StreamingStreamPool#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#name StreamingStreamPool#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.customEncryptionKey">customEncryptionKey</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKey">StreamingStreamPoolCustomEncryptionKey</a></code> | custom_encryption_key block. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#defined_tags StreamingStreamPool#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#freeform_tags StreamingStreamPool#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#id StreamingStreamPool#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.kafkaSettings">kafkaSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettings">StreamingStreamPoolKafkaSettings</a></code> | kafka_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.privateEndpointSettings">privateEndpointSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettings">StreamingStreamPoolPrivateEndpointSettings</a></code> | private_endpoint_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeouts">StreamingStreamPoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#compartment_id StreamingStreamPool#compartment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#name StreamingStreamPool#name}.

---

##### `customEncryptionKey`<sup>Optional</sup> <a name="customEncryptionKey" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.customEncryptionKey"></a>

```typescript
public readonly customEncryptionKey: StreamingStreamPoolCustomEncryptionKey;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKey">StreamingStreamPoolCustomEncryptionKey</a>

custom_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#custom_encryption_key StreamingStreamPool#custom_encryption_key}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#defined_tags StreamingStreamPool#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#freeform_tags StreamingStreamPool#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#id StreamingStreamPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kafkaSettings`<sup>Optional</sup> <a name="kafkaSettings" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.kafkaSettings"></a>

```typescript
public readonly kafkaSettings: StreamingStreamPoolKafkaSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettings">StreamingStreamPoolKafkaSettings</a>

kafka_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#kafka_settings StreamingStreamPool#kafka_settings}

---

##### `privateEndpointSettings`<sup>Optional</sup> <a name="privateEndpointSettings" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.privateEndpointSettings"></a>

```typescript
public readonly privateEndpointSettings: StreamingStreamPoolPrivateEndpointSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettings">StreamingStreamPoolPrivateEndpointSettings</a>

private_endpoint_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#private_endpoint_settings StreamingStreamPool#private_endpoint_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.timeouts"></a>

```typescript
public readonly timeouts: StreamingStreamPoolTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeouts">StreamingStreamPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#timeouts StreamingStreamPool#timeouts}

---

### StreamingStreamPoolCustomEncryptionKey <a name="StreamingStreamPoolCustomEncryptionKey" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKey"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKey.Initializer"></a>

```typescript
import { streamingStreamPool } from 'rhizo-co-terraform-provider-oci'

const streamingStreamPoolCustomEncryptionKey: streamingStreamPool.StreamingStreamPoolCustomEncryptionKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKey.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#kms_key_id StreamingStreamPool#kms_key_id}. |

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKey.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#kms_key_id StreamingStreamPool#kms_key_id}.

---

### StreamingStreamPoolKafkaSettings <a name="StreamingStreamPoolKafkaSettings" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettings.Initializer"></a>

```typescript
import { streamingStreamPool } from 'rhizo-co-terraform-provider-oci'

const streamingStreamPoolKafkaSettings: streamingStreamPool.StreamingStreamPoolKafkaSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettings.property.autoCreateTopicsEnable">autoCreateTopicsEnable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#auto_create_topics_enable StreamingStreamPool#auto_create_topics_enable}. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettings.property.logRetentionHours">logRetentionHours</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#log_retention_hours StreamingStreamPool#log_retention_hours}. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettings.property.numPartitions">numPartitions</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#num_partitions StreamingStreamPool#num_partitions}. |

---

##### `autoCreateTopicsEnable`<sup>Optional</sup> <a name="autoCreateTopicsEnable" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettings.property.autoCreateTopicsEnable"></a>

```typescript
public readonly autoCreateTopicsEnable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#auto_create_topics_enable StreamingStreamPool#auto_create_topics_enable}.

---

##### `logRetentionHours`<sup>Optional</sup> <a name="logRetentionHours" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettings.property.logRetentionHours"></a>

```typescript
public readonly logRetentionHours: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#log_retention_hours StreamingStreamPool#log_retention_hours}.

---

##### `numPartitions`<sup>Optional</sup> <a name="numPartitions" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettings.property.numPartitions"></a>

```typescript
public readonly numPartitions: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#num_partitions StreamingStreamPool#num_partitions}.

---

### StreamingStreamPoolPrivateEndpointSettings <a name="StreamingStreamPoolPrivateEndpointSettings" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettings.Initializer"></a>

```typescript
import { streamingStreamPool } from 'rhizo-co-terraform-provider-oci'

const streamingStreamPoolPrivateEndpointSettings: streamingStreamPool.StreamingStreamPoolPrivateEndpointSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettings.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#nsg_ids StreamingStreamPool#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettings.property.privateEndpointIp">privateEndpointIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#private_endpoint_ip StreamingStreamPool#private_endpoint_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettings.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#subnet_id StreamingStreamPool#subnet_id}. |

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettings.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#nsg_ids StreamingStreamPool#nsg_ids}.

---

##### `privateEndpointIp`<sup>Optional</sup> <a name="privateEndpointIp" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettings.property.privateEndpointIp"></a>

```typescript
public readonly privateEndpointIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#private_endpoint_ip StreamingStreamPool#private_endpoint_ip}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettings.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#subnet_id StreamingStreamPool#subnet_id}.

---

### StreamingStreamPoolTimeouts <a name="StreamingStreamPoolTimeouts" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeouts.Initializer"></a>

```typescript
import { streamingStreamPool } from 'rhizo-co-terraform-provider-oci'

const streamingStreamPoolTimeouts: streamingStreamPool.StreamingStreamPoolTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#create StreamingStreamPool#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#delete StreamingStreamPool#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#update StreamingStreamPool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#create StreamingStreamPool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#delete StreamingStreamPool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#update StreamingStreamPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamingStreamPoolCustomEncryptionKeyOutputReference <a name="StreamingStreamPoolCustomEncryptionKeyOutputReference" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.Initializer"></a>

```typescript
import { streamingStreamPool } from 'rhizo-co-terraform-provider-oci'

new streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.property.keyState">keyState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKey">StreamingStreamPoolCustomEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyState`<sup>Required</sup> <a name="keyState" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.property.keyState"></a>

```typescript
public readonly keyState: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StreamingStreamPoolCustomEncryptionKey;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKey">StreamingStreamPoolCustomEncryptionKey</a>

---


### StreamingStreamPoolKafkaSettingsOutputReference <a name="StreamingStreamPoolKafkaSettingsOutputReference" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.Initializer"></a>

```typescript
import { streamingStreamPool } from 'rhizo-co-terraform-provider-oci'

new streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.resetAutoCreateTopicsEnable">resetAutoCreateTopicsEnable</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.resetLogRetentionHours">resetLogRetentionHours</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.resetNumPartitions">resetNumPartitions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoCreateTopicsEnable` <a name="resetAutoCreateTopicsEnable" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.resetAutoCreateTopicsEnable"></a>

```typescript
public resetAutoCreateTopicsEnable(): void
```

##### `resetLogRetentionHours` <a name="resetLogRetentionHours" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.resetLogRetentionHours"></a>

```typescript
public resetLogRetentionHours(): void
```

##### `resetNumPartitions` <a name="resetNumPartitions" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.resetNumPartitions"></a>

```typescript
public resetNumPartitions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.bootstrapServers">bootstrapServers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.autoCreateTopicsEnableInput">autoCreateTopicsEnableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.logRetentionHoursInput">logRetentionHoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.numPartitionsInput">numPartitionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.autoCreateTopicsEnable">autoCreateTopicsEnable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.logRetentionHours">logRetentionHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.numPartitions">numPartitions</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettings">StreamingStreamPoolKafkaSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bootstrapServers`<sup>Required</sup> <a name="bootstrapServers" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.bootstrapServers"></a>

```typescript
public readonly bootstrapServers: string;
```

- *Type:* string

---

##### `autoCreateTopicsEnableInput`<sup>Optional</sup> <a name="autoCreateTopicsEnableInput" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.autoCreateTopicsEnableInput"></a>

```typescript
public readonly autoCreateTopicsEnableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logRetentionHoursInput`<sup>Optional</sup> <a name="logRetentionHoursInput" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.logRetentionHoursInput"></a>

```typescript
public readonly logRetentionHoursInput: number;
```

- *Type:* number

---

##### `numPartitionsInput`<sup>Optional</sup> <a name="numPartitionsInput" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.numPartitionsInput"></a>

```typescript
public readonly numPartitionsInput: number;
```

- *Type:* number

---

##### `autoCreateTopicsEnable`<sup>Required</sup> <a name="autoCreateTopicsEnable" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.autoCreateTopicsEnable"></a>

```typescript
public readonly autoCreateTopicsEnable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logRetentionHours`<sup>Required</sup> <a name="logRetentionHours" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.logRetentionHours"></a>

```typescript
public readonly logRetentionHours: number;
```

- *Type:* number

---

##### `numPartitions`<sup>Required</sup> <a name="numPartitions" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.numPartitions"></a>

```typescript
public readonly numPartitions: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StreamingStreamPoolKafkaSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettings">StreamingStreamPoolKafkaSettings</a>

---


### StreamingStreamPoolPrivateEndpointSettingsOutputReference <a name="StreamingStreamPoolPrivateEndpointSettingsOutputReference" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.Initializer"></a>

```typescript
import { streamingStreamPool } from 'rhizo-co-terraform-provider-oci'

new streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.resetNsgIds">resetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.resetPrivateEndpointIp">resetPrivateEndpointIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNsgIds` <a name="resetNsgIds" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.resetNsgIds"></a>

```typescript
public resetNsgIds(): void
```

##### `resetPrivateEndpointIp` <a name="resetPrivateEndpointIp" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.resetPrivateEndpointIp"></a>

```typescript
public resetPrivateEndpointIp(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.property.nsgIdsInput">nsgIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.property.privateEndpointIpInput">privateEndpointIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.property.privateEndpointIp">privateEndpointIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettings">StreamingStreamPoolPrivateEndpointSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nsgIdsInput`<sup>Optional</sup> <a name="nsgIdsInput" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.property.nsgIdsInput"></a>

```typescript
public readonly nsgIdsInput: string[];
```

- *Type:* string[]

---

##### `privateEndpointIpInput`<sup>Optional</sup> <a name="privateEndpointIpInput" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.property.privateEndpointIpInput"></a>

```typescript
public readonly privateEndpointIpInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

---

##### `privateEndpointIp`<sup>Required</sup> <a name="privateEndpointIp" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.property.privateEndpointIp"></a>

```typescript
public readonly privateEndpointIp: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StreamingStreamPoolPrivateEndpointSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettings">StreamingStreamPoolPrivateEndpointSettings</a>

---


### StreamingStreamPoolTimeoutsOutputReference <a name="StreamingStreamPoolTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.Initializer"></a>

```typescript
import { streamingStreamPool } from 'rhizo-co-terraform-provider-oci'

new streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeouts">StreamingStreamPoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StreamingStreamPoolTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeouts">StreamingStreamPoolTimeouts</a>

---



