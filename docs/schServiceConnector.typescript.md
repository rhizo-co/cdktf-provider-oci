# `schServiceConnector` Submodule <a name="`schServiceConnector` Submodule" id="rhizo-co-terraform-provider-oci.schServiceConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SchServiceConnector <a name="SchServiceConnector" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector oci_sch_service_connector}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer"></a>

```typescript
import { schServiceConnector } from 'rhizo-co-terraform-provider-oci'

new schServiceConnector.SchServiceConnector(scope: Construct, id: string, config: SchServiceConnectorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig">SchServiceConnectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig">SchServiceConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putSource">putSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTasks">putTasks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetTasks">resetTasks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSource` <a name="putSource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putSource"></a>

```typescript
public putSource(value: SchServiceConnectorSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putSource.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource">SchServiceConnectorSource</a>

---

##### `putTarget` <a name="putTarget" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTarget"></a>

```typescript
public putTarget(value: SchServiceConnectorTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTarget.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget">SchServiceConnectorTarget</a>

---

##### `putTasks` <a name="putTasks" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTasks"></a>

```typescript
public putTasks(value: IResolvable | SchServiceConnectorTasks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTasks.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks">SchServiceConnectorTasks</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTimeouts"></a>

```typescript
public putTimeouts(value: SchServiceConnectorTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts">SchServiceConnectorTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTasks` <a name="resetTasks" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetTasks"></a>

```typescript
public resetTasks(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SchServiceConnector resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.isConstruct"></a>

```typescript
import { schServiceConnector } from 'rhizo-co-terraform-provider-oci'

schServiceConnector.SchServiceConnector.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.isTerraformElement"></a>

```typescript
import { schServiceConnector } from 'rhizo-co-terraform-provider-oci'

schServiceConnector.SchServiceConnector.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.isTerraformResource"></a>

```typescript
import { schServiceConnector } from 'rhizo-co-terraform-provider-oci'

schServiceConnector.SchServiceConnector.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.generateConfigForImport"></a>

```typescript
import { schServiceConnector } from 'rhizo-co-terraform-provider-oci'

schServiceConnector.SchServiceConnector.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SchServiceConnector resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SchServiceConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SchServiceConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SchServiceConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.lifecyleDetails">lifecyleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.source">source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference">SchServiceConnectorSourceOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.target">target</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference">SchServiceConnectorTargetOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.tasks">tasks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList">SchServiceConnectorTasksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference">SchServiceConnectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.sourceInput">sourceInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource">SchServiceConnectorSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.targetInput">targetInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget">SchServiceConnectorTarget</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.tasksInput">tasksInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks">SchServiceConnectorTasks</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts">SchServiceConnectorTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `lifecyleDetails`<sup>Required</sup> <a name="lifecyleDetails" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.lifecyleDetails"></a>

```typescript
public readonly lifecyleDetails: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.source"></a>

```typescript
public readonly source: SchServiceConnectorSourceOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference">SchServiceConnectorSourceOutputReference</a>

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.target"></a>

```typescript
public readonly target: SchServiceConnectorTargetOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference">SchServiceConnectorTargetOutputReference</a>

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.tasks"></a>

```typescript
public readonly tasks: SchServiceConnectorTasksList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList">SchServiceConnectorTasksList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.timeouts"></a>

```typescript
public readonly timeouts: SchServiceConnectorTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference">SchServiceConnectorTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.sourceInput"></a>

```typescript
public readonly sourceInput: SchServiceConnectorSource;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource">SchServiceConnectorSource</a>

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.targetInput"></a>

```typescript
public readonly targetInput: SchServiceConnectorTarget;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget">SchServiceConnectorTarget</a>

---

##### `tasksInput`<sup>Optional</sup> <a name="tasksInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.tasksInput"></a>

```typescript
public readonly tasksInput: IResolvable | SchServiceConnectorTasks[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks">SchServiceConnectorTasks</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SchServiceConnectorTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts">SchServiceConnectorTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SchServiceConnectorConfig <a name="SchServiceConnectorConfig" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.Initializer"></a>

```typescript
import { schServiceConnector } from 'rhizo-co-terraform-provider-oci'

const schServiceConnectorConfig: schServiceConnector.SchServiceConnectorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#compartment_id SchServiceConnector#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#display_name SchServiceConnector#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.source">source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource">SchServiceConnectorSource</a></code> | source block. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.target">target</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget">SchServiceConnectorTarget</a></code> | target block. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#defined_tags SchServiceConnector#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#description SchServiceConnector#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#freeform_tags SchServiceConnector#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#id SchServiceConnector#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#state SchServiceConnector#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.tasks">tasks</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks">SchServiceConnectorTasks</a>[]</code> | tasks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts">SchServiceConnectorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#compartment_id SchServiceConnector#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#display_name SchServiceConnector#display_name}.

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.source"></a>

```typescript
public readonly source: SchServiceConnectorSource;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource">SchServiceConnectorSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#source SchServiceConnector#source}

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.target"></a>

```typescript
public readonly target: SchServiceConnectorTarget;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget">SchServiceConnectorTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#target SchServiceConnector#target}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#defined_tags SchServiceConnector#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#description SchServiceConnector#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#freeform_tags SchServiceConnector#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#id SchServiceConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#state SchServiceConnector#state}.

---

##### `tasks`<sup>Optional</sup> <a name="tasks" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.tasks"></a>

```typescript
public readonly tasks: IResolvable | SchServiceConnectorTasks[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks">SchServiceConnectorTasks</a>[]

tasks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#tasks SchServiceConnector#tasks}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SchServiceConnectorTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts">SchServiceConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#timeouts SchServiceConnector#timeouts}

---

### SchServiceConnectorSource <a name="SchServiceConnectorSource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.Initializer"></a>

```typescript
import { schServiceConnector } from 'rhizo-co-terraform-provider-oci'

const schServiceConnectorSource: schServiceConnector.SchServiceConnectorSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.kind">kind</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.configMap">configMap</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#config_map SchServiceConnector#config_map}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.cursor">cursor</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursor">SchServiceConnectorSourceCursor</a></code> | cursor block. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.logSources">logSources</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources">SchServiceConnectorSourceLogSources</a>[]</code> | log_sources block. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.monitoringSources">monitoringSources</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSources">SchServiceConnectorSourceMonitoringSources</a>[]</code> | monitoring_sources block. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.pluginName">pluginName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#plugin_name SchServiceConnector#plugin_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.streamId">streamId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#stream_id SchServiceConnector#stream_id}. |

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}.

---

##### `configMap`<sup>Optional</sup> <a name="configMap" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.configMap"></a>

```typescript
public readonly configMap: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#config_map SchServiceConnector#config_map}.

---

##### `cursor`<sup>Optional</sup> <a name="cursor" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.cursor"></a>

```typescript
public readonly cursor: SchServiceConnectorSourceCursor;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursor">SchServiceConnectorSourceCursor</a>

cursor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#cursor SchServiceConnector#cursor}

---

##### `logSources`<sup>Optional</sup> <a name="logSources" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.logSources"></a>

```typescript
public readonly logSources: IResolvable | SchServiceConnectorSourceLogSources[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources">SchServiceConnectorSourceLogSources</a>[]

log_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#log_sources SchServiceConnector#log_sources}

---

##### `monitoringSources`<sup>Optional</sup> <a name="monitoringSources" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.monitoringSources"></a>

```typescript
public readonly monitoringSources: IResolvable | SchServiceConnectorSourceMonitoringSources[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSources">SchServiceConnectorSourceMonitoringSources</a>[]

monitoring_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#monitoring_sources SchServiceConnector#monitoring_sources}

---

##### `pluginName`<sup>Optional</sup> <a name="pluginName" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.pluginName"></a>

```typescript
public readonly pluginName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#plugin_name SchServiceConnector#plugin_name}.

---

##### `streamId`<sup>Optional</sup> <a name="streamId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.streamId"></a>

```typescript
public readonly streamId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#stream_id SchServiceConnector#stream_id}.

---

### SchServiceConnectorSourceCursor <a name="SchServiceConnectorSourceCursor" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursor"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursor.Initializer"></a>

```typescript
import { schServiceConnector } from 'rhizo-co-terraform-provider-oci'

const schServiceConnectorSourceCursor: schServiceConnector.SchServiceConnectorSourceCursor = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursor.property.kind">kind</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}. |

---

##### `kind`<sup>Optional</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursor.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}.

---

### SchServiceConnectorSourceLogSources <a name="SchServiceConnectorSourceLogSources" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources.Initializer"></a>

```typescript
import { schServiceConnector } from 'rhizo-co-terraform-provider-oci'

const schServiceConnectorSourceLogSources: schServiceConnector.SchServiceConnectorSourceLogSources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#compartment_id SchServiceConnector#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources.property.logGroupId">logGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#log_group_id SchServiceConnector#log_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources.property.logId">logId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#log_id SchServiceConnector#log_id}. |

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#compartment_id SchServiceConnector#compartment_id}.

---

##### `logGroupId`<sup>Optional</sup> <a name="logGroupId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources.property.logGroupId"></a>

```typescript
public readonly logGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#log_group_id SchServiceConnector#log_group_id}.

---

##### `logId`<sup>Optional</sup> <a name="logId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources.property.logId"></a>

```typescript
public readonly logId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#log_id SchServiceConnector#log_id}.

---

### SchServiceConnectorSourceMonitoringSources <a name="SchServiceConnectorSourceMonitoringSources" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSources.Initializer"></a>

```typescript
import { schServiceConnector } from 'rhizo-co-terraform-provider-oci'

const schServiceConnectorSourceMonitoringSources: schServiceConnector.SchServiceConnectorSourceMonitoringSources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSources.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#compartment_id SchServiceConnector#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSources.property.namespaceDetails">namespaceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetails">SchServiceConnectorSourceMonitoringSourcesNamespaceDetails</a></code> | namespace_details block. |

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSources.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#compartment_id SchServiceConnector#compartment_id}.

---

##### `namespaceDetails`<sup>Optional</sup> <a name="namespaceDetails" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSources.property.namespaceDetails"></a>

```typescript
public readonly namespaceDetails: SchServiceConnectorSourceMonitoringSourcesNamespaceDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetails">SchServiceConnectorSourceMonitoringSourcesNamespaceDetails</a>

namespace_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#namespace_details SchServiceConnector#namespace_details}

---

### SchServiceConnectorSourceMonitoringSourcesNamespaceDetails <a name="SchServiceConnectorSourceMonitoringSourcesNamespaceDetails" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetails.Initializer"></a>

```typescript
import { schServiceConnector } from 'rhizo-co-terraform-provider-oci'

const schServiceConnectorSourceMonitoringSourcesNamespaceDetails: schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetails.property.kind">kind</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetails.property.namespaces">namespaces</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces</a>[]</code> | namespaces block. |

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetails.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}.

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetails.property.namespaces"></a>

```typescript
public readonly namespaces: IResolvable | SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces</a>[]

namespaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#namespaces SchServiceConnector#namespaces}

---

### SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces <a name="SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces.Initializer"></a>

```typescript
import { schServiceConnector } from 'rhizo-co-terraform-provider-oci'

const schServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces: schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces.property.metrics">metrics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics</a></code> | metrics block. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#namespace SchServiceConnector#namespace}. |

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces.property.metrics"></a>

```typescript
public readonly metrics: SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics</a>

metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#metrics SchServiceConnector#metrics}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#namespace SchServiceConnector#namespace}.

---

### SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics <a name="SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics.Initializer"></a>

```typescript
import { schServiceConnector } from 'rhizo-co-terraform-provider-oci'

const schServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics: schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics.property.kind">kind</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}. |

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}.

---

### SchServiceConnectorTarget <a name="SchServiceConnectorTarget" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.Initializer"></a>

```typescript
import { schServiceConnector } from 'rhizo-co-terraform-provider-oci'

const schServiceConnectorTarget: schServiceConnector.SchServiceConnectorTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.kind">kind</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.batchRolloverSizeInMbs">batchRolloverSizeInMbs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_rollover_size_in_mbs SchServiceConnector#batch_rollover_size_in_mbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.batchRolloverTimeInMs">batchRolloverTimeInMs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_rollover_time_in_ms SchServiceConnector#batch_rollover_time_in_ms}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.batchSizeInKbs">batchSizeInKbs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_size_in_kbs SchServiceConnector#batch_size_in_kbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.batchSizeInNum">batchSizeInNum</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_size_in_num SchServiceConnector#batch_size_in_num}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.batchTimeInSec">batchTimeInSec</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_time_in_sec SchServiceConnector#batch_time_in_sec}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#bucket SchServiceConnector#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#compartment_id SchServiceConnector#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.dimensions">dimensions</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensions">SchServiceConnectorTargetDimensions</a>[]</code> | dimensions block. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.enableFormattedMessaging">enableFormattedMessaging</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#enable_formatted_messaging SchServiceConnector#enable_formatted_messaging}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.functionId">functionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#function_id SchServiceConnector#function_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.logGroupId">logGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#log_group_id SchServiceConnector#log_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.logSourceIdentifier">logSourceIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#log_source_identifier SchServiceConnector#log_source_identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.metric">metric</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#metric SchServiceConnector#metric}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.metricNamespace">metricNamespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#metric_namespace SchServiceConnector#metric_namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#namespace SchServiceConnector#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.objectNamePrefix">objectNamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#object_name_prefix SchServiceConnector#object_name_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.streamId">streamId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#stream_id SchServiceConnector#stream_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.topicId">topicId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#topic_id SchServiceConnector#topic_id}. |

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}.

---

##### `batchRolloverSizeInMbs`<sup>Optional</sup> <a name="batchRolloverSizeInMbs" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.batchRolloverSizeInMbs"></a>

```typescript
public readonly batchRolloverSizeInMbs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_rollover_size_in_mbs SchServiceConnector#batch_rollover_size_in_mbs}.

---

##### `batchRolloverTimeInMs`<sup>Optional</sup> <a name="batchRolloverTimeInMs" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.batchRolloverTimeInMs"></a>

```typescript
public readonly batchRolloverTimeInMs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_rollover_time_in_ms SchServiceConnector#batch_rollover_time_in_ms}.

---

##### `batchSizeInKbs`<sup>Optional</sup> <a name="batchSizeInKbs" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.batchSizeInKbs"></a>

```typescript
public readonly batchSizeInKbs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_size_in_kbs SchServiceConnector#batch_size_in_kbs}.

---

##### `batchSizeInNum`<sup>Optional</sup> <a name="batchSizeInNum" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.batchSizeInNum"></a>

```typescript
public readonly batchSizeInNum: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_size_in_num SchServiceConnector#batch_size_in_num}.

---

##### `batchTimeInSec`<sup>Optional</sup> <a name="batchTimeInSec" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.batchTimeInSec"></a>

```typescript
public readonly batchTimeInSec: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_time_in_sec SchServiceConnector#batch_time_in_sec}.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#bucket SchServiceConnector#bucket}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#compartment_id SchServiceConnector#compartment_id}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.dimensions"></a>

```typescript
public readonly dimensions: IResolvable | SchServiceConnectorTargetDimensions[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensions">SchServiceConnectorTargetDimensions</a>[]

dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#dimensions SchServiceConnector#dimensions}

---

##### `enableFormattedMessaging`<sup>Optional</sup> <a name="enableFormattedMessaging" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.enableFormattedMessaging"></a>

```typescript
public readonly enableFormattedMessaging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#enable_formatted_messaging SchServiceConnector#enable_formatted_messaging}.

---

##### `functionId`<sup>Optional</sup> <a name="functionId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.functionId"></a>

```typescript
public readonly functionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#function_id SchServiceConnector#function_id}.

---

##### `logGroupId`<sup>Optional</sup> <a name="logGroupId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.logGroupId"></a>

```typescript
public readonly logGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#log_group_id SchServiceConnector#log_group_id}.

---

##### `logSourceIdentifier`<sup>Optional</sup> <a name="logSourceIdentifier" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.logSourceIdentifier"></a>

```typescript
public readonly logSourceIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#log_source_identifier SchServiceConnector#log_source_identifier}.

---

##### `metric`<sup>Optional</sup> <a name="metric" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.metric"></a>

```typescript
public readonly metric: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#metric SchServiceConnector#metric}.

---

##### `metricNamespace`<sup>Optional</sup> <a name="metricNamespace" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.metricNamespace"></a>

```typescript
public readonly metricNamespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#metric_namespace SchServiceConnector#metric_namespace}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#namespace SchServiceConnector#namespace}.

---

##### `objectNamePrefix`<sup>Optional</sup> <a name="objectNamePrefix" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.objectNamePrefix"></a>

```typescript
public readonly objectNamePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#object_name_prefix SchServiceConnector#object_name_prefix}.

---

##### `streamId`<sup>Optional</sup> <a name="streamId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.streamId"></a>

```typescript
public readonly streamId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#stream_id SchServiceConnector#stream_id}.

---

##### `topicId`<sup>Optional</sup> <a name="topicId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.topicId"></a>

```typescript
public readonly topicId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#topic_id SchServiceConnector#topic_id}.

---

### SchServiceConnectorTargetDimensions <a name="SchServiceConnectorTargetDimensions" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensions.Initializer"></a>

```typescript
import { schServiceConnector } from 'rhizo-co-terraform-provider-oci'

const schServiceConnectorTargetDimensions: schServiceConnector.SchServiceConnectorTargetDimensions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensions.property.dimensionValue">dimensionValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue">SchServiceConnectorTargetDimensionsDimensionValue</a></code> | dimension_value block. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensions.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#name SchServiceConnector#name}. |

---

##### `dimensionValue`<sup>Optional</sup> <a name="dimensionValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensions.property.dimensionValue"></a>

```typescript
public readonly dimensionValue: SchServiceConnectorTargetDimensionsDimensionValue;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue">SchServiceConnectorTargetDimensionsDimensionValue</a>

dimension_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#dimension_value SchServiceConnector#dimension_value}

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#name SchServiceConnector#name}.

---

### SchServiceConnectorTargetDimensionsDimensionValue <a name="SchServiceConnectorTargetDimensionsDimensionValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue.Initializer"></a>

```typescript
import { schServiceConnector } from 'rhizo-co-terraform-provider-oci'

const schServiceConnectorTargetDimensionsDimensionValue: schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue.property.kind">kind</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#path SchServiceConnector#path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#value SchServiceConnector#value}. |

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}.

---

##### `path`<sup>Optional</sup> <a name="path" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#path SchServiceConnector#path}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#value SchServiceConnector#value}.

---

### SchServiceConnectorTasks <a name="SchServiceConnectorTasks" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks.Initializer"></a>

```typescript
import { schServiceConnector } from 'rhizo-co-terraform-provider-oci'

const schServiceConnectorTasks: schServiceConnector.SchServiceConnectorTasks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks.property.kind">kind</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks.property.batchSizeInKbs">batchSizeInKbs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_size_in_kbs SchServiceConnector#batch_size_in_kbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks.property.batchTimeInSec">batchTimeInSec</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_time_in_sec SchServiceConnector#batch_time_in_sec}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks.property.condition">condition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#condition SchServiceConnector#condition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks.property.functionId">functionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#function_id SchServiceConnector#function_id}. |

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}.

---

##### `batchSizeInKbs`<sup>Optional</sup> <a name="batchSizeInKbs" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks.property.batchSizeInKbs"></a>

```typescript
public readonly batchSizeInKbs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_size_in_kbs SchServiceConnector#batch_size_in_kbs}.

---

##### `batchTimeInSec`<sup>Optional</sup> <a name="batchTimeInSec" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks.property.batchTimeInSec"></a>

```typescript
public readonly batchTimeInSec: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_time_in_sec SchServiceConnector#batch_time_in_sec}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#condition SchServiceConnector#condition}.

---

##### `functionId`<sup>Optional</sup> <a name="functionId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks.property.functionId"></a>

```typescript
public readonly functionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#function_id SchServiceConnector#function_id}.

---

### SchServiceConnectorTimeouts <a name="SchServiceConnectorTimeouts" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts.Initializer"></a>

```typescript
import { schServiceConnector } from 'rhizo-co-terraform-provider-oci'

const schServiceConnectorTimeouts: schServiceConnector.SchServiceConnectorTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#create SchServiceConnector#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#delete SchServiceConnector#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#update SchServiceConnector#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#create SchServiceConnector#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#delete SchServiceConnector#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#update SchServiceConnector#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SchServiceConnectorSourceCursorOutputReference <a name="SchServiceConnectorSourceCursorOutputReference" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.Initializer"></a>

```typescript
import { schServiceConnector } from 'rhizo-co-terraform-provider-oci'

new schServiceConnector.SchServiceConnectorSourceCursorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.resetKind">resetKind</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKind` <a name="resetKind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.resetKind"></a>

```typescript
public resetKind(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.property.kindInput">kindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursor">SchServiceConnectorSourceCursor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.property.kindInput"></a>

```typescript
public readonly kindInput: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SchServiceConnectorSourceCursor;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursor">SchServiceConnectorSourceCursor</a>

---


### SchServiceConnectorSourceLogSourcesList <a name="SchServiceConnectorSourceLogSourcesList" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.Initializer"></a>

```typescript
import { schServiceConnector } from 'rhizo-co-terraform-provider-oci'

new schServiceConnector.SchServiceConnectorSourceLogSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.get"></a>

```typescript
public get(index: number): SchServiceConnectorSourceLogSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources">SchServiceConnectorSourceLogSources</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SchServiceConnectorSourceLogSources[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources">SchServiceConnectorSourceLogSources</a>[]

---


### SchServiceConnectorSourceLogSourcesOutputReference <a name="SchServiceConnectorSourceLogSourcesOutputReference" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.Initializer"></a>

```typescript
import { schServiceConnector } from 'rhizo-co-terraform-provider-oci'

new schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.resetLogGroupId">resetLogGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.resetLogId">resetLogId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetLogGroupId` <a name="resetLogGroupId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.resetLogGroupId"></a>

```typescript
public resetLogGroupId(): void
```

##### `resetLogId` <a name="resetLogId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.resetLogId"></a>

```typescript
public resetLogId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.logGroupIdInput">logGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.logIdInput">logIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.logGroupId">logGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.logId">logId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources">SchServiceConnectorSourceLogSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `logGroupIdInput`<sup>Optional</sup> <a name="logGroupIdInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.logGroupIdInput"></a>

```typescript
public readonly logGroupIdInput: string;
```

- *Type:* string

---

##### `logIdInput`<sup>Optional</sup> <a name="logIdInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.logIdInput"></a>

```typescript
public readonly logIdInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `logGroupId`<sup>Required</sup> <a name="logGroupId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.logGroupId"></a>

```typescript
public readonly logGroupId: string;
```

- *Type:* string

---

##### `logId`<sup>Required</sup> <a name="logId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.logId"></a>

```typescript
public readonly logId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SchServiceConnectorSourceLogSources;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources">SchServiceConnectorSourceLogSources</a>

---


### SchServiceConnectorSourceMonitoringSourcesList <a name="SchServiceConnectorSourceMonitoringSourcesList" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.Initializer"></a>

```typescript
import { schServiceConnector } from 'rhizo-co-terraform-provider-oci'

new schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.get"></a>

```typescript
public get(index: number): SchServiceConnectorSourceMonitoringSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSources">SchServiceConnectorSourceMonitoringSources</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SchServiceConnectorSourceMonitoringSources[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSources">SchServiceConnectorSourceMonitoringSources</a>[]

---


### SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList <a name="SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer"></a>

```typescript
import { schServiceConnector } from 'rhizo-co-terraform-provider-oci'

new schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.get"></a>

```typescript
public get(index: number): SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces</a>[]

---


### SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference <a name="SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer"></a>

```typescript
import { schServiceConnector } from 'rhizo-co-terraform-provider-oci'

new schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.kindInput">kindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.kindInput"></a>

```typescript
public readonly kindInput: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics</a>

---


### SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference <a name="SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer"></a>

```typescript
import { schServiceConnector } from 'rhizo-co-terraform-provider-oci'

new schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.putMetrics">putMetrics</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetrics` <a name="putMetrics" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.putMetrics"></a>

```typescript
public putMetrics(value: SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.putMetrics.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.metrics">metrics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.metricsInput">metricsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.metrics"></a>

```typescript
public readonly metrics: SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference</a>

---

##### `metricsInput`<sup>Optional</sup> <a name="metricsInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.metricsInput"></a>

```typescript
public readonly metricsInput: SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics</a>

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces</a>

---


### SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference <a name="SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer"></a>

```typescript
import { schServiceConnector } from 'rhizo-co-terraform-provider-oci'

new schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.putNamespaces">putNamespaces</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNamespaces` <a name="putNamespaces" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.putNamespaces"></a>

```typescript
public putNamespaces(value: IResolvable | SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.putNamespaces.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.namespaces">namespaces</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.kindInput">kindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.namespacesInput">namespacesInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetails">SchServiceConnectorSourceMonitoringSourcesNamespaceDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.namespaces"></a>

```typescript
public readonly namespaces: SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList</a>

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.kindInput"></a>

```typescript
public readonly kindInput: string;
```

- *Type:* string

---

##### `namespacesInput`<sup>Optional</sup> <a name="namespacesInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.namespacesInput"></a>

```typescript
public readonly namespacesInput: IResolvable | SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces</a>[]

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SchServiceConnectorSourceMonitoringSourcesNamespaceDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetails">SchServiceConnectorSourceMonitoringSourcesNamespaceDetails</a>

---


### SchServiceConnectorSourceMonitoringSourcesOutputReference <a name="SchServiceConnectorSourceMonitoringSourcesOutputReference" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer"></a>

```typescript
import { schServiceConnector } from 'rhizo-co-terraform-provider-oci'

new schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.putNamespaceDetails">putNamespaceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.resetNamespaceDetails">resetNamespaceDetails</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNamespaceDetails` <a name="putNamespaceDetails" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.putNamespaceDetails"></a>

```typescript
public putNamespaceDetails(value: SchServiceConnectorSourceMonitoringSourcesNamespaceDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.putNamespaceDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetails">SchServiceConnectorSourceMonitoringSourcesNamespaceDetails</a>

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetNamespaceDetails` <a name="resetNamespaceDetails" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.resetNamespaceDetails"></a>

```typescript
public resetNamespaceDetails(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.namespaceDetails">namespaceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.namespaceDetailsInput">namespaceDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetails">SchServiceConnectorSourceMonitoringSourcesNamespaceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSources">SchServiceConnectorSourceMonitoringSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `namespaceDetails`<sup>Required</sup> <a name="namespaceDetails" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.namespaceDetails"></a>

```typescript
public readonly namespaceDetails: SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `namespaceDetailsInput`<sup>Optional</sup> <a name="namespaceDetailsInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.namespaceDetailsInput"></a>

```typescript
public readonly namespaceDetailsInput: SchServiceConnectorSourceMonitoringSourcesNamespaceDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetails">SchServiceConnectorSourceMonitoringSourcesNamespaceDetails</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SchServiceConnectorSourceMonitoringSources;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSources">SchServiceConnectorSourceMonitoringSources</a>

---


### SchServiceConnectorSourceOutputReference <a name="SchServiceConnectorSourceOutputReference" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.Initializer"></a>

```typescript
import { schServiceConnector } from 'rhizo-co-terraform-provider-oci'

new schServiceConnector.SchServiceConnectorSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.putCursor">putCursor</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.putLogSources">putLogSources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.putMonitoringSources">putMonitoringSources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resetConfigMap">resetConfigMap</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resetCursor">resetCursor</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resetLogSources">resetLogSources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resetMonitoringSources">resetMonitoringSources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resetPluginName">resetPluginName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resetStreamId">resetStreamId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCursor` <a name="putCursor" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.putCursor"></a>

```typescript
public putCursor(value: SchServiceConnectorSourceCursor): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.putCursor.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursor">SchServiceConnectorSourceCursor</a>

---

##### `putLogSources` <a name="putLogSources" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.putLogSources"></a>

```typescript
public putLogSources(value: IResolvable | SchServiceConnectorSourceLogSources[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.putLogSources.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources">SchServiceConnectorSourceLogSources</a>[]

---

##### `putMonitoringSources` <a name="putMonitoringSources" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.putMonitoringSources"></a>

```typescript
public putMonitoringSources(value: IResolvable | SchServiceConnectorSourceMonitoringSources[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.putMonitoringSources.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSources">SchServiceConnectorSourceMonitoringSources</a>[]

---

##### `resetConfigMap` <a name="resetConfigMap" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resetConfigMap"></a>

```typescript
public resetConfigMap(): void
```

##### `resetCursor` <a name="resetCursor" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resetCursor"></a>

```typescript
public resetCursor(): void
```

##### `resetLogSources` <a name="resetLogSources" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resetLogSources"></a>

```typescript
public resetLogSources(): void
```

##### `resetMonitoringSources` <a name="resetMonitoringSources" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resetMonitoringSources"></a>

```typescript
public resetMonitoringSources(): void
```

##### `resetPluginName` <a name="resetPluginName" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resetPluginName"></a>

```typescript
public resetPluginName(): void
```

##### `resetStreamId` <a name="resetStreamId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resetStreamId"></a>

```typescript
public resetStreamId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.cursor">cursor</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference">SchServiceConnectorSourceCursorOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.logSources">logSources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList">SchServiceConnectorSourceLogSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.monitoringSources">monitoringSources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList">SchServiceConnectorSourceMonitoringSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.configMapInput">configMapInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.cursorInput">cursorInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursor">SchServiceConnectorSourceCursor</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.kindInput">kindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.logSourcesInput">logSourcesInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources">SchServiceConnectorSourceLogSources</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.monitoringSourcesInput">monitoringSourcesInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSources">SchServiceConnectorSourceMonitoringSources</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.pluginNameInput">pluginNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.streamIdInput">streamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.configMap">configMap</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.pluginName">pluginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.streamId">streamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource">SchServiceConnectorSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cursor`<sup>Required</sup> <a name="cursor" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.cursor"></a>

```typescript
public readonly cursor: SchServiceConnectorSourceCursorOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference">SchServiceConnectorSourceCursorOutputReference</a>

---

##### `logSources`<sup>Required</sup> <a name="logSources" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.logSources"></a>

```typescript
public readonly logSources: SchServiceConnectorSourceLogSourcesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList">SchServiceConnectorSourceLogSourcesList</a>

---

##### `monitoringSources`<sup>Required</sup> <a name="monitoringSources" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.monitoringSources"></a>

```typescript
public readonly monitoringSources: SchServiceConnectorSourceMonitoringSourcesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList">SchServiceConnectorSourceMonitoringSourcesList</a>

---

##### `configMapInput`<sup>Optional</sup> <a name="configMapInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.configMapInput"></a>

```typescript
public readonly configMapInput: string;
```

- *Type:* string

---

##### `cursorInput`<sup>Optional</sup> <a name="cursorInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.cursorInput"></a>

```typescript
public readonly cursorInput: SchServiceConnectorSourceCursor;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursor">SchServiceConnectorSourceCursor</a>

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.kindInput"></a>

```typescript
public readonly kindInput: string;
```

- *Type:* string

---

##### `logSourcesInput`<sup>Optional</sup> <a name="logSourcesInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.logSourcesInput"></a>

```typescript
public readonly logSourcesInput: IResolvable | SchServiceConnectorSourceLogSources[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources">SchServiceConnectorSourceLogSources</a>[]

---

##### `monitoringSourcesInput`<sup>Optional</sup> <a name="monitoringSourcesInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.monitoringSourcesInput"></a>

```typescript
public readonly monitoringSourcesInput: IResolvable | SchServiceConnectorSourceMonitoringSources[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSources">SchServiceConnectorSourceMonitoringSources</a>[]

---

##### `pluginNameInput`<sup>Optional</sup> <a name="pluginNameInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.pluginNameInput"></a>

```typescript
public readonly pluginNameInput: string;
```

- *Type:* string

---

##### `streamIdInput`<sup>Optional</sup> <a name="streamIdInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.streamIdInput"></a>

```typescript
public readonly streamIdInput: string;
```

- *Type:* string

---

##### `configMap`<sup>Required</sup> <a name="configMap" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.configMap"></a>

```typescript
public readonly configMap: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `pluginName`<sup>Required</sup> <a name="pluginName" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.pluginName"></a>

```typescript
public readonly pluginName: string;
```

- *Type:* string

---

##### `streamId`<sup>Required</sup> <a name="streamId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.streamId"></a>

```typescript
public readonly streamId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SchServiceConnectorSource;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource">SchServiceConnectorSource</a>

---


### SchServiceConnectorTargetDimensionsDimensionValueOutputReference <a name="SchServiceConnectorTargetDimensionsDimensionValueOutputReference" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.Initializer"></a>

```typescript
import { schServiceConnector } from 'rhizo-co-terraform-provider-oci'

new schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetValue` <a name="resetValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.kindInput">kindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue">SchServiceConnectorTargetDimensionsDimensionValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.kindInput"></a>

```typescript
public readonly kindInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SchServiceConnectorTargetDimensionsDimensionValue;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue">SchServiceConnectorTargetDimensionsDimensionValue</a>

---


### SchServiceConnectorTargetDimensionsList <a name="SchServiceConnectorTargetDimensionsList" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.Initializer"></a>

```typescript
import { schServiceConnector } from 'rhizo-co-terraform-provider-oci'

new schServiceConnector.SchServiceConnectorTargetDimensionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.get"></a>

```typescript
public get(index: number): SchServiceConnectorTargetDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensions">SchServiceConnectorTargetDimensions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SchServiceConnectorTargetDimensions[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensions">SchServiceConnectorTargetDimensions</a>[]

---


### SchServiceConnectorTargetDimensionsOutputReference <a name="SchServiceConnectorTargetDimensionsOutputReference" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.Initializer"></a>

```typescript
import { schServiceConnector } from 'rhizo-co-terraform-provider-oci'

new schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.putDimensionValue">putDimensionValue</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.resetDimensionValue">resetDimensionValue</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDimensionValue` <a name="putDimensionValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.putDimensionValue"></a>

```typescript
public putDimensionValue(value: SchServiceConnectorTargetDimensionsDimensionValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.putDimensionValue.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue">SchServiceConnectorTargetDimensionsDimensionValue</a>

---

##### `resetDimensionValue` <a name="resetDimensionValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.resetDimensionValue"></a>

```typescript
public resetDimensionValue(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.dimensionValue">dimensionValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference">SchServiceConnectorTargetDimensionsDimensionValueOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.dimensionValueInput">dimensionValueInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue">SchServiceConnectorTargetDimensionsDimensionValue</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensions">SchServiceConnectorTargetDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dimensionValue`<sup>Required</sup> <a name="dimensionValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.dimensionValue"></a>

```typescript
public readonly dimensionValue: SchServiceConnectorTargetDimensionsDimensionValueOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference">SchServiceConnectorTargetDimensionsDimensionValueOutputReference</a>

---

##### `dimensionValueInput`<sup>Optional</sup> <a name="dimensionValueInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.dimensionValueInput"></a>

```typescript
public readonly dimensionValueInput: SchServiceConnectorTargetDimensionsDimensionValue;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue">SchServiceConnectorTargetDimensionsDimensionValue</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SchServiceConnectorTargetDimensions;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensions">SchServiceConnectorTargetDimensions</a>

---


### SchServiceConnectorTargetOutputReference <a name="SchServiceConnectorTargetOutputReference" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.Initializer"></a>

```typescript
import { schServiceConnector } from 'rhizo-co-terraform-provider-oci'

new schServiceConnector.SchServiceConnectorTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.putDimensions">putDimensions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetBatchRolloverSizeInMbs">resetBatchRolloverSizeInMbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetBatchRolloverTimeInMs">resetBatchRolloverTimeInMs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetBatchSizeInKbs">resetBatchSizeInKbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetBatchSizeInNum">resetBatchSizeInNum</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetBatchTimeInSec">resetBatchTimeInSec</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetEnableFormattedMessaging">resetEnableFormattedMessaging</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetFunctionId">resetFunctionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetLogGroupId">resetLogGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetLogSourceIdentifier">resetLogSourceIdentifier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetMetric">resetMetric</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetMetricNamespace">resetMetricNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetObjectNamePrefix">resetObjectNamePrefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetStreamId">resetStreamId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetTopicId">resetTopicId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDimensions` <a name="putDimensions" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.putDimensions"></a>

```typescript
public putDimensions(value: IResolvable | SchServiceConnectorTargetDimensions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.putDimensions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensions">SchServiceConnectorTargetDimensions</a>[]

---

##### `resetBatchRolloverSizeInMbs` <a name="resetBatchRolloverSizeInMbs" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetBatchRolloverSizeInMbs"></a>

```typescript
public resetBatchRolloverSizeInMbs(): void
```

##### `resetBatchRolloverTimeInMs` <a name="resetBatchRolloverTimeInMs" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetBatchRolloverTimeInMs"></a>

```typescript
public resetBatchRolloverTimeInMs(): void
```

##### `resetBatchSizeInKbs` <a name="resetBatchSizeInKbs" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetBatchSizeInKbs"></a>

```typescript
public resetBatchSizeInKbs(): void
```

##### `resetBatchSizeInNum` <a name="resetBatchSizeInNum" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetBatchSizeInNum"></a>

```typescript
public resetBatchSizeInNum(): void
```

##### `resetBatchTimeInSec` <a name="resetBatchTimeInSec" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetBatchTimeInSec"></a>

```typescript
public resetBatchTimeInSec(): void
```

##### `resetBucket` <a name="resetBucket" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetDimensions` <a name="resetDimensions" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetDimensions"></a>

```typescript
public resetDimensions(): void
```

##### `resetEnableFormattedMessaging` <a name="resetEnableFormattedMessaging" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetEnableFormattedMessaging"></a>

```typescript
public resetEnableFormattedMessaging(): void
```

##### `resetFunctionId` <a name="resetFunctionId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetFunctionId"></a>

```typescript
public resetFunctionId(): void
```

##### `resetLogGroupId` <a name="resetLogGroupId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetLogGroupId"></a>

```typescript
public resetLogGroupId(): void
```

##### `resetLogSourceIdentifier` <a name="resetLogSourceIdentifier" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetLogSourceIdentifier"></a>

```typescript
public resetLogSourceIdentifier(): void
```

##### `resetMetric` <a name="resetMetric" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetMetric"></a>

```typescript
public resetMetric(): void
```

##### `resetMetricNamespace` <a name="resetMetricNamespace" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetMetricNamespace"></a>

```typescript
public resetMetricNamespace(): void
```

##### `resetNamespace` <a name="resetNamespace" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetObjectNamePrefix` <a name="resetObjectNamePrefix" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetObjectNamePrefix"></a>

```typescript
public resetObjectNamePrefix(): void
```

##### `resetStreamId` <a name="resetStreamId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetStreamId"></a>

```typescript
public resetStreamId(): void
```

##### `resetTopicId` <a name="resetTopicId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetTopicId"></a>

```typescript
public resetTopicId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList">SchServiceConnectorTargetDimensionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchRolloverSizeInMbsInput">batchRolloverSizeInMbsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchRolloverTimeInMsInput">batchRolloverTimeInMsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchSizeInKbsInput">batchSizeInKbsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchSizeInNumInput">batchSizeInNumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchTimeInSecInput">batchTimeInSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensions">SchServiceConnectorTargetDimensions</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.enableFormattedMessagingInput">enableFormattedMessagingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.functionIdInput">functionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.kindInput">kindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.logGroupIdInput">logGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.logSourceIdentifierInput">logSourceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.metricInput">metricInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.metricNamespaceInput">metricNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.objectNamePrefixInput">objectNamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.streamIdInput">streamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.topicIdInput">topicIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchRolloverSizeInMbs">batchRolloverSizeInMbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchRolloverTimeInMs">batchRolloverTimeInMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchSizeInKbs">batchSizeInKbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchSizeInNum">batchSizeInNum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchTimeInSec">batchTimeInSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.enableFormattedMessaging">enableFormattedMessaging</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.functionId">functionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.logGroupId">logGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.logSourceIdentifier">logSourceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.metric">metric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.metricNamespace">metricNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.objectNamePrefix">objectNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.streamId">streamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.topicId">topicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget">SchServiceConnectorTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.dimensions"></a>

```typescript
public readonly dimensions: SchServiceConnectorTargetDimensionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList">SchServiceConnectorTargetDimensionsList</a>

---

##### `batchRolloverSizeInMbsInput`<sup>Optional</sup> <a name="batchRolloverSizeInMbsInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchRolloverSizeInMbsInput"></a>

```typescript
public readonly batchRolloverSizeInMbsInput: number;
```

- *Type:* number

---

##### `batchRolloverTimeInMsInput`<sup>Optional</sup> <a name="batchRolloverTimeInMsInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchRolloverTimeInMsInput"></a>

```typescript
public readonly batchRolloverTimeInMsInput: number;
```

- *Type:* number

---

##### `batchSizeInKbsInput`<sup>Optional</sup> <a name="batchSizeInKbsInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchSizeInKbsInput"></a>

```typescript
public readonly batchSizeInKbsInput: number;
```

- *Type:* number

---

##### `batchSizeInNumInput`<sup>Optional</sup> <a name="batchSizeInNumInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchSizeInNumInput"></a>

```typescript
public readonly batchSizeInNumInput: number;
```

- *Type:* number

---

##### `batchTimeInSecInput`<sup>Optional</sup> <a name="batchTimeInSecInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchTimeInSecInput"></a>

```typescript
public readonly batchTimeInSecInput: number;
```

- *Type:* number

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.dimensionsInput"></a>

```typescript
public readonly dimensionsInput: IResolvable | SchServiceConnectorTargetDimensions[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensions">SchServiceConnectorTargetDimensions</a>[]

---

##### `enableFormattedMessagingInput`<sup>Optional</sup> <a name="enableFormattedMessagingInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.enableFormattedMessagingInput"></a>

```typescript
public readonly enableFormattedMessagingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `functionIdInput`<sup>Optional</sup> <a name="functionIdInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.functionIdInput"></a>

```typescript
public readonly functionIdInput: string;
```

- *Type:* string

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.kindInput"></a>

```typescript
public readonly kindInput: string;
```

- *Type:* string

---

##### `logGroupIdInput`<sup>Optional</sup> <a name="logGroupIdInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.logGroupIdInput"></a>

```typescript
public readonly logGroupIdInput: string;
```

- *Type:* string

---

##### `logSourceIdentifierInput`<sup>Optional</sup> <a name="logSourceIdentifierInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.logSourceIdentifierInput"></a>

```typescript
public readonly logSourceIdentifierInput: string;
```

- *Type:* string

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.metricInput"></a>

```typescript
public readonly metricInput: string;
```

- *Type:* string

---

##### `metricNamespaceInput`<sup>Optional</sup> <a name="metricNamespaceInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.metricNamespaceInput"></a>

```typescript
public readonly metricNamespaceInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `objectNamePrefixInput`<sup>Optional</sup> <a name="objectNamePrefixInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.objectNamePrefixInput"></a>

```typescript
public readonly objectNamePrefixInput: string;
```

- *Type:* string

---

##### `streamIdInput`<sup>Optional</sup> <a name="streamIdInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.streamIdInput"></a>

```typescript
public readonly streamIdInput: string;
```

- *Type:* string

---

##### `topicIdInput`<sup>Optional</sup> <a name="topicIdInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.topicIdInput"></a>

```typescript
public readonly topicIdInput: string;
```

- *Type:* string

---

##### `batchRolloverSizeInMbs`<sup>Required</sup> <a name="batchRolloverSizeInMbs" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchRolloverSizeInMbs"></a>

```typescript
public readonly batchRolloverSizeInMbs: number;
```

- *Type:* number

---

##### `batchRolloverTimeInMs`<sup>Required</sup> <a name="batchRolloverTimeInMs" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchRolloverTimeInMs"></a>

```typescript
public readonly batchRolloverTimeInMs: number;
```

- *Type:* number

---

##### `batchSizeInKbs`<sup>Required</sup> <a name="batchSizeInKbs" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchSizeInKbs"></a>

```typescript
public readonly batchSizeInKbs: number;
```

- *Type:* number

---

##### `batchSizeInNum`<sup>Required</sup> <a name="batchSizeInNum" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchSizeInNum"></a>

```typescript
public readonly batchSizeInNum: number;
```

- *Type:* number

---

##### `batchTimeInSec`<sup>Required</sup> <a name="batchTimeInSec" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchTimeInSec"></a>

```typescript
public readonly batchTimeInSec: number;
```

- *Type:* number

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `enableFormattedMessaging`<sup>Required</sup> <a name="enableFormattedMessaging" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.enableFormattedMessaging"></a>

```typescript
public readonly enableFormattedMessaging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `functionId`<sup>Required</sup> <a name="functionId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.functionId"></a>

```typescript
public readonly functionId: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `logGroupId`<sup>Required</sup> <a name="logGroupId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.logGroupId"></a>

```typescript
public readonly logGroupId: string;
```

- *Type:* string

---

##### `logSourceIdentifier`<sup>Required</sup> <a name="logSourceIdentifier" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.logSourceIdentifier"></a>

```typescript
public readonly logSourceIdentifier: string;
```

- *Type:* string

---

##### `metric`<sup>Required</sup> <a name="metric" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.metric"></a>

```typescript
public readonly metric: string;
```

- *Type:* string

---

##### `metricNamespace`<sup>Required</sup> <a name="metricNamespace" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.metricNamespace"></a>

```typescript
public readonly metricNamespace: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `objectNamePrefix`<sup>Required</sup> <a name="objectNamePrefix" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.objectNamePrefix"></a>

```typescript
public readonly objectNamePrefix: string;
```

- *Type:* string

---

##### `streamId`<sup>Required</sup> <a name="streamId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.streamId"></a>

```typescript
public readonly streamId: string;
```

- *Type:* string

---

##### `topicId`<sup>Required</sup> <a name="topicId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.topicId"></a>

```typescript
public readonly topicId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SchServiceConnectorTarget;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget">SchServiceConnectorTarget</a>

---


### SchServiceConnectorTasksList <a name="SchServiceConnectorTasksList" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.Initializer"></a>

```typescript
import { schServiceConnector } from 'rhizo-co-terraform-provider-oci'

new schServiceConnector.SchServiceConnectorTasksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.get"></a>

```typescript
public get(index: number): SchServiceConnectorTasksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks">SchServiceConnectorTasks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SchServiceConnectorTasks[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks">SchServiceConnectorTasks</a>[]

---


### SchServiceConnectorTasksOutputReference <a name="SchServiceConnectorTasksOutputReference" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.Initializer"></a>

```typescript
import { schServiceConnector } from 'rhizo-co-terraform-provider-oci'

new schServiceConnector.SchServiceConnectorTasksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.resetBatchSizeInKbs">resetBatchSizeInKbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.resetBatchTimeInSec">resetBatchTimeInSec</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.resetFunctionId">resetFunctionId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBatchSizeInKbs` <a name="resetBatchSizeInKbs" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.resetBatchSizeInKbs"></a>

```typescript
public resetBatchSizeInKbs(): void
```

##### `resetBatchTimeInSec` <a name="resetBatchTimeInSec" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.resetBatchTimeInSec"></a>

```typescript
public resetBatchTimeInSec(): void
```

##### `resetCondition` <a name="resetCondition" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetFunctionId` <a name="resetFunctionId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.resetFunctionId"></a>

```typescript
public resetFunctionId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.batchSizeInKbsInput">batchSizeInKbsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.batchTimeInSecInput">batchTimeInSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.conditionInput">conditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.functionIdInput">functionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.kindInput">kindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.batchSizeInKbs">batchSizeInKbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.batchTimeInSec">batchTimeInSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.functionId">functionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks">SchServiceConnectorTasks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `batchSizeInKbsInput`<sup>Optional</sup> <a name="batchSizeInKbsInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.batchSizeInKbsInput"></a>

```typescript
public readonly batchSizeInKbsInput: number;
```

- *Type:* number

---

##### `batchTimeInSecInput`<sup>Optional</sup> <a name="batchTimeInSecInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.batchTimeInSecInput"></a>

```typescript
public readonly batchTimeInSecInput: number;
```

- *Type:* number

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.conditionInput"></a>

```typescript
public readonly conditionInput: string;
```

- *Type:* string

---

##### `functionIdInput`<sup>Optional</sup> <a name="functionIdInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.functionIdInput"></a>

```typescript
public readonly functionIdInput: string;
```

- *Type:* string

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.kindInput"></a>

```typescript
public readonly kindInput: string;
```

- *Type:* string

---

##### `batchSizeInKbs`<sup>Required</sup> <a name="batchSizeInKbs" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.batchSizeInKbs"></a>

```typescript
public readonly batchSizeInKbs: number;
```

- *Type:* number

---

##### `batchTimeInSec`<sup>Required</sup> <a name="batchTimeInSec" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.batchTimeInSec"></a>

```typescript
public readonly batchTimeInSec: number;
```

- *Type:* number

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `functionId`<sup>Required</sup> <a name="functionId" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.functionId"></a>

```typescript
public readonly functionId: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SchServiceConnectorTasks;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks">SchServiceConnectorTasks</a>

---


### SchServiceConnectorTimeoutsOutputReference <a name="SchServiceConnectorTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.Initializer"></a>

```typescript
import { schServiceConnector } from 'rhizo-co-terraform-provider-oci'

new schServiceConnector.SchServiceConnectorTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts">SchServiceConnectorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SchServiceConnectorTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts">SchServiceConnectorTimeouts</a>

---



