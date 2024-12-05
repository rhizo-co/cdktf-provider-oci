# `devopsProjectRepositorySetting` Submodule <a name="`devopsProjectRepositorySetting` Submodule" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsProjectRepositorySetting <a name="DevopsProjectRepositorySetting" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting oci_devops_project_repository_setting}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer"></a>

```typescript
import { devopsProjectRepositorySetting } from 'rhizo-co-terraform-provider-oci'

new devopsProjectRepositorySetting.DevopsProjectRepositorySetting(scope: Construct, id: string, config: DevopsProjectRepositorySettingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig">DevopsProjectRepositorySettingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig">DevopsProjectRepositorySettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.putApprovalRules">putApprovalRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.putMergeSettings">putMergeSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.resetApprovalRules">resetApprovalRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.resetMergeSettings">resetMergeSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApprovalRules` <a name="putApprovalRules" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.putApprovalRules"></a>

```typescript
public putApprovalRules(value: DevopsProjectRepositorySettingApprovalRules): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.putApprovalRules.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules">DevopsProjectRepositorySettingApprovalRules</a>

---

##### `putMergeSettings` <a name="putMergeSettings" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.putMergeSettings"></a>

```typescript
public putMergeSettings(value: DevopsProjectRepositorySettingMergeSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.putMergeSettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings">DevopsProjectRepositorySettingMergeSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.putTimeouts"></a>

```typescript
public putTimeouts(value: DevopsProjectRepositorySettingTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts">DevopsProjectRepositorySettingTimeouts</a>

---

##### `resetApprovalRules` <a name="resetApprovalRules" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.resetApprovalRules"></a>

```typescript
public resetApprovalRules(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMergeSettings` <a name="resetMergeSettings" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.resetMergeSettings"></a>

```typescript
public resetMergeSettings(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DevopsProjectRepositorySetting resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.isConstruct"></a>

```typescript
import { devopsProjectRepositorySetting } from 'rhizo-co-terraform-provider-oci'

devopsProjectRepositorySetting.DevopsProjectRepositorySetting.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.isTerraformElement"></a>

```typescript
import { devopsProjectRepositorySetting } from 'rhizo-co-terraform-provider-oci'

devopsProjectRepositorySetting.DevopsProjectRepositorySetting.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.isTerraformResource"></a>

```typescript
import { devopsProjectRepositorySetting } from 'rhizo-co-terraform-provider-oci'

devopsProjectRepositorySetting.DevopsProjectRepositorySetting.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.generateConfigForImport"></a>

```typescript
import { devopsProjectRepositorySetting } from 'rhizo-co-terraform-provider-oci'

devopsProjectRepositorySetting.DevopsProjectRepositorySetting.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DevopsProjectRepositorySetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DevopsProjectRepositorySetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DevopsProjectRepositorySetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DevopsProjectRepositorySetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.approvalRules">approvalRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference">DevopsProjectRepositorySettingApprovalRulesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.mergeSettings">mergeSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference">DevopsProjectRepositorySettingMergeSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference">DevopsProjectRepositorySettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.approvalRulesInput">approvalRulesInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules">DevopsProjectRepositorySettingApprovalRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.mergeSettingsInput">mergeSettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings">DevopsProjectRepositorySettingMergeSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts">DevopsProjectRepositorySettingTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `approvalRules`<sup>Required</sup> <a name="approvalRules" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.approvalRules"></a>

```typescript
public readonly approvalRules: DevopsProjectRepositorySettingApprovalRulesOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference">DevopsProjectRepositorySettingApprovalRulesOutputReference</a>

---

##### `mergeSettings`<sup>Required</sup> <a name="mergeSettings" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.mergeSettings"></a>

```typescript
public readonly mergeSettings: DevopsProjectRepositorySettingMergeSettingsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference">DevopsProjectRepositorySettingMergeSettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.timeouts"></a>

```typescript
public readonly timeouts: DevopsProjectRepositorySettingTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference">DevopsProjectRepositorySettingTimeoutsOutputReference</a>

---

##### `approvalRulesInput`<sup>Optional</sup> <a name="approvalRulesInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.approvalRulesInput"></a>

```typescript
public readonly approvalRulesInput: DevopsProjectRepositorySettingApprovalRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules">DevopsProjectRepositorySettingApprovalRules</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mergeSettingsInput`<sup>Optional</sup> <a name="mergeSettingsInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.mergeSettingsInput"></a>

```typescript
public readonly mergeSettingsInput: DevopsProjectRepositorySettingMergeSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings">DevopsProjectRepositorySettingMergeSettings</a>

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DevopsProjectRepositorySettingTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts">DevopsProjectRepositorySettingTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsProjectRepositorySettingApprovalRules <a name="DevopsProjectRepositorySettingApprovalRules" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules.Initializer"></a>

```typescript
import { devopsProjectRepositorySetting } from 'rhizo-co-terraform-provider-oci'

const devopsProjectRepositorySettingApprovalRules: devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules.property.items">items</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems">DevopsProjectRepositorySettingApprovalRulesItems</a>[]</code> | items block. |

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules.property.items"></a>

```typescript
public readonly items: IResolvable | DevopsProjectRepositorySettingApprovalRulesItems[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems">DevopsProjectRepositorySettingApprovalRulesItems</a>[]

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#items DevopsProjectRepositorySetting#items}

---

### DevopsProjectRepositorySettingApprovalRulesItems <a name="DevopsProjectRepositorySettingApprovalRulesItems" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems.Initializer"></a>

```typescript
import { devopsProjectRepositorySetting } from 'rhizo-co-terraform-provider-oci'

const devopsProjectRepositorySettingApprovalRulesItems: devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems.property.minApprovalsCount">minApprovalsCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#min_approvals_count DevopsProjectRepositorySetting#min_approvals_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#name DevopsProjectRepositorySetting#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems.property.destinationBranch">destinationBranch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#destination_branch DevopsProjectRepositorySetting#destination_branch}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems.property.reviewers">reviewers</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewers">DevopsProjectRepositorySettingApprovalRulesItemsReviewers</a>[]</code> | reviewers block. |

---

##### `minApprovalsCount`<sup>Required</sup> <a name="minApprovalsCount" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems.property.minApprovalsCount"></a>

```typescript
public readonly minApprovalsCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#min_approvals_count DevopsProjectRepositorySetting#min_approvals_count}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#name DevopsProjectRepositorySetting#name}.

---

##### `destinationBranch`<sup>Optional</sup> <a name="destinationBranch" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems.property.destinationBranch"></a>

```typescript
public readonly destinationBranch: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#destination_branch DevopsProjectRepositorySetting#destination_branch}.

---

##### `reviewers`<sup>Optional</sup> <a name="reviewers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems.property.reviewers"></a>

```typescript
public readonly reviewers: IResolvable | DevopsProjectRepositorySettingApprovalRulesItemsReviewers[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewers">DevopsProjectRepositorySettingApprovalRulesItemsReviewers</a>[]

reviewers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#reviewers DevopsProjectRepositorySetting#reviewers}

---

### DevopsProjectRepositorySettingApprovalRulesItemsReviewers <a name="DevopsProjectRepositorySettingApprovalRulesItemsReviewers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewers.Initializer"></a>

```typescript
import { devopsProjectRepositorySetting } from 'rhizo-co-terraform-provider-oci'

const devopsProjectRepositorySettingApprovalRulesItemsReviewers: devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewers.property.principalId">principalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#principal_id DevopsProjectRepositorySetting#principal_id}. |

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewers.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#principal_id DevopsProjectRepositorySetting#principal_id}.

---

### DevopsProjectRepositorySettingConfig <a name="DevopsProjectRepositorySettingConfig" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.Initializer"></a>

```typescript
import { devopsProjectRepositorySetting } from 'rhizo-co-terraform-provider-oci'

const devopsProjectRepositorySettingConfig: devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#project_id DevopsProjectRepositorySetting#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.approvalRules">approvalRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules">DevopsProjectRepositorySettingApprovalRules</a></code> | approval_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#id DevopsProjectRepositorySetting#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.mergeSettings">mergeSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings">DevopsProjectRepositorySettingMergeSettings</a></code> | merge_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts">DevopsProjectRepositorySettingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#project_id DevopsProjectRepositorySetting#project_id}.

---

##### `approvalRules`<sup>Optional</sup> <a name="approvalRules" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.approvalRules"></a>

```typescript
public readonly approvalRules: DevopsProjectRepositorySettingApprovalRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules">DevopsProjectRepositorySettingApprovalRules</a>

approval_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#approval_rules DevopsProjectRepositorySetting#approval_rules}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#id DevopsProjectRepositorySetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mergeSettings`<sup>Optional</sup> <a name="mergeSettings" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.mergeSettings"></a>

```typescript
public readonly mergeSettings: DevopsProjectRepositorySettingMergeSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings">DevopsProjectRepositorySettingMergeSettings</a>

merge_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#merge_settings DevopsProjectRepositorySetting#merge_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DevopsProjectRepositorySettingTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts">DevopsProjectRepositorySettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#timeouts DevopsProjectRepositorySetting#timeouts}

---

### DevopsProjectRepositorySettingMergeSettings <a name="DevopsProjectRepositorySettingMergeSettings" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings.Initializer"></a>

```typescript
import { devopsProjectRepositorySetting } from 'rhizo-co-terraform-provider-oci'

const devopsProjectRepositorySettingMergeSettings: devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings.property.allowedMergeStrategies">allowedMergeStrategies</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#allowed_merge_strategies DevopsProjectRepositorySetting#allowed_merge_strategies}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings.property.defaultMergeStrategy">defaultMergeStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#default_merge_strategy DevopsProjectRepositorySetting#default_merge_strategy}. |

---

##### `allowedMergeStrategies`<sup>Required</sup> <a name="allowedMergeStrategies" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings.property.allowedMergeStrategies"></a>

```typescript
public readonly allowedMergeStrategies: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#allowed_merge_strategies DevopsProjectRepositorySetting#allowed_merge_strategies}.

---

##### `defaultMergeStrategy`<sup>Required</sup> <a name="defaultMergeStrategy" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings.property.defaultMergeStrategy"></a>

```typescript
public readonly defaultMergeStrategy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#default_merge_strategy DevopsProjectRepositorySetting#default_merge_strategy}.

---

### DevopsProjectRepositorySettingTimeouts <a name="DevopsProjectRepositorySettingTimeouts" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts.Initializer"></a>

```typescript
import { devopsProjectRepositorySetting } from 'rhizo-co-terraform-provider-oci'

const devopsProjectRepositorySettingTimeouts: devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#create DevopsProjectRepositorySetting#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#delete DevopsProjectRepositorySetting#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#update DevopsProjectRepositorySetting#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#create DevopsProjectRepositorySetting#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#delete DevopsProjectRepositorySetting#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#update DevopsProjectRepositorySetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsProjectRepositorySettingApprovalRulesItemsList <a name="DevopsProjectRepositorySettingApprovalRulesItemsList" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.Initializer"></a>

```typescript
import { devopsProjectRepositorySetting } from 'rhizo-co-terraform-provider-oci'

new devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.get"></a>

```typescript
public get(index: number): DevopsProjectRepositorySettingApprovalRulesItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems">DevopsProjectRepositorySettingApprovalRulesItems</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsProjectRepositorySettingApprovalRulesItems[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems">DevopsProjectRepositorySettingApprovalRulesItems</a>[]

---


### DevopsProjectRepositorySettingApprovalRulesItemsOutputReference <a name="DevopsProjectRepositorySettingApprovalRulesItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.Initializer"></a>

```typescript
import { devopsProjectRepositorySetting } from 'rhizo-co-terraform-provider-oci'

new devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.putReviewers">putReviewers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.resetDestinationBranch">resetDestinationBranch</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.resetReviewers">resetReviewers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putReviewers` <a name="putReviewers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.putReviewers"></a>

```typescript
public putReviewers(value: IResolvable | DevopsProjectRepositorySettingApprovalRulesItemsReviewers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.putReviewers.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewers">DevopsProjectRepositorySettingApprovalRulesItemsReviewers</a>[]

---

##### `resetDestinationBranch` <a name="resetDestinationBranch" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.resetDestinationBranch"></a>

```typescript
public resetDestinationBranch(): void
```

##### `resetReviewers` <a name="resetReviewers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.resetReviewers"></a>

```typescript
public resetReviewers(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.reviewers">reviewers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList">DevopsProjectRepositorySettingApprovalRulesItemsReviewersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.destinationBranchInput">destinationBranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.minApprovalsCountInput">minApprovalsCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.reviewersInput">reviewersInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewers">DevopsProjectRepositorySettingApprovalRulesItemsReviewers</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.destinationBranch">destinationBranch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.minApprovalsCount">minApprovalsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems">DevopsProjectRepositorySettingApprovalRulesItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `reviewers`<sup>Required</sup> <a name="reviewers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.reviewers"></a>

```typescript
public readonly reviewers: DevopsProjectRepositorySettingApprovalRulesItemsReviewersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList">DevopsProjectRepositorySettingApprovalRulesItemsReviewersList</a>

---

##### `destinationBranchInput`<sup>Optional</sup> <a name="destinationBranchInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.destinationBranchInput"></a>

```typescript
public readonly destinationBranchInput: string;
```

- *Type:* string

---

##### `minApprovalsCountInput`<sup>Optional</sup> <a name="minApprovalsCountInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.minApprovalsCountInput"></a>

```typescript
public readonly minApprovalsCountInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `reviewersInput`<sup>Optional</sup> <a name="reviewersInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.reviewersInput"></a>

```typescript
public readonly reviewersInput: IResolvable | DevopsProjectRepositorySettingApprovalRulesItemsReviewers[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewers">DevopsProjectRepositorySettingApprovalRulesItemsReviewers</a>[]

---

##### `destinationBranch`<sup>Required</sup> <a name="destinationBranch" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.destinationBranch"></a>

```typescript
public readonly destinationBranch: string;
```

- *Type:* string

---

##### `minApprovalsCount`<sup>Required</sup> <a name="minApprovalsCount" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.minApprovalsCount"></a>

```typescript
public readonly minApprovalsCount: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsProjectRepositorySettingApprovalRulesItems;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems">DevopsProjectRepositorySettingApprovalRulesItems</a>

---


### DevopsProjectRepositorySettingApprovalRulesItemsReviewersList <a name="DevopsProjectRepositorySettingApprovalRulesItemsReviewersList" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.Initializer"></a>

```typescript
import { devopsProjectRepositorySetting } from 'rhizo-co-terraform-provider-oci'

new devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.get"></a>

```typescript
public get(index: number): DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewers">DevopsProjectRepositorySettingApprovalRulesItemsReviewers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsProjectRepositorySettingApprovalRulesItemsReviewers[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewers">DevopsProjectRepositorySettingApprovalRulesItemsReviewers</a>[]

---


### DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference <a name="DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer"></a>

```typescript
import { devopsProjectRepositorySetting } from 'rhizo-co-terraform-provider-oci'

new devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalName">principalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalState">principalState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalType">principalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalIdInput">principalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewers">DevopsProjectRepositorySettingApprovalRulesItemsReviewers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalName`<sup>Required</sup> <a name="principalName" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalName"></a>

```typescript
public readonly principalName: string;
```

- *Type:* string

---

##### `principalState`<sup>Required</sup> <a name="principalState" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalState"></a>

```typescript
public readonly principalState: string;
```

- *Type:* string

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalType"></a>

```typescript
public readonly principalType: string;
```

- *Type:* string

---

##### `principalIdInput`<sup>Optional</sup> <a name="principalIdInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalIdInput"></a>

```typescript
public readonly principalIdInput: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsProjectRepositorySettingApprovalRulesItemsReviewers;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewers">DevopsProjectRepositorySettingApprovalRulesItemsReviewers</a>

---


### DevopsProjectRepositorySettingApprovalRulesOutputReference <a name="DevopsProjectRepositorySettingApprovalRulesOutputReference" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.Initializer"></a>

```typescript
import { devopsProjectRepositorySetting } from 'rhizo-co-terraform-provider-oci'

new devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.putItems">putItems</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putItems` <a name="putItems" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.putItems"></a>

```typescript
public putItems(value: IResolvable | DevopsProjectRepositorySettingApprovalRulesItems[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.putItems.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems">DevopsProjectRepositorySettingApprovalRulesItems</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList">DevopsProjectRepositorySettingApprovalRulesItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.property.itemsInput">itemsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems">DevopsProjectRepositorySettingApprovalRulesItems</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules">DevopsProjectRepositorySettingApprovalRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.property.items"></a>

```typescript
public readonly items: DevopsProjectRepositorySettingApprovalRulesItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList">DevopsProjectRepositorySettingApprovalRulesItemsList</a>

---

##### `itemsInput`<sup>Optional</sup> <a name="itemsInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.property.itemsInput"></a>

```typescript
public readonly itemsInput: IResolvable | DevopsProjectRepositorySettingApprovalRulesItems[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems">DevopsProjectRepositorySettingApprovalRulesItems</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevopsProjectRepositorySettingApprovalRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules">DevopsProjectRepositorySettingApprovalRules</a>

---


### DevopsProjectRepositorySettingMergeSettingsOutputReference <a name="DevopsProjectRepositorySettingMergeSettingsOutputReference" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.Initializer"></a>

```typescript
import { devopsProjectRepositorySetting } from 'rhizo-co-terraform-provider-oci'

new devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.allowedMergeStrategiesInput">allowedMergeStrategiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.defaultMergeStrategyInput">defaultMergeStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.allowedMergeStrategies">allowedMergeStrategies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.defaultMergeStrategy">defaultMergeStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings">DevopsProjectRepositorySettingMergeSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedMergeStrategiesInput`<sup>Optional</sup> <a name="allowedMergeStrategiesInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.allowedMergeStrategiesInput"></a>

```typescript
public readonly allowedMergeStrategiesInput: string[];
```

- *Type:* string[]

---

##### `defaultMergeStrategyInput`<sup>Optional</sup> <a name="defaultMergeStrategyInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.defaultMergeStrategyInput"></a>

```typescript
public readonly defaultMergeStrategyInput: string;
```

- *Type:* string

---

##### `allowedMergeStrategies`<sup>Required</sup> <a name="allowedMergeStrategies" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.allowedMergeStrategies"></a>

```typescript
public readonly allowedMergeStrategies: string[];
```

- *Type:* string[]

---

##### `defaultMergeStrategy`<sup>Required</sup> <a name="defaultMergeStrategy" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.defaultMergeStrategy"></a>

```typescript
public readonly defaultMergeStrategy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevopsProjectRepositorySettingMergeSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings">DevopsProjectRepositorySettingMergeSettings</a>

---


### DevopsProjectRepositorySettingTimeoutsOutputReference <a name="DevopsProjectRepositorySettingTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.Initializer"></a>

```typescript
import { devopsProjectRepositorySetting } from 'rhizo-co-terraform-provider-oci'

new devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts">DevopsProjectRepositorySettingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsProjectRepositorySettingTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts">DevopsProjectRepositorySettingTimeouts</a>

---



