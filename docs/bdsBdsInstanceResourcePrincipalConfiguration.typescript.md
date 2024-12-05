# `bdsBdsInstanceResourcePrincipalConfiguration` Submodule <a name="`bdsBdsInstanceResourcePrincipalConfiguration` Submodule" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BdsBdsInstanceResourcePrincipalConfiguration <a name="BdsBdsInstanceResourcePrincipalConfiguration" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration oci_bds_bds_instance_resource_principal_configuration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.Initializer"></a>

```typescript
import { bdsBdsInstanceResourcePrincipalConfiguration } from 'rhizo-co-terraform-provider-oci'

new bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration(scope: Construct, id: string, config: BdsBdsInstanceResourcePrincipalConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig">BdsBdsInstanceResourcePrincipalConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig">BdsBdsInstanceResourcePrincipalConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.resetForceRefreshResourcePrincipalTrigger">resetForceRefreshResourcePrincipalTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.resetSessionTokenLifeSpanDurationInHours">resetSessionTokenLifeSpanDurationInHours</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.putTimeouts"></a>

```typescript
public putTimeouts(value: BdsBdsInstanceResourcePrincipalConfigurationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeouts">BdsBdsInstanceResourcePrincipalConfigurationTimeouts</a>

---

##### `resetForceRefreshResourcePrincipalTrigger` <a name="resetForceRefreshResourcePrincipalTrigger" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.resetForceRefreshResourcePrincipalTrigger"></a>

```typescript
public resetForceRefreshResourcePrincipalTrigger(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSessionTokenLifeSpanDurationInHours` <a name="resetSessionTokenLifeSpanDurationInHours" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.resetSessionTokenLifeSpanDurationInHours"></a>

```typescript
public resetSessionTokenLifeSpanDurationInHours(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BdsBdsInstanceResourcePrincipalConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.isConstruct"></a>

```typescript
import { bdsBdsInstanceResourcePrincipalConfiguration } from 'rhizo-co-terraform-provider-oci'

bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.isTerraformElement"></a>

```typescript
import { bdsBdsInstanceResourcePrincipalConfiguration } from 'rhizo-co-terraform-provider-oci'

bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.isTerraformResource"></a>

```typescript
import { bdsBdsInstanceResourcePrincipalConfiguration } from 'rhizo-co-terraform-provider-oci'

bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.generateConfigForImport"></a>

```typescript
import { bdsBdsInstanceResourcePrincipalConfiguration } from 'rhizo-co-terraform-provider-oci'

bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BdsBdsInstanceResourcePrincipalConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BdsBdsInstanceResourcePrincipalConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BdsBdsInstanceResourcePrincipalConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BdsBdsInstanceResourcePrincipalConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference">BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.timeTokenExpiry">timeTokenExpiry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.timeTokenRefreshed">timeTokenRefreshed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.bdsInstanceIdInput">bdsInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.clusterAdminPasswordInput">clusterAdminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.forceRefreshResourcePrincipalTriggerInput">forceRefreshResourcePrincipalTriggerInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.sessionTokenLifeSpanDurationInHoursInput">sessionTokenLifeSpanDurationInHoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeouts">BdsBdsInstanceResourcePrincipalConfigurationTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.bdsInstanceId">bdsInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.clusterAdminPassword">clusterAdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.forceRefreshResourcePrincipalTrigger">forceRefreshResourcePrincipalTrigger</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.sessionTokenLifeSpanDurationInHours">sessionTokenLifeSpanDurationInHours</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.timeouts"></a>

```typescript
public readonly timeouts: BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference">BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference</a>

---

##### `timeTokenExpiry`<sup>Required</sup> <a name="timeTokenExpiry" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.timeTokenExpiry"></a>

```typescript
public readonly timeTokenExpiry: string;
```

- *Type:* string

---

##### `timeTokenRefreshed`<sup>Required</sup> <a name="timeTokenRefreshed" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.timeTokenRefreshed"></a>

```typescript
public readonly timeTokenRefreshed: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `bdsInstanceIdInput`<sup>Optional</sup> <a name="bdsInstanceIdInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.bdsInstanceIdInput"></a>

```typescript
public readonly bdsInstanceIdInput: string;
```

- *Type:* string

---

##### `clusterAdminPasswordInput`<sup>Optional</sup> <a name="clusterAdminPasswordInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.clusterAdminPasswordInput"></a>

```typescript
public readonly clusterAdminPasswordInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `forceRefreshResourcePrincipalTriggerInput`<sup>Optional</sup> <a name="forceRefreshResourcePrincipalTriggerInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.forceRefreshResourcePrincipalTriggerInput"></a>

```typescript
public readonly forceRefreshResourcePrincipalTriggerInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `sessionTokenLifeSpanDurationInHoursInput`<sup>Optional</sup> <a name="sessionTokenLifeSpanDurationInHoursInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.sessionTokenLifeSpanDurationInHoursInput"></a>

```typescript
public readonly sessionTokenLifeSpanDurationInHoursInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BdsBdsInstanceResourcePrincipalConfigurationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeouts">BdsBdsInstanceResourcePrincipalConfigurationTimeouts</a>

---

##### `bdsInstanceId`<sup>Required</sup> <a name="bdsInstanceId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.bdsInstanceId"></a>

```typescript
public readonly bdsInstanceId: string;
```

- *Type:* string

---

##### `clusterAdminPassword`<sup>Required</sup> <a name="clusterAdminPassword" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.clusterAdminPassword"></a>

```typescript
public readonly clusterAdminPassword: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `forceRefreshResourcePrincipalTrigger`<sup>Required</sup> <a name="forceRefreshResourcePrincipalTrigger" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.forceRefreshResourcePrincipalTrigger"></a>

```typescript
public readonly forceRefreshResourcePrincipalTrigger: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `sessionTokenLifeSpanDurationInHours`<sup>Required</sup> <a name="sessionTokenLifeSpanDurationInHours" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.sessionTokenLifeSpanDurationInHours"></a>

```typescript
public readonly sessionTokenLifeSpanDurationInHours: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BdsBdsInstanceResourcePrincipalConfigurationConfig <a name="BdsBdsInstanceResourcePrincipalConfigurationConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.Initializer"></a>

```typescript
import { bdsBdsInstanceResourcePrincipalConfiguration } from 'rhizo-co-terraform-provider-oci'

const bdsBdsInstanceResourcePrincipalConfigurationConfig: bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.bdsInstanceId">bdsInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#bds_instance_id BdsBdsInstanceResourcePrincipalConfiguration#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.clusterAdminPassword">clusterAdminPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#cluster_admin_password BdsBdsInstanceResourcePrincipalConfiguration#cluster_admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#display_name BdsBdsInstanceResourcePrincipalConfiguration#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.forceRefreshResourcePrincipalTrigger">forceRefreshResourcePrincipalTrigger</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#force_refresh_resource_principal_trigger BdsBdsInstanceResourcePrincipalConfiguration#force_refresh_resource_principal_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#id BdsBdsInstanceResourcePrincipalConfiguration#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.sessionTokenLifeSpanDurationInHours">sessionTokenLifeSpanDurationInHours</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#session_token_life_span_duration_in_hours BdsBdsInstanceResourcePrincipalConfiguration#session_token_life_span_duration_in_hours}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeouts">BdsBdsInstanceResourcePrincipalConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bdsInstanceId`<sup>Required</sup> <a name="bdsInstanceId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.bdsInstanceId"></a>

```typescript
public readonly bdsInstanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#bds_instance_id BdsBdsInstanceResourcePrincipalConfiguration#bds_instance_id}.

---

##### `clusterAdminPassword`<sup>Required</sup> <a name="clusterAdminPassword" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.clusterAdminPassword"></a>

```typescript
public readonly clusterAdminPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#cluster_admin_password BdsBdsInstanceResourcePrincipalConfiguration#cluster_admin_password}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#display_name BdsBdsInstanceResourcePrincipalConfiguration#display_name}.

---

##### `forceRefreshResourcePrincipalTrigger`<sup>Optional</sup> <a name="forceRefreshResourcePrincipalTrigger" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.forceRefreshResourcePrincipalTrigger"></a>

```typescript
public readonly forceRefreshResourcePrincipalTrigger: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#force_refresh_resource_principal_trigger BdsBdsInstanceResourcePrincipalConfiguration#force_refresh_resource_principal_trigger}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#id BdsBdsInstanceResourcePrincipalConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sessionTokenLifeSpanDurationInHours`<sup>Optional</sup> <a name="sessionTokenLifeSpanDurationInHours" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.sessionTokenLifeSpanDurationInHours"></a>

```typescript
public readonly sessionTokenLifeSpanDurationInHours: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#session_token_life_span_duration_in_hours BdsBdsInstanceResourcePrincipalConfiguration#session_token_life_span_duration_in_hours}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BdsBdsInstanceResourcePrincipalConfigurationTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeouts">BdsBdsInstanceResourcePrincipalConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#timeouts BdsBdsInstanceResourcePrincipalConfiguration#timeouts}

---

### BdsBdsInstanceResourcePrincipalConfigurationTimeouts <a name="BdsBdsInstanceResourcePrincipalConfigurationTimeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeouts.Initializer"></a>

```typescript
import { bdsBdsInstanceResourcePrincipalConfiguration } from 'rhizo-co-terraform-provider-oci'

const bdsBdsInstanceResourcePrincipalConfigurationTimeouts: bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#create BdsBdsInstanceResourcePrincipalConfiguration#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#delete BdsBdsInstanceResourcePrincipalConfiguration#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#update BdsBdsInstanceResourcePrincipalConfiguration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#create BdsBdsInstanceResourcePrincipalConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#delete BdsBdsInstanceResourcePrincipalConfiguration#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#update BdsBdsInstanceResourcePrincipalConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference <a name="BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.Initializer"></a>

```typescript
import { bdsBdsInstanceResourcePrincipalConfiguration } from 'rhizo-co-terraform-provider-oci'

new bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeouts">BdsBdsInstanceResourcePrincipalConfigurationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BdsBdsInstanceResourcePrincipalConfigurationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeouts">BdsBdsInstanceResourcePrincipalConfigurationTimeouts</a>

---



