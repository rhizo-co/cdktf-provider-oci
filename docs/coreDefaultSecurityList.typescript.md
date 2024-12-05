# `coreDefaultSecurityList` Submodule <a name="`coreDefaultSecurityList` Submodule" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreDefaultSecurityList <a name="CoreDefaultSecurityList" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list oci_core_default_security_list}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer"></a>

```typescript
import { coreDefaultSecurityList } from 'rhizo-co-terraform-provider-oci'

new coreDefaultSecurityList.CoreDefaultSecurityList(scope: Construct, id: string, config: CoreDefaultSecurityListConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig">CoreDefaultSecurityListConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig">CoreDefaultSecurityListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.putEgressSecurityRules">putEgressSecurityRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.putIngressSecurityRules">putIngressSecurityRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetEgressSecurityRules">resetEgressSecurityRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetIngressSecurityRules">resetIngressSecurityRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEgressSecurityRules` <a name="putEgressSecurityRules" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.putEgressSecurityRules"></a>

```typescript
public putEgressSecurityRules(value: IResolvable | CoreDefaultSecurityListEgressSecurityRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.putEgressSecurityRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules">CoreDefaultSecurityListEgressSecurityRules</a>[]

---

##### `putIngressSecurityRules` <a name="putIngressSecurityRules" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.putIngressSecurityRules"></a>

```typescript
public putIngressSecurityRules(value: IResolvable | CoreDefaultSecurityListIngressSecurityRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.putIngressSecurityRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules">CoreDefaultSecurityListIngressSecurityRules</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.putTimeouts"></a>

```typescript
public putTimeouts(value: CoreDefaultSecurityListTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts">CoreDefaultSecurityListTimeouts</a>

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEgressSecurityRules` <a name="resetEgressSecurityRules" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetEgressSecurityRules"></a>

```typescript
public resetEgressSecurityRules(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIngressSecurityRules` <a name="resetIngressSecurityRules" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetIngressSecurityRules"></a>

```typescript
public resetIngressSecurityRules(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CoreDefaultSecurityList resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.isConstruct"></a>

```typescript
import { coreDefaultSecurityList } from 'rhizo-co-terraform-provider-oci'

coreDefaultSecurityList.CoreDefaultSecurityList.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.isTerraformElement"></a>

```typescript
import { coreDefaultSecurityList } from 'rhizo-co-terraform-provider-oci'

coreDefaultSecurityList.CoreDefaultSecurityList.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.isTerraformResource"></a>

```typescript
import { coreDefaultSecurityList } from 'rhizo-co-terraform-provider-oci'

coreDefaultSecurityList.CoreDefaultSecurityList.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.generateConfigForImport"></a>

```typescript
import { coreDefaultSecurityList } from 'rhizo-co-terraform-provider-oci'

coreDefaultSecurityList.CoreDefaultSecurityList.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CoreDefaultSecurityList resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CoreDefaultSecurityList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CoreDefaultSecurityList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CoreDefaultSecurityList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.egressSecurityRules">egressSecurityRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList">CoreDefaultSecurityListEgressSecurityRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.ingressSecurityRules">ingressSecurityRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList">CoreDefaultSecurityListIngressSecurityRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference">CoreDefaultSecurityListTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.egressSecurityRulesInput">egressSecurityRulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules">CoreDefaultSecurityListEgressSecurityRules</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.ingressSecurityRulesInput">ingressSecurityRulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules">CoreDefaultSecurityListIngressSecurityRules</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.manageDefaultResourceIdInput">manageDefaultResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts">CoreDefaultSecurityListTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.manageDefaultResourceId">manageDefaultResourceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `egressSecurityRules`<sup>Required</sup> <a name="egressSecurityRules" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.egressSecurityRules"></a>

```typescript
public readonly egressSecurityRules: CoreDefaultSecurityListEgressSecurityRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList">CoreDefaultSecurityListEgressSecurityRulesList</a>

---

##### `ingressSecurityRules`<sup>Required</sup> <a name="ingressSecurityRules" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.ingressSecurityRules"></a>

```typescript
public readonly ingressSecurityRules: CoreDefaultSecurityListIngressSecurityRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList">CoreDefaultSecurityListIngressSecurityRulesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.timeouts"></a>

```typescript
public readonly timeouts: CoreDefaultSecurityListTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference">CoreDefaultSecurityListTimeoutsOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `egressSecurityRulesInput`<sup>Optional</sup> <a name="egressSecurityRulesInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.egressSecurityRulesInput"></a>

```typescript
public readonly egressSecurityRulesInput: IResolvable | CoreDefaultSecurityListEgressSecurityRules[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules">CoreDefaultSecurityListEgressSecurityRules</a>[]

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ingressSecurityRulesInput`<sup>Optional</sup> <a name="ingressSecurityRulesInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.ingressSecurityRulesInput"></a>

```typescript
public readonly ingressSecurityRulesInput: IResolvable | CoreDefaultSecurityListIngressSecurityRules[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules">CoreDefaultSecurityListIngressSecurityRules</a>[]

---

##### `manageDefaultResourceIdInput`<sup>Optional</sup> <a name="manageDefaultResourceIdInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.manageDefaultResourceIdInput"></a>

```typescript
public readonly manageDefaultResourceIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CoreDefaultSecurityListTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts">CoreDefaultSecurityListTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `manageDefaultResourceId`<sup>Required</sup> <a name="manageDefaultResourceId" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.manageDefaultResourceId"></a>

```typescript
public readonly manageDefaultResourceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CoreDefaultSecurityListConfig <a name="CoreDefaultSecurityListConfig" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.Initializer"></a>

```typescript
import { coreDefaultSecurityList } from 'rhizo-co-terraform-provider-oci'

const coreDefaultSecurityListConfig: coreDefaultSecurityList.CoreDefaultSecurityListConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.manageDefaultResourceId">manageDefaultResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#manage_default_resource_id CoreDefaultSecurityList#manage_default_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#compartment_id CoreDefaultSecurityList#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#defined_tags CoreDefaultSecurityList#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#display_name CoreDefaultSecurityList#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.egressSecurityRules">egressSecurityRules</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules">CoreDefaultSecurityListEgressSecurityRules</a>[]</code> | egress_security_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#freeform_tags CoreDefaultSecurityList#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#id CoreDefaultSecurityList#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.ingressSecurityRules">ingressSecurityRules</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules">CoreDefaultSecurityListIngressSecurityRules</a>[]</code> | ingress_security_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts">CoreDefaultSecurityListTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `manageDefaultResourceId`<sup>Required</sup> <a name="manageDefaultResourceId" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.manageDefaultResourceId"></a>

```typescript
public readonly manageDefaultResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#manage_default_resource_id CoreDefaultSecurityList#manage_default_resource_id}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#compartment_id CoreDefaultSecurityList#compartment_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#defined_tags CoreDefaultSecurityList#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#display_name CoreDefaultSecurityList#display_name}.

---

##### `egressSecurityRules`<sup>Optional</sup> <a name="egressSecurityRules" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.egressSecurityRules"></a>

```typescript
public readonly egressSecurityRules: IResolvable | CoreDefaultSecurityListEgressSecurityRules[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules">CoreDefaultSecurityListEgressSecurityRules</a>[]

egress_security_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#egress_security_rules CoreDefaultSecurityList#egress_security_rules}

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#freeform_tags CoreDefaultSecurityList#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#id CoreDefaultSecurityList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingressSecurityRules`<sup>Optional</sup> <a name="ingressSecurityRules" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.ingressSecurityRules"></a>

```typescript
public readonly ingressSecurityRules: IResolvable | CoreDefaultSecurityListIngressSecurityRules[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules">CoreDefaultSecurityListIngressSecurityRules</a>[]

ingress_security_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#ingress_security_rules CoreDefaultSecurityList#ingress_security_rules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CoreDefaultSecurityListTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts">CoreDefaultSecurityListTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#timeouts CoreDefaultSecurityList#timeouts}

---

### CoreDefaultSecurityListEgressSecurityRules <a name="CoreDefaultSecurityListEgressSecurityRules" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.Initializer"></a>

```typescript
import { coreDefaultSecurityList } from 'rhizo-co-terraform-provider-oci'

const coreDefaultSecurityListEgressSecurityRules: coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.destination">destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#destination CoreDefaultSecurityList#destination}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#protocol CoreDefaultSecurityList#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#description CoreDefaultSecurityList#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.destinationType">destinationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#destination_type CoreDefaultSecurityList#destination_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.icmpOptions">icmpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions">CoreDefaultSecurityListEgressSecurityRulesIcmpOptions</a></code> | icmp_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.stateless">stateless</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#stateless CoreDefaultSecurityList#stateless}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.tcpOptions">tcpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions">CoreDefaultSecurityListEgressSecurityRulesTcpOptions</a></code> | tcp_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.udpOptions">udpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions">CoreDefaultSecurityListEgressSecurityRulesUdpOptions</a></code> | udp_options block. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#destination CoreDefaultSecurityList#destination}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#protocol CoreDefaultSecurityList#protocol}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#description CoreDefaultSecurityList#description}.

---

##### `destinationType`<sup>Optional</sup> <a name="destinationType" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.destinationType"></a>

```typescript
public readonly destinationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#destination_type CoreDefaultSecurityList#destination_type}.

---

##### `icmpOptions`<sup>Optional</sup> <a name="icmpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.icmpOptions"></a>

```typescript
public readonly icmpOptions: CoreDefaultSecurityListEgressSecurityRulesIcmpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions">CoreDefaultSecurityListEgressSecurityRulesIcmpOptions</a>

icmp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#icmp_options CoreDefaultSecurityList#icmp_options}

---

##### `stateless`<sup>Optional</sup> <a name="stateless" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.stateless"></a>

```typescript
public readonly stateless: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#stateless CoreDefaultSecurityList#stateless}.

---

##### `tcpOptions`<sup>Optional</sup> <a name="tcpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.tcpOptions"></a>

```typescript
public readonly tcpOptions: CoreDefaultSecurityListEgressSecurityRulesTcpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions">CoreDefaultSecurityListEgressSecurityRulesTcpOptions</a>

tcp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#tcp_options CoreDefaultSecurityList#tcp_options}

---

##### `udpOptions`<sup>Optional</sup> <a name="udpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.udpOptions"></a>

```typescript
public readonly udpOptions: CoreDefaultSecurityListEgressSecurityRulesUdpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions">CoreDefaultSecurityListEgressSecurityRulesUdpOptions</a>

udp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#udp_options CoreDefaultSecurityList#udp_options}

---

### CoreDefaultSecurityListEgressSecurityRulesIcmpOptions <a name="CoreDefaultSecurityListEgressSecurityRulesIcmpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions.Initializer"></a>

```typescript
import { coreDefaultSecurityList } from 'rhizo-co-terraform-provider-oci'

const coreDefaultSecurityListEgressSecurityRulesIcmpOptions: coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions.property.type">type</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#type CoreDefaultSecurityList#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions.property.code">code</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#code CoreDefaultSecurityList#code}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions.property.type"></a>

```typescript
public readonly type: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#type CoreDefaultSecurityList#type}.

---

##### `code`<sup>Optional</sup> <a name="code" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#code CoreDefaultSecurityList#code}.

---

### CoreDefaultSecurityListEgressSecurityRulesTcpOptions <a name="CoreDefaultSecurityListEgressSecurityRulesTcpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions.Initializer"></a>

```typescript
import { coreDefaultSecurityList } from 'rhizo-co-terraform-provider-oci'

const coreDefaultSecurityListEgressSecurityRulesTcpOptions: coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions.property.max">max</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions.property.min">min</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange</a></code> | source_port_range block. |

---

##### `max`<sup>Optional</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}.

---

##### `sourcePortRange`<sup>Optional</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions.property.sourcePortRange"></a>

```typescript
public readonly sourcePortRange: CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#source_port_range CoreDefaultSecurityList#source_port_range}

---

### CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange <a name="CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange.Initializer"></a>

```typescript
import { coreDefaultSecurityList } from 'rhizo-co-terraform-provider-oci'

const coreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange: coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange.property.max">max</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange.property.min">min</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}. |

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}.

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}.

