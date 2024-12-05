# `delegateAccessControlDelegationControl` Submodule <a name="`delegateAccessControlDelegationControl` Submodule" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DelegateAccessControlDelegationControl <a name="DelegateAccessControlDelegationControl" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control oci_delegate_access_control_delegation_control}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer"></a>

```typescript
import { delegateAccessControlDelegationControl } from 'rhizo-co-terraform-provider-oci'

new delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl(scope: Construct, id: string, config: DelegateAccessControlDelegationControlConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig">DelegateAccessControlDelegationControlConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig">DelegateAccessControlDelegationControlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetIsAutoApproveDuringMaintenance">resetIsAutoApproveDuringMaintenance</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetNumApprovalsRequired">resetNumApprovalsRequired</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetPreApprovedServiceProviderActionNames">resetPreApprovedServiceProviderActionNames</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetVaultId">resetVaultId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetVaultKeyId">resetVaultKeyId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.putTimeouts"></a>

```typescript
public putTimeouts(value: DelegateAccessControlDelegationControlTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts">DelegateAccessControlDelegationControlTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsAutoApproveDuringMaintenance` <a name="resetIsAutoApproveDuringMaintenance" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetIsAutoApproveDuringMaintenance"></a>

```typescript
public resetIsAutoApproveDuringMaintenance(): void
```

##### `resetNumApprovalsRequired` <a name="resetNumApprovalsRequired" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetNumApprovalsRequired"></a>

```typescript
public resetNumApprovalsRequired(): void
```

##### `resetPreApprovedServiceProviderActionNames` <a name="resetPreApprovedServiceProviderActionNames" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetPreApprovedServiceProviderActionNames"></a>

```typescript
public resetPreApprovedServiceProviderActionNames(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVaultId` <a name="resetVaultId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetVaultId"></a>

```typescript
public resetVaultId(): void
```

##### `resetVaultKeyId` <a name="resetVaultKeyId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetVaultKeyId"></a>

```typescript
public resetVaultKeyId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DelegateAccessControlDelegationControl resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.isConstruct"></a>

```typescript
import { delegateAccessControlDelegationControl } from 'rhizo-co-terraform-provider-oci'

delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.isTerraformElement"></a>

```typescript
import { delegateAccessControlDelegationControl } from 'rhizo-co-terraform-provider-oci'

delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.isTerraformResource"></a>

```typescript
import { delegateAccessControlDelegationControl } from 'rhizo-co-terraform-provider-oci'

delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.generateConfigForImport"></a>

```typescript
import { delegateAccessControlDelegationControl } from 'rhizo-co-terraform-provider-oci'

delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DelegateAccessControlDelegationControl resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DelegateAccessControlDelegationControl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DelegateAccessControlDelegationControl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DelegateAccessControlDelegationControl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.lifecycleStateDetails">lifecycleStateDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.timeDeleted">timeDeleted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference">DelegateAccessControlDelegationControlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.delegationSubscriptionIdsInput">delegationSubscriptionIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.isAutoApproveDuringMaintenanceInput">isAutoApproveDuringMaintenanceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.notificationMessageFormatInput">notificationMessageFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.notificationTopicIdInput">notificationTopicIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.numApprovalsRequiredInput">numApprovalsRequiredInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.preApprovedServiceProviderActionNamesInput">preApprovedServiceProviderActionNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.resourceIdsInput">resourceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts">DelegateAccessControlDelegationControlTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.vaultIdInput">vaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.vaultKeyIdInput">vaultKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.delegationSubscriptionIds">delegationSubscriptionIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.isAutoApproveDuringMaintenance">isAutoApproveDuringMaintenance</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.notificationMessageFormat">notificationMessageFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.notificationTopicId">notificationTopicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.numApprovalsRequired">numApprovalsRequired</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.preApprovedServiceProviderActionNames">preApprovedServiceProviderActionNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.resourceIds">resourceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.vaultId">vaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.vaultKeyId">vaultKeyId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `lifecycleStateDetails`<sup>Required</sup> <a name="lifecycleStateDetails" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.lifecycleStateDetails"></a>

```typescript
public readonly lifecycleStateDetails: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeDeleted`<sup>Required</sup> <a name="timeDeleted" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.timeDeleted"></a>

```typescript
public readonly timeDeleted: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.timeouts"></a>

```typescript
public readonly timeouts: DelegateAccessControlDelegationControlTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference">DelegateAccessControlDelegationControlTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `delegationSubscriptionIdsInput`<sup>Optional</sup> <a name="delegationSubscriptionIdsInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.delegationSubscriptionIdsInput"></a>

```typescript
public readonly delegationSubscriptionIdsInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isAutoApproveDuringMaintenanceInput`<sup>Optional</sup> <a name="isAutoApproveDuringMaintenanceInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.isAutoApproveDuringMaintenanceInput"></a>

```typescript
public readonly isAutoApproveDuringMaintenanceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `notificationMessageFormatInput`<sup>Optional</sup> <a name="notificationMessageFormatInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.notificationMessageFormatInput"></a>

```typescript
public readonly notificationMessageFormatInput: string;
```

- *Type:* string

---

##### `notificationTopicIdInput`<sup>Optional</sup> <a name="notificationTopicIdInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.notificationTopicIdInput"></a>

```typescript
public readonly notificationTopicIdInput: string;
```

- *Type:* string

---

##### `numApprovalsRequiredInput`<sup>Optional</sup> <a name="numApprovalsRequiredInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.numApprovalsRequiredInput"></a>

```typescript
public readonly numApprovalsRequiredInput: number;
```

- *Type:* number

---

##### `preApprovedServiceProviderActionNamesInput`<sup>Optional</sup> <a name="preApprovedServiceProviderActionNamesInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.preApprovedServiceProviderActionNamesInput"></a>

```typescript
public readonly preApprovedServiceProviderActionNamesInput: string[];
```

- *Type:* string[]

---

##### `resourceIdsInput`<sup>Optional</sup> <a name="resourceIdsInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.resourceIdsInput"></a>

```typescript
public readonly resourceIdsInput: string[];
```

- *Type:* string[]

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DelegateAccessControlDelegationControlTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts">DelegateAccessControlDelegationControlTimeouts</a>

---

##### `vaultIdInput`<sup>Optional</sup> <a name="vaultIdInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.vaultIdInput"></a>

```typescript
public readonly vaultIdInput: string;
```

- *Type:* string

---

##### `vaultKeyIdInput`<sup>Optional</sup> <a name="vaultKeyIdInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.vaultKeyIdInput"></a>

```typescript
public readonly vaultKeyIdInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `delegationSubscriptionIds`<sup>Required</sup> <a name="delegationSubscriptionIds" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.delegationSubscriptionIds"></a>

```typescript
public readonly delegationSubscriptionIds: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isAutoApproveDuringMaintenance`<sup>Required</sup> <a name="isAutoApproveDuringMaintenance" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.isAutoApproveDuringMaintenance"></a>

```typescript
public readonly isAutoApproveDuringMaintenance: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `notificationMessageFormat`<sup>Required</sup> <a name="notificationMessageFormat" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.notificationMessageFormat"></a>

```typescript
public readonly notificationMessageFormat: string;
```

- *Type:* string

---

##### `notificationTopicId`<sup>Required</sup> <a name="notificationTopicId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.notificationTopicId"></a>

```typescript
public readonly notificationTopicId: string;
```

- *Type:* string

---

##### `numApprovalsRequired`<sup>Required</sup> <a name="numApprovalsRequired" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.numApprovalsRequired"></a>

```typescript
public readonly numApprovalsRequired: number;
```

- *Type:* number

---

##### `preApprovedServiceProviderActionNames`<sup>Required</sup> <a name="preApprovedServiceProviderActionNames" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.preApprovedServiceProviderActionNames"></a>

```typescript
public readonly preApprovedServiceProviderActionNames: string[];
```

- *Type:* string[]

---

##### `resourceIds`<sup>Required</sup> <a name="resourceIds" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.resourceIds"></a>

```typescript
public readonly resourceIds: string[];
```

- *Type:* string[]

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.vaultId"></a>

```typescript
public readonly vaultId: string;
```

- *Type:* string

---

##### `vaultKeyId`<sup>Required</sup> <a name="vaultKeyId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.vaultKeyId"></a>

```typescript
public readonly vaultKeyId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DelegateAccessControlDelegationControlConfig <a name="DelegateAccessControlDelegationControlConfig" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.Initializer"></a>

```typescript
import { delegateAccessControlDelegationControl } from 'rhizo-co-terraform-provider-oci'

const delegateAccessControlDelegationControlConfig: delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#compartment_id DelegateAccessControlDelegationControl#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.delegationSubscriptionIds">delegationSubscriptionIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#delegation_subscription_ids DelegateAccessControlDelegationControl#delegation_subscription_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#display_name DelegateAccessControlDelegationControl#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.notificationMessageFormat">notificationMessageFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#notification_message_format DelegateAccessControlDelegationControl#notification_message_format}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.notificationTopicId">notificationTopicId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#notification_topic_id DelegateAccessControlDelegationControl#notification_topic_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.resourceIds">resourceIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#resource_ids DelegateAccessControlDelegationControl#resource_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.resourceType">resourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#resource_type DelegateAccessControlDelegationControl#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#defined_tags DelegateAccessControlDelegationControl#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#description DelegateAccessControlDelegationControl#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#freeform_tags DelegateAccessControlDelegationControl#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#id DelegateAccessControlDelegationControl#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.isAutoApproveDuringMaintenance">isAutoApproveDuringMaintenance</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#is_auto_approve_during_maintenance DelegateAccessControlDelegationControl#is_auto_approve_during_maintenance}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.numApprovalsRequired">numApprovalsRequired</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#num_approvals_required DelegateAccessControlDelegationControl#num_approvals_required}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.preApprovedServiceProviderActionNames">preApprovedServiceProviderActionNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#pre_approved_service_provider_action_names DelegateAccessControlDelegationControl#pre_approved_service_provider_action_names}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts">DelegateAccessControlDelegationControlTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.vaultId">vaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#vault_id DelegateAccessControlDelegationControl#vault_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.vaultKeyId">vaultKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#vault_key_id DelegateAccessControlDelegationControl#vault_key_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#compartment_id DelegateAccessControlDelegationControl#compartment_id}.

---

##### `delegationSubscriptionIds`<sup>Required</sup> <a name="delegationSubscriptionIds" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.delegationSubscriptionIds"></a>

```typescript
public readonly delegationSubscriptionIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#delegation_subscription_ids DelegateAccessControlDelegationControl#delegation_subscription_ids}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#display_name DelegateAccessControlDelegationControl#display_name}.

---

##### `notificationMessageFormat`<sup>Required</sup> <a name="notificationMessageFormat" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.notificationMessageFormat"></a>

```typescript
public readonly notificationMessageFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#notification_message_format DelegateAccessControlDelegationControl#notification_message_format}.

---

##### `notificationTopicId`<sup>Required</sup> <a name="notificationTopicId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.notificationTopicId"></a>

```typescript
public readonly notificationTopicId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#notification_topic_id DelegateAccessControlDelegationControl#notification_topic_id}.

---

##### `resourceIds`<sup>Required</sup> <a name="resourceIds" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.resourceIds"></a>

```typescript
public readonly resourceIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#resource_ids DelegateAccessControlDelegationControl#resource_ids}.

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#resource_type DelegateAccessControlDelegationControl#resource_type}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#defined_tags DelegateAccessControlDelegationControl#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#description DelegateAccessControlDelegationControl#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#freeform_tags DelegateAccessControlDelegationControl#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#id DelegateAccessControlDelegationControl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isAutoApproveDuringMaintenance`<sup>Optional</sup> <a name="isAutoApproveDuringMaintenance" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.isAutoApproveDuringMaintenance"></a>

```typescript
public readonly isAutoApproveDuringMaintenance: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#is_auto_approve_during_maintenance DelegateAccessControlDelegationControl#is_auto_approve_during_maintenance}.

---

##### `numApprovalsRequired`<sup>Optional</sup> <a name="numApprovalsRequired" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.numApprovalsRequired"></a>

```typescript
public readonly numApprovalsRequired: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#num_approvals_required DelegateAccessControlDelegationControl#num_approvals_required}.

---

##### `preApprovedServiceProviderActionNames`<sup>Optional</sup> <a name="preApprovedServiceProviderActionNames" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.preApprovedServiceProviderActionNames"></a>

```typescript
public readonly preApprovedServiceProviderActionNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#pre_approved_service_provider_action_names DelegateAccessControlDelegationControl#pre_approved_service_provider_action_names}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DelegateAccessControlDelegationControlTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts">DelegateAccessControlDelegationControlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#timeouts DelegateAccessControlDelegationControl#timeouts}

---

##### `vaultId`<sup>Optional</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.vaultId"></a>

```typescript
public readonly vaultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#vault_id DelegateAccessControlDelegationControl#vault_id}.

---

##### `vaultKeyId`<sup>Optional</sup> <a name="vaultKeyId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.vaultKeyId"></a>

```typescript
public readonly vaultKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#vault_key_id DelegateAccessControlDelegationControl#vault_key_id}.

---

### DelegateAccessControlDelegationControlTimeouts <a name="DelegateAccessControlDelegationControlTimeouts" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts.Initializer"></a>

```typescript
import { delegateAccessControlDelegationControl } from 'rhizo-co-terraform-provider-oci'

const delegateAccessControlDelegationControlTimeouts: delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#create DelegateAccessControlDelegationControl#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#delete DelegateAccessControlDelegationControl#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#update DelegateAccessControlDelegationControl#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#create DelegateAccessControlDelegationControl#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#delete DelegateAccessControlDelegationControl#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#update DelegateAccessControlDelegationControl#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DelegateAccessControlDelegationControlTimeoutsOutputReference <a name="DelegateAccessControlDelegationControlTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.Initializer"></a>

```typescript
import { delegateAccessControlDelegationControl } from 'rhizo-co-terraform-provider-oci'

new delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts">DelegateAccessControlDelegationControlTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DelegateAccessControlDelegationControlTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts">DelegateAccessControlDelegationControlTimeouts</a>

---



