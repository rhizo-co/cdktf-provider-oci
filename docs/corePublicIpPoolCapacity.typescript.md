# `corePublicIpPoolCapacity` Submodule <a name="`corePublicIpPoolCapacity` Submodule" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CorePublicIpPoolCapacity <a name="CorePublicIpPoolCapacity" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_public_ip_pool_capacity oci_core_public_ip_pool_capacity}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.Initializer"></a>

```typescript
import { corePublicIpPoolCapacity } from 'rhizo-co-terraform-provider-oci'

new corePublicIpPoolCapacity.CorePublicIpPoolCapacity(scope: Construct, id: string, config: CorePublicIpPoolCapacityConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig">CorePublicIpPoolCapacityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig">CorePublicIpPoolCapacityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.putTimeouts"></a>

```typescript
public putTimeouts(value: CorePublicIpPoolCapacityTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeouts">CorePublicIpPoolCapacityTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CorePublicIpPoolCapacity resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.isConstruct"></a>

```typescript
import { corePublicIpPoolCapacity } from 'rhizo-co-terraform-provider-oci'

corePublicIpPoolCapacity.CorePublicIpPoolCapacity.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.isTerraformElement"></a>

```typescript
import { corePublicIpPoolCapacity } from 'rhizo-co-terraform-provider-oci'

corePublicIpPoolCapacity.CorePublicIpPoolCapacity.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.isTerraformResource"></a>

```typescript
import { corePublicIpPoolCapacity } from 'rhizo-co-terraform-provider-oci'

corePublicIpPoolCapacity.CorePublicIpPoolCapacity.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.generateConfigForImport"></a>

```typescript
import { corePublicIpPoolCapacity } from 'rhizo-co-terraform-provider-oci'

corePublicIpPoolCapacity.CorePublicIpPoolCapacity.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CorePublicIpPoolCapacity resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CorePublicIpPoolCapacity to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CorePublicIpPoolCapacity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_public_ip_pool_capacity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CorePublicIpPoolCapacity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference">CorePublicIpPoolCapacityTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.byoipIdInput">byoipIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.cidrBlockInput">cidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.publicIpPoolIdInput">publicIpPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeouts">CorePublicIpPoolCapacityTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.byoipId">byoipId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.cidrBlock">cidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.publicIpPoolId">publicIpPoolId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.timeouts"></a>

```typescript
public readonly timeouts: CorePublicIpPoolCapacityTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference">CorePublicIpPoolCapacityTimeoutsOutputReference</a>

---

##### `byoipIdInput`<sup>Optional</sup> <a name="byoipIdInput" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.byoipIdInput"></a>

```typescript
public readonly byoipIdInput: string;
```

- *Type:* string

---

##### `cidrBlockInput`<sup>Optional</sup> <a name="cidrBlockInput" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.cidrBlockInput"></a>

```typescript
public readonly cidrBlockInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `publicIpPoolIdInput`<sup>Optional</sup> <a name="publicIpPoolIdInput" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.publicIpPoolIdInput"></a>

```typescript
public readonly publicIpPoolIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CorePublicIpPoolCapacityTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeouts">CorePublicIpPoolCapacityTimeouts</a>

---

##### `byoipId`<sup>Required</sup> <a name="byoipId" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.byoipId"></a>

```typescript
public readonly byoipId: string;
```

- *Type:* string

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `publicIpPoolId`<sup>Required</sup> <a name="publicIpPoolId" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.publicIpPoolId"></a>

```typescript
public readonly publicIpPoolId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CorePublicIpPoolCapacityConfig <a name="CorePublicIpPoolCapacityConfig" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig.Initializer"></a>

```typescript
import { corePublicIpPoolCapacity } from 'rhizo-co-terraform-provider-oci'

const corePublicIpPoolCapacityConfig: corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig.property.byoipId">byoipId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_public_ip_pool_capacity#byoip_id CorePublicIpPoolCapacity#byoip_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig.property.cidrBlock">cidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_public_ip_pool_capacity#cidr_block CorePublicIpPoolCapacity#cidr_block}. |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig.property.publicIpPoolId">publicIpPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_public_ip_pool_capacity#public_ip_pool_id CorePublicIpPoolCapacity#public_ip_pool_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_public_ip_pool_capacity#id CorePublicIpPoolCapacity#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeouts">CorePublicIpPoolCapacityTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `byoipId`<sup>Required</sup> <a name="byoipId" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig.property.byoipId"></a>

```typescript
public readonly byoipId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_public_ip_pool_capacity#byoip_id CorePublicIpPoolCapacity#byoip_id}.

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_public_ip_pool_capacity#cidr_block CorePublicIpPoolCapacity#cidr_block}.

---

##### `publicIpPoolId`<sup>Required</sup> <a name="publicIpPoolId" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig.property.publicIpPoolId"></a>

```typescript
public readonly publicIpPoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_public_ip_pool_capacity#public_ip_pool_id CorePublicIpPoolCapacity#public_ip_pool_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_public_ip_pool_capacity#id CorePublicIpPoolCapacity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CorePublicIpPoolCapacityTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeouts">CorePublicIpPoolCapacityTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_public_ip_pool_capacity#timeouts CorePublicIpPoolCapacity#timeouts}

---

### CorePublicIpPoolCapacityTimeouts <a name="CorePublicIpPoolCapacityTimeouts" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeouts.Initializer"></a>

```typescript
import { corePublicIpPoolCapacity } from 'rhizo-co-terraform-provider-oci'

const corePublicIpPoolCapacityTimeouts: corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_public_ip_pool_capacity#create CorePublicIpPoolCapacity#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_public_ip_pool_capacity#delete CorePublicIpPoolCapacity#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_public_ip_pool_capacity#update CorePublicIpPoolCapacity#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_public_ip_pool_capacity#create CorePublicIpPoolCapacity#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_public_ip_pool_capacity#delete CorePublicIpPoolCapacity#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_public_ip_pool_capacity#update CorePublicIpPoolCapacity#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CorePublicIpPoolCapacityTimeoutsOutputReference <a name="CorePublicIpPoolCapacityTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.Initializer"></a>

```typescript
import { corePublicIpPoolCapacity } from 'rhizo-co-terraform-provider-oci'

new corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeouts">CorePublicIpPoolCapacityTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CorePublicIpPoolCapacityTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeouts">CorePublicIpPoolCapacityTimeouts</a>

---



