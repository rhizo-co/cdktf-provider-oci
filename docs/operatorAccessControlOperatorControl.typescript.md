# `operatorAccessControlOperatorControl` Submodule <a name="`operatorAccessControlOperatorControl` Submodule" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OperatorAccessControlOperatorControl <a name="OperatorAccessControlOperatorControl" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control oci_operator_access_control_operator_control}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer"></a>

```typescript
import { operatorAccessControlOperatorControl } from 'rhizo-co-terraform-provider-oci'

new operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl(scope: Construct, id: string, config: OperatorAccessControlOperatorControlConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig">OperatorAccessControlOperatorControlConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig">OperatorAccessControlOperatorControlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetApproversList">resetApproversList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetEmailIdList">resetEmailIdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetNumberOfApprovers">resetNumberOfApprovers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetPreApprovedOpActionList">resetPreApprovedOpActionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetSystemMessage">resetSystemMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.putTimeouts"></a>

```typescript
public putTimeouts(value: OperatorAccessControlOperatorControlTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts">OperatorAccessControlOperatorControlTimeouts</a>

---

##### `resetApproversList` <a name="resetApproversList" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetApproversList"></a>

```typescript
public resetApproversList(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEmailIdList` <a name="resetEmailIdList" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetEmailIdList"></a>

```typescript
public resetEmailIdList(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNumberOfApprovers` <a name="resetNumberOfApprovers" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetNumberOfApprovers"></a>

```typescript
public resetNumberOfApprovers(): void
```

##### `resetPreApprovedOpActionList` <a name="resetPreApprovedOpActionList" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetPreApprovedOpActionList"></a>

```typescript
public resetPreApprovedOpActionList(): void
```

##### `resetSystemMessage` <a name="resetSystemMessage" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetSystemMessage"></a>

```typescript
public resetSystemMessage(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OperatorAccessControlOperatorControl resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.isConstruct"></a>

```typescript
import { operatorAccessControlOperatorControl } from 'rhizo-co-terraform-provider-oci'

operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.isTerraformElement"></a>

```typescript
import { operatorAccessControlOperatorControl } from 'rhizo-co-terraform-provider-oci'

operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.isTerraformResource"></a>

```typescript
import { operatorAccessControlOperatorControl } from 'rhizo-co-terraform-provider-oci'

operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.generateConfigForImport"></a>

```typescript
import { operatorAccessControlOperatorControl } from 'rhizo-co-terraform-provider-oci'

operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OperatorAccessControlOperatorControl resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OperatorAccessControlOperatorControl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OperatorAccessControlOperatorControl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OperatorAccessControlOperatorControl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.approvalRequiredOpActionList">approvalRequiredOpActionList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.isDefaultOperatorControl">isDefaultOperatorControl</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.lastModifiedInfo">lastModifiedInfo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.timeOfCreation">timeOfCreation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.timeOfDeletion">timeOfDeletion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.timeOfModification">timeOfModification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference">OperatorAccessControlOperatorControlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.approverGroupsListInput">approverGroupsListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.approversListInput">approversListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.emailIdListInput">emailIdListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.isFullyPreApprovedInput">isFullyPreApprovedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.numberOfApproversInput">numberOfApproversInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.operatorControlNameInput">operatorControlNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.preApprovedOpActionListInput">preApprovedOpActionListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.systemMessageInput">systemMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts">OperatorAccessControlOperatorControlTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.approverGroupsList">approverGroupsList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.approversList">approversList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.emailIdList">emailIdList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.isFullyPreApproved">isFullyPreApproved</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.numberOfApprovers">numberOfApprovers</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.operatorControlName">operatorControlName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.preApprovedOpActionList">preApprovedOpActionList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.systemMessage">systemMessage</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `approvalRequiredOpActionList`<sup>Required</sup> <a name="approvalRequiredOpActionList" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.approvalRequiredOpActionList"></a>

```typescript
public readonly approvalRequiredOpActionList: string[];
```

- *Type:* string[]

---

##### `isDefaultOperatorControl`<sup>Required</sup> <a name="isDefaultOperatorControl" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.isDefaultOperatorControl"></a>

```typescript
public readonly isDefaultOperatorControl: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lastModifiedInfo`<sup>Required</sup> <a name="lastModifiedInfo" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.lastModifiedInfo"></a>

```typescript
public readonly lastModifiedInfo: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeOfCreation`<sup>Required</sup> <a name="timeOfCreation" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.timeOfCreation"></a>

```typescript
public readonly timeOfCreation: string;
```

- *Type:* string

---

##### `timeOfDeletion`<sup>Required</sup> <a name="timeOfDeletion" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.timeOfDeletion"></a>

```typescript
public readonly timeOfDeletion: string;
```

- *Type:* string

---

##### `timeOfModification`<sup>Required</sup> <a name="timeOfModification" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.timeOfModification"></a>

```typescript
public readonly timeOfModification: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.timeouts"></a>

```typescript
public readonly timeouts: OperatorAccessControlOperatorControlTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference">OperatorAccessControlOperatorControlTimeoutsOutputReference</a>

---

##### `approverGroupsListInput`<sup>Optional</sup> <a name="approverGroupsListInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.approverGroupsListInput"></a>

```typescript
public readonly approverGroupsListInput: string[];
```

- *Type:* string[]

---

##### `approversListInput`<sup>Optional</sup> <a name="approversListInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.approversListInput"></a>

```typescript
public readonly approversListInput: string[];
```

- *Type:* string[]

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `emailIdListInput`<sup>Optional</sup> <a name="emailIdListInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.emailIdListInput"></a>

```typescript
public readonly emailIdListInput: string[];
```

- *Type:* string[]

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isFullyPreApprovedInput`<sup>Optional</sup> <a name="isFullyPreApprovedInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.isFullyPreApprovedInput"></a>

```typescript
public readonly isFullyPreApprovedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `numberOfApproversInput`<sup>Optional</sup> <a name="numberOfApproversInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.numberOfApproversInput"></a>

```typescript
public readonly numberOfApproversInput: number;
```

- *Type:* number

---

##### `operatorControlNameInput`<sup>Optional</sup> <a name="operatorControlNameInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.operatorControlNameInput"></a>

```typescript
public readonly operatorControlNameInput: string;
```

- *Type:* string

---

##### `preApprovedOpActionListInput`<sup>Optional</sup> <a name="preApprovedOpActionListInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.preApprovedOpActionListInput"></a>

```typescript
public readonly preApprovedOpActionListInput: string[];
```

- *Type:* string[]

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `systemMessageInput`<sup>Optional</sup> <a name="systemMessageInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.systemMessageInput"></a>

```typescript
public readonly systemMessageInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OperatorAccessControlOperatorControlTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts">OperatorAccessControlOperatorControlTimeouts</a>

---

##### `approverGroupsList`<sup>Required</sup> <a name="approverGroupsList" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.approverGroupsList"></a>

```typescript
public readonly approverGroupsList: string[];
```

- *Type:* string[]

---

##### `approversList`<sup>Required</sup> <a name="approversList" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.approversList"></a>

```typescript
public readonly approversList: string[];
```

- *Type:* string[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `emailIdList`<sup>Required</sup> <a name="emailIdList" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.emailIdList"></a>

```typescript
public readonly emailIdList: string[];
```

- *Type:* string[]

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isFullyPreApproved`<sup>Required</sup> <a name="isFullyPreApproved" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.isFullyPreApproved"></a>

```typescript
public readonly isFullyPreApproved: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `numberOfApprovers`<sup>Required</sup> <a name="numberOfApprovers" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.numberOfApprovers"></a>

```typescript
public readonly numberOfApprovers: number;
```

- *Type:* number

---

##### `operatorControlName`<sup>Required</sup> <a name="operatorControlName" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.operatorControlName"></a>

```typescript
public readonly operatorControlName: string;
```

- *Type:* string

---

##### `preApprovedOpActionList`<sup>Required</sup> <a name="preApprovedOpActionList" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.preApprovedOpActionList"></a>

```typescript
public readonly preApprovedOpActionList: string[];
```

- *Type:* string[]

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `systemMessage`<sup>Required</sup> <a name="systemMessage" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.systemMessage"></a>

```typescript
public readonly systemMessage: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OperatorAccessControlOperatorControlConfig <a name="OperatorAccessControlOperatorControlConfig" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.Initializer"></a>

```typescript
import { operatorAccessControlOperatorControl } from 'rhizo-co-terraform-provider-oci'

const operatorAccessControlOperatorControlConfig: operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.approverGroupsList">approverGroupsList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#approver_groups_list OperatorAccessControlOperatorControl#approver_groups_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#compartment_id OperatorAccessControlOperatorControl#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.isFullyPreApproved">isFullyPreApproved</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#is_fully_pre_approved OperatorAccessControlOperatorControl#is_fully_pre_approved}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.operatorControlName">operatorControlName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#operator_control_name OperatorAccessControlOperatorControl#operator_control_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.resourceType">resourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#resource_type OperatorAccessControlOperatorControl#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.approversList">approversList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#approvers_list OperatorAccessControlOperatorControl#approvers_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#defined_tags OperatorAccessControlOperatorControl#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#description OperatorAccessControlOperatorControl#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.emailIdList">emailIdList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#email_id_list OperatorAccessControlOperatorControl#email_id_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#freeform_tags OperatorAccessControlOperatorControl#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#id OperatorAccessControlOperatorControl#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.numberOfApprovers">numberOfApprovers</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#number_of_approvers OperatorAccessControlOperatorControl#number_of_approvers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.preApprovedOpActionList">preApprovedOpActionList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#pre_approved_op_action_list OperatorAccessControlOperatorControl#pre_approved_op_action_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.systemMessage">systemMessage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#system_message OperatorAccessControlOperatorControl#system_message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts">OperatorAccessControlOperatorControlTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `approverGroupsList`<sup>Required</sup> <a name="approverGroupsList" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.approverGroupsList"></a>

```typescript
public readonly approverGroupsList: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#approver_groups_list OperatorAccessControlOperatorControl#approver_groups_list}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#compartment_id OperatorAccessControlOperatorControl#compartment_id}.

---

##### `isFullyPreApproved`<sup>Required</sup> <a name="isFullyPreApproved" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.isFullyPreApproved"></a>

```typescript
public readonly isFullyPreApproved: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#is_fully_pre_approved OperatorAccessControlOperatorControl#is_fully_pre_approved}.

---

##### `operatorControlName`<sup>Required</sup> <a name="operatorControlName" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.operatorControlName"></a>

```typescript
public readonly operatorControlName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#operator_control_name OperatorAccessControlOperatorControl#operator_control_name}.

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#resource_type OperatorAccessControlOperatorControl#resource_type}.

---

##### `approversList`<sup>Optional</sup> <a name="approversList" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.approversList"></a>

```typescript
public readonly approversList: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#approvers_list OperatorAccessControlOperatorControl#approvers_list}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#defined_tags OperatorAccessControlOperatorControl#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#description OperatorAccessControlOperatorControl#description}.

---

##### `emailIdList`<sup>Optional</sup> <a name="emailIdList" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.emailIdList"></a>

```typescript
public readonly emailIdList: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#email_id_list OperatorAccessControlOperatorControl#email_id_list}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#freeform_tags OperatorAccessControlOperatorControl#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#id OperatorAccessControlOperatorControl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `numberOfApprovers`<sup>Optional</sup> <a name="numberOfApprovers" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.numberOfApprovers"></a>

```typescript
public readonly numberOfApprovers: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#number_of_approvers OperatorAccessControlOperatorControl#number_of_approvers}.

---

##### `preApprovedOpActionList`<sup>Optional</sup> <a name="preApprovedOpActionList" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.preApprovedOpActionList"></a>

```typescript
public readonly preApprovedOpActionList: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#pre_approved_op_action_list OperatorAccessControlOperatorControl#pre_approved_op_action_list}.

---

##### `systemMessage`<sup>Optional</sup> <a name="systemMessage" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.systemMessage"></a>

```typescript
public readonly systemMessage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#system_message OperatorAccessControlOperatorControl#system_message}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OperatorAccessControlOperatorControlTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts">OperatorAccessControlOperatorControlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#timeouts OperatorAccessControlOperatorControl#timeouts}

---

### OperatorAccessControlOperatorControlTimeouts <a name="OperatorAccessControlOperatorControlTimeouts" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts.Initializer"></a>

```typescript
import { operatorAccessControlOperatorControl } from 'rhizo-co-terraform-provider-oci'

const operatorAccessControlOperatorControlTimeouts: operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#create OperatorAccessControlOperatorControl#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#delete OperatorAccessControlOperatorControl#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#update OperatorAccessControlOperatorControl#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#create OperatorAccessControlOperatorControl#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#delete OperatorAccessControlOperatorControl#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#update OperatorAccessControlOperatorControl#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OperatorAccessControlOperatorControlTimeoutsOutputReference <a name="OperatorAccessControlOperatorControlTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.Initializer"></a>

```typescript
import { operatorAccessControlOperatorControl } from 'rhizo-co-terraform-provider-oci'

new operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts">OperatorAccessControlOperatorControlTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OperatorAccessControlOperatorControlTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts">OperatorAccessControlOperatorControlTimeouts</a>

---



