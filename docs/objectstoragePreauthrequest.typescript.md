# `objectstoragePreauthrequest` Submodule <a name="`objectstoragePreauthrequest` Submodule" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObjectstoragePreauthrequest <a name="ObjectstoragePreauthrequest" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_preauthrequest oci_objectstorage_preauthrequest}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.Initializer"></a>

```typescript
import { objectstoragePreauthrequest } from 'rhizo-co-terraform-provider-oci'

new objectstoragePreauthrequest.ObjectstoragePreauthrequest(scope: Construct, id: string, config: ObjectstoragePreauthrequestConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig">ObjectstoragePreauthrequestConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig">ObjectstoragePreauthrequestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.resetBucketListingAction">resetBucketListingAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.resetObject">resetObject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.resetObjectName">resetObjectName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.putTimeouts"></a>

```typescript
public putTimeouts(value: ObjectstoragePreauthrequestTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeouts">ObjectstoragePreauthrequestTimeouts</a>

---

##### `resetBucketListingAction` <a name="resetBucketListingAction" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.resetBucketListingAction"></a>

```typescript
public resetBucketListingAction(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.resetId"></a>

```typescript
public resetId(): void
```

##### `resetObject` <a name="resetObject" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.resetObject"></a>

```typescript
public resetObject(): void
```

##### `resetObjectName` <a name="resetObjectName" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.resetObjectName"></a>

```typescript
public resetObjectName(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ObjectstoragePreauthrequest resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.isConstruct"></a>

```typescript
import { objectstoragePreauthrequest } from 'rhizo-co-terraform-provider-oci'

objectstoragePreauthrequest.ObjectstoragePreauthrequest.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.isTerraformElement"></a>

```typescript
import { objectstoragePreauthrequest } from 'rhizo-co-terraform-provider-oci'

objectstoragePreauthrequest.ObjectstoragePreauthrequest.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.isTerraformResource"></a>

```typescript
import { objectstoragePreauthrequest } from 'rhizo-co-terraform-provider-oci'

objectstoragePreauthrequest.ObjectstoragePreauthrequest.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.generateConfigForImport"></a>

```typescript
import { objectstoragePreauthrequest } from 'rhizo-co-terraform-provider-oci'

objectstoragePreauthrequest.ObjectstoragePreauthrequest.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ObjectstoragePreauthrequest resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ObjectstoragePreauthrequest to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ObjectstoragePreauthrequest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_preauthrequest#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ObjectstoragePreauthrequest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.accessUri">accessUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.fullPath">fullPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.parId">parId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference">ObjectstoragePreauthrequestTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.accessTypeInput">accessTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.bucketListingActionInput">bucketListingActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.objectInput">objectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.objectNameInput">objectNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.timeExpiresInput">timeExpiresInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeouts">ObjectstoragePreauthrequestTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.accessType">accessType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.bucketListingAction">bucketListingAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.objectName">objectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.timeExpires">timeExpires</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessUri`<sup>Required</sup> <a name="accessUri" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.accessUri"></a>

```typescript
public readonly accessUri: string;
```

- *Type:* string

---

##### `fullPath`<sup>Required</sup> <a name="fullPath" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.fullPath"></a>

```typescript
public readonly fullPath: string;
```

- *Type:* string

---

##### `parId`<sup>Required</sup> <a name="parId" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.parId"></a>

```typescript
public readonly parId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.timeouts"></a>

```typescript
public readonly timeouts: ObjectstoragePreauthrequestTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference">ObjectstoragePreauthrequestTimeoutsOutputReference</a>

---

##### `accessTypeInput`<sup>Optional</sup> <a name="accessTypeInput" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.accessTypeInput"></a>

```typescript
public readonly accessTypeInput: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `bucketListingActionInput`<sup>Optional</sup> <a name="bucketListingActionInput" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.bucketListingActionInput"></a>

```typescript
public readonly bucketListingActionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.objectInput"></a>

```typescript
public readonly objectInput: string;
```

- *Type:* string

---

##### `objectNameInput`<sup>Optional</sup> <a name="objectNameInput" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.objectNameInput"></a>

```typescript
public readonly objectNameInput: string;
```

- *Type:* string

---

##### `timeExpiresInput`<sup>Optional</sup> <a name="timeExpiresInput" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.timeExpiresInput"></a>

```typescript
public readonly timeExpiresInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ObjectstoragePreauthrequestTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeouts">ObjectstoragePreauthrequestTimeouts</a>

---

##### `accessType`<sup>Required</sup> <a name="accessType" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.accessType"></a>

```typescript
public readonly accessType: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `bucketListingAction`<sup>Required</sup> <a name="bucketListingAction" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.bucketListingAction"></a>

```typescript
public readonly bucketListingAction: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `objectName`<sup>Required</sup> <a name="objectName" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.objectName"></a>

```typescript
public readonly objectName: string;
```

- *Type:* string

---

##### `timeExpires`<sup>Required</sup> <a name="timeExpires" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.timeExpires"></a>

```typescript
public readonly timeExpires: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequest.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ObjectstoragePreauthrequestConfig <a name="ObjectstoragePreauthrequestConfig" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.Initializer"></a>

```typescript
import { objectstoragePreauthrequest } from 'rhizo-co-terraform-provider-oci'

const objectstoragePreauthrequestConfig: objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.accessType">accessType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_preauthrequest#access_type ObjectstoragePreauthrequest#access_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_preauthrequest#bucket ObjectstoragePreauthrequest#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_preauthrequest#name ObjectstoragePreauthrequest#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_preauthrequest#namespace ObjectstoragePreauthrequest#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.timeExpires">timeExpires</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_preauthrequest#time_expires ObjectstoragePreauthrequest#time_expires}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.bucketListingAction">bucketListingAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_preauthrequest#bucket_listing_action ObjectstoragePreauthrequest#bucket_listing_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_preauthrequest#id ObjectstoragePreauthrequest#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.object">object</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_preauthrequest#object ObjectstoragePreauthrequest#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.objectName">objectName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_preauthrequest#object_name ObjectstoragePreauthrequest#object_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeouts">ObjectstoragePreauthrequestTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessType`<sup>Required</sup> <a name="accessType" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.accessType"></a>

```typescript
public readonly accessType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_preauthrequest#access_type ObjectstoragePreauthrequest#access_type}.

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_preauthrequest#bucket ObjectstoragePreauthrequest#bucket}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_preauthrequest#name ObjectstoragePreauthrequest#name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_preauthrequest#namespace ObjectstoragePreauthrequest#namespace}.

---

##### `timeExpires`<sup>Required</sup> <a name="timeExpires" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.timeExpires"></a>

```typescript
public readonly timeExpires: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_preauthrequest#time_expires ObjectstoragePreauthrequest#time_expires}.

---

##### `bucketListingAction`<sup>Optional</sup> <a name="bucketListingAction" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.bucketListingAction"></a>

```typescript
public readonly bucketListingAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_preauthrequest#bucket_listing_action ObjectstoragePreauthrequest#bucket_listing_action}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_preauthrequest#id ObjectstoragePreauthrequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `object`<sup>Optional</sup> <a name="object" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_preauthrequest#object ObjectstoragePreauthrequest#object}.

---

##### `objectName`<sup>Optional</sup> <a name="objectName" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.objectName"></a>

```typescript
public readonly objectName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_preauthrequest#object_name ObjectstoragePreauthrequest#object_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ObjectstoragePreauthrequestTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeouts">ObjectstoragePreauthrequestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_preauthrequest#timeouts ObjectstoragePreauthrequest#timeouts}

---

### ObjectstoragePreauthrequestTimeouts <a name="ObjectstoragePreauthrequestTimeouts" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeouts.Initializer"></a>

```typescript
import { objectstoragePreauthrequest } from 'rhizo-co-terraform-provider-oci'

const objectstoragePreauthrequestTimeouts: objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_preauthrequest#create ObjectstoragePreauthrequest#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_preauthrequest#delete ObjectstoragePreauthrequest#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_preauthrequest#update ObjectstoragePreauthrequest#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_preauthrequest#create ObjectstoragePreauthrequest#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_preauthrequest#delete ObjectstoragePreauthrequest#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_preauthrequest#update ObjectstoragePreauthrequest#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ObjectstoragePreauthrequestTimeoutsOutputReference <a name="ObjectstoragePreauthrequestTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.Initializer"></a>

```typescript
import { objectstoragePreauthrequest } from 'rhizo-co-terraform-provider-oci'

new objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeouts">ObjectstoragePreauthrequestTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObjectstoragePreauthrequestTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.objectstoragePreauthrequest.ObjectstoragePreauthrequestTimeouts">ObjectstoragePreauthrequestTimeouts</a>

---



