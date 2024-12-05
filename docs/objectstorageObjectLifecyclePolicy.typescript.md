# `objectstorageObjectLifecyclePolicy` Submodule <a name="`objectstorageObjectLifecyclePolicy` Submodule" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObjectstorageObjectLifecyclePolicy <a name="ObjectstorageObjectLifecyclePolicy" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy oci_objectstorage_object_lifecycle_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer"></a>

```typescript
import { objectstorageObjectLifecyclePolicy } from 'rhizo-co-terraform-provider-oci'

new objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy(scope: Construct, id: string, config: ObjectstorageObjectLifecyclePolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig">ObjectstorageObjectLifecyclePolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig">ObjectstorageObjectLifecyclePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.putRules">putRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.resetRules">resetRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRules` <a name="putRules" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.putRules"></a>

```typescript
public putRules(value: IResolvable | ObjectstorageObjectLifecyclePolicyRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.putRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules">ObjectstorageObjectLifecyclePolicyRules</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: ObjectstorageObjectLifecyclePolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts">ObjectstorageObjectLifecyclePolicyTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRules` <a name="resetRules" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.resetRules"></a>

```typescript
public resetRules(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ObjectstorageObjectLifecyclePolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.isConstruct"></a>

```typescript
import { objectstorageObjectLifecyclePolicy } from 'rhizo-co-terraform-provider-oci'

objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.isTerraformElement"></a>

```typescript
import { objectstorageObjectLifecyclePolicy } from 'rhizo-co-terraform-provider-oci'

objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.isTerraformResource"></a>

```typescript
import { objectstorageObjectLifecyclePolicy } from 'rhizo-co-terraform-provider-oci'

objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.generateConfigForImport"></a>

```typescript
import { objectstorageObjectLifecyclePolicy } from 'rhizo-co-terraform-provider-oci'

objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ObjectstorageObjectLifecyclePolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ObjectstorageObjectLifecyclePolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ObjectstorageObjectLifecyclePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ObjectstorageObjectLifecyclePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList">ObjectstorageObjectLifecyclePolicyRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference">ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.rulesInput">rulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules">ObjectstorageObjectLifecyclePolicyRules</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts">ObjectstorageObjectLifecyclePolicyTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.rules"></a>

```typescript
public readonly rules: ObjectstorageObjectLifecyclePolicyRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList">ObjectstorageObjectLifecyclePolicyRulesList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.timeouts"></a>

