# `devopsRepositoryProtectedBranchManagement` Submodule <a name="`devopsRepositoryProtectedBranchManagement` Submodule" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsRepositoryProtectedBranchManagement <a name="DevopsRepositoryProtectedBranchManagement" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management oci_devops_repository_protected_branch_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.Initializer"></a>

```typescript
import { devopsRepositoryProtectedBranchManagement } from 'rhizo-co-terraform-provider-oci'

new devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement(scope: Construct, id: string, config: DevopsRepositoryProtectedBranchManagementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig">DevopsRepositoryProtectedBranchManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig">DevopsRepositoryProtectedBranchManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.resetProtectionLevels">resetProtectionLevels</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.putTimeouts"></a>

```typescript
public putTimeouts(value: DevopsRepositoryProtectedBranchManagementTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeouts">DevopsRepositoryProtectedBranchManagementTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProtectionLevels` <a name="resetProtectionLevels" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.resetProtectionLevels"></a>

```typescript
public resetProtectionLevels(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DevopsRepositoryProtectedBranchManagement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.isConstruct"></a>

```typescript
import { devopsRepositoryProtectedBranchManagement } from 'rhizo-co-terraform-provider-oci'

devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.isTerraformElement"></a>

```typescript
import { devopsRepositoryProtectedBranchManagement } from 'rhizo-co-terraform-provider-oci'

devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.isTerraformResource"></a>

```typescript
import { devopsRepositoryProtectedBranchManagement } from 'rhizo-co-terraform-provider-oci'

devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.generateConfigForImport"></a>

```typescript
import { devopsRepositoryProtectedBranchManagement } from 'rhizo-co-terraform-provider-oci'

devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DevopsRepositoryProtectedBranchManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DevopsRepositoryProtectedBranchManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DevopsRepositoryProtectedBranchManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DevopsRepositoryProtectedBranchManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference">DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.branchNameInput">branchNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.protectionLevelsInput">protectionLevelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.repositoryIdInput">repositoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeouts">DevopsRepositoryProtectedBranchManagementTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.branchName">branchName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.protectionLevels">protectionLevels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.repositoryId">repositoryId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.timeouts"></a>

```typescript
public readonly timeouts: DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference">DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference</a>

---

##### `branchNameInput`<sup>Optional</sup> <a name="branchNameInput" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.branchNameInput"></a>

```typescript
public readonly branchNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `protectionLevelsInput`<sup>Optional</sup> <a name="protectionLevelsInput" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.protectionLevelsInput"></a>

```typescript
public readonly protectionLevelsInput: string[];
```

- *Type:* string[]

---

##### `repositoryIdInput`<sup>Optional</sup> <a name="repositoryIdInput" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.repositoryIdInput"></a>

```typescript
public readonly repositoryIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DevopsRepositoryProtectedBranchManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeouts">DevopsRepositoryProtectedBranchManagementTimeouts</a>

---

##### `branchName`<sup>Required</sup> <a name="branchName" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.branchName"></a>

```typescript
public readonly branchName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `protectionLevels`<sup>Required</sup> <a name="protectionLevels" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.protectionLevels"></a>

```typescript
public readonly protectionLevels: string[];
```

- *Type:* string[]

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsRepositoryProtectedBranchManagementConfig <a name="DevopsRepositoryProtectedBranchManagementConfig" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.Initializer"></a>

```typescript
import { devopsRepositoryProtectedBranchManagement } from 'rhizo-co-terraform-provider-oci'

const devopsRepositoryProtectedBranchManagementConfig: devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.branchName">branchName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#branch_name DevopsRepositoryProtectedBranchManagement#branch_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.repositoryId">repositoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#repository_id DevopsRepositoryProtectedBranchManagement#repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#id DevopsRepositoryProtectedBranchManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.protectionLevels">protectionLevels</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#protection_levels DevopsRepositoryProtectedBranchManagement#protection_levels}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeouts">DevopsRepositoryProtectedBranchManagementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `branchName`<sup>Required</sup> <a name="branchName" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.branchName"></a>

```typescript
public readonly branchName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#branch_name DevopsRepositoryProtectedBranchManagement#branch_name}.

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#repository_id DevopsRepositoryProtectedBranchManagement#repository_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#id DevopsRepositoryProtectedBranchManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `protectionLevels`<sup>Optional</sup> <a name="protectionLevels" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.protectionLevels"></a>

```typescript
public readonly protectionLevels: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#protection_levels DevopsRepositoryProtectedBranchManagement#protection_levels}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DevopsRepositoryProtectedBranchManagementTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeouts">DevopsRepositoryProtectedBranchManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#timeouts DevopsRepositoryProtectedBranchManagement#timeouts}

---

### DevopsRepositoryProtectedBranchManagementTimeouts <a name="DevopsRepositoryProtectedBranchManagementTimeouts" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeouts.Initializer"></a>

```typescript
import { devopsRepositoryProtectedBranchManagement } from 'rhizo-co-terraform-provider-oci'

const devopsRepositoryProtectedBranchManagementTimeouts: devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#create DevopsRepositoryProtectedBranchManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#delete DevopsRepositoryProtectedBranchManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#update DevopsRepositoryProtectedBranchManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#create DevopsRepositoryProtectedBranchManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#delete DevopsRepositoryProtectedBranchManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#update DevopsRepositoryProtectedBranchManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference <a name="DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.Initializer"></a>

```typescript
import { devopsRepositoryProtectedBranchManagement } from 'rhizo-co-terraform-provider-oci'

new devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeouts">DevopsRepositoryProtectedBranchManagementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsRepositoryProtectedBranchManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeouts">DevopsRepositoryProtectedBranchManagementTimeouts</a>

---



