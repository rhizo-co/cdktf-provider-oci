# `kmsGeneratedKey` Submodule <a name="`kmsGeneratedKey` Submodule" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsGeneratedKey <a name="KmsGeneratedKey" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key oci_kms_generated_key}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer"></a>

```typescript
import { kmsGeneratedKey } from 'rhizo-co-terraform-provider-oci'

new kmsGeneratedKey.KmsGeneratedKey(scope: Construct, id: string, config: KmsGeneratedKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig">KmsGeneratedKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig">KmsGeneratedKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.putKeyShape">putKeyShape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.resetAssociatedData">resetAssociatedData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.resetLoggingContext">resetLoggingContext</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putKeyShape` <a name="putKeyShape" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.putKeyShape"></a>

```typescript
public putKeyShape(value: KmsGeneratedKeyKeyShape): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.putKeyShape.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape">KmsGeneratedKeyKeyShape</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.putTimeouts"></a>

```typescript
public putTimeouts(value: KmsGeneratedKeyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts">KmsGeneratedKeyTimeouts</a>

---

##### `resetAssociatedData` <a name="resetAssociatedData" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.resetAssociatedData"></a>

```typescript
public resetAssociatedData(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLoggingContext` <a name="resetLoggingContext" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.resetLoggingContext"></a>

```typescript
public resetLoggingContext(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KmsGeneratedKey resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.isConstruct"></a>

```typescript
import { kmsGeneratedKey } from 'rhizo-co-terraform-provider-oci'

kmsGeneratedKey.KmsGeneratedKey.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.isTerraformElement"></a>

```typescript
import { kmsGeneratedKey } from 'rhizo-co-terraform-provider-oci'

kmsGeneratedKey.KmsGeneratedKey.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.isTerraformResource"></a>

```typescript
import { kmsGeneratedKey } from 'rhizo-co-terraform-provider-oci'

kmsGeneratedKey.KmsGeneratedKey.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.generateConfigForImport"></a>

```typescript
import { kmsGeneratedKey } from 'rhizo-co-terraform-provider-oci'

kmsGeneratedKey.KmsGeneratedKey.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a KmsGeneratedKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KmsGeneratedKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KmsGeneratedKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KmsGeneratedKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.ciphertext">ciphertext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.keyShape">keyShape</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference">KmsGeneratedKeyKeyShapeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.plaintext">plaintext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.plaintextChecksum">plaintextChecksum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference">KmsGeneratedKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.associatedDataInput">associatedDataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.cryptoEndpointInput">cryptoEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.includePlaintextKeyInput">includePlaintextKeyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.keyIdInput">keyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.keyShapeInput">keyShapeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape">KmsGeneratedKeyKeyShape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.loggingContextInput">loggingContextInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts">KmsGeneratedKeyTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.associatedData">associatedData</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.cryptoEndpoint">cryptoEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.includePlaintextKey">includePlaintextKey</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.loggingContext">loggingContext</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ciphertext`<sup>Required</sup> <a name="ciphertext" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.ciphertext"></a>

```typescript
public readonly ciphertext: string;
```

- *Type:* string

---

##### `keyShape`<sup>Required</sup> <a name="keyShape" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.keyShape"></a>

```typescript
public readonly keyShape: KmsGeneratedKeyKeyShapeOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference">KmsGeneratedKeyKeyShapeOutputReference</a>

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.plaintext"></a>

```typescript
public readonly plaintext: string;
```

- *Type:* string

---

##### `plaintextChecksum`<sup>Required</sup> <a name="plaintextChecksum" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.plaintextChecksum"></a>

```typescript
public readonly plaintextChecksum: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.timeouts"></a>

```typescript
public readonly timeouts: KmsGeneratedKeyTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference">KmsGeneratedKeyTimeoutsOutputReference</a>

---

##### `associatedDataInput`<sup>Optional</sup> <a name="associatedDataInput" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.associatedDataInput"></a>

```typescript
public readonly associatedDataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `cryptoEndpointInput`<sup>Optional</sup> <a name="cryptoEndpointInput" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.cryptoEndpointInput"></a>

```typescript
public readonly cryptoEndpointInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `includePlaintextKeyInput`<sup>Optional</sup> <a name="includePlaintextKeyInput" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.includePlaintextKeyInput"></a>

```typescript
public readonly includePlaintextKeyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.keyIdInput"></a>

```typescript
public readonly keyIdInput: string;
```

- *Type:* string

---

##### `keyShapeInput`<sup>Optional</sup> <a name="keyShapeInput" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.keyShapeInput"></a>

```typescript
public readonly keyShapeInput: KmsGeneratedKeyKeyShape;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape">KmsGeneratedKeyKeyShape</a>

---

##### `loggingContextInput`<sup>Optional</sup> <a name="loggingContextInput" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.loggingContextInput"></a>

```typescript
public readonly loggingContextInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | KmsGeneratedKeyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts">KmsGeneratedKeyTimeouts</a>

---

##### `associatedData`<sup>Required</sup> <a name="associatedData" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.associatedData"></a>

```typescript
public readonly associatedData: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `cryptoEndpoint`<sup>Required</sup> <a name="cryptoEndpoint" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.cryptoEndpoint"></a>

```typescript
public readonly cryptoEndpoint: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `includePlaintextKey`<sup>Required</sup> <a name="includePlaintextKey" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.includePlaintextKey"></a>

```typescript
public readonly includePlaintextKey: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `loggingContext`<sup>Required</sup> <a name="loggingContext" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.loggingContext"></a>

```typescript
public readonly loggingContext: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KmsGeneratedKeyConfig <a name="KmsGeneratedKeyConfig" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.Initializer"></a>

```typescript
import { kmsGeneratedKey } from 'rhizo-co-terraform-provider-oci'

const kmsGeneratedKeyConfig: kmsGeneratedKey.KmsGeneratedKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.cryptoEndpoint">cryptoEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#crypto_endpoint KmsGeneratedKey#crypto_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.includePlaintextKey">includePlaintextKey</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#include_plaintext_key KmsGeneratedKey#include_plaintext_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.keyId">keyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#key_id KmsGeneratedKey#key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.keyShape">keyShape</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape">KmsGeneratedKeyKeyShape</a></code> | key_shape block. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.associatedData">associatedData</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#associated_data KmsGeneratedKey#associated_data}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#id KmsGeneratedKey#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.loggingContext">loggingContext</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#logging_context KmsGeneratedKey#logging_context}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts">KmsGeneratedKeyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cryptoEndpoint`<sup>Required</sup> <a name="cryptoEndpoint" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.cryptoEndpoint"></a>

```typescript
public readonly cryptoEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#crypto_endpoint KmsGeneratedKey#crypto_endpoint}.

---

##### `includePlaintextKey`<sup>Required</sup> <a name="includePlaintextKey" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.includePlaintextKey"></a>

```typescript
public readonly includePlaintextKey: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#include_plaintext_key KmsGeneratedKey#include_plaintext_key}.

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#key_id KmsGeneratedKey#key_id}.

---

##### `keyShape`<sup>Required</sup> <a name="keyShape" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.keyShape"></a>

```typescript
public readonly keyShape: KmsGeneratedKeyKeyShape;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape">KmsGeneratedKeyKeyShape</a>

key_shape block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#key_shape KmsGeneratedKey#key_shape}

---

##### `associatedData`<sup>Optional</sup> <a name="associatedData" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.associatedData"></a>

```typescript
public readonly associatedData: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#associated_data KmsGeneratedKey#associated_data}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#id KmsGeneratedKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loggingContext`<sup>Optional</sup> <a name="loggingContext" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.loggingContext"></a>

```typescript
public readonly loggingContext: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#logging_context KmsGeneratedKey#logging_context}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: KmsGeneratedKeyTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts">KmsGeneratedKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#timeouts KmsGeneratedKey#timeouts}

---

### KmsGeneratedKeyKeyShape <a name="KmsGeneratedKeyKeyShape" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape.Initializer"></a>

```typescript
import { kmsGeneratedKey } from 'rhizo-co-terraform-provider-oci'

const kmsGeneratedKeyKeyShape: kmsGeneratedKey.KmsGeneratedKeyKeyShape = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape.property.algorithm">algorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#algorithm KmsGeneratedKey#algorithm}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape.property.length">length</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#length KmsGeneratedKey#length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape.property.curveId">curveId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#curve_id KmsGeneratedKey#curve_id}. |

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#algorithm KmsGeneratedKey#algorithm}.

---

##### `length`<sup>Required</sup> <a name="length" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape.property.length"></a>

```typescript
public readonly length: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#length KmsGeneratedKey#length}.

---

##### `curveId`<sup>Optional</sup> <a name="curveId" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape.property.curveId"></a>

```typescript
public readonly curveId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#curve_id KmsGeneratedKey#curve_id}.

---

### KmsGeneratedKeyTimeouts <a name="KmsGeneratedKeyTimeouts" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts.Initializer"></a>

```typescript
import { kmsGeneratedKey } from 'rhizo-co-terraform-provider-oci'

const kmsGeneratedKeyTimeouts: kmsGeneratedKey.KmsGeneratedKeyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#create KmsGeneratedKey#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#delete KmsGeneratedKey#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#update KmsGeneratedKey#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#create KmsGeneratedKey#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#delete KmsGeneratedKey#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#update KmsGeneratedKey#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KmsGeneratedKeyKeyShapeOutputReference <a name="KmsGeneratedKeyKeyShapeOutputReference" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.Initializer"></a>

```typescript
import { kmsGeneratedKey } from 'rhizo-co-terraform-provider-oci'

new kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.resetCurveId">resetCurveId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCurveId` <a name="resetCurveId" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.resetCurveId"></a>

```typescript
public resetCurveId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.algorithmInput">algorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.curveIdInput">curveIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.lengthInput">lengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.algorithm">algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.curveId">curveId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.length">length</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape">KmsGeneratedKeyKeyShape</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.algorithmInput"></a>

```typescript
public readonly algorithmInput: string;
```

- *Type:* string

---

##### `curveIdInput`<sup>Optional</sup> <a name="curveIdInput" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.curveIdInput"></a>

```typescript
public readonly curveIdInput: string;
```

- *Type:* string

---

##### `lengthInput`<sup>Optional</sup> <a name="lengthInput" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.lengthInput"></a>

```typescript
public readonly lengthInput: number;
```

- *Type:* number

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

---

##### `curveId`<sup>Required</sup> <a name="curveId" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.curveId"></a>

```typescript
public readonly curveId: string;
```

- *Type:* string

---

##### `length`<sup>Required</sup> <a name="length" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.length"></a>

```typescript
public readonly length: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KmsGeneratedKeyKeyShape;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape">KmsGeneratedKeyKeyShape</a>

---


### KmsGeneratedKeyTimeoutsOutputReference <a name="KmsGeneratedKeyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.Initializer"></a>

```typescript
import { kmsGeneratedKey } from 'rhizo-co-terraform-provider-oci'

new kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts">KmsGeneratedKeyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KmsGeneratedKeyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts">KmsGeneratedKeyTimeouts</a>

---



