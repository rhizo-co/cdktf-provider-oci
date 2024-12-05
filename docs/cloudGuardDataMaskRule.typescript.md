# `cloudGuardDataMaskRule` Submodule <a name="`cloudGuardDataMaskRule` Submodule" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudGuardDataMaskRule <a name="CloudGuardDataMaskRule" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule oci_cloud_guard_data_mask_rule}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer"></a>

```typescript
import { cloudGuardDataMaskRule } from 'rhizo-co-terraform-provider-oci'

new cloudGuardDataMaskRule.CloudGuardDataMaskRule(scope: Construct, id: string, config: CloudGuardDataMaskRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig">CloudGuardDataMaskRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig">CloudGuardDataMaskRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.putTargetSelected">putTargetSelected</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.resetDataMaskRuleStatus">resetDataMaskRuleStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTargetSelected` <a name="putTargetSelected" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.putTargetSelected"></a>

```typescript
public putTargetSelected(value: CloudGuardDataMaskRuleTargetSelected): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.putTargetSelected.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelected">CloudGuardDataMaskRuleTargetSelected</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.putTimeouts"></a>

```typescript
public putTimeouts(value: CloudGuardDataMaskRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeouts">CloudGuardDataMaskRuleTimeouts</a>

---

##### `resetDataMaskRuleStatus` <a name="resetDataMaskRuleStatus" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.resetDataMaskRuleStatus"></a>

```typescript
public resetDataMaskRuleStatus(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudGuardDataMaskRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.isConstruct"></a>

```typescript
import { cloudGuardDataMaskRule } from 'rhizo-co-terraform-provider-oci'

cloudGuardDataMaskRule.CloudGuardDataMaskRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.isTerraformElement"></a>

```typescript
import { cloudGuardDataMaskRule } from 'rhizo-co-terraform-provider-oci'

cloudGuardDataMaskRule.CloudGuardDataMaskRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.isTerraformResource"></a>

```typescript
import { cloudGuardDataMaskRule } from 'rhizo-co-terraform-provider-oci'

cloudGuardDataMaskRule.CloudGuardDataMaskRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.generateConfigForImport"></a>

```typescript
import { cloudGuardDataMaskRule } from 'rhizo-co-terraform-provider-oci'

cloudGuardDataMaskRule.CloudGuardDataMaskRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CloudGuardDataMaskRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudGuardDataMaskRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudGuardDataMaskRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudGuardDataMaskRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.lifecyleDetails">lifecyleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.targetSelected">targetSelected</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference">CloudGuardDataMaskRuleTargetSelectedOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference">CloudGuardDataMaskRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.dataMaskCategoriesInput">dataMaskCategoriesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.dataMaskRuleStatusInput">dataMaskRuleStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.iamGroupIdInput">iamGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.targetSelectedInput">targetSelectedInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelected">CloudGuardDataMaskRuleTargetSelected</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeouts">CloudGuardDataMaskRuleTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.dataMaskCategories">dataMaskCategories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.dataMaskRuleStatus">dataMaskRuleStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.iamGroupId">iamGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `lifecyleDetails`<sup>Required</sup> <a name="lifecyleDetails" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.lifecyleDetails"></a>

```typescript
public readonly lifecyleDetails: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `targetSelected`<sup>Required</sup> <a name="targetSelected" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.targetSelected"></a>

```typescript
public readonly targetSelected: CloudGuardDataMaskRuleTargetSelectedOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference">CloudGuardDataMaskRuleTargetSelectedOutputReference</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.timeouts"></a>

```typescript
public readonly timeouts: CloudGuardDataMaskRuleTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference">CloudGuardDataMaskRuleTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `dataMaskCategoriesInput`<sup>Optional</sup> <a name="dataMaskCategoriesInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.dataMaskCategoriesInput"></a>

```typescript
public readonly dataMaskCategoriesInput: string[];
```

- *Type:* string[]

---

##### `dataMaskRuleStatusInput`<sup>Optional</sup> <a name="dataMaskRuleStatusInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.dataMaskRuleStatusInput"></a>

```typescript
public readonly dataMaskRuleStatusInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `iamGroupIdInput`<sup>Optional</sup> <a name="iamGroupIdInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.iamGroupIdInput"></a>

```typescript
public readonly iamGroupIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `targetSelectedInput`<sup>Optional</sup> <a name="targetSelectedInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.targetSelectedInput"></a>

```typescript
public readonly targetSelectedInput: CloudGuardDataMaskRuleTargetSelected;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelected">CloudGuardDataMaskRuleTargetSelected</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CloudGuardDataMaskRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeouts">CloudGuardDataMaskRuleTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `dataMaskCategories`<sup>Required</sup> <a name="dataMaskCategories" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.dataMaskCategories"></a>

```typescript
public readonly dataMaskCategories: string[];
```

- *Type:* string[]

---

##### `dataMaskRuleStatus`<sup>Required</sup> <a name="dataMaskRuleStatus" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.dataMaskRuleStatus"></a>

```typescript
public readonly dataMaskRuleStatus: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `iamGroupId`<sup>Required</sup> <a name="iamGroupId" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.iamGroupId"></a>

```typescript
public readonly iamGroupId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudGuardDataMaskRuleConfig <a name="CloudGuardDataMaskRuleConfig" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.Initializer"></a>

```typescript
import { cloudGuardDataMaskRule } from 'rhizo-co-terraform-provider-oci'

const cloudGuardDataMaskRuleConfig: cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#compartment_id CloudGuardDataMaskRule#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.dataMaskCategories">dataMaskCategories</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#data_mask_categories CloudGuardDataMaskRule#data_mask_categories}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#display_name CloudGuardDataMaskRule#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.iamGroupId">iamGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#iam_group_id CloudGuardDataMaskRule#iam_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.targetSelected">targetSelected</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelected">CloudGuardDataMaskRuleTargetSelected</a></code> | target_selected block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.dataMaskRuleStatus">dataMaskRuleStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#data_mask_rule_status CloudGuardDataMaskRule#data_mask_rule_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#defined_tags CloudGuardDataMaskRule#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#description CloudGuardDataMaskRule#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#freeform_tags CloudGuardDataMaskRule#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#id CloudGuardDataMaskRule#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#state CloudGuardDataMaskRule#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeouts">CloudGuardDataMaskRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#compartment_id CloudGuardDataMaskRule#compartment_id}.

---

##### `dataMaskCategories`<sup>Required</sup> <a name="dataMaskCategories" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.dataMaskCategories"></a>

```typescript
public readonly dataMaskCategories: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#data_mask_categories CloudGuardDataMaskRule#data_mask_categories}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#display_name CloudGuardDataMaskRule#display_name}.

---

##### `iamGroupId`<sup>Required</sup> <a name="iamGroupId" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.iamGroupId"></a>

```typescript
public readonly iamGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#iam_group_id CloudGuardDataMaskRule#iam_group_id}.

---

##### `targetSelected`<sup>Required</sup> <a name="targetSelected" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.targetSelected"></a>

```typescript
public readonly targetSelected: CloudGuardDataMaskRuleTargetSelected;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelected">CloudGuardDataMaskRuleTargetSelected</a>

target_selected block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#target_selected CloudGuardDataMaskRule#target_selected}

---

##### `dataMaskRuleStatus`<sup>Optional</sup> <a name="dataMaskRuleStatus" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.dataMaskRuleStatus"></a>

```typescript
public readonly dataMaskRuleStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#data_mask_rule_status CloudGuardDataMaskRule#data_mask_rule_status}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#defined_tags CloudGuardDataMaskRule#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#description CloudGuardDataMaskRule#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#freeform_tags CloudGuardDataMaskRule#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#id CloudGuardDataMaskRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#state CloudGuardDataMaskRule#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CloudGuardDataMaskRuleTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeouts">CloudGuardDataMaskRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#timeouts CloudGuardDataMaskRule#timeouts}

---

### CloudGuardDataMaskRuleTargetSelected <a name="CloudGuardDataMaskRuleTargetSelected" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelected"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelected.Initializer"></a>

```typescript
import { cloudGuardDataMaskRule } from 'rhizo-co-terraform-provider-oci'

const cloudGuardDataMaskRuleTargetSelected: cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelected = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelected.property.kind">kind</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#kind CloudGuardDataMaskRule#kind}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelected.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#values CloudGuardDataMaskRule#values}. |

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelected.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#kind CloudGuardDataMaskRule#kind}.

---

##### `values`<sup>Optional</sup> <a name="values" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelected.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#values CloudGuardDataMaskRule#values}.

---

### CloudGuardDataMaskRuleTimeouts <a name="CloudGuardDataMaskRuleTimeouts" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeouts.Initializer"></a>

```typescript
import { cloudGuardDataMaskRule } from 'rhizo-co-terraform-provider-oci'

const cloudGuardDataMaskRuleTimeouts: cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#create CloudGuardDataMaskRule#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#delete CloudGuardDataMaskRule#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#update CloudGuardDataMaskRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#create CloudGuardDataMaskRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#delete CloudGuardDataMaskRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#update CloudGuardDataMaskRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudGuardDataMaskRuleTargetSelectedOutputReference <a name="CloudGuardDataMaskRuleTargetSelectedOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.Initializer"></a>

```typescript
import { cloudGuardDataMaskRule } from 'rhizo-co-terraform-provider-oci'

new cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValues` <a name="resetValues" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.property.kindInput">kindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelected">CloudGuardDataMaskRuleTargetSelected</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.property.kindInput"></a>

```typescript
public readonly kindInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudGuardDataMaskRuleTargetSelected;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelected">CloudGuardDataMaskRuleTargetSelected</a>

---


### CloudGuardDataMaskRuleTimeoutsOutputReference <a name="CloudGuardDataMaskRuleTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { cloudGuardDataMaskRule } from 'rhizo-co-terraform-provider-oci'

new cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeouts">CloudGuardDataMaskRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudGuardDataMaskRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeouts">CloudGuardDataMaskRuleTimeouts</a>

---