```typescript
public readonly timeouts: ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference">ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference</a>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.rulesInput"></a>

```typescript
public readonly rulesInput: IResolvable | ObjectstorageObjectLifecyclePolicyRules[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules">ObjectstorageObjectLifecyclePolicyRules</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ObjectstorageObjectLifecyclePolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts">ObjectstorageObjectLifecyclePolicyTimeouts</a>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ObjectstorageObjectLifecyclePolicyConfig <a name="ObjectstorageObjectLifecyclePolicyConfig" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.Initializer"></a>

```typescript
import { objectstorageObjectLifecyclePolicy } from 'rhizo-co-terraform-provider-oci'

const objectstorageObjectLifecyclePolicyConfig: objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#bucket ObjectstorageObjectLifecyclePolicy#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#namespace ObjectstorageObjectLifecyclePolicy#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#id ObjectstorageObjectLifecyclePolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.rules">rules</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules">ObjectstorageObjectLifecyclePolicyRules</a>[]</code> | rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts">ObjectstorageObjectLifecyclePolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#bucket ObjectstorageObjectLifecyclePolicy#bucket}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#namespace ObjectstorageObjectLifecyclePolicy#namespace}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#id ObjectstorageObjectLifecyclePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.rules"></a>

```typescript
public readonly rules: IResolvable | ObjectstorageObjectLifecyclePolicyRules[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules">ObjectstorageObjectLifecyclePolicyRules</a>[]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#rules ObjectstorageObjectLifecyclePolicy#rules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ObjectstorageObjectLifecyclePolicyTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts">ObjectstorageObjectLifecyclePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#timeouts ObjectstorageObjectLifecyclePolicy#timeouts}

---

### ObjectstorageObjectLifecyclePolicyRules <a name="ObjectstorageObjectLifecyclePolicyRules" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.Initializer"></a>

```typescript
import { objectstorageObjectLifecyclePolicy } from 'rhizo-co-terraform-provider-oci'

const objectstorageObjectLifecyclePolicyRules: objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#action ObjectstorageObjectLifecyclePolicy#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#is_enabled ObjectstorageObjectLifecyclePolicy#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#name ObjectstorageObjectLifecyclePolicy#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.timeAmount">timeAmount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#time_amount ObjectstorageObjectLifecyclePolicy#time_amount}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.timeUnit">timeUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#time_unit ObjectstorageObjectLifecyclePolicy#time_unit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.objectNameFilter">objectNameFilter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter">ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter</a></code> | object_name_filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.target">target</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#target ObjectstorageObjectLifecyclePolicy#target}. |

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#action ObjectstorageObjectLifecyclePolicy#action}.

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#is_enabled ObjectstorageObjectLifecyclePolicy#is_enabled}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#name ObjectstorageObjectLifecyclePolicy#name}.

---

##### `timeAmount`<sup>Required</sup> <a name="timeAmount" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.timeAmount"></a>

```typescript
public readonly timeAmount: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#time_amount ObjectstorageObjectLifecyclePolicy#time_amount}.

---

##### `timeUnit`<sup>Required</sup> <a name="timeUnit" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.timeUnit"></a>

```typescript
public readonly timeUnit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#time_unit ObjectstorageObjectLifecyclePolicy#time_unit}.

---

##### `objectNameFilter`<sup>Optional</sup> <a name="objectNameFilter" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.objectNameFilter"></a>

```typescript
public readonly objectNameFilter: ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter">ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter</a>

object_name_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#object_name_filter ObjectstorageObjectLifecyclePolicy#object_name_filter}

---

##### `target`<sup>Optional</sup> <a name="target" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#target ObjectstorageObjectLifecyclePolicy#target}.

---

### ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter <a name="ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter.Initializer"></a>

```typescript
import { objectstorageObjectLifecyclePolicy } from 'rhizo-co-terraform-provider-oci'

const objectstorageObjectLifecyclePolicyRulesObjectNameFilter: objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter.property.exclusionPatterns">exclusionPatterns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#exclusion_patterns ObjectstorageObjectLifecyclePolicy#exclusion_patterns}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter.property.inclusionPatterns">inclusionPatterns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#inclusion_patterns ObjectstorageObjectLifecyclePolicy#inclusion_patterns}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter.property.inclusionPrefixes">inclusionPrefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#inclusion_prefixes ObjectstorageObjectLifecyclePolicy#inclusion_prefixes}. |

---

##### `exclusionPatterns`<sup>Optional</sup> <a name="exclusionPatterns" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter.property.exclusionPatterns"></a>

```typescript
public readonly exclusionPatterns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#exclusion_patterns ObjectstorageObjectLifecyclePolicy#exclusion_patterns}.

---

##### `inclusionPatterns`<sup>Optional</sup> <a name="inclusionPatterns" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter.property.inclusionPatterns"></a>

```typescript
public readonly inclusionPatterns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#inclusion_patterns ObjectstorageObjectLifecyclePolicy#inclusion_patterns}.

---

##### `inclusionPrefixes`<sup>Optional</sup> <a name="inclusionPrefixes" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter.property.inclusionPrefixes"></a>

```typescript
public readonly inclusionPrefixes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#inclusion_prefixes ObjectstorageObjectLifecyclePolicy#inclusion_prefixes}.

---

### ObjectstorageObjectLifecyclePolicyTimeouts <a name="ObjectstorageObjectLifecyclePolicyTimeouts" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts.Initializer"></a>

```typescript
import { objectstorageObjectLifecyclePolicy } from 'rhizo-co-terraform-provider-oci'

const objectstorageObjectLifecyclePolicyTimeouts: objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#create ObjectstorageObjectLifecyclePolicy#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#delete ObjectstorageObjectLifecyclePolicy#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#update ObjectstorageObjectLifecyclePolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#create ObjectstorageObjectLifecyclePolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#delete ObjectstorageObjectLifecyclePolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#update ObjectstorageObjectLifecyclePolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ObjectstorageObjectLifecyclePolicyRulesList <a name="ObjectstorageObjectLifecyclePolicyRulesList" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.Initializer"></a>

```typescript
import { objectstorageObjectLifecyclePolicy } from 'rhizo-co-terraform-provider-oci'

new objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.get"></a>

```typescript
public get(index: number): ObjectstorageObjectLifecyclePolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules">ObjectstorageObjectLifecyclePolicyRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObjectstorageObjectLifecyclePolicyRules[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules">ObjectstorageObjectLifecyclePolicyRules</a>[]

---


### ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference <a name="ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.Initializer"></a>

```typescript
import { objectstorageObjectLifecyclePolicy } from 'rhizo-co-terraform-provider-oci'

new objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.resetExclusionPatterns">resetExclusionPatterns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.resetInclusionPatterns">resetInclusionPatterns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.resetInclusionPrefixes">resetInclusionPrefixes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExclusionPatterns` <a name="resetExclusionPatterns" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.resetExclusionPatterns"></a>

```typescript
public resetExclusionPatterns(): void
```

##### `resetInclusionPatterns` <a name="resetInclusionPatterns" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.resetInclusionPatterns"></a>

```typescript
public resetInclusionPatterns(): void
```

##### `resetInclusionPrefixes` <a name="resetInclusionPrefixes" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.resetInclusionPrefixes"></a>

```typescript
public resetInclusionPrefixes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.exclusionPatternsInput">exclusionPatternsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.inclusionPatternsInput">inclusionPatternsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.inclusionPrefixesInput">inclusionPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.exclusionPatterns">exclusionPatterns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.inclusionPatterns">inclusionPatterns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.inclusionPrefixes">inclusionPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter">ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exclusionPatternsInput`<sup>Optional</sup> <a name="exclusionPatternsInput" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.exclusionPatternsInput"></a>

```typescript
public readonly exclusionPatternsInput: string[];
```

- *Type:* string[]

---

##### `inclusionPatternsInput`<sup>Optional</sup> <a name="inclusionPatternsInput" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.inclusionPatternsInput"></a>

```typescript
public readonly inclusionPatternsInput: string[];
```

- *Type:* string[]

---

##### `inclusionPrefixesInput`<sup>Optional</sup> <a name="inclusionPrefixesInput" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.inclusionPrefixesInput"></a>

```typescript
public readonly inclusionPrefixesInput: string[];
```

- *Type:* string[]

---

##### `exclusionPatterns`<sup>Required</sup> <a name="exclusionPatterns" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.exclusionPatterns"></a>

```typescript
public readonly exclusionPatterns: string[];
```

- *Type:* string[]

---

##### `inclusionPatterns`<sup>Required</sup> <a name="inclusionPatterns" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.inclusionPatterns"></a>

```typescript
public readonly inclusionPatterns: string[];
```

- *Type:* string[]

---

##### `inclusionPrefixes`<sup>Required</sup> <a name="inclusionPrefixes" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.inclusionPrefixes"></a>

```typescript
public readonly inclusionPrefixes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter">ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter</a>

---


### ObjectstorageObjectLifecyclePolicyRulesOutputReference <a name="ObjectstorageObjectLifecyclePolicyRulesOutputReference" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.Initializer"></a>

```typescript
import { objectstorageObjectLifecyclePolicy } from 'rhizo-co-terraform-provider-oci'

new objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.putObjectNameFilter">putObjectNameFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.resetObjectNameFilter">resetObjectNameFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putObjectNameFilter` <a name="putObjectNameFilter" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.putObjectNameFilter"></a>

```typescript
public putObjectNameFilter(value: ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.putObjectNameFilter.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter">ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter</a>

---

##### `resetObjectNameFilter` <a name="resetObjectNameFilter" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.resetObjectNameFilter"></a>

```typescript
public resetObjectNameFilter(): void
```

##### `resetTarget` <a name="resetTarget" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.resetTarget"></a>

```typescript
public resetTarget(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.objectNameFilter">objectNameFilter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference">ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.objectNameFilterInput">objectNameFilterInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter">ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.timeAmountInput">timeAmountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.timeUnitInput">timeUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.timeAmount">timeAmount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.timeUnit">timeUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules">ObjectstorageObjectLifecyclePolicyRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `objectNameFilter`<sup>Required</sup> <a name="objectNameFilter" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.objectNameFilter"></a>

```typescript
public readonly objectNameFilter: ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference">ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.isEnabledInput"></a>

```typescript
public readonly isEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `objectNameFilterInput`<sup>Optional</sup> <a name="objectNameFilterInput" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.objectNameFilterInput"></a>

```typescript
public readonly objectNameFilterInput: ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter">ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter</a>

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `timeAmountInput`<sup>Optional</sup> <a name="timeAmountInput" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.timeAmountInput"></a>

```typescript
public readonly timeAmountInput: string;
```

- *Type:* string

---

##### `timeUnitInput`<sup>Optional</sup> <a name="timeUnitInput" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.timeUnitInput"></a>

```typescript
public readonly timeUnitInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `timeAmount`<sup>Required</sup> <a name="timeAmount" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.timeAmount"></a>

```typescript
public readonly timeAmount: string;
```

- *Type:* string

---

##### `timeUnit`<sup>Required</sup> <a name="timeUnit" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.timeUnit"></a>

```typescript
public readonly timeUnit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObjectstorageObjectLifecyclePolicyRules;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules">ObjectstorageObjectLifecyclePolicyRules</a>

---


### ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference <a name="ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { objectstorageObjectLifecyclePolicy } from 'rhizo-co-terraform-provider-oci'

new objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts">ObjectstorageObjectLifecyclePolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObjectstorageObjectLifecyclePolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts">ObjectstorageObjectLifecyclePolicyTimeouts</a>

---



