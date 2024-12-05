# `coreInstanceMaintenanceEvent` Submodule <a name="`coreInstanceMaintenanceEvent` Submodule" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreInstanceMaintenanceEvent <a name="CoreInstanceMaintenanceEvent" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event oci_core_instance_maintenance_event}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer"></a>

```typescript
import { coreInstanceMaintenanceEvent } from 'rhizo-co-terraform-provider-oci'

new coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent(scope: Construct, id: string, config: CoreInstanceMaintenanceEventConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig">CoreInstanceMaintenanceEventConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig">CoreInstanceMaintenanceEventConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetAlternativeResolutionAction">resetAlternativeResolutionAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetCanDeleteLocalStorage">resetCanDeleteLocalStorage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetTimeWindowStart">resetTimeWindowStart</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.putTimeouts"></a>

```typescript
public putTimeouts(value: CoreInstanceMaintenanceEventTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts">CoreInstanceMaintenanceEventTimeouts</a>

---

##### `resetAlternativeResolutionAction` <a name="resetAlternativeResolutionAction" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetAlternativeResolutionAction"></a>

```typescript
public resetAlternativeResolutionAction(): void
```

##### `resetCanDeleteLocalStorage` <a name="resetCanDeleteLocalStorage" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetCanDeleteLocalStorage"></a>

```typescript
public resetCanDeleteLocalStorage(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTimeWindowStart` <a name="resetTimeWindowStart" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetTimeWindowStart"></a>

```typescript
public resetTimeWindowStart(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CoreInstanceMaintenanceEvent resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.isConstruct"></a>

```typescript
import { coreInstanceMaintenanceEvent } from 'rhizo-co-terraform-provider-oci'

coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.isTerraformElement"></a>

```typescript
import { coreInstanceMaintenanceEvent } from 'rhizo-co-terraform-provider-oci'

coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.isTerraformResource"></a>

```typescript
import { coreInstanceMaintenanceEvent } from 'rhizo-co-terraform-provider-oci'

coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.generateConfigForImport"></a>

```typescript
import { coreInstanceMaintenanceEvent } from 'rhizo-co-terraform-provider-oci'

coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CoreInstanceMaintenanceEvent resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CoreInstanceMaintenanceEvent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CoreInstanceMaintenanceEvent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CoreInstanceMaintenanceEvent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.additionalDetails">additionalDetails</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.alternativeResolutionActions">alternativeResolutionActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.canReschedule">canReschedule</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.correlationToken">correlationToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.estimatedDuration">estimatedDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.instanceAction">instanceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.maintenanceCategory">maintenanceCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.maintenanceReason">maintenanceReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.startWindowDuration">startWindowDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeFinished">timeFinished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeHardDueDate">timeHardDueDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference">CoreInstanceMaintenanceEventTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeStarted">timeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.alternativeResolutionActionInput">alternativeResolutionActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.canDeleteLocalStorageInput">canDeleteLocalStorageInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.instanceMaintenanceEventIdInput">instanceMaintenanceEventIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts">CoreInstanceMaintenanceEventTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeWindowStartInput">timeWindowStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.alternativeResolutionAction">alternativeResolutionAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.canDeleteLocalStorage">canDeleteLocalStorage</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.instanceMaintenanceEventId">instanceMaintenanceEventId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeWindowStart">timeWindowStart</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `additionalDetails`<sup>Required</sup> <a name="additionalDetails" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.additionalDetails"></a>

```typescript
public readonly additionalDetails: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `alternativeResolutionActions`<sup>Required</sup> <a name="alternativeResolutionActions" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.alternativeResolutionActions"></a>

```typescript
public readonly alternativeResolutionActions: string[];
```

- *Type:* string[]

---

##### `canReschedule`<sup>Required</sup> <a name="canReschedule" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.canReschedule"></a>

```typescript
public readonly canReschedule: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `correlationToken`<sup>Required</sup> <a name="correlationToken" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.correlationToken"></a>

```typescript
public readonly correlationToken: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `estimatedDuration`<sup>Required</sup> <a name="estimatedDuration" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.estimatedDuration"></a>

```typescript
public readonly estimatedDuration: string;
```

- *Type:* string

---

##### `instanceAction`<sup>Required</sup> <a name="instanceAction" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.instanceAction"></a>

```typescript
public readonly instanceAction: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `maintenanceCategory`<sup>Required</sup> <a name="maintenanceCategory" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.maintenanceCategory"></a>

```typescript
public readonly maintenanceCategory: string;
```

- *Type:* string

---

##### `maintenanceReason`<sup>Required</sup> <a name="maintenanceReason" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.maintenanceReason"></a>

```typescript
public readonly maintenanceReason: string;
```

- *Type:* string

---

##### `startWindowDuration`<sup>Required</sup> <a name="startWindowDuration" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.startWindowDuration"></a>

```typescript
public readonly startWindowDuration: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeFinished`<sup>Required</sup> <a name="timeFinished" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeFinished"></a>

```typescript
public readonly timeFinished: string;
```

- *Type:* string

---

##### `timeHardDueDate`<sup>Required</sup> <a name="timeHardDueDate" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeHardDueDate"></a>

```typescript
public readonly timeHardDueDate: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeouts"></a>

```typescript
public readonly timeouts: CoreInstanceMaintenanceEventTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference">CoreInstanceMaintenanceEventTimeoutsOutputReference</a>

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

---

##### `alternativeResolutionActionInput`<sup>Optional</sup> <a name="alternativeResolutionActionInput" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.alternativeResolutionActionInput"></a>

```typescript
public readonly alternativeResolutionActionInput: string;
```

- *Type:* string

---

##### `canDeleteLocalStorageInput`<sup>Optional</sup> <a name="canDeleteLocalStorageInput" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.canDeleteLocalStorageInput"></a>

```typescript
public readonly canDeleteLocalStorageInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceMaintenanceEventIdInput`<sup>Optional</sup> <a name="instanceMaintenanceEventIdInput" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.instanceMaintenanceEventIdInput"></a>

```typescript
public readonly instanceMaintenanceEventIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CoreInstanceMaintenanceEventTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts">CoreInstanceMaintenanceEventTimeouts</a>

---

##### `timeWindowStartInput`<sup>Optional</sup> <a name="timeWindowStartInput" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeWindowStartInput"></a>

```typescript
public readonly timeWindowStartInput: string;
```

- *Type:* string

---

##### `alternativeResolutionAction`<sup>Required</sup> <a name="alternativeResolutionAction" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.alternativeResolutionAction"></a>

```typescript
public readonly alternativeResolutionAction: string;
```

- *Type:* string

---

##### `canDeleteLocalStorage`<sup>Required</sup> <a name="canDeleteLocalStorage" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.canDeleteLocalStorage"></a>

```typescript
public readonly canDeleteLocalStorage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceMaintenanceEventId`<sup>Required</sup> <a name="instanceMaintenanceEventId" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.instanceMaintenanceEventId"></a>

```typescript
public readonly instanceMaintenanceEventId: string;
```

- *Type:* string

---

##### `timeWindowStart`<sup>Required</sup> <a name="timeWindowStart" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeWindowStart"></a>

```typescript
public readonly timeWindowStart: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CoreInstanceMaintenanceEventConfig <a name="CoreInstanceMaintenanceEventConfig" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.Initializer"></a>

```typescript
import { coreInstanceMaintenanceEvent } from 'rhizo-co-terraform-provider-oci'

const coreInstanceMaintenanceEventConfig: coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.instanceMaintenanceEventId">instanceMaintenanceEventId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#instance_maintenance_event_id CoreInstanceMaintenanceEvent#instance_maintenance_event_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.alternativeResolutionAction">alternativeResolutionAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#alternative_resolution_action CoreInstanceMaintenanceEvent#alternative_resolution_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.canDeleteLocalStorage">canDeleteLocalStorage</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#can_delete_local_storage CoreInstanceMaintenanceEvent#can_delete_local_storage}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#defined_tags CoreInstanceMaintenanceEvent#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#display_name CoreInstanceMaintenanceEvent#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#freeform_tags CoreInstanceMaintenanceEvent#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#id CoreInstanceMaintenanceEvent#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts">CoreInstanceMaintenanceEventTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.timeWindowStart">timeWindowStart</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#time_window_start CoreInstanceMaintenanceEvent#time_window_start}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `instanceMaintenanceEventId`<sup>Required</sup> <a name="instanceMaintenanceEventId" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.instanceMaintenanceEventId"></a>

```typescript
public readonly instanceMaintenanceEventId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#instance_maintenance_event_id CoreInstanceMaintenanceEvent#instance_maintenance_event_id}.

---

##### `alternativeResolutionAction`<sup>Optional</sup> <a name="alternativeResolutionAction" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.alternativeResolutionAction"></a>

```typescript
public readonly alternativeResolutionAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#alternative_resolution_action CoreInstanceMaintenanceEvent#alternative_resolution_action}.

---

##### `canDeleteLocalStorage`<sup>Optional</sup> <a name="canDeleteLocalStorage" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.canDeleteLocalStorage"></a>

```typescript
public readonly canDeleteLocalStorage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#can_delete_local_storage CoreInstanceMaintenanceEvent#can_delete_local_storage}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#defined_tags CoreInstanceMaintenanceEvent#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#display_name CoreInstanceMaintenanceEvent#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#freeform_tags CoreInstanceMaintenanceEvent#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#id CoreInstanceMaintenanceEvent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CoreInstanceMaintenanceEventTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts">CoreInstanceMaintenanceEventTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#timeouts CoreInstanceMaintenanceEvent#timeouts}

---

##### `timeWindowStart`<sup>Optional</sup> <a name="timeWindowStart" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.timeWindowStart"></a>

```typescript
public readonly timeWindowStart: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#time_window_start CoreInstanceMaintenanceEvent#time_window_start}.

---

### CoreInstanceMaintenanceEventTimeouts <a name="CoreInstanceMaintenanceEventTimeouts" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts.Initializer"></a>

```typescript
import { coreInstanceMaintenanceEvent } from 'rhizo-co-terraform-provider-oci'

const coreInstanceMaintenanceEventTimeouts: coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#create CoreInstanceMaintenanceEvent#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#delete CoreInstanceMaintenanceEvent#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#update CoreInstanceMaintenanceEvent#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#create CoreInstanceMaintenanceEvent#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#delete CoreInstanceMaintenanceEvent#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#update CoreInstanceMaintenanceEvent#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreInstanceMaintenanceEventTimeoutsOutputReference <a name="CoreInstanceMaintenanceEventTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.Initializer"></a>

```typescript
import { coreInstanceMaintenanceEvent } from 'rhizo-co-terraform-provider-oci'

new coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts">CoreInstanceMaintenanceEventTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CoreInstanceMaintenanceEventTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts">CoreInstanceMaintenanceEventTimeouts</a>

---



