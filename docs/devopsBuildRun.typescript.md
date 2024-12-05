# `devopsBuildRun` Submodule <a name="`devopsBuildRun` Submodule" id="rhizo-co-terraform-provider-oci.devopsBuildRun"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsBuildRun <a name="DevopsBuildRun" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run oci_devops_build_run}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new devopsBuildRun.DevopsBuildRun(scope: Construct, id: string, config: DevopsBuildRunConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig">DevopsBuildRunConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig">DevopsBuildRunConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.putBuildRunArguments">putBuildRunArguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.putCommitInfo">putCommitInfo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.resetBuildRunArguments">resetBuildRunArguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.resetCommitInfo">resetCommitInfo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBuildRunArguments` <a name="putBuildRunArguments" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.putBuildRunArguments"></a>

```typescript
public putBuildRunArguments(value: DevopsBuildRunBuildRunArguments): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.putBuildRunArguments.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArguments">DevopsBuildRunBuildRunArguments</a>

---

##### `putCommitInfo` <a name="putCommitInfo" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.putCommitInfo"></a>

```typescript
public putCommitInfo(value: DevopsBuildRunCommitInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.putCommitInfo.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfo">DevopsBuildRunCommitInfo</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.putTimeouts"></a>

```typescript
public putTimeouts(value: DevopsBuildRunTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeouts">DevopsBuildRunTimeouts</a>

---

##### `resetBuildRunArguments` <a name="resetBuildRunArguments" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.resetBuildRunArguments"></a>

```typescript
public resetBuildRunArguments(): void
```

##### `resetCommitInfo` <a name="resetCommitInfo" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.resetCommitInfo"></a>

```typescript
public resetCommitInfo(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DevopsBuildRun resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.isConstruct"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

devopsBuildRun.DevopsBuildRun.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.isTerraformElement"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

devopsBuildRun.DevopsBuildRun.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.isTerraformResource"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

devopsBuildRun.DevopsBuildRun.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.generateConfigForImport"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

devopsBuildRun.DevopsBuildRun.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DevopsBuildRun resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DevopsBuildRun to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DevopsBuildRun that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DevopsBuildRun to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.buildOutputs">buildOutputs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsList">DevopsBuildRunBuildOutputsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.buildRunArguments">buildRunArguments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference">DevopsBuildRunBuildRunArgumentsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.buildRunProgress">buildRunProgress</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressList">DevopsBuildRunBuildRunProgressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.buildRunSource">buildRunSource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceList">DevopsBuildRunBuildRunSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.commitInfo">commitInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference">DevopsBuildRunCommitInfoOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference">DevopsBuildRunTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.buildPipelineIdInput">buildPipelineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.buildRunArgumentsInput">buildRunArgumentsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArguments">DevopsBuildRunBuildRunArguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.commitInfoInput">commitInfoInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfo">DevopsBuildRunCommitInfo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeouts">DevopsBuildRunTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.buildPipelineId">buildPipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `buildOutputs`<sup>Required</sup> <a name="buildOutputs" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.buildOutputs"></a>

```typescript
public readonly buildOutputs: DevopsBuildRunBuildOutputsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsList">DevopsBuildRunBuildOutputsList</a>

---

##### `buildRunArguments`<sup>Required</sup> <a name="buildRunArguments" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.buildRunArguments"></a>

```typescript
public readonly buildRunArguments: DevopsBuildRunBuildRunArgumentsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference">DevopsBuildRunBuildRunArgumentsOutputReference</a>

---

##### `buildRunProgress`<sup>Required</sup> <a name="buildRunProgress" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.buildRunProgress"></a>

```typescript
public readonly buildRunProgress: DevopsBuildRunBuildRunProgressList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressList">DevopsBuildRunBuildRunProgressList</a>

---

##### `buildRunSource`<sup>Required</sup> <a name="buildRunSource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.buildRunSource"></a>

```typescript
public readonly buildRunSource: DevopsBuildRunBuildRunSourceList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceList">DevopsBuildRunBuildRunSourceList</a>

---

##### `commitInfo`<sup>Required</sup> <a name="commitInfo" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.commitInfo"></a>

```typescript
public readonly commitInfo: DevopsBuildRunCommitInfoOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference">DevopsBuildRunCommitInfoOutputReference</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.timeouts"></a>

```typescript
public readonly timeouts: DevopsBuildRunTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference">DevopsBuildRunTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `buildPipelineIdInput`<sup>Optional</sup> <a name="buildPipelineIdInput" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.buildPipelineIdInput"></a>

```typescript
public readonly buildPipelineIdInput: string;
```

- *Type:* string

---

##### `buildRunArgumentsInput`<sup>Optional</sup> <a name="buildRunArgumentsInput" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.buildRunArgumentsInput"></a>

```typescript
public readonly buildRunArgumentsInput: DevopsBuildRunBuildRunArguments;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArguments">DevopsBuildRunBuildRunArguments</a>

---

##### `commitInfoInput`<sup>Optional</sup> <a name="commitInfoInput" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.commitInfoInput"></a>

```typescript
public readonly commitInfoInput: DevopsBuildRunCommitInfo;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfo">DevopsBuildRunCommitInfo</a>

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DevopsBuildRunTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeouts">DevopsBuildRunTimeouts</a>

---

##### `buildPipelineId`<sup>Required</sup> <a name="buildPipelineId" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.buildPipelineId"></a>

```typescript
public readonly buildPipelineId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRun.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsBuildRunBuildOutputs <a name="DevopsBuildRunBuildOutputs" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputs"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputs.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

const devopsBuildRunBuildOutputs: devopsBuildRun.DevopsBuildRunBuildOutputs = { ... }
```


### DevopsBuildRunBuildOutputsArtifactOverrideParameters <a name="DevopsBuildRunBuildOutputsArtifactOverrideParameters" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParameters.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

const devopsBuildRunBuildOutputsArtifactOverrideParameters: devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParameters = { ... }
```


### DevopsBuildRunBuildOutputsArtifactOverrideParametersItems <a name="DevopsBuildRunBuildOutputsArtifactOverrideParametersItems" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItems.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

const devopsBuildRunBuildOutputsArtifactOverrideParametersItems: devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItems = { ... }
```


### DevopsBuildRunBuildOutputsDeliveredArtifacts <a name="DevopsBuildRunBuildOutputsDeliveredArtifacts" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifacts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifacts.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

const devopsBuildRunBuildOutputsDeliveredArtifacts: devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifacts = { ... }
```


### DevopsBuildRunBuildOutputsDeliveredArtifactsItems <a name="DevopsBuildRunBuildOutputsDeliveredArtifactsItems" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItems.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

const devopsBuildRunBuildOutputsDeliveredArtifactsItems: devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItems = { ... }
```


### DevopsBuildRunBuildOutputsExportedVariables <a name="DevopsBuildRunBuildOutputsExportedVariables" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariables.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

const devopsBuildRunBuildOutputsExportedVariables: devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariables = { ... }
```


### DevopsBuildRunBuildOutputsExportedVariablesItems <a name="DevopsBuildRunBuildOutputsExportedVariablesItems" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItems.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

const devopsBuildRunBuildOutputsExportedVariablesItems: devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItems = { ... }
```


### DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollection <a name="DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollection" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollection.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

const devopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollection: devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollection = { ... }
```


### DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItems <a name="DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItems.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

const devopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItems: devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItems = { ... }
```


### DevopsBuildRunBuildRunArguments <a name="DevopsBuildRunBuildRunArguments" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArguments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArguments.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

const devopsBuildRunBuildRunArguments: devopsBuildRun.DevopsBuildRunBuildRunArguments = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArguments.property.items">items</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItems">DevopsBuildRunBuildRunArgumentsItems</a>[]</code> | items block. |

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArguments.property.items"></a>

```typescript
public readonly items: IResolvable | DevopsBuildRunBuildRunArgumentsItems[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItems">DevopsBuildRunBuildRunArgumentsItems</a>[]

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#items DevopsBuildRun#items}

---

### DevopsBuildRunBuildRunArgumentsItems <a name="DevopsBuildRunBuildRunArgumentsItems" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItems.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

const devopsBuildRunBuildRunArgumentsItems: devopsBuildRun.DevopsBuildRunBuildRunArgumentsItems = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItems.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#name DevopsBuildRun#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItems.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#value DevopsBuildRun#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItems.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#name DevopsBuildRun#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItems.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#value DevopsBuildRun#value}.

---

### DevopsBuildRunBuildRunProgress <a name="DevopsBuildRunBuildRunProgress" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgress.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

const devopsBuildRunBuildRunProgress: devopsBuildRun.DevopsBuildRunBuildRunProgress = { ... }
```


### DevopsBuildRunBuildRunSource <a name="DevopsBuildRunBuildRunSource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSource.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

const devopsBuildRunBuildRunSource: devopsBuildRun.DevopsBuildRunBuildRunSource = { ... }
```


### DevopsBuildRunBuildRunSourceTriggerInfo <a name="DevopsBuildRunBuildRunSourceTriggerInfo" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfo.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

const devopsBuildRunBuildRunSourceTriggerInfo: devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfo = { ... }
```


### DevopsBuildRunBuildRunSourceTriggerInfoActions <a name="DevopsBuildRunBuildRunSourceTriggerInfoActions" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActions.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

const devopsBuildRunBuildRunSourceTriggerInfoActions: devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActions = { ... }
```


### DevopsBuildRunBuildRunSourceTriggerInfoActionsFilter <a name="DevopsBuildRunBuildRunSourceTriggerInfoActionsFilter" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilter.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

const devopsBuildRunBuildRunSourceTriggerInfoActionsFilter: devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilter = { ... }
```


### DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExclude <a name="DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExclude" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExclude"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExclude.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

const devopsBuildRunBuildRunSourceTriggerInfoActionsFilterExclude: devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExclude = { ... }
```


### DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilter <a name="DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilter" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilter.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

const devopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilter: devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilter = { ... }
```


### DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterInclude <a name="DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterInclude" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterInclude"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterInclude.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

const devopsBuildRunBuildRunSourceTriggerInfoActionsFilterInclude: devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterInclude = { ... }
```


### DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilter <a name="DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilter" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilter.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

const devopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilter: devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilter = { ... }
```


### DevopsBuildRunCommitInfo <a name="DevopsBuildRunCommitInfo" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfo.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

const devopsBuildRunCommitInfo: devopsBuildRun.DevopsBuildRunCommitInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfo.property.commitHash">commitHash</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#commit_hash DevopsBuildRun#commit_hash}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfo.property.repositoryBranch">repositoryBranch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#repository_branch DevopsBuildRun#repository_branch}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfo.property.repositoryUrl">repositoryUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#repository_url DevopsBuildRun#repository_url}. |

---

##### `commitHash`<sup>Required</sup> <a name="commitHash" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfo.property.commitHash"></a>

```typescript
public readonly commitHash: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#commit_hash DevopsBuildRun#commit_hash}.

---

##### `repositoryBranch`<sup>Required</sup> <a name="repositoryBranch" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfo.property.repositoryBranch"></a>

```typescript
public readonly repositoryBranch: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#repository_branch DevopsBuildRun#repository_branch}.

---

##### `repositoryUrl`<sup>Required</sup> <a name="repositoryUrl" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfo.property.repositoryUrl"></a>

```typescript
public readonly repositoryUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#repository_url DevopsBuildRun#repository_url}.

---

### DevopsBuildRunConfig <a name="DevopsBuildRunConfig" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

const devopsBuildRunConfig: devopsBuildRun.DevopsBuildRunConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.buildPipelineId">buildPipelineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#build_pipeline_id DevopsBuildRun#build_pipeline_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.buildRunArguments">buildRunArguments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArguments">DevopsBuildRunBuildRunArguments</a></code> | build_run_arguments block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.commitInfo">commitInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfo">DevopsBuildRunCommitInfo</a></code> | commit_info block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#defined_tags DevopsBuildRun#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#display_name DevopsBuildRun#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#freeform_tags DevopsBuildRun#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#id DevopsBuildRun#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeouts">DevopsBuildRunTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `buildPipelineId`<sup>Required</sup> <a name="buildPipelineId" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.buildPipelineId"></a>

```typescript
public readonly buildPipelineId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#build_pipeline_id DevopsBuildRun#build_pipeline_id}.

---

##### `buildRunArguments`<sup>Optional</sup> <a name="buildRunArguments" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.buildRunArguments"></a>

```typescript
public readonly buildRunArguments: DevopsBuildRunBuildRunArguments;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArguments">DevopsBuildRunBuildRunArguments</a>

build_run_arguments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#build_run_arguments DevopsBuildRun#build_run_arguments}

---

##### `commitInfo`<sup>Optional</sup> <a name="commitInfo" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.commitInfo"></a>

```typescript
public readonly commitInfo: DevopsBuildRunCommitInfo;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfo">DevopsBuildRunCommitInfo</a>

commit_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#commit_info DevopsBuildRun#commit_info}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#defined_tags DevopsBuildRun#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#display_name DevopsBuildRun#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#freeform_tags DevopsBuildRun#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#id DevopsBuildRun#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DevopsBuildRunTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeouts">DevopsBuildRunTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#timeouts DevopsBuildRun#timeouts}

---

### DevopsBuildRunTimeouts <a name="DevopsBuildRunTimeouts" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeouts.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

const devopsBuildRunTimeouts: devopsBuildRun.DevopsBuildRunTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#create DevopsBuildRun#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#delete DevopsBuildRun#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#update DevopsBuildRun#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#create DevopsBuildRun#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#delete DevopsBuildRun#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_run#update DevopsBuildRun#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList <a name="DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.get"></a>

```typescript
public get(index: number): DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference <a name="DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.property.deployArtifactId">deployArtifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItems">DevopsBuildRunBuildOutputsArtifactOverrideParametersItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deployArtifactId`<sup>Required</sup> <a name="deployArtifactId" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.property.deployArtifactId"></a>

```typescript
public readonly deployArtifactId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevopsBuildRunBuildOutputsArtifactOverrideParametersItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItems">DevopsBuildRunBuildOutputsArtifactOverrideParametersItems</a>

---


### DevopsBuildRunBuildOutputsArtifactOverrideParametersList <a name="DevopsBuildRunBuildOutputsArtifactOverrideParametersList" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList.get"></a>

```typescript
public get(index: number): DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference <a name="DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList">DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParameters">DevopsBuildRunBuildOutputsArtifactOverrideParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.property.items"></a>

```typescript
public readonly items: DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList">DevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevopsBuildRunBuildOutputsArtifactOverrideParameters;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParameters">DevopsBuildRunBuildOutputsArtifactOverrideParameters</a>

---


### DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList <a name="DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.get"></a>

```typescript
public get(index: number): DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference <a name="DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.artifactRepositoryId">artifactRepositoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.artifactType">artifactType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.deliveredArtifactHash">deliveredArtifactHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.deliveredArtifactId">deliveredArtifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.deployArtifactId">deployArtifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.imageUri">imageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.outputArtifactName">outputArtifactName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItems">DevopsBuildRunBuildOutputsDeliveredArtifactsItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `artifactRepositoryId`<sup>Required</sup> <a name="artifactRepositoryId" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.artifactRepositoryId"></a>

```typescript
public readonly artifactRepositoryId: string;
```

- *Type:* string

---

##### `artifactType`<sup>Required</sup> <a name="artifactType" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.artifactType"></a>

```typescript
public readonly artifactType: string;
```

- *Type:* string

---

##### `deliveredArtifactHash`<sup>Required</sup> <a name="deliveredArtifactHash" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.deliveredArtifactHash"></a>

```typescript
public readonly deliveredArtifactHash: string;
```

- *Type:* string

---

##### `deliveredArtifactId`<sup>Required</sup> <a name="deliveredArtifactId" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.deliveredArtifactId"></a>

```typescript
public readonly deliveredArtifactId: string;
```

- *Type:* string

---

##### `deployArtifactId`<sup>Required</sup> <a name="deployArtifactId" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.deployArtifactId"></a>

```typescript
public readonly deployArtifactId: string;
```

- *Type:* string

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.imageUri"></a>

```typescript
public readonly imageUri: string;
```

- *Type:* string

---

##### `outputArtifactName`<sup>Required</sup> <a name="outputArtifactName" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.outputArtifactName"></a>

```typescript
public readonly outputArtifactName: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevopsBuildRunBuildOutputsDeliveredArtifactsItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItems">DevopsBuildRunBuildOutputsDeliveredArtifactsItems</a>

---


### DevopsBuildRunBuildOutputsDeliveredArtifactsList <a name="DevopsBuildRunBuildOutputsDeliveredArtifactsList" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList.get"></a>

```typescript
public get(index: number): DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference <a name="DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList">DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifacts">DevopsBuildRunBuildOutputsDeliveredArtifacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.property.items"></a>

```typescript
public readonly items: DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList">DevopsBuildRunBuildOutputsDeliveredArtifactsItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevopsBuildRunBuildOutputsDeliveredArtifacts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifacts">DevopsBuildRunBuildOutputsDeliveredArtifacts</a>

---


### DevopsBuildRunBuildOutputsExportedVariablesItemsList <a name="DevopsBuildRunBuildOutputsExportedVariablesItemsList" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList.get"></a>

```typescript
public get(index: number): DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference <a name="DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItems">DevopsBuildRunBuildOutputsExportedVariablesItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevopsBuildRunBuildOutputsExportedVariablesItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItems">DevopsBuildRunBuildOutputsExportedVariablesItems</a>

---


### DevopsBuildRunBuildOutputsExportedVariablesList <a name="DevopsBuildRunBuildOutputsExportedVariablesList" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList.get"></a>

```typescript
public get(index: number): DevopsBuildRunBuildOutputsExportedVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DevopsBuildRunBuildOutputsExportedVariablesOutputReference <a name="DevopsBuildRunBuildOutputsExportedVariablesOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList">DevopsBuildRunBuildOutputsExportedVariablesItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariables">DevopsBuildRunBuildOutputsExportedVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.property.items"></a>

```typescript
public readonly items: DevopsBuildRunBuildOutputsExportedVariablesItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesItemsList">DevopsBuildRunBuildOutputsExportedVariablesItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevopsBuildRunBuildOutputsExportedVariables;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariables">DevopsBuildRunBuildOutputsExportedVariables</a>

---


### DevopsBuildRunBuildOutputsList <a name="DevopsBuildRunBuildOutputsList" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsList.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new devopsBuildRun.DevopsBuildRunBuildOutputsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsList.get"></a>

```typescript
public get(index: number): DevopsBuildRunBuildOutputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DevopsBuildRunBuildOutputsOutputReference <a name="DevopsBuildRunBuildOutputsOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.property.artifactOverrideParameters">artifactOverrideParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList">DevopsBuildRunBuildOutputsArtifactOverrideParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.property.deliveredArtifacts">deliveredArtifacts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList">DevopsBuildRunBuildOutputsDeliveredArtifactsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.property.exportedVariables">exportedVariables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList">DevopsBuildRunBuildOutputsExportedVariablesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.property.vulnerabilityAuditSummaryCollection">vulnerabilityAuditSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList">DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputs">DevopsBuildRunBuildOutputs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `artifactOverrideParameters`<sup>Required</sup> <a name="artifactOverrideParameters" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.property.artifactOverrideParameters"></a>

```typescript
public readonly artifactOverrideParameters: DevopsBuildRunBuildOutputsArtifactOverrideParametersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsArtifactOverrideParametersList">DevopsBuildRunBuildOutputsArtifactOverrideParametersList</a>

---

##### `deliveredArtifacts`<sup>Required</sup> <a name="deliveredArtifacts" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.property.deliveredArtifacts"></a>

```typescript
public readonly deliveredArtifacts: DevopsBuildRunBuildOutputsDeliveredArtifactsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsDeliveredArtifactsList">DevopsBuildRunBuildOutputsDeliveredArtifactsList</a>

---

##### `exportedVariables`<sup>Required</sup> <a name="exportedVariables" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.property.exportedVariables"></a>

```typescript
public readonly exportedVariables: DevopsBuildRunBuildOutputsExportedVariablesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsExportedVariablesList">DevopsBuildRunBuildOutputsExportedVariablesList</a>

---

##### `vulnerabilityAuditSummaryCollection`<sup>Required</sup> <a name="vulnerabilityAuditSummaryCollection" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.property.vulnerabilityAuditSummaryCollection"></a>

```typescript
public readonly vulnerabilityAuditSummaryCollection: DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList">DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevopsBuildRunBuildOutputs;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputs">DevopsBuildRunBuildOutputs</a>

---


### DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList <a name="DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.get"></a>

```typescript
public get(index: number): DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference <a name="DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.property.buildStageId">buildStageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.property.commitHash">commitHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.property.vulnerabilityAuditId">vulnerabilityAuditId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItems">DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `buildStageId`<sup>Required</sup> <a name="buildStageId" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.property.buildStageId"></a>

```typescript
public readonly buildStageId: string;
```

- *Type:* string

---

##### `commitHash`<sup>Required</sup> <a name="commitHash" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.property.commitHash"></a>

```typescript
public readonly commitHash: string;
```

- *Type:* string

---

##### `vulnerabilityAuditId`<sup>Required</sup> <a name="vulnerabilityAuditId" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.property.vulnerabilityAuditId"></a>

```typescript
public readonly vulnerabilityAuditId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItems">DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItems</a>

---


### DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList <a name="DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.get"></a>

```typescript
public get(index: number): DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference <a name="DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList">DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollection">DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList">DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollection">DevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollection</a>

---


### DevopsBuildRunBuildRunArgumentsItemsList <a name="DevopsBuildRunBuildRunArgumentsItemsList" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList.get"></a>

```typescript
public get(index: number): DevopsBuildRunBuildRunArgumentsItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItems">DevopsBuildRunBuildRunArgumentsItems</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsBuildRunBuildRunArgumentsItems[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItems">DevopsBuildRunBuildRunArgumentsItems</a>[]

---


### DevopsBuildRunBuildRunArgumentsItemsOutputReference <a name="DevopsBuildRunBuildRunArgumentsItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItems">DevopsBuildRunBuildRunArgumentsItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsBuildRunBuildRunArgumentsItems;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItems">DevopsBuildRunBuildRunArgumentsItems</a>

---


### DevopsBuildRunBuildRunArgumentsOutputReference <a name="DevopsBuildRunBuildRunArgumentsOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.putItems">putItems</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putItems` <a name="putItems" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.putItems"></a>

```typescript
public putItems(value: IResolvable | DevopsBuildRunBuildRunArgumentsItems[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.putItems.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItems">DevopsBuildRunBuildRunArgumentsItems</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList">DevopsBuildRunBuildRunArgumentsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.property.itemsInput">itemsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItems">DevopsBuildRunBuildRunArgumentsItems</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArguments">DevopsBuildRunBuildRunArguments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.property.items"></a>

```typescript
public readonly items: DevopsBuildRunBuildRunArgumentsItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItemsList">DevopsBuildRunBuildRunArgumentsItemsList</a>

---

##### `itemsInput`<sup>Optional</sup> <a name="itemsInput" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.property.itemsInput"></a>

```typescript
public readonly itemsInput: IResolvable | DevopsBuildRunBuildRunArgumentsItems[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsItems">DevopsBuildRunBuildRunArgumentsItems</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArgumentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevopsBuildRunBuildRunArguments;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunArguments">DevopsBuildRunBuildRunArguments</a>

---


### DevopsBuildRunBuildRunProgressList <a name="DevopsBuildRunBuildRunProgressList" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressList.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new devopsBuildRun.DevopsBuildRunBuildRunProgressList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressList.get"></a>

```typescript
public get(index: number): DevopsBuildRunBuildRunProgressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DevopsBuildRunBuildRunProgressOutputReference <a name="DevopsBuildRunBuildRunProgressOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.property.buildPipelineStageRunProgress">buildPipelineStageRunProgress</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.property.timeFinished">timeFinished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.property.timeStarted">timeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgress">DevopsBuildRunBuildRunProgress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `buildPipelineStageRunProgress`<sup>Required</sup> <a name="buildPipelineStageRunProgress" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.property.buildPipelineStageRunProgress"></a>

```typescript
public readonly buildPipelineStageRunProgress: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeFinished`<sup>Required</sup> <a name="timeFinished" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.property.timeFinished"></a>

```typescript
public readonly timeFinished: string;
```

- *Type:* string

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevopsBuildRunBuildRunProgress;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunProgress">DevopsBuildRunBuildRunProgress</a>

---


### DevopsBuildRunBuildRunSourceList <a name="DevopsBuildRunBuildRunSourceList" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceList.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new devopsBuildRun.DevopsBuildRunBuildRunSourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceList.get"></a>

```typescript
public get(index: number): DevopsBuildRunBuildRunSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DevopsBuildRunBuildRunSourceOutputReference <a name="DevopsBuildRunBuildRunSourceOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.property.repositoryId">repositoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.property.triggerId">triggerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.property.triggerInfo">triggerInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList">DevopsBuildRunBuildRunSourceTriggerInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSource">DevopsBuildRunBuildRunSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `triggerId`<sup>Required</sup> <a name="triggerId" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.property.triggerId"></a>

```typescript
public readonly triggerId: string;
```

- *Type:* string

---

##### `triggerInfo`<sup>Required</sup> <a name="triggerInfo" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.property.triggerInfo"></a>

```typescript
public readonly triggerInfo: DevopsBuildRunBuildRunSourceTriggerInfoList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList">DevopsBuildRunBuildRunSourceTriggerInfoList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevopsBuildRunBuildRunSource;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSource">DevopsBuildRunBuildRunSource</a>

---


### DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList <a name="DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.get"></a>

```typescript
public get(index: number): DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference <a name="DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.property.filePaths">filePaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilter">DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filePaths`<sup>Required</sup> <a name="filePaths" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.property.filePaths"></a>

```typescript
public readonly filePaths: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilter;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilter">DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilter</a>

---


### DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList <a name="DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.get"></a>

```typescript
public get(index: number): DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference <a name="DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.property.fileFilter">fileFilter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList">DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExclude">DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fileFilter`<sup>Required</sup> <a name="fileFilter" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.property.fileFilter"></a>

```typescript
public readonly fileFilter: DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList">DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExclude;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExclude">DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExclude</a>

---


### DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList <a name="DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.get"></a>

```typescript
public get(index: number): DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference <a name="DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.property.filePaths">filePaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilter">DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filePaths`<sup>Required</sup> <a name="filePaths" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.property.filePaths"></a>

```typescript
public readonly filePaths: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilter;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilter">DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilter</a>

---


### DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList <a name="DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.get"></a>

```typescript
public get(index: number): DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference <a name="DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.baseRef">baseRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.fileFilter">fileFilter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList">DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.headRef">headRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.repositoryName">repositoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterInclude">DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterInclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baseRef`<sup>Required</sup> <a name="baseRef" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.baseRef"></a>

```typescript
public readonly baseRef: string;
```

- *Type:* string

---

##### `fileFilter`<sup>Required</sup> <a name="fileFilter" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.fileFilter"></a>

```typescript
public readonly fileFilter: DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList">DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList</a>

---

##### `headRef`<sup>Required</sup> <a name="headRef" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.headRef"></a>

```typescript
public readonly headRef: string;
```

- *Type:* string

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterInclude;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterInclude">DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterInclude</a>

---


### DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList <a name="DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.get"></a>

```typescript
public get(index: number): DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference <a name="DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.property.events">events</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.property.exclude">exclude</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList">DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.property.include">include</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList">DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.property.triggerSource">triggerSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilter">DevopsBuildRunBuildRunSourceTriggerInfoActionsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `events`<sup>Required</sup> <a name="events" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.property.events"></a>

```typescript
public readonly events: string[];
```

- *Type:* string[]

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.property.exclude"></a>

```typescript
public readonly exclude: DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList">DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList</a>

---

##### `include`<sup>Required</sup> <a name="include" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.property.include"></a>

```typescript
public readonly include: DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList">DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList</a>

---

##### `triggerSource`<sup>Required</sup> <a name="triggerSource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.property.triggerSource"></a>

```typescript
public readonly triggerSource: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevopsBuildRunBuildRunSourceTriggerInfoActionsFilter;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilter">DevopsBuildRunBuildRunSourceTriggerInfoActionsFilter</a>

---


### DevopsBuildRunBuildRunSourceTriggerInfoActionsList <a name="DevopsBuildRunBuildRunSourceTriggerInfoActionsList" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList.get"></a>

```typescript
public get(index: number): DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference <a name="DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.property.buildPipelineId">buildPipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList">DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActions">DevopsBuildRunBuildRunSourceTriggerInfoActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `buildPipelineId`<sup>Required</sup> <a name="buildPipelineId" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.property.buildPipelineId"></a>

```typescript
public readonly buildPipelineId: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.property.filter"></a>

```typescript
public readonly filter: DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList">DevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevopsBuildRunBuildRunSourceTriggerInfoActions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActions">DevopsBuildRunBuildRunSourceTriggerInfoActions</a>

---


### DevopsBuildRunBuildRunSourceTriggerInfoList <a name="DevopsBuildRunBuildRunSourceTriggerInfoList" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList.get"></a>

```typescript
public get(index: number): DevopsBuildRunBuildRunSourceTriggerInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DevopsBuildRunBuildRunSourceTriggerInfoOutputReference <a name="DevopsBuildRunBuildRunSourceTriggerInfoOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.property.actions">actions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList">DevopsBuildRunBuildRunSourceTriggerInfoActionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfo">DevopsBuildRunBuildRunSourceTriggerInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actions`<sup>Required</sup> <a name="actions" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.property.actions"></a>

```typescript
public readonly actions: DevopsBuildRunBuildRunSourceTriggerInfoActionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoActionsList">DevopsBuildRunBuildRunSourceTriggerInfoActionsList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevopsBuildRunBuildRunSourceTriggerInfo;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunBuildRunSourceTriggerInfo">DevopsBuildRunBuildRunSourceTriggerInfo</a>

---


### DevopsBuildRunCommitInfoOutputReference <a name="DevopsBuildRunCommitInfoOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new devopsBuildRun.DevopsBuildRunCommitInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.property.commitHashInput">commitHashInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.property.repositoryBranchInput">repositoryBranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.property.repositoryUrlInput">repositoryUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.property.commitHash">commitHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.property.repositoryBranch">repositoryBranch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.property.repositoryUrl">repositoryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfo">DevopsBuildRunCommitInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commitHashInput`<sup>Optional</sup> <a name="commitHashInput" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.property.commitHashInput"></a>

```typescript
public readonly commitHashInput: string;
```

- *Type:* string

---

##### `repositoryBranchInput`<sup>Optional</sup> <a name="repositoryBranchInput" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.property.repositoryBranchInput"></a>

```typescript
public readonly repositoryBranchInput: string;
```

- *Type:* string

---

##### `repositoryUrlInput`<sup>Optional</sup> <a name="repositoryUrlInput" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.property.repositoryUrlInput"></a>

```typescript
public readonly repositoryUrlInput: string;
```

- *Type:* string

---

##### `commitHash`<sup>Required</sup> <a name="commitHash" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.property.commitHash"></a>

```typescript
public readonly commitHash: string;
```

- *Type:* string

---

##### `repositoryBranch`<sup>Required</sup> <a name="repositoryBranch" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.property.repositoryBranch"></a>

```typescript
public readonly repositoryBranch: string;
```

- *Type:* string

---

##### `repositoryUrl`<sup>Required</sup> <a name="repositoryUrl" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.property.repositoryUrl"></a>

```typescript
public readonly repositoryUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevopsBuildRunCommitInfo;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunCommitInfo">DevopsBuildRunCommitInfo</a>

---


### DevopsBuildRunTimeoutsOutputReference <a name="DevopsBuildRunTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.Initializer"></a>

```typescript
import { devopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new devopsBuildRun.DevopsBuildRunTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeouts">DevopsBuildRunTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsBuildRunTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.devopsBuildRun.DevopsBuildRunTimeouts">DevopsBuildRunTimeouts</a>

---



