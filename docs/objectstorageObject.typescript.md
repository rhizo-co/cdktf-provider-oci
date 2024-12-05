# `objectstorageObject` Submodule <a name="`objectstorageObject` Submodule" id="rhizo-co-terraform-provider-oci.objectstorageObject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObjectstorageObject <a name="ObjectstorageObject" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object oci_objectstorage_object}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer"></a>

```typescript
import { objectstorageObject } from 'rhizo-co-terraform-provider-oci'

new objectstorageObject.ObjectstorageObject(scope: Construct, id: string, config: ObjectstorageObjectConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig">ObjectstorageObjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig">ObjectstorageObjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.putSourceUriDetails">putSourceUriDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetCacheControl">resetCacheControl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetContentDisposition">resetContentDisposition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetContentEncoding">resetContentEncoding</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetContentLanguage">resetContentLanguage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetContentMd5">resetContentMd5</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetDeleteAllObjectVersions">resetDeleteAllObjectVersions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetOpcSseKmsKeyId">resetOpcSseKmsKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetSourceUriDetails">resetSourceUriDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetStorageTier">resetStorageTier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSourceUriDetails` <a name="putSourceUriDetails" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.putSourceUriDetails"></a>

```typescript
public putSourceUriDetails(value: ObjectstorageObjectSourceUriDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.putSourceUriDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails">ObjectstorageObjectSourceUriDetails</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.putTimeouts"></a>

```typescript
public putTimeouts(value: ObjectstorageObjectTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts">ObjectstorageObjectTimeouts</a>

---

##### `resetCacheControl` <a name="resetCacheControl" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetCacheControl"></a>

```typescript
public resetCacheControl(): void
```

##### `resetContent` <a name="resetContent" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetContent"></a>

```typescript
public resetContent(): void
```

##### `resetContentDisposition` <a name="resetContentDisposition" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetContentDisposition"></a>

```typescript
public resetContentDisposition(): void
```

##### `resetContentEncoding` <a name="resetContentEncoding" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetContentEncoding"></a>

```typescript
public resetContentEncoding(): void
```

##### `resetContentLanguage` <a name="resetContentLanguage" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetContentLanguage"></a>

```typescript
public resetContentLanguage(): void
```

##### `resetContentMd5` <a name="resetContentMd5" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetContentMd5"></a>

```typescript
public resetContentMd5(): void
```

##### `resetContentType` <a name="resetContentType" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetContentType"></a>

```typescript
public resetContentType(): void
```

##### `resetDeleteAllObjectVersions` <a name="resetDeleteAllObjectVersions" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetDeleteAllObjectVersions"></a>

```typescript
public resetDeleteAllObjectVersions(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMetadata` <a name="resetMetadata" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetOpcSseKmsKeyId` <a name="resetOpcSseKmsKeyId" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetOpcSseKmsKeyId"></a>

```typescript
public resetOpcSseKmsKeyId(): void
```

##### `resetSource` <a name="resetSource" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetSourceUriDetails` <a name="resetSourceUriDetails" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetSourceUriDetails"></a>

```typescript
public resetSourceUriDetails(): void
```

##### `resetStorageTier` <a name="resetStorageTier" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetStorageTier"></a>

```typescript
public resetStorageTier(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ObjectstorageObject resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.isConstruct"></a>

```typescript
import { objectstorageObject } from 'rhizo-co-terraform-provider-oci'

objectstorageObject.ObjectstorageObject.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.isTerraformElement"></a>

```typescript
import { objectstorageObject } from 'rhizo-co-terraform-provider-oci'

objectstorageObject.ObjectstorageObject.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.isTerraformResource"></a>

```typescript
import { objectstorageObject } from 'rhizo-co-terraform-provider-oci'

objectstorageObject.ObjectstorageObject.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.generateConfigForImport"></a>

```typescript
import { objectstorageObject } from 'rhizo-co-terraform-provider-oci'

objectstorageObject.ObjectstorageObject.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ObjectstorageObject resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ObjectstorageObject to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ObjectstorageObject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ObjectstorageObject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentLength">contentLength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.sourceUriDetails">sourceUriDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference">ObjectstorageObjectSourceUriDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference">ObjectstorageObjectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.versionId">versionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.workRequestId">workRequestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.cacheControlInput">cacheControlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentDispositionInput">contentDispositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentEncodingInput">contentEncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentLanguageInput">contentLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentMd5Input">contentMd5Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.deleteAllObjectVersionsInput">deleteAllObjectVersionsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.objectInput">objectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.opcSseKmsKeyIdInput">opcSseKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.sourceUriDetailsInput">sourceUriDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails">ObjectstorageObjectSourceUriDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.storageTierInput">storageTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts">ObjectstorageObjectTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.cacheControl">cacheControl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentDisposition">contentDisposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentEncoding">contentEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentLanguage">contentLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentMd5">contentMd5</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.deleteAllObjectVersions">deleteAllObjectVersions</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.opcSseKmsKeyId">opcSseKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.storageTier">storageTier</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `contentLength`<sup>Required</sup> <a name="contentLength" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentLength"></a>

```typescript
public readonly contentLength: string;
```

- *Type:* string

---

##### `sourceUriDetails`<sup>Required</sup> <a name="sourceUriDetails" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.sourceUriDetails"></a>

```typescript
public readonly sourceUriDetails: ObjectstorageObjectSourceUriDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference">ObjectstorageObjectSourceUriDetailsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.timeouts"></a>

```typescript
public readonly timeouts: ObjectstorageObjectTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference">ObjectstorageObjectTimeoutsOutputReference</a>

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

---

##### `workRequestId`<sup>Required</sup> <a name="workRequestId" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.workRequestId"></a>

```typescript
public readonly workRequestId: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `cacheControlInput`<sup>Optional</sup> <a name="cacheControlInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.cacheControlInput"></a>

```typescript
public readonly cacheControlInput: string;
```

- *Type:* string

---

##### `contentDispositionInput`<sup>Optional</sup> <a name="contentDispositionInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentDispositionInput"></a>

```typescript
public readonly contentDispositionInput: string;
```

- *Type:* string

---

##### `contentEncodingInput`<sup>Optional</sup> <a name="contentEncodingInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentEncodingInput"></a>

```typescript
public readonly contentEncodingInput: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `contentLanguageInput`<sup>Optional</sup> <a name="contentLanguageInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentLanguageInput"></a>

```typescript
public readonly contentLanguageInput: string;
```

- *Type:* string

---

##### `contentMd5Input`<sup>Optional</sup> <a name="contentMd5Input" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentMd5Input"></a>

```typescript
public readonly contentMd5Input: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `deleteAllObjectVersionsInput`<sup>Optional</sup> <a name="deleteAllObjectVersionsInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.deleteAllObjectVersionsInput"></a>

```typescript
public readonly deleteAllObjectVersionsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.objectInput"></a>

```typescript
public readonly objectInput: string;
```

- *Type:* string

---

##### `opcSseKmsKeyIdInput`<sup>Optional</sup> <a name="opcSseKmsKeyIdInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.opcSseKmsKeyIdInput"></a>

```typescript
public readonly opcSseKmsKeyIdInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `sourceUriDetailsInput`<sup>Optional</sup> <a name="sourceUriDetailsInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.sourceUriDetailsInput"></a>

```typescript
public readonly sourceUriDetailsInput: ObjectstorageObjectSourceUriDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails">ObjectstorageObjectSourceUriDetails</a>

---

##### `storageTierInput`<sup>Optional</sup> <a name="storageTierInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.storageTierInput"></a>

```typescript
public readonly storageTierInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ObjectstorageObjectTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts">ObjectstorageObjectTimeouts</a>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `cacheControl`<sup>Required</sup> <a name="cacheControl" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.cacheControl"></a>

```typescript
public readonly cacheControl: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `contentDisposition`<sup>Required</sup> <a name="contentDisposition" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentDisposition"></a>

```typescript
public readonly contentDisposition: string;
```

- *Type:* string

---

##### `contentEncoding`<sup>Required</sup> <a name="contentEncoding" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentEncoding"></a>

```typescript
public readonly contentEncoding: string;
```

- *Type:* string

---

##### `contentLanguage`<sup>Required</sup> <a name="contentLanguage" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentLanguage"></a>

```typescript
public readonly contentLanguage: string;
```

- *Type:* string

---

##### `contentMd5`<sup>Required</sup> <a name="contentMd5" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentMd5"></a>

```typescript
public readonly contentMd5: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `deleteAllObjectVersions`<sup>Required</sup> <a name="deleteAllObjectVersions" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.deleteAllObjectVersions"></a>

```typescript
public readonly deleteAllObjectVersions: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `opcSseKmsKeyId`<sup>Required</sup> <a name="opcSseKmsKeyId" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.opcSseKmsKeyId"></a>

```typescript
public readonly opcSseKmsKeyId: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `storageTier`<sup>Required</sup> <a name="storageTier" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.storageTier"></a>

```typescript
public readonly storageTier: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ObjectstorageObjectConfig <a name="ObjectstorageObjectConfig" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.Initializer"></a>

```typescript
import { objectstorageObject } from 'rhizo-co-terraform-provider-oci'

const objectstorageObjectConfig: objectstorageObject.ObjectstorageObjectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#bucket ObjectstorageObject#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#namespace ObjectstorageObject#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.object">object</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#object ObjectstorageObject#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.cacheControl">cacheControl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#cache_control ObjectstorageObject#cache_control}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content ObjectstorageObject#content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.contentDisposition">contentDisposition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_disposition ObjectstorageObject#content_disposition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.contentEncoding">contentEncoding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_encoding ObjectstorageObject#content_encoding}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.contentLanguage">contentLanguage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_language ObjectstorageObject#content_language}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.contentMd5">contentMd5</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_md5 ObjectstorageObject#content_md5}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.contentType">contentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_type ObjectstorageObject#content_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.deleteAllObjectVersions">deleteAllObjectVersions</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#delete_all_object_versions ObjectstorageObject#delete_all_object_versions}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#id ObjectstorageObject#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#metadata ObjectstorageObject#metadata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.opcSseKmsKeyId">opcSseKmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#opc_sse_kms_key_id ObjectstorageObject#opc_sse_kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#source ObjectstorageObject#source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.sourceUriDetails">sourceUriDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails">ObjectstorageObjectSourceUriDetails</a></code> | source_uri_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.storageTier">storageTier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#storage_tier ObjectstorageObject#storage_tier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts">ObjectstorageObjectTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#bucket ObjectstorageObject#bucket}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#namespace ObjectstorageObject#namespace}.

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#object ObjectstorageObject#object}.

---

##### `cacheControl`<sup>Optional</sup> <a name="cacheControl" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.cacheControl"></a>

```typescript
public readonly cacheControl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#cache_control ObjectstorageObject#cache_control}.

---

##### `content`<sup>Optional</sup> <a name="content" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content ObjectstorageObject#content}.

---

##### `contentDisposition`<sup>Optional</sup> <a name="contentDisposition" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.contentDisposition"></a>

```typescript
public readonly contentDisposition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_disposition ObjectstorageObject#content_disposition}.

---

##### `contentEncoding`<sup>Optional</sup> <a name="contentEncoding" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.contentEncoding"></a>

```typescript
public readonly contentEncoding: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_encoding ObjectstorageObject#content_encoding}.

---

##### `contentLanguage`<sup>Optional</sup> <a name="contentLanguage" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.contentLanguage"></a>

```typescript
public readonly contentLanguage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_language ObjectstorageObject#content_language}.

---

##### `contentMd5`<sup>Optional</sup> <a name="contentMd5" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.contentMd5"></a>

```typescript
public readonly contentMd5: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_md5 ObjectstorageObject#content_md5}.

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_type ObjectstorageObject#content_type}.

---

##### `deleteAllObjectVersions`<sup>Optional</sup> <a name="deleteAllObjectVersions" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.deleteAllObjectVersions"></a>

```typescript
public readonly deleteAllObjectVersions: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#delete_all_object_versions ObjectstorageObject#delete_all_object_versions}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#id ObjectstorageObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#metadata ObjectstorageObject#metadata}.

---

##### `opcSseKmsKeyId`<sup>Optional</sup> <a name="opcSseKmsKeyId" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.opcSseKmsKeyId"></a>

```typescript
public readonly opcSseKmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#opc_sse_kms_key_id ObjectstorageObject#opc_sse_kms_key_id}.

---

##### `source`<sup>Optional</sup> <a name="source" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#source ObjectstorageObject#source}.

---

##### `sourceUriDetails`<sup>Optional</sup> <a name="sourceUriDetails" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.sourceUriDetails"></a>

```typescript
public readonly sourceUriDetails: ObjectstorageObjectSourceUriDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails">ObjectstorageObjectSourceUriDetails</a>

source_uri_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#source_uri_details ObjectstorageObject#source_uri_details}

---

##### `storageTier`<sup>Optional</sup> <a name="storageTier" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.storageTier"></a>

```typescript
public readonly storageTier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#storage_tier ObjectstorageObject#storage_tier}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ObjectstorageObjectTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts">ObjectstorageObjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#timeouts ObjectstorageObject#timeouts}

---

### ObjectstorageObjectSourceUriDetails <a name="ObjectstorageObjectSourceUriDetails" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.Initializer"></a>

```typescript
import { objectstorageObject } from 'rhizo-co-terraform-provider-oci'

const objectstorageObjectSourceUriDetails: objectstorageObject.ObjectstorageObjectSourceUriDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#bucket ObjectstorageObject#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#namespace ObjectstorageObject#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.object">object</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#object ObjectstorageObject#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#region ObjectstorageObject#region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.destinationObjectIfMatchEtag">destinationObjectIfMatchEtag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#destination_object_if_match_etag ObjectstorageObject#destination_object_if_match_etag}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.destinationObjectIfNoneMatchEtag">destinationObjectIfNoneMatchEtag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#destination_object_if_none_match_etag ObjectstorageObject#destination_object_if_none_match_etag}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.sourceObjectIfMatchEtag">sourceObjectIfMatchEtag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#source_object_if_match_etag ObjectstorageObject#source_object_if_match_etag}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.sourceVersionId">sourceVersionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#source_version_id ObjectstorageObject#source_version_id}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#bucket ObjectstorageObject#bucket}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#namespace ObjectstorageObject#namespace}.

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#object ObjectstorageObject#object}.

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#region ObjectstorageObject#region}.

---

##### `destinationObjectIfMatchEtag`<sup>Optional</sup> <a name="destinationObjectIfMatchEtag" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.destinationObjectIfMatchEtag"></a>

```typescript
public readonly destinationObjectIfMatchEtag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#destination_object_if_match_etag ObjectstorageObject#destination_object_if_match_etag}.

---

##### `destinationObjectIfNoneMatchEtag`<sup>Optional</sup> <a name="destinationObjectIfNoneMatchEtag" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.destinationObjectIfNoneMatchEtag"></a>

```typescript
public readonly destinationObjectIfNoneMatchEtag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#destination_object_if_none_match_etag ObjectstorageObject#destination_object_if_none_match_etag}.

---

##### `sourceObjectIfMatchEtag`<sup>Optional</sup> <a name="sourceObjectIfMatchEtag" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.sourceObjectIfMatchEtag"></a>

```typescript
public readonly sourceObjectIfMatchEtag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#source_object_if_match_etag ObjectstorageObject#source_object_if_match_etag}.

---

##### `sourceVersionId`<sup>Optional</sup> <a name="sourceVersionId" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.sourceVersionId"></a>

```typescript
public readonly sourceVersionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#source_version_id ObjectstorageObject#source_version_id}.

---

### ObjectstorageObjectTimeouts <a name="ObjectstorageObjectTimeouts" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts.Initializer"></a>

```typescript
import { objectstorageObject } from 'rhizo-co-terraform-provider-oci'

const objectstorageObjectTimeouts: objectstorageObject.ObjectstorageObjectTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#create ObjectstorageObject#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#delete ObjectstorageObject#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#update ObjectstorageObject#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#create ObjectstorageObject#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#delete ObjectstorageObject#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#update ObjectstorageObject#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ObjectstorageObjectSourceUriDetailsOutputReference <a name="ObjectstorageObjectSourceUriDetailsOutputReference" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.Initializer"></a>

```typescript
import { objectstorageObject } from 'rhizo-co-terraform-provider-oci'

new objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.resetDestinationObjectIfMatchEtag">resetDestinationObjectIfMatchEtag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.resetDestinationObjectIfNoneMatchEtag">resetDestinationObjectIfNoneMatchEtag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.resetSourceObjectIfMatchEtag">resetSourceObjectIfMatchEtag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.resetSourceVersionId">resetSourceVersionId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationObjectIfMatchEtag` <a name="resetDestinationObjectIfMatchEtag" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.resetDestinationObjectIfMatchEtag"></a>

```typescript
public resetDestinationObjectIfMatchEtag(): void
```

##### `resetDestinationObjectIfNoneMatchEtag` <a name="resetDestinationObjectIfNoneMatchEtag" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.resetDestinationObjectIfNoneMatchEtag"></a>

```typescript
public resetDestinationObjectIfNoneMatchEtag(): void
```

##### `resetSourceObjectIfMatchEtag` <a name="resetSourceObjectIfMatchEtag" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.resetSourceObjectIfMatchEtag"></a>

```typescript
public resetSourceObjectIfMatchEtag(): void
```

##### `resetSourceVersionId` <a name="resetSourceVersionId" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.resetSourceVersionId"></a>

```typescript
public resetSourceVersionId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.destinationObjectIfMatchEtagInput">destinationObjectIfMatchEtagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.destinationObjectIfNoneMatchEtagInput">destinationObjectIfNoneMatchEtagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.objectInput">objectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.sourceObjectIfMatchEtagInput">sourceObjectIfMatchEtagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.sourceVersionIdInput">sourceVersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.destinationObjectIfMatchEtag">destinationObjectIfMatchEtag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.destinationObjectIfNoneMatchEtag">destinationObjectIfNoneMatchEtag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.sourceObjectIfMatchEtag">sourceObjectIfMatchEtag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.sourceVersionId">sourceVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails">ObjectstorageObjectSourceUriDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `destinationObjectIfMatchEtagInput`<sup>Optional</sup> <a name="destinationObjectIfMatchEtagInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.destinationObjectIfMatchEtagInput"></a>

```typescript
public readonly destinationObjectIfMatchEtagInput: string;
```

- *Type:* string

---

##### `destinationObjectIfNoneMatchEtagInput`<sup>Optional</sup> <a name="destinationObjectIfNoneMatchEtagInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.destinationObjectIfNoneMatchEtagInput"></a>

```typescript
public readonly destinationObjectIfNoneMatchEtagInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.objectInput"></a>

```typescript
public readonly objectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `sourceObjectIfMatchEtagInput`<sup>Optional</sup> <a name="sourceObjectIfMatchEtagInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.sourceObjectIfMatchEtagInput"></a>

```typescript
public readonly sourceObjectIfMatchEtagInput: string;
```

- *Type:* string

---

##### `sourceVersionIdInput`<sup>Optional</sup> <a name="sourceVersionIdInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.sourceVersionIdInput"></a>

```typescript
public readonly sourceVersionIdInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `destinationObjectIfMatchEtag`<sup>Required</sup> <a name="destinationObjectIfMatchEtag" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.destinationObjectIfMatchEtag"></a>

```typescript
public readonly destinationObjectIfMatchEtag: string;
```

- *Type:* string

---

##### `destinationObjectIfNoneMatchEtag`<sup>Required</sup> <a name="destinationObjectIfNoneMatchEtag" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.destinationObjectIfNoneMatchEtag"></a>

```typescript
public readonly destinationObjectIfNoneMatchEtag: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `sourceObjectIfMatchEtag`<sup>Required</sup> <a name="sourceObjectIfMatchEtag" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.sourceObjectIfMatchEtag"></a>

```typescript
public readonly sourceObjectIfMatchEtag: string;
```

- *Type:* string

---

##### `sourceVersionId`<sup>Required</sup> <a name="sourceVersionId" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.sourceVersionId"></a>

```typescript
public readonly sourceVersionId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ObjectstorageObjectSourceUriDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails">ObjectstorageObjectSourceUriDetails</a>

---


### ObjectstorageObjectTimeoutsOutputReference <a name="ObjectstorageObjectTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.Initializer"></a>

```typescript
import { objectstorageObject } from 'rhizo-co-terraform-provider-oci'

new objectstorageObject.ObjectstorageObjectTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts">ObjectstorageObjectTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObjectstorageObjectTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts">ObjectstorageObjectTimeouts</a>

---