---

### CoreDefaultSecurityListEgressSecurityRulesUdpOptions <a name="CoreDefaultSecurityListEgressSecurityRulesUdpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions.Initializer"></a>

```typescript
import { coreDefaultSecurityList } from 'rhizo-co-terraform-provider-oci'

const coreDefaultSecurityListEgressSecurityRulesUdpOptions: coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions.property.max">max</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions.property.min">min</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange</a></code> | source_port_range block. |

---

##### `max`<sup>Optional</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}.

---

##### `sourcePortRange`<sup>Optional</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions.property.sourcePortRange"></a>

```typescript
public readonly sourcePortRange: CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#source_port_range CoreDefaultSecurityList#source_port_range}

---

### CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange <a name="CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange.Initializer"></a>

```typescript
import { coreDefaultSecurityList } from 'rhizo-co-terraform-provider-oci'

const coreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange: coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange.property.max">max</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange.property.min">min</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}. |

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}.

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}.

---

### CoreDefaultSecurityListIngressSecurityRules <a name="CoreDefaultSecurityListIngressSecurityRules" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.Initializer"></a>

```typescript
import { coreDefaultSecurityList } from 'rhizo-co-terraform-provider-oci'

const coreDefaultSecurityListIngressSecurityRules: coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#protocol CoreDefaultSecurityList#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#source CoreDefaultSecurityList#source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#description CoreDefaultSecurityList#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.icmpOptions">icmpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions">CoreDefaultSecurityListIngressSecurityRulesIcmpOptions</a></code> | icmp_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.sourceType">sourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#source_type CoreDefaultSecurityList#source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.stateless">stateless</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#stateless CoreDefaultSecurityList#stateless}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.tcpOptions">tcpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions">CoreDefaultSecurityListIngressSecurityRulesTcpOptions</a></code> | tcp_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.udpOptions">udpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions">CoreDefaultSecurityListIngressSecurityRulesUdpOptions</a></code> | udp_options block. |

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#protocol CoreDefaultSecurityList#protocol}.

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#source CoreDefaultSecurityList#source}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#description CoreDefaultSecurityList#description}.

