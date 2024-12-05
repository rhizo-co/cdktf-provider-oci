# `cloudGuardSecurityRecipe` Submodule <a name="`cloudGuardSecurityRecipe` Submodule" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudGuardSecurityRecipe <a name="CloudGuardSecurityRecipe" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_security_recipe oci_cloud_guard_security_recipe}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.Initializer"></a>

```typescript
import { cloudGuardSecurityRecipe } from 'rhizo-co-terraform-provider-oci'

new cloudGuardSecurityRecipe.CloudGuardSecurityRecipe(scope: Construct, id: string, config: CloudGuardSecurityRecipeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig">CloudGuardSecurityRecipeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig">CloudGuardSecurityRecipeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.putTimeouts"></a>

```typescript
public putTimeouts(value: CloudGuardSecurityRecipeTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeouts">CloudGuardSecurityRecipeTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudGuardSecurityRecipe resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.isConstruct"></a>

```typescript
import { cloudGuardSecurityRecipe } from 'rhizo-co-terraform-provider-oci'

cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.isTerraformElement"></a>

```typescript
import { cloudGuardSecurityRecipe } from 'rhizo-co-terraform-provider-oci'

cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.isTerraformResource"></a>

```typescript
import { cloudGuardSecurityRecipe } from 'rhizo-co-terraform-provider-oci'

cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.generateConfigForImport"></a>

```typescript
import { cloudGuardSecurityRecipe } from 'rhizo-co-terraform-provider-oci'

cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CloudGuardSecurityRecipe resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudGuardSecurityRecipe to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudGuardSecurityRecipe that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_security_recipe#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudGuardSecurityRecipe to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference">CloudGuardSecurityRecipeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.securityPoliciesInput">securityPoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeouts">CloudGuardSecurityRecipeTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.securityPolicies">securityPolicies</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.timeouts"></a>

```typescript
public readonly timeouts: CloudGuardSecurityRecipeTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference">CloudGuardSecurityRecipeTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `securityPoliciesInput`<sup>Optional</sup> <a name="securityPoliciesInput" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.securityPoliciesInput"></a>

```typescript
public readonly securityPoliciesInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CloudGuardSecurityRecipeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeouts">CloudGuardSecurityRecipeTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `securityPolicies`<sup>Required</sup> <a name="securityPolicies" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.securityPolicies"></a>

```typescript
public readonly securityPolicies: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudGuardSecurityRecipeConfig <a name="CloudGuardSecurityRecipeConfig" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.Initializer"></a>

```typescript
import { cloudGuardSecurityRecipe } from 'rhizo-co-terraform-provider-oci'

const cloudGuardSecurityRecipeConfig: cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_security_recipe#compartment_id CloudGuardSecurityRecipe#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_security_recipe#display_name CloudGuardSecurityRecipe#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.securityPolicies">securityPolicies</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_security_recipe#security_policies CloudGuardSecurityRecipe#security_policies}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_security_recipe#defined_tags CloudGuardSecurityRecipe#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_security_recipe#description CloudGuardSecurityRecipe#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_security_recipe#freeform_tags CloudGuardSecurityRecipe#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_security_recipe#id CloudGuardSecurityRecipe#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeouts">CloudGuardSecurityRecipeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_security_recipe#compartment_id CloudGuardSecurityRecipe#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_security_recipe#display_name CloudGuardSecurityRecipe#display_name}.

---

##### `securityPolicies`<sup>Required</sup> <a name="securityPolicies" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.securityPolicies"></a>

```typescript
public readonly securityPolicies: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_security_recipe#security_policies CloudGuardSecurityRecipe#security_policies}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_security_recipe#defined_tags CloudGuardSecurityRecipe#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_security_recipe#description CloudGuardSecurityRecipe#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_security_recipe#freeform_tags CloudGuardSecurityRecipe#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_security_recipe#id CloudGuardSecurityRecipe#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CloudGuardSecurityRecipeTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeouts">CloudGuardSecurityRecipeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_security_recipe#timeouts CloudGuardSecurityRecipe#timeouts}

---

### CloudGuardSecurityRecipeTimeouts <a name="CloudGuardSecurityRecipeTimeouts" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeouts.Initializer"></a>

```typescript
import { cloudGuardSecurityRecipe } from 'rhizo-co-terraform-provider-oci'

const cloudGuardSecurityRecipeTimeouts: cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_security_recipe#create CloudGuardSecurityRecipe#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_security_recipe#delete CloudGuardSecurityRecipe#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_security_recipe#update CloudGuardSecurityRecipe#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_security_recipe#create CloudGuardSecurityRecipe#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_security_recipe#delete CloudGuardSecurityRecipe#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_security_recipe#update CloudGuardSecurityRecipe#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudGuardSecurityRecipeTimeoutsOutputReference <a name="CloudGuardSecurityRecipeTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.Initializer"></a>

```typescript
import { cloudGuardSecurityRecipe } from 'rhizo-co-terraform-provider-oci'

new cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeouts">CloudGuardSecurityRecipeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudGuardSecurityRecipeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeouts">CloudGuardSecurityRecipeTimeouts</a>

---


