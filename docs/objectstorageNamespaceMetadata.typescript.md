# `objectstorageNamespaceMetadata` Submodule <a name="`objectstorageNamespaceMetadata` Submodule" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObjectstorageNamespaceMetadata <a name="ObjectstorageNamespaceMetadata" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_namespace_metadata oci_objectstorage_namespace_metadata}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.Initializer"></a>

```typescript
import { objectstorageNamespaceMetadata } from 'rhizo-co-terraform-provider-oci'

new objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata(scope: Construct, id: string, config: ObjectstorageNamespaceMetadataConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig">ObjectstorageNamespaceMetadataConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig">ObjectstorageNamespaceMetadataConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.resetDefaultS3CompartmentId">resetDefaultS3CompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.resetDefaultSwiftCompartmentId">resetDefaultSwiftCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.putTimeouts"></a>

```typescript
public putTimeouts(value: ObjectstorageNamespaceMetadataTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeouts">ObjectstorageNamespaceMetadataTimeouts</a>

---

##### `resetDefaultS3CompartmentId` <a name="resetDefaultS3CompartmentId" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.resetDefaultS3CompartmentId"></a>

```typescript
public resetDefaultS3CompartmentId(): void
```

##### `resetDefaultSwiftCompartmentId` <a name="resetDefaultSwiftCompartmentId" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.resetDefaultSwiftCompartmentId"></a>

```typescript
public resetDefaultSwiftCompartmentId(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ObjectstorageNamespaceMetadata resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.isConstruct"></a>

```typescript
import { objectstorageNamespaceMetadata } from 'rhizo-co-terraform-provider-oci'

objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.isTerraformElement"></a>

```typescript
import { objectstorageNamespaceMetadata } from 'rhizo-co-terraform-provider-oci'

objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.isTerraformResource"></a>

```typescript
import { objectstorageNamespaceMetadata } from 'rhizo-co-terraform-provider-oci'

objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.generateConfigForImport"></a>

```typescript
import { objectstorageNamespaceMetadata } from 'rhizo-co-terraform-provider-oci'

objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ObjectstorageNamespaceMetadata resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ObjectstorageNamespaceMetadata to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ObjectstorageNamespaceMetadata that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_namespace_metadata#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ObjectstorageNamespaceMetadata to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference">ObjectstorageNamespaceMetadataTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.defaultS3CompartmentIdInput">defaultS3CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.defaultSwiftCompartmentIdInput">defaultSwiftCompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeouts">ObjectstorageNamespaceMetadataTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.defaultS3CompartmentId">defaultS3CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.defaultSwiftCompartmentId">defaultSwiftCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.timeouts"></a>

```typescript
public readonly timeouts: ObjectstorageNamespaceMetadataTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference">ObjectstorageNamespaceMetadataTimeoutsOutputReference</a>

---

##### `defaultS3CompartmentIdInput`<sup>Optional</sup> <a name="defaultS3CompartmentIdInput" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.defaultS3CompartmentIdInput"></a>

```typescript
public readonly defaultS3CompartmentIdInput: string;
```

- *Type:* string

---

##### `defaultSwiftCompartmentIdInput`<sup>Optional</sup> <a name="defaultSwiftCompartmentIdInput" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.defaultSwiftCompartmentIdInput"></a>

```typescript
public readonly defaultSwiftCompartmentIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ObjectstorageNamespaceMetadataTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeouts">ObjectstorageNamespaceMetadataTimeouts</a>

---

##### `defaultS3CompartmentId`<sup>Required</sup> <a name="defaultS3CompartmentId" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.defaultS3CompartmentId"></a>

```typescript
public readonly defaultS3CompartmentId: string;
```

- *Type:* string

---

##### `defaultSwiftCompartmentId`<sup>Required</sup> <a name="defaultSwiftCompartmentId" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.defaultSwiftCompartmentId"></a>

```typescript
public readonly defaultSwiftCompartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ObjectstorageNamespaceMetadataConfig <a name="ObjectstorageNamespaceMetadataConfig" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig.Initializer"></a>

```typescript
import { objectstorageNamespaceMetadata } from 'rhizo-co-terraform-provider-oci'

const objectstorageNamespaceMetadataConfig: objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_namespace_metadata#namespace ObjectstorageNamespaceMetadata#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig.property.defaultS3CompartmentId">defaultS3CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_namespace_metadata#default_s3compartment_id ObjectstorageNamespaceMetadata#default_s3compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig.property.defaultSwiftCompartmentId">defaultSwiftCompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_namespace_metadata#default_swift_compartment_id ObjectstorageNamespaceMetadata#default_swift_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_namespace_metadata#id ObjectstorageNamespaceMetadata#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeouts">ObjectstorageNamespaceMetadataTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_namespace_metadata#namespace ObjectstorageNamespaceMetadata#namespace}.

---

##### `defaultS3CompartmentId`<sup>Optional</sup> <a name="defaultS3CompartmentId" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig.property.defaultS3CompartmentId"></a>

```typescript
public readonly defaultS3CompartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_namespace_metadata#default_s3compartment_id ObjectstorageNamespaceMetadata#default_s3compartment_id}.

---

##### `defaultSwiftCompartmentId`<sup>Optional</sup> <a name="defaultSwiftCompartmentId" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig.property.defaultSwiftCompartmentId"></a>

```typescript
public readonly defaultSwiftCompartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_namespace_metadata#default_swift_compartment_id ObjectstorageNamespaceMetadata#default_swift_compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_namespace_metadata#id ObjectstorageNamespaceMetadata#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ObjectstorageNamespaceMetadataTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeouts">ObjectstorageNamespaceMetadataTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_namespace_metadata#timeouts ObjectstorageNamespaceMetadata#timeouts}

---

### ObjectstorageNamespaceMetadataTimeouts <a name="ObjectstorageNamespaceMetadataTimeouts" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeouts.Initializer"></a>

```typescript
import { objectstorageNamespaceMetadata } from 'rhizo-co-terraform-provider-oci'

const objectstorageNamespaceMetadataTimeouts: objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_namespace_metadata#create ObjectstorageNamespaceMetadata#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_namespace_metadata#delete ObjectstorageNamespaceMetadata#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_namespace_metadata#update ObjectstorageNamespaceMetadata#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_namespace_metadata#create ObjectstorageNamespaceMetadata#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_namespace_metadata#delete ObjectstorageNamespaceMetadata#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_namespace_metadata#update ObjectstorageNamespaceMetadata#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ObjectstorageNamespaceMetadataTimeoutsOutputReference <a name="ObjectstorageNamespaceMetadataTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.Initializer"></a>

```typescript
import { objectstorageNamespaceMetadata } from 'rhizo-co-terraform-provider-oci'

new objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeouts">ObjectstorageNamespaceMetadataTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObjectstorageNamespaceMetadataTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeouts">ObjectstorageNamespaceMetadataTimeouts</a>

---



