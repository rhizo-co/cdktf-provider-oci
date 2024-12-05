# `coreDefaultDhcpOptions` Submodule <a name="`coreDefaultDhcpOptions` Submodule" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreDefaultDhcpOptions <a name="CoreDefaultDhcpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options oci_core_default_dhcp_options}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.Initializer"></a>

```typescript
import { coreDefaultDhcpOptions } from 'rhizo-co-terraform-provider-oci'

new coreDefaultDhcpOptions.CoreDefaultDhcpOptions(scope: Construct, id: string, config: CoreDefaultDhcpOptionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig">CoreDefaultDhcpOptionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig">CoreDefaultDhcpOptionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.putOptions">putOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.resetDomainNameType">resetDomainNameType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOptions` <a name="putOptions" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.putOptions"></a>

```typescript
public putOptions(value: IResolvable | CoreDefaultDhcpOptionsOptions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.putOptions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptions">CoreDefaultDhcpOptionsOptions</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.putTimeouts"></a>

```typescript
public putTimeouts(value: CoreDefaultDhcpOptionsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeouts">CoreDefaultDhcpOptionsTimeouts</a>

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetDomainNameType` <a name="resetDomainNameType" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.resetDomainNameType"></a>

```typescript
public resetDomainNameType(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CoreDefaultDhcpOptions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.isConstruct"></a>

```typescript
import { coreDefaultDhcpOptions } from 'rhizo-co-terraform-provider-oci'

coreDefaultDhcpOptions.CoreDefaultDhcpOptions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.isTerraformElement"></a>

```typescript
import { coreDefaultDhcpOptions } from 'rhizo-co-terraform-provider-oci'

coreDefaultDhcpOptions.CoreDefaultDhcpOptions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.isTerraformResource"></a>

```typescript
import { coreDefaultDhcpOptions } from 'rhizo-co-terraform-provider-oci'

coreDefaultDhcpOptions.CoreDefaultDhcpOptions.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.generateConfigForImport"></a>

```typescript
import { coreDefaultDhcpOptions } from 'rhizo-co-terraform-provider-oci'

coreDefaultDhcpOptions.CoreDefaultDhcpOptions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CoreDefaultDhcpOptions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CoreDefaultDhcpOptions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CoreDefaultDhcpOptions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CoreDefaultDhcpOptions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.options">options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList">CoreDefaultDhcpOptionsOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference">CoreDefaultDhcpOptionsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.domainNameTypeInput">domainNameTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.manageDefaultResourceIdInput">manageDefaultResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.optionsInput">optionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptions">CoreDefaultDhcpOptionsOptions</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeouts">CoreDefaultDhcpOptionsTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.domainNameType">domainNameType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.manageDefaultResourceId">manageDefaultResourceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `options`<sup>Required</sup> <a name="options" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.options"></a>

```typescript
public readonly options: CoreDefaultDhcpOptionsOptionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList">CoreDefaultDhcpOptionsOptionsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.timeouts"></a>

```typescript
public readonly timeouts: CoreDefaultDhcpOptionsTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference">CoreDefaultDhcpOptionsTimeoutsOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `domainNameTypeInput`<sup>Optional</sup> <a name="domainNameTypeInput" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.domainNameTypeInput"></a>

```typescript
public readonly domainNameTypeInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `manageDefaultResourceIdInput`<sup>Optional</sup> <a name="manageDefaultResourceIdInput" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.manageDefaultResourceIdInput"></a>

```typescript
public readonly manageDefaultResourceIdInput: string;
```

- *Type:* string

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.optionsInput"></a>

```typescript
public readonly optionsInput: IResolvable | CoreDefaultDhcpOptionsOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptions">CoreDefaultDhcpOptionsOptions</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CoreDefaultDhcpOptionsTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeouts">CoreDefaultDhcpOptionsTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `domainNameType`<sup>Required</sup> <a name="domainNameType" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.domainNameType"></a>

```typescript
public readonly domainNameType: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `manageDefaultResourceId`<sup>Required</sup> <a name="manageDefaultResourceId" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.manageDefaultResourceId"></a>

```typescript
public readonly manageDefaultResourceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CoreDefaultDhcpOptionsConfig <a name="CoreDefaultDhcpOptionsConfig" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.Initializer"></a>

```typescript
import { coreDefaultDhcpOptions } from 'rhizo-co-terraform-provider-oci'

const coreDefaultDhcpOptionsConfig: coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.manageDefaultResourceId">manageDefaultResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#manage_default_resource_id CoreDefaultDhcpOptions#manage_default_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.options">options</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptions">CoreDefaultDhcpOptionsOptions</a>[]</code> | options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#compartment_id CoreDefaultDhcpOptions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#defined_tags CoreDefaultDhcpOptions#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#display_name CoreDefaultDhcpOptions#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.domainNameType">domainNameType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#domain_name_type CoreDefaultDhcpOptions#domain_name_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#freeform_tags CoreDefaultDhcpOptions#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#id CoreDefaultDhcpOptions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeouts">CoreDefaultDhcpOptionsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `manageDefaultResourceId`<sup>Required</sup> <a name="manageDefaultResourceId" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.manageDefaultResourceId"></a>

```typescript
public readonly manageDefaultResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#manage_default_resource_id CoreDefaultDhcpOptions#manage_default_resource_id}.

---

##### `options`<sup>Required</sup> <a name="options" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.options"></a>

```typescript
public readonly options: IResolvable | CoreDefaultDhcpOptionsOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptions">CoreDefaultDhcpOptionsOptions</a>[]

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#options CoreDefaultDhcpOptions#options}

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#compartment_id CoreDefaultDhcpOptions#compartment_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#defined_tags CoreDefaultDhcpOptions#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#display_name CoreDefaultDhcpOptions#display_name}.

---

##### `domainNameType`<sup>Optional</sup> <a name="domainNameType" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.domainNameType"></a>

```typescript
public readonly domainNameType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#domain_name_type CoreDefaultDhcpOptions#domain_name_type}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#freeform_tags CoreDefaultDhcpOptions#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#id CoreDefaultDhcpOptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CoreDefaultDhcpOptionsTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeouts">CoreDefaultDhcpOptionsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#timeouts CoreDefaultDhcpOptions#timeouts}

---

### CoreDefaultDhcpOptionsOptions <a name="CoreDefaultDhcpOptionsOptions" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptions.Initializer"></a>

```typescript
import { coreDefaultDhcpOptions } from 'rhizo-co-terraform-provider-oci'

const coreDefaultDhcpOptionsOptions: coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptions.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#type CoreDefaultDhcpOptions#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptions.property.customDnsServers">customDnsServers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#custom_dns_servers CoreDefaultDhcpOptions#custom_dns_servers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptions.property.searchDomainNames">searchDomainNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#search_domain_names CoreDefaultDhcpOptions#search_domain_names}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptions.property.serverType">serverType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#server_type CoreDefaultDhcpOptions#server_type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptions.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#type CoreDefaultDhcpOptions#type}.

---

##### `customDnsServers`<sup>Optional</sup> <a name="customDnsServers" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptions.property.customDnsServers"></a>

```typescript
public readonly customDnsServers: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#custom_dns_servers CoreDefaultDhcpOptions#custom_dns_servers}.

---

##### `searchDomainNames`<sup>Optional</sup> <a name="searchDomainNames" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptions.property.searchDomainNames"></a>

```typescript
public readonly searchDomainNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#search_domain_names CoreDefaultDhcpOptions#search_domain_names}.

---

##### `serverType`<sup>Optional</sup> <a name="serverType" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptions.property.serverType"></a>

```typescript
public readonly serverType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#server_type CoreDefaultDhcpOptions#server_type}.

---

### CoreDefaultDhcpOptionsTimeouts <a name="CoreDefaultDhcpOptionsTimeouts" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeouts.Initializer"></a>

```typescript
import { coreDefaultDhcpOptions } from 'rhizo-co-terraform-provider-oci'

const coreDefaultDhcpOptionsTimeouts: coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#create CoreDefaultDhcpOptions#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#delete CoreDefaultDhcpOptions#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#update CoreDefaultDhcpOptions#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#create CoreDefaultDhcpOptions#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#delete CoreDefaultDhcpOptions#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#update CoreDefaultDhcpOptions#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreDefaultDhcpOptionsOptionsList <a name="CoreDefaultDhcpOptionsOptionsList" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.Initializer"></a>

```typescript
import { coreDefaultDhcpOptions } from 'rhizo-co-terraform-provider-oci'

new coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.get"></a>

```typescript
public get(index: number): CoreDefaultDhcpOptionsOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptions">CoreDefaultDhcpOptionsOptions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CoreDefaultDhcpOptionsOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptions">CoreDefaultDhcpOptionsOptions</a>[]

---


### CoreDefaultDhcpOptionsOptionsOutputReference <a name="CoreDefaultDhcpOptionsOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.Initializer"></a>

```typescript
import { coreDefaultDhcpOptions } from 'rhizo-co-terraform-provider-oci'

new coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.resetCustomDnsServers">resetCustomDnsServers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.resetSearchDomainNames">resetSearchDomainNames</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.resetServerType">resetServerType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomDnsServers` <a name="resetCustomDnsServers" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.resetCustomDnsServers"></a>

```typescript
public resetCustomDnsServers(): void
```

##### `resetSearchDomainNames` <a name="resetSearchDomainNames" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.resetSearchDomainNames"></a>

```typescript
public resetSearchDomainNames(): void
```

##### `resetServerType` <a name="resetServerType" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.resetServerType"></a>

```typescript
public resetServerType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.customDnsServersInput">customDnsServersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.searchDomainNamesInput">searchDomainNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.serverTypeInput">serverTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.customDnsServers">customDnsServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.searchDomainNames">searchDomainNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.serverType">serverType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptions">CoreDefaultDhcpOptionsOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customDnsServersInput`<sup>Optional</sup> <a name="customDnsServersInput" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.customDnsServersInput"></a>

```typescript
public readonly customDnsServersInput: string[];
```

- *Type:* string[]

---

##### `searchDomainNamesInput`<sup>Optional</sup> <a name="searchDomainNamesInput" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.searchDomainNamesInput"></a>

```typescript
public readonly searchDomainNamesInput: string[];
```

- *Type:* string[]

---

##### `serverTypeInput`<sup>Optional</sup> <a name="serverTypeInput" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.serverTypeInput"></a>

```typescript
public readonly serverTypeInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `customDnsServers`<sup>Required</sup> <a name="customDnsServers" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.customDnsServers"></a>

```typescript
public readonly customDnsServers: string[];
```

- *Type:* string[]

---

##### `searchDomainNames`<sup>Required</sup> <a name="searchDomainNames" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.searchDomainNames"></a>

```typescript
public readonly searchDomainNames: string[];
```

- *Type:* string[]

---

##### `serverType`<sup>Required</sup> <a name="serverType" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.serverType"></a>

```typescript
public readonly serverType: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CoreDefaultDhcpOptionsOptions;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptions">CoreDefaultDhcpOptionsOptions</a>

---


### CoreDefaultDhcpOptionsTimeoutsOutputReference <a name="CoreDefaultDhcpOptionsTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.Initializer"></a>

```typescript
import { coreDefaultDhcpOptions } from 'rhizo-co-terraform-provider-oci'

new coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeouts">CoreDefaultDhcpOptionsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CoreDefaultDhcpOptionsTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeouts">CoreDefaultDhcpOptionsTimeouts</a>

---