---

##### `icmpOptions`<sup>Optional</sup> <a name="icmpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.icmpOptions"></a>

```typescript
public readonly icmpOptions: CoreDefaultSecurityListIngressSecurityRulesIcmpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions">CoreDefaultSecurityListIngressSecurityRulesIcmpOptions</a>

icmp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#icmp_options CoreDefaultSecurityList#icmp_options}

---

##### `sourceType`<sup>Optional</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#source_type CoreDefaultSecurityList#source_type}.

---

##### `stateless`<sup>Optional</sup> <a name="stateless" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.stateless"></a>

```typescript
public readonly stateless: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#stateless CoreDefaultSecurityList#stateless}.

---

##### `tcpOptions`<sup>Optional</sup> <a name="tcpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.tcpOptions"></a>

```typescript
public readonly tcpOptions: CoreDefaultSecurityListIngressSecurityRulesTcpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions">CoreDefaultSecurityListIngressSecurityRulesTcpOptions</a>

tcp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#tcp_options CoreDefaultSecurityList#tcp_options}

---

##### `udpOptions`<sup>Optional</sup> <a name="udpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.udpOptions"></a>

```typescript
public readonly udpOptions: CoreDefaultSecurityListIngressSecurityRulesUdpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions">CoreDefaultSecurityListIngressSecurityRulesUdpOptions</a>

