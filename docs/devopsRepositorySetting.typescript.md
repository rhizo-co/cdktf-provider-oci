# `devopsRepositorySetting` Submodule <a name="`devopsRepositorySetting` Submodule" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsRepositorySetting <a name="DevopsRepositorySetting" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting oci_devops_repository_setting}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.Initializer"></a>

```typescript
import { devopsRepositorySetting } from 'rhizo-co-terraform-provider-oci'

new devopsRepositorySetting.DevopsRepositorySetting(scope: Construct, id: string, config: DevopsRepositorySettingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig">DevopsRepositorySettingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig">DevopsRepositorySettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.putApprovalRules">putApprovalRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.putMergeChecks">putMergeChecks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.putMergeSettings">putMergeSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.resetApprovalRules">resetApprovalRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.resetMergeChecks">resetMergeChecks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.resetMergeSettings">resetMergeSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApprovalRules` <a name="putApprovalRules" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.putApprovalRules"></a>

```typescript
public putApprovalRules(value: DevopsRepositorySettingApprovalRules): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.putApprovalRules.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRules">DevopsRepositorySettingApprovalRules</a>

---

##### `putMergeChecks` <a name="putMergeChecks" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.putMergeChecks"></a>

```typescript
public putMergeChecks(value: DevopsRepositorySettingMergeChecks): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.putMergeChecks.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecks">DevopsRepositorySettingMergeChecks</a>

---

##### `putMergeSettings` <a name="putMergeSettings" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.putMergeSettings"></a>

