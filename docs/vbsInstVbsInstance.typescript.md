# `vbsInstVbsInstance` Submodule <a name="`vbsInstVbsInstance` Submodule" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VbsInstVbsInstance <a name="VbsInstVbsInstance" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vbs_inst_vbs_instance oci_vbs_inst_vbs_instance}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.Initializer"></a>

```typescript
import { vbsInstVbsInstance } from 'rhizo-co-terraform-provider-oci'

new vbsInstVbsInstance.VbsInstVbsInstance(scope: Construct, id: string, config: VbsInstVbsInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceConfig">VbsInstVbsInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceConfig">VbsInstVbsInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.resetIdcsAccessToken">resetIdcsAccessToken</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.resetIsResourceUsageAgreementGranted">resetIsResourceUsageAgreementGranted</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.resetResourceCompartmentId">resetResourceCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.putTimeouts"></a>

```typescript
public putTimeouts(value: VbsInstVbsInstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeouts">VbsInstVbsInstanceTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdcsAccessToken` <a name="resetIdcsAccessToken" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.resetIdcsAccessToken"></a>

```typescript
public resetIdcsAccessToken(): void
```

##### `resetIsResourceUsageAgreementGranted` <a name="resetIsResourceUsageAgreementGranted" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.resetIsResourceUsageAgreementGranted"></a>

```typescript
public resetIsResourceUsageAgreementGranted(): void
```

##### `resetResourceCompartmentId` <a name="resetResourceCompartmentId" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.resetResourceCompartmentId"></a>

```typescript
public resetResourceCompartmentId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VbsInstVbsInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.isConstruct"></a>

```typescript
import { vbsInstVbsInstance } from 'rhizo-co-terraform-provider-oci'

vbsInstVbsInstance.VbsInstVbsInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.isTerraformElement"></a>

```typescript
import { vbsInstVbsInstance } from 'rhizo-co-terraform-provider-oci'

vbsInstVbsInstance.VbsInstVbsInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.isTerraformResource"></a>

```typescript
import { vbsInstVbsInstance } from 'rhizo-co-terraform-provider-oci'

vbsInstVbsInstance.VbsInstVbsInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.generateConfigForImport"></a>

```typescript
import { vbsInstVbsInstance } from 'rhizo-co-terraform-provider-oci'

vbsInstVbsInstance.VbsInstVbsInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VbsInstVbsInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VbsInstVbsInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VbsInstVbsInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vbs_inst_vbs_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VbsInstVbsInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.lifecyleDetails">lifecyleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference">VbsInstVbsInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.vbsAccessUrl">vbsAccessUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.idcsAccessTokenInput">idcsAccessTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.isResourceUsageAgreementGrantedInput">isResourceUsageAgreementGrantedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.resourceCompartmentIdInput">resourceCompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeouts">VbsInstVbsInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.idcsAccessToken">idcsAccessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.isResourceUsageAgreementGranted">isResourceUsageAgreementGranted</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.resourceCompartmentId">resourceCompartmentId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `lifecyleDetails`<sup>Required</sup> <a name="lifecyleDetails" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.lifecyleDetails"></a>

```typescript
public readonly lifecyleDetails: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.timeouts"></a>

```typescript
public readonly timeouts: VbsInstVbsInstanceTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference">VbsInstVbsInstanceTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `vbsAccessUrl`<sup>Required</sup> <a name="vbsAccessUrl" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.vbsAccessUrl"></a>

```typescript
public readonly vbsAccessUrl: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idcsAccessTokenInput`<sup>Optional</sup> <a name="idcsAccessTokenInput" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.idcsAccessTokenInput"></a>

```typescript
public readonly idcsAccessTokenInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isResourceUsageAgreementGrantedInput`<sup>Optional</sup> <a name="isResourceUsageAgreementGrantedInput" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.isResourceUsageAgreementGrantedInput"></a>

```typescript
public readonly isResourceUsageAgreementGrantedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceCompartmentIdInput`<sup>Optional</sup> <a name="resourceCompartmentIdInput" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.resourceCompartmentIdInput"></a>

```typescript
public readonly resourceCompartmentIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VbsInstVbsInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeouts">VbsInstVbsInstanceTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsAccessToken`<sup>Required</sup> <a name="idcsAccessToken" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.idcsAccessToken"></a>

```typescript
public readonly idcsAccessToken: string;
```

- *Type:* string

---

##### `isResourceUsageAgreementGranted`<sup>Required</sup> <a name="isResourceUsageAgreementGranted" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.isResourceUsageAgreementGranted"></a>

```typescript
public readonly isResourceUsageAgreementGranted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceCompartmentId`<sup>Required</sup> <a name="resourceCompartmentId" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.resourceCompartmentId"></a>

```typescript
public readonly resourceCompartmentId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VbsInstVbsInstanceConfig <a name="VbsInstVbsInstanceConfig" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceConfig.Initializer"></a>

```typescript
import { vbsInstVbsInstance } from 'rhizo-co-terraform-provider-oci'

const vbsInstVbsInstanceConfig: vbsInstVbsInstance.VbsInstVbsInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vbs_inst_vbs_instance#compartment_id VbsInstVbsInstance#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vbs_inst_vbs_instance#display_name VbsInstVbsInstance#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vbs_inst_vbs_instance#name VbsInstVbsInstance#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vbs_inst_vbs_instance#defined_tags VbsInstVbsInstance#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vbs_inst_vbs_instance#freeform_tags VbsInstVbsInstance#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vbs_inst_vbs_instance#id VbsInstVbsInstance#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceConfig.property.idcsAccessToken">idcsAccessToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vbs_inst_vbs_instance#idcs_access_token VbsInstVbsInstance#idcs_access_token}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceConfig.property.isResourceUsageAgreementGranted">isResourceUsageAgreementGranted</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vbs_inst_vbs_instance#is_resource_usage_agreement_granted VbsInstVbsInstance#is_resource_usage_agreement_granted}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceConfig.property.resourceCompartmentId">resourceCompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vbs_inst_vbs_instance#resource_compartment_id VbsInstVbsInstance#resource_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeouts">VbsInstVbsInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vbs_inst_vbs_instance#compartment_id VbsInstVbsInstance#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vbs_inst_vbs_instance#display_name VbsInstVbsInstance#display_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vbs_inst_vbs_instance#name VbsInstVbsInstance#name}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vbs_inst_vbs_instance#defined_tags VbsInstVbsInstance#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vbs_inst_vbs_instance#freeform_tags VbsInstVbsInstance#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vbs_inst_vbs_instance#id VbsInstVbsInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idcsAccessToken`<sup>Optional</sup> <a name="idcsAccessToken" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceConfig.property.idcsAccessToken"></a>

```typescript
public readonly idcsAccessToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vbs_inst_vbs_instance#idcs_access_token VbsInstVbsInstance#idcs_access_token}.

---

##### `isResourceUsageAgreementGranted`<sup>Optional</sup> <a name="isResourceUsageAgreementGranted" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceConfig.property.isResourceUsageAgreementGranted"></a>

```typescript
public readonly isResourceUsageAgreementGranted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vbs_inst_vbs_instance#is_resource_usage_agreement_granted VbsInstVbsInstance#is_resource_usage_agreement_granted}.

---

##### `resourceCompartmentId`<sup>Optional</sup> <a name="resourceCompartmentId" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceConfig.property.resourceCompartmentId"></a>

```typescript
public readonly resourceCompartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vbs_inst_vbs_instance#resource_compartment_id VbsInstVbsInstance#resource_compartment_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VbsInstVbsInstanceTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeouts">VbsInstVbsInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vbs_inst_vbs_instance#timeouts VbsInstVbsInstance#timeouts}

---

### VbsInstVbsInstanceTimeouts <a name="VbsInstVbsInstanceTimeouts" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeouts.Initializer"></a>

```typescript
import { vbsInstVbsInstance } from 'rhizo-co-terraform-provider-oci'

const vbsInstVbsInstanceTimeouts: vbsInstVbsInstance.VbsInstVbsInstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vbs_inst_vbs_instance#create VbsInstVbsInstance#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vbs_inst_vbs_instance#delete VbsInstVbsInstance#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vbs_inst_vbs_instance#update VbsInstVbsInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vbs_inst_vbs_instance#create VbsInstVbsInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vbs_inst_vbs_instance#delete VbsInstVbsInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vbs_inst_vbs_instance#update VbsInstVbsInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VbsInstVbsInstanceTimeoutsOutputReference <a name="VbsInstVbsInstanceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { vbsInstVbsInstance } from 'rhizo-co-terraform-provider-oci'

new vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeouts">VbsInstVbsInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VbsInstVbsInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.vbsInstVbsInstance.VbsInstVbsInstanceTimeouts">VbsInstVbsInstanceTimeouts</a>

---