udp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#udp_options CoreDefaultSecurityList#udp_options}

---

### CoreDefaultSecurityListIngressSecurityRulesIcmpOptions <a name="CoreDefaultSecurityListIngressSecurityRulesIcmpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions.Initializer"></a>

```typescript
import { coreDefaultSecurityList } from 'rhizo-co-terraform-provider-oci'

const coreDefaultSecurityListIngressSecurityRulesIcmpOptions: coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions.property.type">type</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#type CoreDefaultSecurityList#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions.property.code">code</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#code CoreDefaultSecurityList#code}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions.property.type"></a>

```typescript
public readonly type: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#type CoreDefaultSecurityList#type}.

---

##### `code`<sup>Optional</sup> <a name="code" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#code CoreDefaultSecurityList#code}.

---

### CoreDefaultSecurityListIngressSecurityRulesTcpOptions <a name="CoreDefaultSecurityListIngressSecurityRulesTcpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions.Initializer"></a>

```typescript
import { coreDefaultSecurityList } from 'rhizo-co-terraform-provider-oci'

const coreDefaultSecurityListIngressSecurityRulesTcpOptions: coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions.property.max">max</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions.property.min">min</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange</a></code> | source_port_range block. |

---

##### `max`<sup>Optional</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}.

---

##### `sourcePortRange`<sup>Optional</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions.property.sourcePortRange"></a>

```typescript
public readonly sourcePortRange: CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#source_port_range CoreDefaultSecurityList#source_port_range}

---

### CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange <a name="CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange.Initializer"></a>

```typescript
import { coreDefaultSecurityList } from 'rhizo-co-terraform-provider-oci'

const coreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange: coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange.property.max">max</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange.property.min">min</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}. |

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}.

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}.

---

### CoreDefaultSecurityListIngressSecurityRulesUdpOptions <a name="CoreDefaultSecurityListIngressSecurityRulesUdpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions.Initializer"></a>

```typescript
import { coreDefaultSecurityList } from 'rhizo-co-terraform-provider-oci'

const coreDefaultSecurityListIngressSecurityRulesUdpOptions: coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions.property.max">max</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions.property.min">min</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange</a></code> | source_port_range block. |

---

##### `max`<sup>Optional</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}.

---

##### `sourcePortRange`<sup>Optional</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions.property.sourcePortRange"></a>

```typescript
public readonly sourcePortRange: CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#source_port_range CoreDefaultSecurityList#source_port_range}

---

### CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange <a name="CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange.Initializer"></a>

```typescript
import { coreDefaultSecurityList } from 'rhizo-co-terraform-provider-oci'

const coreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange: coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange.property.max">max</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange.property.min">min</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}. |

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}.

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}.

---

### CoreDefaultSecurityListTimeouts <a name="CoreDefaultSecurityListTimeouts" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts.Initializer"></a>

```typescript
import { coreDefaultSecurityList } from 'rhizo-co-terraform-provider-oci'

const coreDefaultSecurityListTimeouts: coreDefaultSecurityList.CoreDefaultSecurityListTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#create CoreDefaultSecurityList#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#delete CoreDefaultSecurityList#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#update CoreDefaultSecurityList#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#create CoreDefaultSecurityList#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#delete CoreDefaultSecurityList#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#update CoreDefaultSecurityList#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference <a name="CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.Initializer"></a>

```typescript
import { coreDefaultSecurityList } from 'rhizo-co-terraform-provider-oci'

new coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.resetCode">resetCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCode` <a name="resetCode" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.resetCode"></a>

```typescript
public resetCode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.codeInput">codeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.typeInput">typeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.type">type</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions">CoreDefaultSecurityListEgressSecurityRulesIcmpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `codeInput`<sup>Optional</sup> <a name="codeInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.codeInput"></a>

```typescript
public readonly codeInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: number;
```

- *Type:* number

---

##### `code`<sup>Required</sup> <a name="code" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.type"></a>

```typescript
public readonly type: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CoreDefaultSecurityListEgressSecurityRulesIcmpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions">CoreDefaultSecurityListEgressSecurityRulesIcmpOptions</a>

---


### CoreDefaultSecurityListEgressSecurityRulesList <a name="CoreDefaultSecurityListEgressSecurityRulesList" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.Initializer"></a>