```typescript
public putMergeSettings(value: DevopsRepositorySettingMergeSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.putMergeSettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettings">DevopsRepositorySettingMergeSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.putTimeouts"></a>

```typescript
public putTimeouts(value: DevopsRepositorySettingTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeouts">DevopsRepositorySettingTimeouts</a>

---

##### `resetApprovalRules` <a name="resetApprovalRules" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.resetApprovalRules"></a>

```typescript
public resetApprovalRules(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMergeChecks` <a name="resetMergeChecks" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.resetMergeChecks"></a>

```typescript
public resetMergeChecks(): void
```

##### `resetMergeSettings` <a name="resetMergeSettings" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.resetMergeSettings"></a>

```typescript
public resetMergeSettings(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DevopsRepositorySetting resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.isConstruct"></a>

```typescript
import { devopsRepositorySetting } from 'rhizo-co-terraform-provider-oci'

devopsRepositorySetting.DevopsRepositorySetting.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.isTerraformElement"></a>

```typescript
import { devopsRepositorySetting } from 'rhizo-co-terraform-provider-oci'

devopsRepositorySetting.DevopsRepositorySetting.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.isTerraformResource"></a>

```typescript
import { devopsRepositorySetting } from 'rhizo-co-terraform-provider-oci'

devopsRepositorySetting.DevopsRepositorySetting.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.generateConfigForImport"></a>

```typescript
import { devopsRepositorySetting } from 'rhizo-co-terraform-provider-oci'

devopsRepositorySetting.DevopsRepositorySetting.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DevopsRepositorySetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DevopsRepositorySetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DevopsRepositorySetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DevopsRepositorySetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.approvalRules">approvalRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference">DevopsRepositorySettingApprovalRulesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.mergeChecks">mergeChecks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference">DevopsRepositorySettingMergeChecksOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.mergeSettings">mergeSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference">DevopsRepositorySettingMergeSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference">DevopsRepositorySettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.approvalRulesInput">approvalRulesInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRules">DevopsRepositorySettingApprovalRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.mergeChecksInput">mergeChecksInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecks">DevopsRepositorySettingMergeChecks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.mergeSettingsInput">mergeSettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettings">DevopsRepositorySettingMergeSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.repositoryIdInput">repositoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeouts">DevopsRepositorySettingTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.repositoryId">repositoryId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `approvalRules`<sup>Required</sup> <a name="approvalRules" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.approvalRules"></a>

```typescript
public readonly approvalRules: DevopsRepositorySettingApprovalRulesOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference">DevopsRepositorySettingApprovalRulesOutputReference</a>

---

##### `mergeChecks`<sup>Required</sup> <a name="mergeChecks" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.mergeChecks"></a>

```typescript
public readonly mergeChecks: DevopsRepositorySettingMergeChecksOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference">DevopsRepositorySettingMergeChecksOutputReference</a>

---

##### `mergeSettings`<sup>Required</sup> <a name="mergeSettings" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.mergeSettings"></a>

```typescript
public readonly mergeSettings: DevopsRepositorySettingMergeSettingsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference">DevopsRepositorySettingMergeSettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.timeouts"></a>

```typescript
public readonly timeouts: DevopsRepositorySettingTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference">DevopsRepositorySettingTimeoutsOutputReference</a>

---

##### `approvalRulesInput`<sup>Optional</sup> <a name="approvalRulesInput" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.approvalRulesInput"></a>

```typescript
public readonly approvalRulesInput: DevopsRepositorySettingApprovalRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRules">DevopsRepositorySettingApprovalRules</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mergeChecksInput`<sup>Optional</sup> <a name="mergeChecksInput" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.mergeChecksInput"></a>

```typescript
public readonly mergeChecksInput: DevopsRepositorySettingMergeChecks;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecks">DevopsRepositorySettingMergeChecks</a>

---

##### `mergeSettingsInput`<sup>Optional</sup> <a name="mergeSettingsInput" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.mergeSettingsInput"></a>

```typescript
public readonly mergeSettingsInput: DevopsRepositorySettingMergeSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettings">DevopsRepositorySettingMergeSettings</a>

---

##### `repositoryIdInput`<sup>Optional</sup> <a name="repositoryIdInput" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.repositoryIdInput"></a>

```typescript
public readonly repositoryIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DevopsRepositorySettingTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeouts">DevopsRepositorySettingTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySetting.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsRepositorySettingApprovalRules <a name="DevopsRepositorySettingApprovalRules" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRules.Initializer"></a>

```typescript
import { devopsRepositorySetting } from 'rhizo-co-terraform-provider-oci'

const devopsRepositorySettingApprovalRules: devopsRepositorySetting.DevopsRepositorySettingApprovalRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRules.property.items">items</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItems">DevopsRepositorySettingApprovalRulesItems</a>[]</code> | items block. |

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRules.property.items"></a>

```typescript
public readonly items: IResolvable | DevopsRepositorySettingApprovalRulesItems[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItems">DevopsRepositorySettingApprovalRulesItems</a>[]

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#items DevopsRepositorySetting#items}

---

### DevopsRepositorySettingApprovalRulesItems <a name="DevopsRepositorySettingApprovalRulesItems" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItems.Initializer"></a>

```typescript
import { devopsRepositorySetting } from 'rhizo-co-terraform-provider-oci'

const devopsRepositorySettingApprovalRulesItems: devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItems = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItems.property.minApprovalsCount">minApprovalsCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#min_approvals_count DevopsRepositorySetting#min_approvals_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItems.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#name DevopsRepositorySetting#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItems.property.destinationBranch">destinationBranch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#destination_branch DevopsRepositorySetting#destination_branch}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItems.property.reviewers">reviewers</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewers">DevopsRepositorySettingApprovalRulesItemsReviewers</a>[]</code> | reviewers block. |

---

##### `minApprovalsCount`<sup>Required</sup> <a name="minApprovalsCount" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItems.property.minApprovalsCount"></a>

```typescript
public readonly minApprovalsCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#min_approvals_count DevopsRepositorySetting#min_approvals_count}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItems.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#name DevopsRepositorySetting#name}.

---

##### `destinationBranch`<sup>Optional</sup> <a name="destinationBranch" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItems.property.destinationBranch"></a>

```typescript
public readonly destinationBranch: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#destination_branch DevopsRepositorySetting#destination_branch}.

---

##### `reviewers`<sup>Optional</sup> <a name="reviewers" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItems.property.reviewers"></a>

```typescript
public readonly reviewers: IResolvable | DevopsRepositorySettingApprovalRulesItemsReviewers[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewers">DevopsRepositorySettingApprovalRulesItemsReviewers</a>[]

reviewers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#reviewers DevopsRepositorySetting#reviewers}

---

### DevopsRepositorySettingApprovalRulesItemsReviewers <a name="DevopsRepositorySettingApprovalRulesItemsReviewers" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewers.Initializer"></a>

```typescript
import { devopsRepositorySetting } from 'rhizo-co-terraform-provider-oci'

const devopsRepositorySettingApprovalRulesItemsReviewers: devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewers.property.principalId">principalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#principal_id DevopsRepositorySetting#principal_id}. |

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewers.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#principal_id DevopsRepositorySetting#principal_id}.

---

### DevopsRepositorySettingConfig <a name="DevopsRepositorySettingConfig" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig.Initializer"></a>

```typescript
import { devopsRepositorySetting } from 'rhizo-co-terraform-provider-oci'

const devopsRepositorySettingConfig: devopsRepositorySetting.DevopsRepositorySettingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig.property.repositoryId">repositoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#repository_id DevopsRepositorySetting#repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig.property.approvalRules">approvalRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRules">DevopsRepositorySettingApprovalRules</a></code> | approval_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#id DevopsRepositorySetting#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig.property.mergeChecks">mergeChecks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecks">DevopsRepositorySettingMergeChecks</a></code> | merge_checks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig.property.mergeSettings">mergeSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettings">DevopsRepositorySettingMergeSettings</a></code> | merge_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeouts">DevopsRepositorySettingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#repository_id DevopsRepositorySetting#repository_id}.

---

##### `approvalRules`<sup>Optional</sup> <a name="approvalRules" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig.property.approvalRules"></a>

```typescript
public readonly approvalRules: DevopsRepositorySettingApprovalRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRules">DevopsRepositorySettingApprovalRules</a>

approval_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#approval_rules DevopsRepositorySetting#approval_rules}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#id DevopsRepositorySetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mergeChecks`<sup>Optional</sup> <a name="mergeChecks" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig.property.mergeChecks"></a>

```typescript
public readonly mergeChecks: DevopsRepositorySettingMergeChecks;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecks">DevopsRepositorySettingMergeChecks</a>

merge_checks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#merge_checks DevopsRepositorySetting#merge_checks}

---

##### `mergeSettings`<sup>Optional</sup> <a name="mergeSettings" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig.property.mergeSettings"></a>

```typescript
public readonly mergeSettings: DevopsRepositorySettingMergeSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettings">DevopsRepositorySettingMergeSettings</a>

merge_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#merge_settings DevopsRepositorySetting#merge_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DevopsRepositorySettingTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeouts">DevopsRepositorySettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#timeouts DevopsRepositorySetting#timeouts}

---

### DevopsRepositorySettingMergeChecks <a name="DevopsRepositorySettingMergeChecks" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecks.Initializer"></a>

```typescript
import { devopsRepositorySetting } from 'rhizo-co-terraform-provider-oci'

const devopsRepositorySettingMergeChecks: devopsRepositorySetting.DevopsRepositorySettingMergeChecks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecks.property.lastBuildSucceeded">lastBuildSucceeded</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#last_build_succeeded DevopsRepositorySetting#last_build_succeeded}. |

---

##### `lastBuildSucceeded`<sup>Required</sup> <a name="lastBuildSucceeded" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecks.property.lastBuildSucceeded"></a>

```typescript
public readonly lastBuildSucceeded: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#last_build_succeeded DevopsRepositorySetting#last_build_succeeded}.

---

### DevopsRepositorySettingMergeSettings <a name="DevopsRepositorySettingMergeSettings" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettings.Initializer"></a>

```typescript
import { devopsRepositorySetting } from 'rhizo-co-terraform-provider-oci'

const devopsRepositorySettingMergeSettings: devopsRepositorySetting.DevopsRepositorySettingMergeSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettings.property.allowedMergeStrategies">allowedMergeStrategies</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#allowed_merge_strategies DevopsRepositorySetting#allowed_merge_strategies}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettings.property.defaultMergeStrategy">defaultMergeStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#default_merge_strategy DevopsRepositorySetting#default_merge_strategy}. |

---

##### `allowedMergeStrategies`<sup>Required</sup> <a name="allowedMergeStrategies" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettings.property.allowedMergeStrategies"></a>

```typescript
public readonly allowedMergeStrategies: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#allowed_merge_strategies DevopsRepositorySetting#allowed_merge_strategies}.

---

##### `defaultMergeStrategy`<sup>Required</sup> <a name="defaultMergeStrategy" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettings.property.defaultMergeStrategy"></a>

```typescript
public readonly defaultMergeStrategy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#default_merge_strategy DevopsRepositorySetting#default_merge_strategy}.

---

### DevopsRepositorySettingTimeouts <a name="DevopsRepositorySettingTimeouts" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeouts.Initializer"></a>

```typescript
import { devopsRepositorySetting } from 'rhizo-co-terraform-provider-oci'

const devopsRepositorySettingTimeouts: devopsRepositorySetting.DevopsRepositorySettingTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#create DevopsRepositorySetting#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#delete DevopsRepositorySetting#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#update DevopsRepositorySetting#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#create DevopsRepositorySetting#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#delete DevopsRepositorySetting#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_setting#update DevopsRepositorySetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsRepositorySettingApprovalRulesItemsList <a name="DevopsRepositorySettingApprovalRulesItemsList" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList.Initializer"></a>

```typescript
import { devopsRepositorySetting } from 'rhizo-co-terraform-provider-oci'

new devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList.get"></a>

```typescript
public get(index: number): DevopsRepositorySettingApprovalRulesItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItems">DevopsRepositorySettingApprovalRulesItems</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsRepositorySettingApprovalRulesItems[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItems">DevopsRepositorySettingApprovalRulesItems</a>[]

---


### DevopsRepositorySettingApprovalRulesItemsOutputReference <a name="DevopsRepositorySettingApprovalRulesItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.Initializer"></a>

```typescript
import { devopsRepositorySetting } from 'rhizo-co-terraform-provider-oci'

new devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.putReviewers">putReviewers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.resetDestinationBranch">resetDestinationBranch</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.resetReviewers">resetReviewers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putReviewers` <a name="putReviewers" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.putReviewers"></a>

```typescript
public putReviewers(value: IResolvable | DevopsRepositorySettingApprovalRulesItemsReviewers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.putReviewers.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewers">DevopsRepositorySettingApprovalRulesItemsReviewers</a>[]

---

##### `resetDestinationBranch` <a name="resetDestinationBranch" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.resetDestinationBranch"></a>

```typescript
public resetDestinationBranch(): void
```

##### `resetReviewers` <a name="resetReviewers" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.resetReviewers"></a>

```typescript
public resetReviewers(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.property.reviewers">reviewers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList">DevopsRepositorySettingApprovalRulesItemsReviewersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.property.destinationBranchInput">destinationBranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.property.minApprovalsCountInput">minApprovalsCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.property.reviewersInput">reviewersInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewers">DevopsRepositorySettingApprovalRulesItemsReviewers</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.property.destinationBranch">destinationBranch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.property.minApprovalsCount">minApprovalsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItems">DevopsRepositorySettingApprovalRulesItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `reviewers`<sup>Required</sup> <a name="reviewers" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.property.reviewers"></a>

```typescript
public readonly reviewers: DevopsRepositorySettingApprovalRulesItemsReviewersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList">DevopsRepositorySettingApprovalRulesItemsReviewersList</a>

---

##### `destinationBranchInput`<sup>Optional</sup> <a name="destinationBranchInput" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.property.destinationBranchInput"></a>

```typescript
public readonly destinationBranchInput: string;
```

- *Type:* string

---

##### `minApprovalsCountInput`<sup>Optional</sup> <a name="minApprovalsCountInput" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.property.minApprovalsCountInput"></a>

```typescript
public readonly minApprovalsCountInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `reviewersInput`<sup>Optional</sup> <a name="reviewersInput" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.property.reviewersInput"></a>

```typescript
public readonly reviewersInput: IResolvable | DevopsRepositorySettingApprovalRulesItemsReviewers[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewers">DevopsRepositorySettingApprovalRulesItemsReviewers</a>[]

---

##### `destinationBranch`<sup>Required</sup> <a name="destinationBranch" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.property.destinationBranch"></a>

```typescript
public readonly destinationBranch: string;
```

- *Type:* string

---

##### `minApprovalsCount`<sup>Required</sup> <a name="minApprovalsCount" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.property.minApprovalsCount"></a>

```typescript
public readonly minApprovalsCount: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsRepositorySettingApprovalRulesItems;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItems">DevopsRepositorySettingApprovalRulesItems</a>

---


### DevopsRepositorySettingApprovalRulesItemsReviewersList <a name="DevopsRepositorySettingApprovalRulesItemsReviewersList" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList.Initializer"></a>

```typescript
import { devopsRepositorySetting } from 'rhizo-co-terraform-provider-oci'

new devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList.get"></a>

```typescript
public get(index: number): DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewers">DevopsRepositorySettingApprovalRulesItemsReviewers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsRepositorySettingApprovalRulesItemsReviewers[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewers">DevopsRepositorySettingApprovalRulesItemsReviewers</a>[]

---


### DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference <a name="DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer"></a>

```typescript
import { devopsRepositorySetting } from 'rhizo-co-terraform-provider-oci'

new devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalName">principalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalState">principalState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalType">principalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalIdInput">principalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewers">DevopsRepositorySettingApprovalRulesItemsReviewers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalName`<sup>Required</sup> <a name="principalName" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalName"></a>

```typescript
public readonly principalName: string;
```

- *Type:* string

---

##### `principalState`<sup>Required</sup> <a name="principalState" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalState"></a>

```typescript
public readonly principalState: string;
```

- *Type:* string

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalType"></a>

```typescript
public readonly principalType: string;
```

- *Type:* string

---

##### `principalIdInput`<sup>Optional</sup> <a name="principalIdInput" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalIdInput"></a>

```typescript
public readonly principalIdInput: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsRepositorySettingApprovalRulesItemsReviewers;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsReviewers">DevopsRepositorySettingApprovalRulesItemsReviewers</a>

---


### DevopsRepositorySettingApprovalRulesOutputReference <a name="DevopsRepositorySettingApprovalRulesOutputReference" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.Initializer"></a>

```typescript
import { devopsRepositorySetting } from 'rhizo-co-terraform-provider-oci'

new devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.putItems">putItems</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putItems` <a name="putItems" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.putItems"></a>

```typescript
public putItems(value: IResolvable | DevopsRepositorySettingApprovalRulesItems[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.putItems.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItems">DevopsRepositorySettingApprovalRulesItems</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList">DevopsRepositorySettingApprovalRulesItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.property.itemsInput">itemsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItems">DevopsRepositorySettingApprovalRulesItems</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRules">DevopsRepositorySettingApprovalRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.property.items"></a>

```typescript
public readonly items: DevopsRepositorySettingApprovalRulesItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItemsList">DevopsRepositorySettingApprovalRulesItemsList</a>

---

##### `itemsInput`<sup>Optional</sup> <a name="itemsInput" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.property.itemsInput"></a>

```typescript
public readonly itemsInput: IResolvable | DevopsRepositorySettingApprovalRulesItems[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesItems">DevopsRepositorySettingApprovalRulesItems</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevopsRepositorySettingApprovalRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingApprovalRules">DevopsRepositorySettingApprovalRules</a>

---


### DevopsRepositorySettingMergeChecksOutputReference <a name="DevopsRepositorySettingMergeChecksOutputReference" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.Initializer"></a>

```typescript
import { devopsRepositorySetting } from 'rhizo-co-terraform-provider-oci'

new devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.property.lastBuildSucceededInput">lastBuildSucceededInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.property.lastBuildSucceeded">lastBuildSucceeded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecks">DevopsRepositorySettingMergeChecks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lastBuildSucceededInput`<sup>Optional</sup> <a name="lastBuildSucceededInput" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.property.lastBuildSucceededInput"></a>

```typescript
public readonly lastBuildSucceededInput: string;
```

- *Type:* string

---

##### `lastBuildSucceeded`<sup>Required</sup> <a name="lastBuildSucceeded" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.property.lastBuildSucceeded"></a>

```typescript
public readonly lastBuildSucceeded: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevopsRepositorySettingMergeChecks;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeChecks">DevopsRepositorySettingMergeChecks</a>

---


### DevopsRepositorySettingMergeSettingsOutputReference <a name="DevopsRepositorySettingMergeSettingsOutputReference" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.Initializer"></a>

```typescript
import { devopsRepositorySetting } from 'rhizo-co-terraform-provider-oci'

new devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.property.allowedMergeStrategiesInput">allowedMergeStrategiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.property.defaultMergeStrategyInput">defaultMergeStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.property.allowedMergeStrategies">allowedMergeStrategies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.property.defaultMergeStrategy">defaultMergeStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettings">DevopsRepositorySettingMergeSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedMergeStrategiesInput`<sup>Optional</sup> <a name="allowedMergeStrategiesInput" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.property.allowedMergeStrategiesInput"></a>

```typescript
public readonly allowedMergeStrategiesInput: string[];
```

- *Type:* string[]

---

##### `defaultMergeStrategyInput`<sup>Optional</sup> <a name="defaultMergeStrategyInput" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.property.defaultMergeStrategyInput"></a>

```typescript
public readonly defaultMergeStrategyInput: string;
```

- *Type:* string

---

##### `allowedMergeStrategies`<sup>Required</sup> <a name="allowedMergeStrategies" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.property.allowedMergeStrategies"></a>

```typescript
public readonly allowedMergeStrategies: string[];
```

- *Type:* string[]

---

##### `defaultMergeStrategy`<sup>Required</sup> <a name="defaultMergeStrategy" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.property.defaultMergeStrategy"></a>

```typescript
public readonly defaultMergeStrategy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevopsRepositorySettingMergeSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingMergeSettings">DevopsRepositorySettingMergeSettings</a>

---


### DevopsRepositorySettingTimeoutsOutputReference <a name="DevopsRepositorySettingTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.Initializer"></a>

```typescript
import { devopsRepositorySetting } from 'rhizo-co-terraform-provider-oci'

new devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeouts">DevopsRepositorySettingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsRepositorySettingTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.devopsRepositorySetting.DevopsRepositorySettingTimeouts">DevopsRepositorySettingTimeouts</a>

---