```typescript
import { coreDefaultSecurityList } from 'rhizo-co-terraform-provider-oci'

new coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.get"></a>

```typescript
public get(index: number): CoreDefaultSecurityListEgressSecurityRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules">CoreDefaultSecurityListEgressSecurityRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CoreDefaultSecurityListEgressSecurityRules[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules">CoreDefaultSecurityListEgressSecurityRules</a>[]

---


### CoreDefaultSecurityListEgressSecurityRulesOutputReference <a name="CoreDefaultSecurityListEgressSecurityRulesOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.Initializer"></a>

```typescript
import { coreDefaultSecurityList } from 'rhizo-co-terraform-provider-oci'

new coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.putIcmpOptions">putIcmpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.putTcpOptions">putTcpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.putUdpOptions">putUdpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resetDestinationType">resetDestinationType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resetIcmpOptions">resetIcmpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resetStateless">resetStateless</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resetTcpOptions">resetTcpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resetUdpOptions">resetUdpOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIcmpOptions` <a name="putIcmpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.putIcmpOptions"></a>

```typescript
public putIcmpOptions(value: CoreDefaultSecurityListEgressSecurityRulesIcmpOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.putIcmpOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions">CoreDefaultSecurityListEgressSecurityRulesIcmpOptions</a>

---

##### `putTcpOptions` <a name="putTcpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.putTcpOptions"></a>

```typescript
public putTcpOptions(value: CoreDefaultSecurityListEgressSecurityRulesTcpOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.putTcpOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions">CoreDefaultSecurityListEgressSecurityRulesTcpOptions</a>

---

##### `putUdpOptions` <a name="putUdpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.putUdpOptions"></a>

```typescript
public putUdpOptions(value: CoreDefaultSecurityListEgressSecurityRulesUdpOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.putUdpOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions">CoreDefaultSecurityListEgressSecurityRulesUdpOptions</a>

---

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDestinationType` <a name="resetDestinationType" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resetDestinationType"></a>

```typescript
public resetDestinationType(): void
```

##### `resetIcmpOptions` <a name="resetIcmpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resetIcmpOptions"></a>

```typescript
public resetIcmpOptions(): void
```

##### `resetStateless` <a name="resetStateless" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resetStateless"></a>

```typescript
public resetStateless(): void
```

##### `resetTcpOptions` <a name="resetTcpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resetTcpOptions"></a>

```typescript
public resetTcpOptions(): void
```

##### `resetUdpOptions` <a name="resetUdpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resetUdpOptions"></a>

```typescript
public resetUdpOptions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.icmpOptions">icmpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference">CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.tcpOptions">tcpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference">CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.udpOptions">udpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference">CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.destinationInput">destinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.destinationTypeInput">destinationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.icmpOptionsInput">icmpOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions">CoreDefaultSecurityListEgressSecurityRulesIcmpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.statelessInput">statelessInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.tcpOptionsInput">tcpOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions">CoreDefaultSecurityListEgressSecurityRulesTcpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.udpOptionsInput">udpOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions">CoreDefaultSecurityListEgressSecurityRulesUdpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.destinationType">destinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.stateless">stateless</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules">CoreDefaultSecurityListEgressSecurityRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `icmpOptions`<sup>Required</sup> <a name="icmpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.icmpOptions"></a>

```typescript
public readonly icmpOptions: CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference">CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference</a>

---

##### `tcpOptions`<sup>Required</sup> <a name="tcpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.tcpOptions"></a>

```typescript
public readonly tcpOptions: CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference">CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference</a>

---

##### `udpOptions`<sup>Required</sup> <a name="udpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.udpOptions"></a>

```typescript
public readonly udpOptions: CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference">CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.destinationInput"></a>

```typescript
public readonly destinationInput: string;
```

- *Type:* string

---

##### `destinationTypeInput`<sup>Optional</sup> <a name="destinationTypeInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.destinationTypeInput"></a>

```typescript
public readonly destinationTypeInput: string;
```

- *Type:* string

---

##### `icmpOptionsInput`<sup>Optional</sup> <a name="icmpOptionsInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.icmpOptionsInput"></a>

```typescript
public readonly icmpOptionsInput: CoreDefaultSecurityListEgressSecurityRulesIcmpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions">CoreDefaultSecurityListEgressSecurityRulesIcmpOptions</a>

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `statelessInput`<sup>Optional</sup> <a name="statelessInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.statelessInput"></a>

```typescript
public readonly statelessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tcpOptionsInput`<sup>Optional</sup> <a name="tcpOptionsInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.tcpOptionsInput"></a>

```typescript
public readonly tcpOptionsInput: CoreDefaultSecurityListEgressSecurityRulesTcpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions">CoreDefaultSecurityListEgressSecurityRulesTcpOptions</a>

---

##### `udpOptionsInput`<sup>Optional</sup> <a name="udpOptionsInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.udpOptionsInput"></a>

```typescript
public readonly udpOptionsInput: CoreDefaultSecurityListEgressSecurityRulesUdpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions">CoreDefaultSecurityListEgressSecurityRulesUdpOptions</a>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.destinationType"></a>

```typescript
public readonly destinationType: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `stateless`<sup>Required</sup> <a name="stateless" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.stateless"></a>

```typescript
public readonly stateless: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CoreDefaultSecurityListEgressSecurityRules;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules">CoreDefaultSecurityListEgressSecurityRules</a>

---


### CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference <a name="CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.Initializer"></a>

```typescript
import { coreDefaultSecurityList } from 'rhizo-co-terraform-provider-oci'

new coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.putSourcePortRange">putSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.resetMin">resetMin</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.resetSourcePortRange">resetSourcePortRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSourcePortRange` <a name="putSourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.putSourcePortRange"></a>

```typescript
public putSourcePortRange(value: CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.putSourcePortRange.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange</a>

---

##### `resetMax` <a name="resetMax" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.resetMax"></a>

```typescript
public resetMax(): void
```

##### `resetMin` <a name="resetMin" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.resetMin"></a>

```typescript
public resetMin(): void
```

##### `resetSourcePortRange` <a name="resetSourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.resetSourcePortRange"></a>

```typescript
public resetSourcePortRange(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference">CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.maxInput">maxInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.minInput">minInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.sourcePortRangeInput">sourcePortRangeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions">CoreDefaultSecurityListEgressSecurityRulesTcpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourcePortRange`<sup>Required</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.sourcePortRange"></a>

```typescript
public readonly sourcePortRange: CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference">CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference</a>

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.maxInput"></a>

```typescript
public readonly maxInput: number;
```

- *Type:* number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.minInput"></a>

```typescript
public readonly minInput: number;
```

- *Type:* number

---

##### `sourcePortRangeInput`<sup>Optional</sup> <a name="sourcePortRangeInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.sourcePortRangeInput"></a>

```typescript
public readonly sourcePortRangeInput: CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange</a>

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CoreDefaultSecurityListEgressSecurityRulesTcpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions">CoreDefaultSecurityListEgressSecurityRulesTcpOptions</a>

---


### CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference <a name="CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer"></a>

```typescript
import { coreDefaultSecurityList } from 'rhizo-co-terraform-provider-oci'

new coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.maxInput">maxInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.minInput">minInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.maxInput"></a>

```typescript
public readonly maxInput: number;
```

- *Type:* number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.minInput"></a>

```typescript
public readonly minInput: number;
```

- *Type:* number

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange</a>

---


### CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference <a name="CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.Initializer"></a>

```typescript
import { coreDefaultSecurityList } from 'rhizo-co-terraform-provider-oci'

new coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.putSourcePortRange">putSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.resetMin">resetMin</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.resetSourcePortRange">resetSourcePortRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSourcePortRange` <a name="putSourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.putSourcePortRange"></a>

```typescript
public putSourcePortRange(value: CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.putSourcePortRange.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange</a>

---

##### `resetMax` <a name="resetMax" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.resetMax"></a>

```typescript
public resetMax(): void
```

##### `resetMin` <a name="resetMin" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.resetMin"></a>

```typescript
public resetMin(): void
```

##### `resetSourcePortRange` <a name="resetSourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.resetSourcePortRange"></a>

```typescript
public resetSourcePortRange(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference">CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.maxInput">maxInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.minInput">minInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.sourcePortRangeInput">sourcePortRangeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions">CoreDefaultSecurityListEgressSecurityRulesUdpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourcePortRange`<sup>Required</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.sourcePortRange"></a>

```typescript
public readonly sourcePortRange: CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference">CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference</a>

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.maxInput"></a>

```typescript
public readonly maxInput: number;
```

- *Type:* number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.minInput"></a>

```typescript
public readonly minInput: number;
```

- *Type:* number

---

##### `sourcePortRangeInput`<sup>Optional</sup> <a name="sourcePortRangeInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.sourcePortRangeInput"></a>

```typescript
public readonly sourcePortRangeInput: CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange</a>

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CoreDefaultSecurityListEgressSecurityRulesUdpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions">CoreDefaultSecurityListEgressSecurityRulesUdpOptions</a>

---


### CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference <a name="CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer"></a>

```typescript
import { coreDefaultSecurityList } from 'rhizo-co-terraform-provider-oci'

new coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.maxInput">maxInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.minInput">minInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.maxInput"></a>

```typescript
public readonly maxInput: number;
```

- *Type:* number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.minInput"></a>

```typescript
public readonly minInput: number;
```

- *Type:* number

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange</a>

---


### CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference <a name="CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.Initializer"></a>

```typescript
import { coreDefaultSecurityList } from 'rhizo-co-terraform-provider-oci'

new coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.resetCode">resetCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCode` <a name="resetCode" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.resetCode"></a>

```typescript
public resetCode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.codeInput">codeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.typeInput">typeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.type">type</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions">CoreDefaultSecurityListIngressSecurityRulesIcmpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `codeInput`<sup>Optional</sup> <a name="codeInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.codeInput"></a>

```typescript
public readonly codeInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: number;
```

- *Type:* number

---

##### `code`<sup>Required</sup> <a name="code" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.type"></a>

```typescript
public readonly type: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CoreDefaultSecurityListIngressSecurityRulesIcmpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions">CoreDefaultSecurityListIngressSecurityRulesIcmpOptions</a>

---


### CoreDefaultSecurityListIngressSecurityRulesList <a name="CoreDefaultSecurityListIngressSecurityRulesList" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.Initializer"></a>

```typescript
import { coreDefaultSecurityList } from 'rhizo-co-terraform-provider-oci'

new coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.get"></a>

```typescript
public get(index: number): CoreDefaultSecurityListIngressSecurityRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules">CoreDefaultSecurityListIngressSecurityRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CoreDefaultSecurityListIngressSecurityRules[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules">CoreDefaultSecurityListIngressSecurityRules</a>[]

---


### CoreDefaultSecurityListIngressSecurityRulesOutputReference <a name="CoreDefaultSecurityListIngressSecurityRulesOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.Initializer"></a>

```typescript
import { coreDefaultSecurityList } from 'rhizo-co-terraform-provider-oci'

new coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.putIcmpOptions">putIcmpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.putTcpOptions">putTcpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.putUdpOptions">putUdpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resetIcmpOptions">resetIcmpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resetSourceType">resetSourceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resetStateless">resetStateless</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resetTcpOptions">resetTcpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resetUdpOptions">resetUdpOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIcmpOptions` <a name="putIcmpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.putIcmpOptions"></a>

```typescript
public putIcmpOptions(value: CoreDefaultSecurityListIngressSecurityRulesIcmpOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.putIcmpOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions">CoreDefaultSecurityListIngressSecurityRulesIcmpOptions</a>

---

##### `putTcpOptions` <a name="putTcpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.putTcpOptions"></a>

```typescript
public putTcpOptions(value: CoreDefaultSecurityListIngressSecurityRulesTcpOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.putTcpOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions">CoreDefaultSecurityListIngressSecurityRulesTcpOptions</a>

---

##### `putUdpOptions` <a name="putUdpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.putUdpOptions"></a>

```typescript
public putUdpOptions(value: CoreDefaultSecurityListIngressSecurityRulesUdpOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.putUdpOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions">CoreDefaultSecurityListIngressSecurityRulesUdpOptions</a>

---

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetIcmpOptions` <a name="resetIcmpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resetIcmpOptions"></a>

```typescript
public resetIcmpOptions(): void
```

##### `resetSourceType` <a name="resetSourceType" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resetSourceType"></a>

```typescript
public resetSourceType(): void
```

##### `resetStateless` <a name="resetStateless" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resetStateless"></a>

```typescript
public resetStateless(): void
```

##### `resetTcpOptions` <a name="resetTcpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resetTcpOptions"></a>

```typescript
public resetTcpOptions(): void
```

##### `resetUdpOptions` <a name="resetUdpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resetUdpOptions"></a>

```typescript
public resetUdpOptions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.icmpOptions">icmpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference">CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.tcpOptions">tcpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference">CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.udpOptions">udpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference">CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.icmpOptionsInput">icmpOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions">CoreDefaultSecurityListIngressSecurityRulesIcmpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.sourceTypeInput">sourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.statelessInput">statelessInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.tcpOptionsInput">tcpOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions">CoreDefaultSecurityListIngressSecurityRulesTcpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.udpOptionsInput">udpOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions">CoreDefaultSecurityListIngressSecurityRulesUdpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.stateless">stateless</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules">CoreDefaultSecurityListIngressSecurityRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `icmpOptions`<sup>Required</sup> <a name="icmpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.icmpOptions"></a>

```typescript
public readonly icmpOptions: CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference">CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference</a>

---

##### `tcpOptions`<sup>Required</sup> <a name="tcpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.tcpOptions"></a>

```typescript
public readonly tcpOptions: CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference">CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference</a>

---

##### `udpOptions`<sup>Required</sup> <a name="udpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.udpOptions"></a>

```typescript
public readonly udpOptions: CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference">CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `icmpOptionsInput`<sup>Optional</sup> <a name="icmpOptionsInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.icmpOptionsInput"></a>

```typescript
public readonly icmpOptionsInput: CoreDefaultSecurityListIngressSecurityRulesIcmpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions">CoreDefaultSecurityListIngressSecurityRulesIcmpOptions</a>

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `sourceTypeInput`<sup>Optional</sup> <a name="sourceTypeInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.sourceTypeInput"></a>

```typescript
public readonly sourceTypeInput: string;
```

- *Type:* string

---

##### `statelessInput`<sup>Optional</sup> <a name="statelessInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.statelessInput"></a>

```typescript
public readonly statelessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tcpOptionsInput`<sup>Optional</sup> <a name="tcpOptionsInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.tcpOptionsInput"></a>

```typescript
public readonly tcpOptionsInput: CoreDefaultSecurityListIngressSecurityRulesTcpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions">CoreDefaultSecurityListIngressSecurityRulesTcpOptions</a>

---

##### `udpOptionsInput`<sup>Optional</sup> <a name="udpOptionsInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.udpOptionsInput"></a>

```typescript
public readonly udpOptionsInput: CoreDefaultSecurityListIngressSecurityRulesUdpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions">CoreDefaultSecurityListIngressSecurityRulesUdpOptions</a>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `stateless`<sup>Required</sup> <a name="stateless" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.stateless"></a>

```typescript
public readonly stateless: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CoreDefaultSecurityListIngressSecurityRules;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules">CoreDefaultSecurityListIngressSecurityRules</a>

---


### CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference <a name="CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.Initializer"></a>

```typescript
import { coreDefaultSecurityList } from 'rhizo-co-terraform-provider-oci'

new coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.putSourcePortRange">putSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.resetMin">resetMin</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.resetSourcePortRange">resetSourcePortRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSourcePortRange` <a name="putSourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.putSourcePortRange"></a>

```typescript
public putSourcePortRange(value: CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.putSourcePortRange.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange</a>

---

##### `resetMax` <a name="resetMax" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.resetMax"></a>

```typescript
public resetMax(): void
```

##### `resetMin` <a name="resetMin" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.resetMin"></a>

```typescript
public resetMin(): void
```

##### `resetSourcePortRange` <a name="resetSourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.resetSourcePortRange"></a>

```typescript
public resetSourcePortRange(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference">CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.maxInput">maxInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.minInput">minInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.sourcePortRangeInput">sourcePortRangeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions">CoreDefaultSecurityListIngressSecurityRulesTcpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourcePortRange`<sup>Required</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.sourcePortRange"></a>

```typescript
public readonly sourcePortRange: CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference">CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference</a>

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.maxInput"></a>

```typescript
public readonly maxInput: number;
```

- *Type:* number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.minInput"></a>

```typescript
public readonly minInput: number;
```

- *Type:* number

---

##### `sourcePortRangeInput`<sup>Optional</sup> <a name="sourcePortRangeInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.sourcePortRangeInput"></a>

```typescript
public readonly sourcePortRangeInput: CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange</a>

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CoreDefaultSecurityListIngressSecurityRulesTcpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions">CoreDefaultSecurityListIngressSecurityRulesTcpOptions</a>

---


### CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference <a name="CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer"></a>

```typescript
import { coreDefaultSecurityList } from 'rhizo-co-terraform-provider-oci'

new coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.maxInput">maxInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.minInput">minInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.maxInput"></a>

```typescript
public readonly maxInput: number;
```

- *Type:* number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.minInput"></a>

```typescript
public readonly minInput: number;
```

- *Type:* number

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange</a>

---


### CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference <a name="CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.Initializer"></a>

```typescript
import { coreDefaultSecurityList } from 'rhizo-co-terraform-provider-oci'

new coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.putSourcePortRange">putSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.resetMin">resetMin</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.resetSourcePortRange">resetSourcePortRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSourcePortRange` <a name="putSourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.putSourcePortRange"></a>

```typescript
public putSourcePortRange(value: CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.putSourcePortRange.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange</a>

---

##### `resetMax` <a name="resetMax" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.resetMax"></a>

```typescript
public resetMax(): void
```

##### `resetMin` <a name="resetMin" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.resetMin"></a>

```typescript
public resetMin(): void
```

##### `resetSourcePortRange` <a name="resetSourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.resetSourcePortRange"></a>

```typescript
public resetSourcePortRange(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference">CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.maxInput">maxInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.minInput">minInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.sourcePortRangeInput">sourcePortRangeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions">CoreDefaultSecurityListIngressSecurityRulesUdpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourcePortRange`<sup>Required</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.sourcePortRange"></a>

```typescript
public readonly sourcePortRange: CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference">CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference</a>

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.maxInput"></a>

```typescript
public readonly maxInput: number;
```

- *Type:* number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.minInput"></a>

```typescript
public readonly minInput: number;
```

- *Type:* number

---

##### `sourcePortRangeInput`<sup>Optional</sup> <a name="sourcePortRangeInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.sourcePortRangeInput"></a>

```typescript
public readonly sourcePortRangeInput: CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange</a>

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CoreDefaultSecurityListIngressSecurityRulesUdpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions">CoreDefaultSecurityListIngressSecurityRulesUdpOptions</a>

---


### CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference <a name="CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer"></a>

```typescript
import { coreDefaultSecurityList } from 'rhizo-co-terraform-provider-oci'

new coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.maxInput">maxInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.minInput">minInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.maxInput"></a>

```typescript
public readonly maxInput: number;
```

- *Type:* number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.minInput"></a>

```typescript
public readonly minInput: number;
```

- *Type:* number

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange</a>

---


### CoreDefaultSecurityListTimeoutsOutputReference <a name="CoreDefaultSecurityListTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.Initializer"></a>

```typescript
import { coreDefaultSecurityList } from 'rhizo-co-terraform-provider-oci'

new coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts">CoreDefaultSecurityListTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CoreDefaultSecurityListTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts">CoreDefaultSecurityListTimeouts</a>

---



